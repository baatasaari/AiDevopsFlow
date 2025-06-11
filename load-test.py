#!/usr/bin/env python3
"""
API Infrastructure Load Tester for LLM-backed APIs
Focus on testing your API layer, not the underlying LLM performance
"""

import asyncio
import aiohttp
import argparse
import json
import time
import random
import statistics
import psutil
import gc
from dataclasses import dataclass, field
from typing import List, Dict, Any, Optional, Tuple, Set
from datetime import datetime, timedelta
import uuid
import logging
from concurrent.futures import ThreadPoolExecutor
import threading
from collections import defaultdict, deque
import hashlib

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@dataclass
class APITestResult:
    """API-focused test result metrics"""
    timestamp: float
    request_id: str
    user_id: int
    
    # Core API metrics
    total_latency: float  # End-to-end API response time
    connection_time: float = 0.0  # Time to establish connection
    first_byte_time: float = 0.0  # TTFB
    download_time: float = 0.0  # Time to download response
    
    # HTTP metrics
    status_code: int = 0
    request_size: int = 0
    response_size: int = 0
    http_version: str = ""
    
    # API-specific metrics
    auth_time: float = 0.0  # Authentication/authorization time
    validation_time: float = 0.0  # Request validation time
    queue_time: float = 0.0  # Time spent in API queue
    processing_time: float = 0.0  # Actual processing time
    
    # Infrastructure metrics
    connection_reused: bool = False
    ssl_handshake_time: float = 0.0
    dns_resolution_time: float = 0.0
    
    # Error tracking
    error_type: str = ""  # connection, timeout, validation, processing, etc.
    error_message: str = ""
    retry_count: int = 0
    
    # Business logic metrics
    cache_hit: bool = False
    rate_limited: bool = False
    circuit_breaker_open: bool = False
    
    # Custom headers for tracking API behavior
    server_id: str = ""
    load_balancer_route: str = ""
    api_version: str = ""

@dataclass 
class LoadTestConfig:
    """Configuration focused on API infrastructure testing"""
    base_url: str
    api_key: str
    
    # Load characteristics
    concurrent_users: int = 10
    requests_per_user: int = 10
    test_duration_minutes: int = 5
    ramp_up_seconds: int = 30
    ramp_down_seconds: int = 30
    
    # API-specific testing
    endpoint_path: str = "/v1/chat/completions"
    test_multiple_endpoints: bool = True
    endpoints_to_test: List[str] = field(default_factory=lambda: [
        "/v1/chat/completions",
        "/v1/completions", 
        "/v1/embeddings",
        "/health",
        "/metrics"
    ])
    
    # Connection testing
    connection_pool_size: int = 100
    max_connections_per_host: int = 50
    keep_alive_timeout: int = 30
    test_connection_reuse: bool = True
    
    # Request patterns
    burst_testing: bool = True
    burst_size: int = 20
    burst_interval_seconds: int = 60
    
    # API behavior testing
    test_different_auth_methods: bool = True
    test_malformed_requests: bool = True
    malformed_request_percentage: float = 0.05
    
    # Infrastructure testing
    test_different_payload_sizes: bool = True
    min_payload_kb: int = 1
    max_payload_kb: int = 100
    
    # Failure simulation
    simulate_client_failures: bool = True
    client_timeout_percentage: float = 0.02
    connection_drop_percentage: float = 0.01
    
    # Monitoring
    collect_system_metrics: bool = True
    monitor_memory_usage: bool = True
    track_connection_pool: bool = True
    
    # Output
    scenario_name: str = "api_infrastructure_test"
    output_file: str = "api_load_test_results.json"
    real_time_dashboard: bool = True

class PayloadGenerator:
    """Generate various payloads to test API handling"""
    
    def __init__(self):
        self.templates = {
            "chat_completion": {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": ""}],
                "max_tokens": 100,
                "temperature": 0.7
            },
            "completion": {
                "model": "text-davinci-003", 
                "prompt": "",
                "max_tokens": 100,
                "temperature": 0.7
            },
            "embedding": {
                "model": "text-embedding-ada-002",
                "input": ""
            }
        }
    
    def generate_payload(self, endpoint: str, size_kb: int = 5) -> Dict[str, Any]:
        """Generate payload of specified size for endpoint"""
        if "chat" in endpoint:
            template = self.templates["chat_completion"].copy()
            content = self._generate_content(size_kb)
            template["messages"][0]["content"] = content
        elif "completion" in endpoint:
            template = self.templates["completion"].copy()
            template["prompt"] = self._generate_content(size_kb)
        elif "embedding" in endpoint:
            template = self.templates["embedding"].copy()
            template["input"] = self._generate_content(size_kb)
        else:
            # Generic payload
            return {"data": self._generate_content(size_kb)}
        
        return template
    
    def generate_malformed_payload(self, endpoint: str) -> Dict[str, Any]:
        """Generate malformed payload to test API validation"""
        malformed_types = [
            {"model": None},  # Missing required field
            {"model": 123},   # Wrong type
            {"invalid_field": "test", "model": "gpt-3.5-turbo"},  # Extra field
            {},  # Empty payload
            {"model": "gpt-3.5-turbo", "max_tokens": -1},  # Invalid value
        ]
        return random.choice(malformed_types)
    
    def _generate_content(self, size_kb: int) -> str:
        """Generate text content of approximately specified size"""
        # Average 5 chars per word, ~1000 chars per KB
        target_chars = size_kb * 1000
        words = []
        current_size = 0
        
        sample_words = [
            "artificial", "intelligence", "machine", "learning", "neural", "network",
            "algorithm", "data", "processing", "analysis", "automation", "technology",
            "system", "performance", "optimization", "scalability", "reliability"
        ]
        
        while current_size < target_chars:
            word = random.choice(sample_words)
            words.append(word)
            current_size += len(word) + 1  # +1 for space
        
        return " ".join(words)

class ConnectionPoolMonitor:
    """Monitor connection pool health and performance"""
    
    def __init__(self):
        self.pool_stats = {
            "active_connections": 0,
            "idle_connections": 0,
            "failed_connections": 0,
            "connection_reuse_rate": 0.0,
            "avg_connection_time": 0.0
        }
        self.connection_times = deque(maxlen=1000)
        self.reuse_count = 0
        self.total_connections = 0
        
    def record_connection(self, connection_time: float, reused: bool):
        """Record connection metrics"""
        self.connection_times.append(connection_time)
        self.total_connections += 1
        if reused:
            self.reuse_count += 1
            
        # Update stats
        if self.connection_times:
            self.pool_stats["avg_connection_time"] = statistics.mean(self.connection_times)
        
        if self.total_connections > 0:
            self.pool_stats["connection_reuse_rate"] = self.reuse_count / self.total_connections

class SystemMetricsCollector:
    """Collect system-level metrics during testing"""
    
    def __init__(self):
        self.metrics_history = []
        self.collection_interval = 5.0  # seconds
        self.collecting = False
        self._collection_task = None
        
    async def start_collection(self):
        """Start collecting system metrics"""
        self.collecting = True
        self._collection_task = asyncio.create_task(self._collect_loop())
        
    async def stop_collection(self):
        """Stop collecting system metrics"""
        self.collecting = False
        if self._collection_task:
            self._collection_task.cancel()
            try:
                await self._collection_task
            except asyncio.CancelledError:
                pass
    
    async def _collect_loop(self):
        """Main collection loop"""
        while self.collecting:
            try:
                metrics = {
                    "timestamp": time.time(),
                    "cpu_percent": psutil.cpu_percent(interval=1),
                    "memory_percent": psutil.virtual_memory().percent,
                    "memory_used_mb": psutil.virtual_memory().used / 1024 / 1024,
                    "network_connections": len(psutil.net_connections()),
                    "open_files": len(psutil.Process().open_files()) if hasattr(psutil.Process(), 'open_files') else 0
                }
                self.metrics_history.append(metrics)
                await asyncio.sleep(self.collection_interval)
            except Exception as e:
                logger.warning(f"Error collecting system metrics: {e}")

class APIInfrastructureTester:
    """Main tester focused on API infrastructure performance"""
    
    def __init__(self, config: LoadTestConfig):
        self.config = config
        self.payload_generator = PayloadGenerator()
        self.connection_monitor = ConnectionPoolMonitor()
        self.system_monitor = SystemMetricsCollector()
        self.results: List[APITestResult] = []
        self.session: Optional[aiohttp.ClientSession] = None
        self.active_connections = 0
        self.endpoint_stats = defaultdict(list)
        self.real_time_stats = {
            "requests_per_second": deque(maxlen=60),
            "error_rate": deque(maxlen=60),
            "avg_latency": deque(maxlen=60)
        }
        
    async def __aenter__(self):
        # Configure connector for infrastructure testing
        connector = aiohttp.TCPConnector(
            limit=self.config.connection_pool_size,
            limit_per_host=self.config.max_connections_per_host,
            keepalive_timeout=self.config.keep_alive_timeout,
            enable_cleanup_closed=True,
            force_close=not self.config.test_connection_reuse
        )
        
        # Configure timeout for API testing
        timeout = aiohttp.ClientTimeout(
            total=300,
            connect=30,
            sock_read=60
        )
        
        headers = {
            'Authorization': f'Bearer {self.config.api_key}',
            'Content-Type': 'application/json',
            'User-Agent': f'API-LoadTester/{self.config.scenario_name}',
            'X-Test-Session': str(uuid.uuid4())
        }
        
        self.session = aiohttp.ClientSession(
            connector=connector,
            timeout=timeout,
            headers=headers
        )
        
        if self.config.collect_system_metrics:
            await self.system_monitor.start_collection()
            
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
        
        if self.config.collect_system_metrics:
            await self.system_monitor.stop_collection()
    
    def select_endpoint(self) -> str:
        """Select endpoint for testing"""
        if self.config.test_multiple_endpoints:
            return random.choice(self.config.endpoints_to_test)
        return self.config.endpoint_path
    
    def should_create_malformed_request(self) -> bool:
        """Determine if this request should be malformed"""
        return (self.config.test_malformed_requests and 
                random.random() < self.config.malformed_request_percentage)
    
    def should_simulate_client_failure(self) -> Tuple[bool, str]:
        """Determine if we should simulate a client-side failure"""
        if not self.config.simulate_client_failures:
            return False, ""
        
        rand = random.random()
        if rand < self.config.client_timeout_percentage:
            return True, "client_timeout"
        elif rand < self.config.client_timeout_percentage + self.config.connection_drop_percentage:
            return True, "connection_drop"
        
        return False, ""
    
    async def make_api_request(self, user_id: int, request_num: int) -> APITestResult:
        """Make single API request with detailed infrastructure metrics"""
        request_id = f"{user_id}-{request_num}-{uuid.uuid4().hex[:8]}"
        start_time = time.time()
        
        # Select endpoint and generate payload
        endpoint = self.select_endpoint()
        full_url = f"{self.config.base_url.rstrip('/')}{endpoint}"
        
        # Generate payload
        if self.should_create_malformed_request():
            payload = self.payload_generator.generate_malformed_payload(endpoint)
            expected_error = True
        else:
            payload_size = random.randint(self.config.min_payload_kb, self.config.max_payload_kb)
            payload = self.payload_generator.generate_payload(endpoint, payload_size)
            expected_error = False
        
        # Check for simulated client failures
        should_fail, failure_type = self.should_simulate_client_failure()
        
        result = APITestResult(
            timestamp=start_time,
            request_id=request_id,
            user_id=user_id,
            total_latency=0,
            request_size=len(json.dumps(payload))
        )
        
        connection_start = time.time()
        
        try:
            # Simulate client timeout
            if should_fail and failure_type == "client_timeout":
                await asyncio.sleep(0.1)  # Simulate slow client
                raise asyncio.TimeoutError("Simulated client timeout")
            
            # Track connection establishment
            async with self.session.post(full_url, json=payload) as response:
                first_byte_time = time.time()
                result.first_byte_time = first_byte_time - start_time
                
                # Read response
                response_text = await response.text()
                end_time = time.time()
                
                # Calculate timing metrics
                result.total_latency = end_time - start_time
                result.download_time = end_time - first_byte_time
                result.connection_time = first_byte_time - connection_start
                
                # HTTP metrics
                result.status_code = response.status
                result.response_size = len(response_text)
                result.http_version = str(response.version)
                
                # Extract API-specific headers
                result.server_id = response.headers.get('X-Server-ID', '')
                result.load_balancer_route = response.headers.get('X-LB-Route', '')
                result.api_version = response.headers.get('X-API-Version', '')
                
                # Check for API-specific timing headers
                if 'X-Processing-Time' in response.headers:
                    result.processing_time = float(response.headers['X-Processing-Time'])
                
                if 'X-Queue-Time' in response.headers:
                    result.queue_time = float(response.headers['X-Queue-Time'])
                
                # Check cache status
                result.cache_hit = response.headers.get('X-Cache', '').lower() == 'hit'
                
                # Connection reuse detection
                result.connection_reused = 'Connection' not in response.headers or \
                                         response.headers.get('Connection', '').lower() == 'keep-alive'
                
                # Record connection metrics
                self.connection_monitor.record_connection(
                    result.connection_time, 
                    result.connection_reused
                )
                
                # Rate limiting detection
                if response.status == 429:
                    result.rate_limited = True
                    result.error_type = "rate_limited"
                elif response.status >= 400:
                    if expected_error:
                        result.error_type = "expected_validation_error"
                    else:
                        result.error_type = f"http_{response.status}"
                        result.error_message = response_text[:200]
                
        except asyncio.TimeoutError as e:
            result.total_latency = time.time() - start_time
            result.error_type = "timeout"
            result.error_message = str(e)
            result.status_code = 408
            
        except aiohttp.ClientConnectionError as e:
            result.total_latency = time.time() - start_time
            result.error_type = "connection_error"
            result.error_message = str(e)
            result.status_code = 0
            
        except Exception as e:
            result.total_latency = time.time() - start_time
            result.error_type = "client_error"
            result.error_message = str(e)
            result.status_code = 500
        
        # Update real-time stats
        self._update_real_time_stats(result)
        
        return result
    
    def _update_real_time_stats(self, result: APITestResult):
        """Update real-time statistics"""
        current_time = time.time()
        
        # Update request rate (requests in last second)
        recent_requests = [r for r in self.results[-100:] 
                          if current_time - r.timestamp <= 1.0]
        self.real_time_stats["requests_per_second"].append(len(recent_requests))
        
        # Update error rate
        recent_errors = [r for r in recent_requests if r.status_code >= 400]
        error_rate = len(recent_errors) / len(recent_requests) if recent_requests else 0
        self.real_time_stats["error_rate"].append(error_rate)
        
        # Update latency
        if result.total_latency > 0:
            self.real_time_stats["avg_latency"].append(result.total_latency)
    
    async def user_simulation(self, user_id: int) -> List[APITestResult]:
        """Simulate single user's API usage patterns"""
        user_results = []
        
        # Staggered start for ramp-up
        ramp_delay = (self.config.ramp_up_seconds / self.config.concurrent_users) * user_id
        await asyncio.sleep(ramp_delay)
        
        for request_num in range(self.config.requests_per_user):
            # Burst pattern simulation
            if self.config.burst_testing and request_num % self.config.burst_size == 0:
                # Create burst of requests
                burst_tasks = []
                for burst_req in range(min(self.config.burst_size, 
                                         self.config.requests_per_user - request_num)):
                    task = asyncio.create_task(
                        self.make_api_request(user_id, request_num + burst_req)
                    )
                    burst_tasks.append(task)
                
                burst_results = await asyncio.gather(*burst_tasks, return_exceptions=True)
                for result in burst_results:
                    if isinstance(result, APITestResult):
                        user_results.append(result)
                
                # Wait before next burst
                await asyncio.sleep(self.config.burst_interval_seconds)
            else:
                # Regular request
                result = await self.make_api_request(user_id, request_num)
                user_results.append(result)
                
                # Normal inter-request delay
                await asyncio.sleep(random.uniform(0.5, 2.0))
        
        return user_results
    
    async def run_load_test(self) -> Dict[str, Any]:
        """Execute the complete API infrastructure load test"""
        logger.info(f"Starting API infrastructure test: {self.config.scenario_name}")
        logger.info(f"Target: {self.config.base_url}")
        logger.info(f"Load: {self.config.concurrent_users} users, {self.config.requests_per_user} req/user")
        
        test_start_time = time.time()
        
        # Create user simulation tasks
        user_tasks = []
        for user_id in range(self.config.concurrent_users):
            task = asyncio.create_task(self.user_simulation(user_id))
            user_tasks.append(task)
        
        # Start real-time monitoring if enabled
        if self.config.real_time_dashboard:
            monitor_task = asyncio.create_task(self._real_time_monitor())
        
        # Execute load test
        user_results = await asyncio.gather(*user_tasks, return_exceptions=True)
        
        # Stop monitoring
        if self.config.real_time_dashboard:
            monitor_task.cancel()
        
        # Collect all results
        for user_result in user_results:
            if isinstance(user_result, list):
                self.results.extend(user_result)
        
        test_duration = time.time() - test_start_time
        
        # Generate comprehensive report
        report = await self._generate_infrastructure_report(test_duration)
        
        # Save results
        self._save_results(report)
        
        return report
    
    async def _real_time_monitor(self):
        """Real-time monitoring and dashboard"""
        try:
            while True:
                await asyncio.sleep(5)
                
                if len(self.results) > 0:
                    recent_results = [r for r in self.results 
                                    if time.time() - r.timestamp <= 60]
                    
                    if recent_results:
                        avg_latency = statistics.mean([r.total_latency for r in recent_results])
                        error_rate = len([r for r in recent_results if r.status_code >= 400]) / len(recent_results)
                        rps = len(recent_results) / 60
                        
                        logger.info(f"[LIVE] RPS: {rps:.1f} | Avg Latency: {avg_latency:.2f}s | Error Rate: {error_rate:.1%}")
        except asyncio.CancelledError:
            pass
    
    async def _generate_infrastructure_report(self, test_duration: float) -> Dict[str, Any]:
        """Generate comprehensive API infrastructure report"""
        if not self.results:
            return {"error": "No results collected"}
        
        successful_results = [r for r in self.results if 200 <= r.status_code < 300]
        error_results = [r for r in self.results if r.status_code >= 400]
        
        # Core API metrics
        latencies = [r.total_latency for r in successful_results]
        connection_times = [r.connection_time for r in self.results if r.connection_time > 0]
        first_byte_times = [r.first_byte_time for r in successful_results]
        
        # Throughput analysis
        total_requests = len(self.results)
        requests_per_second = total_requests / test_duration if test_duration > 0 else 0
        
        # Connection analysis
        reused_connections = len([r for r in self.results if r.connection_reused])
        connection_reuse_rate = reused_connections / total_requests if total_requests > 0 else 0
        
        # Error analysis by type
        error_breakdown = defaultdict(int)
        for result in error_results:
            error_breakdown[result.error_type] += 1
        
        # Endpoint performance breakdown
        endpoint_performance = {}
        for result in self.results:
            endpoint = result.request_id.split('-')[0]  # Simplified endpoint extraction
            if endpoint not in endpoint_performance:
                endpoint_performance[endpoint] = {
                    "requests": 0,
                    "avg_latency": 0,
                    "error_rate": 0,
                    "latencies": []
                }
            
            endpoint_performance[endpoint]["requests"] += 1
            endpoint_performance[endpoint]["latencies"].append(result.total_latency)
        
        # Calculate endpoint averages
        for endpoint, stats in endpoint_performance.items():
            if stats["latencies"]:
                stats["avg_latency"] = statistics.mean(stats["latencies"])
                stats["p95_latency"] = sorted(stats["latencies"])[int(len(stats["latencies"]) * 0.95)]
            del stats["latencies"]  # Remove raw data for cleaner output
        
        report = {
            "test_metadata": {
                "scenario_name": self.config.scenario_name,
                "test_duration": test_duration,
                "target_url": self.config.base_url,
                "concurrent_users": self.config.concurrent_users,
                "total_requests_planned": self.config.concurrent_users * self.config.requests_per_user,
                "total_requests_executed": total_requests
            },
            
            "performance_summary": {
                "requests_per_second": requests_per_second,
                "total_throughput_mb": sum(r.response_size for r in self.results) / 1024 / 1024,
                "avg_request_size_kb": statistics.mean([r.request_size for r in self.results]) / 1024 if self.results else 0,
                "avg_response_size_kb": statistics.mean([r.response_size for r in self.results]) / 1024 if self.results else 0
            },
            
            "latency_analysis": {
                "avg_total_latency": statistics.mean(latencies) if latencies else 0,
                "median_latency": statistics.median(latencies) if latencies else 0,
                "p95_latency": sorted(latencies)[int(len(latencies) * 0.95)] if len(latencies) > 20 else (max(latencies) if latencies else 0),
                "p99_latency": sorted(latencies)[int(len(latencies) * 0.99)] if len(latencies) > 100 else (max(latencies) if latencies else 0),
                "max_latency": max(latencies) if latencies else 0,
                "avg_connection_time": statistics.mean(connection_times) if connection_times else 0,
                "avg_first_byte_time": statistics.mean(first_byte_times) if first_byte_times else 0
            },
            
            "connection_analysis": {
                "connection_reuse_rate": connection_reuse_rate,
                "avg_connection_time": statistics.mean(connection_times) if connection_times else 0,
                "connection_pool_stats": self.connection_monitor.pool_stats
            },
            
            "reliability_metrics": {
                "success_rate": len(successful_results) / total_requests if total_requests > 0 else 0,
                "error_rate": len(error_results) / total_requests if total_requests > 0 else 0,
                "rate_limited_requests": len([r for r in self.results if r.rate_limited]),
                "timeout_rate": len([r for r in self.results if r.error_type == "timeout"]) / total_requests if total_requests > 0 else 0
            },
            
            "error_analysis": dict(error_breakdown),
            "endpoint_performance": endpoint_performance,
            
            "system_resources": {
                "peak_memory_mb": max([m["memory_used_mb"] for m in self.system_monitor.metrics_history], default=0),
                "avg_cpu_percent": statistics.mean([m["cpu_percent"] for m in self.system_monitor.metrics_history]) if self.system_monitor.metrics_history else 0,
                "peak_connections": max([m["network_connections"] for m in self.system_monitor.metrics_history], default=0)
            } if self.config.collect_system_metrics else {}
        }
        
        return report
    
    def _save_results(self, report: Dict[str, Any]):
        """Save comprehensive test results"""
        output_data = {
            "infrastructure_report": report,
            "raw_results": [
                {
                    "timestamp": r.timestamp,
                    "request_id": r.request_id,
                    "user_id": r.user_id,
                    "total_latency": r.total_latency,
                    "connection_time": r.connection_time,
                    "first_byte_time": r.first_byte_time,
                    "status_code": r.status_code,
                    "request_size": r.request_size,
                    "response_size": r.response_size,
                    "connection_reused": r.connection_reused,
                    "cache_hit": r.cache_hit,
                    "rate_limited": r.rate_limited,
                    "error_type": r.error_type,
                    "server_id": r.server_id,
                    "api_version": r.api_version
                }
                for r in self.results
            ],
            "system_metrics": self.system_monitor.metrics_history if self.config.collect_system_metrics else []
        }
        
        with open(self.config.output_file, 'w') as f:
            json.dump(output_data, f, indent=2)
        
        logger.info(f"Infrastructure test results saved to {self.config.output_file}")

async def main():
    parser = argparse.ArgumentParser(description="API Infrastructure Load Tester")
    
    # Basic configuration  
    parser.add_argument("--base-url", required=True, help="Your API base URL")
    parser.add_argument("--api-key", required=True, help="API authentication key")
    parser.add_argument("--users", type=int, default=10, help="Concurrent users")
    parser.add_argument("--requests-per-user", type=int, default=10, help="Requests per user")
    parser.add_argument("--duration", type=int, default=5, help="Test duration (minutes)")
    parser.add_argument("--scenario-name", default="api_infrastructure_test", help="Test scenario name")
    
    # API-specific testing
    parser.add_argument("--endpoint", default="/v1/chat/completions", help="Primary endpoint to test")
    parser.add_argument("--test-multiple-endpoints", action="store_true", help="Test multiple endpoints")
    parser.add_argument("--endpoints", nargs="+", help="List of endpoints to test")
    
    # Infrastructure testing
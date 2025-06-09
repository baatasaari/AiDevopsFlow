export function generateHTMLPresentation(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GenAI-Powered DevOps Platform Architecture</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            line-height: 1.6;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .slide {
            min-height: 100vh;
            padding: 60px 40px;
            border-bottom: 2px solid #334155;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        h1 {
            font-size: 3.5rem;
            text-align: center;
            margin-bottom: 30px;
            color: #3b82f6;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        h2 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 40px;
            color: #10b981;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        h3 {
            font-size: 1.8rem;
            color: #8b5cf6;
            margin-bottom: 20px;
        }
        .subtitle {
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 60px;
            color: #cbd5e1;
        }
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            border-left: 5px solid #3b82f6;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .metric-card {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%);
            padding: 25px;
            margin: 15px 0;
            border-radius: 12px;
            border-left: 5px solid #10b981;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .metric-value {
            font-size: 1.3rem;
            font-weight: bold;
            color: #10b981;
        }
        .agent-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin: 30px 0;
        }
        .agent-card {
            background: rgba(139, 92, 246, 0.2);
            padding: 25px;
            border-radius: 15px;
            border-left: 5px solid #8b5cf6;
            backdrop-filter: blur(10px);
        }
        .workflow-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .workflow-step {
            background: rgba(59, 130, 246, 0.2);
            padding: 20px;
            border-radius: 12px;
            border-left: 5px solid #3b82f6;
            display: flex;
            align-items: flex-start;
        }
        .step-number {
            background: #3b82f6;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-weight: bold;
            font-size: 1.2rem;
            flex-shrink: 0;
        }
        .roadmap-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin: 30px 0;
        }
        .roadmap-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 25px;
            border-radius: 15px;
            border-top: 5px solid #f59e0b;
            backdrop-filter: blur(10px);
        }
        .contact-section {
            text-align: center;
            padding: 60px 0;
            background: rgba(16, 185, 129, 0.1);
            border-radius: 20px;
            margin: 40px 0;
        }
        .contact-email {
            font-size: 2rem;
            color: #10b981;
            font-weight: bold;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 40px 0;
            color: #64748b;
            border-top: 1px solid #334155;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            padding: 8px 0;
            position: relative;
            padding-left: 25px;
        }
        li:before {
            content: "→";
            color: #3b82f6;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .highlight {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Slide 1: Title -->
        <div class="slide">
            <h1>GenAI-Powered DevOps Platform</h1>
            <div class="subtitle">Complete End-to-End Architecture for Autonomous Software Delivery</div>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>🤖 6 Specialized AI Agents</h3>
                    <p>Autonomous agents managing every aspect of the DevOps pipeline from code analysis to deployment</p>
                </div>
                <div class="feature-card">
                    <h3>🚀 Zero-Touch Production</h3>
                    <p>Fully automated deployments with intelligent validation and rollback capabilities</p>
                </div>
                <div class="feature-card">
                    <h3>🔗 Enterprise Integration</h3>
                    <p>Seamless integration with Harness CD, Google Kubernetes Engine, and Istio service mesh</p>
                </div>
                <div class="feature-card">
                    <h3>🛡️ Advanced Security</h3>
                    <p>Continuous security scanning, compliance validation, and automated threat response</p>
                </div>
            </div>
            
            <div class="contact-section">
                <p style="font-size: 1.2rem; margin-bottom: 10px;">Prepared for:</p>
                <div class="contact-email">vijay.rentala@gmail.com</div>
            </div>
        </div>

        <!-- Slide 2: Key Performance Improvements -->
        <div class="slide">
            <h2>Key Performance Improvements</h2>
            
            <div class="metric-card">
                <span>Deployment Lead Time</span>
                <span class="metric-value">75% Reduction (< 2 hours)</span>
            </div>
            <div class="metric-card">
                <span>Defect Escape Rate</span>
                <span class="metric-value">60% Improvement (< 2%)</span>
            </div>
            <div class="metric-card">
                <span>Mean Time to Recovery</span>
                <span class="metric-value">80% Faster (< 30 minutes)</span>
            </div>
            <div class="metric-card">
                <span>Security Vulnerability Resolution</span>
                <span class="metric-value">90% Faster (< 24 hours)</span>
            </div>
            <div class="metric-card">
                <span>System Uptime</span>
                <span class="metric-value">99.94% Achieved (> 99.9% target)</span>
            </div>
            
            <div class="contact-section">
                <h3 class="highlight">Annual Cost Savings: $2.4M+</h3>
                <p style="font-size: 1.3rem; color: #10b981;">Payback Period: 8 months</p>
            </div>
        </div>

        <!-- Slide 3: System Architecture -->
        <div class="slide">
            <h2>4-Layer System Architecture</h2>
            
            <div class="feature-grid">
                <div class="feature-card" style="border-left-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">Presentation Layer</h3>
                    <ul>
                        <li>Developer Dashboard</li>
                        <li>Operations Console</li>
                        <li>Business Analytics</li>
                    </ul>
                </div>
                <div class="feature-card" style="border-left-color: #10b981;">
                    <h3 style="color: #10b981;">Orchestration Layer</h3>
                    <ul>
                        <li>Master Orchestrator AI</li>
                        <li>6 Specialized AI Agents</li>
                        <li>Decision Engine</li>
                    </ul>
                </div>
                <div class="feature-card" style="border-left-color: #f59e0b;">
                    <h3 style="color: #f59e0b;">MCP Integration Layer</h3>
                    <ul>
                        <li>Harness MCP Server</li>
                        <li>GKE MCP Server</li>
                        <li>Istio MCP Server</li>
                    </ul>
                </div>
                <div class="feature-card" style="border-left-color: #ef4444;">
                    <h3 style="color: #ef4444;">Infrastructure Layer</h3>
                    <ul>
                        <li>Harness CD Platform</li>
                        <li>GKE Clusters</li>
                        <li>Istio Service Mesh</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Slide 4: AI Agent Ecosystem -->
        <div class="slide">
            <h2>6 Specialized AI Agents</h2>
            
            <div class="agent-grid">
                <div class="agent-card">
                    <h3>DevOps Agent</h3>
                    <p><strong>Role:</strong> Pipeline orchestration and infrastructure management</p>
                    <p><strong>Capabilities:</strong> Pipeline generation, infrastructure provisioning, deployment strategies</p>
                </div>
                <div class="agent-card">
                    <h3>Security Guardian Agent</h3>
                    <p><strong>Role:</strong> Security scanning and compliance validation</p>
                    <p><strong>Capabilities:</strong> Vulnerability assessment, policy enforcement, threat detection</p>
                </div>
                <div class="agent-card">
                    <h3>Data Governance Agent</h3>
                    <p><strong>Role:</strong> Data classification and privacy compliance</p>
                    <p><strong>Capabilities:</strong> Data classification, privacy validation, lineage tracking</p>
                </div>
                <div class="agent-card">
                    <h3>Testing Agent</h3>
                    <p><strong>Role:</strong> Test orchestration and quality assurance</p>
                    <p><strong>Capabilities:</strong> Test generation, quality gates, performance validation</p>
                </div>
                <div class="agent-card">
                    <h3>Monitoring Agent</h3>
                    <p><strong>Role:</strong> Observability and incident response</p>
                    <p><strong>Capabilities:</strong> Real-time monitoring, anomaly detection, auto-remediation</p>
                </div>
                <div class="agent-card">
                    <h3>Deployment Agent</h3>
                    <p><strong>Role:</strong> Environment management and deployment execution</p>
                    <p><strong>Capabilities:</strong> Environment provisioning, deployment validation, rollback management</p>
                </div>
            </div>
        </div>

        <!-- Slide 5: End-to-End Workflow -->
        <div class="slide">
            <h2>8-Stage DevOps Workflow</h2>
            
            <div class="workflow-steps">
                <div class="workflow-step">
                    <div class="step-number">1</div>
                    <div>
                        <strong>Code Commit (< 1 min)</strong><br>
                        Developer pushes code, triggers automated pipeline
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">2</div>
                    <div>
                        <strong>AI Code Analysis (2-4 min)</strong><br>
                        Static analysis, quality checks, security scanning
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">3</div>
                    <div>
                        <strong>Intelligent Build (3-8 min)</strong><br>
                        Optimized build with dependency caching
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">4</div>
                    <div>
                        <strong>Security Validation (1-3 min)</strong><br>
                        Comprehensive security and compliance checks
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">5</div>
                    <div>
                        <strong>Test Orchestration (5-15 min)</strong><br>
                        AI-powered test selection and execution
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">6</div>
                    <div>
                        <strong>Environment Deployment (3-7 min)</strong><br>
                        GKE deployment with Istio configuration
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">7</div>
                    <div>
                        <strong>Continuous Monitoring</strong><br>
                        Real-time monitoring and anomaly detection
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">8</div>
                    <div>
                        <strong>Production Deploy (2-5 min)</strong><br>
                        Zero-touch production deployment with validation
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 6: Environment Strategy -->
        <div class="slide">
            <h2>Environment Progression Strategy</h2>
            
            <div class="feature-grid">
                <div class="feature-card" style="border-left-color: #06b6d4;">
                    <h3 style="color: #06b6d4;">Development Environment</h3>
                    <p><strong>Data Policy:</strong> Mock data, local development datasets</p>
                    <p><strong>Security:</strong> Basic authentication, local secrets</p>
                    <p><strong>Active Agents:</strong> Code Analysis Agent, Basic Security Scanning</p>
                </div>
                <div class="feature-card" style="border-left-color: #10b981;">
                    <h3 style="color: #10b981;">Integration Environment</h3>
                    <p><strong>Data Policy:</strong> Synthetic data mimicking production structure</p>
                    <p><strong>Security:</strong> Service-to-service auth, vault integration</p>
                    <p><strong>Active Agents:</strong> Code Analysis, Security Guardian, Test Orchestrator</p>
                </div>
                <div class="feature-card" style="border-left-color: #f59e0b;">
                    <h3 style="color: #f59e0b;">Pre-Production Environment</h3>
                    <p><strong>Data Policy:</strong> Anonymized production data, GDPR compliant</p>
                    <p><strong>Security:</strong> Full production security controls</p>
                    <p><strong>Active Agents:</strong> All agents active, performance validation</p>
                </div>
                <div class="feature-card" style="border-left-color: #ef4444;">
                    <h3 style="color: #ef4444;">Production Environment</h3>
                    <p><strong>Data Policy:</strong> Live production data with full governance</p>
                    <p><strong>Security:</strong> Maximum security, automated threat detection</p>
                    <p><strong>Active Agents:</strong> Full autonomous operation, predictive scaling</p>
                </div>
            </div>
        </div>

        <!-- Slide 7: Implementation Roadmap -->
        <div class="slide">
            <h2>2025 Implementation Roadmap</h2>
            
            <div class="roadmap-grid">
                <div class="roadmap-card" style="border-top-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">Q1 2025: Foundation & Core Agents</h3>
                    <ul>
                        <li>Master Orchestrator implementation</li>
                        <li>DevOps and Security Guardian agents</li>
                        <li>Basic Harness CD integration</li>
                        <li>Development environment setup</li>
                    </ul>
                </div>
                <div class="roadmap-card" style="border-top-color: #10b981;">
                    <h3 style="color: #10b981;">Q2 2025: Platform Integration</h3>
                    <ul>
                        <li>Complete GKE cluster automation</li>
                        <li>Istio service mesh integration</li>
                        <li>Testing and Monitoring agents</li>
                        <li>Integration environment deployment</li>
                    </ul>
                </div>
                <div class="roadmap-card" style="border-top-color: #f59e0b;">
                    <h3 style="color: #f59e0b;">Q3 2025: Advanced AI & Security</h3>
                    <ul>
                        <li>Data Governance agent implementation</li>
                        <li>Advanced security automation</li>
                        <li>Predictive analytics integration</li>
                        <li>Pre-production environment</li>
                    </ul>
                </div>
                <div class="roadmap-card" style="border-top-color: #ef4444;">
                    <h3 style="color: #ef4444;">Q4 2025: Production & Optimization</h3>
                    <ul>
                        <li>Zero-touch production deployment</li>
                        <li>Full autonomous operation</li>
                        <li>Performance optimization</li>
                        <li>Continuous improvement loops</li>
                    </ul>
                </div>
            </div>
            
            <div class="contact-section">
                <h3 class="highlight">Success Metrics by End of 2025</h3>
                <p style="font-size: 1.2rem;">99.9% Uptime • < 30min MTTR • Zero Security Incidents • 100% Automated Deployments</p>
            </div>
        </div>

        <!-- Slide 8: Next Steps -->
        <div class="slide">
            <h2>Next Steps</h2>
            
            <div style="text-align: center; margin-bottom: 50px;">
                <h3 class="highlight" style="font-size: 2.2rem;">Ready to Transform Your DevOps Pipeline?</h3>
            </div>
            
            <div class="workflow-steps">
                <div class="workflow-step">
                    <div class="step-number">1</div>
                    <div>
                        <strong>Schedule Technical Deep-Dive Session</strong><br>
                        Detailed architecture review and requirements analysis
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">2</div>
                    <div>
                        <strong>Define Pilot Project Scope</strong><br>
                        Identify initial use case and success metrics
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">3</div>
                    <div>
                        <strong>Establish Development Team</strong><br>
                        Infrastructure setup and team onboarding
                    </div>
                </div>
                <div class="workflow-step">
                    <div class="step-number">4</div>
                    <div>
                        <strong>Begin Phase 1 Implementation</strong><br>
                        Master Orchestrator and core agent development
                    </div>
                </div>
            </div>
            
            <div class="contact-section">
                <div class="contact-email">Contact: vijay.rentala@gmail.com</div>
                <p style="font-size: 1.1rem; color: #cbd5e1;">GenAI DevOps Platform Architecture Team</p>
            </div>
        </div>

        <div class="footer">
            <p>&copy; 2025 GenAI DevOps Platform Architecture. All rights reserved.</p>
            <p>This presentation contains proprietary and confidential information.</p>
        </div>
    </div>
</body>
</html>
  `;
}
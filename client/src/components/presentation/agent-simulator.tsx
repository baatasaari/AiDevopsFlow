import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface AgentSimulatorProps {
  isRunning: boolean;
}

export default function AgentSimulator({ isRunning }: AgentSimulatorProps) {
  const [messages, setMessages] = useState<Array<{
    id: string;
    from: string;
    to: string;
    message: string;
    timestamp: number;
  }>>([]);

  const [agentStatuses, setAgentStatuses] = useState({
    code: { status: "idle", progress: 0 },
    security: { status: "idle", progress: 0 },
    performance: { status: "idle", progress: 0 }
  });

  const agents = [
    {
      id: "code",
      name: "CODE",
      fullName: "Code Analysis",
      color: "bg-brand-emerald",
      textColor: "text-brand-emerald",
      metrics: { label: "Quality Score", value: "94%" }
    },
    {
      id: "security", 
      name: "SEC",
      fullName: "Security Scan",
      color: "bg-red-400",
      textColor: "text-red-400", 
      metrics: { label: "Issues Found", value: "0 Critical" }
    },
    {
      id: "performance",
      name: "PERF", 
      fullName: "Performance Test",
      color: "bg-brand-amber",
      textColor: "text-brand-amber",
      metrics: { label: "Response Time", value: "127ms" }
    }
  ];

  const simulationSteps = [
    {
      delay: 1000,
      action: () => {
        setAgentStatuses(prev => ({
          ...prev,
          code: { status: "analyzing", progress: 0 }
        }));
      }
    },
    {
      delay: 2000,
      action: () => {
        setAgentStatuses(prev => ({
          ...prev,
          code: { status: "analyzing", progress: 100 }
        }));
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          from: "Code Agent",
          to: "Security Agent", 
          message: "Analysis complete, 0 critical issues found",
          timestamp: Date.now()
        }]);
      }
    },
    {
      delay: 3000,
      action: () => {
        setAgentStatuses(prev => ({
          ...prev,
          code: { status: "completed", progress: 100 },
          security: { status: "scanning", progress: 0 }
        }));
      }
    },
    {
      delay: 4000,
      action: () => {
        setAgentStatuses(prev => ({
          ...prev,
          security: { status: "scanning", progress: 100 }
        }));
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          from: "Security Agent",
          to: "Performance Agent",
          message: "Security clearance granted",
          timestamp: Date.now()
        }]);
      }
    },
    {
      delay: 5000,
      action: () => {
        setAgentStatuses(prev => ({
          ...prev,
          security: { status: "completed", progress: 100 },
          performance: { status: "testing", progress: 0 }
        }));
      }
    },
    {
      delay: 6000,
      action: () => {
        setAgentStatuses(prev => ({
          ...prev,
          performance: { status: "testing", progress: 100 }
        }));
        setMessages(prev => [...prev, {
          id: (Date.now() + 2).toString(),
          from: "Performance Agent",
          to: "Orchestrator",
          message: "Load test passed, ready for deployment",
          timestamp: Date.now()
        }]);
      }
    },
    {
      delay: 7000,
      action: () => {
        setAgentStatuses(prev => ({
          ...prev,
          performance: { status: "completed", progress: 100 }
        }));
      }
    }
  ];

  useEffect(() => {
    if (isRunning) {
      // Reset state
      setMessages([]);
      setAgentStatuses({
        code: { status: "idle", progress: 0 },
        security: { status: "idle", progress: 0 },
        performance: { status: "idle", progress: 0 }
      });

      // Execute simulation steps
      simulationSteps.forEach(step => {
        setTimeout(step.action, step.delay);
      });
    }
  }, [isRunning]);

  const getStatusText = (status: string) => {
    switch (status) {
      case "analyzing": return "Analyzing...";
      case "scanning": return "Scanning...";
      case "testing": return "Testing...";
      case "completed": return "Complete";
      default: return "Idle";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-400";
      case "idle": return "text-slate-400";
      default: return "text-brand-blue";
    }
  };

  if (!isRunning && messages.length === 0) {
    return (
      <div className="min-h-64 bg-slate-700/20 rounded-xl p-6 flex items-center justify-center">
        <div className="text-center text-slate-400">
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <p>Click "Start Simulation" to see agents in action</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-brand-blue">Agent Communication Flow</h4>
        <p className="text-sm text-slate-400">Watching agents collaborate in real-time</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        {agents.map((agent, index) => {
          const status = agentStatuses[agent.id as keyof typeof agentStatuses];
          
          return (
            <motion.div
              key={agent.id}
              className="bg-slate-700/30 rounded-xl p-4 text-center"
              animate={{ 
                scale: status.status !== "idle" ? [1, 1.05, 1] : 1 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: status.status !== "idle" && status.status !== "completed" ? Infinity : 0 
              }}
            >
              <div className={`w-12 h-12 ${agent.color} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                <span className="text-xs font-bold text-white">{agent.name}</span>
              </div>
              <div className={`text-sm font-medium ${getStatusColor(status.status)}`}>
                {getStatusText(status.status)}
              </div>
              <div className="text-xs text-slate-400">{agent.metrics.label}: {agent.metrics.value}</div>
              
              {status.status !== "idle" && status.status !== "completed" && (
                <div className="mt-2">
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <motion.div 
                      className={`h-1 rounded-full ${agent.color}`}
                      initial={{ width: "0%" }}
                      animate={{ width: `${status.progress}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      
      <Card className="bg-slate-700/20">
        <CardContent className="p-4">
          <h5 className="font-semibold mb-3">Agent Communications</h5>
          <div className="space-y-2 text-sm min-h-32">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full"
                    animate={{ 
                      backgroundColor: [
                        "rgb(16, 185, 129)", // emerald
                        "rgb(248, 113, 113)", // red
                        "rgb(245, 158, 11)" // amber
                      ][index % 3]
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-slate-300">
                    <span className="font-medium">{message.from}</span> → <span className="font-medium">{message.to}</span>: "{message.message}"
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {messages.length === 0 && isRunning && (
              <div className="text-slate-500 italic">Initializing agent communication...</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

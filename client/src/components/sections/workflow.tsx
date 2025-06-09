import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WorkflowDiagram from "@/components/diagrams/workflow-diagram";
import AgentSimulator from "@/components/presentation/agent-simulator";
import { CheckCircle, Shield, Sparkles, Play, RotateCcw } from "lucide-react";

export default function Workflow() {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  const stageGates = [
    {
      title: "Code Quality Gate",
      icon: CheckCircle,
      color: "text-brand-blue",
      bgGradient: "from-brand-blue to-brand-violet",
      criteria: [
        { label: "Coverage > 85%", status: "passed" },
        { label: "Quality Score > 8.0", status: "passed" },
        { label: "No Critical Issues", status: "passed" }
      ]
    },
    {
      title: "Security Gate", 
      icon: Shield,
      color: "text-red-400",
      bgGradient: "from-red-500 to-pink-500",
      criteria: [
        { label: "No Critical Vulns", status: "passed" },
        { label: "Compliance Check", status: "passed" },
        { label: "Secrets Scan Clear", status: "passed" }
      ]
    },
    {
      title: "Deploy Ready",
      icon: Sparkles,
      color: "text-brand-emerald", 
      bgGradient: "from-brand-emerald to-green-400",
      criteria: [
        { label: "All Tests Pass", status: "passed" },
        { label: "Performance OK", status: "passed" },
        { label: "Ready for Prod", status: "passed" }
      ]
    }
  ];

  const decisionMatrix = [
    {
      title: "AI Decision Matrix",
      color: "text-brand-blue",
      metrics: [
        { label: "Code Quality", value: "95/100", status: "good" },
        { label: "Test Coverage", value: "89%", status: "good" },
        { label: "Risk Score", value: "Low", status: "good" }
      ]
    },
    {
      title: "Security Assessment",
      color: "text-red-400", 
      metrics: [
        { label: "Vulnerabilities", value: "0 Critical", status: "good" },
        { label: "Compliance", value: "100%", status: "good" },
        { label: "Trust Score", value: "A+", status: "good" }
      ]
    },
    {
      title: "Performance Metrics",
      color: "text-brand-emerald",
      metrics: [
        { label: "Response Time", value: "127ms", status: "good" },
        { label: "Throughput", value: "2.1k RPS", status: "good" },
        { label: "Resource Usage", value: "Optimal", status: "good" }
      ]
    }
  ];

  const handleStartSimulation = () => {
    setIsSimulationRunning(true);
    setTimeout(() => {
      setIsSimulationRunning(false);
    }, 8000);
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Stage Gate Automation & Decision Intelligence</h2>
          <p className="text-xl text-slate-300">
            AI-powered stage gates that integrate seamlessly with your current approval processes
          </p>
        </motion.div>

        {/* Stage Gate Decision Tree */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                AI-Powered Stage Gates
              </h3>
              
              <div className="relative">
                {/* Decision Flow */}
                <div className="flex justify-center space-x-8 mb-8">
                  {stageGates.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                      <div key={stage.title} className="text-center">
                        <motion.div 
                          className={`w-24 h-24 bg-gradient-to-r ${stage.bgGradient} rounded-xl flex items-center justify-center mb-4`}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.5 
                          }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h4 className={`font-semibold ${stage.color} mb-2`}>
                          {stage.title}
                        </h4>
                        <div className="space-y-1 text-xs text-slate-400">
                          {stage.criteria.map((criterion, critIndex) => (
                            <div key={critIndex} className="flex items-center justify-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full" />
                              <span>{criterion.label}</span>
                            </div>
                          ))}
                        </div>
                        
                        {index < stageGates.length - 1 && (
                          <motion.div 
                            className="absolute top-12 w-8 h-8 text-brand-blue"
                            style={{ left: `${(index + 1) * 33.33 - 5}%` }}
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* AI Decision Logic */}
                <div className="grid grid-cols-3 gap-6">
                  {decisionMatrix.map((matrix, index) => (
                    <motion.div
                      key={matrix.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="bg-slate-700/30">
                        <CardContent className="p-6">
                          <h4 className={`font-semibold ${matrix.color} mb-4`}>
                            {matrix.title}
                          </h4>
                          <div className="space-y-3">
                            {matrix.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="flex justify-between items-center">
                                <span className="text-sm">{metric.label}</span>
                                <span className="text-sm font-semibold text-green-400">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Workflow Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Live Workflow Simulation</h3>
                <Button
                  onClick={handleStartSimulation}
                  disabled={isSimulationRunning}
                  className="bg-brand-blue hover:bg-brand-blue/80 text-white"
                >
                  {isSimulationRunning ? (
                    <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4 mr-2" />
                  )}
                  <span>
                    {isSimulationRunning ? "Running Simulation" : "Start Simulation"}
                  </span>
                </Button>
              </div>

              <AgentSimulator isRunning={isSimulationRunning} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

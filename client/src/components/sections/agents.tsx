import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Shield, Zap, FlaskConical, CloudDownload, BarChart3 } from "lucide-react";

export default function Agents() {
  const mainAgents = [
    {
      name: "Code Analysis Agent",
      description: "Static Analysis & Quality Assurance",
      icon: Code,
      color: "text-brand-emerald",
      bgGradient: "from-brand-emerald to-green-400",
      qualityScore: 92,
      filesAnalyzed: 1247,
      issuesFixed: 23
    },
    {
      name: "Security Guardian",
      description: "Threat Detection & Compliance", 
      icon: Shield,
      color: "text-red-400",
      bgGradient: "from-red-500 to-pink-500",
      securityScore: 95,
      criticalVulns: 0,
      compliance: 100
    },
    {
      name: "Performance Agent", 
      description: "Load Testing & Optimization",
      icon: Zap,
      color: "text-brand-amber",
      bgGradient: "from-brand-amber to-orange-400",
      responseTime: "127ms",
      uptime: "99.9%",
      rpsCapacity: "2.1k"
    }
  ];

  const additionalAgents = [
    {
      name: "Test Orchestrator",
      description: "Intelligent test strategy and execution",
      icon: FlaskConical,
      color: "text-brand-violet"
    },
    {
      name: "Deploy Manager",
      description: "Smart deployment and rollback strategies", 
      icon: CloudDownload,
      color: "text-purple-400"
    },
    {
      name: "Monitor & Ops",
      description: "Real-time monitoring and operational intelligence",
      icon: BarChart3,
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">AI Agent Ecosystem</h2>
          <p className="text-xl text-slate-300">
            Six specialized agents collaborating to revolutionize your DevOps workflow
          </p>
        </motion.div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Main Agents */}
          {mainAgents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`bg-slate-800/40 backdrop-blur-sm border-slate-700/30 hover:border-${agent.color.split('-')[1]}-500/50 transition-all`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${agent.bgGradient} rounded-xl flex items-center justify-center mr-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${agent.color}`}>
                          {agent.name}
                        </h3>
                        <p className="text-slate-400">{agent.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {index === 0 && (
                        <>
                          <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                            <span className="text-sm">Code Quality Score</span>
                            <div className="flex items-center space-x-2">
                              <Progress value={agent.qualityScore} className="w-16" />
                              <span className={`text-sm font-semibold ${agent.color}`}>
                                {agent.qualityScore}%
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-slate-700/20 rounded-lg">
                              <div className={`text-lg font-bold ${agent.color}`}>
                                {agent.filesAnalyzed?.toLocaleString()}
                              </div>
                              <div className="text-xs text-slate-400">Files Analyzed</div>
                            </div>
                            <div className="text-center p-3 bg-slate-700/20 rounded-lg">
                              <div className={`text-lg font-bold ${agent.color}`}>
                                {agent.issuesFixed}
                              </div>
                              <div className="text-xs text-slate-400">Issues Fixed</div>
                            </div>
                          </div>
                        </>
                      )}

                      {index === 1 && (
                        <>
                          <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                            <span className="text-sm">Security Score</span>
                            <div className="flex items-center space-x-2">
                              <Progress value={agent.securityScore} className="w-16" />
                              <span className={`text-sm font-semibold ${agent.color}`}>
                                {agent.securityScore}%
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-slate-700/20 rounded-lg">
                              <div className={`text-lg font-bold ${agent.color}`}>
                                {agent.criticalVulns}
                              </div>
                              <div className="text-xs text-slate-400">Critical Vulns</div>
                            </div>
                            <div className="text-center p-3 bg-slate-700/20 rounded-lg">
                              <div className={`text-lg font-bold ${agent.color}`}>
                                {agent.compliance}%
                              </div>
                              <div className="text-xs text-slate-400">Compliance</div>
                            </div>
                          </div>
                        </>
                      )}

                      {index === 2 && (
                        <>
                          <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                            <span className="text-sm">Response Time</span>
                            <div className="flex items-center space-x-2">
                              <span className={`text-lg font-bold ${agent.color}`}>
                                {agent.responseTime}
                              </span>
                              <span className="text-xs text-green-400">↓ 15%</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-slate-700/20 rounded-lg">
                              <div className={`text-lg font-bold ${agent.color}`}>
                                {agent.uptime}
                              </div>
                              <div className="text-xs text-slate-400">Uptime</div>
                            </div>
                            <div className="text-center p-3 bg-slate-700/20 rounded-lg">
                              <div className={`text-lg font-bold ${agent.color}`}>
                                {agent.rpsCapacity}
                              </div>
                              <div className="text-xs text-slate-400">RPS Capacity</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

          {/* Additional Agents Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Additional Specialist Agents</h3>
                
                <div className="space-y-4">
                  {additionalAgents.map((agent, index) => {
                    const Icon = agent.icon;
                    return (
                      <motion.div
                        key={agent.name}
                        className="flex items-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`w-12 h-12 bg-${agent.color.split('-')[1]}-500 rounded-lg flex items-center justify-center mr-4`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className={`font-semibold ${agent.color}`}>
                            {agent.name}
                          </h4>
                          <p className="text-sm text-slate-400">
                            {agent.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Agent Communication Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Agent Communication Workflow
              </h3>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <motion.div 
                    className="w-16 h-16 bg-brand-emerald rounded-full flex items-center justify-center mb-3 mx-auto"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-xs font-bold">CODE</span>
                  </motion.div>
                  <p className="text-xs text-slate-400">Analysis</p>
                </div>
                
                <div className="flex-1 mx-4 h-px bg-gradient-to-r from-brand-emerald via-red-400 to-brand-amber relative">
                  <motion.div 
                    className="absolute top-1/2 w-2 h-2 bg-red-400 rounded-full transform -translate-y-1/2"
                    animate={{ left: ["25%", "75%", "25%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                
                <div className="text-center">
                  <motion.div 
                    className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mb-3 mx-auto"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <span className="text-xs font-bold">SEC</span>
                  </motion.div>
                  <p className="text-xs text-slate-400">Security</p>
                </div>
                
                <div className="flex-1 mx-4 h-px bg-gradient-to-r from-red-400 to-brand-amber relative">
                  <motion.div 
                    className="absolute top-1/2 w-2 h-2 bg-brand-amber rounded-full transform -translate-y-1/2"
                    animate={{ right: ["25%", "75%", "25%"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                </div>
                
                <div className="text-center">
                  <motion.div 
                    className="w-16 h-16 bg-brand-amber rounded-full flex items-center justify-center mb-3 mx-auto"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <span className="text-xs font-bold">PERF</span>
                  </motion.div>
                  <p className="text-xs text-slate-400">Performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

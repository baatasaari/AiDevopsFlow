import { motion } from "framer-motion";

export default function ArchitectureDiagram() {
  const agents = [
    {
      id: "code",
      name: "Code Analysis Agent",
      description: "Static analysis, quality metrics, and code review automation",
      color: "bg-brand-emerald",
      icon: "💻",
      position: { x: "16.67%", y: "20%" }
    },
    {
      id: "security",
      name: "Security Guardian", 
      description: "Vulnerability scanning, compliance monitoring, and threat detection",
      color: "bg-red-500",
      icon: "🛡️",
      position: { x: "50%", y: "20%" }
    },
    {
      id: "performance",
      name: "Performance Agent",
      description: "Load testing, performance profiling, and optimization recommendations", 
      color: "bg-brand-amber",
      icon: "⚡",
      position: { x: "83.33%", y: "20%" }
    },
    {
      id: "test",
      name: "Test Orchestrator",
      description: "Test strategy optimization, automated testing, and quality gates",
      color: "bg-brand-violet", 
      icon: "🧪",
      position: { x: "16.67%", y: "80%" }
    },
    {
      id: "deploy",
      name: "Deploy Manager",
      description: "Deployment strategies, rollback automation, and environment management",
      color: "bg-purple-500",
      icon: "🚀", 
      position: { x: "50%", y: "80%" }
    },
    {
      id: "monitor",
      name: "Monitor & Ops",
      description: "Real-time monitoring, alerting, and operational intelligence",
      color: "bg-cyan-500",
      icon: "📊",
      position: { x: "83.33%", y: "80%" }
    }
  ];

  return (
    <div className="relative min-h-96">
      {/* Central Orchestrator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          className="w-32 h-32 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full flex items-center justify-center cursor-pointer"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 40px rgba(59, 130, 246, 0.6)",
              "0 0 20px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm font-semibold text-white">AI Orchestrator</div>
          </div>
        </motion.div>
      </div>

      {/* Agent Nodes */}
      {agents.map((agent, index) => (
        <motion.div
          key={agent.id}
          className="absolute cursor-pointer"
          style={{ 
            left: agent.position.x, 
            top: agent.position.y,
            transform: "translate(-50%, -50%)"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 4
          }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="bg-slate-700/50 rounded-xl p-6 w-64 hover:bg-slate-700 transition-all backdrop-blur-sm border border-slate-600/30">
            <div className={`w-12 h-12 ${agent.color} rounded-lg flex items-center justify-center mb-4`}>
              <span className="text-xl">{agent.icon}</span>
            </div>
            <h4 className="font-semibold mb-2 text-white">{agent.name}</h4>
            <p className="text-sm text-slate-400">{agent.description}</p>
          </div>
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {agents.map((agent, index) => {
          const centerX = 50;
          const centerY = 50;
          const agentX = parseFloat(agent.position.x);
          const agentY = parseFloat(agent.position.y);
          
          return (
            <motion.line
              key={`line-${agent.id}`}
              x1={`${centerX}%`}
              y1={`${centerY}%`}
              x2={`${agentX}%`}
              y2={`${agentY}%`}
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          );
        })}
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data Flow Indicators */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-blue rounded-full"
            style={{
              left: `${25 + i * 25}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
}

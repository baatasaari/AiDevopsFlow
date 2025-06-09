import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Roadmap() {
  const phases = [
    {
      number: 1,
      title: "Foundation & Quick Wins",
      description: "Immediate integration with Harness pipelines and deploy first AI agents for instant ROI",
      timeline: "2-3 months",
      color: "from-brand-blue to-brand-violet",
      textColor: "text-brand-blue",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200",
      items: [
        "Code Analysis Agent integration with existing repos",
        "Harness CD pipeline enhancement", 
        "Initial 30% deployment time reduction"
      ]
    },
    {
      number: 2,
      title: "Security & Compliance",
      description: "Deploy security agents while maintaining existing compliance frameworks",
      timeline: "1-2 months",
      color: "from-brand-violet to-brand-emerald",
      textColor: "text-brand-violet",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200",
      items: [
        "Security Guardian integration with current policies",
        "Automated vulnerability scanning in pipelines",
        "Zero impact to production data governance"
      ]
    },
    {
      number: 3,
      title: "Performance & Monitoring",
      description: "Full GKE and Istio integration with predictive capabilities",
      timeline: "2-3 months", 
      color: "from-brand-emerald to-green-400",
      textColor: "text-brand-emerald",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200",
      items: [
        "Performance Agent deployment across all environments",
        "Advanced monitoring with GKE clusters",
        "Predictive scaling and cost optimization"
      ]
    },
    {
      number: 4,
      title: "Autonomous Operations",
      description: "Complete zero-touch production with full AI orchestration",
      timeline: "1-2 months",
      color: "from-brand-amber to-orange-400", 
      textColor: "text-brand-amber",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200",
      items: [
        "Full autonomous production deployments",
        "AI-powered incident response and resolution",
        "Complete ROI realization and expansion planning"
      ]
    }
  ];

  const successMetrics = [
    { value: "$2.4M", label: "Annual Cost Savings", color: "text-brand-blue" },
    { value: "60%", label: "Faster Time-to-Market", color: "text-brand-violet" },
    { value: "95%", label: "Production Reliability", color: "text-brand-emerald" },
    { value: "40%", label: "Resource Optimization", color: "text-brand-amber" }
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
          <h2 className="text-4xl font-bold mb-4">Implementation Roadmap & Business Case</h2>
          <p className="text-xl text-slate-300">
            Phased approach to minimize risk while maximizing immediate value delivery
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-blue via-brand-violet to-brand-emerald" />

          {phases.map((phase, index) => {
            const isEven = index % 2 === 0;
            const delay = index * 0.3;
            
            return (
              <motion.div
                key={phase.number}
                className={`relative flex items-center ${index < phases.length - 1 ? 'mb-16' : ''}`}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay }}
              >
                {isEven ? (
                  <>
                    <div className="w-1/2 pr-8">
                      <Card className={`bg-slate-800/40 backdrop-blur-sm border-slate-700/30 hover:border-${phase.textColor.split('-')[1]}-500/50 transition-all`}>
                        <CardContent className="p-8">
                          <img 
                            src={phase.image}
                            alt={phase.title}
                            className="rounded-lg mb-6 w-full h-32 object-cover"
                          />
                          <h3 className={`text-2xl font-bold ${phase.textColor} mb-4`}>
                            Phase {phase.number}: {phase.title}
                          </h3>
                          <p className="text-slate-300 mb-4">{phase.description}</p>
                          <ul className="space-y-2 text-sm text-slate-400">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center space-x-2">
                                <div className={`w-1.5 h-1.5 bg-${phase.textColor.split('-')[1]}-500 rounded-full`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 text-sm">
                            <span className={`${phase.textColor} font-semibold`}>Timeline:</span>
                            <span className="text-slate-400"> {phase.timeline}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <motion.div 
                      className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center border-4 border-slate-900 z-10`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay }}
                    >
                      <span className="text-white font-bold">{phase.number}</span>
                    </motion.div>
                    
                    <div className="w-1/2 pl-8" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8" />
                    
                    <motion.div 
                      className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center border-4 border-slate-900 z-10`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay }}
                    >
                      <span className="text-white font-bold">{phase.number}</span>
                    </motion.div>
                    
                    <div className="w-1/2 pl-8">
                      <Card className={`bg-slate-800/40 backdrop-blur-sm border-slate-700/30 hover:border-${phase.textColor.split('-')[1]}-500/50 transition-all`}>
                        <CardContent className="p-8">
                          <img 
                            src={phase.image}
                            alt={phase.title}
                            className="rounded-lg mb-6 w-full h-32 object-cover"
                          />
                          <h3 className={`text-2xl font-bold ${phase.textColor} mb-4`}>
                            Phase {phase.number}: {phase.title}
                          </h3>
                          <p className="text-slate-300 mb-4">{phase.description}</p>
                          <ul className="space-y-2 text-sm text-slate-400">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center space-x-2">
                                <div className={`w-1.5 h-1.5 bg-${phase.textColor.split('-')[1]}-500 rounded-full`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 text-sm">
                            <span className={`${phase.textColor} font-semibold`}>Timeline:</span>
                            <span className="text-slate-400"> {phase.timeline}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
            >
              <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30 text-center">
                <CardContent className="p-6">
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

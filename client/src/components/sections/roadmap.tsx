import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Roadmap() {
  const phases = [
    {
      number: 1,
      title: "Foundation",
      description: "Establish core infrastructure and deploy initial AI agents",
      timeline: "3-4 months",
      color: "from-brand-blue to-brand-violet",
      textColor: "text-brand-blue",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200",
      items: [
        "Deploy Code Analysis Agent",
        "Setup AI Orchestration Platform", 
        "Integrate with existing CI/CD"
      ]
    },
    {
      number: 2,
      title: "Security & Quality",
      description: "Deploy security and testing agents with advanced automation",
      timeline: "2-3 months",
      color: "from-brand-violet to-brand-emerald",
      textColor: "text-brand-violet",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200",
      items: [
        "Activate Security Guardian Agent",
        "Deploy Test Orchestrator Agent",
        "Implement Stage Gate Automation"
      ]
    },
    {
      number: 3,
      title: "Intelligence",
      description: "Deploy performance and monitoring agents with ML capabilities",
      timeline: "3-4 months", 
      color: "from-brand-emerald to-green-400",
      textColor: "text-brand-emerald",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200",
      items: [
        "Activate Performance Agent",
        "Deploy Monitor & Ops Agent",
        "Enable Predictive Analytics"
      ]
    },
    {
      number: 4,
      title: "Optimization",
      description: "Complete deployment automation and advanced AI optimization",
      timeline: "2-3 months",
      color: "from-brand-amber to-orange-400", 
      textColor: "text-brand-amber",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200",
      items: [
        "Deploy Manager Agent",
        "Full Autonomous Operations",
        "Advanced ML Optimization"
      ]
    }
  ];

  const successMetrics = [
    { value: "6-12", label: "Months ROI", color: "text-brand-blue" },
    { value: "80%", label: "Faster Delivery", color: "text-brand-violet" },
    { value: "95%", label: "Quality Improvement", color: "text-brand-emerald" },
    { value: "60%", label: "Cost Reduction", color: "text-brand-amber" }
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
          <h2 className="text-4xl font-bold mb-4">Implementation Roadmap</h2>
          <p className="text-xl text-slate-300">
            Strategic phases for GenAI DevOps transformation
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

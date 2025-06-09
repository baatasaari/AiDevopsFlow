import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Overview() {
  const stats = [
    { value: "6-12", label: "Months ROI", color: "text-brand-blue" },
    { value: "60%", label: "Faster Delivery", color: "text-brand-emerald" },
    { value: "95%", label: "Reliability Increase", color: "text-brand-violet" },
    { value: "$2.4M", label: "Annual Savings", color: "text-brand-amber" },
  ];

  const features = [
    {
      title: "Business Impact",
      description: "Direct ROI through reduced deployment times, fewer production incidents, and optimized resource utilization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      color: "border-brand-blue/50",
      points: [
        "60% reduction in deployment time",
        "95% decrease in production incidents", 
        "40% improvement in resource efficiency"
      ]
    },
    {
      title: "Current State Integration",
      description: "Seamlessly integrates with your existing Harness pipelines, GKE infrastructure, and Istio service mesh.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      color: "border-brand-violet/50",
      points: [
        "Zero disruption to current workflows",
        "Gradual agent deployment strategy",
        "Maintains existing security protocols"
      ]
    },
    {
      title: "Competitive Advantage",
      description: "First-mover advantage in AI-powered DevOps with autonomous data product delivery capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      color: "border-brand-emerald/50",
      points: [
        "Market-leading deployment velocity",
        "Zero-touch production environments",
        "Predictive quality assurance"
      ]
    }
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-brand-blue via-brand-violet to-brand-emerald bg-clip-text text-transparent">
            GenAI DevOps Transformation Proposal
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your current DevOps operations with AI-powered automation, reducing deployment time by 60% and increasing reliability by 95% through intelligent orchestration.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/30">
                  <CardContent className="p-6 text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`bg-slate-800/40 backdrop-blur-sm border-slate-700/30 hover:${feature.color} transition-all duration-300 h-full`}>
                <CardContent className="p-8">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="rounded-lg mb-6 w-full h-40 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-4 text-brand-blue">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

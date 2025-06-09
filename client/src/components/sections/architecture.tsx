import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ArchitectureDiagram from "@/components/diagrams/architecture-diagram";

export default function Architecture() {
  const architectureDetails = [
    {
      title: "Communication Layer",
      color: "text-brand-blue",
      dotColor: "bg-brand-blue",
      items: [
        "Event-driven messaging with Apache Kafka",
        "RESTful APIs for agent coordination", 
        "WebSocket connections for real-time updates"
      ]
    },
    {
      title: "Infrastructure",
      color: "text-brand-emerald", 
      dotColor: "bg-brand-emerald",
      items: [
        "Kubernetes-native agent deployment",
        "Auto-scaling based on workload demands",
        "Multi-cloud deployment capabilities"
      ]
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
          <h2 className="text-4xl font-bold mb-4">System Architecture</h2>
          <p className="text-xl text-slate-300">
            Distributed AI architecture with autonomous agents and intelligent orchestration
          </p>
        </motion.div>

        {/* Interactive Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
            <CardContent className="p-8">
              <ArchitectureDiagram />
            </CardContent>
          </Card>
        </motion.div>

        {/* Architecture Details */}
        <div className="grid grid-cols-2 gap-8">
          {architectureDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-4 flex items-center ${detail.color}`}>
                    <div className={`w-3 h-3 ${detail.dotColor} rounded-full mr-3`} />
                    {detail.title}
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    {detail.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className={`w-1.5 h-1.5 ${detail.dotColor} rounded-full mt-2`} />
                        <span>{item}</span>
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

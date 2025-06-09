import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Loader2, 
  Clock, 
  GitBranch, 
  Hammer, 
  TestTube, 
  Shield, 
  CloudDownload 
} from "lucide-react";

export default function Pipeline() {
  const pipelineStages = [
    {
      name: "Source Control",
      description: "Repository cloned, changes detected",
      status: "completed",
      duration: "2m 14s",
      icon: GitBranch
    },
    {
      name: "Build & Compile", 
      description: "Dependencies resolved, artifacts generated",
      status: "completed",
      duration: "4m 32s",
      icon: Hammer
    },
    {
      name: "AI-Powered Testing",
      description: "Running intelligent test suite (847/1200 tests)",
      status: "running",
      duration: "1m 23s",
      progress: 70.5,
      icon: TestTube
    },
    {
      name: "Security Scanning",
      description: "Waiting for test completion", 
      status: "pending",
      duration: null,
      icon: Shield
    },
    {
      name: "Smart Deployment",
      description: "Awaiting security clearance",
      status: "pending", 
      duration: null,
      icon: CloudDownload
    }
  ];

  const performanceMetrics = [
    {
      label: "Average Build Time",
      value: "12m 34s",
      change: "↓ 15%",
      changeColor: "text-green-400"
    },
    {
      label: "Success Rate", 
      value: "94.2%",
      change: "↑ 2.1%",
      changeColor: "text-green-400"
    },
    {
      label: "MTTR",
      value: "1.8h", 
      change: "↓ 32%",
      changeColor: "text-green-400"
    }
  ];

  const aiInsights = [
    {
      message: "Detected pattern: Test failures increase 23% after weekend deployments",
      type: "info",
      color: "text-brand-blue",
      bg: "bg-brand-blue/10",
      border: "border-brand-blue/20"
    },
    {
      message: "Recommendation: Implement progressive deployment for better reliability",
      type: "success", 
      color: "text-brand-emerald",
      bg: "bg-brand-emerald/10",
      border: "border-brand-emerald/20"
    }
  ];

  const resourceMetrics = [
    { label: "CPU Usage", value: "67%", color: "text-brand-amber" },
    { label: "Memory Usage", value: "45%", color: "text-brand-amber" },
    { label: "Cost Efficiency", value: "$247/mo", change: "↓ 18%", color: "text-green-400" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-white" />;
      case "running":
        return <Loader2 className="w-6 h-6 text-white animate-spin" />;
      case "pending":
        return <Clock className="w-6 h-6 text-slate-400" />;
      default:
        return <Clock className="w-6 h-6 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "running":
        return "bg-brand-blue";
      case "pending":
        return "bg-slate-600";
      default:
        return "bg-slate-600";
    }
  };

  const getCardStyle = (status: string) => {
    switch (status) {
      case "running":
        return "border-l-4 border-brand-blue";
      case "completed":
        return "bg-slate-700/30";
      case "pending":
        return "bg-slate-700/20 opacity-60";
      default:
        return "bg-slate-700/30";
    }
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
          <h2 className="text-4xl font-bold mb-4">Intelligent Pipeline Orchestration</h2>
          <p className="text-xl text-slate-300">
            Automated, adaptive, and self-optimizing CI/CD pipelines
          </p>
        </motion.div>

        {/* Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Pipeline Status</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-sm text-green-400">Active</span>
                  </div>
                  <div className="text-sm text-slate-400">Build #1247</div>
                </div>
              </div>

              {/* Pipeline Stages */}
              <div className="space-y-6">
                {pipelineStages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <motion.div
                      key={stage.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`flex items-center space-x-4 p-4 rounded-xl ${getCardStyle(stage.status)}`}
                    >
                      <div className={`w-12 h-12 ${getStatusColor(stage.status)} rounded-full flex items-center justify-center`}>
                        {getStatusIcon(stage.status)}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          stage.status === "completed" ? "text-green-400" :
                          stage.status === "running" ? "text-brand-blue" : "text-slate-400"
                        }`}>
                          {stage.name}
                        </h4>
                        <p className="text-sm text-slate-400">{stage.description}</p>
                        {stage.status === "running" && stage.progress && (
                          <Progress value={stage.progress} className="mt-2" />
                        )}
                      </div>
                      <div className={`text-sm ${
                        stage.status === "completed" ? "text-green-400" :
                        stage.status === "running" ? "text-brand-blue" : "text-slate-500"
                      }`}>
                        {stage.status === "completed" && `Completed • ${stage.duration}`}
                        {stage.status === "running" && `Running • ${stage.duration}`}
                        {stage.status === "pending" && "Pending"}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pipeline Analytics */}
        <div className="grid grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Performance Trends</h3>
                <div className="space-y-4">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">{metric.label}</span>
                      <span className={`text-sm font-semibold ${metric.changeColor}`}>
                        {metric.value} {metric.change}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">AI Insights</h3>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div 
                      key={index}
                      className={`p-3 ${insight.bg} border ${insight.border} rounded-lg`}
                    >
                      <p className={`text-sm ${insight.color}`}>
                        {insight.message}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Resource Optimization</h3>
                <div className="space-y-4">
                  {resourceMetrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">{metric.label}</span>
                      <span className={`text-sm font-semibold ${metric.color}`}>
                        {metric.value} {metric.change}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export const presentationData = {
  overview: {
    title: "GenAI DevOps Lifecycle Platform",
    subtitle: "Revolutionizing software delivery through intelligent automation, predictive analytics, and autonomous decision-making across the entire DevOps lifecycle.",
    stats: [
      { value: "95%", label: "Deployment Success", color: "text-brand-blue" },
      { value: "60%", label: "Faster Delivery", color: "text-brand-emerald" },
      { value: "80%", label: "Issue Prevention", color: "text-brand-violet" },
      { value: "24/7", label: "Automated Ops", color: "text-brand-amber" },
    ]
  },
  agents: [
    {
      id: "code-analysis",
      name: "Code Analysis Agent",
      type: "quality",
      description: "Static analysis, quality metrics, and code review automation",
      color: "brand-emerald",
      metrics: {
        qualityScore: 92,
        filesAnalyzed: 1247,
        issuesFixed: 23
      }
    },
    {
      id: "security-guardian", 
      name: "Security Guardian Agent",
      type: "security",
      description: "Vulnerability scanning, compliance monitoring, and threat detection",
      color: "red-500",
      metrics: {
        securityScore: 95,
        criticalVulns: 0,
        compliance: 100
      }
    },
    {
      id: "performance",
      name: "Performance Agent", 
      type: "performance",
      description: "Load testing, performance profiling, and optimization recommendations",
      color: "brand-amber",
      metrics: {
        responseTime: "127ms",
        uptime: "99.9%",
        rpsCapacity: "2.1k"
      }
    },
    {
      id: "test-orchestrator",
      name: "Test Orchestrator Agent",
      type: "testing", 
      description: "Test strategy optimization, automated testing, and quality gates",
      color: "brand-violet"
    },
    {
      id: "deploy-manager",
      name: "Deploy Manager Agent",
      type: "deployment",
      description: "Deployment strategies, rollback automation, and environment management", 
      color: "purple-500"
    },
    {
      id: "monitor-ops",
      name: "Monitor & Ops Agent",
      type: "monitoring",
      description: "Real-time monitoring, alerting, and operational intelligence",
      color: "cyan-500"
    }
  ],
  pipeline: {
    currentBuild: "1247",
    stages: [
      {
        name: "Source Control",
        status: "completed",
        duration: "2m 14s",
        description: "Repository cloned, changes detected"
      },
      {
        name: "Build & Compile",
        status: "completed", 
        duration: "4m 32s",
        description: "Dependencies resolved, artifacts generated"
      },
      {
        name: "AI-Powered Testing",
        status: "running",
        duration: "1m 23s",
        progress: 70.5,
        description: "Running intelligent test suite (847/1200 tests)"
      },
      {
        name: "Security Scanning",
        status: "pending",
        description: "Waiting for test completion"
      },
      {
        name: "Smart Deployment", 
        status: "pending",
        description: "Awaiting security clearance"
      }
    ]
  }
};

export type PresentationData = typeof presentationData;

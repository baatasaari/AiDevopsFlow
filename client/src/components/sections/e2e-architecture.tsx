import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GitBranch, 
  Code, 
  Shield, 
  TestTube, 
  CloudUpload, 
  Monitor,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  Database,
  Server,
  Network,
  Lock,
  Zap
} from "lucide-react";

export default function E2EArchitecture() {
  const workflowSteps = [
    {
      id: "commit",
      title: "Developer Commits Code",
      description: "Developer pushes code to Git repository with feature branch",
      icon: GitBranch,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      duration: "< 1 min",
      triggers: [
        "Webhook to Harness pipeline",
        "Code Analysis Agent activation",
        "Repository clone to build environment"
      ],
      artifacts: [
        "Git commit metadata",
        "Changed file analysis",
        "Diff comparison report"
      ]
    },
    {
      id: "analysis",
      title: "AI Code Analysis",
      description: "Code Analysis Agent performs static analysis, quality checks, and security scanning",
      icon: Code,
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      duration: "2-4 min",
      triggers: [
        "Static code analysis (SonarQube integration)",
        "Code quality metrics calculation",
        "Technical debt assessment",
        "AI-powered code review suggestions"
      ],
      artifacts: [
        "Code quality report (JSON)",
        "Security vulnerability scan (SARIF)",
        "Code coverage metrics",
        "AI improvement recommendations"
      ]
    },
    {
      id: "build",
      title: "Intelligent Build Process",
      description: "Enhanced Harness pipeline with AI-optimized build strategies",
      icon: Server,
      color: "bg-violet-500",
      textColor: "text-violet-500",
      duration: "3-8 min",
      triggers: [
        "Dependency resolution and caching",
        "Multi-stage Docker build optimization",
        "Artifact generation and signing",
        "Build performance optimization"
      ],
      artifacts: [
        "Docker container images",
        "Application binaries",
        "SBOM (Software Bill of Materials)",
        "Build performance metrics"
      ]
    },
    {
      id: "security",
      title: "Security Guardian Validation",
      description: "Comprehensive security scanning and compliance validation",
      icon: Shield,
      color: "bg-red-500",
      textColor: "text-red-500",
      duration: "1-3 min",
      triggers: [
        "Container image vulnerability scanning",
        "License compliance checking",
        "Secret detection and validation",
        "Policy enforcement validation"
      ],
      artifacts: [
        "Vulnerability assessment report",
        "Compliance validation certificate",
        "Security policy audit log",
        "Risk assessment matrix"
      ]
    },
    {
      id: "testing",
      title: "AI-Powered Test Orchestration",
      description: "Intelligent test selection and execution across multiple test types",
      icon: TestTube,
      color: "bg-amber-500",
      textColor: "text-amber-500",
      duration: "5-15 min",
      triggers: [
        "Unit test execution with AI optimization",
        "Integration test orchestration",
        "Performance baseline validation",
        "End-to-end test scenario execution"
      ],
      artifacts: [
        "Test execution reports (JUnit/TestNG)",
        "Code coverage analysis",
        "Performance benchmark results",
        "Test failure root cause analysis"
      ]
    },
    {
      id: "staging",
      title: "Environment Deployment",
      description: "Automated deployment to Dev/Int/Preprod environments with validation",
      icon: CloudUpload,
      color: "bg-cyan-500",
      textColor: "text-cyan-500",
      duration: "3-7 min",
      triggers: [
        "GKE cluster deployment via MCP",
        "Istio service mesh configuration",
        "Environment-specific configuration injection",
        "Health check validation"
      ],
      artifacts: [
        "Kubernetes deployment manifests",
        "Istio configuration files",
        "Environment health reports",
        "Deployment success confirmations"
      ]
    },
    {
      id: "monitoring",
      title: "Continuous Monitoring",
      description: "Real-time monitoring and observability across all environments",
      icon: Monitor,
      color: "bg-purple-500",
      textColor: "text-purple-500",
      duration: "Continuous",
      triggers: [
        "Metrics collection and aggregation",
        "Log analysis and correlation",
        "Anomaly detection and alerting",
        "Performance trend analysis"
      ],
      artifacts: [
        "Prometheus metrics data",
        "Grafana dashboards",
        "Alert rule configurations",
        "SLI/SLO compliance reports"
      ]
    },
    {
      id: "production",
      title: "Production Deployment",
      description: "Zero-touch production deployment with automated validation",
      icon: Zap,
      color: "bg-green-500",
      textColor: "text-green-500",
      duration: "2-5 min",
      triggers: [
        "Blue-green deployment execution",
        "Traffic shifting with Istio",
        "Automated rollback triggers",
        "Production health validation"
      ],
      artifacts: [
        "Production deployment logs",
        "Traffic routing configurations",
        "Rollback procedures",
        "Business metric validation"
      ]
    }
  ];

  const environmentFlow = [
    {
      name: "Development",
      description: "Developer workstation and feature branch testing",
      dataPolicy: "Mock data, local development datasets",
      securityLevel: "Basic authentication, local secrets",
      infrastructure: "Local Docker, minikube clusters",
      agents: ["Code Analysis", "Basic Security Scanning"]
    },
    {
      name: "Integration",
      description: "Service integration and API contract validation",
      dataPolicy: "Synthetic data mimicking production structure",
      securityLevel: "Service-to-service authentication, vault integration",
      infrastructure: "Dedicated GKE cluster, Istio service mesh",
      agents: ["Code Analysis", "Security Guardian", "Test Orchestrator"]
    },
    {
      name: "Pre-Production",
      description: "Production-like environment for final validation",
      dataPolicy: "Anonymized production data, GDPR compliant",
      securityLevel: "Full production security controls, compliance validation",
      infrastructure: "Production-mirrored GKE cluster, full Istio configuration",
      agents: ["All agents active", "Performance validation", "Full security scanning"]
    },
    {
      name: "Production",
      description: "Live production environment with zero human intervention",
      dataPolicy: "Live production data with full governance",
      securityLevel: "Maximum security, automated threat detection",
      infrastructure: "Multi-zone GKE clusters, production Istio mesh",
      agents: ["Full autonomous operation", "Predictive scaling", "Incident auto-resolution"]
    }
  ];

  const agentInteractions = [
    {
      from: "Code Analysis Agent",
      to: "Security Guardian Agent",
      trigger: "Code quality gate passed",
      data: "Code quality metrics, identified issues, remediation suggestions",
      decision: "Proceed to security scanning or block for quality improvements"
    },
    {
      from: "Security Guardian Agent", 
      to: "Test Orchestrator Agent",
      trigger: "Security clearance granted",
      data: "Security scan results, compliance status, risk assessment",
      decision: "Execute test suite or escalate security concerns"
    },
    {
      from: "Test Orchestrator Agent",
      to: "Performance Agent",
      trigger: "Functional tests passed",
      data: "Test execution results, coverage metrics, failure analysis",
      decision: "Begin performance testing or investigate test failures"
    },
    {
      from: "Performance Agent",
      to: "Deployment Agent",
      trigger: "Performance benchmarks met",
      data: "Performance metrics, resource utilization, scaling recommendations",
      decision: "Authorize deployment or optimize performance"
    },
    {
      from: "Deployment Agent",
      to: "Monitoring Agent",
      trigger: "Deployment successful",
      data: "Deployment status, environment health, configuration changes",
      decision: "Begin monitoring or execute rollback procedures"
    },
    {
      from: "Monitoring Agent",
      to: "Master Orchestrator",
      trigger: "System health validated",
      data: "Health metrics, performance indicators, anomaly reports",
      decision: "Complete deployment cycle or trigger incident response"
    }
  ];

  const stageGates = [
    {
      gate: "Code Quality Gate",
      criteria: [
        "Code coverage > 85%",
        "Cyclomatic complexity < 10", 
        "Zero critical security vulnerabilities",
        "AI code review score > 8.0"
      ],
      automatedChecks: [
        "SonarQube quality analysis",
        "ESLint/Prettier formatting",
        "Dependency vulnerability scan",
        "License compliance validation"
      ],
      failureActions: [
        "Block pipeline progression",
        "Generate improvement recommendations",
        "Notify development team",
        "Create technical debt tickets"
      ]
    },
    {
      gate: "Security Clearance Gate",
      criteria: [
        "Zero critical/high vulnerabilities",
        "All secrets properly managed",
        "Compliance policies satisfied",
        "Container image signed and verified"
      ],
      automatedChecks: [
        "Snyk vulnerability scanning",
        "Twistlock container analysis",
        "HashiCorp Vault integration",
        "Policy engine validation"
      ],
      failureActions: [
        "Quarantine vulnerable artifacts",
        "Escalate to security team",
        "Generate remediation plan",
        "Block environment promotion"
      ]
    },
    {
      gate: "Performance Validation Gate",
      criteria: [
        "Response time < 200ms (95th percentile)",
        "Throughput > 1000 RPS",
        "Error rate < 0.1%",
        "Resource utilization < 70%"
      ],
      automatedChecks: [
        "Load testing with JMeter",
        "Stress testing scenarios",
        "Memory leak detection",
        "Database performance validation"
      ],
      failureActions: [
        "Performance optimization suggestions",
        "Resource scaling recommendations",
        "Code hotspot identification",
        "Infrastructure tuning proposals"
      ]
    },
    {
      gate: "Production Readiness Gate",
      criteria: [
        "All previous gates passed",
        "Monitoring and alerting configured",
        "Rollback procedures validated",
        "Business stakeholder approval"
      ],
      automatedChecks: [
        "End-to-end health validation",
        "Disaster recovery testing",
        "Compliance audit completion",
        "Change management approval"
      ],
      failureActions: [
        "Complete rollback execution",
        "Incident response activation",
        "Stakeholder notification",
        "Post-mortem scheduling"
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
          <h2 className="text-4xl font-bold mb-4">End-to-End DevOps Architecture</h2>
          <p className="text-xl text-slate-300">
            Complete workflow from code commit to production deployment with AI orchestration
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Complete DevOps Workflow</h3>
              
              <div className="space-y-6">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-6 p-6 bg-slate-700/30 rounded-xl"
                    >
                      <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`text-xl font-semibold ${step.textColor}`}>
                            {step.title}
                          </h4>
                          <Badge variant="outline" className="text-slate-400">
                            {step.duration}
                          </Badge>
                        </div>
                        
                        <p className="text-slate-300 mb-4">{step.description}</p>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-2">Triggers & Actions</h5>
                            <ul className="text-sm text-slate-400 space-y-1">
                              {step.triggers.map((trigger, triggerIndex) => (
                                <li key={triggerIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                                  <span>{trigger}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-slate-200 mb-2">Generated Artifacts</h5>
                            <ul className="text-sm text-slate-400 space-y-1">
                              {step.artifacts.map((artifact, artifactIndex) => (
                                <li key={artifactIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full" />
                                  <span>{artifact}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Environment Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Environment Progression Strategy</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {environmentFlow.map((env, index) => (
                  <motion.div
                    key={env.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-6 bg-slate-700/30 rounded-xl"
                  >
                    <h4 className="text-lg font-semibold text-brand-blue mb-3">{env.name} Environment</h4>
                    <p className="text-slate-300 text-sm mb-4">{env.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-semibold text-slate-400">DATA POLICY:</span>
                        <p className="text-xs text-slate-300">{env.dataPolicy}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400">SECURITY:</span>
                        <p className="text-xs text-slate-300">{env.securityLevel}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400">INFRASTRUCTURE:</span>
                        <p className="text-xs text-slate-300">{env.infrastructure}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400">ACTIVE AGENTS:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {env.agents.map((agent, agentIndex) => (
                            <Badge key={agentIndex} variant="secondary" className="text-xs">
                              {agent}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Agent Interaction Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Agent Communication & Decision Flow</h3>
              
              <div className="space-y-4">
                {agentInteractions.map((interaction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-slate-700/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-2 flex-1">
                      <div className="text-sm font-semibold text-brand-blue">{interaction.from}</div>
                      <div className="text-slate-400">→</div>
                      <div className="text-sm font-semibold text-brand-emerald">{interaction.to}</div>
                    </div>
                    
                    <div className="flex-2 text-xs text-slate-300">
                      <div className="mb-1"><strong>Trigger:</strong> {interaction.trigger}</div>
                      <div className="mb-1"><strong>Data:</strong> {interaction.data}</div>
                      <div><strong>Decision:</strong> {interaction.decision}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stage Gates Detail */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">AI-Powered Stage Gate Definitions</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stageGates.map((gate, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="p-6 bg-slate-700/30 rounded-xl"
                  >
                    <h4 className="text-lg font-semibold text-brand-violet mb-4">{gate.gate}</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-slate-300 mb-2">Success Criteria</h5>
                        <ul className="text-xs text-slate-400 space-y-1">
                          {gate.criteria.map((criterion, critIndex) => (
                            <li key={critIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span>{criterion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-slate-300 mb-2">Automated Checks</h5>
                        <ul className="text-xs text-slate-400 space-y-1">
                          {gate.automatedChecks.map((check, checkIndex) => (
                            <li key={checkIndex} className="flex items-center space-x-2">
                              <Clock className="w-3 h-3 text-blue-400" />
                              <span>{check}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-slate-300 mb-2">Failure Actions</h5>
                        <ul className="text-xs text-slate-400 space-y-1">
                          {gate.failureActions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-center space-x-2">
                              <AlertTriangle className="w-3 h-3 text-red-400" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
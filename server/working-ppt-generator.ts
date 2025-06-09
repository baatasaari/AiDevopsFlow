import PptxGenJS from 'pptxgenjs';

export async function generateWorkingPowerPoint(): Promise<Buffer> {
  const pptx = new PptxGenJS();
  
  // Set basic properties
  pptx.author = 'GenAI DevOps Platform';
  pptx.title = 'GenAI-Powered DevOps Platform Architecture';

  // Slide 1: Title
  const slide1 = pptx.addSlide();
  slide1.background = { color: '1e293b' };
  
  slide1.addText('GenAI-Powered DevOps Platform', {
    x: 1,
    y: 2,
    w: 8,
    h: 1.5,
    fontSize: 36,
    bold: true,
    color: 'ffffff',
    align: 'center'
  });

  slide1.addText('Complete End-to-End Architecture for Autonomous Software Delivery', {
    x: 1,
    y: 3.5,
    w: 8,
    h: 0.8,
    fontSize: 20,
    color: 'cbd5e1',
    align: 'center'
  });

  slide1.addText('Prepared for: vijay.rentala@gmail.com', {
    x: 1,
    y: 5.5,
    w: 8,
    h: 0.4,
    fontSize: 14,
    color: '64748b',
    align: 'center',
    italic: true
  });

  // Slide 2: Overview
  const slide2 = pptx.addSlide();
  slide2.background = { color: '1e293b' };
  
  slide2.addText('Platform Overview', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 28,
    bold: true,
    color: 'ffffff',
    align: 'center'
  });

  slide2.addText('Key Benefits & Improvements:', {
    x: 1,
    y: 1.5,
    w: 8,
    h: 0.5,
    fontSize: 18,
    bold: true,
    color: '3b82f6'
  });

  const benefits = [
    '• 75% reduction in deployment lead time (< 2 hours)',
    '• 60% improvement in defect escape rate (< 2%)',
    '• 80% faster mean time to recovery (< 30 minutes)',
    '• 90% faster security vulnerability resolution',
    '• $2.4M+ annual cost savings with 8-month payback',
    '• Zero-touch production deployments with full automation'
  ];

  benefits.forEach((benefit, index) => {
    slide2.addText(benefit, {
      x: 1,
      y: 2.2 + (index * 0.5),
      w: 8,
      h: 0.4,
      fontSize: 14,
      color: '10b981'
    });
  });

  // Slide 3: Architecture
  const slide3 = pptx.addSlide();
  slide3.background = { color: '1e293b' };
  
  slide3.addText('System Architecture', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 28,
    bold: true,
    color: 'ffffff',
    align: 'center'
  });

  const architectureLayers = [
    {
      title: 'Presentation Layer',
      description: 'Developer Dashboard • Operations Console • Business Analytics'
    },
    {
      title: 'Orchestration Layer',
      description: 'Master Orchestrator • 6 Specialized AI Agents • Decision Engine'
    },
    {
      title: 'MCP Integration Layer',
      description: 'Harness MCP Server • GKE MCP Server • Istio MCP Server'
    },
    {
      title: 'Infrastructure Layer',
      description: 'Harness CD Platform • GKE Clusters • Istio Service Mesh'
    }
  ];

  architectureLayers.forEach((layer, index) => {
    const yPos = 1.8 + (index * 1.2);
    
    slide3.addText(layer.title, {
      x: 1,
      y: yPos,
      w: 8,
      h: 0.4,
      fontSize: 16,
      bold: true,
      color: '3b82f6'
    });
    
    slide3.addText(layer.description, {
      x: 1,
      y: yPos + 0.4,
      w: 8,
      h: 0.6,
      fontSize: 12,
      color: 'cbd5e1'
    });
  });

  // Slide 4: AI Agents
  const slide4 = pptx.addSlide();
  slide4.background = { color: '1e293b' };
  
  slide4.addText('AI Agent Ecosystem', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 28,
    bold: true,
    color: 'ffffff',
    align: 'center'
  });

  const agents = [
    'DevOps Agent: Pipeline orchestration and infrastructure management',
    'Security Guardian: Security scanning and compliance validation',
    'Data Governance Agent: Data classification and privacy compliance',
    'Testing Agent: Test orchestration and quality assurance',
    'Monitoring Agent: Observability and incident response',
    'Deployment Agent: Environment management and deployment execution'
  ];

  agents.forEach((agent, index) => {
    slide4.addText(`${index + 1}. ${agent}`, {
      x: 1,
      y: 1.5 + (index * 0.7),
      w: 8,
      h: 0.6,
      fontSize: 12,
      color: 'ffffff'
    });
  });

  // Slide 5: End-to-End Workflow
  const slide5 = pptx.addSlide();
  slide5.background = { color: '1e293b' };
  
  slide5.addText('End-to-End DevOps Workflow', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 28,
    bold: true,
    color: 'ffffff',
    align: 'center'
  });

  const workflowSteps = [
    '1. Code Commit (< 1 min) - Developer pushes code, triggers pipeline',
    '2. AI Code Analysis (2-4 min) - Static analysis, quality checks, security scan',
    '3. Intelligent Build (3-8 min) - Optimized build with dependency caching',
    '4. Security Validation (1-3 min) - Comprehensive security and compliance checks',
    '5. Test Orchestration (5-15 min) - AI-powered test selection and execution',
    '6. Environment Deployment (3-7 min) - GKE deployment with Istio configuration',
    '7. Monitoring (Continuous) - Real-time monitoring and anomaly detection',
    '8. Production Deploy (2-5 min) - Zero-touch production deployment'
  ];

  workflowSteps.forEach((step, index) => {
    slide5.addText(step, {
      x: 1,
      y: 1.5 + (index * 0.4),
      w: 8,
      h: 0.35,
      fontSize: 10,
      color: 'ffffff'
    });
  });

  // Slide 6: Environment Strategy
  const slide6 = pptx.addSlide();
  slide6.background = { color: '1e293b' };
  
  slide6.addText('Environment Progression Strategy', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 28,
    bold: true,
    color: 'ffffff',
    align: 'center'
  });

  const environments = [
    'Development: Mock data, basic authentication, Code Analysis Agent',
    'Integration: Synthetic data, service auth, Security + Testing agents',
    'Pre-Production: Anonymized data, full security, all agents active',
    'Production: Live data, maximum security, full autonomous operation'
  ];

  environments.forEach((env, index) => {
    slide6.addText(`${index + 1}. ${env}`, {
      x: 1,
      y: 1.8 + (index * 0.8),
      w: 8,
      h: 0.7,
      fontSize: 12,
      color: 'ffffff'
    });
  });

  // Slide 7: Implementation Roadmap
  const slide7 = pptx.addSlide();
  slide7.background = { color: '1e293b' };
  
  slide7.addText('Implementation Roadmap', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 28,
    bold: true,
    color: 'ffffff',
    align: 'center'
  });

  const roadmap = [
    'Q1 2025: Foundation & Core Agents (Master Orchestrator, DevOps + Security agents)',
    'Q2 2025: Platform Integration (GKE automation, Istio integration, Testing + Monitoring)',
    'Q3 2025: Advanced AI & Security (Data Governance, advanced security, predictive analytics)',
    'Q4 2025: Production & Optimization (Zero-touch deployment, full autonomous operation)'
  ];

  roadmap.forEach((quarter, index) => {
    slide7.addText(quarter, {
      x: 1,
      y: 1.8 + (index * 0.8),
      w: 8,
      h: 0.7,
      fontSize: 11,
      color: '8b5cf6'
    });
  });

  // Slide 8: Next Steps
  const slide8 = pptx.addSlide();
  slide8.background = { color: '1e293b' };
  
  slide8.addText('Next Steps', {
    x: 1,
    y: 1.5,
    w: 8,
    h: 0.8,
    fontSize: 32,
    bold: true,
    color: 'ffffff',
    align: 'center'
  });

  slide8.addText('Ready to Transform Your DevOps Pipeline?', {
    x: 1,
    y: 2.5,
    w: 8,
    h: 0.6,
    fontSize: 20,
    color: '3b82f6',
    align: 'center'
  });

  const nextSteps = [
    '1. Schedule technical deep-dive session',
    '2. Define pilot project scope and timeline',
    '3. Establish development team requirements',
    '4. Begin Phase 1 implementation planning'
  ];

  nextSteps.forEach((step, index) => {
    slide8.addText(step, {
      x: 1,
      y: 3.5 + (index * 0.4),
      w: 8,
      h: 0.3,
      fontSize: 14,
      color: 'ffffff'
    });
  });

  slide8.addText('Contact: vijay.rentala@gmail.com', {
    x: 1,
    y: 5.8,
    w: 8,
    h: 0.5,
    fontSize: 16,
    bold: true,
    color: '10b981',
    align: 'center'
  });

  // Generate presentation using direct callback approach
  return new Promise((resolve, reject) => {
    try {
      pptx.write('base64')
        .then((data: string) => {
          const buffer = Buffer.from(data, 'base64');
          resolve(buffer);
        })
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
}
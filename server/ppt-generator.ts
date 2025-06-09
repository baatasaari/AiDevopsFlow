import PptxGenJS from 'pptxgenjs';
import { presentationData } from '../client/src/lib/presentation-data';

export interface PPTGenerationOptions {
  includeAnimations?: boolean;
  theme?: 'dark' | 'light';
  format?: 'standard' | 'widescreen';
}

export class PowerPointGenerator {
  private pptx: PptxGenJS;
  private theme: 'dark' | 'light';

  constructor(options: PPTGenerationOptions = {}) {
    this.pptx = new PptxGenJS();
    this.theme = options.theme || 'dark';
    
    // Set presentation properties
    this.pptx.defineLayout({ name: 'CUSTOM', width: 13.33, height: 7.5 });
    this.pptx.layout = 'CUSTOM';
    
    // Set presentation metadata
    this.pptx.author = 'GenAI DevOps Platform';
    this.pptx.company = 'DevOps Architecture Team';
    this.pptx.title = 'GenAI-Powered DevOps Platform Architecture';
    this.pptx.subject = 'Complete DevOps transformation with AI-powered automation';
  }

  private getThemeColors() {
    if (this.theme === 'dark') {
      return {
        background: '1e293b',
        primary: '3b82f6',
        secondary: '10b981',
        accent: '8b5cf6',
        text: 'ffffff',
        textSecondary: 'cbd5e1',
        cardBg: '334155'
      };
    } else {
      return {
        background: 'ffffff',
        primary: '2563eb',
        secondary: '059669',
        accent: '7c3aed',
        text: '1e293b',
        textSecondary: '64748b',
        cardBg: 'f8fafc'
      };
    }
  }

  private createTitleSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();

    // Background
    slide.background = { color: colors.background };

    // Main title
    slide.addText('GenAI-Powered DevOps Platform', {
      x: 1,
      y: 2,
      w: 11,
      h: 1.5,
      fontSize: 44,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    // Subtitle
    slide.addText('Complete End-to-End Architecture for Autonomous Software Delivery', {
      x: 1,
      y: 3.5,
      w: 11,
      h: 0.8,
      fontSize: 24,
      color: colors.textSecondary,
      align: 'center'
    });

    // Key features
    const features = [
      '6 Specialized AI Agents',
      'Zero-Touch Production Deployments', 
      'Harness CD + GKE + Istio Integration',
      'Complete Security & Compliance Automation'
    ];

    features.forEach((feature, index) => {
      slide.addText(`• ${feature}`, {
        x: 2,
        y: 5 + (index * 0.4),
        w: 9,
        h: 0.4,
        fontSize: 16,
        color: colors.primary,
        align: 'left'
      });
    });

    // Footer
    slide.addText('Prepared for: vijay.rentala@gmail.com', {
      x: 1,
      y: 6.8,
      w: 11,
      h: 0.3,
      fontSize: 12,
      color: colors.textSecondary,
      align: 'center',
      italic: true
    });
  }

  private createOverviewSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();
    slide.background = { color: colors.background };

    // Title
    slide.addText('Platform Overview', {
      x: 1,
      y: 0.5,
      w: 11,
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    // Problem statement
    slide.addText('Current DevOps Challenges', {
      x: 1,
      y: 1.5,
      w: 5.5,
      h: 0.5,
      fontSize: 20,
      bold: true,
      color: colors.primary
    });

    const challenges = [
      'Manual intervention in production deployments',
      'Inconsistent security scanning across environments',
      'Limited visibility into deployment pipeline health',
      'Slow incident response and recovery times',
      'Fragmented toolchain without intelligent orchestration'
    ];

    challenges.forEach((challenge, index) => {
      slide.addText(`• ${challenge}`, {
        x: 1,
        y: 2 + (index * 0.3),
        w: 5.5,
        h: 0.3,
        fontSize: 12,
        color: colors.text
      });
    });

    // Solution overview
    slide.addText('GenAI Solution', {
      x: 7,
      y: 1.5,
      w: 5.5,
      h: 0.5,
      fontSize: 20,
      bold: true,
      color: colors.secondary
    });

    const solutions = [
      'Autonomous AI agents managing entire pipeline',
      'Continuous security validation with zero-touch approval',
      'Real-time monitoring with predictive analytics',
      'Automated incident response and self-healing',
      'Unified platform with intelligent decision making'
    ];

    solutions.forEach((solution, index) => {
      slide.addText(`• ${solution}`, {
        x: 7,
        y: 2 + (index * 0.3),
        w: 5.5,
        h: 0.3,
        fontSize: 12,
        color: colors.text
      });
    });

    // Key metrics
    slide.addText('Expected Improvements', {
      x: 1,
      y: 4.5,
      w: 11,
      h: 0.5,
      fontSize: 20,
      bold: true,
      color: colors.accent
    });

    const metrics = [
      { metric: 'Deployment Lead Time', improvement: '75% reduction (< 2 hours)' },
      { metric: 'Defect Escape Rate', improvement: '60% improvement (< 2%)' },
      { metric: 'Mean Time to Recovery', improvement: '80% faster (< 30 minutes)' },
      { metric: 'Security Vulnerability Resolution', improvement: '90% faster (< 24 hours)' }
    ];

    metrics.forEach((item, index) => {
      const yPos = 5.2 + (index * 0.4);
      slide.addText(item.metric + ':', {
        x: 1,
        y: yPos,
        w: 4,
        h: 0.3,
        fontSize: 14,
        bold: true,
        color: colors.text
      });
      slide.addText(item.improvement, {
        x: 5,
        y: yPos,
        w: 6,
        h: 0.3,
        fontSize: 14,
        color: colors.secondary
      });
    });
  }

  private createArchitectureSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();
    slide.background = { color: colors.background };

    // Title
    slide.addText('System Architecture', {
      x: 1,
      y: 0.5,
      w: 11,
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    // Architecture layers
    const layers = [
      {
        name: 'Presentation Layer',
        description: 'Developer Dashboard • Operations Console • Business Analytics',
        color: colors.primary
      },
      {
        name: 'Orchestration Layer', 
        description: 'Master Orchestrator • 6 Specialized AI Agents • Decision Engine',
        color: colors.secondary
      },
      {
        name: 'MCP Integration Layer',
        description: 'Harness MCP Server • GKE MCP Server • Istio MCP Server',
        color: colors.accent
      },
      {
        name: 'Infrastructure Layer',
        description: 'Harness CD Platform • GKE Clusters • Istio Service Mesh',
        color: colors.primary
      }
    ];

    layers.forEach((layer, index) => {
      const yPos = 1.8 + (index * 1.2);
      
      // Layer box
      slide.addShape('rect', {
        x: 1,
        y: yPos,
        w: 11,
        h: 1,
        fill: { color: layer.color, transparency: 80 },
        line: { color: layer.color, width: 2 }
      });

      // Layer name
      slide.addText(layer.name, {
        x: 1.5,
        y: yPos + 0.1,
        w: 10,
        h: 0.4,
        fontSize: 18,
        bold: true,
        color: colors.text
      });

      // Layer description
      slide.addText(layer.description, {
        x: 1.5,
        y: yPos + 0.5,
        w: 10,
        h: 0.4,
        fontSize: 12,
        color: colors.textSecondary
      });
    });
  }

  private createAgentsSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();
    slide.background = { color: colors.background };

    // Title
    slide.addText('AI Agent Ecosystem', {
      x: 1,
      y: 0.5,
      w: 11,
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    const agents = [
      {
        name: 'DevOps Agent',
        role: 'Pipeline orchestration and infrastructure management',
        capabilities: 'Pipeline generation • Infrastructure provisioning • Deployment strategies'
      },
      {
        name: 'Security Guardian',
        role: 'Security scanning and compliance validation', 
        capabilities: 'Vulnerability assessment • Policy enforcement • Threat detection'
      },
      {
        name: 'Data Governance Agent',
        role: 'Data classification and privacy compliance',
        capabilities: 'Data classification • Privacy validation • Lineage tracking'
      },
      {
        name: 'Testing Agent',
        role: 'Test orchestration and quality assurance',
        capabilities: 'Test generation • Quality gates • Performance validation'
      },
      {
        name: 'Monitoring Agent',
        role: 'Observability and incident response',
        capabilities: 'Real-time monitoring • Anomaly detection • Auto-remediation'
      },
      {
        name: 'Deployment Agent',
        role: 'Environment management and deployment execution',
        capabilities: 'Environment provisioning • Deployment validation • Rollback management'
      }
    ];

    // Create two columns
    const leftAgents = agents.slice(0, 3);
    const rightAgents = agents.slice(3, 6);

    [leftAgents, rightAgents].forEach((agentGroup, columnIndex) => {
      const xPos = columnIndex === 0 ? 0.5 : 6.5;
      
      agentGroup.forEach((agent, index) => {
        const yPos = 1.5 + (index * 1.8);
        
        // Agent box
        slide.addShape('rect', {
          x: xPos,
          y: yPos,
          w: 5.5,
          h: 1.6,
          fill: { color: colors.cardBg },
          line: { color: colors.primary, width: 1 }
        });

        // Agent name
        slide.addText(agent.name, {
          x: xPos + 0.2,
          y: yPos + 0.1,
          w: 5.1,
          h: 0.4,
          fontSize: 14,
          bold: true,
          color: colors.primary
        });

        // Agent role
        slide.addText(agent.role, {
          x: xPos + 0.2,
          y: yPos + 0.5,
          w: 5.1,
          h: 0.4,
          fontSize: 11,
          color: colors.text
        });

        // Agent capabilities
        slide.addText(agent.capabilities, {
          x: xPos + 0.2,
          y: yPos + 0.9,
          w: 5.1,
          h: 0.6,
          fontSize: 9,
          color: colors.textSecondary
        });
      });
    });
  }

  private createWorkflowSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();
    slide.background = { color: colors.background };

    // Title
    slide.addText('End-to-End Workflow', {
      x: 1,
      y: 0.5,
      w: 11,
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    const workflowSteps = [
      { step: '1', name: 'Code Commit', duration: '< 1 min', description: 'Developer pushes code, triggers pipeline' },
      { step: '2', name: 'AI Code Analysis', duration: '2-4 min', description: 'Static analysis, quality checks, security scan' },
      { step: '3', name: 'Intelligent Build', duration: '3-8 min', description: 'Optimized build with dependency caching' },
      { step: '4', name: 'Security Validation', duration: '1-3 min', description: 'Comprehensive security and compliance checks' },
      { step: '5', name: 'Test Orchestration', duration: '5-15 min', description: 'AI-powered test selection and execution' },
      { step: '6', name: 'Environment Deployment', duration: '3-7 min', description: 'GKE deployment with Istio configuration' },
      { step: '7', name: 'Monitoring', duration: 'Continuous', description: 'Real-time monitoring and anomaly detection' },
      { step: '8', name: 'Production Deploy', duration: '2-5 min', description: 'Zero-touch production deployment' }
    ];

    // Create workflow timeline
    workflowSteps.forEach((step, index) => {
      const xPos = 0.5 + (index * 1.5);
      const yPos = 2;

      // Step circle
      slide.addShape('ellipse', {
        x: xPos,
        y: yPos,
        w: 0.6,
        h: 0.6,
        fill: { color: colors.primary },
        line: { color: colors.primary, width: 2 }
      });

      // Step number
      slide.addText(step.step, {
        x: xPos,
        y: yPos,
        w: 0.6,
        h: 0.6,
        fontSize: 14,
        bold: true,
        color: 'ffffff',
        align: 'center',
        valign: 'middle'
      });

      // Step name
      slide.addText(step.name, {
        x: xPos - 0.3,
        y: yPos + 0.8,
        w: 1.2,
        h: 0.4,
        fontSize: 8,
        bold: true,
        color: colors.text,
        align: 'center'
      });

      // Duration
      slide.addText(step.duration, {
        x: xPos - 0.3,
        y: yPos + 1.2,
        w: 1.2,
        h: 0.3,
        fontSize: 7,
        color: colors.secondary,
        align: 'center'
      });

      // Description
      slide.addText(step.description, {
        x: xPos - 0.5,
        y: yPos + 1.5,
        w: 1.6,
        h: 0.8,
        fontSize: 6,
        color: colors.textSecondary,
        align: 'center'
      });

      // Connect with arrow (except last step)
      if (index < workflowSteps.length - 1) {
        slide.addShape('line', {
          x: xPos + 0.6,
          y: yPos + 0.3,
          w: 0.9,
          h: 0,
          line: { color: colors.primary, width: 2 }
        });
      }
    });
  }

  private createEnvironmentSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();
    slide.background = { color: colors.background };

    // Title
    slide.addText('Environment Strategy', {
      x: 1,
      y: 0.5,
      w: 11,
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    const environments = [
      {
        name: 'Development',
        dataPolicy: 'Mock data, local development datasets',
        security: 'Basic authentication, local secrets',
        automation: 'Code Analysis Agent, Basic Security Scanning'
      },
      {
        name: 'Integration', 
        dataPolicy: 'Synthetic data mimicking production structure',
        security: 'Service-to-service auth, vault integration',
        automation: 'Code Analysis, Security Guardian, Test Orchestrator'
      },
      {
        name: 'Pre-Production',
        dataPolicy: 'Anonymized production data, GDPR compliant', 
        security: 'Full production security controls',
        automation: 'All agents active, performance validation'
      },
      {
        name: 'Production',
        dataPolicy: 'Live production data with full governance',
        security: 'Maximum security, automated threat detection',
        automation: 'Full autonomous operation, predictive scaling'
      }
    ];

    environments.forEach((env, index) => {
      const yPos = 1.5 + (index * 1.4);
      
      // Environment box
      slide.addShape('rect', {
        x: 1,
        y: yPos,
        w: 11,
        h: 1.2,
        fill: { color: colors.cardBg },
        line: { color: colors.primary, width: 1 }
      });

      // Environment name
      slide.addText(env.name, {
        x: 1.5,
        y: yPos + 0.1,
        w: 2.5,
        h: 0.4,
        fontSize: 16,
        bold: true,
        color: colors.primary
      });

      // Data policy
      slide.addText('Data: ' + env.dataPolicy, {
        x: 4.2,
        y: yPos + 0.1,
        w: 7.5,
        h: 0.3,
        fontSize: 10,
        color: colors.text
      });

      // Security
      slide.addText('Security: ' + env.security, {
        x: 4.2,
        y: yPos + 0.4,
        w: 7.5,
        h: 0.3,
        fontSize: 10,
        color: colors.text
      });

      // Automation
      slide.addText('Automation: ' + env.automation, {
        x: 4.2,
        y: yPos + 0.7,
        w: 7.5,
        h: 0.3,
        fontSize: 10,
        color: colors.text
      });
    });
  }

  private createBusinessCaseSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();
    slide.background = { color: colors.background };

    // Title
    slide.addText('Business Case & ROI', {
      x: 1,
      y: 0.5,
      w: 11,
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    // ROI metrics
    slide.addText('Return on Investment', {
      x: 1,
      y: 1.5,
      w: 5.5,
      h: 0.5,
      fontSize: 20,
      bold: true,
      color: colors.primary
    });

    const roiMetrics = [
      { metric: 'Development Velocity Increase', value: '300%' },
      { metric: 'Deployment Frequency Improvement', value: '500%' },
      { metric: 'Infrastructure Cost Reduction', value: '40%' },
      { metric: 'Security Incident Reduction', value: '85%' },
      { metric: 'Operational Overhead Reduction', value: '60%' }
    ];

    roiMetrics.forEach((item, index) => {
      const yPos = 2 + (index * 0.4);
      slide.addText(`• ${item.metric}:`, {
        x: 1,
        y: yPos,
        w: 4,
        h: 0.3,
        fontSize: 12,
        color: colors.text
      });
      slide.addText(item.value, {
        x: 5,
        y: yPos,
        w: 1.5,
        h: 0.3,
        fontSize: 12,
        bold: true,
        color: colors.secondary
      });
    });

    // Implementation timeline
    slide.addText('Implementation Timeline', {
      x: 7,
      y: 1.5,
      w: 5.5,
      h: 0.5,
      fontSize: 20,
      bold: true,
      color: colors.primary
    });

    const timeline = [
      { phase: 'Phase 1: Foundation (Month 1-2)', items: 'Master Orchestrator, Core Agents' },
      { phase: 'Phase 2: Integration (Month 3-4)', items: 'Harness CD, GKE, Basic Automation' },
      { phase: 'Phase 3: Enhancement (Month 5-6)', items: 'Advanced AI, Security, Monitoring' },
      { phase: 'Phase 4: Optimization (Month 7-8)', items: 'Performance Tuning, Full Automation' }
    ];

    timeline.forEach((phase, index) => {
      const yPos = 2 + (index * 0.7);
      slide.addText(phase.phase, {
        x: 7,
        y: yPos,
        w: 5.5,
        h: 0.3,
        fontSize: 11,
        bold: true,
        color: colors.accent
      });
      slide.addText(phase.items, {
        x: 7,
        y: yPos + 0.3,
        w: 5.5,
        h: 0.3,
        fontSize: 9,
        color: colors.textSecondary
      });
    });

    // Cost benefits
    slide.addText('Annual Cost Savings: $2.4M+', {
      x: 1,
      y: 6,
      w: 11,
      h: 0.6,
      fontSize: 24,
      bold: true,
      color: colors.secondary,
      align: 'center'
    });

    slide.addText('Payback Period: 8 months', {
      x: 1,
      y: 6.6,
      w: 11,
      h: 0.4,
      fontSize: 16,
      color: colors.text,
      align: 'center'
    });
  }

  private createRoadmapSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();
    slide.background = { color: colors.background };

    // Title
    slide.addText('Implementation Roadmap', {
      x: 1,
      y: 0.5,
      w: 11,
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    // Roadmap phases
    const phases = [
      {
        quarter: 'Q1 2025',
        title: 'Foundation & Core Agents',
        deliverables: [
          'Master Orchestrator implementation',
          'DevOps and Security Guardian agents',
          'Basic Harness CD integration',
          'Development environment setup'
        ]
      },
      {
        quarter: 'Q2 2025', 
        title: 'Platform Integration',
        deliverables: [
          'Complete GKE cluster automation',
          'Istio service mesh integration',
          'Testing and Monitoring agents',
          'Integration environment deployment'
        ]
      },
      {
        quarter: 'Q3 2025',
        title: 'Advanced AI & Security',
        deliverables: [
          'Data Governance agent implementation',
          'Advanced security automation',
          'Predictive analytics integration',
          'Pre-production environment'
        ]
      },
      {
        quarter: 'Q4 2025',
        title: 'Production & Optimization',
        deliverables: [
          'Zero-touch production deployment',
          'Full autonomous operation',
          'Performance optimization',
          'Continuous improvement loops'
        ]
      }
    ];

    phases.forEach((phase, index) => {
      const xPos = 0.5 + (index * 3);
      const yPos = 2;

      // Phase box
      slide.addShape('rect', {
        x: xPos,
        y: yPos,
        w: 2.8,
        h: 4,
        fill: { color: colors.cardBg },
        line: { color: colors.primary, width: 2 }
      });

      // Quarter
      slide.addText(phase.quarter, {
        x: xPos + 0.1,
        y: yPos + 0.1,
        w: 2.6,
        h: 0.4,
        fontSize: 14,
        bold: true,
        color: colors.primary,
        align: 'center'
      });

      // Title
      slide.addText(phase.title, {
        x: xPos + 0.1,
        y: yPos + 0.6,
        w: 2.6,
        h: 0.6,
        fontSize: 12,
        bold: true,
        color: colors.text,
        align: 'center'
      });

      // Deliverables
      phase.deliverables.forEach((deliverable, delIndex) => {
        slide.addText(`• ${deliverable}`, {
          x: xPos + 0.2,
          y: yPos + 1.4 + (delIndex * 0.4),
          w: 2.4,
          h: 0.4,
          fontSize: 9,
          color: colors.textSecondary
        });
      });
    });

    // Success metrics
    slide.addText('Success Metrics by End of 2025', {
      x: 1,
      y: 6.2,
      w: 11,
      h: 0.4,
      fontSize: 16,
      bold: true,
      color: colors.accent,
      align: 'center'
    });

    slide.addText('99.9% Uptime • < 30min MTTR • Zero Security Incidents • 100% Automated Deployments', {
      x: 1,
      y: 6.6,
      w: 11,
      h: 0.4,
      fontSize: 12,
      color: colors.secondary,
      align: 'center'
    });
  }

  private createClosingSlide() {
    const colors = this.getThemeColors();
    const slide = this.pptx.addSlide();
    slide.background = { color: colors.background };

    // Title
    slide.addText('Next Steps', {
      x: 1,
      y: 1,
      w: 11,
      h: 0.8,
      fontSize: 36,
      bold: true,
      color: colors.text,
      align: 'center'
    });

    // Call to action
    slide.addText('Ready to Transform Your DevOps Pipeline?', {
      x: 1,
      y: 2.5,
      w: 11,
      h: 0.6,
      fontSize: 24,
      color: colors.primary,
      align: 'center'
    });

    // Next steps
    const nextSteps = [
      'Schedule technical deep-dive session',
      'Define pilot project scope and timeline',
      'Establish development team and infrastructure requirements',
      'Begin Phase 1 implementation planning'
    ];

    nextSteps.forEach((step, index) => {
      slide.addText(`${index + 1}. ${step}`, {
        x: 2,
        y: 3.8 + (index * 0.5),
        w: 9,
        h: 0.4,
        fontSize: 16,
        color: colors.text
      });
    });

    // Contact information
    slide.addText('Contact: vijay.rentala@gmail.com', {
      x: 1,
      y: 6.2,
      w: 11,
      h: 0.4,
      fontSize: 16,
      bold: true,
      color: colors.secondary,
      align: 'center'
    });

    slide.addText('GenAI DevOps Platform Architecture Team', {
      x: 1,
      y: 6.6,
      w: 11,
      h: 0.3,
      fontSize: 12,
      color: colors.textSecondary,
      align: 'center',
      italic: true
    });
  }

  async generatePresentation(): Promise<Buffer> {
    // Create all slides
    this.createTitleSlide();
    this.createOverviewSlide();
    this.createArchitectureSlide();
    this.createAgentsSlide();
    this.createWorkflowSlide();
    this.createEnvironmentSlide();
    this.createBusinessCaseSlide();
    this.createRoadmapSlide();
    this.createClosingSlide();

    // Generate and return the presentation as buffer
    return await this.pptx.write({ outputType: 'nodebuffer' }) as Buffer;
  }
}

export async function generatePowerPointPresentation(options?: PPTGenerationOptions): Promise<Buffer> {
  const generator = new PowerPointGenerator(options);
  return await generator.generatePresentation();
}
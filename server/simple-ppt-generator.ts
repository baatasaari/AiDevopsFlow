import PptxGenJS from 'pptxgenjs';

export async function generateSimplePowerPoint(): Promise<Buffer> {
  try {
    const pptx = new PptxGenJS();
    
    // Set basic properties
    pptx.author = 'GenAI DevOps Platform';
    pptx.company = 'DevOps Architecture Team';
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

    slide2.addText('Key Features:', {
      x: 1,
      y: 1.5,
      w: 8,
      h: 0.5,
      fontSize: 18,
      bold: true,
      color: '3b82f6'
    });

    const features = [
      '• 6 Specialized AI Agents for autonomous operations',
      '• Zero-touch production deployments',
      '• Complete integration with Harness CD, GKE, and Istio',
      '• Advanced security and compliance automation',
      '• Real-time monitoring with predictive analytics',
      '• 75% reduction in deployment lead time'
    ];

    features.forEach((feature, index) => {
      slide2.addText(feature, {
        x: 1,
        y: 2.2 + (index * 0.4),
        w: 8,
        h: 0.3,
        fontSize: 14,
        color: 'ffffff'
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

    const layers = [
      'Presentation Layer: Developer Dashboard, Operations Console',
      'Orchestration Layer: Master Orchestrator + 6 AI Agents',
      'MCP Integration Layer: Harness, GKE, Istio Servers',
      'Infrastructure Layer: Production Kubernetes Clusters'
    ];

    layers.forEach((layer, index) => {
      slide3.addText(layer, {
        x: 1,
        y: 2 + (index * 0.8),
        w: 8,
        h: 0.6,
        fontSize: 14,
        color: 'ffffff',
        fill: { color: '334155' }
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
      'Data Governance: Data classification and privacy compliance',
      'Testing Agent: Test orchestration and quality assurance',
      'Monitoring Agent: Observability and incident response',
      'Deployment Agent: Environment management and deployment'
    ];

    agents.forEach((agent, index) => {
      slide4.addText(agent, {
        x: 1,
        y: 1.5 + (index * 0.6),
        w: 8,
        h: 0.5,
        fontSize: 12,
        color: 'ffffff'
      });
    });

    // Slide 5: Business Case
    const slide5 = pptx.addSlide();
    slide5.background = { color: '1e293b' };
    
    slide5.addText('Business Case & ROI', {
      x: 1,
      y: 0.5,
      w: 8,
      h: 0.8,
      fontSize: 28,
      bold: true,
      color: 'ffffff',
      align: 'center'
    });

    const benefits = [
      'Deployment Lead Time: 75% reduction (< 2 hours)',
      'Defect Escape Rate: 60% improvement (< 2%)',
      'Mean Time to Recovery: 80% faster (< 30 minutes)',
      'Security Resolution: 90% faster (< 24 hours)',
      'Annual Cost Savings: $2.4M+',
      'Payback Period: 8 months'
    ];

    benefits.forEach((benefit, index) => {
      slide5.addText(benefit, {
        x: 1,
        y: 1.8 + (index * 0.4),
        w: 8,
        h: 0.3,
        fontSize: 14,
        color: '10b981'
      });
    });

    // Slide 6: Next Steps
    const slide6 = pptx.addSlide();
    slide6.background = { color: '1e293b' };
    
    slide6.addText('Next Steps', {
      x: 1,
      y: 1,
      w: 8,
      h: 0.8,
      fontSize: 32,
      bold: true,
      color: 'ffffff',
      align: 'center'
    });

    slide6.addText('Contact: vijay.rentala@gmail.com', {
      x: 1,
      y: 4,
      w: 8,
      h: 0.6,
      fontSize: 18,
      bold: true,
      color: '3b82f6',
      align: 'center'
    });

    slide6.addText('Ready to begin your DevOps transformation', {
      x: 1,
      y: 4.8,
      w: 8,
      h: 0.4,
      fontSize: 14,
      color: 'cbd5e1',
      align: 'center'
    });

    // Generate the presentation
    return new Promise((resolve, reject) => {
      pptx.write('nodebuffer')
        .then((buffer: Buffer) => {
          resolve(buffer);
        })
        .catch((error: any) => {
          reject(error);
        });
    });

  } catch (error: any) {
    console.error('PowerPoint generation error:', error);
    throw new Error(`Failed to generate PowerPoint: ${error.message}`);
  }
}
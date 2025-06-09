import PptxGenJS from 'pptxgenjs';

export async function generateMinimalPowerPoint(): Promise<Buffer> {
  const pptx = new PptxGenJS();
  
  // Slide 1: Title
  const slide1 = pptx.addSlide();
  slide1.addText('GenAI-Powered DevOps Platform', {
    x: 1,
    y: 2,
    w: 8,
    h: 1.5,
    fontSize: 32,
    bold: true,
    align: 'center'
  });

  slide1.addText('Architecture & Implementation Guide', {
    x: 1,
    y: 3.5,
    w: 8,
    h: 0.8,
    fontSize: 18,
    align: 'center'
  });

  slide1.addText('Prepared for: vijay.rentala@gmail.com', {
    x: 1,
    y: 5,
    w: 8,
    h: 0.4,
    fontSize: 12,
    align: 'center',
    italic: true
  });

  // Slide 2: Key Benefits
  const slide2 = pptx.addSlide();
  slide2.addText('Key Benefits & Improvements', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 24,
    bold: true,
    align: 'center'
  });

  slide2.addText([
    { text: '• 75% reduction in deployment lead time\n' },
    { text: '• 60% improvement in defect escape rate\n' },
    { text: '• 80% faster mean time to recovery\n' },
    { text: '• 90% faster security vulnerability resolution\n' },
    { text: '• $2.4M+ annual cost savings\n' },
    { text: '• Zero-touch production deployments' }
  ], {
    x: 1,
    y: 1.5,
    w: 8,
    h: 4,
    fontSize: 14
  });

  // Slide 3: AI Agents
  const slide3 = pptx.addSlide();
  slide3.addText('6 Specialized AI Agents', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 24,
    bold: true,
    align: 'center'
  });

  slide3.addText([
    { text: '1. DevOps Agent - Pipeline orchestration\n' },
    { text: '2. Security Guardian - Security scanning\n' },
    { text: '3. Data Governance - Data classification\n' },
    { text: '4. Testing Agent - Quality assurance\n' },
    { text: '5. Monitoring Agent - Observability\n' },
    { text: '6. Deployment Agent - Environment management' }
  ], {
    x: 1,
    y: 1.5,
    w: 8,
    h: 4,
    fontSize: 14
  });

  // Slide 4: Architecture
  const slide4 = pptx.addSlide();
  slide4.addText('System Architecture', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 24,
    bold: true,
    align: 'center'
  });

  slide4.addText([
    { text: 'Presentation Layer: Dashboards & Analytics\n' },
    { text: 'Orchestration Layer: Master Orchestrator + AI Agents\n' },
    { text: 'MCP Integration: Harness, GKE, Istio Servers\n' },
    { text: 'Infrastructure: Production Kubernetes Clusters' }
  ], {
    x: 1,
    y: 1.5,
    w: 8,
    h: 3,
    fontSize: 14
  });

  // Slide 5: Implementation
  const slide5 = pptx.addSlide();
  slide5.addText('Implementation Roadmap', {
    x: 1,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 24,
    bold: true,
    align: 'center'
  });

  slide5.addText([
    { text: 'Q1 2025: Foundation & Core Agents\n' },
    { text: 'Q2 2025: Platform Integration (GKE, Istio)\n' },
    { text: 'Q3 2025: Advanced AI & Security\n' },
    { text: 'Q4 2025: Production & Optimization' }
  ], {
    x: 1,
    y: 1.5,
    w: 8,
    h: 3,
    fontSize: 14
  });

  // Slide 6: Contact
  const slide6 = pptx.addSlide();
  slide6.addText('Next Steps', {
    x: 1,
    y: 2,
    w: 8,
    h: 0.8,
    fontSize: 28,
    bold: true,
    align: 'center'
  });

  slide6.addText('Contact: vijay.rentala@gmail.com', {
    x: 1,
    y: 4,
    w: 8,
    h: 0.6,
    fontSize: 18,
    bold: true,
    align: 'center'
  });

  // Use writeFile to create buffer
  return new Promise((resolve, reject) => {
    const fileName = `/tmp/genai-devops-${Date.now()}.pptx`;
    
    pptx.writeFile({ fileName })
      .then(() => {
        // Read the file and return as buffer
        const fs = require('fs');
        const buffer = fs.readFileSync(fileName);
        // Clean up temp file
        fs.unlinkSync(fileName);
        resolve(buffer);
      })
      .catch(reject);
  });
}
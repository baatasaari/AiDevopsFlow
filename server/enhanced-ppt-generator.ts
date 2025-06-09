import PptxGenJS from 'pptxgenjs';

export async function generatePowerPointPresentation(): Promise<Buffer> {
  const pptx = new PptxGenJS();

  // Set presentation properties
  pptx.defineLayout({ name: 'LAYOUT_16x9', width: 10, height: 5.625 });
  pptx.layout = 'LAYOUT_16x9';
  
  // Define theme colors
  const colors = {
    primary: '1F4E79',
    secondary: '70AD47', 
    accent: 'E1C340',
    dark: '404040',
    light: 'F2F2F2',
    white: 'FFFFFF'
  };

  // Slide 1: Title Slide
  const slide1 = pptx.addSlide({ masterName: 'TITLE_SLIDE' });
  slide1.background = { color: colors.white };
  
  slide1.addText('GenAI-Powered DevOps Platform', {
    x: 0.5, y: 1.5, w: 9, h: 1.5,
    fontSize: 36, bold: true, color: colors.primary,
    align: 'center'
  });
  
  slide1.addText('Complete End-to-End Architecture for Autonomous Software Delivery', {
    x: 0.5, y: 2.8, w: 9, h: 0.8,
    fontSize: 20, color: colors.dark,
    align: 'center'
  });

  // Add key highlights box
  slide1.addShape(pptx.ShapeType.rect, {
    x: 1, y: 3.8, w: 8, h: 1.5,
    fill: { color: colors.light },
    line: { color: colors.primary, width: 2 }
  });
  
  slide1.addText([
    { text: '6 Specialized AI Agents • Zero-touch Deployments • $2.4M+ Annual Savings', options: { fontSize: 16, bold: true, color: colors.primary } }
  ], {
    x: 1.2, y: 4.2, w: 7.6, h: 0.7,
    align: 'center'
  });

  // Slide 2: Executive Summary & ROI
  const slide2 = pptx.addSlide();
  slide2.background = { color: colors.white };
  
  slide2.addText('Executive Summary & ROI', {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary
  });

  // Performance metrics box
  slide2.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 1.3, w: 4.3, h: 2.5,
    fill: { color: colors.light },
    line: { color: colors.secondary, width: 2 }
  });
  
  slide2.addText('Performance Improvements', {
    x: 0.7, y: 1.5, w: 3.9, h: 0.4,
    fontSize: 18, bold: true, color: colors.secondary
  });
  
  slide2.addText([
    '• Deployment Lead Time: 75% reduction\n',
    '• Defect Escape Rate: 60% improvement\n', 
    '• Mean Time to Recovery: 80% faster\n',
    '• Security Resolution: 90% faster'
  ].join(''), {
    x: 0.7, y: 1.9, w: 3.9, h: 1.8,
    fontSize: 14, color: colors.dark
  });

  // Financial impact box
  slide2.addShape(pptx.ShapeType.rect, {
    x: 5.2, y: 1.3, w: 4.3, h: 2.5,
    fill: { color: colors.light },
    line: { color: colors.accent, width: 2 }
  });
  
  slide2.addText('Financial Impact', {
    x: 5.4, y: 1.5, w: 3.9, h: 0.4,
    fontSize: 18, bold: true, color: colors.accent
  });
  
  slide2.addText([
    '• Annual Cost Savings: $2.4M+\n',
    '• Implementation Investment: $1.8M\n',
    '• Payback Period: 8 months\n', 
    '• System Uptime: 99.94% achieved'
  ].join(''), {
    x: 5.4, y: 1.9, w: 3.9, h: 1.8,
    fontSize: 14, color: colors.dark
  });

  // ROI visualization with text instead of chart for compatibility
  slide2.addShape(pptx.ShapeType.rect, {
    x: 1, y: 4.2, w: 8, h: 1.2,
    fill: { color: colors.light },
    line: { color: colors.primary, width: 2 }
  });
  
  slide2.addText('ROI Timeline: Implementation $1.8M → Year 1 Savings $2.4M → Year 2 Cumulative $4.8M → Year 3 Cumulative $7.2M', {
    x: 1.2, y: 4.5, w: 7.6, h: 0.6,
    fontSize: 14, bold: true, color: colors.primary,
    align: 'center'
  });

  // Slide 3: 4-Layer System Architecture
  const slide3 = pptx.addSlide();
  slide3.background = { color: colors.white };
  
  slide3.addText('4-Layer System Architecture', {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary
  });

  // Layer boxes with different colors
  const layers = [
    { name: 'Presentation Layer', color: colors.primary, y: 1.2 },
    { name: 'Orchestration Layer', color: colors.secondary, y: 2.1 },
    { name: 'MCP Integration Layer', color: colors.accent, y: 3.0 },
    { name: 'Infrastructure Layer', color: colors.dark, y: 3.9 }
  ];

  layers.forEach((layer, index) => {
    slide3.addShape(pptx.ShapeType.rect, {
      x: 0.5, y: layer.y, w: 9, h: 0.7,
      fill: { color: layer.color },
      line: { color: layer.color, width: 1 }
    });
    
    slide3.addText(layer.name, {
      x: 0.7, y: layer.y + 0.15, w: 8.6, h: 0.4,
      fontSize: 16, bold: true, color: colors.white
    });
  });

  // Add architecture diagram elements
  const components = [
    { text: 'Developer Dashboard • Operations Console • Business Analytics', x: 0.7, y: 1.45 },
    { text: 'Master Orchestrator • 6 AI Agents • Decision Engine', x: 0.7, y: 2.35 },
    { text: 'Harness MCP • GKE MCP • Istio MCP Servers', x: 0.7, y: 3.25 },
    { text: 'Harness CD • Google Kubernetes Engine • Istio Service Mesh', x: 0.7, y: 4.15 }
  ];

  components.forEach(comp => {
    slide3.addText(comp.text, {
      x: comp.x, y: comp.y, w: 8.6, h: 0.2,
      fontSize: 12, color: colors.white
    });
  });

  // Slide 4: 6 Specialized AI Agents
  const slide4 = pptx.addSlide();
  slide4.background = { color: colors.white };
  
  slide4.addText('6 Specialized AI Agents', {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary
  });

  // Create agent grid
  const agents = [
    { name: 'DevOps Agent', desc: 'Pipeline orchestration\nResource optimization', color: colors.primary },
    { name: 'Security Guardian', desc: 'Security scanning\nCompliance validation', color: colors.secondary },
    { name: 'Data Governance', desc: 'Data classification\nPrivacy compliance', color: colors.accent },
    { name: 'Testing Agent', desc: 'Intelligent testing\nQuality assurance', color: colors.primary },
    { name: 'Monitoring Agent', desc: 'Observability\nAnomaly detection', color: colors.secondary },
    { name: 'Deployment Agent', desc: 'Environment management\nDeployment strategies', color: colors.accent }
  ];

  agents.forEach((agent, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const x = 0.5 + col * 3.0;
    const y = 1.3 + row * 1.8;

    slide4.addShape(pptx.ShapeType.rect, {
      x: x, y: y, w: 2.8, h: 1.5,
      fill: { color: agent.color },
      line: { color: agent.color, width: 2 }
    });
    
    slide4.addText(agent.name, {
      x: x + 0.1, y: y + 0.1, w: 2.6, h: 0.4,
      fontSize: 14, bold: true, color: colors.white,
      align: 'center'
    });
    
    slide4.addText(agent.desc, {
      x: x + 0.1, y: y + 0.6, w: 2.6, h: 0.8,
      fontSize: 11, color: colors.white,
      align: 'center'
    });
  });

  // Slide 5: 8-Stage DevOps Workflow
  const slide5 = pptx.addSlide();
  slide5.background = { color: colors.white };
  
  slide5.addText('8-Stage DevOps Workflow', {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary
  });

  // Workflow timeline
  const stages = [
    { name: 'Code Commit', time: '< 1 min', y: 1.2 },
    { name: 'AI Code Analysis', time: '2-4 min', y: 1.6 },
    { name: 'Intelligent Build', time: '3-8 min', y: 2.0 },
    { name: 'Security Validation', time: '1-3 min', y: 2.4 },
    { name: 'Test Orchestration', time: '5-15 min', y: 2.8 },
    { name: 'Environment Deploy', time: '3-7 min', y: 3.2 },
    { name: 'Continuous Monitor', time: 'Real-time', y: 3.6 },
    { name: 'Production Deploy', time: '2-5 min', y: 4.0 }
  ];

  stages.forEach((stage, index) => {
    const color = index % 2 === 0 ? colors.primary : colors.secondary;
    
    slide5.addShape(pptx.ShapeType.rect, {
      x: 0.5, y: stage.y, w: 5.5, h: 0.3,
      fill: { color: color },
      line: { color: color, width: 1 }
    });
    
    slide5.addText(`${index + 1}. ${stage.name}`, {
      x: 0.7, y: stage.y + 0.05, w: 4, h: 0.2,
      fontSize: 12, bold: true, color: colors.white
    });
    
    slide5.addText(stage.time, {
      x: 6.2, y: stage.y + 0.05, w: 1.5, h: 0.2,
      fontSize: 12, bold: true, color: color,
      align: 'center'
    });
  });

  // Total time indicator
  slide5.addShape(pptx.ShapeType.rect, {
    x: 8, y: 4.5, w: 1.5, h: 0.8,
    fill: { color: colors.accent },
    line: { color: colors.accent, width: 2 }
  });
  
  slide5.addText('Total:\n< 2 hrs', {
    x: 8.1, y: 4.6, w: 1.3, h: 0.6,
    fontSize: 14, bold: true, color: colors.white,
    align: 'center'
  });

  // Slide 6: Environment Data & Security Strategy
  const slide6 = pptx.addSlide();
  slide6.background = { color: colors.white };
  
  slide6.addText('Environment Data & Security Strategy', {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 28, bold: true, color: colors.primary
  });

  const environments = [
    { name: 'Development', data: 'Mock datasets, synthetic test data', security: 'Basic auth, local secrets', y: 1.3 },
    { name: 'Integration', data: 'Synthetic data mimicking production', security: 'Service auth, vault integration', y: 2.4 },
    { name: 'Pre-Production', data: 'Anonymized production data (GDPR)', security: 'Full production security controls', y: 3.5 },
    { name: 'Production', data: 'Live production data with governance', security: 'Maximum security, threat detection', y: 4.6 }
  ];

  environments.forEach((env, index) => {
    const color = [colors.primary, colors.secondary, colors.accent, colors.dark][index];
    
    slide6.addShape(pptx.ShapeType.rect, {
      x: 0.5, y: env.y - 0.1, w: 9, h: 0.9,
      fill: { color: colors.light },
      line: { color: color, width: 2 }
    });
    
    slide6.addText(env.name, {
      x: 0.7, y: env.y, w: 2, h: 0.3,
      fontSize: 14, bold: true, color: color
    });
    
    slide6.addText(`Data: ${env.data}`, {
      x: 2.8, y: env.y, w: 3.5, h: 0.3,
      fontSize: 11, color: colors.dark
    });
    
    slide6.addText(`Security: ${env.security}`, {
      x: 6.4, y: env.y, w: 2.8, h: 0.3,
      fontSize: 11, color: colors.dark
    });
  });

  // Slide 7: 2025 Implementation Roadmap
  const slide7 = pptx.addSlide();
  slide7.background = { color: colors.white };
  
  slide7.addText('2025 Implementation Roadmap', {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary
  });

  const quarters = [
    { q: 'Q1 2025', title: 'Foundation', items: 'Master Orchestrator • DevOps & Security Agents • Basic Harness CD', color: colors.primary },
    { q: 'Q2 2025', title: 'Platform Integration', items: 'GKE Automation • Istio Integration • Testing & Monitoring Agents', color: colors.secondary },
    { q: 'Q3 2025', title: 'Advanced AI & Security', items: 'Data Governance • Advanced Security • Predictive Analytics', color: colors.accent },
    { q: 'Q4 2025', title: 'Production & Optimization', items: 'Zero-touch Production • Full Autonomy • ROI Realization', color: colors.dark }
  ];

  quarters.forEach((quarter, index) => {
    const y = 1.3 + index * 1.0;
    
    slide7.addShape(pptx.ShapeType.rect, {
      x: 0.5, y: y, w: 1.5, h: 0.8,
      fill: { color: quarter.color },
      line: { color: quarter.color, width: 1 }
    });
    
    slide7.addText(quarter.q, {
      x: 0.6, y: y + 0.25, w: 1.3, h: 0.3,
      fontSize: 12, bold: true, color: colors.white,
      align: 'center'
    });
    
    slide7.addText(quarter.title, {
      x: 2.2, y: y + 0.1, w: 2.5, h: 0.3,
      fontSize: 14, bold: true, color: quarter.color
    });
    
    slide7.addText(quarter.items, {
      x: 2.2, y: y + 0.4, w: 7.3, h: 0.3,
      fontSize: 11, color: colors.dark
    });
  });

  // Slide 8: Next Steps & Contact
  const slide8 = pptx.addSlide();
  slide8.background = { color: colors.white };
  
  slide8.addText('Next Steps & Contact', {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 32, bold: true, color: colors.primary
  });

  slide8.addText('Ready to Transform Your DevOps Pipeline?', {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: colors.secondary,
    align: 'center'
  });

  const nextSteps = [
    '1. Schedule Technical Deep-Dive Session',
    '2. Define Pilot Project Scope', 
    '3. Team & Infrastructure Setup',
    '4. Phase 1 Implementation Planning'
  ];

  nextSteps.forEach((step, index) => {
    slide8.addShape(pptx.ShapeType.rect, {
      x: 0.5, y: 2.0 + index * 0.6, w: 9, h: 0.5,
      fill: { color: colors.light },
      line: { color: colors.primary, width: 1 }
    });
    
    slide8.addText(step, {
      x: 0.7, y: 2.1 + index * 0.6, w: 8.6, h: 0.3,
      fontSize: 14, bold: true, color: colors.primary
    });
  });

  // Contact information
  slide8.addShape(pptx.ShapeType.rect, {
    x: 2, y: 4.8, w: 6, h: 0.6,
    fill: { color: colors.accent },
    line: { color: colors.accent, width: 2 }
  });
  
  slide8.addText('Primary Contact: vijay.rentala@gmail.com', {
    x: 2.2, y: 4.95, w: 5.6, h: 0.3,
    fontSize: 16, bold: true, color: colors.white,
    align: 'center'
  });

  // Generate and return the presentation buffer
  return new Promise<Buffer>((resolve, reject) => {
    try {
      const chunks: Buffer[] = [];
      
      pptx.stream().on('data', (chunk: Buffer) => {
        chunks.push(chunk);
      }).on('end', () => {
        resolve(Buffer.concat(chunks));
      }).on('error', (err: Error) => {
        reject(err);
      });
    } catch (error) {
      reject(error);
    }
  });
}
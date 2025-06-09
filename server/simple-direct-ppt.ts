import JSZip from 'jszip';

export async function generatePowerPointPresentation(): Promise<Buffer> {
  const zip = new JSZip();

  // Define presentation content
  const slides = [
    {
      title: "GenAI-Powered DevOps Platform",
      subtitle: "Complete End-to-End Architecture for Autonomous Software Delivery",
      content: [
        "• 6 Specialized AI Agents for autonomous operations",
        "• Zero-touch production deployments", 
        "• Complete integration with Harness CD, GKE, and Istio",
        "• Advanced security and compliance automation",
        "• $2.4M+ annual cost savings with 8-month ROI",
        "",
        "Prepared for: vijay.rentala@gmail.com"
      ]
    },
    {
      title: "Executive Summary & ROI",
      content: [
        "Performance Improvements:",
        "• Deployment Lead Time: 75% reduction (< 2 hours)",
        "• Defect Escape Rate: 60% improvement (< 2%)",
        "• Mean Time to Recovery: 80% faster (< 30 minutes)",
        "• Security Vulnerability Resolution: 90% faster (< 24 hours)",
        "",
        "Financial Impact:",
        "• Annual Cost Savings: $2.4M+",
        "• Implementation Investment: $1.8M",
        "• Payback Period: 8 months",
        "• System Uptime: 99.94% achieved (> 99.9% target)"
      ]
    },
    {
      title: "4-Layer System Architecture",
      content: [
        "1. Presentation Layer:",
        "   • Developer Dashboard with real-time pipeline visibility",
        "   • Operations Console for system monitoring",
        "   • Business Analytics for performance metrics",
        "",
        "2. Orchestration Layer:",
        "   • Master Orchestrator coordinating all operations",
        "   • 6 Specialized AI Agents with autonomous decision-making",
        "   • Decision Engine with predictive analytics",
        "",
        "3. MCP Integration Layer:",
        "   • Harness MCP Server for pipeline management",
        "   • GKE MCP Server for cluster operations",
        "   • Istio MCP Server for service mesh control",
        "",
        "4. Infrastructure Layer:",
        "   • Harness CD Platform for deployment automation",
        "   • Google Kubernetes Engine clusters",
        "   • Istio Service Mesh for traffic management"
      ]
    },
    {
      title: "6 Specialized AI Agents",
      content: [
        "1. DevOps Agent:",
        "   • Pipeline orchestration and infrastructure management",
        "   • Automated resource scaling and optimization",
        "",
        "2. Security Guardian:",
        "   • Real-time security scanning and threat detection",
        "   • Compliance validation and policy enforcement",
        "",
        "3. Data Governance Agent:",
        "   • Data classification and privacy compliance",
        "   • GDPR, CCPA, and SOX compliance automation",
        "",
        "4. Testing Agent:",
        "   • Intelligent test selection and execution",
        "   • Quality assurance and performance validation",
        "",
        "5. Monitoring Agent:",
        "   • Observability and anomaly detection",
        "   • Incident response and self-healing systems",
        "",
        "6. Deployment Agent:",
        "   • Environment management and deployment execution",
        "   • Blue-green and canary deployment strategies"
      ]
    },
    {
      title: "8-Stage DevOps Workflow",
      content: [
        "1. Code Commit (< 1 min):",
        "   Developer pushes code, automatic pipeline trigger",
        "",
        "2. AI Code Analysis (2-4 min):",
        "   Static analysis, quality checks, security scanning",
        "",
        "3. Intelligent Build (3-8 min):",
        "   Optimized build with dependency caching",
        "",
        "4. Security Validation (1-3 min):",
        "   Comprehensive security and compliance checks",
        "",
        "5. Test Orchestration (5-15 min):",
        "   AI-powered test selection and parallel execution",
        "",
        "6. Environment Deployment (3-7 min):",
        "   GKE deployment with Istio service mesh configuration",
        "",
        "7. Continuous Monitoring:",
        "   Real-time monitoring and predictive anomaly detection",
        "",
        "8. Production Deploy (2-5 min):",
        "   Zero-touch production deployment with rollback capability"
      ]
    },
    {
      title: "Environment Data & Security Strategy",
      content: [
        "Development Environment:",
        "• Data: Mock datasets, synthetic test data",
        "• Security: Basic authentication, local secrets management",
        "• Agents: Code Analysis, Basic Security Scanning",
        "",
        "Integration Environment:",
        "• Data: Synthetic data mimicking production structure",
        "• Security: Service-to-service authentication, vault integration",
        "• Agents: Code Analysis, Security Guardian, Test Orchestrator",
        "",
        "Pre-Production Environment:",
        "• Data: Anonymized production data, GDPR compliant",
        "• Security: Full production security controls",
        "• Agents: All agents active, performance validation",
        "",
        "Production Environment:",
        "• Data: Live production data with full governance",
        "• Security: Maximum security, automated threat detection",
        "• Agents: Full autonomous operation, predictive scaling",
        "• Compliance: SOX, GDPR, CCPA, HIPAA compliance automation"
      ]
    },
    {
      title: "2025 Implementation Roadmap",
      content: [
        "Q1 2025 - Foundation (Jan-Mar):",
        "• Master Orchestrator implementation",
        "• DevOps and Security Guardian agents development",
        "• Basic Harness CD integration",
        "• Development environment setup",
        "",
        "Q2 2025 - Platform Integration (Apr-Jun):",
        "• Complete GKE cluster automation",
        "• Istio service mesh integration",
        "• Testing and Monitoring agents deployment",
        "• Integration environment operationalization",
        "",
        "Q3 2025 - Advanced AI & Security (Jul-Sep):",
        "• Data Governance agent implementation",
        "• Advanced security automation",
        "• Predictive analytics integration",
        "• Pre-production environment validation",
        "",
        "Q4 2025 - Production & Optimization (Oct-Dec):",
        "• Zero-touch production deployment",
        "• Full autonomous operation capability",
        "• Performance optimization and scaling",
        "• Complete ROI realization"
      ]
    },
    {
      title: "Next Steps & Contact",
      content: [
        "Ready to Transform Your DevOps Pipeline?",
        "",
        "Immediate Actions:",
        "",
        "1. Schedule Technical Deep-Dive Session",
        "   • Detailed architecture review and requirements analysis",
        "   • Infrastructure assessment and gap analysis",
        "",
        "2. Define Pilot Project Scope",
        "   • Identify initial use case and success metrics",
        "   • Establish baseline performance measurements",
        "",
        "3. Team & Infrastructure Setup",
        "   • Development team requirements and onboarding",
        "   • Cloud infrastructure provisioning",
        "",
        "4. Phase 1 Implementation Planning",
        "   • Master Orchestrator and core agent development",
        "   • Timeline and milestone definition",
        "",
        "Primary Contact: vijay.rentala@gmail.com",
        "GenAI DevOps Platform Architecture Team"
      ]
    }
  ];

  // Add Content Types XML
  zip.file('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  ${slides.map((_, i) => `<Override PartName="/ppt/slides/slide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join('\n  ')}
</Types>`);

  // Add main relationships
  zip.folder('_rels')?.file('.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`);

  // Add presentation relationships
  zip.folder('ppt')?.folder('_rels')?.file('presentation.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${slides.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i + 1}.xml"/>`).join('\n  ')}
</Relationships>`);

  // Add presentation.xml
  zip.folder('ppt')?.file('presentation.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldIdLst>
    ${slides.map((_, i) => `<p:sldId id="${256 + i}" r:id="rId${i + 1}" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>`).join('\n    ')}
  </p:sldIdLst>
  <p:sldSz cx="9144000" cy="6858000" type="screen4x3"/>
</p:presentation>`);

  // Generate slides
  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
    
    // Helper function to escape XML
    const escapeXml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    };

    let slideXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr>
        <p:cNvPr id="1" name=""/>
        <p:cNvGrpSpPr/>
        <p:nvPr/>
      </p:nvGrpSpPr>
      <p:grpSpPr>
        <a:xfrm>
          <a:off x="0" y="0"/>
          <a:ext cx="0" cy="0"/>
          <a:chOff x="0" y="0"/>
          <a:chExt cx="0" cy="0"/>
        </a:xfrm>
      </p:grpSpPr>
      
      <!-- Title -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="2" name="Title"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph type="title"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr>
          <a:xfrm>
            <a:off x="457200" y="274320"/>
            <a:ext cx="8229600" cy="1143000"/>
          </a:xfrm>
        </p:spPr>
        <p:txBody>
          <a:bodyPr/>
          <a:lstStyle/>
          <a:p>
            <a:pPr algn="ctr"/>
            <a:r>
              <a:rPr lang="en-US" sz="3600" b="1">
                <a:solidFill><a:srgbClr val="1F4E79"/></a:solidFill>
              </a:rPr>
              <a:t>${escapeXml(slide.title)}</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>`;

    // Add subtitle if present
    if (slide.subtitle) {
      slideXml += `
      <!-- Subtitle -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="3" name="Subtitle"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph type="subTitle" idx="1"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr>
          <a:xfrm>
            <a:off x="457200" y="1600200"/>
            <a:ext cx="8229600" cy="1143000"/>
          </a:xfrm>
        </p:spPr>
        <p:txBody>
          <a:bodyPr/>
          <a:lstStyle/>
          <a:p>
            <a:pPr algn="ctr"/>
            <a:r>
              <a:rPr lang="en-US" sz="2000">
                <a:solidFill><a:srgbClr val="404040"/></a:solidFill>
              </a:rPr>
              <a:t>${escapeXml(slide.subtitle)}</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>`;
    }

    // Add content
    slideXml += `
      <!-- Content -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="4" name="Content"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph idx="1"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr>
          <a:xfrm>
            <a:off x="457200" y="${slide.subtitle ? '2743200' : '1828800'}"/>
            <a:ext cx="8229600" cy="${slide.subtitle ? '3200400' : '4115000'}"/>
          </a:xfrm>
        </p:spPr>
        <p:txBody>
          <a:bodyPr/>
          <a:lstStyle/>`;

    slide.content.forEach(line => {
      if (line.trim() === '') {
        slideXml += `<a:p><a:endParaRPr lang="en-US" sz="1800"/></a:p>`;
      } else {
        slideXml += `
          <a:p>
            <a:pPr marL="228600" indent="-228600"/>
            <a:r>
              <a:rPr lang="en-US" sz="1800">
                <a:solidFill><a:srgbClr val="000000"/></a:solidFill>
              </a:rPr>
              <a:t>${escapeXml(line)}</a:t>
            </a:r>
          </a:p>`;
      }
    });

    slideXml += `
        </p:txBody>
      </p:sp>
    </p:spTree>
  </p:cSld>
</p:sld>`;

    zip.folder('ppt')?.folder('slides')?.file(`slide${slideNumber}.xml`, slideXml);
  });

  return zip.generateAsync({ type: 'nodebuffer' });
}
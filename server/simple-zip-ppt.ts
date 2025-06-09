import { createWriteStream, readFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { randomBytes } from 'crypto';

export async function generatePowerPointPresentation(): Promise<Buffer> {
  // Use dynamic import for JSZip
  const JSZip = await import('jszip');
  const zip = new JSZip.default();

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
        "",
        "Prepared for: vijay.rentala@gmail.com"
      ]
    },
    {
      title: "Key Performance Improvements",
      content: [
        "• Deployment Lead Time: 75% reduction (< 2 hours)",
        "• Defect Escape Rate: 60% improvement (< 2%)",
        "• Mean Time to Recovery: 80% faster (< 30 minutes)",
        "• Security Vulnerability Resolution: 90% faster (< 24 hours)",
        "• Annual Cost Savings: $2.4M+ with 8-month payback",
        "• System Uptime: 99.94% achieved (> 99.9% target)"
      ]
    },
    {
      title: "4-Layer System Architecture",
      content: [
        "1. Presentation Layer:",
        "   • Developer Dashboard, Operations Console, Business Analytics",
        "",
        "2. Orchestration Layer:",
        "   • Master Orchestrator + 6 Specialized AI Agents + Decision Engine",
        "",
        "3. MCP Integration Layer:",
        "   • Harness MCP Server, GKE MCP Server, Istio MCP Server",
        "",
        "4. Infrastructure Layer:",
        "   • Harness CD Platform, GKE Clusters, Istio Service Mesh"
      ]
    },
    {
      title: "6 Specialized AI Agents",
      content: [
        "1. DevOps Agent: Pipeline orchestration and infrastructure management",
        "",
        "2. Security Guardian: Security scanning and compliance validation",
        "",
        "3. Data Governance Agent: Data classification and privacy compliance",
        "",
        "4. Testing Agent: Test orchestration and quality assurance",
        "",
        "5. Monitoring Agent: Observability and incident response",
        "",
        "6. Deployment Agent: Environment management and deployment execution"
      ]
    },
    {
      title: "8-Stage DevOps Workflow",
      content: [
        "1. Code Commit (< 1 min): Developer pushes code, triggers pipeline",
        "2. AI Code Analysis (2-4 min): Static analysis, quality checks, security scan",
        "3. Intelligent Build (3-8 min): Optimized build with dependency caching",
        "4. Security Validation (1-3 min): Comprehensive security and compliance checks",
        "5. Test Orchestration (5-15 min): AI-powered test selection and execution",
        "6. Environment Deployment (3-7 min): GKE deployment with Istio configuration",
        "7. Continuous Monitoring: Real-time monitoring and anomaly detection",
        "8. Production Deploy (2-5 min): Zero-touch production deployment"
      ]
    },
    {
      title: "Environment Progression Strategy",
      content: [
        "1. Development Environment:",
        "   • Data: Mock data, local development datasets",
        "   • Security: Basic authentication, local secrets",
        "   • Agents: Code Analysis Agent, Basic Security Scanning",
        "",
        "2. Integration Environment:",
        "   • Data: Synthetic data mimicking production structure",
        "   • Security: Service-to-service auth, vault integration",
        "   • Agents: Code Analysis, Security Guardian, Test Orchestrator",
        "",
        "3. Pre-Production Environment:",
        "   • Data: Anonymized production data, GDPR compliant",
        "   • Security: Full production security controls",
        "   • Agents: All agents active, performance validation",
        "",
        "4. Production Environment:",
        "   • Data: Live production data with full governance",
        "   • Security: Maximum security, automated threat detection",
        "   • Agents: Full autonomous operation, predictive scaling"
      ]
    },
    {
      title: "2025 Implementation Roadmap",
      content: [
        "Q1 2025: Foundation & Core Agents",
        "• Master Orchestrator implementation",
        "• DevOps and Security Guardian agents",
        "• Basic Harness CD integration",
        "",
        "Q2 2025: Platform Integration",
        "• Complete GKE cluster automation",
        "• Istio service mesh integration",
        "• Testing and Monitoring agents",
        "",
        "Q3 2025: Advanced AI & Security",
        "• Data Governance agent implementation",
        "• Advanced security automation",
        "• Predictive analytics integration",
        "",
        "Q4 2025: Production & Optimization",
        "• Zero-touch production deployment",
        "• Full autonomous operation",
        "• Performance optimization"
      ]
    },
    {
      title: "Next Steps",
      content: [
        "Ready to Transform Your DevOps Pipeline?",
        "",
        "1. Schedule technical deep-dive session",
        "   Detailed architecture review and requirements analysis",
        "",
        "2. Define pilot project scope and timeline",
        "   Identify initial use case and success metrics",
        "",
        "3. Establish development team requirements",
        "   Infrastructure setup and team onboarding",
        "",
        "4. Begin Phase 1 implementation planning",
        "   Master Orchestrator and core agent development",
        "",
        "Contact: vijay.rentala@gmail.com",
        "GenAI DevOps Platform Architecture Team"
      ]
    }
  ];

  // Add PPTX structure files
  zip.file('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  ${slides.map((_, i) => `<Override PartName="/ppt/slides/slide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join('\n  ')}
</Types>`);

  zip.folder('_rels')!.file('.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`);

  zip.folder('ppt')!.folder('_rels')!.file('presentation.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${slides.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i + 1}.xml"/>`).join('\n  ')}
</Relationships>`);

  zip.folder('ppt')!.file('presentation.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldIdLst>
    ${slides.map((_, i) => `<p:sldId id="${256 + i}" r:id="rId${i + 1}" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>`).join('\n    ')}
  </p:sldIdLst>
  <p:sldSz cx="9144000" cy="6858000" type="screen4x3"/>
</p:presentation>`);

  // Generate slides
  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
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
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="2" name="Title"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph type="title"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr/>
        <p:txBody>
          <a:bodyPr/>
          <a:lstStyle/>
          <a:p>
            <a:r>
              <a:rPr lang="en-US" sz="3600" b="1">
                <a:solidFill><a:srgbClr val="1F4E79"/></a:solidFill>
              </a:rPr>
              <a:t>${slide.title}</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>`;

    if (slide.subtitle) {
      slideXml += `
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="3" name="Subtitle"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph type="subTitle" idx="1"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr/>
        <p:txBody>
          <a:bodyPr/>
          <a:lstStyle/>
          <a:p>
            <a:r>
              <a:rPr lang="en-US" sz="2000">
                <a:solidFill><a:srgbClr val="404040"/></a:solidFill>
              </a:rPr>
              <a:t>${slide.subtitle}</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>`;
    }

    slideXml += `
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="4" name="Content"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph idx="1"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr/>
        <p:txBody>
          <a:bodyPr/>
          <a:lstStyle/>`;

    slide.content.forEach(line => {
      if (line.trim() === '') {
        slideXml += `<a:p><a:endParaRPr lang="en-US" sz="1800"/></a:p>`;
      } else {
        slideXml += `
          <a:p>
            <a:r>
              <a:rPr lang="en-US" sz="1800">
                <a:solidFill><a:srgbClr val="000000"/></a:solidFill>
              </a:rPr>
              <a:t>${line}</a:t>
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

    zip.folder('ppt')!.folder('slides')!.file(`slide${slideNumber}.xml`, slideXml);
  });

  return zip.generateAsync({ type: 'nodebuffer' });
}
export async function generatePowerPointPresentation(): Promise<Buffer> {
  // Import JSZip using dynamic import for ES modules
  const JSZip = await import('jszip');
  const zip = new JSZip.default();

  // Define comprehensive presentation content
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

  // Create PPTX file structure with proper XML formatting
  zip.file('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout2.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  ${slides.map((_, i) => `  <Override PartName="/ppt/slides/slide${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`).join('\n')}
</Types>`);

  // Add main relationships
  zip.folder('_rels').file('.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`);

  // Add presentation relationships
  zip.folder('ppt').folder('_rels').file('presentation.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>
  ${slides.map((_, i) => `  <Relationship Id="rId${i + 3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i + 1}.xml"/>`).join('\n')}
</Relationships>`);

  // Add presentation.xml with proper structure
  zip.folder('ppt').file('presentation.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <p:sldMasterIdLst>
    <p:sldMasterId id="2147483648" r:id="rId1"/>
  </p:sldMasterIdLst>
  <p:sldIdLst>
    ${slides.map((_, i) => `    <p:sldId id="${256 + i}" r:id="rId${i + 3}"/>`).join('\n')}
  </p:sldIdLst>
  <p:sldSz cx="9144000" cy="6858000" type="screen4x3"/>
  <p:notesSz cx="6858000" cy="9144000"/>
  <p:defaultTextStyle>
    <a:defPPr xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
      <a:defRPr lang="en-US"/>
    </a:defPPr>
  </p:defaultTextStyle>
</p:presentation>`);

  // Add theme file for proper formatting
  zip.folder('ppt').folder('theme').file('theme1.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">
  <a:themeElements>
    <a:clrScheme name="Office">
      <a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>
      <a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>
      <a:dk2><a:srgbClr val="1F497D"/></a:dk2>
      <a:lt2><a:srgbClr val="EEECE1"/></a:lt2>
      <a:accent1><a:srgbClr val="4F81BD"/></a:accent1>
      <a:accent2><a:srgbClr val="F79646"/></a:accent2>
      <a:accent3><a:srgbClr val="9BBB59"/></a:accent3>
      <a:accent4><a:srgbClr val="8064A2"/></a:accent4>
      <a:accent5><a:srgbClr val="4BACC6"/></a:accent5>
      <a:accent6><a:srgbClr val="F366A0"/></a:accent6>
      <a:hlink><a:srgbClr val="0000FF"/></a:hlink>
      <a:folHlink><a:srgbClr val="800080"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="Office">
      <a:majorFont>
        <a:latin typeface="Calibri"/>
        <a:ea typeface=""/>
        <a:cs typeface=""/>
      </a:majorFont>
      <a:minorFont>
        <a:latin typeface="Calibri"/>
        <a:ea typeface=""/>
        <a:cs typeface=""/>
      </a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="Office">
      <a:fillStyleLst>
        <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>
            <a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>
            <a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>
          </a:gsLst>
          <a:lin ang="16200000" scaled="1"/>
        </a:gradFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0"><a:schemeClr val="phClr"><a:shade val="51000"/><a:satMod val="130000"/></a:schemeClr></a:gs>
            <a:gs pos="80000"><a:schemeClr val="phClr"><a:shade val="93000"/><a:satMod val="130000"/></a:schemeClr></a:gs>
            <a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="94000"/><a:satMod val="135000"/></a:schemeClr></a:gs>
          </a:gsLst>
          <a:lin ang="16200000" scaled="0"/>
        </a:gradFill>
      </a:fillStyleLst>
      <a:lnStyleLst>
        <a:ln w="9525" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill>
          <a:prstDash val="solid"/>
        </a:ln>
        <a:ln w="25400" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
          <a:prstDash val="solid"/>
        </a:ln>
        <a:ln w="38100" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
          <a:prstDash val="solid"/>
        </a:ln>
      </a:lnStyleLst>
      <a:effectStyleLst>
        <a:effectStyle>
          <a:effectLst>
            <a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0">
              <a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr>
            </a:outerShdw>
          </a:effectLst>
        </a:effectStyle>
        <a:effectStyle>
          <a:effectLst>
            <a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0">
              <a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr>
            </a:outerShdw>
          </a:effectLst>
        </a:effectStyle>
        <a:effectStyle>
          <a:effectLst>
            <a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0">
              <a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr>
            </a:outerShdw>
          </a:effectLst>
          <a:scene3d>
            <a:camera prst="orthographicFront">
              <a:rot lat="0" lon="0" rev="0"/>
            </a:camera>
            <a:lightRig rig="threePt" dir="t">
              <a:rot lat="0" lon="0" rev="1200000"/>
            </a:lightRig>
          </a:scene3d>
          <a:sp3d>
            <a:bevelT w="63500" h="25400"/>
          </a:sp3d>
        </a:effectStyle>
      </a:effectStyleLst>
      <a:bgFillStyleLst>
        <a:solidFill><a:schemeClr val="phClr"/></a:solidFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>
            <a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>
            <a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>
          </a:gsLst>
          <a:path path="circle">
            <a:fillToRect l="50000" t="-80000" r="50000" b="180000"/>
          </a:path>
        </a:gradFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>
            <a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>
          </a:gsLst>
          <a:path path="circle">
            <a:fillToRect l="50000" t="50000" r="50000" b="50000"/>
          </a:path>
        </a:gradFill>
      </a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
  <a:objectDefaults/>
  <a:extraClrSchemeLst/>
</a:theme>`);

  // Add slide master
  zip.folder('ppt').folder('slideMasters').file('slideMaster1.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <p:cSld>
    <p:bg>
      <p:bgRef idx="1001">
        <a:schemeClr val="bg1"/>
      </p:bgRef>
    </p:bg>
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
    </p:spTree>
  </p:cSld>
  <p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
  <p:sldLayoutIdLst>
    <p:sldLayoutId id="2147483649" r:id="rId1"/>
    <p:sldLayoutId id="2147483650" r:id="rId2"/>
  </p:sldLayoutIdLst>
  <p:txStyles>
    <p:titleStyle>
      <a:lvl1pPr marL="0" algn="ctr" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
        <a:defRPr sz="4400" kern="1200">
          <a:solidFill>
            <a:schemeClr val="tx1"/>
          </a:solidFill>
          <a:latin typeface="+mj-lt"/>
          <a:ea typeface="+mj-ea"/>
          <a:cs typeface="+mj-cs"/>
        </a:defRPr>
      </a:lvl1pPr>
    </p:titleStyle>
    <p:bodyStyle>
      <a:lvl1pPr marL="342900" indent="-342900" algn="l" defTabSz="914400" rtl="0" eaLnBrk="1" latinLnBrk="0" hangingPunct="1">
        <a:defRPr sz="1800" kern="1200">
          <a:solidFill>
            <a:schemeClr val="tx1"/>
          </a:solidFill>
          <a:latin typeface="+mn-lt"/>
          <a:ea typeface="+mn-ea"/>
          <a:cs typeface="+mn-cs"/>
        </a:defRPr>
      </a:lvl1pPr>
    </p:bodyStyle>
    <p:otherStyle>
      <a:defPPr>
        <a:defRPr lang="en-US"/>
      </a:defPPr>
    </p:otherStyle>
  </p:txStyles>
</p:sldMaster>`);

  // Add slide layouts
  zip.folder('ppt').folder('slideLayouts').file('slideLayout1.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" type="titleSlide" preserve="1">
  <p:cSld name="Title Slide">
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
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr>
    <a:masterClrMapping/>
  </p:clrMapOvr>
</p:sldLayout>`);

  zip.folder('ppt').folder('slideLayouts').file('slideLayout2.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" type="titleOnly" preserve="1">
  <p:cSld name="Title Only">
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
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr>
    <a:masterClrMapping/>
  </p:clrMapOvr>
</p:sldLayout>`);

  // Generate individual slides with proper formatting
  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
    
    // XML-escape function for content
    const escapeXml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    };

    let slideXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <p:cSld>
    <p:bg>
      <p:bgRef idx="1001">
        <a:schemeClr val="bg1"/>
      </p:bgRef>
    </p:bg>
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
      
      <!-- Title Text Box -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="2" name="Title"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph type="title"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr>
          <a:xfrm>
            <a:off x="457200" y="457200"/>
            <a:ext cx="8229600" cy="1371600"/>
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

    // Add subtitle if exists
    if (slide.subtitle) {
      slideXml += `
      <!-- Subtitle Text Box -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="3" name="Subtitle"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph type="subTitle" idx="1"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr>
          <a:xfrm>
            <a:off x="457200" y="1981200"/>
            <a:ext cx="8229600" cy="914400"/>
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

    // Add content text box
    slideXml += `
      <!-- Content Text Box -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="4" name="Content"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr><p:ph idx="1"/></p:nvPr>
        </p:nvSpPr>
        <p:spPr>
          <a:xfrm>
            <a:off x="457200" y="${slide.subtitle ? '3200400' : '2300000'}"/>
            <a:ext cx="8229600" cy="${slide.subtitle ? '2600000' : '3500000'}"/>
          </a:xfrm>
        </p:spPr>
        <p:txBody>
          <a:bodyPr/>
          <a:lstStyle/>`;

    // Add content paragraphs
    slide.content.forEach(line => {
      if (line.trim() === '') {
        slideXml += `
          <a:p>
            <a:endParaRPr lang="en-US" sz="1800"/>
          </a:p>`;
      } else {
        slideXml += `
          <a:p>
            <a:pPr marL="285750" indent="-285750"/>
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
  <p:clrMapOvr>
    <a:masterClrMapping/>
  </p:clrMapOvr>
</p:sld>`;

    zip.folder('ppt').folder('slides').file(`slide${slideNumber}.xml`, slideXml);
  });

  // Generate and return the presentation buffer
  return zip.generateAsync({ type: 'nodebuffer' });
}
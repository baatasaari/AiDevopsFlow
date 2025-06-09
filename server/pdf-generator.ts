import htmlPdf from 'html-pdf-node';

export async function generatePresentationPDF(): Promise<Buffer> {
  const options = {
    format: 'A4',
    landscape: true,
    border: {
      top: "0.5in",
      right: "0.5in",
      bottom: "0.5in",
      left: "0.5in"
    }
  };

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 20px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
        }
        .slide {
          page-break-after: always;
          min-height: 90vh;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }
        .slide:last-child {
          page-break-after: avoid;
        }
        h1 {
          font-size: 36px;
          text-align: center;
          margin-bottom: 30px;
          color: #3b82f6;
        }
        h2 {
          font-size: 28px;
          text-align: center;
          margin-bottom: 25px;
          color: #10b981;
        }
        .subtitle {
          font-size: 18px;
          text-align: center;
          margin-bottom: 40px;
          color: #cbd5e1;
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .feature-list {
          list-style: none;
          padding: 0;
        }
        .feature-list li {
          padding: 10px 0;
          border-left: 4px solid #3b82f6;
          padding-left: 20px;
          margin-bottom: 15px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
        }
        .metric {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          background: rgba(16, 185, 129, 0.2);
          margin: 10px 0;
          border-radius: 8px;
          border-left: 5px solid #10b981;
        }
        .agent-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }
        .agent-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          border-left: 4px solid #8b5cf6;
        }
        .workflow-step {
          display: flex;
          align-items: center;
          padding: 12px;
          margin: 8px 0;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 8px;
        }
        .step-number {
          background: #3b82f6;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          font-weight: bold;
        }
        .contact {
          text-align: center;
          font-size: 20px;
          color: #10b981;
          font-weight: bold;
          margin-top: 40px;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #64748b;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <!-- Slide 1: Title -->
      <div class="slide">
        <div class="content">
          <h1>GenAI-Powered DevOps Platform</h1>
          <div class="subtitle">Complete End-to-End Architecture for Autonomous Software Delivery</div>
          <ul class="feature-list">
            <li>6 Specialized AI Agents for autonomous operations</li>
            <li>Zero-touch production deployments</li>
            <li>Complete integration with Harness CD, GKE, and Istio</li>
            <li>Advanced security and compliance automation</li>
          </ul>
          <div class="contact">Prepared for: vijay.rentala@gmail.com</div>
        </div>
      </div>

      <!-- Slide 2: Key Benefits -->
      <div class="slide">
        <h2>Key Performance Improvements</h2>
        <div class="content">
          <div class="metric">
            <span>Deployment Lead Time</span>
            <span>75% reduction (< 2 hours)</span>
          </div>
          <div class="metric">
            <span>Defect Escape Rate</span>
            <span>60% improvement (< 2%)</span>
          </div>
          <div class="metric">
            <span>Mean Time to Recovery</span>
            <span>80% faster (< 30 minutes)</span>
          </div>
          <div class="metric">
            <span>Security Vulnerability Resolution</span>
            <span>90% faster (< 24 hours)</span>
          </div>
          <div class="metric">
            <span>Annual Cost Savings</span>
            <span>$2.4M+ with 8-month payback</span>
          </div>
        </div>
      </div>

      <!-- Slide 3: System Architecture -->
      <div class="slide">
        <h2>4-Layer System Architecture</h2>
        <div class="content">
          <div class="agent-card" style="border-left-color: #3b82f6;">
            <h3 style="color: #3b82f6; margin-top: 0;">Presentation Layer</h3>
            <p>Developer Dashboard • Operations Console • Business Analytics</p>
          </div>
          <div class="agent-card" style="border-left-color: #10b981;">
            <h3 style="color: #10b981; margin-top: 0;">Orchestration Layer</h3>
            <p>Master Orchestrator • 6 Specialized AI Agents • Decision Engine</p>
          </div>
          <div class="agent-card" style="border-left-color: #f59e0b;">
            <h3 style="color: #f59e0b; margin-top: 0;">MCP Integration Layer</h3>
            <p>Harness MCP Server • GKE MCP Server • Istio MCP Server</p>
          </div>
          <div class="agent-card" style="border-left-color: #ef4444;">
            <h3 style="color: #ef4444; margin-top: 0;">Infrastructure Layer</h3>
            <p>Harness CD Platform • GKE Clusters • Istio Service Mesh</p>
          </div>
        </div>
      </div>

      <!-- Slide 4: AI Agent Ecosystem -->
      <div class="slide">
        <h2>6 Specialized AI Agents</h2>
        <div class="content">
          <div class="agent-grid">
            <div class="agent-card">
              <h3 style="color: #8b5cf6; margin-top: 0;">DevOps Agent</h3>
              <p>Pipeline orchestration and infrastructure management</p>
            </div>
            <div class="agent-card">
              <h3 style="color: #8b5cf6; margin-top: 0;">Security Guardian</h3>
              <p>Security scanning and compliance validation</p>
            </div>
            <div class="agent-card">
              <h3 style="color: #8b5cf6; margin-top: 0;">Data Governance Agent</h3>
              <p>Data classification and privacy compliance</p>
            </div>
            <div class="agent-card">
              <h3 style="color: #8b5cf6; margin-top: 0;">Testing Agent</h3>
              <p>Test orchestration and quality assurance</p>
            </div>
            <div class="agent-card">
              <h3 style="color: #8b5cf6; margin-top: 0;">Monitoring Agent</h3>
              <p>Observability and incident response</p>
            </div>
            <div class="agent-card">
              <h3 style="color: #8b5cf6; margin-top: 0;">Deployment Agent</h3>
              <p>Environment management and deployment execution</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 5: End-to-End Workflow -->
      <div class="slide">
        <h2>8-Stage DevOps Workflow</h2>
        <div class="content">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div>
              <strong>Code Commit (< 1 min)</strong><br>
              Developer pushes code, triggers automated pipeline
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">2</div>
            <div>
              <strong>AI Code Analysis (2-4 min)</strong><br>
              Static analysis, quality checks, security scanning
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">3</div>
            <div>
              <strong>Intelligent Build (3-8 min)</strong><br>
              Optimized build with dependency caching
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">4</div>
            <div>
              <strong>Security Validation (1-3 min)</strong><br>
              Comprehensive security and compliance checks
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">5</div>
            <div>
              <strong>Test Orchestration (5-15 min)</strong><br>
              AI-powered test selection and execution
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">6</div>
            <div>
              <strong>Environment Deployment (3-7 min)</strong><br>
              GKE deployment with Istio configuration
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">7</div>
            <div>
              <strong>Continuous Monitoring</strong><br>
              Real-time monitoring and anomaly detection
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">8</div>
            <div>
              <strong>Production Deploy (2-5 min)</strong><br>
              Zero-touch production deployment with validation
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 6: Environment Strategy -->
      <div class="slide">
        <h2>Environment Progression Strategy</h2>
        <div class="content">
          <div class="agent-card" style="border-left-color: #06b6d4;">
            <h3 style="color: #06b6d4; margin-top: 0;">Development Environment</h3>
            <p><strong>Data:</strong> Mock data, local development datasets</p>
            <p><strong>Security:</strong> Basic authentication, local secrets</p>
            <p><strong>Agents:</strong> Code Analysis Agent, Basic Security Scanning</p>
          </div>
          <div class="agent-card" style="border-left-color: #10b981;">
            <h3 style="color: #10b981; margin-top: 0;">Integration Environment</h3>
            <p><strong>Data:</strong> Synthetic data mimicking production structure</p>
            <p><strong>Security:</strong> Service-to-service auth, vault integration</p>
            <p><strong>Agents:</strong> Code Analysis, Security Guardian, Test Orchestrator</p>
          </div>
          <div class="agent-card" style="border-left-color: #f59e0b;">
            <h3 style="color: #f59e0b; margin-top: 0;">Pre-Production Environment</h3>
            <p><strong>Data:</strong> Anonymized production data, GDPR compliant</p>
            <p><strong>Security:</strong> Full production security controls</p>
            <p><strong>Agents:</strong> All agents active, performance validation</p>
          </div>
          <div class="agent-card" style="border-left-color: #ef4444;">
            <h3 style="color: #ef4444; margin-top: 0;">Production Environment</h3>
            <p><strong>Data:</strong> Live production data with full governance</p>
            <p><strong>Security:</strong> Maximum security, automated threat detection</p>
            <p><strong>Agents:</strong> Full autonomous operation, predictive scaling</p>
          </div>
        </div>
      </div>

      <!-- Slide 7: Implementation Roadmap -->
      <div class="slide">
        <h2>2025 Implementation Roadmap</h2>
        <div class="content">
          <div class="agent-grid">
            <div class="agent-card" style="border-left-color: #3b82f6;">
              <h3 style="color: #3b82f6; margin-top: 0;">Q1 2025: Foundation</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Master Orchestrator implementation</li>
                <li>DevOps and Security Guardian agents</li>
                <li>Basic Harness CD integration</li>
                <li>Development environment setup</li>
              </ul>
            </div>
            <div class="agent-card" style="border-left-color: #10b981;">
              <h3 style="color: #10b981; margin-top: 0;">Q2 2025: Integration</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Complete GKE cluster automation</li>
                <li>Istio service mesh integration</li>
                <li>Testing and Monitoring agents</li>
                <li>Integration environment deployment</li>
              </ul>
            </div>
            <div class="agent-card" style="border-left-color: #f59e0b;">
              <h3 style="color: #f59e0b; margin-top: 0;">Q3 2025: Enhancement</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Data Governance agent implementation</li>
                <li>Advanced security automation</li>
                <li>Predictive analytics integration</li>
                <li>Pre-production environment</li>
              </ul>
            </div>
            <div class="agent-card" style="border-left-color: #ef4444;">
              <h3 style="color: #ef4444; margin-top: 0;">Q4 2025: Production</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Zero-touch production deployment</li>
                <li>Full autonomous operation</li>
                <li>Performance optimization</li>
                <li>Continuous improvement loops</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 8: Next Steps -->
      <div class="slide">
        <h2>Next Steps</h2>
        <div class="content">
          <div style="text-align: center; margin-bottom: 40px;">
            <h3 style="color: #3b82f6; font-size: 24px;">Ready to Transform Your DevOps Pipeline?</h3>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div>
              <strong>Schedule technical deep-dive session</strong><br>
              Detailed architecture review and requirements analysis
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">2</div>
            <div>
              <strong>Define pilot project scope and timeline</strong><br>
              Identify initial use case and success metrics
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">3</div>
            <div>
              <strong>Establish development team requirements</strong><br>
              Infrastructure setup and team onboarding
            </div>
          </div>
          <div class="workflow-step">
            <div class="step-number">4</div>
            <div>
              <strong>Begin Phase 1 implementation planning</strong><br>
              Master Orchestrator and core agent development
            </div>
          </div>
          
          <div class="contact">Contact: vijay.rentala@gmail.com</div>
          <div class="footer">GenAI DevOps Platform Architecture Team</div>
        </div>
      </div>
    </body>
    </html>
  `;

  const file = { content: htmlContent };
  
  try {
    const pdfBuffer = await htmlPdf.generatePdf(file, options);
    return pdfBuffer;
  } catch (error) {
    console.error('PDF generation error:', error);
    throw new Error(`Failed to generate PDF: ${error.message}`);
  }
}
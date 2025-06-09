import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendPresentationEmail(
  recipientEmail: string,
  pptBuffer: Buffer,
  fromEmail: string = 'noreply@genai-devops.com'
): Promise<boolean> {
  try {
    const msg = {
      to: recipientEmail,
      from: fromEmail,
      subject: 'GenAI-Powered DevOps Platform Architecture Presentation',
      text: `Dear Vijay,

Please find attached the comprehensive GenAI-Powered DevOps Platform Architecture presentation.

This presentation covers:
• Complete end-to-end architecture with 6 specialized AI agents
• Integration strategy for Harness CD, GKE, and Istio service mesh
• Performance metrics showing 75% reduction in deployment lead time
• $2.4M+ annual cost savings with 8-month payback period
• 2025 implementation roadmap with quarterly milestones

The presentation is ready for client discussions and technical reviews.

Best regards,
GenAI DevOps Platform Architecture Team

Technical Specifications:
- 8 comprehensive slides covering all aspects
- Autonomous software delivery pipeline
- Zero-touch production deployments
- Advanced security and compliance automation`,
      
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1F4E79;">GenAI-Powered DevOps Platform Architecture</h2>
          
          <p>Dear Vijay,</p>
          
          <p>Please find attached the comprehensive <strong>GenAI-Powered DevOps Platform Architecture</strong> presentation.</p>
          
          <h3 style="color: #1F4E79;">Key Highlights:</h3>
          <ul>
            <li>Complete end-to-end architecture with 6 specialized AI agents</li>
            <li>Integration strategy for Harness CD, GKE, and Istio service mesh</li>
            <li>Performance metrics showing <strong>75% reduction</strong> in deployment lead time</li>
            <li><strong>$2.4M+ annual cost savings</strong> with 8-month payback period</li>
            <li>2025 implementation roadmap with quarterly milestones</li>
          </ul>
          
          <p>The presentation is ready for client discussions and technical reviews.</p>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          
          <p><strong>Best regards,</strong><br>
          GenAI DevOps Platform Architecture Team</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h4 style="color: #1F4E79; margin-top: 0;">Technical Specifications:</h4>
            <ul style="margin-bottom: 0;">
              <li>8 comprehensive slides covering all aspects</li>
              <li>Autonomous software delivery pipeline</li>
              <li>Zero-touch production deployments</li>
              <li>Advanced security and compliance automation</li>
            </ul>
          </div>
        </div>
      `,
      
      attachments: [
        {
          content: pptBuffer.toString('base64'),
          filename: 'GenAI-DevOps-Platform-Architecture.pptx',
          type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          disposition: 'attachment'
        }
      ]
    };

    await sgMail.send(msg);
    console.log(`Presentation email sent successfully to ${recipientEmail}`);
    return true;
    
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    if (error.response) {
      console.error('SendGrid response body:', error.response.body);
    }
    return false;
  }
}
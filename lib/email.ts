import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, company, service, budget, message } = data;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1E40AF; border-bottom: 2px solid #1E40AF; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
        ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
      </div>
      
      <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h3 style="color: #374151; margin-top: 0;">Message</h3>
        <p style="line-height: 1.6; color: #6b7280;">${message}</p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #1E40AF; color: white; border-radius: 8px; text-align: center;">
        <p style="margin: 0;">This email was sent from the Viunex website contact form.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || 'hello@viunex.com',
    subject: `New Contact Form Submission from ${name}`,
    html: htmlContent,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email');
  }
}

export async function sendAutoReply(email: string, name: string) {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%); color: white; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Viunex</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Digital Excellence</p>
      </div>
      
      <div style="padding: 30px; background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #1E40AF; margin-top: 0;">Thank you for contacting us, ${name}!</h2>
        
        <p style="color: #374151; line-height: 1.6;">
          We've received your message and appreciate you reaching out to Viunex. Our team will review your inquiry and get back to you within 24 hours.
        </p>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
          <ul style="color: #6b7280; line-height: 1.6;">
            <li>Our team will review your project requirements</li>
            <li>We'll prepare a customized proposal for your needs</li>
            <li>Schedule a consultation call to discuss details</li>
            <li>Provide you with a detailed timeline and quote</li>
          </ul>
        </div>
        
        <p style="color: #374151; line-height: 1.6;">
          In the meantime, feel free to explore our <a href="https://viunex.com/projects" style="color: #1E40AF;">recent projects</a> 
          or read our <a href="https://viunex.com/blog" style="color: #1E40AF;">latest insights</a> on digital trends.
        </p>
        
        <div style="margin-top: 30px; padding: 20px; background: #1E40AF; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-weight: bold;">Need immediate assistance?</p>
          <p style="margin: 10px 0 0 0;">Call us at +1 (555) 123-4567 or email hello@viunex.com</p>
        </div>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: 'Thank you for contacting Viunex - We\'ll be in touch soon!',
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Auto-reply sending failed:', error);
    // Don't throw error for auto-reply failure
    return { success: false };
  }
}
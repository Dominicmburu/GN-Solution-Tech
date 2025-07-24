const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = this.createTransporter();
  }

  /**
   * Create email transporter
   */
  createTransporter() {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  /**
   * Send contact form notification to admin
   * @param {Object} contact - Contact data
   */
  async sendContactNotification(contact) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission: ${contact.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.firstName} ${contact.lastName}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${contact.message.replace(/\n/g, '<br>')}
        </div>
        <p><strong>Submitted:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          This email was automatically generated from your contact form.
        </p>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send contact form confirmation to user
   * @param {Object} contact - Contact data
   */
  async sendContactConfirmation(contact) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: contact.email,
      subject: 'Thank you for contacting us',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${contact.firstName} ${contact.lastName},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        
        <h3>Your Message Details:</h3>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${contact.message.replace(/\n/g, '<br>')}
        </div>
        
        <p>We typically respond within 24-48 hours during business days.</p>
        
        <p>Best regards,<br>The Team</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This is an automated confirmation email. Please do not reply to this email.
        </p>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send reply to contact form submission
   * @param {Object} contact - Contact data
   * @param {string} replyMessage - Reply message
   */
  async sendContactReply(contact, replyMessage) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: contact.email,
      subject: `Re: ${contact.subject}`,
      html: `
        <h2>Response to your inquiry</h2>
        <p>Dear ${contact.firstName} ${contact.lastName},</p>
        
        <p>Thank you for contacting us. Here's our response to your inquiry:</p>
        
        <div style="background: #e8f4fd; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007bff;">
          ${replyMessage.replace(/\n/g, '<br>')}
        </div>
        
        <h3>Your Original Message:</h3>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${contact.message.replace(/\n/g, '<br>')}
        </div>
        
        <p>If you have any further questions, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>The Team</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This email was sent in response to your contact form submission on ${new Date(contact.createdAt).toLocaleDateString()}.
        </p>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send password reset email
   * @param {string} email - User email
   * @param {string} resetToken - Reset token
   */
  async sendPasswordResetEmail(email, resetToken) {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <h2>Password Reset Request</h2>
        <p>You have requested to reset your password.</p>
        <p>Please click the link below to reset your password:</p>
        <p>
          <a href="${resetUrl}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Reset Password
          </a>
        </p>
        <p>This link will expire in 1 hour.</p>
        <p>If you did not request this, please ignore this email.</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          If the button doesn't work, copy and paste this link into your browser:<br>
          ${resetUrl}
        </p>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send welcome email to new admin
   * @param {Object} admin - Admin data
   * @param {string} tempPassword - Temporary password
   */
  async sendWelcomeEmail(admin, tempPassword) {
    const loginUrl = `${process.env.FRONTEND_URL}/login`;
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: admin.email,
      subject: 'Welcome to Admin Dashboard',
      html: `
        <h2>Welcome to the Admin Dashboard!</h2>
        <p>Dear ${admin.firstName} ${admin.lastName},</p>
        <p>Your admin account has been created successfully.</p>
        
        <h3>Login Details:</h3>
        <p><strong>Email:</strong> ${admin.email}</p>
        <p><strong>Username:</strong> ${admin.username}</p>
        <p><strong>Temporary Password:</strong> <code>${tempPassword}</code></p>
        
        <p>
          <a href="${loginUrl}" style="background: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Login to Dashboard
          </a>
        </p>
        
        <p><strong>Important:</strong> Please change your password after your first login for security reasons.</p>
        
        <p>Best regards,<br>The Team</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          Keep your login credentials secure and do not share them with anyone.
        </p>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send chat notification email
   * @param {string} adminEmail - Admin email
   * @param {Object} message - Chat message
   */
  async sendChatNotification(adminEmail, message) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: adminEmail,
      subject: 'New Chat Message Received',
      html: `
        <h2>New Chat Message</h2>
        <p>You have received a new chat message.</p>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>From:</strong> ${message.guestName || 'Anonymous'}</p>
          <p><strong>Email:</strong> ${message.guestEmail || 'Not provided'}</p>
          <p><strong>Message:</strong> ${message.content}</p>
          <p><strong>Time:</strong> ${new Date(message.createdAt).toLocaleString()}</p>
        </div>
        
        <p>Please log in to the admin dashboard to respond.</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This is an automated notification. You can disable these in your settings.
        </p>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Test email configuration
   */
  async testEmailConfiguration() {
    try {
      await this.transporter.verify();
      return { success: true, message: 'Email configuration is valid' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

module.exports = new EmailService();
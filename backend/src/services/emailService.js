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
     * Send newsletter welcome email
     * @param {string} email - Subscriber email
     */
  async sendNewsletterWelcome(email) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Welcome to GN Solutions Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #301934 0%, #f08b0a 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Welcome to GN Solutions!</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Thank you for subscribing to our newsletter</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 20px;">
            <h2 style="color: #301934; font-size: 24px; margin-bottom: 20px;">You're all set!</h2>
            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Welcome to the GN Solutions community! You'll now receive updates about:
            </p>
            
            <ul style="color: #666666; font-size: 16px; line-height: 1.8; margin-bottom: 30px; padding-left: 20px;">
              <li>Latest IT automation and cybersecurity insights</li>
              <li>New service offerings and solutions</li>
              <li>Industry trends and best practices</li>
              <li>Exclusive content and resources</li>
            </ul>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #f08b0a; margin-bottom: 30px;">
              <p style="color: #301934; font-size: 16px; margin: 0; font-weight: bold;">
                💡 Stay Connected
              </p>
              <p style="color: #666666; font-size: 14px; margin: 10px 0 0 0;">
                Follow us on social media for real-time updates and insights from our team of IT experts.
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.FRONTEND_URL}" 
                 style="background: linear-gradient(135deg, #f08b0a 0%, #301934 100%); 
                        color: white; 
                        padding: 15px 30px; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        font-weight: bold; 
                        display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f2f2f2; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666666; font-size: 14px; margin: 0 0 10px 0;">
              <strong>GN Solutions</strong><br>
              Dublin Office: +353 89 278 5147
            </p>
            <p style="color: #999999; font-size: 12px; margin: 0;">
              If you no longer wish to receive these emails, you can 
              <a href="${process.env.FRONTEND_URL}/unsubscribe?email=${encodeURIComponent(email)}" 
                 style="color: #f08b0a; text-decoration: none;">unsubscribe here</a>.
            </p>
          </div>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send newsletter welcome back email
   * @param {string} email - Subscriber email
   */
  async sendNewsletterWelcomeBack(email) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Welcome back to GN Solutions Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #301934 0%, #f08b0a 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Welcome Back!</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We're glad to have you back</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 20px;">
            <h2 style="color: #301934; font-size: 24px; margin-bottom: 20px;">Your subscription is now active!</h2>
            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for re-subscribing to our newsletter. You'll continue to receive the latest updates from GN Solutions.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.FRONTEND_URL}" 
                 style="background: linear-gradient(135deg, #f08b0a 0%, #301934 100%); 
                        color: white; 
                        padding: 15px 30px; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        font-weight: bold; 
                        display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f2f2f2; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666666; font-size: 14px; margin: 0 0 10px 0;">
              <strong>GN Solutions</strong><br>
              Dublin Office: +353 89 278 5147
            </p>
            <p style="color: #999999; font-size: 12px; margin: 0;">
              If you no longer wish to receive these emails, you can 
              <a href="${process.env.FRONTEND_URL}/unsubscribe?email=${encodeURIComponent(email)}" 
                 style="color: #f08b0a; text-decoration: none;">unsubscribe here</a>.
            </p>
          </div>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send newsletter admin notification
   * @param {string} email - New subscriber email
   */
  async sendNewsletterAdminNotification(email) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #301934; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">New Newsletter Subscription</h2>
          </div>
          
          <div style="padding: 20px; background-color: #ffffff;">
            <p style="color: #666666; font-size: 16px;">
              A new user has subscribed to the newsletter:
            </p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #f08b0a;">
              <p style="margin: 0; color: #301934;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0 0 0; color: #666666; font-size: 14px;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="color: #666666; font-size: 14px; margin-top: 20px;">
              You can manage newsletter subscriptions from the admin dashboard.
            </p>
          </div>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send unsubscribe confirmation
   * @param {string} email - Unsubscribed email
   */
  async sendNewsletterUnsubscribeConfirmation(email) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Unsubscribed from GN Solutions Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background-color: #301934; padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Unsubscription Confirmed</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px;">
            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              You have been successfully unsubscribed from the GN Solutions newsletter.
            </p>
            
            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              We're sorry to see you go! If you change your mind, you can always subscribe again on our website.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.FRONTEND_URL}" 
                 style="background-color: #f08b0a; 
                        color: white; 
                        padding: 12px 25px; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        font-weight: bold; 
                        display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f2f2f2; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666666; font-size: 14px; margin: 0;">
              <strong>GN Solutions</strong><br>
              Dublin Office: +353 89 278 5147
            </p>
          </div>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send updated contact form notification to admin
   * @param {Object} contact - Contact data
   */
  async sendContactNotification(contact) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission: ${contact.inquiryType || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #301934 0%, #f08b0a 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #f08b0a; margin-bottom: 20px;">
              <h3 style="color: #301934; margin: 0 0 15px 0;">Contact Details</h3>
              <p style="margin: 8px 0; color: #666666;"><strong>Name:</strong> ${contact.name}</p>
              <p style="margin: 8px 0; color: #666666;"><strong>Email:</strong> ${contact.email}</p>
              <p style="margin: 8px 0; color: #666666;"><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
              <p style="margin: 8px 0; color: #666666;"><strong>Company:</strong> ${contact.company || 'Not provided'}</p>
              <p style="margin: 8px 0; color: #666666;"><strong>Inquiry Type:</strong> ${contact.inquiryType || 'Not specified'}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h3 style="color: #301934; margin: 0 0 15px 0;">Message</h3>
              <div style="background: #f2f2f2; padding: 15px; border-radius: 5px; color: #301934; line-height: 1.6;">
                ${contact.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 5px; border-left: 4px solid #007bff;">
              <p style="margin: 0; color: #666666; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date(contact.createdAt).toLocaleString()}<br>
                <strong>Status:</strong> ${contact.status}
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f2f2f2; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666666; font-size: 12px; margin: 0;">
              This email was automatically generated from your contact form.<br>
              Please respond to this inquiry as soon as possible.
            </p>
          </div>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  /**
   * Send updated contact form confirmation to user
   * @param {Object} contact - Contact data
   */
  async sendContactConfirmation(contact) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: contact.email,
      subject: 'Thank you for contacting GN Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #301934 0%, #f08b0a 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Thank You!</h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 20px;">
            <h2 style="color: #301934; font-size: 24px; margin-bottom: 20px;">Dear ${contact.name},</h2>
            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to GN Solutions. We have received your inquiry and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #f08b0a; margin: 20px 0;">
              <h3 style="color: #301934; margin: 0 0 15px 0;">Your Message Details:</h3>
              <p style="margin: 8px 0; color: #666666;"><strong>Inquiry Type:</strong> ${contact.inquiryType || 'General Inquiry'}</p>
              <p style="margin: 8px 0; color: #666666;"><strong>Company:</strong> ${contact.company || 'Not provided'}</p>
              <div style="margin-top: 15px;">
                <p style="margin: 0 0 10px 0; color: #666666; font-weight: bold;">Message:</p>
                <div style="background: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0; color: #301934;">
                  ${contact.message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #301934; margin: 0 0 10px 0;">⏰ What happens next?</h4>
              <ul style="color: #666666; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>Our team will review your inquiry within 2-4 hours</li>
                <li>You'll receive a detailed response within 24-48 hours</li>
                <li>For urgent matters, feel free to call us at +353 89 278 5147</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.FRONTEND_URL}" 
                 style="background: linear-gradient(135deg, #f08b0a 0%, #301934 100%); 
                        color: white; 
                        padding: 15px 30px; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        font-weight: bold; 
                        display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f2f2f2; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #666666; font-size: 14px; margin: 0 0 10px 0;">
              <strong>GN Solutions</strong><br>
              Enterprise IT Automation & Cybersecurity<br>
              Dublin Office: +353 89 278 5147<br>
              Email: info@gnsolutions.eu
            </p>
            <p style="color: #999999; font-size: 12px; margin: 10px 0 0 0;">
              This is an automated confirmation email. Please do not reply directly to this email.
            </p>
          </div>
        </div>
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
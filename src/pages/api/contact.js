import nodemailer from 'nodemailer';

// Input validation helper
const validateInput = ({ name, email, phone, message, interest }) => {
  if (!name || !email || !phone || !message || !interest) {
    return { valid: false, error: 'All fields are required' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  if (phone.length < 10 || phone.length > 15) {
    return { valid: false, error: 'Phone number should be 10-15 digits' };
  }

  return { valid: true };
};

// Create reusable transporter object
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    // Connection pooling and rate limiting
    pool: true,
    maxConnections: 1,
    maxMessages: 5,
    rateLimit: true,
    // Better timeout handling
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
    // Debugging (only in development)
    debug: process.env.NODE_ENV === 'development',
    logger: process.env.NODE_ENV === 'development',
  });
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate input
    const validation = validateInput(req.body);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }

    const { name, email, phone, message, interest } = req.body;
    const transporter = createTransporter();

    // Email templates
    const currentDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium'
    });

    const adminEmail = {
      from: `"SK Trading Contact Form" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Inquiry: ${interest} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #1a5276;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #ddd; padding-left: 15px; margin-left: 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 0.9em;">
            Received at: ${currentDate}
          </p>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\nMessage:\n${message}\n\nReceived at: ${currentDate}`
    };

    const userEmail = {
      from: `"SK Trading Co." <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: `Thank you for contacting SK Trading Co.`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a5276;">Dear ${name},</h2>
          <p>Thank you for your inquiry about our ${interest} dismantling joint valves.</p>
          <p>We've received your message and our team will contact you within 24 hours.</p>
          
          <h3 style="color: #1a5276;">Your Inquiry Details:</h3>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #ddd; padding-left: 15px; margin-left: 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          
          <p>For immediate assistance, you can call us at:</p>
          <p style="font-weight: bold;">
            <a href="tel:+919167738535">+91 91677 38535</a> or 
            <a href="tel:+919820677197">+91 98206 77197</a>
          </p>
          
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p>Best regards,</p>
          <p style="font-weight: bold;">SK Trading Co. Team</p>
          <address style="font-style: normal;">
            Plot No. 03, Thane-Pune Road, Dahisar Naka, Thakurpada<br/>
            Thane-400612, Maharashtra, India
          </address>
        </div>
      `,
      text: `Dear ${name},\n\nThank you for your inquiry about our ${interest} dismantling joint valves.\nWe've received your message and our team will contact you within 24 hours.\n\nYour Inquiry Details:\nPhone: ${phone}\nInterest: ${interest}\nMessage:\n${message}\n\nFor immediate assistance, you can call us at:\n+91 91677 38535 or +91 98206 77197\n\nBest regards,\nSK Trading Co. Team\nPlot No. 03, Thane-Pune Road, Dahisar Naka, Thakurpada\nThane-400612, Maharashtra, India`
    };

    // Verify connection configuration
    await transporter.verify();

    // Send emails with timeout
    const sendEmailWithTimeout = (mailOptions, timeout = 10000) => {
      return Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email sending timeout')), timeout)
        )]);
    };

    const [adminResult, userResult] = await Promise.all([
      sendEmailWithTimeout(adminEmail),
      sendEmailWithTimeout(userEmail)
    ]);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your inquiry. We have received your message and will contact you shortly.',
      details: {
        adminMessageId: adminResult.messageId,
        userMessageId: userResult.messageId
      }
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      error: 'Failed to send your message. Please try again later or contact us directly.',
      ...(process.env.NODE_ENV === 'development' && {
        debug: error.message
      })
    });
  }
}
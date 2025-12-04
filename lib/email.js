import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendThankYouEmail(name, email) {
  console.log('📧 Sending thank you email to:', email)

  try {
    const info = await transporter.sendMail({
      from: `"AlfredAI" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Thank you for contacting AlfredAI',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
            </div>
            
            <div style="background: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
              <h2 style="color: #1e293b; margin-top: 0;">We've Received Your Message</h2>
              <p>Thank you for reaching out to AlfredAI. We appreciate your interest in transforming your business with our AI-powered solutions.</p>
              <p>Our team will review your message and get back to you within 24-48 hours.</p>
            </div>
            
            <div style="margin-top: 30px; text-align: center; color: #94a3b8; font-size: 12px;">
              <p>© 2024 AlfredAI. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
    })

    console.log('✅ Thank you email sent:', info.messageId)
    return info
  } catch (error) {
    console.error('❌ Error sending thank you email:', error)
    throw error
  }
}

export async function sendNotificationEmail(formData) {
  console.log('📧 Sending notification email to admin')

  try {
    const info = await transporter.sendMail({
      from: `"AlfredAI Notifications" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Contact Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🎉 New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0;">
              <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">Contact Details</h2>
              
              <div style="margin: 20px 0;">
                <p style="margin: 8px 0;"><strong style="color: #64748b;">Name:</strong> ${formData.name}</p>
                <p style="margin: 8px 0;"><strong style="color: #64748b;">Email:</strong> <a href="mailto:${formData.email}" style="color: #ec4899;">${formData.email}</a></p>
                <p style="margin: 8px 0;"><strong style="color: #64748b;">Company:</strong> ${formData.company}</p>
              </div>
              
              <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #64748b;">Message:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #ec4899;">
                  ${formData.message}
                </div>
              </div>
              
              <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b;">
                <p style="margin: 4px 0;"><strong>UTM Source:</strong> ${formData.utm_source || 'N/A'}</p>
                <p style="margin: 4px 0;"><strong>Referrer:</strong> ${formData.referrer || 'Direct'}</p>
                <p style="margin: 4px 0;"><strong>IP Address:</strong> ${formData.user_ip || 'N/A'}</p>
              </div>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
              <a href="mailto:${formData.email}" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Reply to ${formData.name}</a>
            </div>
          </body>
        </html>
      `,
    })

    console.log('✅ Notification email sent:', info.messageId)
    return info
  } catch (error) {
    console.error('❌ Error sending notification email:', error)
    throw error
  }
}
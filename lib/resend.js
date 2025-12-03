import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

console.log('Resend API Key:', resendApiKey ? 'Found' : 'Missing')

if (!resendApiKey) {
  console.error('Missing RESEND_API_KEY environment variable')
}

export const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function sendThankYouEmail(name, email) {
  if (!resend) {
    console.error('Resend not initialized')
    throw new Error('Email service not configured')
  }

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
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
      `
    })

    return data
  } catch (error) {
    console.error('Error sending thank you email:', error)
    throw error
  }
}

export async function sendNotificationEmail(formData) {
  if (!resend) {
    console.error('Resend not initialized')
    throw new Error('Email service not configured')
  }

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'ellejohnc@gmail.com',
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
            </div>
          </body>
        </html>
      `
    })

    return data
  } catch (error) {
    console.error('Error sending notification email:', error)
    throw error
  }
}
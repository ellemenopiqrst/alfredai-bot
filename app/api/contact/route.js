import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
/*import { sendThankYouEmail, sendNotificationEmail } from '@/lib/resend'*/
import { sendThankYouEmail, sendNotificationEmail } from '@/lib/email'
/*import { sendThankYouEmail, sendNotificationEmail } from '@/lib/sendgrid'*/
/*(import { sendThankYouEmail, sendNotificationEmail } from '@/lib/mailgun'*/

export async function POST(request) {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      console.error('Supabase client not initialized')
      return NextResponse.json(
        { error: 'Database configuration error' },
        { status: 500 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, email, company, message } = body

    console.log('Received form data:', { name, email, company })

    // Validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Extract UTM parameters and metadata
    const utmSource = request.headers.get('referer')?.includes('?') 
      ? new URL(request.headers.get('referer')).searchParams.get('utm_source') || 'direct'
      : 'direct'
    
    const referrer = request.headers.get('referer') || 'direct'
    const userIp = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                   request.headers.get('x-real-ip') || 
                   'unknown'

    // Prepare data for Supabase
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      message: message.trim(),
      utm_source: utmSource,
      referrer: referrer,
      user_ip: userIp
    }

    console.log('Attempting to insert into Supabase...')

    // Insert into Supabase
    const { data, error: supabaseError } = await supabase
      .from('contacts')
      .insert([contactData])
      .select()

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)
      return NextResponse.json(
        { error: 'Failed to save: ' + supabaseError.message },
        { status: 500 }
      )
    }

    console.log('✅ Successfully inserted into Supabase:', data)

    // Send emails (don't fail if emails fail)
    try {
      await sendThankYouEmail(name, email)
      console.log('✅ Thank you email sent')
    } catch (emailError) {
      console.error('⚠️ Email failed (continuing anyway):', emailError.message)
    }

    try {
      await sendNotificationEmail(contactData)
      console.log('✅ Notification email sent')
    } catch (emailError) {
      console.error('⚠️ Notification failed (continuing anyway):', emailError.message)
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: data[0]
    }, { status: 200 })

  } catch (error) {
    console.error('❌ API error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to submit contact form.' },
    { status: 200 }
  )
}
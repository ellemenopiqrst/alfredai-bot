import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendThankYouEmail, sendNotificationEmail } from '@/lib/resend'

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, company, message } = body

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
    const createdAt = new Date().toISOString()

    // Prepare data for Supabase
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      message: message.trim(),
      utm_source: utmSource,
      referrer: referrer,
      user_ip: userIp,
      created_at: createdAt
    }

    // Insert into Supabase
    const { data, error: supabaseError } = await supabase
      .from('contacts')
      .insert([contactData])
      .select()

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)
      return NextResponse.json(
        { error: 'Failed to save contact information' },
        { status: 500 }
      )
    }

    // Send thank you email to user
    try {
      await sendThankYouEmail(name, email)
    } catch (emailError) {
      console.error('Error sending thank you email:', emailError)
      // Continue even if email fails
    }

    // Send notification email to admin
    try {
      await sendNotificationEmail({
        ...contactData,
        createdAt
      })
    } catch (emailError) {
      console.error('Error sending notification email:', emailError)
      // Continue even if email fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: data[0]
    }, { status: 200 })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to submit contact form.' },
    { status: 200 }
  )
}
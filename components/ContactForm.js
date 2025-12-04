'use client'

import { useState, useEffect } from 'react'
import { Send } from 'lucide-react'
import FadeInSection from './FadeInSection'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // Check for email from hero section on mount AND listen for changes
  useEffect(() => {
    const checkForEmail = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const emailParam = urlParams.get('email')
      if (emailParam && emailParam !== formData.email) {
        setFormData(prev => ({ ...prev, email: emailParam }))
      }
    }

    // Check immediately
    checkForEmail()

    // Listen for popstate events (when URL changes)
    window.addEventListener('popstate', checkForEmail)
    
    // Also set up a listener for custom events
    const handleEmailUpdate = (e) => {
      if (e.detail && e.detail.email) {
        setFormData(prev => ({ ...prev, email: e.detail.email }))
      }
    }
    window.addEventListener('heroEmailSet', handleEmailUpdate)

    return () => {
      window.removeEventListener('popstate', checkForEmail)
      window.removeEventListener('heroEmailSet', handleEmailUpdate)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    console.log('📤 Submitting form data:', formData)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log('📥 Response:', data)

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        // Clear URL params
        window.history.replaceState({}, '', window.location.pathname)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong')
        console.error('❌ Error:', data.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection.')
      console.error('❌ Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600">
              Ready to transform your business? Let's talk.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Work Email"
                required
                className="px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
              />
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              required
              className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors mb-6"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your needs..."
              required
              rows="5"
              className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors mb-6 resize-none"
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5" />
            </button>
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl">
                <p className="text-green-700 text-center font-medium text-lg">
                  ✅ Thank you! We'll be in touch within 24 hours.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl">
                <p className="text-red-700 text-center font-medium">
                  ❌ {errorMessage}
                </p>
                <p className="text-red-600 text-center text-sm mt-2">
                  Please try again or email us directly at ellejohnc@gmail.com
                </p>
              </div>
            )}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
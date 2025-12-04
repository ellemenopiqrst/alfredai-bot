'use client'

import { useState } from 'react'
import { Send, CheckCircle, Play } from 'lucide-react'
import FadeInSection from './FadeInSection'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleGetStarted = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      const url = new URL(window.location.href)
      url.searchParams.set('email', email)
      window.history.pushState({}, '', url)
      
      window.dispatchEvent(new CustomEvent('heroEmailSet', { 
        detail: { email: email } 
      }))
      
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      alert('Please enter a valid email address')
    }
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <FadeInSection>
          <div>
            <div className="inline-block px-4 py-2 bg-pink-50 border border-pink-200 rounded-full text-pink-600 text-sm font-medium mb-6">
              AI-CENTRIC BUSINESS OPERATING SYSTEM
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Automate 80% of Your Admin Work
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We create automation systems powered by our knowledge management infrastructure to protect margins, scale expertise, strengthen accountability, and lift EBITDA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGetStarted(e)}
                placeholder="What's your work mail?"
                className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-full focus:border-pink-500 focus:outline-none transition-colors"
              />
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Get Started Free
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-slate-500 mb-6">No Credit Card Required</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">Done-For-You</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-slate-700 font-medium">Scalable</span>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 border border-slate-200 overflow-hidden">
              {/* Video Container */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl overflow-hidden group">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/video-poster.jpg"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-lg font-bold mb-1">Automate 80% of Admin Work</p>
                    <p className="text-sm opacity-90">Save time. Scale faster. Grow smarter.</p>
                  </div>
                </div>
              </div>
              
              {/* AI Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['ChatGPT', 'Claude', 'Gemini', 'Grok', 'DeepSeek'].map((ai, i) => (
                  <div key={i} className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full text-xs font-medium text-slate-700 border border-slate-200">
                    {ai}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
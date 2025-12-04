'use client'

import { useState } from 'react'
import { Send, CheckCircle, Sparkles, Zap, Clock } from 'lucide-react'
import FadeInSection from './FadeInSection'

export default function Hero() {
  const [email, setEmail] = useState('')

  const smoothScrollToContact = (e) => {
    e.preventDefault()
    
    if (email && email.includes('@')) {
      // Store email for pre-fill
      window.dispatchEvent(new CustomEvent('heroEmailSet', { 
        detail: { email: email } 
      }))
      
      const url = new URL(window.location.href)
      url.searchParams.set('email', email)
      window.history.pushState({}, '', url)
    }
    
    // Smooth scroll to contact
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <FadeInSection>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-full text-pink-600 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-CENTRIC BUSINESS OPERATING SYSTEM
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Eliminate 80% of Your Admin Work
            </h1>
            
            <p className="text-xl text-slate-600 mb-4 leading-relaxed">
              Transform your business with AI-powered automation. From fee proposals to report generation, we handle the repetitive tasks so you can focus on growth.
            </p>
            
            <div className="flex items-start gap-3 mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-blue-900 mb-1">AI Fee Proposal Generator</p>
                <p className="text-sm text-blue-700">Generate professional proposals in 2.5 minutes instead of 8 hours. Fully customizable, compliant, and ready for commercial use.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && smoothScrollToContact(e)}
                placeholder="Enter your work email"
                className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-full focus:border-pink-500 focus:outline-none transition-all focus:shadow-lg"
              />
              <button 
                onClick={smoothScrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                Get Started Free
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No Credit Card Required · Start in 5 Minutes
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">Done-For-You</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">Instant Scale</span>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-slate-200">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-pink-600" />
                    <span className="text-2xl font-bold text-pink-600">97%</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Time Saved</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-2xl font-bold text-blue-600">2.5min</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">vs 8 Hours</p>
                </div>
              </div>
              
              {/* Extended Content (Moved Above Video) */}
              <div className="w-full aspect-video bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-600 font-medium text-lg">Turn Managed Knowledge</p>
                  <p className="text-slate-600 font-medium text-lg">into Operational Profits</p>
                </div>
              </div>
              
              {/* Video Container */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl overflow-hidden group mb-4">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/video-poster.jpg"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag. <a href="/hero-video.mp4">Download the video</a></p>
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
              <div className="flex flex-wrap gap-2">
                <div className="text-xs font-medium text-slate-600 w-full mb-2">Powered by:</div>
                {['ChatGPT', 'Claude', 'Gemini', 'Grok', 'DeepSeek'].map((ai, i) => (
                  <div key={i} className="px-3 py-2 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full text-xs font-medium text-slate-700 border border-slate-200 hover:border-pink-300 hover:shadow-md transition-all cursor-default">
                    {ai}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
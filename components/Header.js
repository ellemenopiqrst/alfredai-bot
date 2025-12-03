'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            alfred ai
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            Features
          </a>
          <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            Testimonials
          </a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            Contact
          </a>
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold">
            Sign In
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
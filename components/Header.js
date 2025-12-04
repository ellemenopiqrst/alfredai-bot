'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  const handleBookDemo = () => {
    closeMenu()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    closeMenu()
  }

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Clickable Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              <span className="text-white font-bold text-xl relative z-10">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Alfred AI
            </span>
          </button>
          
          {/* Desktop Menu */}
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
            <button 
              onClick={handleBookDemo}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 md:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col gap-6 p-8 mt-20">
          <a 
            href="#features" 
            onClick={closeMenu}
            className="text-slate-700 hover:text-pink-600 transition-colors font-medium text-lg"
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            onClick={closeMenu}
            className="text-slate-700 hover:text-pink-600 transition-colors font-medium text-lg"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="text-slate-700 hover:text-pink-600 transition-colors font-medium text-lg"
          >
            Contact
          </a>
          <button 
            onClick={handleBookDemo}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full hover:shadow-lg transition-all font-semibold mt-4"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </>
  )
}
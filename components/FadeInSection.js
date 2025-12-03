'use client'

import { useState, useEffect, useRef } from 'react'

export default function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only animate once when first becoming visible
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    
    return () => {
      if (ref.current) observer.disconnect()
    }
  }, [delay, hasAnimated])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}
import { Send, CheckCircle } from 'lucide-react'
import FadeInSection from './FadeInSection'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <FadeInSection>
          <div>
            <div className="inline-block px-4 py-2 bg-pink-50 border border-pink-200 rounded-full text-pink-600 text-sm font-medium mb-6">
              AI-CENTRIC BUSINESS OPERATING SYSTEM
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Your AI Partner for Business Growth
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We create automation systems powered by our knowledge management infrastructure to protect margins, scale expertise, strengthen accountability, and lift EBITDA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="email"
                placeholder="What's your work mail?"
                className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-full focus:border-pink-500 focus:outline-none transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
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
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
              <div className="flex flex-wrap gap-3 mb-6">
                {['ChatGPT', 'Claude', 'Gemini', 'Grok', 'DeepSeek'].map((ai, i) => (
                  <div key={i} className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
                    {ai}
                  </div>
                ))}
              </div>
              <div className="w-full h-64 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
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
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
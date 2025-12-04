import { FileText, Mail, Calendar, BarChart3, MessageSquare, FileCheck } from 'lucide-react'
import FadeInSection from './FadeInSection'

const useCases = [
  {
    icon: FileText,
    title: 'AI Fee Proposal Generator',
    description: 'Generate comprehensive fee proposals in 2.5 minutes instead of 8 hours. Perfect for consultants, agencies, and professional services.',
    stats: '97% faster',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50'
  },
  {
    icon: FileCheck,
    title: 'Report Generation',
    description: 'Create technical reports, research papers, and documentation automatically. Maintain brand consistency and compliance across all documents.',
    stats: '200+ reports/month',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50'
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Smart email responses, follow-ups, and campaign management. Handle 80% of routine correspondence automatically.',
    stats: '500+ emails/day',
    color: 'from-purple-400 to-violet-500',
    bgColor: 'from-purple-50 to-violet-50'
  },
  {
    icon: Calendar,
    title: 'Schedule Management',
    description: 'AI-powered appointment booking, meeting coordination, and calendar optimization. Never double-book again.',
    stats: '24/7 availability',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    icon: MessageSquare,
    title: 'Customer Support',
    description: 'Intelligent chatbots handle FAQs, troubleshooting, and support tickets. Escalate complex issues to your team seamlessly.',
    stats: '90% resolution rate',
    color: 'from-orange-400 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50'
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights. Generate reports, dashboards, and forecasts automatically.',
    stats: 'Real-time insights',
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50'
  }
]

export default function UseCases() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-pink-50 border border-pink-200 rounded-full text-pink-600 text-sm font-medium mb-4">
              Real-World Applications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Automate Every Part of Your Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From proposal generation to customer support, our AI handles repetitive tasks so your team can focus on strategic work
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon
            return (
              <FadeInSection key={i} delay={i * 50}>
                <div className={`group p-6 bg-gradient-to-br ${useCase.bgColor} rounded-2xl border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{useCase.title}</h3>
                    <span className={`text-xs font-bold px-2 py-1 bg-gradient-to-r ${useCase.color} text-white rounded-full`}>
                      {useCase.stats}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {useCase.description}
                  </p>
                  
                {/* div className="mt-4 pt-4 border-t border-slate-200">
                    <button className="text-sm font-semibold text-pink-600 hover:text-pink-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div> */}
                </div>
              </FadeInSection>
            )
          })}
        </div>
        
        <FadeInSection delay={300}>
          <div className="mt-12 p-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Automate Your Workflow?</h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">Join 500+ businesses saving 80% of their time with AI automation</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Start Free Trial
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
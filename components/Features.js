import { Zap, Shield, TrendingUp, Users, Clock, Sparkles } from 'lucide-react'
import FadeInSection from './FadeInSection'

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Automation',
    description: 'Streamline workflows with intelligent automation that learns from your business processes. From proposal generation to report creation, handle tasks in minutes instead of hours.',
    benefits: ['97% time savings', 'Batch processing', 'Auto-training'],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption with AES-256, GDPR compliance, RBAC, HTTPS/TLS 1.3, and MFA. Built on AWS infrastructure with zero data sharing. Your data stays yours.',
    benefits: ['SOC 2 compliant', 'Zero data sharing', 'End-to-end encryption'],
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: TrendingUp,
    title: 'Scale with Confidence',
    description: 'Infrastructure that grows with you—from startup to enterprise. Handle thousands of requests per minute without breaking a sweat. ROI guaranteed or we work for free.',
    benefits: ['Auto-scaling', 'ROI guarantee', '99.9% uptime'],
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Done-For-You Service',
    description: 'We handle everything—setup, training, and ongoing support. White-labeled solutions that match your brand. Get started in hours, not weeks.',
    benefits: ['Expert setup', 'White-label ready', 'Priority support'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Clock,
    title: '24/7 AI Assistant',
    description: 'Your AI never sleeps. Handle customer inquiries, generate documents, and process data around the clock. Serve global customers across all time zones.',
    benefits: ['Always available', 'Multi-language', 'Instant responses'],
    color: 'from-rose-400 to-red-500'
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    description: 'AI that gets smarter over time. Automatic retraining on your latest data keeps everything current. Choose from hourly, daily, or weekly updates.',
    benefits: ['Auto updates', 'Learning algorithms', 'Performance tracking'],
    color: 'from-cyan-400 to-blue-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-full text-pink-600 text-sm font-medium mb-4">
              Everything You Need
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Six powerful features that transform how you work, backed by enterprise-grade technology
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <FadeInSection key={i} delay={i * 100}>
                <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                        <span className="text-sm text-slate-600 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
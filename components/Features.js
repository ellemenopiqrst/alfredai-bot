import { Zap, Shield, TrendingUp } from 'lucide-react'
import FadeInSection from './FadeInSection'

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Automation',
    description: 'Streamline workflows with intelligent automation that learns and adapts to your business processes.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance standards to keep your business data protected at all times.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: TrendingUp,
    title: 'Scale with Confidence',
    description: 'Infrastructure that grows with you, from startup to enterprise, without missing a beat.',
    color: 'from-green-400 to-emerald-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three powerful features that transform how you operate
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <FadeInSection key={i} delay={i * 100}>
                <div className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
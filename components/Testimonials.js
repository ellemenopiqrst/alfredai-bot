import FadeInSection from './FadeInSection'

const testimonials = [
  {
    quote: "AlfredAI transformed our operations. We've seen a 40% increase in efficiency within 3 months.",
    author: "Sarah Chen",
    role: "CEO, TechCorp"
  },
  {
    quote: "The automation capabilities are incredible. It's like having an entire team working 24/7.",
    author: "Michael Rodriguez",
    role: "COO, InnovateLabs"
  },
  {
    quote: "Best decision we made this year. The ROI was evident from day one.",
    author: "Emily Watson",
    role: "CTO, FutureScale"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300">
              See what our clients say about working with us
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                <p className="text-lg text-slate-200 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
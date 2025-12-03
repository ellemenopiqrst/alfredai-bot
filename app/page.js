import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-2xl font-bold">Alfred AI</span>
        </div>
        <p className="text-slate-400 mb-8">Your AI Partner for Business Growth</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors">Testimonials</a>
          <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-slate-500 text-sm">© 2025 AlfredAI. All rights reserved.</p>
      </div>
    </footer>
  )
}
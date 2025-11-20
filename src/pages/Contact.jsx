import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main className="pt-32">
        <section className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Contact us</h1>
          <p className="mt-4 text-blue-100/80 max-w-3xl">Tell us what you want to build. We’ll respond within one business day.</p>

          <form onSubmit={(e)=>e.preventDefault()} className="mt-10 grid grid-cols-1 gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Name" />
              <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
            </div>
            <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Company" />
            <textarea rows="6" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Project details" />
            <button className="mt-2 w-full md:w-auto rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.8)] transition-shadow">Send message</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

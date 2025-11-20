import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main className="pt-32">
        <section className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">About Clix</h1>
          <p className="mt-4 text-blue-100/80 max-w-3xl">We are a digital product studio blending strategy, design, and engineering. Our team ships fast, sweats details, and treats every project like a flagship.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-4xl font-bold">8+</div>
              <div className="text-blue-100/70">Years building for the web</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-4xl font-bold">120+</div>
              <div className="text-blue-100/70">Products launched</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-4xl font-bold">5x</div>
              <div className="text-blue-100/70">Average ROI for clients</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

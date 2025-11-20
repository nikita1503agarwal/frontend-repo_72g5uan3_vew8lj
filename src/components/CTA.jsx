export default function CTA() {
  return (
    <section id="contact-cta" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-white tracking-tight">Have something bold in mind?</h3>
              <p className="mt-3 text-blue-100/80">Tell us about your goals. We’ll shape a roadmap and assemble the right team to make it real.</p>
              <ul className="mt-6 space-y-2 text-blue-100/70 text-sm">
                <li>• 2-week discovery sprints</li>
                <li>• Transparent pricing</li>
                <li>• Dedicated product lead</li>
              </ul>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="space-y-3">
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Company or project" />
              <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
              <textarea rows="4" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="What are you looking to build?" />
              <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.8)] transition-shadow">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

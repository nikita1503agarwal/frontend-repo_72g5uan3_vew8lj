import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-blue-100 backdrop-blur">
            <span className="inline-block size-2 rounded-full bg-cyan-400 animate-pulse" />
            Futuristic digital experiences
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            Clix — A digital agency for the next era
          </h1>
          <p className="mt-6 text-blue-100/80 text-lg max-w-xl">
            We design, build, and scale immersive products for ambitious brands. Human-centered. AI-powered. Always remarkable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-cta" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.8)] transition-shadow">
              Start a project
            </a>
            <a href="/services" className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors">
              Explore services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

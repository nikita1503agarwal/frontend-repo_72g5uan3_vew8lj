import { motion } from 'framer-motion'
import { Sparkles, Rocket, Cpu, LineChart } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Brand & Product Design',
    desc: 'Visual identities and interfaces that feel inevitable — elegant, minimal, and deeply usable.'
  },
  {
    icon: Rocket,
    title: 'Web & App Development',
    desc: 'From landing pages to complex platforms — engineered for speed, reliability, and scale.'
  },
  {
    icon: Cpu,
    title: 'AI Integrations',
    desc: 'Automations and intelligent workflows that turn friction into flow across your stack.'
  },
  {
    icon: LineChart,
    title: 'Growth & Analytics',
    desc: 'Data-driven experimentation to launch, learn, and iterate faster than the market moves.'
  }
]

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-blue-100/80 max-w-2xl">End-to-end capabilities to take ideas from zero to one — and one to one hundred.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{opacity:0, y: 10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.05}} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-cyan-300 p-3">
                <f.icon className="size-5" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

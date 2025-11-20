import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Strategy & Discovery',
    items: ['Product strategy', 'Market research', 'Roadmapping', 'UX audits']
  },
  {
    title: 'Design',
    items: ['Brand identity', 'Design systems', 'UX/UI design', 'Prototyping']
  },
  {
    title: 'Development',
    items: ['Web apps', 'Mobile-friendly sites', 'APIs & integrations', 'Performance optimization']
  },
  {
    title: 'AI & Automation',
    items: ['Chatbots', 'Process automation', 'Data pipelines', 'Analytics dashboards']
  }
]

export default function Services(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main className="pt-32">
        <section className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Services</h1>
          <p className="mt-4 text-blue-100/80 max-w-3xl">A modular set of services to support your product lifecycle from concept to scale.</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(card => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="font-semibold text-xl">{card.title}</h3>
                <ul className="mt-4 space-y-3 text-blue-100/80 text-sm">
                  {card.items.map(i => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 text-cyan-400" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

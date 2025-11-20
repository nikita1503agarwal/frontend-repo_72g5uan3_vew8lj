import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Logo() {
  return (
    <NavLink to="/" className="group inline-flex items-center gap-2">
      <div className="relative">
        <div className="size-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(56,189,248,0.45)]"></div>
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm"></div>
      </div>
      <span className="font-semibold text-white text-xl tracking-tight">
        Clix
        <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">.</span>
      </span>
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-sm md:text-base text-blue-100/80 hover:text-white transition-colors'
  const activeBase = 'text-white'

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 py-4">
            <Logo />

            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? activeBase : ''}`}>Home</NavLink>
              <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? activeBase : ''}`}>About</NavLink>
              <NavLink to="/services" className={({isActive}) => `${linkBase} ${isActive ? activeBase : ''}`}>Services</NavLink>
              <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? activeBase : ''}`}>Contact</NavLink>
              <a href="#contact-cta" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold px-4 py-2 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.8)] transition-shadow">Get a Quote</a>
            </nav>

            <button className="md:hidden text-blue-100" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden flex flex-col gap-1 p-4 border-t border-white/10">
              <NavLink onClick={()=>setOpen(false)} to="/" end className={({isActive}) => `px-3 py-2 rounded-lg ${linkBase} ${isActive ? activeBase : ''}`}>Home</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/about" className={({isActive}) => `px-3 py-2 rounded-lg ${linkBase} ${isActive ? activeBase : ''}`}>About</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/services" className={({isActive}) => `px-3 py-2 rounded-lg ${linkBase} ${isActive ? activeBase : ''}`}>Services</NavLink>
              <NavLink onClick={()=>setOpen(false)} to="/contact" className={({isActive}) => `px-3 py-2 rounded-lg ${linkBase} ${isActive ? activeBase : ''}`}>Contact</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

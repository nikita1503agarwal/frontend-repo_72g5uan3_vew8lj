export default function Footer(){
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-blue-100/70 text-sm">© {new Date().getFullYear()} Clix. All rights reserved.</p>
        <div className="text-blue-100/50 text-xs">Designed with intention. Built for speed.</div>
      </div>
    </footer>
  )
}

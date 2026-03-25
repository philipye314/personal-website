export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#111111] relative z-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4 max-w-7xl mx-auto">
        <span className="font-['Geist_Mono'] text-[10px] uppercase tracking-[0.2em] text-white/30">
          © 2024 Philip Architect. Built for precision.
        </span>
        <div className="flex gap-8 items-center">
          <a className="font-['Geist_Mono'] text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all" href="#">
            Twitter
          </a>
          <a className="font-['Geist_Mono'] text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all" href="#">
            GitHub
          </a>
          <a className="font-['Geist_Mono'] text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all" href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

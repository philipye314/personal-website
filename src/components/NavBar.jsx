export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="font-['Geist_Mono'] font-bold text-xl tracking-tighter text-white">
          ARCHITECT.V1
        </div>
        <div className="hidden md:flex gap-8 items-center font-['Geist_Mono'] font-medium tracking-tight text-xs uppercase">
          <a className="text-white border-b border-white/40 pb-1" href="#about">
            <span className="text-white/30 mr-1.5">01</span> About
          </a>
          <a className="text-white/60 hover:text-white transition-colors" href="#work">
            <span className="text-white/30 mr-1.5">02</span> Work
          </a>
          <a className="text-white/60 hover:text-white transition-colors" href="#projects">
            <span className="text-white/30 mr-1.5">03</span> Projects
          </a>
          <a className="text-white/60 hover:text-white transition-colors" href="#stack">
            <span className="text-white/30 mr-1.5">04</span> Skills
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="hover:bg-white/10 rounded-sm transition-all p-2 text-white active:scale-95 duration-200">
            <span className="material-symbols-outlined">mail</span>
          </button>
          <button className="hover:bg-white/10 rounded-sm transition-all p-2 text-white active:scale-95 duration-200">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <button className="hover:bg-white/10 rounded-sm transition-all p-2 text-white active:scale-95 duration-200">
            <span className="material-symbols-outlined">code</span>
          </button>
        </div>
      </div>
      <div className="bg-white/5 h-[1px]"></div>
    </nav>
  )
}

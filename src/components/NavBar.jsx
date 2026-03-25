import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'work', number: '02', label: 'Work' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'stack', number: '04', label: 'Skills' },
]

export default function NavBar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="font-['Geist_Mono'] font-bold text-xl tracking-tighter text-white">
          ARCHITECT.V1
        </div>
        <div className="hidden md:flex gap-8 items-center font-['Geist_Mono'] font-medium tracking-tight text-xs uppercase">
          {sections.map(({ id, number, label }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative pb-1 transition-colors ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="text-white/30 mr-1.5">{number}</span>
                {label}
                <span
                  className="absolute bottom-0 left-0 w-full h-px bg-white/40 transition-opacity duration-300"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
              </a>
            )
          })}
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

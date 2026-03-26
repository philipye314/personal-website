import { useEffect, useRef } from 'react'
import { skills } from '../data/skills'

// Triple the list so there's always enough content to fill any screen width
// and the loop reset is invisible (we animate to -1/3 of total width, then reset)
const loopedSkills = [...skills, ...skills, ...skills]

export default function Skills() {
  const trackRef = useRef(null)
  const posRef   = useRef(0)
  const rafRef   = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const oneThird = track.scrollWidth / 3

    const animate = () => {
      posRef.current += 0.4
      if (posRef.current >= oneThird) posRef.current -= oneThird
      track.style.transform = `translateX(-${posRef.current}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section className="mb-32">
      {/* overflow-hidden clips the track; mask fades both edges */}
      <div className="overflow-hidden mask-fade-both">
        <div ref={trackRef} className="flex gap-4 pb-8 w-max">
          {loopedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 h-28 bg-white/[0.02] border border-white/5 rounded-lg p-5 flex flex-col justify-between overflow-hidden relative group/card"
            >
              <div
                className="absolute -right-4 -bottom-4 w-16 h-16 blur-2xl transition-opacity opacity-10 group-hover/card:opacity-20"
                style={{ background: skill.color }}
              />
              <span
                className="material-symbols-outlined text-xl"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>
              <span className="font-label text-xs font-semibold text-white tracking-widest uppercase">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="font-label text-[9px] text-white/20 mt-4 text-right uppercase tracking-[0.3em]">
        Continuously updating tech stack // KERNEL 5.15.0-v7
      </p>
    </section>
  )
}

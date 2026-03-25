const skills = [
  { icon: 'layers', label: 'Kubernetes', glowClass: 'bg-secondary/10 group-hover/card:bg-secondary/20', iconClass: 'text-secondary' },
  { icon: 'database', label: 'PostgreSQL', glowClass: 'bg-tertiary/10 group-hover/card:bg-tertiary/20', iconClass: 'text-tertiary' },
  { icon: 'cloud', label: 'AWS Cloud', glowClass: 'bg-secondary-container/10 group-hover/card:bg-secondary-container/20', iconClass: 'text-secondary-container' },
  { icon: 'data_object', label: 'TypeScript', glowClass: 'bg-tertiary-fixed-dim/10 group-hover/card:bg-tertiary-fixed-dim/20', iconClass: 'text-tertiary-fixed-dim' },
  { icon: 'flutter', label: 'React Native', glowClass: 'bg-error/10 group-hover/card:bg-error/20', iconClass: 'text-error' },
  { icon: 'memory', label: 'Golang', glowClass: 'bg-secondary-fixed-dim/10 group-hover/card:bg-secondary-fixed-dim/20', iconClass: 'text-secondary-fixed-dim' },
]

export default function Skills() {
  return (
    <section className="mb-32">
      <div className="relative group">
        <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-8 mask-fade-right">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="flex-shrink-0 w-48 h-28 bg-white/[0.02] border border-white/5 rounded-lg p-5 flex flex-col justify-between overflow-hidden relative group/card"
            >
              <div
                className={`absolute -right-4 -bottom-4 w-16 h-16 blur-2xl transition-all ${skill.glowClass}`}
              ></div>
              <span className={`material-symbols-outlined text-xl ${skill.iconClass}`}>
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

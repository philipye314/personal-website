import { projects } from '../data/projects'

function Tag({ label, color }) {
  if (!color) {
    return (
      <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 font-label text-[10px] text-white/60 tracking-widest uppercase">
        {label}
      </span>
    )
  }
  return (
    <span
      className="px-4 py-1.5 rounded-full font-label text-[10px] tracking-widest uppercase"
      style={{
        border: `1px solid ${color}33`,
        background: `${color}1a`,
        color,
      }}
    >
      {label}
    </span>
  )
}

export default function Projects({ onSelect }) {
  return (
    <section className="mb-40">
      <div>
        {projects.map((project, idx) => (
          <div key={project.title}>
            <div
              onClick={() => onSelect?.(project.slug)}
              className="grid grid-cols-12 gap-8 items-start group cursor-pointer py-14"
            >
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-white font-bold text-2xl mb-1">{project.title}</h3>
                <p
                  className="font-label text-[10px] tracking-[0.1em] uppercase"
                  style={{ color: project.subtitleColor }}
                >
                  {project.subtitle}
                </p>
              </div>
              <div className="col-span-12 md:col-span-8 transition-colors">
                <p className="text-on-surface/60 leading-relaxed text-lg font-light mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Tag key={tag.label} {...tag} />
                  ))}
                </div>
                <span
                  className="font-label text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                  style={{ color: project.subtitleColor }}
                >
                  VIEW PROJECT
                  <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </div>
            {idx < projects.length - 1 && (
              <div className="h-px bg-white/[0.08]" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

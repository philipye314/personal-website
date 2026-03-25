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

export default function Projects() {
  return (
    <section className="mb-40">
      <div className="space-y-24">
        {projects.map((project) => (
          <div key={project.title} className="grid grid-cols-12 gap-8 items-start group">
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-white font-bold text-2xl mb-1">{project.title}</h3>
              <p
                className="font-label text-[10px] tracking-[0.1em] uppercase"
                style={{ color: project.subtitleColor }}
              >
                {project.subtitle}
              </p>
            </div>
            <div
              className={`col-span-12 md:col-span-8 group-hover:border-tertiary-container/50 transition-colors ${
                project.borderTop ? 'border-t border-white/10 pt-8' : ''
              }`}
            >
              <p className="text-on-surface/60 leading-relaxed text-lg font-light mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag.label} {...tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

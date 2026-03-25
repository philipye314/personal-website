import { positions } from '../data/work'

export default function WorkExperience({ onSelect }) {
  return (
    <section className="mb-40">
      <div className="space-y-24">
        {positions.map((pos) => (
          <div
            key={pos.company}
            onClick={() => onSelect?.(pos.slug)}
            className="grid grid-cols-12 gap-8 items-start group cursor-pointer"
          >
            <div className="col-span-12 md:col-span-4">
              <span
                className="font-label text-[10px] mb-2 block tracking-widest"
                style={{ color: pos.periodColor }}
              >
                {pos.period}
              </span>
              <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-white/90 transition-colors">{pos.title}</h3>
              <p className="font-label text-[10px] tracking-[0.1em]" style={{ color: pos.periodColor }}>{pos.company}</p>
            </div>
            <div
              className={`col-span-12 md:col-span-8 border-l border-white/10 pl-12 ${pos.hoverBorderColor} transition-colors`}
            >
              <p className="text-on-surface/60 leading-relaxed text-lg font-light mb-5">
                {pos.description}
              </p>
              <span
                className="font-label text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                style={{ color: pos.periodColor }}
              >
                VIEW CASE STUDY
                <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

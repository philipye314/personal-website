const positions = [
  {
    period: '2022 — PRESENT',
    periodColor: '#76B900',
    title: 'Lead System Architect',
    company: 'NVIDIA',
    hoverBorderColor: 'group-hover:border-[#76B900]/50',
    description:
      'Spearheading the core infrastructure redesign for next-gen AI processing clusters. Implementing zero-latency data pipelines and managing a fleet of 500+ microservices using Kubernetes and Go.',
  },
  {
    period: '2020 — 2022',
    periodColor: '#2D31FA',
    title: 'Senior UI Engineer',
    company: 'APPLIED INTUITION',
    hoverBorderColor: 'group-hover:border-[#2D31FA]/50',
    description:
      'Developed a proprietary design system used by 200+ developers. Focused on high-end glassmorphism components, dark-mode optimization, and complex state management in React.',
  },
]

export default function WorkExperience() {
  return (
    <section className="mb-40">
      <div className="space-y-24">
        {positions.map((pos) => (
          <div key={pos.company} className="grid grid-cols-12 gap-8 items-start group">
            <div className="col-span-12 md:col-span-4">
              <span
                className="font-label text-[10px] mb-2 block tracking-widest"
                style={{ color: pos.periodColor }}
              >
                {pos.period}
              </span>
              <h3 className="text-white font-bold text-2xl mb-1">{pos.title}</h3>
              <p className="font-label text-[10px] text-white/40 tracking-[0.1em]">{pos.company}</p>
            </div>
            <div
              className={`col-span-12 md:col-span-8 border-l border-white/10 pl-12 ${pos.hoverBorderColor} transition-colors`}
            >
              <p className="text-on-surface/60 leading-relaxed text-lg font-light mb-4">
                {pos.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

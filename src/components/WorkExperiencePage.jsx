import { useEffect } from 'react'
import Footer from './Footer'
import { workDetails as WORK_DATA } from '../data/work'

// ─── Radar / Tech Graphic ─────────────────────────────────────────────────────
function TechGraphic({ color }) {
  const N = 8
  const outerDots = Array.from({ length: N }, (_, i) => {
    const angle = (i / N) * Math.PI * 2 - Math.PI / 2
    return { x: 200 + Math.cos(angle) * 155, y: 200 + Math.sin(angle) * 155, i }
  })

  const innerAngles = [0.4, 1.15, 2.3, 3.75, 5.1]
  const innerDots = innerAngles.map((a) => ({
    x: 200 + Math.cos(a) * 92,
    y: 200 + Math.sin(a) * 92,
  }))

  const ticks = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2
    const isMajor = i % 6 === 0
    return {
      x1: 200 + Math.cos(angle) * (isMajor ? 150 : 155),
      y1: 200 + Math.sin(angle) * (isMajor ? 150 : 155),
      x2: 200 + Math.cos(angle) * 163,
      y2: 200 + Math.sin(angle) * 163,
      major: isMajor,
    }
  })

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full select-none">
      {Array.from({ length: 9 }, (_, row) =>
        Array.from({ length: 9 }, (_, col) => (
          <circle key={`g-${row}-${col}`} cx={col * 50} cy={row * 50} r="1.2" fill="white" opacity="0.06" />
        ))
      ).flat()}
      <circle cx="200" cy="200" r="160" stroke={color} strokeWidth="0.8" fill="none" opacity="0.12" />
      <circle cx="200" cy="200" r="120" stroke={color} strokeWidth="0.8" fill="none" opacity="0.18" />
      <circle cx="200" cy="200" r="80"  stroke={color} strokeWidth="1"   fill="none" opacity="0.28" />
      <circle cx="200" cy="200" r="40"  stroke={color} strokeWidth="1.5" fill="none" opacity="0.42" />
      <line x1="200" y1="20"  x2="200" y2="380" stroke="white" strokeWidth="0.4" opacity="0.06" />
      <line x1="20"  y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.4" opacity="0.06" />
      <line x1="87"  y1="87"  x2="313" y2="313" stroke="white" strokeWidth="0.3" opacity="0.04" />
      <line x1="313" y1="87"  x2="87"  y2="313" stroke="white" strokeWidth="0.3" opacity="0.04" />
      {outerDots.filter((_, i) => i % 2 === 0).map((d) => (
        <line key={`rl-${d.i}`} x1="200" y1="200" x2={d.x} y2={d.y}
              stroke={color} strokeWidth="0.5" opacity="0.1" />
      ))}
      {ticks.map((t, i) => (
        <line key={`tk-${i}`} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke={color} strokeWidth={t.major ? 1.5 : 0.75}
              opacity={t.major ? 0.38 : 0.14} />
      ))}
      {outerDots.map((d) => (
        <circle key={`od-${d.i}`}
          cx={d.x} cy={d.y}
          r={d.i % 2 === 0 ? 3 : 2}
          fill={color}
          opacity={d.i % 2 === 0 ? 0.85 : 0.35} />
      ))}
      {innerDots.map((d, i) => (
        <circle key={`id-${i}`} cx={d.x} cy={d.y} r="1.8" fill={color} opacity="0.55" />
      ))}
      <circle cx="200" cy="200" r="10" fill={color} opacity="0.1" />
      <circle cx="200" cy="200" r="4"  fill={color} opacity="0.9" />
      <g style={{ transformOrigin: '200px 200px', animation: 'radar-sweep 7s linear infinite' }}>
        <line x1="200" y1="200" x2="200" y2="44"
              stroke={color} strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
        <path d="M 200 200 L 200 44 A 156 156 0 0 1 238 50 Z"
              fill={color} opacity="0.06" />
      </g>
      <path d="M 18 18 L 18 46 M 18 18 L 46 18"
            stroke={color} strokeWidth="2" fill="none" opacity="0.45" strokeLinecap="round" />
      <path d="M 382 18 L 382 46 M 382 18 L 354 18"
            stroke={color} strokeWidth="2" fill="none" opacity="0.45" strokeLinecap="round" />
      <path d="M 18 382 L 18 354 M 18 382 L 46 382"
            stroke={color} strokeWidth="2" fill="none" opacity="0.45" strokeLinecap="round" />
      <path d="M 382 382 L 382 354 M 382 382 L 354 382"
            stroke={color} strokeWidth="2" fill="none" opacity="0.45" strokeLinecap="round" />
    </svg>
  )
}

// ─── Background blob accents ──────────────────────────────────────────────────
function BlobAccents({ color }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[18%] right-[8%] w-72 h-72 rounded-full"
           style={{ background: `radial-gradient(circle, ${color}14 0%, transparent 70%)`, filter: 'blur(48px)' }} />
      <div className="absolute top-[55%] right-[22%] w-48 h-48 rounded-full"
           style={{ background: `radial-gradient(circle, ${color}0c 0%, transparent 70%)`, filter: 'blur(32px)' }} />
      <div className="absolute top-[6%] left-[38%] w-56 h-40 rounded-full"
           style={{ background: 'radial-gradient(ellipse, rgba(174,198,255,0.05) 0%, transparent 70%)', filter: 'blur(36px)' }} />
    </div>
  )
}

// ─── Metrics bento grid ───────────────────────────────────────────────────────
function MetricsBento({ metrics, color }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.07] mb-28">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="bg-[#111111] p-10 flex flex-col items-center justify-center text-center hover:bg-white/[0.015] transition-colors duration-300 cursor-default"
        >
          <span
            className="font-headline font-bold leading-none mb-3 tabular-nums"
            style={{ color, fontSize: '3.2rem' }}
          >
            {m.value}
          </span>
          <span className="font-label text-[9px] uppercase tracking-[0.22em] text-white/35">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  )
}

// ─── Terminal status card ─────────────────────────────────────────────────────
function TerminalCard({ items, color }) {
  return (
    <div className="mt-3 bg-black/50 border border-white/[0.07] rounded-lg overflow-hidden">
      <div className="flex items-center gap-2.5 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: color, opacity: 0.5 }} />
        </div>
        <span className="font-label text-[9px] uppercase tracking-[0.2em] text-white/25 ml-1">
          STATUS_OUTPUT
        </span>
        <div className="ml-auto font-label text-[9px] text-white/15">◉ LIVE</div>
      </div>
      <div className="px-5 py-1 divide-y divide-white/[0.04]">
        {items.map((item) => (
          <div key={item.key} className="flex justify-between items-center py-3">
            <span className="font-label text-[9px] uppercase tracking-[0.15em] text-white/28">
              {item.key}
            </span>
            <span className="font-label text-[10px] tracking-wider" style={{ color }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Decorative activity graph (for sections without statusItems) ─────────────
function ActivityGraph({ color, variant = 0 }) {
  const barSets = [
    [0.35, 0.55, 0.42, 0.72, 0.58, 0.88, 0.65, 0.80, 0.50, 0.92, 0.68, 0.76, 0.55, 0.90, 0.62],
    [0.60, 0.40, 0.75, 0.50, 0.85, 0.45, 0.70, 0.55, 0.90, 0.48, 0.78, 0.60, 0.88, 0.52, 0.82],
  ]
  const bars = barSets[variant % barSets.length]

  return (
    <div className="px-7 py-4 border-t border-white/[0.05] bg-black/20">
      <svg viewBox="0 0 300 36" className="w-full" style={{ opacity: 0.18 }}>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 20 + 2}
            y={36 - h * 30}
            width="13"
            height={h * 30}
            fill={color}
            rx="2"
            opacity={0.25 + h * 0.55}
          />
        ))}
        <polyline
          points={bars.map((h, i) => `${i * 20 + 8.5},${36 - h * 30}`).join(' ')}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

// ─── Single section block ─────────────────────────────────────────────────────
function SectionBlock({ section, color, idx }) {
  return (
    <div className="grid grid-cols-12 gap-x-14 items-start">
      {/* Left — sticky label */}
      <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 h-fit mb-8 lg:mb-0">
        <span
          className="font-headline font-bold leading-none tabular-nums block mb-4"
          style={{ color, opacity: 0.18, fontSize: '4.5rem' }}
        >
          {section.number}
        </span>
        <span
          className="font-label text-[9px] uppercase tracking-[0.22em] block mb-3"
          style={{ color, opacity: 0.7 }}
        >
          {section.label}
        </span>
        <h2 className="font-headline font-bold text-xl tracking-tight text-white mb-3 leading-snug">
          {section.title}
        </h2>
        <p className="text-on-surface/45 text-sm leading-relaxed">
          {section.summary}
        </p>
      </div>

      {/* Right — content card */}
      <div className="col-span-12 lg:col-span-8">
        <div className="border border-white/[0.07] rounded-lg overflow-hidden">
          {/* Card header */}
          <div
            className="px-6 py-3.5 border-b border-white/[0.06] flex items-center gap-3"
            style={{ background: `${color}09` }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.6 }} />
            <span className="font-label text-[9px] uppercase tracking-[0.2em] text-white/30">
              {section.label}
            </span>
            <span className="ml-auto font-label text-[9px] text-white/15 tabular-nums">
              /{String(idx + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Bullet list */}
          <div className="p-7 bg-white/[0.01]">
            <ul className="space-y-4">
              {section.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 mt-[0.58em] w-1.5 h-1.5 rounded-full"
                    style={{ background: color, opacity: 0.6 }}
                  />
                  <span className="text-on-surface/65 text-[0.94rem] leading-[1.78]">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer: activity graph for sections without statusItems */}
          {!section.statusItems && <ActivityGraph color={color} variant={idx} />}
        </div>

        {/* Terminal card for sections with statusItems */}
        {section.statusItems && <TerminalCard items={section.statusItems} color={color} />}
      </div>
    </div>
  )
}

// ─── Main page component ──────────────────────────────────────────────────────
export default function WorkExperiencePage({ slug, onBack }) {
  const data = WORK_DATA[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!data) return null

  const { period, color, title, company, location, metrics, techStack, sections } = data

  return (
    <div className="bg-[#111111] text-on-surface font-body selection:bg-secondary selection:text-on-secondary page-enter">

      {/* ── Navbar ───────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2.5 font-label text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors group"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1 duration-200">←</span>
            Back to Portfolio
          </button>
          <div className="font-label font-bold text-xl tracking-tighter text-white">
            phils website
          </div>
          <span className="font-label text-[10px] uppercase tracking-[0.18em]" style={{ color, opacity: 0.6 }}>
            {company}
          </span>
        </div>
        <div className="bg-white/5 h-[1px]" />
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <BlobAccents color={color} />

        {/* Large company watermark */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
          <span
            className="font-headline font-bold leading-none tracking-tighter pl-6"
            style={{ fontSize: '20vw', color: 'white', opacity: 0.018 }}
          >
            {company.split(' ')[0]}
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-40 pb-16 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-center min-h-[440px]">

            {/* Left: role text */}
            <div className="col-span-12 md:col-span-7">
              <span
                className="font-label text-[10px] uppercase tracking-[0.28em] mb-5 block"
                style={{ color }}
              >
                {period}
              </span>

              <h1
                className="font-headline font-bold leading-[1.04] tracking-[-0.03em] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/35"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
              >
                {title}
              </h1>

              <p className="font-label text-[11px] text-white/35 tracking-[0.16em] mb-10 uppercase">
                {company} // {location}
              </p>

              {/* Mini tech-stack preview */}
              <div className="flex flex-wrap gap-2 pt-8 border-t border-white/[0.07]">
                {techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="font-label text-[9px] uppercase tracking-widest px-2.5 py-1.5 border border-white/[0.1] rounded text-white/40"
                  >
                    {tech}
                  </span>
                ))}
                {techStack.length > 5 && (
                  <span className="font-label text-[9px] uppercase tracking-widest px-2.5 py-1.5 text-white/20">
                    +{techStack.length - 5} more
                  </span>
                )}
              </div>
            </div>

            {/* Right: radar graphic */}
            <div className="col-span-12 md:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[360px]" style={{ opacity: 0.78 }}>
                <TechGraphic color={color} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Metrics Bento ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8">
        <MetricsBento metrics={metrics} color={color} />
      </div>

      {/* ── Body content ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 pb-32">

        {/* Section separator */}
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px flex-1 bg-white/[0.07]" />
          <span className="font-label text-[9px] uppercase tracking-[0.3em] text-white/20">Case Study</span>
          <div className="h-px flex-1 bg-white/[0.07]" />
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {sections.map((section, idx) => (
            <div key={idx}>
              <SectionBlock section={section} color={color} idx={idx} />

              {idx < sections.length - 1 && (
                <div className="flex items-center gap-3 mt-20">
                  <div className="h-px flex-1 bg-white/[0.05]" />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.25 }} />
                  <div className="h-px flex-1 bg-white/[0.05]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Full tech stack */}
        <div className="mt-24 pt-12 border-t border-white/[0.06]">
          <span className="font-label text-[9px] uppercase tracking-[0.28em] text-white/[0.22] block mb-5">
            Full Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-label text-[9px] uppercase tracking-widest px-3 py-1.5 border border-white/[0.1] rounded text-white/45 hover:text-white/70 hover:border-white/20 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

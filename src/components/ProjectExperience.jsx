import { useEffect } from 'react'
import Footer from './Footer'
import { projectDetails as PROJECT_DATA } from '../data/projects'

// ─── Dashboard visual (replaces the hero image from ref.html) ─────────────────
function ProjectVisual({ color }) {
  const pts = [
    [30, 88], [80, 62], [130, 70], [180, 40],
    [230, 52], [280, 24], [330, 36], [380, 18],
    [430, 28], [480, 12],
  ]
  const linePoints = pts.map((p) => p.join(',')).join(' ')
  const areaPath = `M${pts[0].join(',')} ${pts.slice(1).map((p) => `L${p.join(',')}`).join(' ')} L480,120 L30,120 Z`

  return (
    <div
      className="w-full aspect-video border border-white/[0.06] mb-10 relative overflow-hidden bg-[#0d0d0d]"
      style={{ opacity: 0.88 }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05] bg-white/[0.01]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: color, opacity: 0.4 }} />
        </div>
        <div className="flex gap-6">
          {['Overview', 'Metrics', 'Logs'].map((t) => (
            <span key={t} className="font-label text-[8px] uppercase tracking-widest text-white/20">{t}</span>
          ))}
        </div>
        <div className="h-2 w-16 bg-white/[0.05] rounded" />
      </div>

      {/* Body */}
      <div className="p-5 flex gap-4" style={{ height: 'calc(100% - 41px)' }}>
        {/* Stat cards column */}
        <div className="flex flex-col gap-2 w-28 flex-shrink-0">
          {[['UPTIME', '99.9%'], ['REQ/S', '1.2K'], ['LATENCY', '<1ms']].map(([label, value]) => (
            <div key={label} className="bg-white/[0.02] border border-white/[0.05] px-3 py-2.5">
              <div className="font-label text-[7px] uppercase tracking-widest text-white/22 mb-1">{label}</div>
              <div className="font-label text-[13px]" style={{ color, opacity: 0.75 }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="flex-1 relative min-h-0">
          <svg viewBox="0 0 510 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {[30, 60, 90].map((y) => (
              <line key={y} x1="30" y1={y} x2="480" y2={y}
                    stroke="white" strokeWidth="0.5" opacity="0.04" />
            ))}
            <path d={areaPath} fill={color} opacity="0.05" />
            <polyline
              points={linePoints}
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              opacity="0.55"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {pts.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill={color} opacity="0.7" />
            ))}
          </svg>
          <div
            className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
            style={{ background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`, filter: 'blur(20px)' }}
          />
        </div>
      </div>
    </div>
  )
}

// ─── Section left sidebar ─────────────────────────────────────────────────────
function SectionLeft({ section, color }) {
  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-label text-4xl font-light" style={{ color, opacity: 0.3 }}>
          {section.number}
        </span>
        <h2 className="font-headline text-2xl font-bold tracking-tight leading-snug">
          {section.title}
        </h2>
      </div>
      <p className="text-on-surface/60 leading-relaxed mb-8">{section.summary}</p>
      {section.techTags && (
        <div className="flex flex-wrap gap-2">
          {section.techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 font-label text-[9px] uppercase tracking-wider text-on-surface/70 rounded-full"
              style={{ background: `${color}18`, border: `1px solid ${color}33` }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Glass card (Section 01 right) ───────────────────────────────────────────
function GlassCard({ content, color }) {
  return (
    <div
      className="p-8 md:p-12 rounded-lg"
      style={{
        background: 'rgba(42, 42, 42, 0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(68, 71, 72, 0.18)',
        boxShadow: `0 0 40px -10px ${color}33`,
      }}
    >
      <ProjectVisual color={color} />
      <h3 className="font-headline text-xl font-semibold mb-5 text-white">{content.heading}</h3>
      <p className="text-on-surface/70 leading-relaxed mb-6">{content.body}</p>
      <ul className="space-y-4">
        {content.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-4 font-label text-sm text-on-surface/50">
            <span style={{ color }}>•</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Dual cards (Section 02 right) ───────────────────────────────────────────
function DualCards({ content, color }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {content.cards.map((card, i) => (
        <div
          key={i}
          className="bg-[#1a1a1a] p-8 border-l-2 transition-colors duration-200"
          style={{
            borderLeftColor: card.accent ? `${card.accent}40` : 'rgba(255,255,255,0.1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderLeftColor = card.accent || 'rgba(255,255,255,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderLeftColor = card.accent ? `${card.accent}40` : 'rgba(255,255,255,0.1)'
          }}
        >
          <div
            className="font-label text-[10px] tracking-widest uppercase mb-4"
            style={{ color: card.accent || undefined, opacity: card.accent ? 1 : 0.4 }}
          >
            {card.label}
          </div>
          <h4 className="font-headline text-lg font-bold mb-4">{card.title}</h4>
          <p className="text-on-surface/60 text-sm leading-relaxed">{card.body}</p>
        </div>
      ))}
    </div>
  )
}

// ─── Icon list (Section 03 right) ────────────────────────────────────────────
function IconList({ content, color }) {
  return (
    <div className="bg-[#1a1a1a] p-10 md:p-12 relative overflow-hidden rounded-lg">
      {/* Decorative icon watermark */}
      <div className="absolute right-6 top-6 pointer-events-none select-none" style={{ color, opacity: 0.05 }}>
        <span className="material-symbols-outlined" style={{ fontSize: '7rem' }}>terminal</span>
      </div>

      <h3 className="font-headline text-2xl font-bold mb-10">{content.heading}</h3>
      <div className="space-y-10">
        {content.items.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-7">
            <div
              className="w-12 h-12 flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}14` }}
            >
              <span className="material-symbols-outlined text-sm" style={{ color }}>
                {item.icon}
              </span>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-2">{item.title}</h4>
              <p className="text-on-surface/60 text-sm leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Right content dispatcher ─────────────────────────────────────────────────
function SectionRight({ section, color }) {
  const { content } = section
  return (
    <div className="col-span-12 lg:col-span-8">
      {content.type === 'glass-card' && <GlassCard content={content} color={color} />}
      {content.type === 'dual-cards' && <DualCards content={content} color={color} />}
      {content.type === 'icon-list'  && <IconList  content={content} color={color} />}
    </div>
  )
}

// ─── Main page component ──────────────────────────────────────────────────────
export default function ProjectExperience({ slug, onBack }) {
  const data = PROJECT_DATA[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!data) return null

  const { color, period, title, category, location, role, metrics, sections, github } = data

  return (
    <div className="bg-[#111111] text-on-surface font-body selection:bg-secondary selection:text-on-secondary page-enter">

      {/* ── Navbar ───────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2.5 font-label text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors group"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1 duration-200">←</span>
            Back to Portfolio
          </button>

          <div className="hidden md:flex items-center gap-10">
            {['01 About', '02 Work', '03 Projects', '04 Skills'].map((item) => (
              <button
                key={item}
                onClick={onBack}
                className="font-headline tracking-tighter uppercase text-sm font-bold text-white/40 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={onBack}
            className="px-6 py-2 font-label uppercase text-[11px] tracking-widest font-bold text-white border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Resume
          </button>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative px-8 max-w-7xl mx-auto mb-28 overflow-hidden pt-40">
        {/* Background waves */}
        <div className="absolute inset-0 top-0 -z-10 opacity-25 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,500 C150,400 350,600 500,500 C650,400 850,600 1000,500 L1000,1000 L0,1000 Z"
              fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10"
            >
              <animate attributeName="d" dur="20s" repeatCount="indefinite"
                values="M0,500 C150,400 350,600 500,500 C650,400 850,600 1000,500 L1000,1000 L0,1000 Z;
                        M0,500 C150,600 350,400 500,500 C650,600 850,400 1000,500 L1000,1000 L0,1000 Z;
                        M0,500 C150,400 350,600 500,500 C650,400 850,600 1000,500 L1000,1000 L0,1000 Z" />
            </path>
            <path d="M0,550 C150,450 350,650 500,550 C650,450 850,650 1000,550 L1000,1000 L0,1000 Z"
                  fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
          </svg>
        </div>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div
              className="font-label tracking-[0.2em] uppercase text-xs mb-6"
              style={{ color }}
            >
              {category}
            </div>

            <h1 className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[1.08] mb-8">
              {title.split(' ').map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} style={{ color }}>{word}</span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>

            <div className="flex flex-wrap gap-8 font-label text-[10px] tracking-widest uppercase text-white/40">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" style={{ color, fontSize: '1rem' }}>
                  calendar_today
                </span>
                {period}
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" style={{ color, fontSize: '1rem' }}>
                  location_on
                </span>
                {location}
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" style={{ color, fontSize: '1rem' }}>
                  terminal
                </span>
                {role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics bento ────────────────────────────────────────────────────── */}
      <section className="px-8 max-w-7xl mx-auto mb-40">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px border"
          style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[#111111] p-10 flex flex-col justify-center items-center text-center hover:bg-white/[0.015] transition-colors duration-300 cursor-default"
            >
              <span className="font-headline text-5xl font-extrabold mb-2" style={{ color }}>
                {m.value}
              </span>
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-white/40">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Content sections ─────────────────────────────────────────────────── */}
      <section className="px-8 max-w-7xl mx-auto">
        <div className="space-y-24">
          {sections.map((section, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-12 lg:gap-24">
              <SectionLeft  section={section} color={color} />
              <SectionRight section={section} color={color} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="mt-24 px-8 max-w-7xl mx-auto text-center pb-4">
        <div className="h-px w-12 mx-auto mb-6" style={{ background: color }} />
        <h2 className="font-headline text-xl font-bold mb-7 tracking-tight">
          Exploring My Work?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-3">
          <button
            onClick={onBack}
            className="px-7 py-2.5 bg-white text-black font-label text-[9px] tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-all"
          >
            Back to Portfolio
          </button>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-2.5 border border-white/10 font-label text-[9px] tracking-[0.2em] uppercase font-bold hover:border-white/30 transition-all"
            >
              View on GitHub
            </a>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

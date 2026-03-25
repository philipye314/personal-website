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
      {/* Background dot grid */}
      {Array.from({ length: 9 }, (_, row) =>
        Array.from({ length: 9 }, (_, col) => (
          <circle key={`g-${row}-${col}`} cx={col * 50} cy={row * 50} r="1.2" fill="white" opacity="0.06" />
        ))
      ).flat()}

      {/* Concentric rings */}
      <circle cx="200" cy="200" r="160" stroke={color} strokeWidth="0.8" fill="none" opacity="0.12" />
      <circle cx="200" cy="200" r="120" stroke={color} strokeWidth="0.8" fill="none" opacity="0.18" />
      <circle cx="200" cy="200" r="80"  stroke={color} strokeWidth="1"   fill="none" opacity="0.28" />
      <circle cx="200" cy="200" r="40"  stroke={color} strokeWidth="1.5" fill="none" opacity="0.42" />

      {/* Crosshairs */}
      <line x1="200" y1="20"  x2="200" y2="380" stroke="white" strokeWidth="0.4" opacity="0.06" />
      <line x1="20"  y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.4" opacity="0.06" />
      <line x1="87"  y1="87"  x2="313" y2="313" stroke="white" strokeWidth="0.3" opacity="0.04" />
      <line x1="313" y1="87"  x2="87"  y2="313" stroke="white" strokeWidth="0.3" opacity="0.04" />

      {/* Radial spokes to alternate outer dots */}
      {outerDots.filter((_, i) => i % 2 === 0).map((d) => (
        <line key={`rl-${d.i}`} x1="200" y1="200" x2={d.x} y2={d.y}
              stroke={color} strokeWidth="0.5" opacity="0.1" />
      ))}

      {/* Tick marks */}
      {ticks.map((t, i) => (
        <line key={`tk-${i}`} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke={color} strokeWidth={t.major ? 1.5 : 0.75}
              opacity={t.major ? 0.38 : 0.14} />
      ))}

      {/* Outer ring dots */}
      {outerDots.map((d) => (
        <circle key={`od-${d.i}`}
          cx={d.x} cy={d.y}
          r={d.i % 2 === 0 ? 3 : 2}
          fill={color}
          opacity={d.i % 2 === 0 ? 0.85 : 0.35} />
      ))}

      {/* Inner orbit dots */}
      {innerDots.map((d, i) => (
        <circle key={`id-${i}`} cx={d.x} cy={d.y} r="1.8" fill={color} opacity="0.55" />
      ))}

      {/* Center */}
      <circle cx="200" cy="200" r="10" fill={color} opacity="0.1" />
      <circle cx="200" cy="200" r="4"  fill={color} opacity="0.9" />

      {/* Animated scanner arm + trailing wedge */}
      <g style={{ transformOrigin: '200px 200px', animation: 'radar-sweep 7s linear infinite' }}>
        <line x1="200" y1="200" x2="200" y2="44"
              stroke={color} strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
        <path d="M 200 200 L 200 44 A 156 156 0 0 1 238 50 Z"
              fill={color} opacity="0.06" />
      </g>

      {/* Corner brackets */}
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

// ─── Divider between sections ─────────────────────────────────────────────────
function Divider({ color }) {
  return (
    <div className="flex items-center gap-3 my-12">
      <div className="h-px w-10 bg-white/20" />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, opacity: 0.55 }} />
      <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.04)' }} />
    </div>
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

// ─── Signal bar decoration ────────────────────────────────────────────────────
function SignalBars({ color }) {
  const heights = [6, 10, 14, 18, 22, 18, 14]
  return (
    <div className="flex items-end gap-1">
      {heights.map((h, i) => (
        <div key={i} className="w-1.5 rounded-sm"
             style={{ height: h, background: color, opacity: 0.1 + i * 0.065 }} />
      ))}
      <span className="font-label text-[8px] tracking-widest text-white/20 ml-2 mb-0.5 uppercase">
        Sys_Online
      </span>
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

  const { period, color, title, company, location, metrics, techStack, initiatives } = data

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
          <div className="font-['Geist_Mono'] font-bold text-xl tracking-tighter text-white">
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

        {/* Large company watermark behind hero text */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
          <span
            className="font-headline font-bold leading-none tracking-tighter pl-6"
            style={{ fontSize: '20vw', color: 'white', opacity: 0.018 }}
          >
            {company.split(' ')[0]}
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-40 pb-20 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-center min-h-[540px]">

            {/* Left: role text + metrics */}
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

              <p className="font-label text-[11px] text-white/35 tracking-[0.16em] mb-12 uppercase">
                {company} // {location}
              </p>

              {/* Hero metrics row */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/[0.07]">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div
                      className="font-headline font-bold text-[1.55rem] leading-none mb-1.5"
                      style={{ color }}
                    >
                      {m.value}
                    </div>
                    <div className="font-label text-[8.5px] uppercase tracking-widest text-white/30 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
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

      {/* ── Body content ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 pb-32">

        {/* Separator */}
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px flex-1 bg-white/[0.07]" />
          <span className="font-label text-[9px] uppercase tracking-[0.3em] text-white/20">Case Study</span>
          <div className="h-px flex-1 bg-white/[0.07]" />
        </div>

        <div className="grid grid-cols-12 gap-16 items-start">

          {/* ── Initiatives (left) ──────────────────────────────────────────── */}
          <div className="col-span-12 md:col-span-8">
            {initiatives.map((init, idx) => (
              <div key={idx}>
                <div className="relative pl-6">
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-px"
                    style={{
                      background: `linear-gradient(to bottom, ${color}70, ${color}00)`,
                    }}
                  />
                  {/* Dot on the bar */}
                  <div
                    className="absolute left-[-3px] top-[0.35rem] w-1.5 h-1.5 rounded-full"
                    style={{ background: color, opacity: 0.8 }}
                  />

                  {/* Watermark section number */}
                  <span
                    className="absolute -right-2 top-0 font-headline font-bold leading-none text-white select-none pointer-events-none"
                    style={{ fontSize: '5.5rem', opacity: 0.028 }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <span
                    className="font-label text-[9px] uppercase tracking-[0.22em] block mb-4"
                    style={{ color, opacity: 0.65 }}
                  >
                    {init.label}
                  </span>

                  <p className="text-on-surface/55 leading-[1.88] text-[1.05rem] font-light">
                    {init.text}
                  </p>
                </div>

                {idx < initiatives.length - 1 && <Divider color={color} />}
              </div>
            ))}
          </div>

          {/* ── Sticky sidebar (right) ──────────────────────────────────────── */}
          <div className="col-span-12 md:col-span-4">
            <div className="sticky top-28 space-y-7">

              {/* Key impact metric cards */}
              <div>
                <span className="font-label text-[9px] uppercase tracking-[0.28em] text-white/[0.22] block mb-4">
                  Key Impact
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4 relative overflow-hidden group/card"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                        style={{ background: `radial-gradient(circle at 60% 60%, ${color}18 0%, transparent 70%)` }}
                      />
                      <div
                        className="font-headline font-bold text-xl mb-1 leading-none"
                        style={{ color }}
                      >
                        {m.value}
                      </div>
                      <div className="font-label text-[8px] uppercase tracking-widest text-white/[0.28] leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack pills */}
              <div>
                <span className="font-label text-[9px] uppercase tracking-[0.28em] text-white/[0.22] block mb-4">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-label text-[9px] uppercase tracking-widest px-2.5 py-1.5 border border-white/[0.1] rounded text-white/45 hover:text-white/70 hover:border-white/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tenure card */}
              <div className="border border-white/[0.06] rounded-lg p-4 bg-white/[0.015]">
                <div className="font-label text-[8px] uppercase tracking-[0.28em] text-white/20 mb-2">
                  Duration
                </div>
                <div
                  className="font-label text-[12px] tracking-wider mb-1"
                  style={{ color }}
                >
                  {period}
                </div>
                <div className="font-label text-[9.5px] text-white/28 tracking-wider">
                  {location}
                </div>
              </div>

              {/* Signal bars */}
              <SignalBars color={color} />

              {/* Small decorative sparkline */}
              <div className="relative h-14">
                <svg viewBox="0 0 200 56" className="w-full" style={{ opacity: 0.22 }}>
                  {Array.from({ length: 20 }, (_, i) => (
                    <circle key={i} cx={i * 10.5 + 5} cy="42" r="1"
                            fill={color} opacity={0.2 + (i / 20) * 0.6} />
                  ))}
                  <polyline
                    points="5,50 22,44 38,38 55,41 72,30 89,23 105,26 122,16 138,9 155,12 172,8 189,11"
                    fill="none" stroke={color} strokeWidth="1.5" opacity="0.55"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

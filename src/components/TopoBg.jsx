import { useMemo, useEffect, useRef } from 'react'

const VW = 1600, VH = 900
const GW = 160, GH = 100
const SX = 3.5, SY = SX * GH / GW

// ─── Noise ───────────────────────────────────────────────────────────────────
function hash(ix, iy) {
  let h = (Math.imul(ix, 374761393) + Math.imul(iy, 668265263)) | 0
  h = h ^ (h >>> 13); h = (Math.imul(h, 1664525) + 1013904223) | 0; h = h ^ (h >>> 16)
  return (h >>> 0) / 4294967296
}
function smooth(t) { return t * t * (3 - 2 * t) }
function vnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y)
  const fx = smooth(x - ix), fy = smooth(y - iy)
  const a = hash(ix, iy), b = hash(ix+1, iy), c = hash(ix, iy+1), d = hash(ix+1, iy+1)
  return a*(1-fx)*(1-fy) + b*fx*(1-fy) + c*(1-fx)*fy + d*fx*fy
}
function fbm(x, y) {
  let v = 0, amp = 0.5, freq = 1
  for (let i = 0; i < 6; i++) { v += amp * vnoise(x*freq, y*freq); amp *= 0.5; freq *= 2.03 }
  return v
}
function terrain(x, y) {
  const wx = fbm(x, y), wy = fbm(x + 5.2, y + 1.3)
  return fbm(x + wx, y + wy)
}

// ─── Heightmap ───────────────────────────────────────────────────────────────
function buildHeightmap() {
  const grid = new Float32Array(GW * GH)
  for (let j = 0; j < GH; j++)
    for (let i = 0; i < GW; i++)
      grid[j * GW + i] = terrain((i / (GW-1)) * SX, (j / (GH-1)) * SY)
  let mn = Infinity, mx = -Infinity
  for (const v of grid) { if (v < mn) mn = v; if (v > mx) mx = v }
  const r = mx - mn
  for (let i = 0; i < grid.length; i++) grid[i] = (grid[i] - mn) / r
  return grid
}

// ─── Marching squares — returns segment pairs ─────────────────────────────────
function getContourSegments(grid, threshold) {
  const scx = VW / (GW - 1), scy = VH / (GH - 1)
  const segs = []
  for (let j = 0; j < GH - 1; j++) {
    for (let i = 0; i < GW - 1; i++) {
      const tl = grid[j*GW+i], tr = grid[j*GW+i+1]
      const bl = grid[(j+1)*GW+i], br = grid[(j+1)*GW+i+1]
      const ATL = tl >= threshold, ATR = tr >= threshold
      const ABL = bl >= threshold, ABR = br >= threshold
      const cT = ATL !== ATR, cR = ATR !== ABR, cB = ABL !== ABR, cL = ATL !== ABL
      if (!cT && !cR && !cB && !cL) continue
      const lp = (a, b) => (threshold - a) / (b - a)
      const ptT = cT ? [(i + lp(tl,tr)) * scx, j * scy]           : null
      const ptR = cR ? [(i+1) * scx,            (j + lp(tr,br)) * scy] : null
      const ptB = cB ? [(i + lp(bl,br)) * scx,  (j+1) * scy]          : null
      const ptL = cL ? [i * scx,                (j + lp(tl,bl)) * scy] : null
      const pts = [ptT, ptR, ptB, ptL].filter(Boolean)
      if (pts.length === 2) {
        segs.push([pts[0], pts[1]])
      } else if (pts.length === 4) {
        const ctr = (tl + tr + bl + br) / 4
        if (ctr >= threshold) {
          if (ptT && ptL) segs.push([ptT, ptL])
          if (ptR && ptB) segs.push([ptR, ptB])
        } else {
          if (ptT && ptR) segs.push([ptT, ptR])
          if (ptB && ptL) segs.push([ptB, ptL])
        }
      }
    }
  }
  return segs
}

// ─── Segment → path string (for background rendering) ────────────────────────
function segmentsToPathString(segs) {
  return segs
    .map(([p1, p2]) => `M${p1[0].toFixed(1)},${p1[1].toFixed(1)}L${p2[0].toFixed(1)},${p2[1].toFixed(1)}`)
    .join('')
}

// ─── Chain segments into polylines; filter for closed loops ──────────────────
// Adjacent cells share edge endpoints computed by the same formula, so they
// are exactly equal floats — safe to use as Map keys.
function extractClosedLoops(segs, minPoints = 28) {
  if (segs.length === 0) return []
  const key = ([x, y]) => `${x},${y}`
  const adj = new Map()
  const addEdge = (p1, p2, si) => {
    const k = key(p1)
    if (!adj.has(k)) adj.set(k, [])
    adj.get(k).push({ pt: p2, si })
  }
  segs.forEach(([p1, p2], si) => { addEdge(p1, p2, si); addEdge(p2, p1, si) })

  const used = new Uint8Array(segs.length)
  const loops = []

  for (let start = 0; start < segs.length; start++) {
    if (used[start]) continue
    used[start] = 1
    const [p0, p1] = segs[start]
    const chain = [p0, p1]

    while (true) {
      const last = chain[chain.length - 1]
      const neighbors = adj.get(key(last)) || []
      const next = neighbors.find(n => !used[n.si])
      if (!next) break
      used[next.si] = 1
      chain.push(next.pt)
    }

    // Closed = last point equals (or is very near) first point
    const [x0, y0] = chain[0], [xn, yn] = chain[chain.length - 1]
    if (Math.hypot(xn - x0, yn - y0) < 2 && chain.length >= minPoints) {
      loops.push(chain)
    }
  }
  return loops
}

// ─── Color helpers ────────────────────────────────────────────────────────────
const PALETTE = [
  '#00e5ff', // vivid cyan
  '#bf5fff', // vivid violet
  '#00ffaa', // vivid mint
  '#ff6b35', // vivid orange
  '#ff3d82', // vivid rose
  '#7bff5f', // vivid lime
  '#ffdd00', // vivid yellow
  '#4dabff', // electric blue
  '#ff5c5c', // vivid coral
  '#c8ff3e', // acid green
  '#ff88cc', // hot pink
  '#3effc8', // vivid aqua
  '#ff9500', // bright amber
  '#a259ff', // bright purple
  '#00ffff', // pure cyan
  '#ff4500', // red-orange
]

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

function lerpColor(a, b, t) {
  const [r1,g1,b1] = hexToRgb(a), [r2,g2,b2] = hexToRgb(b)
  return `rgb(${Math.round(r1+(r2-r1)*t)},${Math.round(g1+(g2-g1)*t)},${Math.round(b1+(b2-b1)*t)})`
}

// ─── Component ───────────────────────────────────────────────────────────────
const NUM_ORBS = 9

export default function TopoBg() {
  const orbElsRef  = useRef([])
  const orbStateRef = useRef(null)
  const rafRef     = useRef(null)

  const { contoursByThreshold, closedLoops, lightX, lightY } = useMemo(() => {
    const grid = buildHeightmap()

    let maxV = 0, maxI = 0
    for (let i = 0; i < grid.length; i++) if (grid[i] > maxV) { maxV = grid[i]; maxI = i }
    const lightX = (maxI % GW) / (GW-1) * VW
    const lightY = Math.floor(maxI / GW) / (GH-1) * VH

    const N = 14
    const contoursByThreshold = Array.from({ length: N }, (_, t) => {
      const threshold = 0.12 + (t / (N-1)) * 0.76
      const segs = getContourSegments(grid, threshold)
      return { d: segmentsToPathString(segs), major: t % 4 === 0, key: t }
    })

    // Collect closed loops from all threshold levels
    const allLoops = []
    for (let t = 0; t < N; t++) {
      const threshold = 0.12 + (t / (N-1)) * 0.76
      const segs = getContourSegments(grid, threshold)
      allLoops.push(...extractClosedLoops(segs))
    }

    // Keep loops in the visible area (above bottom fade), sort largest first
    const closedLoops = allLoops
      .filter(loop => {
        const avgY = loop.reduce((s, p) => s + p[1], 0) / loop.length
        return avgY > 40 && avgY < VH * 0.72
      })
      .sort((a, b) => b.length - a.length)
      .slice(0, 20)

    return { contoursByThreshold, closedLoops, lightX, lightY }
  }, [])

  useEffect(() => {
    if (closedLoops.length === 0) return

    const pickLoop  = () => closedLoops[Math.floor(Math.random() * closedLoops.length)]
    const pickColor = () => PALETTE[Math.floor(Math.random() * PALETTE.length)]

    // Reset an orb to a fresh spawning state on a random loop
    const respawn = (orb) => {
      orb.loop         = pickLoop()
      orb.t            = Math.random() * orb.loop.length
      orb.speed        = 0.02 + Math.random() * 0.13      // wide range: slow crawl → steady drift
      orb.fromColor    = pickColor()
      orb.toColor      = pickColor()
      orb.colorT       = 0
      orb.colorSpeed   = 0.003 + Math.random() * 0.003    // 3–6s per color change
      orb.phase        = 'spawning'
      orb.opacity      = 0
      orb.lifetime     = 300 + Math.random() * 420        // 5–12s alive
      orb.lifeT        = 0
      orb.fadeInFrames  = 25 + Math.random() * 55         // 0.4–1.3s fade in
      orb.fadeOutFrames = 25 + Math.random() * 55         // 0.4–1.3s fade out
    }

    // Initialise all orbs, staggered so they aren't all in the same phase at load
    orbStateRef.current = Array.from({ length: NUM_ORBS }, () => {
      const orb = {}
      respawn(orb)

      // Randomly drop each orb into a mid-life phase so the screen isn't empty at start
      const r = Math.random()
      if (r < 0.5) {
        // Already alive somewhere in the middle of its life
        orb.phase   = 'alive'
        orb.opacity = 0.88
        orb.lifeT   = Math.random() * orb.lifetime
      } else if (r < 0.75) {
        // Mid fade-in
        orb.phase   = 'spawning'
        orb.opacity = Math.random() * 0.88
      } else {
        // Mid fade-out
        orb.phase   = 'dying'
        orb.opacity = Math.random() * 0.88
        orb.lifeT   = orb.lifetime
      }

      orb.respawn = respawn
      return orb
    })

    const animate = () => {
      orbStateRef.current.forEach((orb, i) => {
        const el = orbElsRef.current[i]
        if (!el) return

        // ── Lifecycle ────────────────────────────────────────────────────────
        if (orb.phase === 'spawning') {
          orb.opacity += 0.88 / orb.fadeInFrames
          if (orb.opacity >= 0.88) { orb.opacity = 0.88; orb.phase = 'alive' }

        } else if (orb.phase === 'alive') {
          orb.lifeT++
          if (orb.lifeT >= orb.lifetime) orb.phase = 'dying'

        } else if (orb.phase === 'dying') {
          orb.opacity -= 0.88 / orb.fadeOutFrames
          if (orb.opacity <= 0) {
            orb.opacity = 0
            el.setAttribute('opacity', '0')
            orb.respawn(orb)   // immediately begin fresh cycle
            return
          }
        }

        // ── Position ─────────────────────────────────────────────────────────
        orb.t += orb.speed
        if (orb.t >= orb.loop.length) orb.t -= orb.loop.length

        const idx = Math.floor(orb.t) % orb.loop.length
        const nxt = (idx + 1) % orb.loop.length
        const f   = orb.t - Math.floor(orb.t)
        const x   = orb.loop[idx][0] + (orb.loop[nxt][0] - orb.loop[idx][0]) * f
        const y   = orb.loop[idx][1] + (orb.loop[nxt][1] - orb.loop[idx][1]) * f

        if (x < -60 || x > VW + 60 || y < -60 || y > VH + 60) {
          orb.respawn(orb); return
        }

        // ── Color ─────────────────────────────────────────────────────────────
        orb.colorT += orb.colorSpeed
        if (orb.colorT >= 1) {
          orb.fromColor  = orb.toColor
          orb.toColor    = pickColor()
          orb.colorT     = 0
          orb.colorSpeed = 0.003 + Math.random() * 0.003
        }

        el.setAttribute('cx',      x.toFixed(1))
        el.setAttribute('cy',      y.toFixed(1))
        el.setAttribute('opacity', orb.opacity.toFixed(3))
        el.setAttribute('fill',    lerpColor(orb.fromColor, orb.toColor, orb.colorT))
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [closedLoops])

  return (
    <svg
      className="absolute inset-x-0 top-0 pointer-events-none"
      width="100%" height="1000"
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYTop slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Two-layer glow: wide atmospheric halo + tight bright core */}
        <filter id="orb-glow" filterUnits="userSpaceOnUse"
          x="-200" y="-200" width={VW + 400} height={VH + 400}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="wide" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="4"  result="tight" />
          <feMerge>
            <feMergeNode in="wide" />
            <feMergeNode in="tight" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="pt-glow" gradientUnits="userSpaceOnUse" cx={lightX} cy={lightY} r={300}>
          <stop offset="0%"   stopColor="white" stopOpacity="0.26" />
          <stop offset="50%"  stopColor="white" stopOpacity="0.07" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fill-light" gradientUnits="userSpaceOnUse" cx={lightX} cy={lightY} r={VW * 0.7}>
          <stop offset="0%"   stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="btm-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="42%" stopColor="#111111" stopOpacity="0" />
          <stop offset="100%" stopColor="#111111" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="top-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#111111" stopOpacity="0.5" />
          <stop offset="18%" stopColor="#111111" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background contour lines */}
      {contoursByThreshold.map(({ d, major, key }) => (
        <path key={key} d={d} stroke="white" fill="none"
          strokeWidth={major ? 0.9 : 0.45}
          strokeOpacity={major ? 0.17 : 0.08}
          strokeLinecap="round" />
      ))}

      {/* Orbs — cx/cy/fill updated each frame via direct DOM setAttribute */}
      {Array.from({ length: NUM_ORBS }, (_, i) => (
        <circle key={i} ref={el => { orbElsRef.current[i] = el }}
          cx="0" cy="0" r="3"
          fill={PALETTE[i % PALETTE.length]}
          opacity="0.88"
          filter="url(#orb-glow)" />
      ))}

      <rect x="0" y="0" width={VW} height={VH} fill="url(#fill-light)" />
      <rect x="0" y="0" width={VW} height={VH} fill="url(#pt-glow)" />
      <rect x="0" y="0" width={VW} height={VH} fill="url(#btm-fade)" />
      <rect x="0" y="0" width={VW} height={VH} fill="url(#top-fade)" />
    </svg>
  )
}

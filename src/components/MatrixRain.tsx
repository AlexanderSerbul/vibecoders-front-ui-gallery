import { useEffect, useRef } from "react"

// Matrix-style digital rain on a <canvas>. The glyph colour eases green → red →
// green over ~60s (fully red near 30s) on a smooth cosine cycle. Animation runs
// through requestAnimationFrame; in a backgrounded tab rAF is throttled, so the
// motion/colour-cycle are best seen in a focused browser (a frame is painted on
// mount and on every resize so something is always on screen). Respects
// prefers-reduced-motion.
export function MatrixRain({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const glyphs =
      "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789".split("")
    const fontSize = 16
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const start = performance.now()
    let width = 0
    let height = 0
    let drops: number[] = []

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const columns = Math.max(1, Math.floor(width / fontSize))
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / fontSize)
      )
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, width, height)
    }

    // green (34,197,94) ⇄ red (239,68,68), eased; full red at half the period
    const mix = (a: number, b: number, k: number) => Math.round(a + (b - a) * k)
    const palette = (now: number) => {
      const k = (1 - Math.cos(((now - start) / 60000) * Math.PI * 2)) / 2
      const r = mix(34, 239, k)
      const g = mix(197, 68, k)
      const b = mix(94, 68, k)
      return {
        trail: `rgb(${r}, ${g}, ${b})`,
        lead: `rgb(${mix(r, 255, 0.6)}, ${mix(g, 255, 0.6)}, ${mix(b, 255, 0.6)})`,
      }
    }

    const draw = () => {
      // translucent black wash → previous glyphs fade into trailing tails
      ctx.fillStyle = "rgba(0, 0, 0, 0.07)"
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px monospace`
      const { trail, lead } = palette(performance.now())
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i] ?? 0
        const text = glyphs[Math.floor(Math.random() * glyphs.length)] ?? "0"
        // occasional brighter leading glyph, like the films
        ctx.fillStyle = Math.random() > 0.97 ? lead : trail
        ctx.fillText(text, i * fontSize, drop * fontSize)
        drops[i] = drop * fontSize > height && Math.random() > 0.975 ? 0 : drop + 1
      }
    }

    let raf = 0
    let last = 0
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop)
      if (t - last < 55) return // ~18fps for a chunkier matrix cadence
      last = t
      draw()
    }

    // resize + repaint together, so a frame is visible at the correct size even
    // before the rAF loop runs (and after the viewport changes).
    const onResize = () => {
      resize()
      draw()
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    onResize()
    if (!reduce) raf = requestAnimationFrame(loop)

    const ro = new ResizeObserver(onResize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className={className} />
}

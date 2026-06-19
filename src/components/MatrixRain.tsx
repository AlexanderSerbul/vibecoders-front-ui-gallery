import { useEffect, useRef } from "react"

// Matrix-style digital rain drawn on a <canvas>. Self-contained: it fills its
// nearest positioned parent via `absolute inset-0`. Animation runs through
// requestAnimationFrame; in a backgrounded tab rAF is throttled, so the falling
// motion is best seen in a focused browser (one initial frame is drawn eagerly
// so there's always something on screen). Respects prefers-reduced-motion.
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

    const draw = () => {
      // translucent black wash → previous glyphs fade into trailing tails
      ctx.fillStyle = "rgba(0, 0, 0, 0.07)"
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i] ?? 0
        const text = glyphs[Math.floor(Math.random() * glyphs.length)] ?? "0"
        // occasional brighter leading glyph, like the films
        ctx.fillStyle = Math.random() > 0.97 ? "#d7ffe4" : "#22c55e"
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

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // resize + repaint together, so a frame is visible at the correct size
    // even before the rAF loop runs (and after the viewport changes).
    const onResize = () => {
      resize()
      draw()
    }
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

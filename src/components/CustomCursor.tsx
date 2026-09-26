import { useEffect, useRef } from 'react'

export type CursorMode = 'default' | 'view' | 'explore'

interface Props {
  mode: CursorMode
}

export function CustomCursor({ mode }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -200, y: -200 })
  const pos = useRef({ x: -200, y: -200 })
  const raf = useRef(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.13
      pos.current.y += (mouse.current.y - pos.current.y) * 0.13
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - 32}px, ${pos.current.y - 32}px, 0)`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  const visible = mode !== 'default'

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.18s ease' }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{ background: '#171717' }}
      >
        <span
          className="text-white uppercase"
          style={{
            fontSize: 9,
            letterSpacing: '2px',
            fontFamily: "'Inter:Medium', sans-serif",
            fontWeight: 500,
          }}
        >
          {mode === 'view' ? 'VIEW' : 'EXPLORE'}
        </span>
      </div>
    </div>
  )
}

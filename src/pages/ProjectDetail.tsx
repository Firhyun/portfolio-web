import { useEffect, useRef, useState, type ReactNode } from "react"
import { CustomCursor, type CursorMode } from "@/components/CustomCursor"

const EASE = "cubic-bezier(0.22,1,0.36,1)"

interface Props {
  children: ReactNode
  onBack: () => void
  projectName: string
}

export default function ProjectDetail({
  children,
  onBack,
  projectName,
}: Props) {
  const [entered, setEntered] = useState(false)
  const [cursorMode, setCursorMode] = useState<CursorMode>("default")

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 60)
    return () => clearTimeout(t)
  }, [])

  // Parallax on mouse move
  const containerRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const raf = useRef(0)
  const smooth = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      mouse.current = {
        x: (e.clientX / w - 0.5) * 2,
        y: (e.clientY / h - 0.5) * 2,
      }
    }
    window.addEventListener("mousemove", onMove)

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.06
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.06

      if (containerRef.current) {
        const imgs =
          containerRef.current.querySelectorAll<HTMLElement>("[data-parallax]")
        imgs.forEach((el) => {
          const strength = parseFloat(el.dataset.parallax ?? "1")
          const tx = smooth.current.x * strength * 6
          const ty = smooth.current.y * strength * 6
          el.style.transform = `translate(${tx}px, ${ty}px)`
        })
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white flex flex-col overflow-x-hidden"
      style={{ cursor: cursorMode !== "default" ? "none" : "auto" }}
      onMouseEnter={() => setCursorMode("explore")}
      onMouseLeave={() => setCursorMode("default")}
    >
      <CustomCursor mode={cursorMode} />

      {/* Back button */}
      <div
        className="fixed top-6 left-10 z-50"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(-6px)",
          transition: `opacity 400ms ease, transform 400ms ${EASE}`,
        }}
      >
        <BackButton onClick={onBack} />
      </div>

      {/* Project label */}
      <div
        className="fixed top-6 right-10 z-50 overflow-hidden"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 500ms ease 200ms",
        }}
      >
        <span
          className="text-black/40 text-[11px] tracking-[2.5px] uppercase"
          style={{ fontFamily: "'Inter:Medium', sans-serif", fontWeight: 500 }}
        >
          {projectName}
        </span>
      </div>

      {/* Content with entry animation */}
      <div
        className="self-center bg-white [&>*]:!bg-white"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 600ms ${EASE} 100ms, transform 600ms ${EASE} 100ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-2 bg-transparent border-none outline-none cursor-pointer group"
      style={{ cursor: "auto" }}
    >
      <span
        className="text-black/70 hover:text-black text-[12px] tracking-[2px] uppercase"
        style={{
          fontFamily: "'Inter:Medium', sans-serif",
          fontWeight: 500,
          transform: hov ? "translateX(-2px)" : "translateX(0)",
          transition: "color 200ms ease, transform 200ms ease",
        }}
      >
        ← HOME
      </span>
    </button>
  )
}

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type RefObject,
  type CSSProperties,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomCursor, type CursorMode } from '@/components/CustomCursor'

// images
import imgMom      from '@/imports/mom.png'
import imgImage3   from '@/imports/Home/c999e8e152b9557dd9bf3398b7a773c366cab7ce.png'
import imgPersonal from '@/imports/Home/8f83114889689993ea186891897232348f84a060.png'
import imgCemeto   from '@/imports/Home/0df58f1ac070310dbc566768dffb1a674a7263c8.png'
import imgSaereal  from '@/imports/sae.png'
// import imgMarBase  from '@/imports/Home/5670410287bfb8d897bb08403ecffdc28f26b329.png'
import imgMarOver  from '@/imports/Home/2b57d431bdf66d4d94fcd5c882528050506740e6.png'

const EASE   = 'cubic-bezier(0.22,1,0.36,1)'
const REVEAL = 270

// ── utils ────────────────────────────────────────────────────────────────────
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))
const dist2 = (ax: number, ay: number, bx: number, by: number) =>
  Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2)

// ── local time ───────────────────────────────────────────────────────────────
function useLocalTime() {
  const [t, setT] = useState('')
  useEffect(() => {
    const fmt = () =>
      setT(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
    fmt()
    const id = setInterval(fmt, 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

// ── headline word with masked-slide entry ────────────────────────────────────
function HWord({ children, delay, entered, dark }: {
  children: string; delay: number; entered: boolean; dark?: boolean
}) {
  return (
    <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
      <span
        className="inline-block"
        style={{
          color: dark ? '#222' : '#b7bbbd',
          transform: entered ? 'translateY(0)' : 'translateY(110%)',
          opacity: entered ? 1 : 0,
          transition: `transform 700ms ${EASE} ${delay}ms, opacity 500ms ease ${delay}ms`,
        }}
      >
        {children}
      </span>
    </span>
  )
}

// ── center word with vertical swap ───────────────────────────────────────────
function CenterWord({ word }: { word: string }) {
  const [curr, setCurr] = useState(word)
  const [out, setOut]   = useState(false)
  const [inp, setInp]   = useState(false)

  useEffect(() => {
    if (word === curr) return
    setOut(true)
    const t1 = setTimeout(() => {
      setCurr(word); setOut(false); setInp(true)
      const t2 = setTimeout(() => setInp(false), 380)
      return () => clearTimeout(t2)
    }, 200)
    return () => clearTimeout(t1)
  }, [word])

  const ty = out ? '-110%' : inp ? '110%' : '0%'

  return (
    <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
      <span
        className="inline-block"
        style={{
          color: '#222',
          transform: `translateY(${ty})`,
          transition: 'transform 260ms cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        &nbsp;{curr}&nbsp;
      </span>
    </span>
  )
}

// ── nav button ───────────────────────────────────────────────────────────────
function NavBtn({ label, active, onClick }: {
  label: string; active: boolean; onClick: () => void
}) {
  const [hov, setHov] = useState(false)
  const show = hov || active

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative h-[25px] flex items-center bg-transparent border-none outline-none cursor-pointer pb-[4px]"
      style={{
        transform: hov ? 'translateY(-1.5px)' : 'translateY(0)',
        transition: `transform 200ms ${EASE}`,
      }}
    >
      <span
        className="text-[#171717] text-[14px] tracking-[2.1px] uppercase whitespace-nowrap"
        style={{ fontFamily: "'Inter:Medium',sans-serif", fontWeight: 500 }}
      >
        {show ? label.replace('+', '−') : label}
      </span>
      <span
        className="absolute bottom-0 left-0 h-px bg-[#171717]"
        style={{ width: show ? '100%' : '0%', transition: `width 200ms ${EASE}` }}
      />
    </button>
  )
}

// ── thumbnail ────────────────────────────────────────────────────────────────
interface ThumbProps {
  id: string
  title: string
  proximity: number   // 0–1
  hovered: boolean
  dimmed: boolean
  entered: boolean
  entryDelay: number
  gridStyle: CSSProperties
  onEnter: () => void
  onLeave: () => void
  onClaim: (rect: DOMRect) => void
  thumbRef: RefObject<HTMLDivElement | null>
  children: React.ReactNode
}

function Thumb({
  id, title,
  proximity, hovered, dimmed,
  entered, entryDelay,
  gridStyle,
  onEnter, onLeave, onClaim,
  thumbRef, children,
}: ThumbProps) {
  const [mag, setMag] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!thumbRef.current) return
    const r = thumbRef.current.getBoundingClientRect()
    const dx = ((e.clientX - r.left) / r.width  - 0.5) * 10
    const dy = ((e.clientY - r.top)  / r.height - 0.5) * 10
    setMag({ x: dx, y: dy })
  }

  const handleLeave = () => { setMag({ x: 0, y: 0 }); onLeave() }

  const op = hovered ? 1 : dimmed ? 0.18 : clamp(0.3 + proximity * 0.45, 0.3, 0.75)
  const sc = hovered ? 1.025 : 1

  return (
    <div
      ref={thumbRef}
      style={{
        ...gridStyle,
        opacity:   entered ? op  : 0,
        transform: entered
          ? `scale(${sc}) translate(${mag.x}px, ${mag.y}px)`
          : 'scale(0.96)',
        transition: entered
          ? `opacity 200ms ease, transform 260ms ${EASE}`
          : `opacity 600ms ${EASE} ${entryDelay}ms, transform 600ms ${EASE} ${entryDelay}ms`,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'none',
        willChange: 'transform, opacity',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={handleLeave}
      onMouseMove={onMove}
      onClick={() => { if (thumbRef.current) onClaim(thumbRef.current.getBoundingClientRect()) }}
    >
      {children}

      {/* project name badge */}
      <div
        className="absolute inset-x-0 bottom-0 px-2 pb-2 pointer-events-none flex items-end"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 180ms ease' }}
      >
        <span
          className="text-white text-[9px] tracking-[2px] uppercase leading-none px-2 py-1"
          style={{
            background: 'rgba(0,0,0,0.7)',
            fontFamily: "'Inter:Medium',sans-serif",
            fontWeight: 500,
          }}
        >
          {title}
        </span>
      </div>
    </div>
  )
}

// ── main ─────────────────────────────────────────────────────────────────────
export default function Home({
  onNavigate,
}: {
  onNavigate: (route: string, rect?: DOMRect) => void
}) {
  const localTime = useLocalTime()
  const [headerIn, setHeaderIn]   = useState(false)
  const [entered,  setEntered]    = useState(false)
  const [footerIn, setFooterIn]   = useState(false)

  useEffect(() => {
    const t0 = setTimeout(() => setHeaderIn(true), 60)
    const t1 = setTimeout(() => setEntered(true), 180)
    const t2 = setTimeout(() => setFooterIn(true), 700)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  // cursor proximity ──────────────────────────────────────────
  const mouse  = useRef({ x: -999, y: -999 })
  const smooth = useRef({ x: -999, y: -999 })
  const [prox, setProx] = useState<Record<string, number>>({})

  // refs keyed by id
  const refs = useRef<Record<string, RefObject<HTMLDivElement | null>>>({
    goodluckmom: { current: null },
    personal:    { current: null },
    cemeto:      { current: null },
    saereal:     { current: null },
    marrymint:   { current: null },
  })

  useEffect(() => {
    const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    let raf = 0
    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1
      const next: Record<string, number> = {}
      for (const [id, r] of Object.entries(refs.current)) {
        if (!r.current) { next[id] = 0; continue }
        const b = r.current.getBoundingClientRect()
        const cx = b.left + b.width / 2
        const cy = b.top  + b.height / 2
        next[id] = clamp(1 - dist2(smooth.current.x, smooth.current.y, cx, cy) / REVEAL, 0, 1)
      }
      setProx(next)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  // hover state ─────────────────────────────────────────────
  const [hov, setHov] = useState<string | null>(null)
  const [cursor, setCursor] = useState<CursorMode>('default')

  const enter = (id: string) => { setHov(id); setCursor('view') }
  const leave = ()             => { setHov(null); setCursor('default') }

  const centerWord = hov
    ? (THUMBS.find(t => t.id === hov)?.shortName ?? 'Designed')
    : 'Designed'

  const handleClick = (route: string, rect: DOMRect) => onNavigate(route, rect)

  // mobile thumbnails ───────────────────────────────────────
  const MOBILE_IMGS: Record<string, string> = {
    goodluckmom: imgMom,
    personal:    imgPersonal,
    cemeto:      imgCemeto,
    saereal:     imgSaereal,
    marrymint:   imgMarOver,
  }

  return (
    <div
      className="relative w-full min-h-screen bg-white flex flex-col"
      style={{ cursor: hov ? 'none' : 'auto', overflowX: 'hidden' }}
    >
      <CustomCursor mode={cursor} />

      {/* ── header ─────────────────────────────────────── */}
      <header
        className="flex items-center justify-between px-10 h-[78px] shrink-0"
        style={{
          opacity: headerIn ? 1 : 0,
          transform: headerIn ? 'none' : 'translateY(-8px)',
          transition: `opacity 400ms ease, transform 400ms ${EASE}`,
        }}
      >
        <span
          className="text-[20px] tracking-[3px] uppercase text-[#171717] select-none"
          style={{ fontFamily: "'Inter:Bold',sans-serif", fontWeight: 700 }}
        >
          O_Studiio_GD
        </span>
        <nav className="flex gap-4">
          <NavBtn label="+ Home"    active onClick={() => onNavigate('/')} />
          <NavBtn label="+ Profile" active={false} onClick={() => onNavigate('/profile')} />
        </nav>
      </header>

      {/* ── desktop canvas ─────────────────────────────── */}
      <div className="hidden md:block relative flex-1 w-full">
        {/* grid wrapper – same dimensions as original Figma grid */}
        <div
          className="relative mx-auto"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 258.84px)',
            gridTemplateRows: 'repeat(5, 154.39px)',
            gap: 12,
            padding: 40,
            width: 'max-content',
          }}
        >
          {/* GOODLUCK MOM – col 1, row 3 */}
          <Thumb
            id="goodluckmom" title="GOODLUCK MOM"
            proximity={prox.goodluckmom ?? 0}
            hovered={hov === 'goodluckmom'}
            dimmed={!!hov && hov !== 'goodluckmom'}
            entered={entered} entryDelay={80}
            gridStyle={{ gridColumn: 1, gridRow: 3, width: 258.844, height: 154.391 }}
            onEnter={() => enter('goodluckmom')} onLeave={leave}
            onClaim={r => handleClick('/goodluckmom', r)}
            thumbRef={refs.current.goodluckmom}
          >
            <img alt="Goodluck Mom" src={imgMom}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className="absolute pointer-events-none"
              style={{ height: 201, left: -61, top: -4.78, width: 379 }}>
              <img alt="" src={imgImage3}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
          </Thumb>

          {/* PERSONAL COFFEE – col 4, row 1–2 */}
          <Thumb
            id="personal" title="PERSONAL COFFEE"
            proximity={prox.personal ?? 0}
            hovered={hov === 'personal'}
            dimmed={!!hov && hov !== 'personal'}
            entered={entered} entryDelay={160}
            gridStyle={{ gridColumn: 4, gridRow: '1 / span 2', width: 258, height: 320.78 }}
            onEnter={() => enter('personal')} onLeave={leave}
            onClaim={r => handleClick('/personal', r)}
            thumbRef={refs.current.personal}
          >
            <div className="absolute pointer-events-none"
              style={{ height: 367, left: -44.53, top: 0, width: 368 }}>
              <img alt="Personal Coffee" src={imgPersonal}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
          </Thumb>

          {/* CEMETO – col 2, row 2 */}
          <Thumb
            id="cemeto" title="CEMETO"
            proximity={prox.cemeto ?? 0}
            hovered={hov === 'cemeto'}
            dimmed={!!hov && hov !== 'cemeto'}
            entered={entered} entryDelay={120}
            gridStyle={{ gridColumn: 2, gridRow: 2, width: 258.844, height: 154.391 }}
            onEnter={() => enter('cemeto')} onLeave={leave}
            onClaim={r => handleClick('/cemeto', r)}
            thumbRef={refs.current.cemeto}
          >
            <div className="absolute pointer-events-none"
              style={{ height: 161, left: -14.84, top: -3.39, width: 288 }}>
              <img alt="Cemeto" src={imgCemeto}
                className="pointer-events-none"
                style={{ position: 'absolute', height: '133.41%', top: '-8.19%', left: 0, width: '100%', maxWidth: 'none' }} />
            </div>
          </Thumb>

          {/* SAEREAL – col 3, row 4–5 */}
          <Thumb
            id="saereal" title="SAEREAL"
            proximity={prox.saereal ?? 0}
            hovered={hov === 'saereal'}
            dimmed={!!hov && hov !== 'saereal'}
            entered={entered} entryDelay={240}
            gridStyle={{ gridColumn: 3, gridRow: '4 / span 2', height: 320.78 }}
            onEnter={() => enter('saereal')} onLeave={leave}
            onClaim={r => handleClick('/saereal', r)}
            thumbRef={refs.current.saereal}
          >
            <div className="absolute pointer-events-none"
              style={{ height: 347, left: -138.53, top: -26.17, width: 594 }}>
              <img alt="Saereal" src={imgSaereal}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ objectFit: 'cover', objectPosition: 'bottom' }} />
            </div>
          </Thumb>

          {/* MARRYMINT – col 5, row 4 */}
          <Thumb
            id="marrymint" title="MARRYMINT.CO"
            proximity={prox.marrymint ?? 0}
            hovered={hov === 'marrymint'}
            dimmed={!!hov && hov !== 'marrymint'}
            entered={entered} entryDelay={300}
            gridStyle={{ gridColumn: 5, gridRow: 4, width: 258.844, height: 154.391 }}
            onEnter={() => enter('marrymint')} onLeave={leave}
            onClaim={r => handleClick('/marrymint', r)}
            thumbRef={refs.current.marrymint}
          >
            <img alt="Marrymint" src={imgMarOver}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className="absolute pointer-events-none"
              style={{ height: 192, left: -5.84, top: -18.39, width: 269 }}>
              <img alt="" src={imgMarOver}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
          </Thumb>

          {/* HEADLINE – col 2–4, row 3 */}
          <div
            className="flex items-center justify-center text-center select-none"
            style={{
              gridColumn: '2 / span 3',
              gridRow: 3,
              pointerEvents: 'none',
            }}
          >
            <p
              className="leading-none whitespace-nowrap"
              style={{
                fontSize: 40,
                letterSpacing: '-2.08px',
                fontFamily: "'Host Grotesk:Medium',sans-serif",
                fontWeight: 500,
                color: '#b7bbbd',
              }}
            >
              <HWord delay={180} entered={entered}>Inventions</HWord>
              <CenterWord word={centerWord} />
              <HWord delay={320} entered={entered}>to</HWord>
              {' '}
              <HWord delay={390} entered={entered}>Perform</HWord>
            </p>
          </div>
        </div>
      </div>

      {/* ── mobile list ────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-10 px-5 py-6 flex-1">
        <p
          className="text-center text-[28px] leading-tight uppercase tracking-tight"
          style={{
            fontFamily: "'Host Grotesk:Medium',sans-serif",
            color: '#b7bbbd',
            opacity: entered ? 1 : 0,
            transition: `opacity 600ms ${EASE} 80ms`,
          }}
        >
          <span style={{ color: '#222' }}>Inventions</span> Designed to Perform
        </p>
        {THUMBS.map((t, i) => (
          <button
            key={t.id}
            onClick={() => onNavigate(t.route)}
            className="w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#171717]"
            aria-label={`View project: ${t.title}`}
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? 'none' : 'translateY(20px)',
              transition: `opacity 600ms ${EASE} ${100 + i * 100}ms, transform 600ms ${EASE} ${100 + i * 100}ms`,
            }}
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img src={MOBILE_IMGS[t.id]} alt={t.title}
                className="w-full h-full object-cover" />
            </div>
            <p
              className="mt-2 text-[#171717] text-[11px] tracking-[2px] uppercase"
              style={{ fontFamily: "'Inter:Medium',sans-serif", fontWeight: 500 }}
            >
              {t.title}
            </p>
          </button>
        ))}
      </div>

      {/* ── footer ─────────────────────────────────────── */}
      <footer
        className="flex items-center justify-center gap-4 h-[55px] px-10 shrink-0"
        style={{
          opacity: footerIn ? 1 : 0,
          transition: 'opacity 400ms ease 500ms',
        }}
      >
        <span className="text-[#171717] text-[12px] tracking-[1.4px] uppercase"
          style={{ fontFamily: "'Inter:Medium',sans-serif", fontWeight: 500 }}>
          ©O_STudiio 2026
        </span>
        {localTime && (
          <>
            <span className="inline-block w-1 h-1 rounded-full bg-[#171717]" />
            <span className="text-[#171717] text-[12px] tracking-[1.4px] uppercase"
              style={{ fontFamily: "'Inter:Medium',sans-serif", fontWeight: 500 }}>
              Local time {localTime}
            </span>
          </>
        )}
      </footer>
    </div>
  )
}

// ── thumb metadata ────────────────────────────────────────────────────────────
const THUMBS = [
  { id: 'goodluckmom', title: 'GOODLUCK MOM',            shortName: 'Goodluck', route: '/goodluckmom' },
  { id: 'personal',    title: 'PERSONAL COFFEE ROASTERY', shortName: 'Personal', route: '/personal'    },
  { id: 'cemeto',      title: 'CEMETO',                   shortName: 'Cemeto',   route: '/cemeto'      },
  { id: 'saereal',     title: 'SAEREAL',                  shortName: 'Saereal',  route: '/saereal'     },
  { id: 'marrymint',   title: 'MARRYMINT.CO',             shortName: 'Marry',    route: '/marrymint'   },
]

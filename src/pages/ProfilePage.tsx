import { useEffect, useState, type ReactNode } from 'react'

const EASE = 'cubic-bezier(0.22,1,0.36,1)'

interface Props {
  children: ReactNode
  onNavigate: (route: string) => void
}

export default function ProfilePage({ children, onNavigate }: Props) {
  const [entered, setEntered] = useState(false)
  const [headerIn, setHeaderIn] = useState(false)

  useEffect(() => {
    const t0 = setTimeout(() => setHeaderIn(true), 60)
    const t1 = setTimeout(() => setEntered(true), 160)
    return () => { clearTimeout(t0); clearTimeout(t1) }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Overlay the nav buttons with real interactive ones */}
      {/* <div
        className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-10 h-[78px] pointer-events-none"
        style={{
          opacity: headerIn ? 1 : 0,
          transition: `opacity 400ms ease`,
        }}
      > */}
        {/* <div className="pointer-events-auto">
          <ProfileNavBtn label="+ Home"    onClick={() => onNavigate('/')} />
        </div> */}
        {/* <div className="flex gap-4 pointer-events-auto">
          <ProfileNavBtn label="+ Home"    onClick={() => onNavigate('/')} />
          <ProfileNavBtn label="+ Profile" active onClick={() => {}} />
        </div> */}
      {/* </div> */}

      {/* Content */}
      <div
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? 'translateY(0)' : 'translateY(16px)',
          transition: `opacity 600ms ${EASE} 100ms, transform 700ms ${EASE} 100ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

function ProfileNavBtn({
  label, active = false, onClick,
}: {
  label: string; active?: boolean; onClick: () => void
}) {
  const [hov, setHov] = useState(false)
  const displayLabel = hov || active ? label.replace('+', '−') : label

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative h-[25px] flex items-center pb-[4px] bg-transparent border-none outline-none cursor-pointer"
      style={{
        transform: hov ? 'translateY(-1.5px)' : 'translateY(0)',
        transition: `transform 200ms ${EASE}`,
      }}
    >
      <span
        className="text-[#171717] text-[14px] tracking-[2.1px] uppercase whitespace-nowrap select-none"
        style={{ fontFamily: "'Inter:Medium', sans-serif", fontWeight: 500 }}
      >
        {displayLabel}
      </span>
      <span
        className="absolute bottom-0 left-0 h-px bg-black"
        style={{
          width: hov || active ? '100%' : '0%',
          transition: `width 200ms ${EASE}`,
        }}
      />
    </button>
  )
}

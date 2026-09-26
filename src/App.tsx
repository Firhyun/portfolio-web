import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'

import HomePage      from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'
import ProfilePage   from '@/pages/ProfilePage'

import GoodluckmomImport from '@/imports/Goodluckmom/index'
import PersonalImport    from '@/imports/Personal/index'
import CemetoImport      from '@/imports/Cemeto/index'
import SaerealImport     from '@/imports/Saereal/index'
import MarrymintImport   from '@/imports/Marrymint/index'
import ProfileImport     from '@/imports/Profile/index'

const PROJECT_NAMES: Record<string, string> = {
  '/goodluckmom': 'GOODLUCK MOM',
  '/personal':    'PERSONAL COFFEE ROASTERY',
  '/cemeto':      'CEMETO',
  '/saereal':     'SAEREAL',
  '/marrymint':   'MARRYMINT.CO',
}

const EASE = 'cubic-bezier(0.22,1,0.36,1)'

// ── transition overlay ────────────────────────────────────────────────────────
interface OverlayState {
  active: boolean
  phase: 'idle' | 'covering' | 'covered' | 'revealing'
  color: string
}

function AppShell() {
  const navigate = useNavigate()
  const location = useLocation()

  const [overlay, setOverlay] = useState<OverlayState>({
    active: false,
    phase: 'idle',
    color: '#000',
  })

  // Pending route while overlay covers
  const pendingRoute = useRef<string | null>(null)

  const goTo = useCallback(
    (route: string, _rect?: DOMRect) => {
      if (route === location.pathname) return

      const isToProject = route !== '/' && route !== '/profile'
      const isFromProject = location.pathname !== '/' && location.pathname !== '/profile'
      const color = isToProject || isFromProject ? '#000' : '#fff'

      pendingRoute.current = route
      setOverlay({ active: true, phase: 'covering', color })

      // After covering → navigate → start reveal
      const t1 = setTimeout(() => {
        if (pendingRoute.current) navigate(pendingRoute.current)
        setOverlay(o => ({ ...o, phase: 'covered' }))

        const t2 = setTimeout(() => {
          setOverlay(o => ({ ...o, phase: 'revealing' }))
          const t3 = setTimeout(() => {
            setOverlay({ active: false, phase: 'idle', color: '#000' })
          }, 600)
          return () => clearTimeout(t3)
        }, 80)
        return () => clearTimeout(t2)
      }, 500)

      return () => clearTimeout(t1)
    },
    [location.pathname, navigate],
  )

  // Overlay opacity
  const overlayOp =
    overlay.phase === 'covering' ? 1 :
    overlay.phase === 'covered'  ? 1 :
    overlay.phase === 'revealing'? 0 :
    0

  const isProject = location.pathname !== '/' && location.pathname !== '/profile'

  return (
    <>
      {/* ── page ── */}
      <div className="relative w-full min-h-screen" style={{ overflow: 'hidden' }}>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={goTo} />} />

          <Route
            path="/profile"
            element={
              <ProfilePage onNavigate={goTo}>
                <ProfileImport />
              </ProfilePage>
            }
          />

          <Route
            path="/goodluckmom"
            element={
              <ProjectDetail onBack={() => goTo('/')} projectName="GOODLUCK MOM">
                <GoodluckmomImport />
              </ProjectDetail>
            }
          />
          <Route
            path="/personal"
            element={
              <ProjectDetail onBack={() => goTo('/')} projectName="PERSONAL COFFEE ROASTERY">
                <PersonalImport />
              </ProjectDetail>
            }
          />
          <Route
            path="/cemeto"
            element={
              <ProjectDetail onBack={() => goTo('/')} projectName="CEMETO">
                <CemetoImport />
              </ProjectDetail>
            }
          />
          <Route
            path="/saereal"
            element={
              <ProjectDetail onBack={() => goTo('/')} projectName="SAEREAL">
                <SaerealImport />
              </ProjectDetail>
            }
          />
          <Route
            path="/marrymint"
            element={
              <ProjectDetail onBack={() => goTo('/')} projectName="MARRYMINT.CO">
                <MarrymintImport />
              </ProjectDetail>
            }
          />
        </Routes>
      </div>

      {/* ── transition overlay ── */}
      {overlay.active && (
        <div
          className="fixed inset-0 z-[9000] pointer-events-none"
          style={{
            background: overlay.color,
            opacity: overlayOp,
            transition:
              overlay.phase === 'covering'
                ? `opacity 480ms ${EASE}`
                : overlay.phase === 'revealing'
                ? `opacity 560ms ${EASE}`
                : 'none',
          }}
        />
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

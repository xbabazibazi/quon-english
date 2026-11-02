import { useState } from 'react'
import { useStore } from './store'
import { Onboarding } from './screens/Onboarding'
import { Home } from './screens/Home'
import { Session } from './screens/Session'
import { ErrorMap } from './screens/ErrorMap'
import { Profile } from './screens/Profile'
import { Vocab } from './screens/Vocab'
import { Readings } from './screens/Reading'
import { Scenarios } from './screens/Scenarios'

export type Route = 'home' | 'session' | 'errors' | 'profile' | 'vocab' | 'readings' | 'scenarios'

export default function App() {
  const onboarded = useStore((s) => s.profile.onboarded)
  const [route, setRoute] = useState<Route>('home')
  const [sessionNo, setSessionNo] = useState(0)
  const home = () => setRoute('home')
  const startLesson = () => { setSessionNo((n) => n + 1); setRoute('session') }

  if (!onboarded) return <Onboarding />
  if (route === 'session') return <Session key={sessionNo} onExit={home} onNext={startLesson} />
  if (route === 'errors') return <ErrorMap onBack={home} />
  if (route === 'profile') return <Profile onBack={home} />
  if (route === 'vocab') return <Vocab onBack={home} />
  if (route === 'readings') return <Readings onBack={home} />
  if (route === 'scenarios') return <Scenarios onBack={home} />
  return <Home onStart={startLesson} onGo={setRoute} />
}

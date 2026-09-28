import { useState } from 'react'
import { useStore } from './store'
import { Onboarding } from './screens/Onboarding'
import { Home } from './screens/Home'
import { Session } from './screens/Session'
import { ErrorMap } from './screens/ErrorMap'
import { Profile } from './screens/Profile'

type Route = { name: 'home' } | { name: 'session'; kind: 'daily' | 'second' } | { name: 'errors' } | { name: 'profile' }

export default function App() {
  const onboarded = useStore((s) => s.profile.onboarded)
  const [route, setRoute] = useState<Route>({ name: 'home' })
  const [sessionNo, setSessionNo] = useState(0)

  if (!onboarded) return <Onboarding />
  if (route.name === 'session') return <Session key={sessionNo} kind={route.kind} onExit={() => setRoute({ name: 'home' })} />
  if (route.name === 'errors') return <ErrorMap onBack={() => setRoute({ name: 'home' })} />
  if (route.name === 'profile') return <Profile onBack={() => setRoute({ name: 'home' })} />
  return <Home onStart={(kind) => { setSessionNo((n) => n + 1); setRoute({ name: 'session', kind }) }} onErrors={() => setRoute({ name: 'errors' })} onProfile={() => setRoute({ name: 'profile' })} />
}

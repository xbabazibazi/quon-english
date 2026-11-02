import { useEffect, useState } from 'react'

type Library = typeof import('../content/library')
let cache: Library | null = null

export function useLibrary(): Library | null {
  const [lib, setLib] = useState(cache)
  useEffect(() => {
    if (!cache) import('../content/library').then((m) => { cache = m; setLib(m) })
  }, [])
  return lib
}

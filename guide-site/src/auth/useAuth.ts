import { useEffect, useState } from 'react'
import { validateStoredToken, type TokenValidationResult } from './accessGate'
import { initTokenFromURL } from './tokenHandler'

export function useAuth(): TokenValidationResult | null {
  const [authState, setAuthState] = useState<TokenValidationResult | null>(null)

  useEffect(() => {
    initTokenFromURL()
    setAuthState(validateStoredToken())
  }, [])

  return authState
}

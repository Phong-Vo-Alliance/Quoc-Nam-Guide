import { decodeToken } from './tokenDecoder'
import { resolveEffectiveRole, type Role } from './roleResolver'
import { getStoredToken } from './tokenHandler'

export type TokenValidationResult =
  | { valid: true; email: string; effectiveRole: Role }
  | {
      valid: false
      reason:
        | 'missing'
        | 'invalid'
        | 'expired'
        | 'no_role'
        | 'issuer_mismatch'
        | 'audience_mismatch'
    }

const EXPECTED_ISSUER = import.meta.env.VITE_JWT_ISSUER
const EXPECTED_AUDIENCE = import.meta.env.VITE_JWT_AUDIENCE

function audienceMatches(aud: string | string[], expected: string): boolean {
  return Array.isArray(aud) ? aud.includes(expected) : aud === expected
}

export function validateStoredToken(): TokenValidationResult {
  const token = getStoredToken()
  if (!token) return { valid: false, reason: 'missing' }

  const user = decodeToken(token)
  if (!user) return { valid: false, reason: 'invalid' }

  const nowSeconds = Math.floor(Date.now() / 1000)
  if (user.exp < nowSeconds) return { valid: false, reason: 'expired' }

  if (EXPECTED_ISSUER && user.iss !== EXPECTED_ISSUER) {
    return { valid: false, reason: 'issuer_mismatch' }
  }

  if (EXPECTED_AUDIENCE && !audienceMatches(user.aud, EXPECTED_AUDIENCE)) {
    return { valid: false, reason: 'audience_mismatch' }
  }

  const effectiveRole = resolveEffectiveRole(user.roles)
  if (!effectiveRole) return { valid: false, reason: 'no_role' }

  return {
    valid: true,
    email: user.email,
    effectiveRole,
  }
}

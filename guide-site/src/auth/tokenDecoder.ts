const ROLE_CLAIM =
  import.meta.env.VITE_JWT_ROLE_CLAIM ??
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'

type JwtPayload = {
  email?: unknown
  tenant_id?: unknown
  exp?: unknown
  iss?: unknown
  aud?: unknown
  [key: string]: unknown
}

export type GuideUser = {
  email: string
  tenantId: string
  roles: string[]
  exp: number
  iss: string
  aud: string | string[]
}

function decodeBase64Url(input: string): string {
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/')
  const padding = '='.repeat((4 - (base64.length % 4)) % 4)
  return atob(base64 + padding)
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim().toLowerCase())
      .filter(Boolean)
  }

  if (value == null) return []

  const normalized = String(value).trim().toLowerCase()
  return normalized ? [normalized] : []
}

/**
 * Decode JWT payload only (no signature verification).
 */
export function decodeToken(token: string): GuideUser | null {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return null

    const payload = JSON.parse(decodeBase64Url(parts[1])) as JwtPayload
    const roles = toStringArray(payload[ROLE_CLAIM])

    const audValue = payload.aud
    let aud: string | string[] = ''
    if (Array.isArray(audValue)) {
      aud = audValue.map((value) => String(value))
    } else if (typeof audValue === 'string') {
      aud = audValue
    }

    return {
      email: typeof payload.email === 'string' ? payload.email : '',
      tenantId: typeof payload.tenant_id === 'string' ? payload.tenant_id : '',
      roles,
      exp: typeof payload.exp === 'number' ? payload.exp : 0,
      iss: typeof payload.iss === 'string' ? payload.iss : '',
      aud,
    }
  } catch {
    return null
  }
}

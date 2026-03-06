/**
 * devTokenFactory — CHỈ DÙNG TRONG DEV
 *
 * Tạo JWT giả đúng format VegaIdentity để test auth mà không cần app thật.
 * Không verify signature — đúng với cách accessGate.ts hoạt động (decode only).
 *
 * Vì guide site KHÔNG verify chữ ký JWT (chỉ decode), token giả này
 * sẽ vượt qua accessGate bình thường trong môi trường dev.
 */

const ROLE_CLAIM = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
const SESSION_KEY = 'guide_token'

// Khớp với .env.example / BLUEPRINT.md
const ISSUER = import.meta.env.VITE_JWT_ISSUER ?? 'VegaIdentity'
const AUDIENCE = import.meta.env.VITE_JWT_AUDIENCE ?? 'VegaClients'

type DevRole = 'staff' | 'leader' | 'admin'

const DEV_EMAILS: Record<DevRole, string> = {
  staff: 'staff.dev@quoc-nam.com',
  leader: 'leader.dev@quoc-nam.com',
  admin: 'admin.dev@quoc-nam.com',
}

// Capitalize để khớp với giá trị trong JWT thật ("Admin", "Leader", "Staff")
const ROLE_VALUES: Record<DevRole, string[]> = {
  staff: ['Staff'],
  leader: ['Leader'],
  admin: ['Admin', 'Leader'],
}

function base64UrlEncode(str: string): string {
  return btoa(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

/**
 * Tạo JWT không có chữ ký (signature = "dev") cho role được chọn.
 * Token hết hạn sau 8 giờ.
 */
export function createDevToken(role: DevRole): string {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))

  const payload = base64UrlEncode(
    JSON.stringify({
      email: DEV_EMAILS[role],
      tenant_id: '00000000-0000-0000-0000-000000000001',
      [ROLE_CLAIM]: ROLE_VALUES[role],
      exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60, // 8h
      iss: ISSUER,
      aud: AUDIENCE,
    }),
  )

  // Signature giả — không quan trọng vì guide site không verify
  const fakeSignature = base64UrlEncode('dev-only-no-verify')

  return `${header}.${payload}.${fakeSignature}`
}

/**
 * Đặt token giả vào sessionStorage và reload trang.
 */
export function switchDevRole(role: DevRole): void {
  sessionStorage.setItem(SESSION_KEY, createDevToken(role))
  window.location.reload()
}

/**
 * Xóa token (mô phỏng truy cập không có token).
 */
export function clearDevToken(): void {
  sessionStorage.removeItem(SESSION_KEY)
  window.location.reload()
}

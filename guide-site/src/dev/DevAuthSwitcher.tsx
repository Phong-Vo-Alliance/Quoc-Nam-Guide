import { useState } from 'react'
import { switchDevRole, clearDevToken } from './devTokenFactory'
import { getStoredToken } from '@auth/tokenHandler'
import { validateStoredToken } from '@auth/accessGate'

type DevRole = 'staff' | 'leader' | 'admin'

const ROLE_CONFIG: {
  role: DevRole
  label: string
  badge: string
  btn: string
}[] = [
  {
    role: 'staff',
    label: 'Staff',
    badge: 'bg-blue-100 text-blue-700 border-blue-300',
    btn: 'hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700',
  },
  {
    role: 'leader',
    label: 'Leader',
    badge: 'bg-orange-100 text-orange-700 border-orange-300',
    btn: 'hover:bg-orange-50 hover:border-orange-400 hover:text-orange-700',
  },
  {
    role: 'admin',
    label: 'Admin',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    btn: 'hover:bg-emerald-50 hover:border-emerald-400 hover:text-emerald-700',
  },
]

/**
 * DevAuthSwitcher — widget nổi góc dưới phải.
 * Dùng cho local debug để switch role nhanh không cần JWT thật.
 */
export default function DevAuthSwitcher() {
  const [open, setOpen] = useState(false)

  // Lấy role hiện tại để highlight nút active
  const authState = validateStoredToken()
  const currentRole = authState.valid ? authState.effectiveRole : null
  const hasToken = !!getStoredToken()

  return (
    <div
      className="flex flex-col items-end gap-2"
      style={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 8,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {/* Panel mở rộng */}
      {open && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 w-52">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            {/* Icon bug */}
            <svg className="w-4 h-4 text-gray-400 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/>
              <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6v0z"/>
              <path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M20 13h-4M18.47 9c1.93-.2 3.53-1.9 3.53-4M18 5l-2 2M8 5 6 3"/>
            </svg>
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Dev Auth</span>
            {/* Badge role hiện tại */}
            {currentRole && (
              <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${ROLE_CONFIG.find((r) => r.role === currentRole)?.badge ?? ''}`}>
                {currentRole}
              </span>
            )}
            {!hasToken && (
              <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full border bg-gray-100 text-gray-500 border-gray-300">
                no token
              </span>
            )}
          </div>

          {/* Nút switch role */}
          <div className="space-y-1.5">
            {ROLE_CONFIG.map(({ role, label, btn }) => (
              <button
                key={role}
                type="button"
                onClick={() => switchDevRole(role)}
                className={[
                  'w-full flex items-center gap-2.5 px-3 py-2 rounded-xl border text-xs font-medium text-gray-600 border-gray-200 bg-white transition-all duration-150 cursor-pointer',
                  currentRole === role ? 'ring-2 ring-offset-1 ring-emerald-400 border-emerald-300' : btn,
                ].join(' ')}
              >
                {/* Dot indicator */}
                <span className={[
                  'w-2 h-2 rounded-full flex-none',
                  role === 'staff' ? 'bg-blue-400' : role === 'leader' ? 'bg-orange-400' : 'bg-emerald-500',
                ].join(' ')} />
                <span>{label}</span>
                {currentRole === role && (
                  <svg className="w-3 h-3 ml-auto text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Divider */}
          <hr className="my-3 border-gray-100" />

          {/* Xóa token */}
          <button
            type="button"
            onClick={clearDevToken}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl border border-red-200 text-xs font-medium text-red-500 bg-white hover:bg-red-50 transition-colors duration-150 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
            Xóa token (no-token)
          </button>

          {/* Cảnh báo */}
          <p className="mt-3 text-[10px] text-gray-400 text-center leading-snug">
            Dùng cho môi trường <code className="font-mono">dev/local</code>
          </p>
        </div>
      )}

      {/* Nút toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Dev Auth Switcher"
        className={[
          'w-10 h-10 rounded-full border shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer',
          open
            ? 'bg-gray-800 border-gray-700 text-white'
            : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700',
        ].join(' ')}
        style={{
          width: 40,
          height: 40,
          padding: 0,
          borderRadius: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/>
            <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6v0z"/>
            <path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M20 13h-4M18.47 9c1.93-.2 3.53-1.9 3.53-4M18 5l-2 2M8 5 6 3"/>
          </svg>
        )}
      </button>
    </div>
  )
}

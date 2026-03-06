import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import type { Role } from '@auth/roleResolver'

interface HeaderProps {
  email: string
  effectiveRole: Role
}

const ROLE_LABEL: Record<Role, string> = {
  staff: 'Nhân viên',
  leader: 'Trưởng nhóm',
  admin: 'Quản trị viên',
}

const ROLE_COLOR: Record<Role, string> = {
  staff: 'bg-blue-50 text-blue-700 border-blue-200',
  leader: 'bg-amber-50 text-amber-700 border-amber-200',
  admin: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

/**
 * Header — Logo trái | Thanh tìm kiếm giữa | Badge vai trò phải
 */
export default function Header({ email, effectiveRole }: HeaderProps) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  // Ctrl+K / Cmd+K để focus ô tìm kiếm
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
    setQuery('')
    inputRef.current?.blur()
  }

  return (
    <header className="flex-none h-14 flex items-center gap-4 px-4 bg-white border-b border-gray-200 shadow-sm z-40">
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center gap-2 flex-none select-none group"
        aria-label="Trang chủ"
      >
        {/* Biểu tượng thương hiệu — hình chữ Q cách điệu */}
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500 text-white font-bold text-sm shadow-sm group-hover:bg-emerald-600 transition-colors duration-200">
          QN
        </span>
        <span className="hidden sm:block text-sm font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200 leading-tight">
          Quốc Nam
          <br />
          <span className="text-xs font-normal text-gray-500">Cẩm nang nội bộ</span>
        </span>
      </NavLink>

      {/* Thanh tìm kiếm */}
      <form
        onSubmit={handleSearch}
        className="flex-1 max-w-md mx-auto"
        role="search"
      >
        <label htmlFor="global-search" className="sr-only">
          Tìm kiếm tài liệu
        </label>
        <div className="relative">
          {/* Icon kính lúp */}
          <svg
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            id="global-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Tìm kiếm tài liệu..."
            autoComplete="off"
            className={[
              'w-full pl-9 pr-16 py-2 text-sm rounded-lg border bg-gray-50 text-gray-900 placeholder-gray-400',
              'outline-none transition-all duration-200',
              focused
                ? 'border-emerald-400 ring-2 ring-emerald-100 bg-white'
                : 'border-gray-200 hover:border-gray-300',
            ].join(' ')}
          />

          {/* Gợi ý phím tắt */}
          <kbd
            className={[
              'pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2',
              'hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-xs text-gray-400',
              'font-sans border border-gray-200 rounded bg-white',
              'transition-opacity duration-150',
              focused ? 'opacity-0' : 'opacity-100',
            ].join(' ')}
          >
            <span>Ctrl</span>
            <span>K</span>
          </kbd>
        </div>
      </form>

      {/* Badge vai trò + email */}
      <div className="flex-none flex items-center gap-2">
        <span
          className={[
            'hidden md:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
            ROLE_COLOR[effectiveRole],
          ].join(' ')}
          title={email}
        >
          {/* Icon người dùng */}
          <svg
            className="mr-1 w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          {ROLE_LABEL[effectiveRole]}
        </span>

        {/* Ảnh đại diện / chữ cái đầu email */}
        <button
          type="button"
          className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold flex items-center justify-center border border-emerald-200 hover:bg-emerald-200 transition-colors duration-200 cursor-pointer"
          title={email}
          aria-label={`Tài khoản: ${email}`}
        >
          {email.charAt(0).toUpperCase()}
        </button>
      </div>
    </header>
  )
}

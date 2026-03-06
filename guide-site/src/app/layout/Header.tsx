import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
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

const ROLE_CHIP: Record<Role, string> = {
  staff: 'text-blue-600 bg-blue-50',
  leader: 'text-amber-600 bg-amber-50',
  admin: 'text-emerald-700 bg-emerald-50',
}

export default function Header({ email, effectiveRole }: HeaderProps) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

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
    <header className="flex-none h-13 flex items-center px-4 bg-white border-b border-gray-200 z-40" style={{ height: 52 }}>
      {/* ── Logo — cùng width với sidebar (208px) ── */}
      <div className="flex-none w-52 pr-4">
        <NavLink
          to="/"
          className="flex items-center gap-2.5 select-none group"
          aria-label="Trang chủ"
        >
          <img
            src="/Quocnam_logo.png"
            alt="Quốc Nam"
            className="h-7 w-auto object-contain flex-none"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-[13px] font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-150 leading-tight">
              Quốc Nam
            </span>
            <span className="text-[10px] text-gray-400 font-normal leading-tight">Cẩm nang nội bộ</span>
          </span>
        </NavLink>
      </div>

      {/* ── Search — căn theo content area ── */}
      <form onSubmit={handleSearch} className="flex-1 max-w-lg" role="search">
        <label htmlFor="global-search" className="sr-only">Tìm kiếm tài liệu</label>
        <div className="relative">
          <Search
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="global-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Tìm kiếm tài liệu... (Ctrl K)"
            autoComplete="off"
            className={[
              'w-full pl-9 pr-4 h-9 text-sm rounded-lg border bg-gray-50 text-gray-800 placeholder-gray-400',
              'outline-none transition-all duration-150',
              focused
                ? 'border-emerald-400 ring-2 ring-emerald-50 bg-white'
                : 'border-gray-200 hover:border-gray-300 hover:bg-white',
            ].join(' ')}
          />
        </div>
      </form>

      {/* Spacer */}
      <div className="flex-1" />

      {/* ── Role chip + Avatar ── */}
      <div className="flex items-center gap-2.5 flex-none">
        <span
          className={[
            'hidden md:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium',
            ROLE_CHIP[effectiveRole],
          ].join(' ')}
          title={email}
        >
          {ROLE_LABEL[effectiveRole]}
        </span>

        <button
          type="button"
          title={email}
          aria-label={`Tài khoản: ${email}`}
          className="w-8 h-8 rounded-full bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center hover:bg-emerald-600 transition-colors duration-150 cursor-pointer"
        >
          {email.charAt(0).toUpperCase()}
        </button>
      </div>
    </header>
  )
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchGuides, type SearchRole } from '@search/fuseSearch'

interface SearchModalProps {
  open: boolean
  onClose: () => void
  currentRole?: SearchRole
}

export default function SearchModal({ open, onClose, currentRole }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const closeModal = useCallback(() => {
    setQuery('')
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    }

    document.addEventListener('keydown', onKeyDown)
    inputRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, closeModal])

  const results = useMemo(
    () => searchGuides(query, { currentRole, limit: 12 }),
    [currentRole, query],
  )

  if (!open) return null

  return (
    <div className="search-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-label="Tìm kiếm hướng dẫn">
      <div className="search-modal" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center border-b border-gray-100">
          <Search size={16} className="ml-4 text-gray-400" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tìm kiếm hướng dẫn..."
            className="search-input border-none"
          />
          <button
            type="button"
            onClick={closeModal}
            className="mr-3 p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Đóng tìm kiếm"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto">
          {!query.trim() && (
            <div className="px-5 py-6 text-sm text-gray-500">
              Nhập từ khóa để tìm trong tài liệu nội bộ.
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="px-5 py-6 text-sm text-gray-500">
              Không tìm thấy kết quả phù hợp.
            </div>
          )}

          {results.map((result) => (
            <NavLink
              key={result.slug}
              to={result.slug}
              onClick={closeModal}
              className="search-result-item block no-underline"
            >
              <div className="search-result-title">{result.title}</div>
              <div className="search-result-excerpt">{result.excerpt}</div>
              <div className="mt-1 text-[11px] text-emerald-700 uppercase tracking-wide">
                {result.category}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

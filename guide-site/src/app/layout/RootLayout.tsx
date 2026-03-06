import { Outlet } from 'react-router-dom'
import { useAuth } from '@auth/useAuth'
import Header from './Header'
import Sidebar from './Sidebar'
import NoTokenPage from '@/components/NoTokenPage'
import NoPermissionPage from '@/components/NoPermissionPage'

/**
 * RootLayout — bố cục chính toàn ứng dụng.
 * Cấu trúc: Header trên cùng, bên dưới là Sidebar + nội dung.
 * Căn cứ vào #root { display: flex; flex-direction: column } trong App.css.
 */
export default function RootLayout() {
  const auth = useAuth()

  // Đang kiểm tra token — không hiển thị gì để tránh flash
  if (auth === null) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin"
            aria-label="Đang tải..."
          />
          <p className="text-sm text-gray-500">Đang xác thực...</p>
        </div>
      </div>
    )
  }

  // Không có token hoặc token không hợp lệ
  if (!auth.valid) {
    const needsToken =
      auth.reason === 'missing' ||
      auth.reason === 'invalid' ||
      auth.reason === 'expired'

    if (needsToken) return <NoTokenPage reason={auth.reason} />
    return <NoPermissionPage reason={auth.reason} />
  }

  // Đã xác thực — hiển thị layout đầy đủ
  return (
    <>
      <Header email={auth.email} effectiveRole={auth.effectiveRole} />

      {/* Phần thân: sidebar + nội dung chính */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar effectiveRole={auth.effectiveRole} />

        {/* Vùng nội dung chính — cuộn độc lập */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}

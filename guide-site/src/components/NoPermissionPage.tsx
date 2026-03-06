import { useNavigate } from 'react-router-dom'

/**
 * NoPermissionPage — Hiển thị khi người dùng không có quyền truy cập route.
 * Ví dụ: staff cố vào /admin/portal.
 */

interface NoPermissionPageProps {
  reason?: 'no_role' | 'issuer_mismatch' | 'audience_mismatch' | string
}

export default function NoPermissionPage({ reason }: NoPermissionPageProps) {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card chính */}
        <div className="premium-accordion-wrapper p-6 text-center">
          <div className="premium-light-bar" aria-hidden="true" />

          {/* Biểu tượng cấm */}
          <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center shadow-sm">
            <svg
              className="w-8 h-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"/>
              <path d="m4.9 4.9 14.2 14.2"/>
            </svg>
          </div>

          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Không có quyền truy cập
          </h1>

          <p className="text-sm text-gray-600 mb-6">
            Bạn không có quyền xem trang này. Nội dung này chỉ dành cho người dùng có vai trò phù hợp.
          </p>

          {/* Giải thích */}
          <div className="callout callout-warning text-left mb-6">
            <p className="text-xs leading-relaxed">
              <strong>Lý do:</strong>{' '}
              {reason === 'no_role'
                ? 'Tài khoản của bạn chưa được gán vai trò nào trong hệ thống.'
                : reason === 'issuer_mismatch' || reason === 'audience_mismatch'
                ? 'Token xác thực không thuộc hệ thống này. Vui lòng liên hệ quản trị viên.'
                : 'Vai trò hiện tại của bạn không đủ quyền để truy cập trang này.'}
            </p>
          </div>

          {/* Nút hành động */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn-primary w-full py-2.5 rounded-lg text-sm font-medium"
            >
              Quay về trang chủ
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn-ghost w-full py-2.5 rounded-lg text-sm font-medium"
            >
              Trở lại trang trước
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Cần thay đổi quyền? Liên hệ quản trị viên hệ thống.
        </p>
      </div>
    </div>
  )
}

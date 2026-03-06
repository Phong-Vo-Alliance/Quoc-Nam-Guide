/**
 * NoTokenPage — Hiển thị khi người dùng truy cập trực tiếp mà không có token.
 * Hướng dẫn mở ứng dụng từ phần mềm nội bộ.
 */

interface NoTokenPageProps {
  reason?: 'missing' | 'invalid' | 'expired'
}

const REASON_MESSAGE: Record<NonNullable<NoTokenPageProps['reason']>, string> = {
  missing: 'Không tìm thấy thông tin đăng nhập.',
  invalid: 'Thông tin đăng nhập không hợp lệ.',
  expired: 'Phiên đăng nhập đã hết hạn. Vui lòng mở lại từ ứng dụng.',
}

export default function NoTokenPage({ reason = 'missing' }: NoTokenPageProps) {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card chính */}
        <div className="premium-accordion-wrapper p-6 text-center">
          <div className="premium-light-bar" aria-hidden="true" />

          {/* Biểu tượng khóa */}
          <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-sm">
            <svg
              className="w-8 h-8 text-amber-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>

          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Không thể truy cập
          </h1>

          <p className="text-sm text-gray-600 mb-1">
            {REASON_MESSAGE[reason]}
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Tài liệu nội bộ này chỉ có thể mở từ <strong className="text-gray-700">ứng dụng Quốc Nam</strong>.
          </p>

          {/* Hướng dẫn các bước */}
          <div className="text-left space-y-3 mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Hướng dẫn truy cập
            </p>

            {[
              { step: '1', text: 'Mở ứng dụng Quốc Nam trên máy tính hoặc điện thoại.' },
              { step: '2', text: 'Đăng nhập bằng tài khoản nội bộ của bạn.' },
              { step: '3', text: 'Chọn mục "Cẩm nang / Tài liệu" trong menu ứng dụng.' },
              { step: '4', text: 'Ứng dụng sẽ tự động mở trang hướng dẫn với quyền truy cập đầy đủ.' },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {step}
                </span>
                <p className="text-sm text-gray-700 leading-snug">{text}</p>
              </div>
            ))}
          </div>

          {/* Ghi chú */}
          <div className="callout callout-note text-left">
            <p className="text-xs">
              <strong>Lưu ý:</strong> Nếu bạn đã mở từ ứng dụng nhưng vẫn thấy trang này,
              hãy đăng xuất và đăng nhập lại, sau đó thử lại.
            </p>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Cần hỗ trợ? Liên hệ quản trị viên hệ thống.
        </p>
      </div>
    </div>
  )
}

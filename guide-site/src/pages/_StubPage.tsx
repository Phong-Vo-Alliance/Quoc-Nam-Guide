/**
 * _StubPage — Template stub, không export trực tiếp.
 * Dùng để tạo nhanh các trang chưa có nội dung.
 */
export function createStubPage(title: string, description: string) {
  return function StubPage() {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>

        <div className="premium-accordion-wrapper p-8 text-center">
          <div className="premium-light-bar" aria-hidden="true" />
          <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
            <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" x2="8" y1="13" y2="13"/>
              <line x1="16" x2="8" y1="17" y2="17"/>
              <line x1="10" x2="8" y1="9" y2="9"/>
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">Nội dung đang được chuẩn bị</p>
          <p className="text-xs text-gray-400">Trang này sẽ sớm có đầy đủ hướng dẫn. Vui lòng quay lại sau.</p>
        </div>
      </div>
    )
  }
}

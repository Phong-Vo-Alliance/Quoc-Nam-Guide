import { NavLink } from 'react-router-dom'
import { useAuth } from '@auth/useAuth'
import type { Role } from '@auth/roleResolver'

interface CategoryCard {
  title: string
  description: string
  to: string
  minRole: Role
  icon: React.ReactNode
  color: string
}

const ROLE_LEVEL: Record<Role, number> = { staff: 1, leader: 2, admin: 3 }
function canSee(userRole: Role, minRole: Role) {
  return ROLE_LEVEL[userRole] >= ROLE_LEVEL[minRole]
}

function IconRocket() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2a2.99 2.99 0 0 0-3-3Z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/>
    </svg>
  )
}
function IconGlobe() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}
function IconPhone() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  )
}
function IconHelp() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <path d="M12 17h.01"/>
    </svg>
  )
}
function IconUsers() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}
function IconBarChart() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" x2="12" y1="20" y2="10"/>
      <line x1="18" x2="18" y1="20" y2="4"/>
      <line x1="6" x2="6" y1="20" y2="16"/>
    </svg>
  )
}
function IconShield() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

const CARDS: CategoryCard[] = [
  {
    title: 'Bắt đầu nhanh',
    description: 'Hướng dẫn thiết lập môi trường làm việc và các bước khởi động đầu tiên.',
    to: '/quick-start',
    minRole: 'staff',
    icon: <IconRocket />,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Cổng thông tin Web',
    description: 'Tài liệu hướng dẫn sử dụng hệ thống web nội bộ, các tính năng và luồng xử lý.',
    to: '/web-portal',
    minRole: 'staff',
    icon: <IconGlobe />,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    title: 'Ứng dụng di động',
    description: 'Hướng dẫn cài đặt và sử dụng ứng dụng Quốc Nam trên iOS và Android.',
    to: '/mobile',
    minRole: 'staff',
    icon: <IconPhone />,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    title: 'Câu hỏi thường gặp',
    description: '55 câu hỏi phổ biến nhất và giải đáp từ đội ngũ hỗ trợ kỹ thuật.',
    to: '/faq',
    minRole: 'staff',
    icon: <IconHelp />,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    title: 'Quản lý nhóm',
    description: 'Công cụ và quy trình dành cho trưởng nhóm để quản lý, phân công và theo dõi nhân viên.',
    to: '/leader/team',
    minRole: 'leader',
    icon: <IconUsers />,
    color: 'text-orange-600 bg-orange-50 border-orange-200',
  },
  {
    title: 'Báo cáo & Thống kê',
    description: 'Xem báo cáo hiệu suất, thống kê hoạt động và xuất dữ liệu cho nhóm.',
    to: '/leader/reports',
    minRole: 'leader',
    icon: <IconBarChart />,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
  },
  {
    title: 'Cổng quản trị',
    description: 'Bảng điều khiển toàn hệ thống, quản lý người dùng, vai trò và cấu hình.',
    to: '/admin/portal',
    minRole: 'admin',
    icon: <IconShield />,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
]

export default function HomePage() {
  const auth = useAuth()
  const role: Role = (auth?.valid ? auth.effectiveRole : null) ?? 'staff'

  const visible = CARDS.filter((c) => canSee(role, c.minRole))

  return (
    <div className="space-y-8">
      {/* Tiêu đề trang */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Cẩm nang nội bộ</h1>
        <p className="mt-1 text-sm text-gray-500">
          Chọn mục bên dưới để xem hướng dẫn chi tiết.
        </p>
      </div>

      {/* Lưới danh mục */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((card) => (
          <NavLink
            key={card.to}
            to={card.to}
            className="premium-accordion-wrapper p-5 flex items-start gap-4 cursor-pointer no-underline group"
          >
            <div className="premium-light-bar" aria-hidden="true" />

            {/* Icon */}
            <div className={`flex-none w-11 h-11 rounded-xl border flex items-center justify-center ${card.color}`}>
              {card.icon}
            </div>

            {/* Nội dung */}
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors duration-200">
                {card.title}
              </p>
              <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
                {card.description}
              </p>
            </div>

            {/* Mũi tên */}
            <svg
              className="flex-none w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors duration-200 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </NavLink>
        ))}
      </div>

      {/* Callout chào mừng */}
      <div className="callout callout-tip">
        <p className="text-sm">
          <strong>Mẹo:</strong> Dùng thanh tìm kiếm ở trên hoặc nhấn{' '}
          <kbd className="px-1.5 py-0.5 text-xs border border-current rounded font-sans">Ctrl K</kbd>{' '}
          để tìm nhanh bất kỳ nội dung nào trong cẩm nang.
        </p>
      </div>
    </div>
  )
}

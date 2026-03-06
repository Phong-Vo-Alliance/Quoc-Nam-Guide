import { NavLink } from 'react-router-dom'
import {
  MessageSquare, ClipboardCheck, BookOpen,
  Paperclip, Bell, ShieldCheck, ChevronRight,
  Rocket, HelpCircle,
  ArrowRight,
} from 'lucide-react'
import { useAuth } from '@auth/useAuth'
import type { Role } from '@auth/roleResolver'

interface CategoryCard {
  title: string
  description: string
  to: string
  minRole: Role
  icon: React.ReactNode
  iconBg: string
  iconColor: string
}

interface QuickLink {
  label: string
  to: string
  role: string
  roleColor: string
}

const ROLE_LEVEL: Record<Role, number> = { staff: 1, leader: 2, admin: 3 }
function canSee(userRole: Role, minRole: Role) {
  return ROLE_LEVEL[userRole] >= ROLE_LEVEL[minRole]
}

const CARDS: CategoryCard[] = [
  {
    title: 'Chat nội bộ',
    description: 'Vào nhóm chat, gửi tin nhắn, đính kèm file và xem lịch sử hội thoại.',
    to: '/web/chat-nhom',
    minRole: 'staff',
    icon: <MessageSquare size={18} />,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Công việc (Task)',
    description: 'Xem danh sách công việc, tick checklist và gửi kết quả chờ duyệt.',
    to: '/web/staff-tong-quan',
    minRole: 'staff',
    icon: <ClipboardCheck size={18} />,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Nhật ký công việc',
    description: 'Mở nhật ký, cập nhật tiến độ và gửi ảnh/video minh chứng.',
    to: '/web/mo-nhat-ky',
    minRole: 'staff',
    icon: <BookOpen size={18} />,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    title: 'File / Ảnh / Video',
    description: 'Xem hồ sơ file gắn với task hoặc chat, tải về theo phân quyền.',
    to: '/web/xem-ho-so-file',
    minRole: 'staff',
    icon: <Paperclip size={18} />,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Thông báo & Công cụ',
    description: 'Notification Banner, Bookmark, Todo list và Quick Messages.',
    to: '/web/notification-banner',
    minRole: 'staff',
    icon: <Bell size={18} />,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    title: 'Câu hỏi thường gặp',
    description: 'Các câu hỏi phổ biến về tính năng, quyền truy cập và thao tác hàng ngày.',
    to: '/faq',
    minRole: 'staff',
    icon: <HelpCircle size={18} />,
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-500',
  },
  {
    title: 'Quản trị hệ thống',
    description: 'Tạo user, gán vai trò, quản lý phòng ban và reset mật khẩu.',
    to: '/admin/tao-user',
    minRole: 'admin',
    icon: <ShieldCheck size={18} />,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
]

const QUICK_LINKS: QuickLink[] = [
  { label: 'Staff: 5 phút làm quen với ứng dụng', to: '/quick-start',           role: 'Staff',        roleColor: 'text-blue-600 bg-blue-50' },
  { label: 'Trưởng nhóm: Giao & duyệt task',       to: '/web/leader-tao-task',   role: 'Trưởng nhóm',  roleColor: 'text-amber-600 bg-amber-50' },
  { label: 'Admin: Tạo user & phân quyền',          to: '/admin/tao-user',        role: 'Admin',        roleColor: 'text-emerald-700 bg-emerald-50' },
]

export default function HomePage() {
  const auth = useAuth()
  const role: Role = (auth?.valid ? auth.effectiveRole : null) ?? 'staff'
  const visible = CARDS.filter((c) => canSee(role, c.minRole))

  return (
    <div>
      {/* ── Page header ── */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Rocket size={18} className="text-emerald-500" />
          <h1 className="text-xl font-semibold text-gray-900">Cẩm nang nội bộ</h1>
        </div>
        <p className="text-sm text-gray-500 pl-7">
          Chọn một chủ đề để xem hướng dẫn từng bước có hình minh họa.
        </p>
      </div>

      {/* ── Category cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {visible.map((card) => (
          <NavLink
            key={card.to}
            to={card.to}
            className="group flex items-center gap-4 px-4 py-4 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 hover:shadow-md transition-all duration-150 cursor-pointer no-underline"
          >
            {/* Icon */}
            <div
              className={[
                'flex-none w-10 h-10 rounded-xl flex items-center justify-center',
                card.iconBg,
                card.iconColor,
              ].join(' ')}
            >
              {card.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-[13.5px] font-semibold text-gray-800 group-hover:text-emerald-700 leading-tight transition-colors duration-150">
                {card.title}
              </p>
              <p className="mt-0.5 text-[12px] text-gray-400 leading-snug line-clamp-1">
                {card.description}
              </p>
            </div>

            {/* Arrow */}
            <ChevronRight
              size={15}
              className="flex-none text-gray-300 group-hover:text-emerald-400 transition-colors duration-150"
            />
          </NavLink>
        ))}
      </div>

      {/* ── Quick start section ── */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Bắt đầu nhanh theo vai trò
        </p>
        <div className="flex flex-col gap-1.5">
          {QUICK_LINKS.filter((q) => {
            if (q.role === 'Admin') return canSee(role, 'admin')
            if (q.role === 'Trưởng nhóm') return canSee(role, 'leader')
            return true
          }).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="group flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all duration-150 cursor-pointer no-underline"
            >
              <span
                className={[
                  'flex-none text-[10px] font-semibold px-1.5 py-0.5 rounded',
                  link.roleColor,
                ].join(' ')}
              >
                {link.role}
              </span>
              <span className="flex-1 text-[13px] text-gray-600 group-hover:text-gray-800 transition-colors duration-150">
                {link.label}
              </span>
              <ArrowRight
                size={13}
                className="flex-none text-gray-300 group-hover:text-gray-500 transition-colors duration-150"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

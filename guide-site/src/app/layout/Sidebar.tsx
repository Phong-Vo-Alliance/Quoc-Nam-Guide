import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  Rocket, MessageSquare, ClipboardCheck, BookOpen,
  Paperclip, Bell, HelpCircle, BarChart2,
  ShieldCheck, Settings, ChevronDown,
} from 'lucide-react'
import type { Role } from '@auth/roleResolver'

/* ─────────────────────────────────────────────────
   Types
───────────────────────────────────────────────── */
interface SidebarProps {
  effectiveRole: Role
}

interface NavChild {
  label: string
  to: string
  minRole: Role
}

interface NavItem {
  id: string
  label: string
  /** Chỉ dùng khi KHÔNG có children — điều hướng thẳng đến bài */
  to?: string
  icon: React.ReactNode
  minRole: Role
  group: 'common' | 'leader' | 'admin'
  children?: NavChild[]
}

/* ─────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────── */
const ROLE_LEVEL: Record<Role, number> = { staff: 1, leader: 2, admin: 3 }

function canSee(effectiveRole: Role, minRole: Role) {
  return ROLE_LEVEL[effectiveRole] >= ROLE_LEVEL[minRole]
}

/* ─────────────────────────────────────────────────
   Dữ liệu điều hướng
   Quy tắc:
     • Có children[]  → nút gập/mở, KHÔNG điều hướng
     • Chỉ có `to`    → NavLink thẳng đến bài
───────────────────────────────────────────────── */
const NAV_ITEMS: NavItem[] = [

  // ── COMMON ───────────────────────────────────────
  {
    id: 'quick-start',
    label: 'Bắt đầu nhanh',
    icon: <Rocket size={14} />,
    minRole: 'staff',
    group: 'common',
    children: [
      { label: 'Hướng dẫn nhanh cho Nhân viên',   to: '/quick-start/staff',        minRole: 'staff'  },
      { label: 'Hướng dẫn nhanh cho Trưởng nhóm', to: '/quick-start/leader',       minRole: 'leader' },
      { label: 'Hướng dẫn nhanh cho Quản trị',    to: '/quick-start/admin',        minRole: 'admin'  },
      { label: 'Đăng nhập lần đầu',               to: '/web/dang-nhap',            minRole: 'staff'  },
      // { label: 'Đổi mật khẩu bắt buộc',           to: '/web/doi-mat-khau',         minRole: 'staff'  },
      { label: 'Thuật ngữ hệ thống',              to: '/quick-start/thuat-ngu',    minRole: 'staff'  },
      { label: 'Quy tắc phân quyền',              to: '/quick-start/phan-quyen',   minRole: 'staff'  },
      { label: 'File chỉ xem: bạn xem được gì',  to: '/quick-start/file-chi-xem', minRole: 'staff'  },
    ],
  },
  {
    id: 'chat',
    label: 'Chat nội bộ',
    icon: <MessageSquare size={14} />,
    minRole: 'staff',
    group: 'common',
    children: [
      { label: 'Gửi tin nhắn trong nhóm',  to: '/web/chat-nhom',          minRole: 'staff' },
      { label: 'Đính kèm file trong chat', to: '/web/dinh-kem-file-chat', minRole: 'staff' },
    ],
  },
  {
    id: 'tasks',
    label: 'Công việc',
    icon: <ClipboardCheck size={14} />,
    minRole: 'staff',
    group: 'common',
    children: [
      { label: 'Tổng quan công việc của tôi',  to: '/web/staff-tong-quan',     minRole: 'staff' },
      { label: 'Bắt đầu xử lý task',           to: '/web/staff-bat-dau-xu-ly', minRole: 'staff' },
      { label: 'Tick checklist & lưu tiến độ', to: '/web/staff-checklist',     minRole: 'staff' },
      { label: 'Gửi chờ duyệt',                to: '/web/staff-gui-cho-duyet', minRole: 'staff' },
      { label: 'Xem lại task đã hoàn tất',     to: '/web/xem-task-hoan-tat',   minRole: 'staff' },
    ],
  },
  {
    id: 'journal',
    label: 'Nhật ký công việc',
    icon: <BookOpen size={14} />,
    minRole: 'staff',
    group: 'common',
    children: [
      { label: 'Mở Nhật ký công việc',         to: '/web/mo-nhat-ky',            minRole: 'staff' },
      { label: 'Thêm log & trao đổi',          to: '/web/them-log-nhat-ky',      minRole: 'staff' },
      { label: 'Gửi ảnh/video trong Nhật ký',  to: '/web/gui-anh-video-nhat-ky', minRole: 'staff' },
    ],
  },
  {
    id: 'files',
    label: 'File / Ảnh / Video',
    icon: <Paperclip size={14} />,
    minRole: 'staff',
    group: 'common',
    children: [
      { label: 'Xem hồ sơ file gắn với task', to: '/web/xem-ho-so-file',      minRole: 'staff' },
      { label: 'Đính kèm file trong chat',    to: '/web/dinh-kem-file-chat',   minRole: 'staff' },
    ],
  },
  {
    id: 'tools',
    label: 'Thông báo & Công cụ',
    icon: <Bell size={14} />,
    minRole: 'staff',
    group: 'common',
    children: [
      { label: 'Thông báo Banner',       to: '/web/notification-banner', minRole: 'staff' },
      { label: 'Tin nhắn nhanh',         to: '/web/quick-messages',      minRole: 'staff' },
      { label: 'Bookmark: đánh dấu',     to: '/web/bookmark-danh-dau',   minRole: 'staff' },
      { label: 'Bookmark: xem lại',      to: '/web/bookmark-xem-lai',    minRole: 'staff' },
      { label: 'Danh sách việc cần làm', to: '/web/todo-list',           minRole: 'staff' },
    ],
  },
  {
    id: 'faq',
    label: 'Câu hỏi thường gặp',
    to: '/faq',
    icon: <HelpCircle size={14} />,
    minRole: 'staff',
    group: 'common',
  },

  // ── LEADER ───────────────────────────────────────
  {
    id: 'leader-tasks',
    label: 'Quản lý công việc nhóm',
    icon: <BarChart2 size={14} />,
    minRole: 'leader',
    group: 'leader',
    children: [
      { label: 'Tổng quan tab Công Việc',          to: '/web/leader-tong-quan-cong-viec', minRole: 'leader' },
      { label: 'Tạo task mới',                     to: '/web/leader-tao-task',            minRole: 'leader' },
      { label: 'Giao task cho nhân viên',          to: '/web/leader-giao-task',           minRole: 'leader' },
      { label: 'Đổi người xử lý',                  to: '/web/leader-doi-nguoi-xu-ly',     minRole: 'leader' },
      { label: 'Chuyển trạng thái task',           to: '/web/leader-chuyen-trang-thai',   minRole: 'leader' },
      { label: 'Tiếp nhận thông tin từ tin nhắn',  to: '/web/leader-tiep-nhan-thong-tin', minRole: 'leader' },
      { label: 'Duyệt hoàn tất',                   to: '/web/leader-duyet-hoan-tat',      minRole: 'leader' },
    ],
  },

  // ── ADMIN ─────────────────────────────────────────
  {
    id: 'admin-users',
    label: 'Quản trị người dùng',
    icon: <ShieldCheck size={14} />,
    minRole: 'admin',
    group: 'admin',
    children: [
      { label: 'Tạo user mới & gán vai trò', to: '/admin/tao-user',        minRole: 'admin' },
      { label: 'Khoá/mở khoá user',          to: '/admin/khoa-user',       minRole: 'admin' },
      { label: 'Reset mật khẩu qua ZNS',     to: '/admin/reset-mat-khau',  minRole: 'admin' },
      { label: 'Xử lý khi đổi thiết bị',     to: '/admin/device-binding',  minRole: 'admin' },
      { label: 'Phân quyền tải xuống file',  to: '/admin/phan-quyen-download', minRole: 'admin' },
    ],
  },
  {
    id: 'admin-settings',
    label: 'Cài đặt hệ thống',
    icon: <Settings size={14} />,
    minRole: 'admin',
    group: 'admin',
    children: [
      { label: 'Tạo phòng ban',           to: '/admin/tao-phong-ban',   minRole: 'admin' },
      { label: 'Tạo nhóm chat',           to: '/admin/tao-nhom-chat',   minRole: 'admin' },
      { label: 'Tạo Loại Việc',           to: '/admin/tao-loai-viec',   minRole: 'admin' },
      { label: 'Tạo checklist mặc định',  to: '/admin/tao-checklist',   minRole: 'admin' },
      { label: 'Tạo trạng thái & luồng', to: '/admin/trang-thai-task', minRole: 'admin' },
    ],
  },
]

/* ─────────────────────────────────────────────────
   Group meta
───────────────────────────────────────────────── */
const GROUP_META: Record<NavItem['group'], { label: string; badge?: string; badgeColor?: string }> = {
  common: { label: 'Tài liệu' },
  leader: { label: 'Trưởng nhóm', badge: 'Leader', badgeColor: 'text-amber-600 bg-amber-50' },
  admin:  { label: 'Quản trị',    badge: 'Admin',  badgeColor: 'text-rose-600  bg-rose-50'  },
}

/* ─────────────────────────────────────────────────
   Component
───────────────────────────────────────────────── */
export default function Sidebar({ effectiveRole }: SidebarProps) {
  const location = useLocation()

  // Khởi tạo: mở sẵn mục chứa route hiện tại
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    for (const item of NAV_ITEMS) {
      if (item.children?.some(child => child.to === location.pathname)) {
        initial[item.id] = true
      }
    }
    return initial
  })

  // Tự động mở mục cha khi điều hướng đến bài con
  useEffect(() => {
    for (const item of NAV_ITEMS) {
      if (item.children?.some(child => child.to === location.pathname)) {
        setOpenItems(prev =>
          prev[item.id] ? prev : { ...prev, [item.id]: true }
        )
        break
      }
    }
  }, [location.pathname])

  function toggleItem(id: string) {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  // Lọc theo role
  const visibleItems = NAV_ITEMS.filter(item => canSee(effectiveRole, item.minRole))

  // Gom nhóm
  const groupOrder: NavItem['group'][] = []
  const grouped: Partial<Record<NavItem['group'], NavItem[]>> = {}
  for (const item of visibleItems) {
    if (!grouped[item.group]) {
      grouped[item.group] = []
      groupOrder.push(item.group)
    }
    grouped[item.group]!.push(item)
  }

  return (
    <aside className="flex-none w-[272px] flex flex-col bg-white border-r border-gray-100 overflow-y-auto">
      <nav className="flex-1 px-2 py-3" aria-label="Điều hướng chính">
        {groupOrder.map((group, gi) => {
          const meta = GROUP_META[group]
          return (
            <div key={group} className={gi > 0 ? 'mt-5' : ''}>

              {/* Nhãn nhóm + badge role */}
              <div className="px-2 mb-1 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 select-none">
                  {meta.label}
                </span>
                {meta.badge && (
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${meta.badgeColor}`}>
                    {meta.badge}
                  </span>
                )}
              </div>

              <ul className="space-y-px" role="list">
                {grouped[group]!.map((item) => {
                  const visibleChildren = (item.children ?? []).filter(
                    child => canSee(effectiveRole, child.minRole)
                  )
                  const hasChildren = visibleChildren.length > 0
                  const isOpen = !!openItems[item.id]
                  const hasActiveChild = visibleChildren.some(
                    child => child.to === location.pathname
                  )

                  return (
                    <li key={item.id}>
                      {/* ── Không có children → NavLink thẳng ── */}
                      {!hasChildren ? (
                        <NavLink
                          to={item.to!}
                          end={item.to === '/'}
                          className={({ isActive }) =>
                            ['sidebar-nav-item', isActive ? 'active' : ''].join(' ')
                          }
                        >
                          <span className="flex-none">{item.icon}</span>
                          <span className="truncate">{item.label}</span>
                        </NavLink>

                      ) : (
                        /* ── Có children → nút gập/mở ── */
                        <>
                          <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={isOpen}
                            className={[
                              'sidebar-parent-btn',
                              hasActiveChild && !isOpen ? 'has-active-child' : '',
                            ].join(' ')}
                          >
                            <span className={[
                              'flex-none',
                              hasActiveChild ? 'text-emerald-600' : 'text-gray-400',
                            ].join(' ')}>
                              {item.icon}
                            </span>
                            <span className="flex-1 min-w-0 truncate text-left">
                              {item.label}
                            </span>
                            <ChevronDown
                              size={12}
                              className={[
                                'flex-none ml-1 transition-transform duration-200',
                                hasActiveChild ? 'text-emerald-500' : 'text-gray-400',
                                isOpen ? 'rotate-180' : '',
                              ].join(' ')}
                            />
                          </button>

                          {/* Danh sách bài con */}
                          {isOpen && (
                            <ul className="mt-0.5 mb-1 space-y-px" role="list">
                              {visibleChildren.map(child => (
                                <li key={child.to}>
                                  <NavLink
                                    to={child.to}
                                    className={({ isActive }) =>
                                      ['sidebar-child-item', isActive ? 'active' : ''].join(' ')
                                    }
                                  >
                                    {child.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                  )
                })}
              </ul>

              {gi < groupOrder.length - 1 && (
                <hr className="mt-4 border-gray-100" />
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="flex-none px-4 py-2.5 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 text-center">
          Quốc Nam © {new Date().getFullYear()}
        </p>
      </div>
    </aside>
  )
}

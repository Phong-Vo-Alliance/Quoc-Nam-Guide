import { NavLink } from 'react-router-dom'
import {
  Rocket, MessageSquare, ClipboardCheck, BookOpen,
  Paperclip, Bell, HelpCircle, Users, BarChart2,
  ShieldCheck, Settings,
} from 'lucide-react'
import type { Role } from '@auth/roleResolver'

interface SidebarProps {
  effectiveRole: Role
}

interface NavItem {
  label: string
  to: string
  icon: React.ReactNode
  minRole: Role
  group: 'common' | 'leader' | 'admin'
}

const ROLE_LEVEL: Record<Role, number> = { staff: 1, leader: 2, admin: 3 }
function canSee(effectiveRole: Role, minRole: Role) {
  return ROLE_LEVEL[effectiveRole] >= ROLE_LEVEL[minRole]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Bắt đầu nhanh',       to: '/quick-start',                    icon: <Rocket size={14} />,        minRole: 'staff',  group: 'common' },
  { label: 'Chat nội bộ',          to: '/web/chat-nhom',                  icon: <MessageSquare size={14} />, minRole: 'staff',  group: 'common' },
  { label: 'Công việc (Task)',      to: '/web/staff-tong-quan',            icon: <ClipboardCheck size={14} />,minRole: 'staff',  group: 'common' },
  { label: 'Nhật ký công việc',    to: '/web/mo-nhat-ky',                 icon: <BookOpen size={14} />,      minRole: 'staff',  group: 'common' },
  { label: 'File / Ảnh / Video',   to: '/web/xem-ho-so-file',             icon: <Paperclip size={14} />,     minRole: 'staff',  group: 'common' },
  { label: 'Thông báo & Công cụ',  to: '/web/notification-banner',        icon: <Bell size={14} />,          minRole: 'staff',  group: 'common' },
  { label: 'Câu hỏi thường gặp',   to: '/faq',                            icon: <HelpCircle size={14} />,    minRole: 'staff',  group: 'common' },
  { label: 'Quản lý nhóm',         to: '/web/leader-tong-quan-cong-viec', icon: <Users size={14} />,         minRole: 'leader', group: 'leader' },
  { label: 'Giao & duyệt task',    to: '/web/leader-tao-task',            icon: <BarChart2 size={14} />,     minRole: 'leader', group: 'leader' },
  { label: 'Quản trị hệ thống',    to: '/admin/tao-user',                 icon: <ShieldCheck size={14} />,   minRole: 'admin',  group: 'admin'  },
  { label: 'Cài đặt & Phân quyền', to: '/admin/tao-phong-ban',            icon: <Settings size={14} />,      minRole: 'admin',  group: 'admin'  },
]

const GROUP_META: Record<NavItem['group'], { label: string; badge?: string; badgeColor?: string }> = {
  common: { label: 'Tài liệu' },
  leader: { label: 'Trưởng nhóm', badge: 'Leader', badgeColor: 'text-amber-600 bg-amber-50' },
  admin:  { label: 'Quản trị',    badge: 'Admin',  badgeColor: 'text-rose-600 bg-rose-50'   },
}

export default function Sidebar({ effectiveRole }: SidebarProps) {
  const visibleItems = NAV_ITEMS.filter((item) => canSee(effectiveRole, item.minRole))

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
              {/* Group label + optional role badge */}
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
                {grouped[group]!.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        ['sidebar-nav-item', isActive ? 'active' : ''].join(' ')
                      }
                    >
                      <span className="flex-none">{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
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

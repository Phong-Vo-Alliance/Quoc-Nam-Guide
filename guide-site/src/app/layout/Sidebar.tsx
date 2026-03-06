import { NavLink } from 'react-router-dom'
import type { Role } from '@auth/roleResolver'

interface SidebarProps {
  effectiveRole: Role
}

interface NavItem {
  label: string
  to: string
  icon: React.ReactNode
  /** Vai trò tối thiểu cần có để thấy mục này */
  minRole: Role
  /** Nhóm hiển thị (dùng để vẽ divider) */
  group: 'common' | 'leader' | 'admin'
}

const ROLE_LEVEL: Record<Role, number> = { staff: 1, leader: 2, admin: 3 }

function canSee(effectiveRole: Role, minRole: Role): boolean {
  return ROLE_LEVEL[effectiveRole] >= ROLE_LEVEL[minRole]
}

/* ——— SVG icon nhỏ gọn ——— */
function IconRocket() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2a2.99 2.99 0 0 0-3-3Z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  )
}
function IconGlobe() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}
function IconSmartphone() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  )
}
function IconQuestionCircle() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <path d="M12 17h.01"/>
    </svg>
  )
}
function IconUsers() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}
function IconBarChart() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" x2="12" y1="20" y2="10"/>
      <line x1="18" x2="18" y1="20" y2="4"/>
      <line x1="6" x2="6" y1="20" y2="16"/>
    </svg>
  )
}
function IconShield() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
function IconSettings() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}
function IconDatabase() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
      <path d="M3 12A9 3 0 0 0 21 12"/>
    </svg>
  )
}

/* ——— Danh sách mục điều hướng ——— */
const NAV_ITEMS: NavItem[] = [
  // ----- Nhóm chung (Staff trở lên) -----
  {
    label: 'Bắt đầu nhanh',
    to: '/quick-start',
    icon: <IconRocket />,
    minRole: 'staff',
    group: 'common',
  },
  {
    label: 'Cổng thông tin Web',
    to: '/web-portal',
    icon: <IconGlobe />,
    minRole: 'staff',
    group: 'common',
  },
  {
    label: 'Ứng dụng di động',
    to: '/mobile',
    icon: <IconSmartphone />,
    minRole: 'staff',
    group: 'common',
  },
  {
    label: 'Câu hỏi thường gặp',
    to: '/faq',
    icon: <IconQuestionCircle />,
    minRole: 'staff',
    group: 'common',
  },

  // ----- Nhóm Trưởng nhóm -----
  {
    label: 'Quản lý nhóm',
    to: '/leader/team',
    icon: <IconUsers />,
    minRole: 'leader',
    group: 'leader',
  },
  {
    label: 'Báo cáo & Thống kê',
    to: '/leader/reports',
    icon: <IconBarChart />,
    minRole: 'leader',
    group: 'leader',
  },

  // ----- Nhóm Admin -----
  {
    label: 'Cổng quản trị',
    to: '/admin/portal',
    icon: <IconShield />,
    minRole: 'admin',
    group: 'admin',
  },
  {
    label: 'Cài đặt hệ thống',
    to: '/admin/settings',
    icon: <IconSettings />,
    minRole: 'admin',
    group: 'admin',
  },
  {
    label: 'Dữ liệu & Phân quyền',
    to: '/admin/data',
    icon: <IconDatabase />,
    minRole: 'admin',
    group: 'admin',
  },
]

const GROUP_LABEL: Record<NavItem['group'], string> = {
  common: 'Tài liệu',
  leader: 'Trưởng nhóm',
  admin: 'Quản trị',
}

/**
 * Sidebar — điều hướng trái, lọc mục theo effectiveRole.
 */
export default function Sidebar({ effectiveRole }: SidebarProps) {
  const visibleItems = NAV_ITEMS.filter((item) => canSee(effectiveRole, item.minRole))

  // Gom nhóm theo group, giữ thứ tự xuất hiện
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
    <aside className="flex-none w-56 flex flex-col bg-white border-r border-gray-200 overflow-y-auto">
      {/* Phần điều hướng */}
      <nav className="flex-1 px-2 py-4 space-y-5" aria-label="Điều hướng chính">
        {groupOrder.map((group, gi) => (
          <div key={group}>
            {/* Tiêu đề nhóm */}
            <p className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400 select-none">
              {GROUP_LABEL[group]}
            </p>

            <ul className="space-y-0.5" role="list">
              {grouped[group]!.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        'sidebar-nav-item',
                        isActive ? 'active' : '',
                      ].join(' ')
                    }
                    end={item.to === '/'}
                  >
                    <span className="flex-none">{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Divider giữa các nhóm (trừ nhóm cuối) */}
            {gi < groupOrder.length - 1 && (
              <hr className="mt-4 border-gray-100" />
            )}
          </div>
        ))}
      </nav>

      {/* Chân sidebar */}
      <div className="flex-none px-4 py-3 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 text-center">
          Quốc Nam © {new Date().getFullYear()}
        </p>
      </div>
    </aside>
  )
}

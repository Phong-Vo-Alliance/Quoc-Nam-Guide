const ROLE_PRIORITY = ['admin', 'leader', 'staff'] as const

export type Role = (typeof ROLE_PRIORITY)[number]

/**
 * Resolve the highest-priority role available for the user.
 */
export function resolveEffectiveRole(roles: string[]): Role | null {
  for (const role of ROLE_PRIORITY) {
    if (roles.includes(role)) return role
  }
  return null
}

/**
 * Check if a user role can view content protected by contentRole.
 */
export function canViewRole(effectiveRole: Role, contentRole: Role): boolean {
  const level: Record<Role, number> = { staff: 1, leader: 2, admin: 3 }
  return level[effectiveRole] >= level[contentRole]
}

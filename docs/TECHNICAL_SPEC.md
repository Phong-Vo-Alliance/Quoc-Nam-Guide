# Technical Specification — Guide Site QuocNam
**Dành cho:** Developer  
**Cập nhật lần cuối:** 2026-03-04  

---

## 1. Tech Stack

| Thành phần | Công nghệ | Phiên bản khuyến nghị |
|-----------|----------|----------------------|
| Build tool | Vite | ^5.x |
| UI framework | React | ^18.x |
| Language | TypeScript | ^5.x |
| Content | MDX | ^3.x |
| Styling | Tailwind CSS | ^3.x |
| Search | Fuse.js | ^7.x |
| Routing | React Router | ^6.x |
| MDX processor | @mdx-js/rollup | ^3.x |

---

## 2. Biến môi trường

```bash name=.env.example
# Domain của guide site
VITE_GUIDE_DOMAIN=guide.company.com

# JWT claim field cho role (đúng với VegaIdentity)
VITE_JWT_ROLE_CLAIM=http://schemas.microsoft.com/ws/2008/06/identity/claims/role

# Issuer & Audience để validate JWT (optional nhưng nên có)
VITE_JWT_ISSUER=VegaIdentity
VITE_JWT_AUDIENCE=VegaClients
```

> **Lưu ý:** Không có `VITE_GUIDE_SECRET` vì dùng JWT trực tiếp từ hệ thống.  
> Quản lý file `.env` bởi DevOps. Không commit `.env` thực tế lên repo.

---

## 3. Auth Module

### 3.1 tokenHandler.ts

```typescript name=src/auth/tokenHandler.ts
const SESSION_KEY = 'guide_token'

/**
 * Đọc token từ URL (?t=), lưu sessionStorage, xóa khỏi URL.
 * Gọi 1 lần duy nhất khi app khởi động.
 */
export function initTokenFromURL(): void {
  const params = new URLSearchParams(window.location.search)
  const token = params.get('t')

  if (token) {
    sessionStorage.setItem(SESSION_KEY, token)
    // Xóa token khỏi URL — không còn trong browser history
    window.history.replaceState({}, '', window.location.pathname)
  }
}

export function getStoredToken(): string | null {
  return sessionStorage.getItem(SESSION_KEY)
}

export function clearToken(): void {
  sessionStorage.removeItem(SESSION_KEY)
}
```

### 3.2 tokenDecoder.ts

```typescript name=src/auth/tokenDecoder.ts
const ROLE_CLAIM = import.meta.env.VITE_JWT_ROLE_CLAIM
  ?? "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"

export type GuideUser = {
  email: string
  tenantId: string
  roles: string[]   // đã normalize lowercase
  exp: number
}

/**
 * Decode JWT payload (KHÔNG verify signature — client-side only).
 * Đủ cho internal system 50 users.
 */
export function decodeToken(token: string): GuideUser | null {
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return null

    const payload = JSON.parse(atob(parts[1]))

    // Lấy roles, luôn normalize về lowercase array
    const rawRoles = payload[ROLE_CLAIM]
    const roles: string[] = Array.isArray(rawRoles)
      ? rawRoles.map((r: string) => r.toLowerCase())
      : rawRoles
      ? [String(rawRoles).toLowerCase()]
      : []

    return {
      email: payload.email ?? '',
      tenantId: payload.tenant_id ?? '',
      roles,
      exp: payload.exp ?? 0,
    }
  } catch {
    return null
  }
}
```

### 3.3 roleResolver.ts

```typescript name=src/auth/roleResolver.ts
// Thứ tự ưu tiên: Admin > Leader > Staff
const ROLE_PRIORITY = ['admin', 'leader', 'staff'] as const
export type Role = typeof ROLE_PRIORITY[number]

/**
 * Resolve role cao nhất mà user có.
 * Ví dụ: ["admin", "leader"] → "admin"
 */
export function resolveEffectiveRole(roles: string[]): Role | null {
  for (const role of ROLE_PRIORITY) {
    if (roles.includes(role)) return role
  }
  return null
}

/**
 * Kiểm tra user có quyền xem nội dung của role không.
 * Admin thấy tất cả, Leader thấy staff+leader, Staff chỉ thấy staff.
 */
export function canViewRole(
  effectiveRole: Role,
  contentRole: Role
): boolean {
  const level: Record<Role, number> = { staff: 1, leader: 2, admin: 3 }
  return level[effectiveRole] >= level[contentRole]
}
```

### 3.4 accessGate.tsx

```typescript name=src/auth/accessGate.tsx
import { decodeToken } from './tokenDecoder'
import { resolveEffectiveRole } from './roleResolver'
import { getStoredToken } from './tokenHandler'

export type TokenValidationResult =
  | { valid: true; email: string; effectiveRole: Role }
  | { valid: false; reason: 'missing' | 'expired' | 'invalid' | 'no_role' }

export function validateStoredToken(): TokenValidationResult {
  const token = getStoredToken()
  if (!token) return { valid: false, reason: 'missing' }

  const user = decodeToken(token)
  if (!user) return { valid: false, reason: 'invalid' }

  const nowSeconds = Math.floor(Date.now() / 1000)
  if (user.exp < nowSeconds) return { valid: false, reason: 'expired' }

  const effectiveRole = resolveEffectiveRole(user.roles)
  if (!effectiveRole) return { valid: false, reason: 'no_role' }

  return { valid: true, email: user.email, effectiveRole }
}
```

### 3.5 useAuth.ts

```typescript name=src/auth/useAuth.ts
import { useState, useEffect } from 'react'
import { initTokenFromURL } from './tokenHandler'
import { validateStoredToken, TokenValidationResult } from './accessGate'

export function useAuth() {
  const [authState, setAuthState] = useState<TokenValidationResult | null>(null)

  useEffect(() => {
    // Chỉ chạy 1 lần khi app mount
    initTokenFromURL()
    const result = validateStoredToken()
    setAuthState(result)
  }, [])

  return authState
}
```

---

## 4. Search Module

### 4.1 normalizeVN.ts

```typescript name=src/search/normalizeVN.ts
/**
 * Chuyển tiếng Việt có dấu → không dấu, lowercase.
 * "Tạo công việc" → "tao cong viec"
 */
export function normalizeVN(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim()
}
```

### 4.2 synonymMap.ts

```typescript name=src/search/synonymMap.ts
export const synonymMap: Record<string, string[]> = {
  "cong viec":    ["task", "viec"],
  "nhat ky":      ["log", "thread log"],
  "loai viec":    ["worktype", "work type"],
  "nhom chat":    ["group chat", "phong ban"],
  "checklist":    ["danh sach kiem tra", "buoc"],
  "danh dau":     ["bookmark", "ghim"],
  "viec can lam": ["todo", "todo list"],
  "tiep nhan":    ["nhan viec"],
  "phan quyen":   ["quyen"],
  "thiet bi":     ["device", "may", "dien thoai"],
  "mat khau":     ["password", "login"],
  "dang nhap":    ["login", "sign in"],
}
```

### 4.3 Fuse.js config

```typescript name=src/search/fuseSearch.ts
import Fuse from 'fuse.js'
import { normalizeVN } from './normalizeVN'
import searchIndex from '../content-index/search-index.json'

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'normalizedTitle', weight: 0.4 },
    { name: 'tags', weight: 0.3 },
    { name: 'normalizedContent', weight: 0.2 },
    { name: 'headings', weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
})

export function search(query: string, role: Role) {
  const normalizedQuery = normalizeVN(query)

  return fuse
    .search(normalizedQuery)
    .filter(result => {
      // Chỉ trả về kết quả mà role được phép xem
      const contentRoles: Role[] = result.item.roles
      return contentRoles.some(r => canViewRole(role, r))
    })
    .slice(0, 10) // Top 10 kết quả
}
```

---

## 5. Build Script — Sinh Search Index

```typescript name=scripts/build-search-index.ts
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { normalizeVN } from '../src/search/normalizeVN'

// Chạy sau khi build MDX: npm run build:index
// Output: src/content-index/search-index.json

interface SearchRecord {
  slug: string
  title: string
  normalizedTitle: string
  roles: string[]
  tags: string[]
  headings: string[]
  excerpt: string
  normalizedContent: string
  lastUpdated: string
  appVersion: string
}

function buildIndex(): void {
  const records: SearchRecord[] = []
  const contentDirs = ['quick-start', 'web', 'mobile', 'admin', 'faq']

  for (const dir of contentDirs) {
    const dirPath = join('src/content', dir)
    const files = readdirSync(dirPath).filter(f => f.endsWith('.mdx'))

    for (const file of files) {
      const filePath = join(dirPath, file)
      const raw = readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)

      const slug = `/${dir}/${file.replace('.mdx', '')}`
      const excerpt = content.replace(/[#*\[\]`]/g, '').slice(0, 200)

      records.push({
        slug,
        title: data.title ?? '',
        normalizedTitle: normalizeVN(data.title ?? ''),
        roles: data.roles ?? [],
        tags: data.tags ?? [],
        headings: extractHeadings(content),
        excerpt,
        normalizedContent: normalizeVN(excerpt),
        lastUpdated: data.lastUpdated ?? '',
        appVersion: data.appVersion ?? '',
      })
    }
  }

  writeFileSync(
    'src/content-index/search-index.json',
    JSON.stringify(records, null, 2)
  )
  console.log(`✅ Search index: ${records.length} bài`)
}

function extractHeadings(content: string): string[] {
  return content
    .split('\n')
    .filter(line => line.startsWith('## ') || line.startsWith('### '))
    .map(line => line.replace(/^#+\s/, ''))
}

buildIndex()
```

---

## 6. Vite Config

```typescript name=vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ],
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@content': '/src/content',
      '@auth': '/src/auth',
      '@search': '/src/search',
    },
  },
})
```

---

## 7. Package.json Scripts

```json name=package.json
{
  "scripts": {
    "dev": "vite",
    "build": "npm run build:index && tsc && vite build",
    "build:index": "tsx scripts/build-search-index.ts",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx"
  }
}
```

---

## 8. Checklist trước khi deploy

### Setup lần đầu
- [ ] Copy `.env.example` → `.env`, điền giá trị thực
- [ ] Confirm `VITE_JWT_ROLE_CLAIM` khớp với JWT thực tế
- [ ] Test token flow: Web App → Guide Site → role hiển thị đúng
- [ ] Test truy cập trực tiếp (không có token) → hiện trang hướng dẫn
- [ ] Test Admin route với role staff/leader → redirect đúng

### Mỗi lần deploy
- [ ] `npm run build` chạy thành công (bao gồm build:index)
- [ ] Search index được tạo mới
- [ ] Smoke test: login, mở guide, search 1 từ khóa
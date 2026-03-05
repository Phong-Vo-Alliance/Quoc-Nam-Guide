# Guide Site Blueprint — QuocNam Phase 1A
**Phiên bản:** 1.0.0  
**Ngày finalize:** 2026-03-04  
**Khởi tạo:** Phong Võ  
**Khách hàng:** Công Ty Quốc Nam  

---

## Mục lục

1. [Tổng quan sản phẩm](#1-tổng-quan-sản-phẩm)
2. [Nguyên tắc UX](#2-nguyên-tắc-ux)
3. [Kiến trúc hệ thống](#3-kiến-trúc-hệ-thống)
4. [Xác thực & Phân quyền](#4-xác-thực--phân-quyền)
5. [Kiến trúc nội dung](#5-kiến-trúc-nội-dung)
6. [Search](#6-search)
7. [UI & Brand](#7-ui--brand)
8. [Chuẩn ảnh & GIF](#8-chuẩn-ảnh--gif)
9. [Cấu trúc repo & thư mục](#9-cấu-trúc-repo--thư-mục)
10. [Governance](#10-governance)
11. [MVP Roadmap](#11-mvp-roadmap)
12. [Quyết định đã chốt](#12-quyết-định-đã-chốt)

---

## 1. Tổng quan sản phẩm

### Mục tiêu
- User non-IT tìm được hướng dẫn trong **10–30 giây**
- Bài hướng dẫn **ngắn, từng bước**, có ảnh minh họa
- Guide site **độc lập** với hệ thống chính — deploy riêng, không ảnh hưởng Web/Admin app

### Đối tượng sử dụng
| Vai trò | Mô tả | Thiết bị chính |
|---------|-------|---------------|
| **Staff** | Nhân viên xử lý công việc | Mobile (tài xế, kho) + Web |
| **Leader** | Trưởng nhóm giao việc & duyệt | Web + Mobile khi di chuyển |
| **Admin** | Quản trị hệ thống | Web |

### Phạm vi Phase 1A
Bám sát scope hệ thống Chat Portal & Quản Lý Công Việc Phase 1A:
- Admin Portal: phòng ban, nhóm chat, loại việc, user, checklist, trạng thái
- Web Portal: chat nội bộ, công việc, nhật ký, file, công cụ (bookmark/todo/quick msg/banner)
- Mobile App: chat, công việc của tôi, checklist, nhật ký, upload file

---

## 2. Nguyên tắc UX

### Viết theo tác vụ
- **"Tôi muốn làm gì?"** — không viết theo tên module kỹ thuật
- Ví dụ đúng: *"Cách giao task cho nhân viên"*
- Ví dụ sai: *"Hướng dẫn sử dụng WorkType Assignment"*

### Ít chữ — nhiều hình
- Mỗi bài: **3–7 bước**
- Mỗi bước: **1 ảnh** minh họa
- GIF demo 10–20 giây ở đầu bài (nếu có)

### Ngôn ngữ
- **Tiếng Việt 100%** — toàn bộ nội dung và giao diện guide site
- Không dùng tiếng Anh, kể cả thuật ngữ kỹ thuật (dùng từ đã định nghĩa trong bài Thuật ngữ)

---

## 3. Kiến trúc hệ thống

### Tổng quan

```
┌─────────────────┐      ┌─────────────────┐
│   Web App       │      │   Admin App     │
│  (repo riêng)   │      │  (repo riêng)   │
└────────┬────────┘      └────────┬────────┘
         │                        │
         │  Mở tab mới kèm JWT    │
         │  guide.company.com/?t= │
         └───────────┬────────────┘
                     ▼
         ┌───────────────────────┐
         │      Guide Site       │
         │  (repo riêng biệt)    │
         │  Vite + React + MDX   │
         │  Static hosting       │
         └───────────────────────┘
```

### Thành phần
| Thành phần | Chi tiết |
|-----------|---------|
| **Framework** | Vite + React + MDX |
| **Search** | Fuse.js (client-side, miễn phí) |
| **Styling** | Tailwind CSS + reuse `App.css` + `index.css` từ brand hiện có |
| **Theme** | Light mode only |
| **Hosting** | Static (Nginx / S3 / Cloudflare Pages) |
| **Domain** | `guide.company.com` (internal) |
| **Repo** | Riêng biệt, deploy độc lập |
| **Offline** | Không cần — yêu cầu có internet |

### Luồng mở Guide

```
1. User đã đăng nhập Web App / Admin App (có JWT)
2. User click nút "Hướng dẫn" trong menu/header
3. App mở tab mới: guide.company.com/?t=<JWT>
4. Guide site:
   a. Đọc token từ URL (?t=)
   b. Lưu vào sessionStorage
   c. XÓA token khỏi URL (window.history.replaceState)
   d. Decode JWT → lấy roles
   e. Resolve effective role (Admin > Leader > Staff)
   f. Render menu + nội dung theo role
5. Khi đóng tab → sessionStorage tự xóa
6. Mở tab mới → cần token mới từ app
```

---

## 4. Xác thực & Phân quyền

### Cấu trúc JWT (đã xác nhận từ hệ thống VegaIdentity)

```json
{
  "email": "user@quoc-nam.com",
  "tenant_id": "00000000-0000-0000-0000-000000000001",
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": [
    "Admin",
    "Leader"
  ],
  "exp": 1803696003,
  "iss": "VegaIdentity",
  "aud": "VegaClients"
}
```

### Thông tin quan trọng về JWT
| Field | Giá trị | Ghi chú |
|-------|---------|---------|
| Role field | `http://schemas.microsoft.com/ws/2008/06/identity/claims/role` | Tên field dài, dùng bracket notation |
| Role type | Array of string | Một user có thể có nhiều role |
| Role values | `"Admin"` / `"Leader"` / `"Staff"` | Normalize về lowercase khi xử lý |
| Issuer | `VegaIdentity` | |
| Audience | `VegaClients` | |

### Quy tắc ưu tiên role
```
Admin > Leader > Staff

Ví dụ:
  ["Admin", "Leader"] → effectiveRole = "admin" → thấy toàn bộ nội dung
  ["Leader"]          → effectiveRole = "leader" → thấy Staff + Leader
  ["Staff"]           → effectiveRole = "staff"  → chỉ thấy Staff
```

### Phân quyền nội dung
| Role | Nội dung được xem |
|------|------------------|
| **staff** | Quick Start Staff, Web Portal (Staff), Mobile, FAQ |
| **leader** | Tất cả của Staff + Web Portal (Leader), Mobile (Leader) |
| **admin** | Toàn bộ, bao gồm Admin Portal Guide |

### Xử lý token không hợp lệ
| Trường hợp | Lý do | Hiển thị |
|-----------|-------|---------|
| Không có token | `missing` | "Vui lòng mở hướng dẫn từ ứng dụng" |
| Token hết hạn | `expired` | "Phiên truy cập đã hết hạn. Vui lòng mở lại từ ứng dụng" |
| Token sai định dạng | `invalid` | "Đường dẫn không hợp lệ. Vui lòng mở lại từ ứng dụng" |
| Không có role hợp lệ | `no_role` | "Tài khoản chưa được phân quyền. Liên hệ quản trị viên" |

### Lưu ý bảo mật
- Guide site **decode JWT client-side** (không verify signature) — chấp nhận được với internal system 50 users
- Admin guide chỉ chứa hướng dẫn thao tác UI, không chứa thông tin nhạy cảm
- Token được xóa khỏi URL ngay sau khi đọc → không lưu trong browser history
- `sessionStorage` tự xóa khi đóng tab

---

## 5. Kiến trúc nội dung

### Top Navigation
```
Trang chủ | Quick Start | Web Portal | Mobile | Admin Portal* | FAQ | 🔍 Tìm kiếm
                                                  * chỉ admin thấy
```

### Trang chủ — 6 thẻ hành động
```
💬 Chat nội bộ
📋 Công việc (Task)
🧾 Nhật ký công việc
📎 File / Ảnh / Video
🔔 Thông báo & Công cụ
⚙️ Quản trị hệ thống    ← chỉ admin thấy
```

### Routes
```
/                     → Trang chủ
/quick-start/         → Quick Start
/web/                 → Web Portal guides
/mobile/              → Mobile App guides
/admin/               → Admin Portal guides  [guard: admin only]
/faq/                 → FAQ
/khong-co-quyen       → Trang không có quyền
/                     → Trang hướng dẫn mở lại từ app (no token)
```

### Danh mục 55 bài
Xem file `SITEMAP.md` để biết chi tiết từng bài và trạng thái.

---

## 6. Search

### Engine: Fuse.js
- Miễn phí, MIT license
- Chạy hoàn toàn client-side
- Phù hợp cho ~55 bài, không cần dịch vụ trả phí

### Index build-time
```
/src/content-index/search-index.json

Mỗi record gồm:
  - title
  - headings
  - tags
  - excerpt
  - roles
  - slug
  - normalizedTitle     (tiếng Việt không dấu)
  - normalizedContent   (tiếng Việt không dấu)
```

### Hỗ trợ tiếng Việt không dấu
```
"Tạo công việc" → "tao cong viec"
"nhật ký"       → "nhat ky"
"đánh dấu"      → "danh dau"
```

### Synonym map
```typescript
const synonymMap = {
  "công việc":  ["task", "việc"],
  "nhật ký":    ["log", "thread log"],
  "loại việc":  ["worktype", "work type"],
  "nhóm chat":  ["group chat", "phòng ban"],
  "checklist":  ["danh sách kiểm tra", "bước"],
  "đánh dấu":   ["bookmark", "ghim"],
  "việc cần làm": ["todo", "todo list"],
  "tiếp nhận":  ["nhận việc"],
  "phân quyền": ["quyền"],
  "thiết bị":   ["device", "máy", "điện thoại"],
}
```

---

## 7. UI & Brand

### Reuse từ hệ thống hiện có
- `App.css` — layout `#root`, card `.premium-accordion-wrapper` (glass emerald)
- `index.css` — Tailwind base, CSS variables, light mode

### Light mode only
- Xóa `color-scheme: light dark` trong `:root`
- Comment out toàn bộ `.dark` class
- Giữ `background-color: #ffffff`, `color: #213547`

### UI Components cần xây dựng
| Component | Mô tả |
|-----------|-------|
| Header | Logo + Search bar + nút menu |
| Category Cards | Dùng `.premium-accordion-wrapper` — 6 thẻ trang chủ |
| Sidebar | Left sidebar — navigation theo role |
| Content Area | MDX render zone |
| TOC | Right — Table of Contents (optional Phase 1) |
| Callout Blocks | Note / Warning / Tip theo brand color |
| No Token Page | Trang hướng dẫn mở lại từ app |
| No Permission Page | Trang thông báo không có quyền |
| Search Modal | Overlay search với kết quả real-time |

---

## 8. Chuẩn ảnh & GIF

### Ảnh tĩnh (screenshots)
| Thuộc tính | Giá trị |
|-----------|---------|
| Format | WebP (ưu tiên) hoặc PNG |
| Desktop width | 1280px |
| Mobile width | 390px |
| Highlight | Viền hoặc mũi tên m��u emerald `#10B981` |
| Naming | `[bài-số]-[tên-bài]-buoc-[số-bước].webp` |

**Ví dụ:** `12-giao-task-buoc-01.webp`

### GIF demo
| Thuộc tính | Giá trị |
|-----------|---------|
| Độ dài | 10–20 giây |
| FPS | 15fps |
| Width | 800px |
| Âm thanh | Không |
| Naming | `[bài-số]-[tên-bài]-demo.gif` |

**Ví dụ:** `12-giao-task-demo.gif`

### Vị trí lưu ảnh
```
src/content/
  web/
    images/
      12-giao-task-buoc-01.webp
      12-giao-task-demo.gif
  mobile/
    images/
  admin/
    images/
```

### Quy trình update ảnh khi UI thay đổi
1. Xác định bài bị ảnh hưởng (dựa vào `appVersion` trong frontmatter)
2. Chụp ảnh UI mới theo đúng format chuẩn
3. Thay file ảnh cũ (giữ nguyên tên file)
4. Cập nhật `lastUpdated` và `appVersion` trong frontmatter
5. Dùng AI hỗ trợ chỉnh sửa nội dung MDX nếu cần

---

## 9. Cấu trúc repo & thư mục

```
guide-site/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── routes/
│   │   │   ├── index.tsx          # Trang chủ
│   │   │   ├── web/               # Web Portal routes
│   │   │   ├── mobile/            # Mobile routes
│   │   │   ├── admin/             # Admin routes (guarded)
│   │   │   └── faq/               # FAQ routes
│   │   └── layout/
│   │       ├── RootLayout.tsx
│   │       ├── Sidebar.tsx
│   │       └── Header.tsx
│   │
│   ├── components/
│   │   ├── CategoryCard.tsx
│   │   ├── CalloutBlock.tsx       # Note / Warning / Tip
│   │   ├── SearchModal.tsx
│   │   ├── TOC.tsx
│   │   ├── NoTokenPage.tsx
│   │   └── NoPermissionPage.tsx
│   │
│   ├── auth/
│   │   ├── tokenHandler.ts        # Đọc, lưu, xóa token khỏi URL
│   │   ├── tokenDecoder.ts        # Decode JWT, lấy roles
│   │   ├── roleResolver.ts        # Resolve effective role
│   │   ├── accessGate.tsx         # Route guard component
│   │   └── useAuth.ts             # React hook
│   │
│   ├── search/
│   │   ├── fuseSearch.ts          # Fuse.js config + search logic
│   │   ├── normalizeVN.ts         # Tiếng Việt không dấu
│   │   └── synonymMap.ts          # Synonym map tiếng Việt
│   │
│   ├── content/
│   │   ├── quick-start/
│   │   │   ├── images/
│   │   │   ├── 01-quick-start-staff.mdx
│   │   │   ├── 02-quick-start-leader.mdx
│   │   │   └── ...
│   │   ├── web/
│   │   │   ├── images/
│   │   │   ├── 07-dang-nhap-lan-dau.mdx
│   │   │   └── ...
│   │   ├── mobile/
│   │   │   ├── images/
│   │   │   └── ...
│   │   ├── admin/
│   │   │   ├── images/
│   │   │   └── ...
│   │   └── faq/
│   │       └── 55-cau-hoi-thuong-gap.mdx
│   │
│   ├── content-index/
│   │   └── search-index.json      # Auto-generated khi build
│   │
│   ├── styles/
│   │   ├── App.css                # Reuse từ hệ thống chính
│   │   └── index.css              # Reuse từ hệ thống chính
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── scripts/
│   └── build-search-index.ts      # Script sinh search-index.json
│
├── .env.example                   # Template biến môi trường
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
│
├── BLUEPRINT.md                   # ← File này
├── SITEMAP.md                     # Danh sách 55 bài + trạng thái
├── CONTENT_GUIDE.md               # Hướng dẫn viết bài cho BA/QA
└── TECHNICAL_SPEC.md              # Spec kỹ thuật cho developer
```

---

## 10. Governance

### Phân công
| Vai trò | Trách nhiệm |
|---------|------------|
| **PM** | Owner nội dung, duyệt publish, quản lý `VITE_GUIDE_SECRET` |
| **BA** | Viết bài, cập nhật khi nghiệp vụ thay đổi |
| **QA** | Review bài trước publish, test luồng |
| **DevOps** | Quản lý `VITE_GUIDE_SECRET`, deploy pipeline |
| **Dev** | Maintain guide site codebase |

### Checklist trước khi publish bài
- [ ] Đúng role (`roles` trong frontmatter)
- [ ] Đúng điều kiện quyền truy cập
- [ ] Ảnh rõ nét, có highlight vùng thao tác
- [ ] Có phần "Lỗi thường gặp" (ít nhất 2 lỗi)
- [ ] Có phần "Bài liên quan" (ít nhất 2 link)
- [ ] `lastUpdated` và `appVersion` đã cập nhật

### Quy trình update khi UI thay đổi
1. Dev/BA xác định bài bị ảnh hưởng → tạo task update
2. Chụp ảnh UI mới theo chuẩn (xem mục 8)
3. Dùng AI hỗ trợ chỉnh nội dung MDX
4. QA review → PM duyệt → merge & deploy

### Quản lý Secret
- `VITE_GUIDE_SECRET`: PM + DevOps quản lý
- Khi cần đổi secret: PM thông báo Dev Web App, Dev Admin App, DevOps
- Đổi đồng thời trên cả 3 nơi: Web App env, Admin App env, Guide Site env

---

## 11. MVP Roadmap

### MVP Phase 1 — Launch (15 bài core)
**Mục tiêu:** Đủ để user bắt đầu sử dụng hệ thống

| Ưu tiên | Bài | Vai trò |
|---------|-----|---------|
| P0 | 07. Đăng nhập lần đầu | Tất cả |
| P0 | 08. Đổi mật khẩu bắt buộc | Tất cả |
| P0 | 01. Quick Start cho Staff | Staff |
| P0 | 02. Quick Start cho Leader | Leader |
| P0 | 09. Vào nhóm chat và gửi tin nhắn | Tất cả |
| P0 | 17. Staff: Tổng quan "Công việc của tôi" | Staff |
| P0 | 18. Staff: Bắt đầu xử lý task | Staff |
| P0 | 19. Staff: Tick checklist & lưu tiến độ | Staff |
| P0 | 20. Staff: Gửi "Chờ duyệt" | Staff |
| P0 | 12. Leader: Tạo task mới | Leader |
| P0 | 13. Leader: Giao task cho Staff | Leader |
| P0 | 48. Tạo user mới & gán phòng ban/vai trò | Admin |
| P0 | 50. Reset mật khẩu user qua ZNS | Admin |
| P0 | 06. File chỉ xem: bạn xem được gì | Tất cả |
| P0 | 55. Câu hỏi thường gặp & xử lý lỗi | Tất cả |

### MVP Phase 2 — Mở rộng (20 bài tiếp theo)
Hoàn thiện Web Portal + Mobile core.

### MVP Phase 3 — Hoàn chỉnh (20 bài còn lại)
Admin Portal đầy đủ + các công cụ nâng cao.

---

## 12. Quyết định đã chốt

| # | Hạng mục | Quyết định |
|---|----------|-----------|
| 1 | Ngôn ngữ | Tiếng Việt 100% |
| 2 | Theme | Light mode only |
| 3 | Offline | Không cần |
| 4 | Repo | Riêng biệt, deploy độc lập |
| 5 | Token source | JWT sẵn có từ Web/Admin App |
| 6 | Token trên URL | Xóa ngay sau khi đọc (`replaceState`) |
| 7 | Token storage | `sessionStorage` (tự xóa khi đóng tab) |
| 8 | Token check | 1 lần duy nhất khi mở tab |
| 9 | Token hết hạn khi đọc | Không bị khóa lại |
| 10 | JWT field role | `http://schemas.microsoft.com/.../role` (array) |
| 11 | Role values | `Admin` / `Leader` / `staff` (normalize lowercase) |
| 12 | Role priority | Admin > Leader > Staff |
| 13 | Bảo mật guard | Client-side route guard + token gate |
| 14 | Admin guide | Chỉ hướng dẫn UI, client-side guard là đủ |
| 15 | Secret quản lý | PM + DevOps |
| 16 | Search | Fuse.js client-side |
| 17 | Tiếng Việt search | Normalize không dấu + synonym map |
| 18 | Ảnh format | WebP/PNG, naming convention chuẩn |
| 19 | Ảnh update | AI-assisted khi UI thay đổi |
| 20 | `lastUpdated` | Hiển thị cuối mỗi bài |
| 21 | Tổng số bài | 55 bài |
| 22 | MVP launch | 15 bài P0 |
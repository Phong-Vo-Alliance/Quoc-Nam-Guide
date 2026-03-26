# Hướng Dẫn Chụp Hình — Bài 23: Mở Nhật ký công việc

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/23-mo-nhat-ky.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Chuẩn bị trước khi chụp

### Tài khoản

Bài này có thể dùng bất kỳ tài khoản nào (Staff / Leader / Admin). Dùng **Staff** để nhất quán với chuỗi bài 17–22. Nếu tài khoản Staff không có đủ nội dung nhật ký, dùng Leader cũng được.

### Dữ liệu test — quan trọng nhất của bài này

Panel Nhật ký sẽ trông rỗng tuếch nếu task chưa có lịch sử. Cần có task với **nhật ký phong phú**:

| Cần có | Mô tả |
|--------|-------|
| **Tin nhắn hệ thống** | ≥ 2 dòng pill xám ghi thay đổi trạng thái (ví dụ: "đã chuyển sang Đang xử lý", "đã chuyển sang Chờ duyệt") |
| **Tin nhắn thường** | ≥ 1 tin nhắn bubble từ người dùng (Staff hoặc Leader đã nhắn trước đó) |
| **Nhóm ngày** | Tốt nhất có cả 2 nhóm ngày (hôm nay + hôm qua) để thấy date separator |

**Cách tạo dữ liệu nhật ký nhanh nhất:**
1. Task đã đi qua flow: Chưa xử lý → Đang xử lý → Chờ duyệt (3 thay đổi trạng thái = 3 tin nhắn hệ thống)
2. Staff và/hoặc Leader đã nhắn ít nhất 1 tin nhắn trong nhật ký task đó
3. Nếu cần nhóm 2 ngày: dùng task đã tạo từ hôm qua trở về trước

> **Mẹo:** Dùng lại task từ chuỗi bài 18–20 (đã có 2–3 tin nhắn hệ thống). Trước khi chụp, nhắn thêm 1 tin nhắn thường trong nhật ký để panel trông có nội dung thực tế.

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Zoom | 100% |
| Độ rộng cửa sổ | **1280px** |

### Công cụ highlight

- Màu viền: **#10B981** (emerald)
- Dạng: viền bo góc (2–3px), mũi tên cho phần tử nhỏ
- **1 điểm highlight** mỗi ảnh
- Không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Thẻ task với nút Nhật ký chưa bấm

**Tên file:** `23-mo-nhat-ky-buoc-01.webp`

**Trạng thái màn hình:**
- Tab **Công Việc** đang mở
- Thẻ task hiển thị đầy đủ (bất kỳ trạng thái nào — Chưa xử lý, Đang xử lý, Chờ duyệt đều được)
- Nút **Nhật ký** ở hàng dưới thẻ: `border border-emerald-300 text-emerald-700`, **chưa bấm**
- Panel Nhật ký **chưa mở**

**Bố cục thẻ task cần thấy:**
```
┌──────────────────────────────────────────────┐
│                          [Đang xử lý]        │
│ Kiểm tra quy trình mẫu                       │
│ Nhóm: Phát triển                             │
│ ████████████████████ 100%                    │
│ ▼ Checklist (5/5)                            │
│                                              │
│ 24/03 09:15  [Nhật ký] ◄────── HIGHLIGHT    [Chờ duyệt]
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **nút "Nhật ký"** (nút có viền xanh lá nhạt, chữ xanh lá đậm)

**Ghi chú về nút Nhật ký:**
- Nút có class: `border border-emerald-300 text-emerald-700 hover:bg-emerald-50`
- Kích thước nhỏ: `px-2 h-[26px] text-[11px]` — cao 26px, chữ cỡ 11px
- **Không có icon** — chỉ có chữ "Nhật ký"
- **Luôn hiển thị** dù task đang ở trạng thái nào (todo / doing / need_to_verified / finished)
- Nằm **bên trái** trong hàng nút — nút hành động khác (Bắt đầu / Chờ duyệt / Hoàn tất) nằm bên phải

**Chọn task nào để chụp:**
Dùng task đang ở trạng thái **Đang xử lý** để nút Nhật ký + Chờ duyệt đều hiển thị trong cùng một ảnh — giúp người dùng biết vị trí tương quan của 2 nút.

---

### 📸 Ảnh 2 — Panel Nhật ký vừa mở, nhìn tổng quan

**Tên file:** `23-mo-nhat-ky-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm nút Nhật ký
- Panel **TaskLogThreadSheet** đang mở, phủ lên màn hình chính
- Panel hiển thị đầy đủ: header + body có tin nhắn + composer ở dưới

**Bố cục panel cần thấy:**
```
┌──────────────────────────────────────────────────────────┐
│ HEADER (border-b, nền trắng)                             │
│  [MessageSquareText icon]                                │
│  Kiểm tra quy trình mẫu           (tên task, truncated)  │
│  Trạng thái: Đang xử lý • Giao cho: Nguyễn Văn A   [✕]  │
│  • Hạn xử lý: 14:00 25/03  ← (nếu có dueDate)          │
├──────────────────────────────────────────────────────────┤
│ BODY (bg-gray-50, overflow-y-auto)                       │
│                                                          │
│  ── 23/03/2026 ────────────────── ← date separator      │
│                                                          │
│  ⚙ [Tên] đã chuyển trạng thái... sang Đang xử lý.      │  ← SYS pill xám
│                                                          │
│  ── 24/03/2026 ────────────────── ← date separator      │
│                                                          │
│  ⚙ [Tên] đã chuyển trạng thái... sang Chờ duyệt.       │  ← SYS pill xám
│                                                          │
│  [Avatar] Nguyễn Văn A           14:32                  │  ← bubble trái
│  Anh xem thử giúp em với ạ                              │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ COMPOSER (border-t, bg-white)                            │
│  [📎] [🖼️]  Nhập nội dung để trao đổi...  [⚡] [→]     │
│  Tin nhắn trong nhật ký sẽ được lưu riêng...            │
└──────────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **toàn bộ panel** (từ header đến footer composer)

**3 điểm cần thấy rõ:**
1. **Header** — icon `MessageSquareText`, tên task, trạng thái + người giao, nút ✕
2. **Cả 2 loại tin nhắn** — ít nhất 1 pill hệ thống xám + 1 bubble thường
3. **Composer** với placeholder _"Nhập nội dung để trao đổi về công việc này…"_ và dòng chú thích nhỏ

---

### 📸 Ảnh 3 — Zoom vào body panel, thấy rõ 2 loại tin nhắn

**Tên file:** `23-mo-nhat-ky-buoc-03.webp`

**Trạng thái màn hình:**
- Panel vẫn mở (giống Ảnh 2)
- **Crop/zoom vào phần body** của panel để thấy rõ nội dung

**Bố cục chi tiết body cần thấy:**
```
┌──────────────────────────────────────────────────────────┐
│  ── 23/03/2026 ──────────────────────────────────────── │  ← date separator
│                                                          │
│     ┌───────────────────────────────────────────────┐   │
│     │  ⚙  Nguyễn Văn A đã chuyển trạng thái công   │   │  ← SYS pill
│     │     việc [Tên task] sang Đang xử lý.   14:32  │   │    căn giữa, nền xám
│     └───────────────────────────────────────────────┘   │
│                                                          │
│  ── 24/03/2026 ──────────────────────────────────────── │  ← date separator
│                                                          │
│     ┌───────────────────────────────────────────────┐   │
│     │  ⚙  Nguyễn Văn A đã chuyển trạng thái công   │   │  ← SYS pill
│     │     việc [Tên task] sang Chờ duyệt.    09:15  │   │
│     └───────────────────────────────────────────────┘   │
│                                                          │
│  [Ảnh đại diện]                                          │
│  Nguyễn Văn A                                 09:20     │  ← bubble thường (trái)
│  ┌─────────────────────────────────────┐                │
│  │  Anh xem thử giúp em với ạ          │                │
│  └─────────────────────────────────────┘                │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **1 tin nhắn hệ thống (pill xám)** bất kỳ

**Điểm cần thấy rõ:**
1. **Date separator** — đường kẻ ngang với nhãn ngày ở giữa (`MessageDateSeparator`)
2. **Pill hệ thống** (SYS) — hình viên thuốc căn giữa, nền xám nhạt, chữ nhỏ
3. **Bubble thường** — có avatar tròn bên trái, tên người gửi phía trên, nội dung trong bubble

**Mô tả kỹ pill SYS:**
- Layout: căn giữa toàn chiều ngang
- Nội dung: `⚙ [Tên đầy đủ] đã chuyển trạng thái công việc [tên task] sang [trạng thái].`
- Giờ gửi: hiển thị nhỏ bên phải trong pill
- Nền: `bg-gray-100` hoặc tương tự (xám rất nhạt)
- Border: `rounded-full` hoặc `rounded-lg`

---

### 📸 Ảnh 4 — Header panel + nút ✕ chuẩn bị đóng

**Tên file:** `23-mo-nhat-ky-buoc-04.webp`

**Trạng thái màn hình:**
- Panel vẫn mở
- **Zoom/crop vào header panel** — phần trên cùng của panel
- Chuột đang **rê vào nút ✕** (hover state: `hover:bg-gray-100 hover:text-gray-700`)

**Bố cục header cần thấy:**
```
┌──────────────────────────────────────────────────────────┐
│  [💬 icon]                                               │
│  Kiểm tra quy trình mẫu              (tên task)          │
│  Trạng thái: Đang xử lý • Giao cho: Nguyễn Văn A   [✕]◄─── HIGHLIGHT
│  • Hạn xử lý: 14:00 25/03                               │
└──────────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **nút ✕** (góc phải trên header, `rounded-full p-1.5`)

**Nội dung header chi tiết:**
| Dòng | Nội dung | Ghi chú |
|------|---------|---------|
| Icon + Tên task | `MessageSquareText` + tên task (truncate nếu > 80 ký tự) | Font semibold xám đậm |
| Dòng meta | "Trạng thái: **[label]** • Giao cho: **[tên]**" | Text xs, xám nhạt |
| Hạn xử lý | "• Hạn xử lý: HH:MM DD/MM" | Chỉ hiện nếu task có `dueDate` |
| Nút đóng | ✕ (`X` icon từ lucide-react) | Tròn, hover xám |

**Ghi chú:** Nếu task không có `dueDate` thì dòng "Hạn xử lý" không xuất hiện — header chỉ có 2 dòng. Vẫn bình thường, cứ chụp.

---

## Quy trình chụp theo thứ tự

```
Bước 1 → Đăng nhập tài khoản Staff
          Mở nhóm chat → tab Công Việc
          Tìm thẻ task "Đang xử lý" đã có nhật ký phong phú
          Panel Nhật ký CHƯA mở
          → Chụp Ảnh 1 (highlight nút "Nhật ký")
          ↓
Bước 2 → Bấm nút "Nhật ký"
          Panel TaskLogThreadSheet mở ra
          Kiểm tra: header rõ, có cả SYS pill + bubble thường, composer ở dưới
          → Chụp Ảnh 2 (highlight toàn bộ panel)
          ↓
Bước 3 → Panel vẫn mở
          Zoom vào phần body (crop bớt header/composer)
          Đảm bảo thấy: date separator + pill SYS + bubble thường
          → Chụp Ảnh 3 (highlight 1 pill SYS)
          ↓
Bước 4 → Panel vẫn mở
          Rê chuột vào nút ✕ ở header
          → Chụp Ảnh 4 (highlight nút ✕)
          ↓
Bước 5 → Done ✅
```

---

## Checklist trước khi nộp

```
□ Đúng 4 ảnh, đúng tên file
□ Kích thước: 1280px chiều ngang
□ Format: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm highlight màu #10B981
□ Ảnh 1: thẻ task + nút "Nhật ký" rõ ràng, panel CHƯA mở
□ Ảnh 2: panel đầy đủ (header + body + composer), có ≥ 1 SYS pill + ≥ 1 bubble thường
□ Ảnh 3: zoom body — thấy rõ date separator + pill xám SYS + bubble thường
□ Ảnh 4: header panel với nút ✕ được highlight
□ Pill SYS phải là dạng viên thuốc căn giữa (KHÔNG phải bubble trái/phải)
□ Dòng chú thích composer "Tin nhắn trong nhật ký sẽ được lưu riêng..." thấy được trong Ảnh 2
□ Tên task và tên người dùng là dữ liệu test trung tính
□ Ảnh rõ nét, không mờ
□ Lưu vào đúng thư mục: guide-site/src/content/web/images/
```

## Vị trí lưu ảnh

```
Quoc-Nam-Guide/
└── guide-site/
    └── src/
        └── content/
            └── web/
                └── images/
                    ├── 23-mo-nhat-ky-buoc-01.webp  ← thẻ task + nút Nhật ký
                    ├── 23-mo-nhat-ky-buoc-02.webp  ← panel toàn cảnh
                    ├── 23-mo-nhat-ky-buoc-03.webp  ← zoom body: SYS pill + bubble
                    └── 23-mo-nhat-ky-buoc-04.webp  ← header + nút ✕
```

---

## Giải phẫu Panel Nhật ký (TaskLogThreadSheet)

```
┌────────────────────────────────────────────────────────────────┐
│ HEADER  (border-b border-gray-200, bg-white, px-4 py-3)        │
│  flex items-start gap-3                                        │
│  ┌────┐  Tên task (max 80 ký tự, sau đó "…")    [✕ rounded]  │
│  │ 💬 │  Trạng thái: [label] • Giao cho: [tên]               │
│  └────┘  • Hạn xử lý: HH:MM DD/MM  ← chỉ khi có dueDate     │
├────────────────────────────────────────────────────────────────┤
│ BODY  (flex-1 overflow-y-auto, px-4 py-3, bg-gray-50)          │
│                                                                │
│  [Loading spinner] — khi đang fetch từ API                     │
│                                                                │
│  [Empty state] — "Chưa có trao đổi nào..."                     │
│                                                                │
│  [Date separator] ── DD/MM/YYYY ──                             │
│  [SYS pill] — căn giữa, nền xám nhạt (contentType: "SYS")     │
│  [Regular bubble] — avatar + bubble trái/phải                  │
│  [Load more button] — "Tải tin nhắn cũ hơn" (khi có cursor)   │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ QUOTED REPLY PREVIEW  (nếu đang reply) — border-t bg-gray-50  │
│ FILE PREVIEW  (nếu đã chọn file đính kèm)                      │
├────────────────────────────────────────────────────────────────┤
│ COMPOSER  (border-t border-gray-200, bg-white, px-4 py-3)      │
│  [📎] [🖼️]  [input mention]  [⚡ quick msg]  [→ send]         │
│  "Tin nhắn trong nhật ký sẽ được lưu riêng cho task này,      │
│   không làm rối hội thoại chính."  — text-[10px] text-gray-400│
└────────────────────────────────────────────────────────────────┘
```

**Ghi chú về nút Quick Message (⚡):**
Nút `MessageSquareText` (⚡) chỉ hiện khi người dùng có **tin nhắn nhanh** được lưu sẵn trong hệ thống (`quickMessageCount > 0`). Nếu chưa có tin nhắn nhanh → nút ẩn hoàn toàn. Không cần lo lắng nếu nút này không xuất hiện trong ảnh.

---

## Phân biệt 2 loại tin nhắn trong nhật ký

| Loại | Hình dạng | Vị trí | Nội dung |
|------|-----------|--------|---------|
| **Tin nhắn hệ thống** (SYS) | Pill / viên thuốc, bo tròn | Căn giữa toàn chiều ngang | Ghi lại sự kiện tự động: chuyển trạng thái, tick checklist |
| **Tin nhắn thường** | Bubble chat có avatar | Trái (người khác) / Phải (mình) | Nội dung người dùng tự nhắn |

> **Quan trọng khi kiểm tra ảnh:** Ảnh 3 BẮT BUỘC phải thấy cả 2 loại — nếu chỉ thấy 1 loại thì cần chuẩn bị thêm dữ liệu test.

---

## Ghi chú bổ sung

### Nếu task không có tin nhắn thường nào
Trước khi chụp, đăng nhập tài khoản Staff và nhắn 1–2 tin nhắn trong nhật ký của task đó. Refresh lại trang rồi mở nhật ký để chụp.

### Ảnh 3 có thể crop từ Ảnh 2
Nếu Ảnh 2 đã thấy rõ cả body, có thể crop lấy phần body từ Ảnh 2 làm Ảnh 3 — tiết kiệm thời gian.

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong repo `Quoc-Nam-Guide`.

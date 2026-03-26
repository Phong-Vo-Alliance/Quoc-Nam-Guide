# Hướng Dẫn Chụp Hình — Bài 22: Xem lại task đã hoàn tất

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/22-xem-task-hoan-tat.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-23

---

## Chuẩn bị trước khi chụp

### Tài khoản chụp

Bài này dành cho **cả Staff và Leader/Admin** nên có thể chụp bằng tài khoản nào cũng được. Tuy nhiên:

| Tài khoản | Entry point đến modal | Khuyến nghị |
|-----------|----------------------|-------------|
| **Staff** | Cuộn xuống mục **Chờ Duyệt** → bấm nút nhỏ | ✅ Dùng để chụp — entry point đơn giản hơn, phù hợp với flow bài viết |
| **Leader** (tab Của tôi) | Cuộn xuống cuối danh sách Của tôi → bấm nút có số lượng | 📌 Chỉ dùng nếu không có tài khoản Staff đủ dữ liệu |

> **Quyết định:** Chụp toàn bộ bằng tài khoản **Staff** để nhất quán với các bài 17–20 trước đó.

### Dữ liệu test bắt buộc

Tài khoản Staff dùng để chụp phải có **ít nhất 4 task đã Hoàn thành** (`status.code = "finished"`), và phải có task hoàn thành ở **ít nhất 2 ngày khác nhau**:

| Cần có | Số lượng | Ngày hoàn thành |
|--------|---------|-----------------|
| Task Hoàn thành | 2–3 task | Hôm nay (23/03/2026) |
| Task Hoàn thành | 1–2 task | Ngày hôm qua hoặc trước đó |

**Lý do cần 2 ngày:** Modal nhóm task theo ngày — cần thấy ít nhất 2 nhóm ngày để minh họa tính năng grouping, tránh ảnh trông đơn điệu.

**Cách tạo task đã Hoàn thành (nếu chưa có):**
1. Tài khoản Leader tạo task → giao cho Staff
2. Staff: Bắt đầu → tick checklist → Chờ duyệt
3. Leader: Duyệt task (bấm **Hoàn tất**) → task chuyển sang `finished`
4. Lặp lại 3–4 lần, đảm bảo có task hoàn thành ở 2 ngày khác nhau

> **Mẹo nhanh:** Nếu vừa chụp bài 20 hôm nay, Leader duyệt ngay → có 1 nhóm "Hôm nay". Sau đó dùng DevTools chỉnh `Date` giả hoặc nhờ Leader tạo thêm task cũ trong DB để có nhóm ngày hôm qua.
>
> **Hoặc đơn giản hơn:** Đợi 1 ngày sau khi tạo task hôm nay — chụp vào ngày hôm sau khi đã có cả 2 nhóm ngày.

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Zoom | 100% |
| Độ rộng cửa sổ | **1280px** |

### Công cụ highlight

- Màu viền: **#10B981** (emerald)
- Dạng: viền bo góc (2–3px); mũi tên cho phần tử nhỏ
- **1 điểm highlight** mỗi ảnh
- Không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Tab Công Việc, cuộn xuống thấy nút "Xem tất cả"

**Tên file:** `22-xem-task-hoan-tat-buoc-01.webp`

**Trạng thái màn hình:**
- Tab **Công Việc** đang mở (active)
- Màn hình đã **cuộn xuống** để thấy mục **Chờ Duyệt** với nội dung bên trong
- Cuối mục Chờ Duyệt: nút chữ nhỏ màu xanh **"Xem tất cả công việc đã hoàn thành"** đang hiển thị
- Nút chưa được bấm

**Bố cục cột phải cần thấy:**
```
┌──────────────────────────────────────────────────┐
│  (Phần trên: mục Công Việc Của Tôi — đã cuộn)   │
├──────────────────────────────────────────────────┤
│  ✏️ Chờ Duyệt                          [∧]       │
│  ┌──────────────────────────────────────────┐    │
│  │                          [Chờ duyệt]    │    │
│  │ Kiểm tra quy trình mẫu                  │    │
│  │ Nhóm: Phát triển                         │    │
│  │ 23/03 09:15  [Nhật ký]                   │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│    Xem tất cả công việc đã hoàn thành  ◄─────────┼── HIGHLIGHT
└──────────────────────────────────────────────────┘
```

**Highlight:** Mũi tên màu #10B981 chỉ vào nút **"Xem tất cả công việc đã hoàn thành"** (chữ nhỏ màu xanh `brand-600`, căn phải, cuối mục Chờ Duyệt)

**Ghi chú thêm:**
- Nút này là `text-xs font-medium text-brand-600` — rất nhỏ, dễ bị bỏ qua. Dùng **mũi tên** thay vì viền để chỉ vào nút này vì nút quá nhỏ để viền bo góc trông đẹp.
- Nếu không có task nào trong mục Chờ Duyệt lúc chụp → không sao, accordion Chờ Duyệt vẫn hiện, nút "Xem tất cả" vẫn có.
- Đảm bảo accordion Chờ Duyệt đang **mở rộng** (expanded, chevron ▼) để nút "Xem tất cả" hiển thị.

---

### 📸 Ảnh 2 — Modal vừa mở, nhìn tổng quan toàn bộ

**Tên file:** `22-xem-task-hoan-tat-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm nút "Xem tất cả công việc đã hoàn thành"
- Modal **"Công Việc Đã Hoàn Thành"** đang mở, phủ lên nền tối mờ (`bg-black/30`)
- Modal căn giữa màn hình, kích thước `max-w-[560px]` × `h-[80vh]`
- Header modal: gradient nhạt `from-brand-50 to-emerald-50` + icon 📋 + tiêu đề "Công Việc Đã Hoàn Thành" + nút ✕
- Body: danh sách task đang hiển thị, có ít nhất **2 nhóm ngày**

**Bố cục modal:**
```
┌─────────────────────────────────────────────────────────┐
│  Nền tối mờ (backdrop)                                  │
│                                                         │
│   ┌─────────────────────────────────────────────────┐   │
│   │  📋 Công Việc Đã Hoàn Thành           [✕]      │   │  ← header gradient nhạt
│   ├─────────────────────────────────────────────────┤   │
│   │                                                 │   │
│   │  📅 Hôm nay - 23/03/2026  (2)                  │   │  ← nhóm ngày 1
│   │    ┌─────────────────────────────────────────┐ │   │
│   │    │ Kiểm tra quy trình mẫu                  │ │   │
│   │    │ Hoàn tất lúc 14:32           ✓ 5/5 mục  │ │   │
│   │    │ [Phát triển]                             │ │   │
│   │    └─────────────────────────────────────────┘ │   │
│   │    (thẻ task thứ 2...)                          │   │
│   │                                                 │   │
│   │  📅 22/03/2026  (2)                            │   │  ← nhóm ngày 2
│   │    (thẻ task...)                                │   │
│   │                                                 │   │
│   ├─────────────────────────────────────────────────┤   │
│   │                    [Đóng]                       │   │  ← footer
│   └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **toàn bộ modal** (cả hộp thoại, không bao gồm nền tối mờ)

**Điểm cần thấy rõ:**
1. Header gradient nhạt (xanh dương nhạt → xanh lá nhạt) — đặc trưng của modal này
2. **Ít nhất 2 nhóm ngày** — "📅 Hôm nay - DD/MM" và "📅 DD/MM/YYYY"
3. Mỗi nhóm có số lượng trong ngoặc — ví dụ `(2)`
4. Nút **Đóng** ở footer

---

### 📸 Ảnh 3 — Zoom vào nội dung modal, thấy rõ thẻ task

**Tên file:** `22-xem-task-hoan-tat-buoc-03.webp`

**Trạng thái màn hình:**
- Modal vẫn đang mở (giống Ảnh 2)
- Chụp **zoom vào phần body modal** — crop bớt viền ngoài để thẻ task hiển thị rõ hơn
- Phải thấy rõ **ít nhất 1 thẻ task hoàn chỉnh** với đầy đủ 3 dòng:
  - Dòng 1: **Tên task** (chữ `text-sm font-medium text-gray-800`)
  - Dòng 2: **Hoàn tất lúc HH:MM** (bên trái) + **✓ N/N mục** (bên phải, màu `emerald-600`)
  - Dòng 3: **Tag Loại Việc** (ví dụ: `[Phát triển]`, nền xám nhạt)

**Bố cục thẻ task cần thấy rõ:**
```
┌──────────────────────────────────────────────┐
│  📅 Hôm nay - 23/03/2026  (2)               │  ← header nhóm ngày
│                                              │
│    ┌────────────────────────────────────┐    │
│    │ Kiểm tra quy trình mẫu             │    │  ← tên task (chữ đậm vừa)
│    │ Hoàn tất lúc 14:32    ✓ 5/5 mục   │    │  ← giờ + checklist count
│    │ [Phát triển]                        │    │  ← tag Loại Việc
│    └────────────────────────────────────┘    │
│    ┌────────────────────────────────────┐    │
│    │ Cập nhật tài liệu hướng dẫn        │    │
│    │ Hoàn tất lúc 10:15                 │    │  ← không có checklist → không hiện ✓
│    │ [Phát triển]                        │    │
│    └────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **1 thẻ task hoàn chỉnh** (thẻ đầu tiên trong nhóm Hôm nay)

**Ghi chú về nội dung thẻ task:**
- **"✓ N/N mục"** chỉ hiện khi task có checklist (`t.checklist && t.checklist.length > 0`). Nếu task không có checklist → dòng 2 chỉ hiện "Hoàn tất lúc HH:MM" mà không có phần bên phải. Cố gắng dùng task **có checklist** để ảnh đầy đủ thông tin hơn.
- Tag Loại Việc (`t.workTypeName`) hiện trong dòng 3 màu `bg-gray-100 text-gray-600`. Nếu task không có workTypeName → không hiện dòng này — bình thường.
- Thẻ task có `hover:shadow-md transition-shadow` — rê chuột vào thẻ để thấy shadow nhẹ đẹp hơn khi chụp.

---

### 📸 Ảnh 4 — Bấm nút Đóng để thoát modal

**Tên file:** `22-xem-task-hoan-tat-buoc-04.webp`

**Trạng thái màn hình:**
- Modal vẫn đang mở
- Chuột **đang rê vào nút "Đóng"** ở footer (để thấy hover state: `hover:text-gray-700`)
- Hoặc: chuột đang rê vào nút **✕** ở header góc phải trên

**2 lựa chọn chụp:**

**Option A — Highlight nút Đóng ở footer:**
```
┌─────────────────────────────────────┐
│  (nội dung modal phía trên)         │
├─────────────────────────────────────┤
│           [Đóng] ◄── HIGHLIGHT      │  ← footer: bg-gray-50
└─────────────────────────────────────┘
```

**Option B — Highlight nút ✕ ở header:**
```
┌─────────────────────────────────────────────┐
│  📋 Công Việc Đã Hoàn Thành        [✕] ◄──── HIGHLIGHT
├─────────────────────────────────────────────┤
│  (nội dung modal)                           │
└─────────────────────────────────────────────┘
```

**Khuyến nghị:** Dùng **Option A** (nút Đóng ở footer) — rõ ràng và dễ thấy hơn trong ảnh.

**Highlight:** Viền màu #10B981 quanh **nút "Đóng"** ở footer modal (hoặc nút ✕ nếu dùng Option B)

**Ghi chú:** Đây là ảnh cuối, chỉ cần cho người dùng thấy cách thoát modal. Không cần thấy nhiều nội dung, quan trọng là thấy rõ nút Đóng và footer `bg-gray-50`.

---

## Quy trình chụp theo thứ tự

```
Bước 1 → Đăng nhập tài khoản Staff
          Mở nhóm chat → tab Công Việc
          Cuộn xuống để thấy mục Chờ Duyệt (đang mở rộng)
          Nhìn thấy nút "Xem tất cả công việc đã hoàn thành" ở cuối mục
          → Chụp Ảnh 1 (mũi tên chỉ vào nút nhỏ)
          ↓
Bước 2 → Bấm nút "Xem tất cả công việc đã hoàn thành"
          Modal "Công Việc Đã Hoàn Thành" bật lên
          Kiểm tra có ≥ 2 nhóm ngày
          → Chụp Ảnh 2 (toàn bộ modal, highlight viền modal)
          ↓
Bước 3 → Không di chuyển gì — modal vẫn mở
          Zoom vào phần body để thấy thẻ task chi tiết hơn
          (Có thể crop ảnh Ảnh 2 hoặc chụp lại với viewport gần hơn)
          → Chụp Ảnh 3 (zoom vào 1-2 thẻ task, highlight 1 thẻ)
          ↓
Bước 4 → Rê chuột vào nút "Đóng" ở footer
          → Chụp Ảnh 4 (highlight nút Đóng)
          ↓
Bước 5 → Done ✅
```

> **Lưu ý:** Ảnh 3 có thể là **crop của Ảnh 2** (zoom vào phần body) thay vì chụp lại. Đây là cách tiết kiệm thời gian nhất, miễn là chất lượng ảnh đủ rõ ở kích thước 1280px.

---

## Checklist trước khi nộp

```
□ Đúng 4 ảnh, đúng tên file
□ Kích thước: 1280px chiều ngang (Ảnh 3 có thể hẹp hơn nếu crop — OK)
□ Format: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm highlight màu #10B981
□ Ảnh 1: thấy nút "Xem tất cả công việc đã hoàn thành" với mũi tên chỉ vào
□ Ảnh 2: modal mở + header gradient + ≥ 2 nhóm ngày + nút Đóng ở footer
□ Ảnh 3: thẻ task rõ với đủ 3 dòng (tên / giờ+checklist / tag loại việc)
□ Ảnh 4: nút Đóng hoặc ✕ được highlight rõ ràng
□ Modal có ≥ 2 nhóm ngày (Hôm nay + ít nhất 1 ngày trước)
□ Tên task test trung tính
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
                    ├── 22-xem-task-hoan-tat-buoc-01.webp  ← nút Xem tất cả
                    ├── 22-xem-task-hoan-tat-buoc-02.webp  ← modal toàn cảnh
                    ├── 22-xem-task-hoan-tat-buoc-03.webp  ← zoom thẻ task
                    └── 22-xem-task-hoan-tat-buoc-04.webp  ← nút Đóng
```

---

## Giải phẫu modal "Công Việc Đã Hoàn Thành"

Tham khảo để kiểm tra ảnh trước khi nộp:

```
┌────────────────────────────────────────────────────────────────┐
│ HEADER                                                         │
│  bg-gradient-to-r from-brand-50 to-emerald-50                 │
│  📋 Công Việc Đã Hoàn Thành                        [✕]        │
├────────────────────────────────────────────────────────────────┤
│ BODY  (overflow-y-auto, px-6 py-4)                             │
│                                                                │
│  ┌── NHÓM NGÀY ─────────────────────────────────────────────┐  │
│  │  📅 Hôm nay - DD/MM/YYYY  (N)                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  ml-4  ← thụt vào 16px so với header nhóm ngày                │
│  ┌── THẺ TASK ────────────────────────────────────────────┐    │
│  │  border border-gray-200, rounded-lg, shadow-sm         │    │
│  │  px-3 py-2.5                                           │    │
│  │                                                        │    │
│  │  [Dòng 1] text-sm font-medium text-gray-800            │    │
│  │    Tên task (truncated nếu dài)                        │    │
│  │                                                        │    │
│  │  [Dòng 2] flex justify-between text-xs text-gray-500   │    │
│  │    Trái: "Hoàn tất lúc HH:MM" (font-medium gray-700)   │    │
│  │    Phải: "✓ N/N mục" (emerald-600, text-[10px])        │    │
│  │                                                        │    │
│  │  [Dòng 3] text-[10px]                                  │    │
│  │    [Tên Loại Việc] px-1.5 py-0.5 bg-gray-100 gray-600  │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ FOOTER  (border-t bg-gray-50, text-center)                     │
│              [Đóng]   text-xs text-gray-500                    │
└────────────────────────────────────────────────────────────────┘
```

---

## Sự khác biệt Staff vs Leader khi vào modal

| | Staff | Leader (tab Của tôi) |
|--|--|--|
| Entry point | Cuối mục **Chờ Duyệt** | Cuối danh sách tab **Của tôi** |
| Nhãn nút | "Xem tất cả công việc đã hoàn thành" | "Xem tất cả công việc đã hoàn thành (N →)" |
| Icon trong header modal | `ClipboardList` 📋 | `UserIcon` 👤 |
| Nội dung modal | Task `finished` giao cho Staff | Task `finished` giao cho Leader |
| Layout modal | Giống nhau hoàn toàn | Giống nhau hoàn toàn |

> Chụp bằng Staff → icon header modal là 📋. Chụp bằng Leader → icon là 👤. Nếu thấy icon sai → đang dùng nhầm tài khoản.

---

## Ghi chú bổ sung

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong repo `Quoc-Nam-Guide`.

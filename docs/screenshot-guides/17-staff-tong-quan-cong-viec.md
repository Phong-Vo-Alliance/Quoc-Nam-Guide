# Hướng Dẫn Chụp Hình — Bài 17: Staff — Tổng quan "Công việc của tôi"

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/17-staff-tong-quan-cong-viec.mdx`
**Số ảnh cần chụp:** 5 ảnh
**Cập nhật lần cuối:** 2026-03-25

---

## Chuẩn bị trước khi chụp

### Tài khoản & dữ liệu test (RẤT QUAN TRỌNG)

Bài này cần **dữ liệu thật** trong hệ thống để ảnh có nội dung thực tế, không bị trống.

Trước khi chụp, kiểm tra tài khoản **Staff** đang có:

| Khu vực cần có dữ liệu | Số lượng tối thiểu |
|---|---|
| Task trạng thái **Chưa xử lý** (Chưa bắt đầu) | Ít nhất **1 task** |
| Task trạng thái **Đang xử lý** (có checklist) | Ít nhất **1 task có checklist 3–5 mục, một vài mục đã tick** |
| Task trạng thái **Chờ Duyệt** | Ít nhất **1 task** |
| Task trạng thái **Hoàn thành** | Ít nhất **2 task** (để modal lịch sử có nội dung) |

Nếu chưa có đủ, nhờ Leader tạo task test và giao cho tài khoản Staff đang dùng.

### Thiết lập trình duyệt
| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Zoom | 100% |
| Độ rộng cửa sổ | **1280px** |
| Chế độ | Cửa sổ thường |
| Crop thanh địa chỉ | Có (không hiện trong ảnh) |

### Trạng thái UI trước khi bắt đầu
- Bảng bên phải **đang đóng** (để Bước 2 chụp được khoảnh khắc mở ra)
- Đang đứng ở nhóm chat có đủ task như bảng trên

### Công cụ highlight
- Màu viền: **#10B981** (emerald)
- Dạng: viền hình chữ nhật bo góc (2–3px), mũi tên khi phần tử nhỏ
- **1 điểm highlight / ảnh** (trừ ngoại lệ có ghi rõ)

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Mở nhóm chat trong danh sách bên trái

**Tên file:** `17-staff-tong-quan-buoc-01.webp`

**Trạng thái màn hình:**
- Tài khoản Staff vừa đăng nhập, đang ở màn hình chính
- Thanh sidebar trái đang hiển thị danh sách nhóm chat
- **Chưa chọn nhóm nào** HOẶC đang ở nhóm khác (để thấy rõ hành động chọn nhóm)
- Bảng bên phải đang đóng

**Vùng cần chụp** — toàn bộ màn hình (hoặc crop 2/3 trái):
```
┌─────────────────────────────────────────────────────────┐
│  Sidebar trái           │  Khung chat (trống/nhóm cũ)  │
│  ┌───────────────────┐  │                               │
│  │ [Nhóm] [Cá nhân]  │  │                               │
│  ├───────────────────┤  │                               │
│  │ 📁 Kế toán        │  │                               │
│  │ ■ Kinh doanh  ◄── │──│─── highlight nhóm này        │
│  │    Có 3 task mới  │  │                               │
│  │ 📁 Nhân sự        │  │                               │
│  └───────────────────┘  │                               │
└─────────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **tên nhóm chat cần chọn** trong sidebar

**Ghi chú:**
- Chọn nhóm có tên rõ ràng, trung tính (ví dụ: "Kinh Doanh", "Kế Toán")
- Không dùng tên nhóm chứa thông tin nhạy cảm hoặc tên riêng
- Nếu có badge số đỏ trên nhóm → tốt, để nguyên

---

### 📸 Ảnh 2 — Mở bảng bên phải và bấm tab Công Việc

**Tên file:** `17-staff-tong-quan-buoc-02.webp`

**Trạng thái màn hình:**
- Đã chọn nhóm chat, khung chat đang hiển thị tin nhắn
- Bảng bên phải đã **mở ra** (đang ở tab Thông Tin mặc định)
- **Chưa bấm** tab Công Việc (để thấy rõ cần phải bấm)

**Hoặc (cách 2):** Chụp đúng lúc tab Công Việc đang được chọn (active) — tuỳ tình huống nào rõ hơn.

**Vùng cần chụp** — toàn bộ màn hình:
```
┌──────────┬────────────────────────────┬──────────────────┐
│ Sidebar  │   Khung chat               │  Bảng bên phải   │
│          │                            │  ┌─────────────┐ │
│          │  [tin nhắn...]             │  │[Thông Tin][Công Việc]│
│          │                            │  │             │ │
│          │       [◀ nút mở bảng] ───► │  │  ...        │ │
│          │                            │  └─────────────┘ │
└──────────┴────────────────────────────┴──────────────────┘
```

**Highlight:**
- Nếu chụp lúc bảng đang mở + chưa chọn tab: Viền #10B981 quanh **nút mở bảng** (góc trên phải khung chat) VÀ tab **Công Việc**
- Nếu chụp lúc tab Công Việc đã active: Viền #10B981 quanh riêng **tab Công Việc**

**Ghi chú:**
- Bảng bên phải thường chiếm khoảng 280–320px bên phải màn hình
- Đảm bảo thấy cả 2 tab: **Thông Tin** và **Công Việc** trong bảng

---

### 📸 Ảnh 3 — Khu vực "Công Việc Của Tôi" với task đang làm

**Tên file:** `17-staff-tong-quan-buoc-03.webp`

**Trạng thái màn hình:**
- Đang ở tab **Công Việc** trong bảng bên phải
- Khu vực **Công Việc Của Tôi** đang mở rộng (accordion mở)
- Đang hiển thị ít nhất **2 task card**: 1 task Chưa xử lý + 1 task Đang xử lý

**Thành phần cần thấy rõ trong 1 task card (ưu tiên task "Đang xử lý"):**
```
┌──────────────────────────────────────────┐
│                          [Đang xử lý] ◄── huy hiệu xanh nhạt
│  Tên công việc (in đậm)                  │
│  Nhóm: Kinh Doanh                        │
│  ████████████░░░  60%  ◄── thanh tiến trình
│  ▶ Checklist (2/3)                       │
│  25/03  10:30           [Nhật ký] [Chờ duyệt] │
└──────────────────────────────────────────┘
```

**Vùng cần chụp** — crop bảng bên phải, focus vào khu vực Công Việc Của Tôi:
```
┌──────────────────────────┐
│ 📋 Công Việc Của Tôi     │  ← tiêu đề accordion
├──────────────────────────┤
│ [Task card 1 — Chưa xử lý]│
├──────────────────────────┤
│ [Task card 2 — Đang xử lý]│ ← highlight card này
│  (có thanh tiến trình)   │
└──────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **task card "Đang xử lý"** (card có thanh tiến trình xanh lá)

**Ghi chú quan trọng:**
- Task card cần có **thanh tiến trình** (checklist đã tick một phần) để người đọc thấy được tính năng tracking
- Nên mở rộng accordion Checklist trong card bằng cách bấm "▶ Checklist (2/3)" trước khi chụp — để thấy danh sách tick
- Không cần chụp toàn màn hình, crop riêng bảng bên phải là đủ

---

### 📸 Ảnh 4 — Khu vực "Chờ Duyệt" phía dưới

**Tên file:** `17-staff-tong-quan-buoc-04.webp`

**Trạng thái màn hình:**
- Đang ở tab Công Việc, scroll xuống dưới khu vực "Công Việc Của Tôi"
- Khu vực **Chờ Duyệt** hiển thị ít nhất **1 task card**
- Huy hiệu trạng thái là màu vàng cam "Chờ duyệt"
- Dòng chữ "Xem tất cả công việc đã hoàn thành" hiện ở dưới cùng

**Vùng cần chụp** — crop bảng bên phải, phần dưới:
```
┌──────────────────────────┐
│ ✏️ Chờ Duyệt             │  ← tiêu đề accordion
├──────────────────────────┤
│ [Task card — Chờ duyệt] │
│  [Đang chờ duyệt] huy hiệu vàng cam
│  Tên task...             │
│  25/03  09:15  [Nhật ký] │
├──────────────────────────┤
│   Xem tất cả công việc   │
│   đã hoàn thành          │  ← dòng chữ xanh nhạt ở dưới
└──────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **task card "Chờ duyệt"** (toàn bộ card)

**Ghi chú:**
- Huy hiệu "Chờ duyệt" màu vàng cam (amber) cần thấy rõ — là điểm khác biệt quan trọng so với ảnh 3
- Đảm bảo thấy cả dòng chữ "Xem tất cả công việc đã hoàn thành" — đây là nút dẫn sang bước 5
- Nút này màu xanh nhạt (brand color), nhỏ, ở góc dưới phải của accordion Chờ Duyệt

---

### 📸 Ảnh 5 — Modal "Công Việc Đã Hoàn Thành"

**Tên file:** `17-staff-tong-quan-buoc-05.webp`

**Trạng thái màn hình:**
- Đã bấm "Xem tất cả công việc đã hoàn thành"
- Modal **Công Việc Đã Hoàn Thành** đang mở, đè lên giao diện chính
- Modal có header gradient xanh nhạt với icon + tiêu đề
- Nội dung bên trong: task được nhóm theo ngày (DD/MM/YYYY)

**Vùng cần chụp** — toàn bộ màn hình (modal đè lên nền tối):
```
┌─────────────────────────────────────────────────────┐
│  [Nền tối mờ - backdrop]                            │
│     ┌─────────────────────────────────────┐         │
│     │ 📋 Công Việc Đã Hoàn Thành    [✕]  │ ← header│
│     ├─────────────────────────────────────┤         │
│     │ 📅 Hôm nay - 25/03/2026  (2)        │         │
│     │   ┌──────────────────────────────┐  │         │
│     │   │ Tên task 1                   │  │         │
│     │   │ Hoàn tất lúc 10:30  ✓ 3/3   │  │         │
│     │   │ [Kinh Doanh]                 │  │         │
│     │   └──────────────────────────────┘  │         │
│     │   ┌──────────────────────────────┐  │         │
│     │   │ Tên task 2                   │  │         │
│     │   │ Hoàn tất lúc 09:15           │  │         │
│     │   └──────────────────────────────┘  │         │
│     │ 📅 24/03/2026  (1)                  │         │
│     │   ...                               │         │
│     ├─────────────────────────────────────┤         │
│     │           [Đóng]                    │ ← footer│
│     └─────────────────────────────────────┘         │
└─────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **một thẻ task hoàn thành** (thẻ đầu tiên trong danh sách)

**Ghi chú:**
- Modal này có kích thước 560px × 80vh, canh giữa màn hình
- Nên có ít nhất **2 ngày** trong danh sách (ví dụ: "Hôm nay" và ngày hôm qua) để thấy cách nhóm theo ngày
- Thẻ task trong modal nhỏ hơn TaskCard thông thường — chỉ hiện tên, giờ hoàn tất, checklist progress, và badge Loại Việc
- Nếu task có checklist: hiện dòng "✓ X/Y mục" màu xanh lá ở góc phải
- Ký hiệu "📅 Hôm nay - ..." sẽ tự hiện nếu task hoàn thành trong ngày — không cần chỉnh

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị:
  Kiểm tra tài khoản Staff có đủ task ở các trạng thái
  Đóng bảng bên phải (nếu đang mở)
  ↓

Bước 1 → Đứng ở màn hình chính, chưa chọn nhóm
          (hoặc đang ở nhóm khác)
          → Chụp Ảnh 1 trước khi bấm vào nhóm đích
          ↓

Bước 2 → Bấm vào nhóm chat đích
          Đợi tin nhắn tải xong
          → Mở bảng bên phải (chưa bấm tab Công Việc)
          → Chụp Ảnh 2
          ↓

Bước 3 → Bấm tab Công Việc
          Đợi task load xong
          → Mở rộng accordion "Checklist" trong 1 task
          → Chụp Ảnh 3 (khu vực Công Việc Của Tôi)
          ↓

Bước 4 → Scroll xuống trong bảng bên phải
          → Tìm khu vực "Chờ Duyệt"
          → Chụp Ảnh 4
          ↓

Bước 5 → Bấm "Xem tất cả công việc đã hoàn thành"
          → Đợi modal mở và dữ liệu hiển thị
          → Chụp Ảnh 5
          → Bấm [Đóng] để thoát modal
          ↓
          Done ✅
```

---

## Checklist trước khi nộp

```
□ Đúng 5 ảnh, đúng tên file (17-staff-tong-quan-buoc-0X.webp)
□ Kích thước: 1280px chiều ngang
□ Format: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm highlight màu #10B981
□ Ảnh 3: thấy rõ thanh tiến trình checklist trên task card
□ Ảnh 4: thấy rõ huy hiệu vàng cam "Chờ duyệt" VÀ dòng "Xem tất cả..."
□ Ảnh 5: modal hiện ít nhất 2 nhóm ngày
□ Không có tên người thật, số điện thoại, nội dung task nhạy cảm
□ Ảnh rõ nét, không bị mờ
□ Đặt vào đúng thư mục: guide-site/src/content/web/images/
```

## Vị trí lưu ảnh

```
Quoc-Nam-Guide/
└── guide-site/
    └── src/
        └── content/
            └── web/
                └── images/
                    ├── 17-staff-tong-quan-buoc-01.webp  ← chọn nhóm chat
                    ├── 17-staff-tong-quan-buoc-02.webp  ← mở bảng + tab Công Việc
                    ├── 17-staff-tong-quan-buoc-03.webp  ← khu vực Công Việc Của Tôi
                    ├── 17-staff-tong-quan-buoc-04.webp  ← khu vực Chờ Duyệt
                    └── 17-staff-tong-quan-buoc-05.webp  ← modal lịch sử hoàn thành
```

---

## Ghi chú bổ sung

### Thứ tự hiển thị task trong card
- Trên mỗi task card: huy hiệu trạng thái nổi góc trên phải (floating, nhìn như nhãn dán)
- Trong khu vực "Công Việc Của Tôi": task **Chưa xử lý** hiện trước, **Đang xử lý** hiện sau
- Trong khu vực "Chờ Duyệt": chỉ task `need_to_verified`

### Các nút hành động trên task card (để nhận dạng khi chụp)
| Trạng thái task | Nút xuất hiện |
|---|---|
| Chưa xử lý | `[Nhật ký]` `[Bắt đầu]` |
| Đang xử lý | `[Nhật ký]` `[Chờ duyệt]` |
| Chờ duyệt | `[Nhật ký]` (không có nút đổi trạng thái) |

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay ảnh.

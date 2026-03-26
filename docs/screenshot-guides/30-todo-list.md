# Hướng Dẫn Chụp Hình — Bài 30: Danh sách việc cần làm

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/30-todo-list.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Chuẩn bị trước khi chụp

### Tài khoản và dữ liệu

Dùng tài khoản **Staff** (hoặc bất kỳ role nào — tính năng giống nhau với mọi role).

Trước khi bắt đầu chụp, cần chuẩn bị sẵn trong hộp thoại:

| Ảnh | Dữ liệu cần chuẩn bị sẵn |
|-----|--------------------------|
| Ảnh 1 | Chưa cần — mở hộp thoại là đủ |
| Ảnh 2 | Có ít nhất **2 việc** đang hiển thị trong danh sách chính |
| Ảnh 3 | Có ít nhất **1 việc đã hoàn thành hôm nay** trong phần "Đã hoàn thành hôm nay" |
| Ảnh 4 | Cùng danh sách Ảnh 3 — chỉ cần di chuột vào một việc chưa xong |

**Gợi ý nội dung việc test (tạo sẵn trước khi chụp):**
- _"Gọi điện xác nhận đơn hàng #2031 với anh Bình"_
- _"Kiểm tra file báo cáo tuần trước khi gửi lên nhóm"_
- _"Nhắc chị Lan ký phiếu nhập kho trước 5 giờ chiều"_
- _"Cập nhật tiến độ task vào nhật ký"_ ← cái này đánh dấu hoàn thành để dùng cho Ảnh 3

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |
| Thanh địa chỉ | Ẩn hoặc crop ra khỏi ảnh |

### Màu và dạng đánh dấu ảnh

- Màu viền: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc 2–3px, hoặc mũi tên chỉ vào phần tử nhỏ
- **Đúng 1 điểm đánh dấu** mỗi ảnh — không dùng màu đỏ, không đánh dấu nhiều chỗ cùng lúc

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Bảng Công cụ đang mở, ô Danh sách việc cần làm

**Tên tệp:** `30-todo-list-buoc-01.webp`

**Mục tiêu:** Cho thấy cách mở tính năng từ bảng Công cụ.

**Trạng thái màn hình:**
- Bảng **Công cụ** đang **mở** (bấm vào biểu tượng cờ lê trên thanh dọc bên trái)
- Hộp thoại "Danh sách việc cần làm" **chưa mở** — chỉ thấy bảng Công cụ
- Ô **Danh sách việc cần làm** (biểu tượng ☑ hình hộp kiểm) hiển thị rõ trong bảng

**Bố cục bảng Công cụ:**
```
┌────────────────────────────────────────────────────────────────────┐
│ THANH DỌC TRÁI (bg-brand-600)                                      │
│   [🔧 Công cụ] ← đang sáng / vừa bấm                              │
│         │                                                          │
│         ├──► BẢNG CÔNG CỤ (Popover, bg-white, shadow-lg)          │
│         │    "Công cụ"  (tiêu đề)                                  │
│         │    ──────────────────────────────────────────            │
│         │    ┌──────────────┐  ┌──────────────┐                   │
│         │    │ ⚡            │  │ ⭐            │                   │
│         │    │ Tin nhắn     │  │ Tin đánh dấu │                   │
│         │    │ nhanh        │  │              │                   │
│         │    └──────────────┘  └──────────────┘                   │
│         │    ┌──────────────┐  ┌──────────────┐                   │
│         │    │ ☑            │  │ ⚙            │  (leader/admin)  │
│         │    │ Danh sách    │  │ Quản lý      │                   │
│         │    │ việc cần làm │◄─┤ loại việc    │                   │
│         │    └──────────────┘  └──────────────┘                   │
└────────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh ô **Danh sách việc cần làm** — ô có biểu tượng hộp kiểm ☑ và chữ "Danh sách việc cần làm" bên dưới, nằm ở góc dưới bên trái của lưới 2×2

**Điểm cần thấy rõ:**
1. Bảng Công cụ **đang mở** — nền trắng, viền xám, đổ bóng, bo góc
2. Lưới 2×2 (hoặc 2×1 nếu đang ở Staff không có ô Quản lý loại việc)
3. Ô **Danh sách việc cần làm**: biểu tượng hộp kiểm (`ClipboardListIcon` hoặc `CheckSquare`) trong vòng tròn nền xanh nhạt (`bg-brand-50`), chữ "Danh sách việc cần làm" bên dưới
4. Hộp thoại chính **chưa mở** — chỉ thấy bảng Công cụ nổi lên

---

### 📸 Ảnh 2 — Hộp thoại mở, form thêm việc mới đang hiển thị

**Tên tệp:** `30-todo-list-buoc-02.webp`

**Mục tiêu:** Cho thấy hộp thoại và form thêm việc mới.

**Trạng thái màn hình:**
- Hộp thoại **Danh sách việc cần làm** đang mở, nằm giữa màn hình
- Đã bấm **+ Thêm công việc mới** → form nhập liệu đang hiển thị (nền xanh nhạt `bg-brand-50`)
- Ô **Tiêu đề** đang được focus (cursor đang ở trong ô), có thể đã nhập một phần nội dung
- Ô **Chi tiết** phía dưới (chưa nhập — để trống)
- Danh sách bên dưới có **2–3 việc** đã tạo sẵn

**Bố cục hộp thoại:**
```
┌────────────────────────────────────────────────────────────┐
│ Danh sách việc cần làm                              [✕]    │
├────────────────────────────────────────────────────────────┤
│ PHẦN THÊM MỚI (flex-shrink-0, border-b)                   │
│ ┌────────────────────────────────────────────────────────┐ │
│ │ [  Tiêu đề                                          ]  │ │  ← ô đang focus
│ │ 💡 Tối đa 500 ký tự (0/500)                            │ │
│ │                                                        │ │
│ │ [  Chi tiết (không bắt buộc)                        ]  │ │
│ │                                                        │ │  (Textarea h-20)
│ │                                                        │ │
│ │                              [   Hủy   ] [   Lưu   ]  │ │
│ └────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────┤
│ DANH SÁCH VIỆC ĐANG LÀM (overflow-y-auto)                 │
│  ○  Gọi điện xác nhận đơn hàng #2031 với anh Bình         │
│  ○  Kiểm tra file báo cáo tuần trước khi gửi              │
│  ○  Nhắc chị Lan ký phiếu nhập kho trước 5 giờ chiều      │
└────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô Tiêu đề** (`data-testid="todo-new-title-input"`) — ô input nhỏ trên cùng trong form thêm mới, nền trắng, đang focus

**Điểm cần thấy rõ:**
1. Tiêu đề hộp thoại **"Danh sách việc cần làm"** ở trên cùng (text-xl font-semibold)
2. Form thêm mới đang mở — nền **`bg-brand-50`** (xanh nhạt), bo góc
3. Ô **Tiêu đề** đang được focus hoặc có chữ đang nhập
4. Chú thích **"💡 Tối đa 500 ký tự (x/500)"** ngay dưới ô Tiêu đề
5. Ô **Chi tiết** (Textarea `h-20`) phía dưới — placeholder "Chi tiết (không bắt buộc)"
6. Hai nút **Hủy** và **Lưu** ở góc dưới phải form
7. Danh sách việc đang làm bên dưới (2–3 việc) với biểu tượng vòng tròn ○ bên trái mỗi việc

**Lưu ý:**
- Nút **Lưu** có thể đang **mờ** (disabled) nếu ô Tiêu đề còn trống — không sao, điều đó đúng theo tính năng
- Nếu muốn nút Lưu sáng, hãy nhập vài ký tự vào ô Tiêu đề trước khi chụp

---

### 📸 Ảnh 3 — Việc đã hoàn thành, hiển thị trong phần "Đã hoàn thành hôm nay"

**Tên tệp:** `30-todo-list-buoc-03.webp`

**Mục tiêu:** Cho thấy kết quả sau khi đánh dấu một việc là hoàn thành.

**Trạng thái màn hình:**
- Hộp thoại đang mở
- Phần **Đã hoàn thành hôm nay (x)** đang hiển thị ở phía dưới, đã mở rộng
- Có ít nhất **1 việc** trong phần hoàn thành: tên bị **gạch ngang**, biểu tượng **dấu tích xanh** (✓ `CheckCircle2`, màu `text-brand-600`)
- Phần việc đang làm ở trên vẫn còn ít nhất **2 việc** với biểu tượng vòng tròn ○

**Bố cục hộp thoại:**
```
┌────────────────────────────────────────────────────────────┐
│ Danh sách việc cần làm                              [✕]    │
├────────────────────────────────────────────────────────────┤
│ [+ Thêm công việc mới]                                     │
├────────────────────────────────────────────────────────────┤
│ VIỆC ĐANG LÀM                                              │
│  ○  Gọi điện xác nhận đơn hàng #2031 với anh Bình         │
│  ○  Kiểm tra file báo cáo tuần trước khi gửi              │
│  ○  Nhắc chị Lan ký phiếu nhập kho trước 5 giờ chiều      │
├────────────────────────────────────────────────────────────┤
│ Đã hoàn thành hôm nay (1)                          [∧]    │  ← border-t
├────────────────────────────────────────────────────────────┤
│  ✓  ~~Cập nhật tiến độ task vào nhật ký~~                  │  ← gạch ngang
│     ~~Chi tiết gì đó...~~  (nếu có)                        │
└────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **hàng việc đã hoàn thành** trong phần "Đã hoàn thành hôm nay" — hàng có biểu tượng dấu tích xanh ✓ và tên bị gạch ngang

**Điểm cần thấy rõ:**
1. Thanh phân cách **"Đã hoàn thành hôm nay (x)"** (`border-t, pt-3, pb-2`) ở giữa hộp thoại — hiển thị số lượng việc đã xong trong ngoặc
2. Biểu tượng **mũi tên lên** (ChevronUp) bên phải tiêu đề "Đã hoàn thành" — chứng tỏ phần này đang mở rộng
3. Hàng việc hoàn thành: biểu tượng **`CheckCircle2`** màu xanh thương hiệu (`text-brand-600`) bên trái, tên việc **bị gạch ngang** (`line-through`), màu chữ xám (`text-gray-500`)
4. Nền hàng hoàn thành: `bg-gray-50` — hơi xám, khác với nền trắng của việc đang làm

**Kỹ thuật chuẩn bị:**
1. Mở hộp thoại khi đã có ≥ 3 việc trong danh sách
2. Bấm biểu tượng ○ của một việc → việc đó chuyển xuống phần "Đã hoàn thành"
3. Nếu phần "Đã hoàn thành" đang bị thu gọn (mũi tên xuống), bấm vào tiêu đề để mở rộng
4. Chụp ảnh

---

### 📸 Ảnh 4 — Biểu tượng thùng rác hiện khi di chuột, và ô chỉnh sửa đang mở

**Tên tệp:** `30-todo-list-buoc-04.webp`

**Mục tiêu:** Cho thấy 2 thao tác — sửa và xóa — đều thực hiện trực tiếp trên hàng việc.

**Có 2 lựa chọn cách chụp — chọn 1 trong 2:**

---

**Lựa chọn A (khuyến nghị) — Ô chỉnh sửa đang mở:**

Trạng thái: Đã bấm vào tên một việc → ô chỉnh sửa (`isEditing = true`) đang hiển thị thay thế tên việc

```
┌────────────────────────────────────────────────────────────┐
│ DANH SÁCH VIỆC ĐANG LÀM                                    │
│  ○  Gọi điện xác nhận đơn hàng #2031 với anh Bình         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ ○  [  Kiểm tra file báo cáo tuần trước khi gửi   ]  │  │  ← ô đang chỉnh sửa
│  │    💡 Tối đa 500 ký tự (22/500)                     │  │
│  │    [  Chi tiết (không bắt buộc)                  ]  │  │
│  │                        [   Hủy   ] [   Lưu   ]      │  │
│  └──────────────────────────────────────────────────────┘  │
│  ○  Nhắc chị Lan ký phiếu nhập kho trước 5 giờ chiều      │
└────────────────────────────────────────────────────────────┘
```

**Đánh dấu (Lựa chọn A):** Viền màu #10B981 quanh **ô Tiêu đề trong chế độ chỉnh sửa** (`data-testid="todo-edit-title-input-{id}"`) — ô input đang focus có nội dung của việc đang sửa

---

**Lựa chọn B — Biểu tượng thùng rác hiện khi hover:**

Trạng thái: Đang di chuột vào một hàng việc → biểu tượng thùng rác (🗑 `Trash2`) đang hiển thị ở góc phải

```
┌────────────────────────────────────────────────────────────┐
│ DANH SÁCH VIỆC ĐANG LÀM                                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ ○  Kiểm tra file báo cáo tuần trước khi gửi   [🗑]  │  │  ← hover, thùng rác hiện
│  │    (nền sáng hơn: hover:bg-brand-50)                 │  │
│  └──────────────────────────────────────────────────────┘  │
│  ○  Nhắc chị Lan ký phiếu nhập kho trước 5 giờ chiều      │
└────────────────────────────────────────────────────────────┘
```

**Đánh dấu (Lựa chọn B):** Viền màu #10B981 quanh **biểu tượng thùng rác** (`Trash2`, h-3.5 w-3.5) ở góc phải hàng đang hover — kèm mũi tên chỉ vào nếu biểu tượng nhỏ

---

**Khuyến nghị chụp:** Chọn **Lựa chọn A** (ô chỉnh sửa đang mở) vì:
- Cho thấy được cả 2 trường Tiêu đề và Chi tiết → người đọc hiểu có thể sửa cả mô tả
- Không phụ thuộc vào timing hover (không cần chụp nhanh)
- Hình ảnh rõ ràng hơn, nhiều thông tin hơn

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  Đăng nhập tài khoản Staff
  Tạo sẵn 3–4 việc trong hộp thoại (mở qua Công cụ → Danh sách việc cần làm)
  Đánh dấu hoàn thành 1 việc (để phần "Đã hoàn thành hôm nay" có dữ liệu)
  Đóng hộp thoại
  ↓
Ảnh 1  →  Bấm biểu tượng Công cụ (cờ lê)
           Bảng Công cụ bật ra
           → CHỤP (đánh dấu ô "Danh sách việc cần làm")
           Chưa bấm vào ô đó
           ↓
Ảnh 2  →  Bấm ô "Danh sách việc cần làm" trong bảng
           Hộp thoại mở ra
           Bấm "+ Thêm công việc mới"
           Form nhập liệu hiện ra (ô Tiêu đề đang focus)
           → CHỤP (đánh dấu ô Tiêu đề đang focus)
           Chưa bấm Lưu
           ↓
Ảnh 3  →  Bấm Hủy (hoặc Lưu nếu muốn)
           Danh sách hiển thị với 2–3 việc đang làm + phần Đã hoàn thành
           Đảm bảo phần "Đã hoàn thành hôm nay" đang MỞ (mũi tên lên ∧)
           → CHỤP (đánh dấu hàng việc đã hoàn thành)
           ↓
Ảnh 4  →  Bấm vào tên một việc chưa xong trong danh sách
           Ô chỉnh sửa mở ra (Lựa chọn A)
           → CHỤP (đánh dấu ô tiêu đề đang chỉnh sửa)
           ↓
Hoàn thành ✅
```

---

## Bảng kiểm tra trước khi nộp

```
□ Đúng 4 ảnh, đúng tên tệp
□ Chiều rộng: 1280px
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu màu #10B981
□ Không có thông tin nhạy cảm (tên thật, số điện thoại, nội dung nội bộ)

□ Ảnh 1: Bảng Công cụ ĐANG MỞ, ô "Danh sách việc cần làm" thấy rõ, hộp thoại CHƯA mở
□ Ảnh 2: Hộp thoại MỞ, form thêm mới ĐANG HIỆN, ô Tiêu đề focus/có chữ
□ Ảnh 3: Phần "Đã hoàn thành hôm nay" ĐANG MỞ RỘNG, có ≥ 1 việc gạch ngang + dấu tích xanh
□ Ảnh 4: Ô chỉnh sửa ĐANG MỞ trên một hàng việc (hoặc thùng rác đang hiện khi hover)
□ Dữ liệu việc có nghĩa — không phải "test", "abc", "việc 1"
□ Ảnh rõ nét, hộp thoại nằm gọn trong khung ảnh, không bị cắt mép
□ Lưu đúng thư mục: guide-site/src/content/web/images/
```

---

## Vị trí lưu ảnh

```
Quoc-Nam-Guide/
└── guide-site/
    └── src/
        └── content/
            └── web/
                └── images/
                    ├── 30-todo-list-buoc-01.webp  ← bảng Công cụ mở, ô Danh sách việc cần làm
                    ├── 30-todo-list-buoc-02.webp  ← hộp thoại mở, form thêm mới đang hiện
                    ├── 30-todo-list-buoc-03.webp  ← phần Đã hoàn thành mở rộng, việc gạch ngang
                    └── 30-todo-list-buoc-04.webp  ← ô chỉnh sửa đang mở (hoặc thùng rác hover)
```

---

## Giải phẫu hộp thoại Danh sách việc cần làm

```
Dialog (max-w-[600px], h-[80vh], flex flex-col)
│
├── DialogHeader (flex-row, justify-between)
│   ├── Tiêu đề: "Danh sách việc cần làm" (text-xl, font-semibold)
│   └── Nút đóng [✕] (DialogClose, data-testid="todo-dialog-close-button")
│
├── Overlay loading (tuyệt đối, bg-white/60) — chỉ hiện khi đang lưu/xóa
│
└── Phần nội dung chính (flex-1, flex-col, overflow-hidden)
    │
    ├── KHU VỰC THÊM MỚI (flex-shrink-0, border-b, pb-3)
    │   ├── Trạng thái bình thường: nút "+ Thêm công việc mới" (variant="link")
    │   │   data-testid="todo-add-new-button"
    │   └── Trạng thái đang thêm: form (rounded-lg, bg-brand-50, p-3)
    │       ├── Input Tiêu đề (data-testid="todo-new-title-input", maxLength=500)
    │       ├── Chú thích "💡 Tối đa 500 ký tự (x/500)"
    │       ├── Textarea Chi tiết (data-testid="todo-new-description-input", h-20, maxLength=1000)
    │       └── [Hủy] [Lưu] (data-testid="todo-new-cancel-button" / "todo-new-save-button")
    │
    ├── DANH SÁCH VIỆC ĐANG LÀM (flex-1, overflow-y-auto)
    │   data-testid="todo-active-list"
    │   │
    │   ├── Trạng thái trống: chữ "Chưa có công việc nào" (italic, gray-400)
    │   └── Mỗi việc (group relative, rounded-lg, bg-white):
    │       ├── Biểu tượng ○ Circle (data-testid="todo-complete-button-{id}")
    │       │   hover → text-brand-600
    │       ├── Vùng nội dung (flex-1):
    │       │   ├── Chế độ xem: tên việc (click để chỉnh sửa)
    │       │   └── Chế độ sửa (isEditing=true):
    │       │       ├── Input Tiêu đề (data-testid="todo-edit-title-input-{id}")
    │       │       ├── Textarea Chi tiết (data-testid="todo-edit-description-input-{id}")
    │       │       └── [Hủy] [Lưu]
    │       └── Biểu tượng 🗑 Trash2 (opacity-0, group-hover:opacity-100)
    │           data-testid="todo-delete-button-{id}"
    │
    ├── THANH PHÂN CÁCH "Đã hoàn thành hôm nay (x)" (flex-shrink-0, border-t)
    │   Chỉ hiện khi completedToday.length > 0
    │   data-testid="todo-completed-toggle-button"
    │   ├── Mũi tên lên ∧ (ChevronUp) khi đang mở rộng
    │   └── Mũi tên xuống ∨ (ChevronDown) khi đang thu gọn
    │
    └── DANH SÁCH ĐÃ HOÀN THÀNH HÔM NAY (flex-shrink-0, max-h-[30vh])
        data-testid="todo-completed-list"
        Mỗi việc:
        ├── Biểu tượng ✓ CheckCircle2 (text-brand-600) — bấm để khôi phục
        ├── Tên việc (line-through, text-gray-500)
        └── Biểu tượng 🗑 Trash2 (opacity-0, group-hover:opacity-100)
```

---

## Quy tắc xử lý dữ liệu cần biết

| Hành vi | Chi tiết |
|---------|---------|
| **Phạm vi hiển thị** | Riêng tư — chỉ người dùng hiện tại thấy |
| **Việc chưa xong** | Tải từ `GET /api/todo-items?isDone=false` — hiển thị tất cả ngày |
| **Việc đã xong** | Tải từ `GET /api/todo-items/done-today` — chỉ hiển thị việc hoàn thành **trong ngày hôm nay** |
| **Sang ngày mới** | Việc đã hoàn thành không còn xuất hiện trong danh sách (do endpoint `done-today`) |
| **Sửa việc đã xong** | Không thể sửa trực tiếp — cần bấm ✓ để khôi phục về đang làm, rồi mới sửa |
| **Giới hạn ký tự** | Tiêu đề: tối đa 500 ký tự — Chi tiết: tối đa 1000 ký tự |

---

## Câu hỏi thường gặp khi chụp

**H: Ô "Danh sách việc cần làm" trong bảng Công cụ hiện thế nào — biểu tượng là gì?**
→ Trong `MainSidebar.tsx`, ô này dùng `ClipboardListIcon` hoặc `CheckSquare` (kiểm tra lại với giao diện thực tế). Chữ bên dưới luôn là "Danh sách việc cần làm".

**H: Phần "Đã hoàn thành hôm nay" không hiện dù đã đánh dấu xong?**
→ Kiểm tra 2 điều: (1) Việc đã được đánh dấu hoàn thành đúng chưa — biểu tượng phải là ✓ xanh; (2) Phần này chỉ hiện khi `completedToday.length > 0`. Nếu vừa tạo và đánh dấu xong trong cùng phiên, thử đóng rồi mở lại hộp thoại.

**H: Nút Lưu mờ không bấm được?**
→ Nút Lưu `disabled` khi ô Tiêu đề trống (`!newTitle.trim()`) hoặc đang có lỗi. Nhập ít nhất 1 ký tự vào ô Tiêu đề là nút sáng lên.

**H: Không thấy thùng rác khi hover?**
→ Biểu tượng dùng class `opacity-0 group-hover:opacity-100` — chỉ hiện khi con trỏ chuột **nằm trong vùng `div.group`** của hàng đó. Di chuột vào vùng text của việc (không phải vào biểu tượng ○ bên trái hay vùng trống).

---

## Ghi chú bổ sung

### Phân biệt "Danh sách việc cần làm" và "Checklist trong task"

Hai tính năng trông giống nhau nhưng hoàn toàn khác nhau:

| | Danh sách việc cần làm (bài này) | Danh sách kiểm tra trong task |
|--|--|--|
| Vị trí | Bảng Công cụ → hộp thoại riêng | Bên trong một task cụ thể |
| Phạm vi | Cá nhân — riêng tư | Theo task — mọi người trong nhóm thấy |
| Mục đích | Nhắc nhở cá nhân trong ngày | Theo dõi tiến độ task |
| Bài hướng dẫn | Bài này (30) | Bài 19 — Tick danh sách kiểm tra |

### Nếu UI thay đổi sau khi chụp
Xem hướng dẫn tại `docs/CONTENT_GUIDE.md` — Mục 10: *Update khi UI thay đổi*.
Giữ nguyên tên tệp ảnh, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong kho `Quoc-Nam-Guide`.

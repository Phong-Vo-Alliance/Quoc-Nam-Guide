# Hướng Dẫn Chụp Hình — Bài 14: Đổi người xử lý công việc

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/14-leader-doi-nguoi-xu-ly.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-25

---

## Hiểu đúng tính năng trước khi chụp

### Đây là thao tác 1 bước duy nhất về mặt kỹ thuật

Toàn bộ tính năng chỉ là một **ô chọn (`<select>`) nhỏ** nằm ngay trên thẻ công việc — không có tấm trượt, không có nút xác nhận, không có bước phụ. Khi người dùng chọn tên mới trong ô đó, hệ thống gọi `PATCH /api/tasks/{id}` với `assignTo` mới, rồi cập nhật ngay lập tức.

### Trạng thái cho phép và không cho phép

| Trạng thái công việc | Ô Giao cho | Có thể đổi không? |
|---------------------|-----------|-------------------|
| Chưa xử lý (`todo`) | Ô chọn — bấm được | ✅ Được |
| Đang xử lý (`doing`) | Ô chọn — bấm được | ✅ Được |
| Chờ duyệt (`need_to_verified`) | **Chữ tĩnh** — không bấm | ❌ Không được |
| Hoàn thành (`finished`) | **Chữ tĩnh** — không bấm | ❌ Không được |

→ Cần chuẩn bị dữ liệu test có công việc ở trạng thái **Chưa xử lý** hoặc **Đang xử lý**.

### Vị trí ô "Giao cho" trên thẻ công việc

```
┌──────────────────────────────────────────────────────┐
│  Tên công việc (link màu xanh, bấm xem tin nhắn gốc)│
│                                                      │
│  Nhóm: [Tên loại việc]  •  Giao cho: [▼ Tên nhân viên] │  ← hàng meta
│                                                      │
│  [Tick danh sách kiểm tra]  [Chuyển trạng thái]     │
└──────────────────────────────────────────────────────┘
```

Ô `Giao cho` nằm trên **hàng meta** (dòng chữ nhỏ, cỡ 11px) ngay dưới tên công việc, bên cạnh tên nhóm.

---

## Chuẩn bị trước khi chụp

### Tài khoản
Bắt buộc dùng **Leader** hoặc **Admin**.

### Dữ liệu cần chuẩn bị

| Điều kiện | Lý do |
|-----------|-------|
| Nhóm chat có ít nhất **2 nhân viên** (Staff) | Ô chọn mới có danh sách để xổ xuống; nếu chỉ 1 người thì ô chỉ có 1 lựa chọn, không minh họa được tính năng |
| Có ít nhất **1 công việc** ở trạng thái **Chưa xử lý** hoặc **Đang xử lý** | Để ô chọn đang ở dạng bấm được (không phải chữ tĩnh) |
| Bảng bên phải đang **mở**, đang ở **tab Công Việc** khi bắt đầu chụp từ ảnh 2 | Tiết kiệm bước, tập trung vào thao tác chính |
| Tên hai nhân viên **rõ ràng và khác nhau** (ví dụ: Nguyễn Văn A, Trần Thị B) | Người đọc nhìn vào ảnh thấy ngay sự thay đổi trước/sau |

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |
| Thanh địa chỉ | Ẩn hoặc crop ra ngoài |

### Màu và dạng đánh dấu
- Màu: **#10B981** (xanh lá emerald)
- Dạng: viền hình chữ nhật bo góc, 2–3px
- **1 điểm đánh dấu** mỗi ảnh
- Nếu vùng đánh dấu quá nhỏ (ô 11px khó thấy): dùng mũi tên trỏ vào

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Bảng bên phải đang đóng, cần mở để vào tab Công Việc

**Tên tệp:** `14-leader-doi-nguoi-buoc-01.webp`

**Mục tiêu:** Cho thấy điểm xuất phát — bảng bên phải đang đóng, người dùng cần bấm nút mở.

**Trạng thái màn hình:**
- Đang ở nhóm chat bất kỳ
- Bảng bên phải (ConversationDetailPanel) đang **đóng hoàn toàn**
- Khung chat chiếm toàn bộ phần phải

**Vùng cần chụp — tiêu điểm vào góc trên phải của tiêu đề chat:**
```
┌──────────────────────────────────────────────────────────────┐
│  ChatHeader                                                  │
│  [Tên nhóm]  [số thành viên]  [🔍] [⭐] [ ▶ mở bảng ] [⋯]  │
│                                              ↑               │
│                                    Nút mở bảng bên phải     │
├──────────────────────────────────────────────────────────────┤
│                    Khung chat (rộng toàn bộ)                 │
│                    ...                                       │
└──────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **nút mở bảng bên phải** (biểu tượng mũi tên hoặc bảng thu nhỏ ở góc trên phải của ChatHeader)

**Ghi chú:**
- Đây là ảnh ngữ cảnh — crop lấy phần header và vài tin nhắn phía dưới là đủ, không cần chụp toàn trang
- Nếu bảng bên phải đã mở sẵn khi bắt đầu: đóng lại rồi chụp để ảnh 1 có ý nghĩa

---

### 📸 Ảnh 2 — Bảng Công Việc đang mở, nhìn thấy thẻ công việc với ô Giao cho

**Tên tệp:** `14-leader-doi-nguoi-buoc-02.webp`

**Mục tiêu:** Cho thấy toàn bộ bảng bên phải đang hiện tab Công Việc, thẻ công việc đang hiện với dòng **Giao cho** dạng ô chọn (bấm được).

**Trạng thái màn hình:**
- Đã bấm nút mở ở ảnh 1
- Tab **Công Việc** đang được chọn (active)
- Nhóm **Chưa xử lý** hoặc **Đang xử lý** đang mở rộng, có ít nhất 1 thẻ công việc hiển thị
- Dòng **Giao cho** trên thẻ công việc là **ô chọn có viền** (dạng `<select>`)

**Bố cục bảng bên phải cần thấy:**
```
┌──────────────────────────────────────┐
│ [Thông Tin]  [Công Việc] ← active   │
│ ─────────────────────────────────── │
│ ─── Chờ duyệt (0) ▶ ────────────── │
│ ─── Chưa xử lý (1) ▼ ─────────────  │
│ ┌────────────────────────────────┐   │
│ │  Tên công việc (link xanh)     │   │
│ │  Nhóm: Kho • Giao cho: [▼ Nguyễn Văn A] │  ← ô chọn
│ │  [▶ Chưa xử lý] [→ Bắt đầu]  │   │
│ └────────────────────────────────┘   │
└──────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô chọn "Giao cho"** trên thẻ công việc

**Ghi chú kỹ thuật — ô chọn rất nhỏ (11px):**
- Ô này chỉ cao khoảng 20px, rộng tối đa 180px — khá nhỏ so với toàn bảng
- Nên dùng mũi tên (#10B981) trỏ vào ô thay vì dùng viền bao quanh — dễ thấy hơn
- Hoặc crop phóng to vùng thẻ công việc (zoom toàn bảng lên 125% tạm thời khi chụp)

---

### 📸 Ảnh 3 — Danh sách thành viên đang xổ xuống khi bấm vào ô Giao cho

**Tên tệp:** `14-leader-doi-nguoi-buoc-03.webp`

**Mục tiêu:** Cho thấy ô chọn đang xổ danh sách thành viên, một tên mới đang được trỏ chuột vào (hover hoặc sắp chọn).

**Trạng thái màn hình:**
- Đã bấm vào ô **Giao cho** → danh sách xổ xuống (native `<select>` dropdown của trình duyệt)
- Tên người hiện tại đang được chọn (có dấu tích hoặc tô xanh)
- Tên người mới đang được di chuột vào (hover)

**Bố cục dropdown xổ xuống:**
```
┌──────────────────────────────────────┐
│  Nhóm: Kho • Giao cho:              │
│  ┌──────────────────────────────┐    │
│  │ ✓ Nguyễn Văn A              │    │  ← đang chọn
│  │   Trần Thị B          ←     │    │  ← hover (tô xanh)
│  │   Lê Văn C                  │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **toàn bộ dropdown** (bao gồm cả danh sách các tên)

**Kỹ thuật chụp native `<select>` dropdown:**
- Dropdown native (của hệ điều hành / trình duyệt) sẽ **đóng ngay khi mất focus** — không giữ lại được bằng DevTools
- Cách duy nhất: dùng **Print Screen hoặc Snipping Tool → chế độ chụp cửa sổ** ngay khi dropdown đang mở
- Trên Windows: `Win + Shift + S` → chọn vùng → kịp chụp trước khi dropdown đóng
- Thực hành vài lần để quen tay trước khi chụp thật

**Nếu không kịp chụp dropdown:**
- Dùng ảnh mô phỏng: tạo một dropdown giả bằng cách dùng DevTools → đặt vị trí dropdown và chụp màn hình
- Hoặc liên hệ dev xem component có thể thêm thuộc tính `open` tạm thời không

---

### 📸 Ảnh 4 — Ô Giao cho đã cập nhật tên người mới, không cần bấm thêm

**Tên tệp:** `14-leader-doi-nguoi-buoc-04.webp`

**Mục tiêu:** Cho thấy kết quả ngay lập tức — ô **Giao cho** hiển thị tên người mới, không có bước xác nhận thêm.

**Trạng thái màn hình:**
- Dropdown đã đóng
- Ô **Giao cho** hiện tên người mới: `Trần Thị B` (thay cho `Nguyễn Văn A`)
- Thẻ công việc vẫn còn đó, không có gì thay đổi ngoài dòng Giao cho
- Không có toast / thông báo (thay đổi ngầm)

**Bố cục thẻ công việc sau khi đổi:**
```
┌────────────────────────────────────────┐
│  Tên công việc (link xanh)             │
│  Nhóm: Kho • Giao cho: [▼ Trần Thị B] │  ← đã thay đổi
│  [▶ Chưa xử lý] [→ Bắt đầu]          │
└────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô "Giao cho"** sau khi cập nhật — giống vị trí ảnh 2 nhưng giờ hiển thị tên mới

**Điểm người đọc cần thấy rõ:**
1. Ô **Giao cho** hiển thị **tên người mới** (khác với tên ở ảnh 2/3)
2. Không có nút **Lưu** hay **Xác nhận** nào xuất hiện
3. Thẻ công việc trông y hệt như trước — chỉ dòng tên thay đổi

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  → Đăng nhập tài khoản Leader
  → Mở nhóm chat có ≥2 nhân viên và công việc ở "Chưa xử lý" hoặc "Đang xử lý"
  → Đóng bảng bên phải nếu đang mở
  ↓
Ảnh 1  →  Nhìn thấy nút mở bảng bên phải ở header chat
           → CHỤP (đánh dấu nút mở bảng)
           Bấm nút mở bảng, chọn tab Công Việc
           ↓
Ảnh 2  →  Bảng Công Việc đang mở, thẻ công việc có ô Giao cho
           → CHỤP (đánh dấu ô Giao cho — dùng mũi tên nếu ô nhỏ)
           ↓
Ảnh 3  →  Bấm vào ô Giao cho → Dropdown xổ xuống
           → NHANH: Chụp ngay khi dropdown đang mở
           (đánh dấu toàn bộ dropdown)
           ↓
Ảnh 4  →  Chọn tên người mới trong dropdown
           → Dropdown đóng, tên mới xuất hiện
           → CHỤP (đánh dấu ô Giao cho với tên mới)
           ↓
Hoàn thành ✅
```

---

## Bảng kiểm tra trước khi nộp

```
□ Đủ 4 ảnh, đúng tên tệp (14-leader-doi-nguoi-buoc-01 đến 04)
□ Chiều rộng: 1280px
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu màu #10B981

□ Ảnh 1: Bảng bên phải đang ĐÓNG, nút mở bảng được đánh dấu
□ Ảnh 2: Tab Công Việc đang mở, ô "Giao cho" dạng ô chọn (có viền, bấm được)
□ Ảnh 3: Dropdown đang xổ, thấy ít nhất 2 tên thành viên
□ Ảnh 4: Ô "Giao cho" hiển thị tên KHÁC với ảnh 2 — không có nút xác nhận thêm

□ Dùng tài khoản Leader — không dùng Staff
□ Công việc ở trạng thái Chưa xử lý hoặc Đang xử lý (ô mới bấm được)
□ Không có thông tin nhạy cảm
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
                    ├── 14-leader-doi-nguoi-buoc-01.webp  ← nút mở bảng bên phải (bảng đang đóng)
                    ├── 14-leader-doi-nguoi-buoc-02.webp  ← bảng Công Việc mở, ô Giao cho dạng ô chọn
                    ├── 14-leader-doi-nguoi-buoc-03.webp  ← dropdown đang xổ danh sách thành viên
                    └── 14-leader-doi-nguoi-buoc-04.webp  ← ô Giao cho hiển thị tên người mới
```

---

## Câu hỏi thường gặp khi chụp

**H: Ô "Giao cho" hiển thị chữ tĩnh thay vì ô chọn — không bấm được?**
Công việc đang ở trạng thái **Chờ duyệt** hoặc **Hoàn thành**. Cần dùng công việc ở trạng thái **Chưa xử lý** (`todo`) hoặc **Đang xử lý** (`doing`).

**H: Ô "Giao cho" hoàn toàn không hiển thị trên thẻ?**
Đang dùng tài khoản **Staff** — dòng Giao cho chỉ hiện với Leader và Admin. Kiểm tra lại tài khoản đang đăng nhập.

**H: Dropdown xổ ra nhưng chỉ có 1 tên?**
Nhóm chat chỉ có 1 nhân viên. Cần thêm thành viên vào nhóm hoặc dùng nhóm khác có ≥2 nhân viên.

**H: Ảnh 3 rất khó chụp vì dropdown đóng quá nhanh?**
Thử cách sau:
1. Mở DevTools (F12) → Tab Elements
2. Tìm phần tử `select[data-testid="task-assignee-dropdown"]`
3. Thêm thuộc tính `size="3"` tạm thời → ô sẽ hiển thị dạng listbox mở sẵn (không cần click để giữ)
4. Chụp ảnh, rồi xóa thuộc tính `size` đi

---

## Ghi chú bổ sung

**Nếu UI thay đổi sau khi chụp:**
Xem `docs/CONTENT_GUIDE.md` — Mục 10. Giữ nguyên tên tệp ảnh.

**Câu hỏi & hỗ trợ:**
Liên hệ BA phụ trách hoặc tạo yêu cầu trong kho `Quoc-Nam-Guide`.

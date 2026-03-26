# Hướng Dẫn Chụp Hình — Bài 27: Tin nhắn nhanh tạo và dùng nhanh

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/27-quick-messages.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Chuẩn bị trước khi chụp

### Tài khoản và dữ liệu

Dùng bất kỳ tài khoản nào (Staff / Leader / Admin). Trước khi chụp Ảnh 2 và 3, cần có **ít nhất 2 phím tắt đã tạo sẵn** trong danh sách để danh sách trông có nội dung thực tế. Gợi ý tạo sẵn:

| Phím tắt | Nội dung mẫu |
|----------|-------------|
| `xin` | Xin chào! Tôi sẽ phản hồi ngay. |
| `nhan` | Đã nhận thông tin, tôi xử lý ngay. |
| `tre` | Xin lỗi vì chậm trễ, tôi đang xử lý và cập nhật sớm. |

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |

### Màu và dạng đánh dấu

- Màu viền: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc (2–3px), mũi tên khi cần chỉ vào nút nhỏ
- **1 điểm đánh dấu** mỗi ảnh — không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Bảng Công cụ bật ra từ thanh bên trái, ô Tin nhắn nhanh

**Tên tệp:** `27-quick-messages-buoc-01.webp`

**Trạng thái màn hình:**
- Đã bấm biểu tượng **Công cụ** (hình cờ lê `Wrench`) trên thanh dọc bên trái
- Bảng bật lên `data-testid="sidebar-tools-popover"` đang mở
- **Chưa bấm ô Tin nhắn nhanh** — cửa sổ `QuickMessageManager` chưa mở

**Bố cục bảng Công cụ cần thấy:**
```
┌──────────────────────────────────────────────────────────────────┐
│ THANH BÊN TRÁI (MainSidebar, bg-brand-600)                       │
│  [avatar] [logo] ... [🔧 Công cụ] ← bấm nút này                │
│                 │                                                │
│                 ├──► BẢNG CÔNG CỤ (Popover, w-56, p-3)         │
│                 │    "Công cụ"  (tiêu đề + đường kẻ)           │
│                 │    ┌──────────┐  ┌──────────┐                │
│                 │    │ ⚡        │  │ ⭐        │                │
│                 │    │Tin nhắn  │  │ Tin đánh │                │
│                 │    │ nhanh    │◄─┤  dấu     │                │
│                 │    └──────────┘  └──────────┘                │
│                 │    ┌──────────┐  ┌──────────┐                │
│                 │    │ ☑        │  │ ⚙        │                │
│                 │    │ Danh sách│  │ Quản lý  │                │
│                 │    │việc cần  │  │loại việc │                │
│                 │    │làm       │  │(leader)  │                │
│                 │    └──────────┘  └──────────┘                │
└──────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh ô **Tin nhắn nhanh** (`data-testid="tools-quick-message-button"`) — hình vuông bo góc với biểu tượng tia sét ⚡ và chữ "Tin nhắn nhanh" bên dưới

**Điểm cần thấy rõ:**
1. Thanh bên trái màu xanh brand (bg-brand-600) với biểu tượng Công cụ đang được nhấn/nổi bật
2. Bảng công cụ đang mở, hiển thị lưới 2×2 với 4 ô (hoặc 3 nếu role Staff)
3. Ô **Tin nhắn nhanh** ở góc trên bên trái của lưới — biểu tượng tia sét `Zap` màu brand-600 trong hình tròn nền brand-50
4. Tên ô "Tin nhắn nhanh" rõ ràng bên dưới biểu tượng

**Ghi chú về role:**
- Staff: thấy 3 ô (Tin nhắn nhanh, Tin đánh dấu, Danh sách việc cần làm)
- Leader/Admin: thấy 4 ô (thêm Quản lý loại việc)
- Chụp trên bất kỳ role nào, nhưng ưu tiên dùng Staff cho ảnh đơn giản hơn

---

### 📸 Ảnh 2 — Cửa sổ Tin nhắn nhanh mở với biểu mẫu đang được điền

**Tên tệp:** `27-quick-messages-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm ô **Tin nhắn nhanh** → cửa sổ `QuickMessageManager` đang mở (`data-testid="quick-message-manager-modal"`)
- Cửa sổ phủ lên giao diện chính (Dialog overlay)
- **Ô phím tắt đang có nội dung** (ví dụ: `xinchao`) — chưa bấm Thêm mới
- **Ô nội dung đang có nội dung** (ví dụ: `Xin chào! Tôi sẽ phản hồi ngay.`)
- Dòng hướng dẫn bên dưới ô phím tắt hiển thị: `Trong chat, gõ /xinchao để dùng phím tắt này`
- Danh sách phía trên đã có **2–3 phím tắt sẵn có**

**Bố cục cửa sổ cần thấy:**
```
┌─────────────────────────────────────────────────────────┐
│ Tin nhắn nhanh                                  [✕]     │
│ Tạo phím tắt cho tin nhắn thường dùng. Gõ /phimtat...   │
│ ─────────────────────────────────────────────────────── │
│ DANH SÁCH (max-h-[240px], border border-brand-200)       │
│  Danh sách tin nhắn (3)                                  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ /xin                           [✏️][🗑️] (hover)  │  │
│  │ Xin chào! Tôi sẽ phản hồi ngay.                  │  │
│  ├────────────────────────────────────────────────────┤  │
│  │ /nhan                                              │  │
│  │ Đã nhận thông tin, tôi xử lý ngay.                │  │
│  └────────────────────────────────────────────────────┘  │
│ ─────────────────────────────────────────────────────── │
│ BIỂU MẪU TẠO MỚI                                        │
│  /[xinchao________________]  ← ô phím tắt đang có giá trị│
│  💡 Trong chat, gõ /xinchao để dùng phím tắt này        │
│  [Xin chào! Tôi sẽ phản hồi ngay.                ]     │
│  [                                                ]      │
│ ─────────────────────────────────────────────────────── │
│                              [Hủy] [Thêm mới]           │
└─────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô nhập phím tắt** (`data-testid="quick-message-keyword-input"`) — ô có tiền tố `/` ở bên trái và giá trị đang nhập

**Điểm cần thấy rõ:**
1. Tiêu đề "Tin nhắn nhanh" và phần mô tả phía dưới (có ví dụ `/phimtat`)
2. Danh sách phía trên có **ít nhất 2 phím tắt** với nhãn màu brand (`/xin`, `/nhan`, ...)
3. Ô phím tắt đang có giá trị nhập (ví dụ: `xinchao`) — tiền tố `/` hiển thị tự động ở bên trái ô
4. Dòng hướng dẫn nhỏ bên dưới ô phím tắt: `💡 Trong chat, gõ /xinchao để dùng phím tắt này`
5. Ô nội dung có text mẫu đang nhập
6. Nút **Thêm mới** đang sáng (không mờ) vì đã có nội dung hợp lệ

**Điều kiện dữ liệu:**
- Phím tắt trong ô: `xinchao` (chỉ chữ cái, không dấu cách)
- Nội dung: ≥ 10 ký tự có nghĩa — không để trống hay placeholder chung chung

---

### 📸 Ảnh 3 — Danh sách sau khi thêm thành công, phím tắt mới được tô sáng

**Tên tệp:** `27-quick-messages-buoc-03.webp`

**Trạng thái màn hình:**
- Đã bấm **Thêm mới** → phím tắt mới xuất hiện trong danh sách
- Phím tắt mới vừa thêm **đang tô sáng** (animation `fade-highlight`, nền brand-50 + viền brand-200)
- Biểu mẫu bên dưới đã **tự xoá trắng** (`resetForm()` — ô phím tắt và ô nội dung trống)
- Nút **Thêm mới** đang mờ (vì biểu mẫu trống)

**Bố cục cần thấy:**
```
┌─────────────────────────────────────────────────────────┐
│ Tin nhắn nhanh                                  [✕]     │
│ ─────────────────────────────────────────────────────── │
│ DANH SÁCH (đã cập nhật — 3 phím tắt)                    │
│  Danh sách tin nhắn (3)                                  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ /xin                                              │  │
│  │ Xin chào! Tôi sẽ phản hồi ngay.                  │  │
│  ├────────────────────────────────────────────────────┤  │
│  │ /nhan                                              │  │
│  │ Đã nhận thông tin, tôi xử lý ngay.                │  │
│  ├────────────────────────────────────────────────────┤  │
│ ▌│ /xinchao  ◄── phím tắt VỪA TẠO, đang tô sáng ▌  │  │
│ ▌│ Xin chào! Tôi sẽ phản hồi ngay.               ▌  │  │
│  └────────────────────────────────────────────────────┘  │
│ ─────────────────────────────────────────────────────── │
│ BIỂU MẪU (đã trống sau khi lưu)                         │
│  /[________________________]                             │
│  💡 Trong chat, gõ /phimtat để dùng phím tắt này        │
│  [                                                ]      │
│                              [Hủy] [Thêm mới (mờ)]      │
└─────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **hàng phím tắt mới vừa tạo** đang tô sáng trong danh sách — hàng có class `fade-highlight` (nền brand-50, viền brand-200)

**Điểm cần thấy rõ:**
1. Danh sách có **nhiều hơn 1 phím tắt** — phím tắt mới ở cuối danh sách
2. Phím tắt mới vừa thêm đang nổi bật (nền sáng hơn các hàng còn lại)
3. Biểu mẫu bên dưới đã **xoá trắng** — ô phím tắt và ô nội dung trống
4. Nút **Thêm mới** mờ (disabled vì biểu mẫu trống)

**Kỹ thuật chụp animation:**
Animation `fade-highlight` kéo dài **1500ms** sau khi tạo thành công. Chụp trong vòng 1 giây sau khi bấm Thêm mới. Nếu bỏ lỡ → xoá phím tắt vừa tạo → tạo lại → chụp ngay.

---

### 📸 Ảnh 4 — Bảng gợi ý phím tắt hiện ra khi gõ `/` trong ô chat

**Tên tệp:** `27-quick-messages-buoc-04.webp`

**Trạng thái màn hình:**
- Đóng cửa sổ **Tin nhắn nhanh**
- Mở một cuộc trò chuyện nhóm bất kỳ
- Trong ô nhập tin nhắn (`MentionInputInline`), đã gõ `/xinchao` (hoặc chỉ `/xin`)
- Bảng gợi ý `ShortcutDropdown` **đang hiển thị** phía trên ô nhập
- Có **ít nhất 1 mục** trong bảng gợi ý khớp với chữ đang gõ

**Bố cục cần thấy:**
```
┌──────────────────────────────────────────────────────────────────┐
│ KHUNG CHAT                                                        │
│                                                                   │
│  [tin nhắn của người khác]                                       │
│  [tin nhắn của người khác]                                       │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │ BẢNG GỢI Ý  (ShortcutDropdown, w-80, z-100, bg-white)     │   │
│  │ ⚡ /xinchao                [Enter] ← MỤC ĐANG CHỌN (brand) │   │
│  │    Xin chào! Tôi sẽ phản hồi ngay.                        │   │
│  │ ⚡ /xin                                                    │   │
│  │    Xin chào! Tôi sẽ phản hồi ngay.                        │   │
│  └────────────────────────────────────────────────────────────┘   │
│  ─────────────────────────────────────────────────────────────── │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │ [📎] [🖼️]  /xinchao_        [💬] [⬆️]                      │   │
│  │              ↑ ô nhập đang gõ                              │   │
│  └────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **bảng gợi ý** (`data-testid="shortcut-dropdown"`) — hộp trắng bo góc hiển thị danh sách phím tắt khớp với chữ đang gõ

**Điểm cần thấy rõ:**
1. Ô nhập tin nhắn ở phía dưới có text `/xin` hoặc `/xinchao` đang gõ
2. Bảng gợi ý hiển thị **phía trên** ô nhập (vị trí tự tính theo `getCaretCoordinates()`)
3. Mỗi mục trong bảng gợi ý có:
   - Biểu tượng tia sét ⚡ (`Zap`, text-brand-600 khi được chọn, text-gray-400 khi không)
   - Phím tắt in đậm (ví dụ: `/xinchao`) — phần khớp với chữ gõ được tô vàng (`bg-yellow-200`)
   - Nội dung mẫu thu gọn bên dưới (1 dòng, `truncate`)
4. Mục đang được chọn có:
   - Nền brand-50
   - Viền trái 2px màu brand-500 (`border-l-2 border-brand-500`)
   - Nhãn "Enter" ở góc phải

**Cách gõ để bảng hiện:**
- Gõ `/` → bảng hiện toàn bộ danh sách
- Gõ `/xin` → bảng lọc chỉ còn những phím tắt chứa "xin"
- Chụp khi bảng đang hiển thị, chưa bấm Enter/chọn

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  Tạo sẵn 2-3 phím tắt: /xin, /nhan, /tre
  Mở hệ thống ở màn hình chính
  ↓
Ảnh 1  →  Bấm biểu tượng Công cụ (cờ lê) trên thanh bên trái
           Bảng Công cụ bật ra
           → CHỤP (đánh dấu ô Tin nhắn nhanh)
           Chưa bấm ô Tin nhắn nhanh
           ↓
Ảnh 2  →  Bấm ô Tin nhắn nhanh
           Cửa sổ Tin nhắn nhanh mở
           Nhập phím tắt: xinchao
           Nhập nội dung: Xin chào! Tôi sẽ phản hồi ngay.
           → CHỤP (đánh dấu ô phím tắt)
           Chưa bấm Thêm mới
           ↓
Ảnh 3  →  Bấm Thêm mới
           Phím tắt mới hiện trong danh sách + đang tô sáng
           → CHỤP NGAY TRONG 1 GIÂY (đánh dấu hàng vừa thêm)
           ↓
Ảnh 4  →  Đóng cửa sổ Tin nhắn nhanh
           Mở một cuộc trò chuyện nhóm bất kỳ
           Bấm vào ô nhập tin nhắn
           Gõ /xinchao (hoặc /xin)
           Bảng gợi ý hiển thị
           → CHỤP (đánh dấu bảng gợi ý)
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

□ Ảnh 1: Bảng Công cụ ĐANG MỞ, ô Tin nhắn nhanh thấy rõ, cửa sổ CHƯA MỞ
□ Ảnh 2: Cửa sổ Tin nhắn nhanh MỞ, ô phím tắt CÓ GIÁ TRỊ hợp lệ, dòng hướng dẫn hiển thị
□ Ảnh 3: Phím tắt mới ĐANG TÔ SÁNG trong danh sách, biểu mẫu ĐÃ TRỐNG
□ Ảnh 4: Bảng gợi ý ĐANG HIỂN THỊ, ô nhập có dấu / + chữ gõ, mục khớp thấy rõ
□ Dữ liệu mẫu có nghĩa (không phải "test123", "abc123")
□ Không thấy thông tin nhạy cảm (tên thật, số điện thoại, nội dung nội bộ)
□ Ảnh rõ nét, không bị mờ hoặc bị cắt xén
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
                    ├── 27-quick-messages-buoc-01.webp  ← bảng Công cụ, ô Tin nhắn nhanh
                    ├── 27-quick-messages-buoc-02.webp  ← cửa sổ Tin nhắn nhanh, ô phím tắt đang nhập
                    ├── 27-quick-messages-buoc-03.webp  ← danh sách sau khi thêm, hàng mới tô sáng
                    └── 27-quick-messages-buoc-04.webp  ← bảng gợi ý /phimtat trong ô chat
```

---

## Giải phẫu cửa sổ Tin nhắn nhanh (QuickMessageManager)

```
┌─────────────────────────────────────────────────────────────────────┐
│ Dialog  (max-w-[700px])                                             │
│                                                                     │
│  TIÊU ĐỀ   "Tin nhắn nhanh"   (text-xl font-semibold)             │
│  MÔ TẢ     "Tạo phím tắt ... Gõ /phimtat trong chat để sử dụng."  │
│                                                                     │
│  ─── DANH SÁCH  (border border-brand-200, rounded-lg, p-4) ──────  │
│   "Danh sách tin nhắn (N)"  (h4, text-sm font-semibold gray-700)   │
│   ─── divider ────────────────────────────────────────────────────  │
│   Vùng cuộn  (max-h-[240px], overflow-y-auto)                      │
│   ┌───────────────────────────────────────────────────────────┐    │
│   │  /key  (badge: brand-100 bg, brand-700 text, rounded-md)  │    │
│   │  content  (text-sm text-gray-700)                         │    │
│   │                           [✏️ Pencil]  [🗑️ Trash2] (hover) │    │
│   └───────────────────────────────────────────────────────────┘    │
│   Trạng thái trống: "Chưa có tin nhắn nào."  (italic, gray-400)    │
│                                                                     │
│  ─── BIỂU MẪU ─────────────────────────────────────────────────── │
│   Ô phím tắt:  [/][_________________]  (Input, pl-9)               │
│   Gợi ý: "💡 Trong chat, gõ /key để dùng phím tắt này"            │
│   Ô nội dung:  [Textarea, h-28]                                    │
│                                                                     │
│  ─── FOOTER ───────────────────────────────────────────────────── │
│                                   [Hủy]  [Thêm mới / Lưu thay đổi]│
└─────────────────────────────────────────────────────────────────────┘
```

---

## Giải phẫu bảng gợi ý phím tắt (ShortcutDropdown)

```
┌──────────────────────────────────────────────────────────────────┐
│ ShortcutDropdown  (w-80, max-h-[300px], z-[100], shadow-lg)      │
│ Vị trí: ngay phía trên ô nhập, theo toạ độ con trỏ              │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │ ⚡  /xinchao (phần khớp tô vàng bg-yellow-200)   [Enter] │    │
│  │     Xin chào! Tôi sẽ phản hồi ngay.                     │    │
│  │  ← bg-brand-50 + border-l-2 border-brand-500 = ĐANG CHỌN│    │
│  ├──────────────────────────────────────────────────────────┤    │
│  │ ⚡  /xin                                                  │    │
│  │     Xin chào! Tôi sẽ phản hồi ngay.                     │    │
│  │  ← hover:bg-gray-50                                      │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                                                   │
│  Trạng thái trống: "Không tìm thấy phím tắt"  (text-center gray) │
└──────────────────────────────────────────────────────────────────┘
```

**Cách kích hoạt bảng gợi ý:**
- Gõ `/` tại đầu dòng hoặc sau dấu cách → bảng hiện toàn bộ
- Tiếp tục gõ → lọc theo tên phím tắt (contains matching, không phân biệt hoa thường)
- Phần khớp được tô vàng `bg-yellow-200`
- Điều hướng: phím ↑↓, chọn: Enter hoặc Tab, đóng: Esc

---

## Phân biệt với bảng gợi ý đề cập (@mention)

| | Bảng gợi ý phím tắt | Bảng gợi ý đề cập |
|--|--|--|
| Kích hoạt | Gõ `/` | Gõ `@` |
| Nội dung | Danh sách phím tắt đã tạo | Danh sách thành viên nhóm |
| Biểu tượng | ⚡ Tia sét | Avatar người dùng |
| Kết quả khi chọn | Điền nội dung đầy đủ vào ô chat | Chèn @tên vào ô chat |
| Phần gợi ý xanh | brand-500 (viền trái) | brand-500 (nền) |

---

## Phân biệt 2 cách dùng phím tắt

Có **2 cách** để chèn phím tắt — bài viết hướng dẫn cách 1 (dùng bảng gợi ý), nhưng cả 2 đều hoạt động:

| | Cách 1 — Bảng gợi ý (bài hướng dẫn) | Cách 2 — Tự thay thế |
|--|--|--|
| Thao tác | Gõ `/xin` → chọn từ bảng gợi ý → Enter | Gõ `/xinchao ` (có dấu cách cuối) |
| Kích hoạt | Dropdown hiện ngay khi gõ `/` | Thay thế tự động khi gõ dấu cách sau phím tắt |
| Phù hợp | Khi không nhớ chính xác tên phím tắt | Khi thuộc chính xác tên phím tắt |
| Nguồn code | `ShortcutDropdown` + `handleShortcutSelect` | `useQuickMessageReplacement` (pattern `/(\w+)\s`) |

---

## Ghi chú bổ sung

### Giới hạn ký tự
- Phím tắt: tối đa **50 ký tự**, chỉ `[a-zA-Z0-9_-]`
- Nội dung: tối đa **500 ký tự** (API contract), trường nhập trong UI cho phép tới 10000 ký tự

### Phím tắt trùng tên
Nếu tạo 2 phím tắt cùng tên → API trả về lỗi **409 Conflict**. Thông báo lỗi sẽ hiển thị trong form.

### Sửa / Xoá phím tắt
- Di chuột lên hàng trong danh sách → biểu tượng bút chì ✏️ và thùng rác 🗑️ hiện ở góc phải (`opacity-0 group-hover:opacity-100`)
- Bấm ✏️ → biểu mẫu bên dưới điền sẵn thông tin cũ, nút đổi thành "Lưu thay đổi"
- Bấm 🗑️ → hộp thoại xác nhận "Bạn có chắc chắn muốn xóa tin nhắn nhanh này?"

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong kho `Quoc-Nam-Guide`.

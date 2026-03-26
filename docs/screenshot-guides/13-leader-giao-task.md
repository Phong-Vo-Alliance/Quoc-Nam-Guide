# Hướng Dẫn Chụp Hình — Bài 13: Giao công việc cho nhân viên từ thông tin tiếp nhận

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/13-leader-giao-task.mdx`
**Số ảnh cần chụp:** 5 ảnh
**Cập nhật lần cuối:** 2026-03-25

---

## Hiểu đúng luồng trước khi chụp

Bài này gồm **hai giai đoạn** nối tiếp nhau — phải thực hiện đúng thứ tự:

```
GIAI ĐOẠN 1 — TIẾP NHẬN
  Tin nhắn trong chat
  → Di chuột → Hàng nút hành động hiện ra
  → Bấm biểu tượng "Tiếp nhận thông tin" (icon Inbox / hộp thư đến)
  → Thông báo "Đã tiếp nhận thông tin." (toast xanh)
  → Bảng bên phải TỰ ĐỘNG mở, chuyển sang tab Công Việc
  → Phần "Thông tin đã tiếp nhận" xuất hiện ở đầu bảng
  → Thẻ thông tin có trạng thái "waiting" — hiển thị nút [Giao việc]

GIAI ĐOẠN 2 — GIAO VIỆC
  Bấm nút [Giao việc] trên thẻ thông tin
  → AssignTaskSheet trượt ra từ phải (420px)
  → Ô "Tên công việc" đã tự điền từ nội dung tin nhắn
  → Chọn nhân viên + mẫu danh sách kiểm tra
  → Bấm [Giao việc]
  → Thẻ thông tin chuyển trạng thái: "✓ Đã giao việc"
  → Công việc mới xuất hiện trong nhóm Chưa xử lý bên dưới
```

### So sánh với bài 12 (Tạo công việc từ tin nhắn)

| | Bài 12 | Bài 13 |
|--|--------|--------|
| Điểm khởi đầu | Nút `ClipboardPlus` khi hover tin nhắn | Nút `Inbox` khi hover tin nhắn |
| Giai đoạn | 1 giai đoạn (thẳng sang tạo việc) | 2 giai đoạn (tiếp nhận → giao việc) |
| Trung gian | Không có | Có thẻ **Thông tin đã tiếp nhận** |
| Mục đích | Tạo việc ngay từ một yêu cầu rõ ràng | Ghi nhận thông tin cần xử lý trước, giao việc sau |

---

## Chuẩn bị trước khi chụp

### Tài khoản
Bắt buộc dùng tài khoản **Leader** hoặc **Admin**.

### Dữ liệu cần chuẩn bị

| Điều kiện | Lý do |
|-----------|-------|
| Nhóm chat có **tin nhắn văn bản của thành viên khác** chưa được tiếp nhận và chưa có công việc | Để thấy đủ cả 2 nút: `Inbox` (tiếp nhận) và `ClipboardPlus` (giao việc từ tin nhắn). Chỉ dùng nút `Inbox` cho bài này |
| Nhóm có ít nhất **2 nhân viên** | Ô "Giao cho" có danh sách để chọn |
| Nhóm đã được cấu hình **ít nhất 1 mẫu danh sách kiểm tra** | Để thấy phần xem trước mẫu ở bước 4 |
| Bảng bên phải đang **đóng** khi bắt đầu chụp | Để thấy rõ bảng **tự động mở** ở bước 2 — minh họa hành vi hệ thống |

**Gợi ý nội dung tin nhắn test:**
```
"Khách hàng Công ty ABC phản hồi lô hàng HK-2403 bị thiếu 5 thùng, cần kiểm tra lại kho"
```
→ Nội dung đủ dài để thấy rõ trong thẻ thông tin và tự điền vào ô tên công việc.

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |
| Bảng bên phải | **Đang đóng** khi bắt đầu bài (để thấy tự động mở) |
| Thanh địa chỉ | Ẩn hoặc crop ra ngoài ảnh |

### Màu và dạng đánh dấu
- Màu: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc 2–3px, hoặc mũi tên khi phần tử nhỏ khó thấy
- **1 điểm đánh dấu** mỗi ảnh

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Di chuột vào tin nhắn, bấm biểu tượng Tiếp nhận thông tin

**Tên tệp:** `13-leader-giao-task-buoc-01.webp`

**Mục tiêu:** Cho thấy hàng nút hành động đang hiện và biểu tượng **Tiếp nhận thông tin** (hộp thư đến / `Inbox`) được làm nổi bật.

**Trạng thái màn hình:**
- Con trỏ chuột đang đặt trên bong bóng tin nhắn văn bản của người khác
- Hàng nút hành động đang hiện (hover state)
- Bảng bên phải đang đóng (chưa có `ConversationDetailPanel`)

**Bố cục hàng nút hành động — thứ tự từ trái sang phải:**
```
┌─────────────────────────────────────────────────────────┐
│  [Avatar] Tên người gửi                      10:30 SA   │
│           ┌──────────────────────────────────────────┐  │
│           │  "Khách hàng Công ty ABC phản hồi..."    │  │  ← bong bóng
│           └──────────────────────────────────────────┘  │
│                                                         │
│  Hàng nút hành động (hover):                           │
│  ┌──────────────────────────────────────────────────┐  │
│  │  [↩ Trả lời]  [⭐ Đánh dấu]  [📋 Giao việc]  [📥 Tiếp nhận]  │  │
│  └──────────────────────────────────────────────────┘  │
│                                       ↑ Inbox icon     │
└─────────────────────────────────────────────────────────┘
```

**Phân biệt 2 nút dễ nhầm:**
| Nút | Biểu tượng | Chức năng | Bài nào dùng |
|-----|-----------|-----------|--------------|
| `ClipboardPlus` | 📋 (bảng kẹp + dấu cộng) | Giao việc trực tiếp từ tin nhắn | Bài 12 |
| `Inbox` | 📥 (hộp thư đến) | **Tiếp nhận thông tin** trước | **Bài này (13)** |

→ Đánh dấu **nút `Inbox`**, không phải nút `ClipboardPlus`.

**Đánh dấu:** Viền màu #10B981 quanh **biểu tượng Inbox** (hộp thư đến) trong hàng nút hành động

**Kỹ thuật chụp (hover state):**
- Dùng Snipping Tool → chế độ "Delay 3–5 giây" → bấm chụp → di chuột vào bong bóng → giữ yên
- Hoặc nhấn **Print Screen** ngay khi hàng nút đang hiện
- Nếu không kịp: mở DevTools (F12) → tab Console → gõ `document.querySelector('[data-testid="confirm-info-button"]').closest('.hover-group').classList.add('force-show')` để giữ nút hiện (chỉ dùng khi thật cần thiết)

---

### 📸 Ảnh 2 — Tab Công Việc tự mở, phần Thông tin đã tiếp nhận xuất hiện

**Tên tệp:** `13-leader-giao-task-buoc-02.webp`

**Mục tiêu:** Cho thấy hệ thống **tự động mở bảng bên phải** và **tự chuyển sang tab Công Việc** sau khi tiếp nhận — thẻ thông tin mới có thẻ số đang chờ xử lý.

**Trạng thái màn hình:**
- Đã bấm Tiếp nhận ở bước 1
- Toast "Đã tiếp nhận thông tin." vừa xuất hiện hoặc đang hiện ở góc màn hình (nếu kịp chụp)
- Bảng bên phải đang **mở** (vừa tự mở), đang ở **tab Công Việc**
- Phần **"Thông tin đã tiếp nhận"** ở đầu bảng đang hiện, có thẻ số `1` màu vàng

**Bố cục bảng bên phải sau khi tiếp nhận:**
```
┌──────────────────────────────────────┐
│ [Thông Tin]  [Công Việc] ← active   │
│ ─────────────────────────────────── │
│ ┌─────────────────────────────────┐ │
│ │  📋 Thông tin đã tiếp nhận  [1] │ │  ← accordion đang mở, badge [1] vàng
│ │  ┌───────────────────────────┐  │ │
│ │  │  Khách hàng Công ty ABC...│  │ │  ← thẻ thông tin
│ │  │  Từ: [Tên người gửi]      │  │ │
│ │  │  Tiếp nhận lúc: 10:30     │  │ │
│ │  │                           │  │ │
│ │  │  [    Giao việc    ]       │  │ │  ← nút Giao việc đang màu xanh
│ │  └───────────────────────────┘  │ │
│ └─────────────────────────────────┘ │
│                                      │
│ ─── Nhóm Chờ duyệt (0) ▼ ────────  │
│ ─── Nhóm Chưa xử lý (X) ▼ ────────  │
└──────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **phần "Thông tin đã tiếp nhận"** — bao gồm tiêu đề accordion và thẻ thông tin bên trong

**Điểm cần thấy rõ:**
1. Tab **Công Việc** đang active (được chọn, không phải tab Thông Tin)
2. Thẻ số **[1]** màu vàng bên cạnh tên accordion — cho thấy có 1 thông tin chờ xử lý
3. Thẻ thông tin hiển thị **tên tin nhắn được rút gọn** và tên người gửi
4. Nút **[Giao việc]** màu xanh đang hiện ở cuối thẻ
5. Nếu kịp: Toast "Đã tiếp nhận thông tin." ở góc màn hình

---

### 📸 Ảnh 3 — Tấm giao việc trượt ra, ô tên công việc đã tự điền

**Tên tệp:** `13-leader-giao-task-buoc-03.webp`

**Mục tiêu:** Cho thấy `AssignTaskSheet` đã mở, ô **Tên công việc** đã được tự điền từ nội dung tin nhắn gốc.

**Trạng thái màn hình:**
- Đã bấm nút **[Giao việc]** trên thẻ thông tin ở bước 2
- `AssignTaskSheet` đang mở (chiều rộng ~420px, trượt từ phải)
- Ô "Tên công việc" có nội dung tự điền — **chưa chỉnh sửa**

**Bố cục tấm giao việc:**
```
┌──────────────────────────────────────┐
│  Giao công việc              [✕]    │
│  Tạo công việc mới cho thành viên   │
├──────────────────────────────────────┤
│                                      │
│  Tên công việc *                     │
│  ┌────────────────────────────────┐  │
│  │ Khách hàng Công ty ABC phản... │  │  ← đã tự điền từ tin nhắn
│  └────────────────────────────────┘  │
│                                      │
│  Giao cho *                          │
│  ┌────────────────────────────────┐  │
│  │ [Nguyễn Văn A            ▼]   │  │  ← chọn mặc định người đầu tiên
│  └────────────────────────────────┘  │
│                                      │
│  Mẫu danh sách kiểm tra             │
│  ┌────────────────────────────────┐  │
│  │ [Chọn mẫu danh sách kiểm tra ▼]│  │  ← chưa chọn
│  └────────────────────────────────┘  │
│                                      │
├──────────────────────────────────────┤
│  [    Huỷ    ]  [   Giao việc   ]   │
└──────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô "Tên công việc"** — phần đang hiển thị nội dung tự điền từ tin nhắn

**Điểm cần thấy rõ:**
1. Tiêu đề tấm: **"Giao công việc"** (chữ đậm) — khác với bài 12 có thể cùng tấm nhưng nguồn khác
2. Ô tên có **nội dung** — không còn trống, không có placeholder
3. Nhãn có dấu **\*** đỏ = bắt buộc điền

---

### 📸 Ảnh 4 — Đã chọn nhân viên và mẫu danh sách kiểm tra, xem trước mục kiểm tra

**Tên tệp:** `13-leader-giao-task-buoc-04.webp`

**Mục tiêu:** Cho thấy trạng thái form sau khi điền xong: ô **Giao cho** đã chọn nhân viên, ô **Mẫu danh sách kiểm tra** đã chọn mẫu, phần xem trước mục kiểm tra đang hiện.

**Trạng thái màn hình:**
- Ô **Giao cho** (`task-assignee-select`): đã chọn tên nhân viên cụ thể
- Ô **Mẫu danh sách kiểm tra** (`checklist-template-dropdown`): đã chọn một mẫu
- Phần xem trước mục kiểm tra (`checklist-preview`): đang hiển thị các mục

**Bố cục phần dưới tấm sau khi điền:**
```
┌──────────────────────────────────────┐
│  Giao cho *                          │
│  ┌────────────────────────────────┐  │
│  │  Trần Thị B                 ▼  │  │  ← đã chọn nhân viên
│  └────────────────────────────────┘  │
│                                      │
│  Mẫu danh sách kiểm tra             │
│  ┌────────────────────────────────┐  │
│  │  Kiểm tra nhập kho (Mặc định) ▼│  │  ← đã chọn mẫu
│  └────────────────────────────────┘  │
│                                      │
│  ┌────────────────────────────────┐  │  ← checklist-preview
│  │  Các mục danh sách kiểm tra (4)│  │    bg-gray-50, border
│  │  ○ Đối chiếu phiếu với đơn ĐH  │  │
│  │  ○ Kiểm tra số lượng từng mặt  │  │
│  │  ○ Ghi nhận hàng hỏng / thiếu  │  │
│  │  ○ Ký xác nhận biên bản        │  │
│  └────────────────────────────────┘  │
│                                      │
├──────────────────────────────────────┤
│  [    Huỷ    ]  [   Giao việc   ]   │  ← nút Giao việc đang sáng
└──────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **khung xem trước mẫu** (`checklist-preview`) — vùng nền xám nhạt liệt kê các mục danh sách kiểm tra

**Điểm cần thấy rõ:**
1. Ô "Giao cho" hiển thị **tên nhân viên** đã chọn
2. Ô "Mẫu danh sách kiểm tra" hiển thị **tên mẫu** (không còn placeholder)
3. Khung xem trước có tiêu đề "Các mục danh sách kiểm tra (X)" và liệt kê ≥ 3 mục với biểu tượng ○
4. Nút **[Giao việc]** cuối tấm đang **sáng** (không bị mờ)

---

### 📸 Ảnh 5 — Kết quả: thẻ thông tin chuyển "Đã giao việc", công việc mới xuất hiện

**Tên tệp:** `13-leader-giao-task-buoc-05.webp`

**Mục tiêu:** Cho thấy kết quả cuối cùng — thẻ thông tin xác nhận đã giao, công việc mới xuất hiện trong danh sách.

**Trạng thái màn hình:**
- Tấm `AssignTaskSheet` đã đóng
- Bảng bên phải đang hiện tab **Công Việc**
- Phần "Thông tin đã tiếp nhận" vẫn hiển thị nhưng thẻ đã chuyển trạng thái
- Bên dưới, công việc mới xuất hiện trong nhóm **Chưa xử lý**

**Bố cục bảng bên phải sau khi giao xong:**
```
┌──────────────────────────────────────────┐
│ [Thông Tin]  [Công Việc] ← active       │
│ ──────────────────────────────────────── │
│ ┌──────────────────────────────────────┐ │
│ │  📋 Thông tin đã tiếp nhận          │ │  ← accordion (badge [1] còn hiện
│ │  ┌────────────────────────────────┐  │ │    hoặc đã ẩn tùy trạng thái)
│ │  │  Khách hàng Công ty ABC...     │  │ │
│ │  │  Từ: [Tên người gửi]          │  │ │
│ │  │                                │  │ │
│ │  │  ✓ Đã giao việc               │  │ │  ← trạng thái mới (xanh lá)
│ │  └────────────────────────────────┘  │ │
│ └──────────────────────────────────────┘ │
│                                          │
│ ─── Chờ duyệt (0) ▼ ──────────────────  │
│ ─── Chưa xử lý (1) ▼ ──────────────────  │
│ ┌────────────────────────────────────┐   │
│ │  Khách hàng Công ty ABC...  [mới]  │   │  ← công việc mới
│ │  Giao cho: Trần Thị B             │   │
│ │  Nhóm: [Tên loại việc]            │   │
│ └────────────────────────────────────┘   │
└──────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **dòng "✓ Đã giao việc"** trong thẻ thông tin — dòng xanh lá xác nhận hoàn tất

**Điểm cần thấy rõ:**
1. Thẻ thông tin hiển thị dòng **"✓ Đã giao việc"** bằng chữ xanh lá — không còn nút [Giao việc] nữa
2. Công việc mới xuất hiện trong nhóm **Chưa xử lý** phía dưới, tên khớp với nội dung tin nhắn gốc
3. Trong ô "Giao cho" trên thẻ công việc: tên nhân viên vừa chọn ở bước 4

**Lưu ý kỹ thuật:**
- Chụp **ngay sau khi tấm đóng** — công việc mới xuất hiện tức thì trong danh sách
- Nếu nhóm **Chưa xử lý** đang ở trạng thái thu gọn (▼), bấm để mở rộng trước khi chụp

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  → Đăng nhập tài khoản Leader
  → Mở nhóm chat có tin nhắn của nhân viên (chưa tiếp nhận, chưa có việc)
  → Đảm bảo bảng bên phải đang ĐÓNG
  → Đảm bảo nhóm đã có mẫu danh sách kiểm tra được cấu hình
  ↓
Ảnh 1  →  Di chuột vào tin nhắn cần xử lý
           Hàng nút hiện ra → Dùng chụp có độ trễ
           → CHỤP (đánh dấu nút Inbox / Tiếp nhận)
           Bấm nút Tiếp nhận (Inbox icon)
           ↓
Ảnh 2  →  Bảng bên phải tự mở → Tab Công Việc
           Thẻ Thông tin đã tiếp nhận xuất hiện
           → CHỤP nhanh khi toast còn hiện (nếu kịp)
           (đánh dấu phần accordion Thông tin đã tiếp nhận)
           ↓
Ảnh 3  →  Bấm [Giao việc] trên thẻ thông tin
           Tấm trượt ra, ô tên tự điền
           → CHỤP
           (đánh dấu ô Tên công việc)
           ↓
Ảnh 4  →  Chọn nhân viên trong ô Giao cho
           Chọn mẫu danh sách kiểm tra → Xem trước mục xuất hiện
           → CHỤP
           (đánh dấu khung xem trước mẫu)
           ↓
Ảnh 5  →  Bấm [Giao việc] → Tấm đóng
           Thẻ thông tin hiện "✓ Đã giao việc"
           Công việc mới xuất hiện trong Chưa xử lý
           → CHỤP
           (đánh dấu dòng "✓ Đã giao việc" trong thẻ thông tin)
           ↓
Hoàn thành ✅
```

---

## Bảng kiểm tra trước khi nộp

```
□ Đủ 5 ảnh, đúng tên tệp (13-leader-giao-task-buoc-01 đến 05)
□ Chiều rộng: 1280px
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu màu #10B981

□ Ảnh 1: Nút đánh dấu là Inbox (📥) — KHÔNG phải ClipboardPlus (📋)
□ Ảnh 2: Tab Công Việc đang active, phần Thông tin đã tiếp nhận hiện rõ + badge [1]
□ Ảnh 3: Tấm đang mở, ô tên công việc có nội dung tự điền (không trống)
□ Ảnh 4: Ô Giao cho đã có tên nhân viên, mẫu đã chọn, khung xem trước mẫu hiện ≥ 3 mục
□ Ảnh 5: Dòng "✓ Đã giao việc" màu xanh lá trong thẻ thông tin + công việc mới trong Chưa xử lý

□ Không có thông tin nhạy cảm (tên thật, nội dung nội bộ)
□ Dùng tài khoản Leader — không dùng Staff
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
                    ├── 13-leader-giao-task-buoc-01.webp  ← hover tin nhắn, nút Tiếp nhận (Inbox)
                    ├── 13-leader-giao-task-buoc-02.webp  ← bảng tự mở, thẻ Thông tin đã tiếp nhận
                    ├── 13-leader-giao-task-buoc-03.webp  ← tấm giao việc mở, ô tên tự điền
                    ├── 13-leader-giao-task-buoc-04.webp  ← đã chọn nhân viên + mẫu + xem trước mục
                    └── 13-leader-giao-task-buoc-05.webp  ← kết quả: "✓ Đã giao việc" + công việc mới
```

---

## Câu hỏi thường gặp khi chụp

**H: Di chuột vào tin nhắn nhưng không thấy nút Inbox (Tiếp nhận)?**
Kiểm tra 3 nguyên nhân:
1. Đang dùng tài khoản **Staff** — Leader mới có nút này
2. Đây là tin nhắn **hệ thống** (SYS) — không có nút tiếp nhận, dùng tin nhắn văn bản thường
3. Tin nhắn đã được **liên kết với công việc** (`linkedTaskId` khác null) — nút Inbox không hiện. Dùng tin nhắn khác chưa có việc liên kết

**H: Bảng bên phải không tự mở sau khi bấm Tiếp nhận?**
→ Tính năng tự mở bảng được kích hoạt qua `setShowRight(true)` và `setTab("order")`. Nếu không tự mở: kiểm tra xem bảng có đang bị ẩn hoàn toàn do chiều rộng màn hình không (responsive breakpoint). Hãy đảm bảo cửa sổ đủ rộng (≥1280px).

**H: Thẻ thông tin hiện nhưng không có nút [Giao việc], chỉ có nút [Giao việc] bị disable?**
→ Thẻ ở trạng thái `"assigned"` (đã giao) hoặc `"transferred"` (đã chuyển nhóm). Cần dùng thẻ ở trạng thái `"waiting"` — tức là mới tiếp nhận và chưa xử lý.

**H: Sau khi bấm [Giao việc] cuối tấm, không thấy dòng "✓ Đã giao việc" trên thẻ?**
→ Hệ thống có thể cần 1–2 giây để cập nhật trạng thái. Chờ thêm rồi cuộn lên đầu tab Công Việc để thấy phần Thông tin đã tiếp nhận.

---

## Ghi chú bổ sung

**Nếu UI thay đổi sau khi chụp:**
Xem `docs/CONTENT_GUIDE.md` — Mục 10. Giữ nguyên tên tệp ảnh.

**Câu hỏi & hỗ trợ:**
Liên hệ BA phụ trách hoặc tạo yêu cầu trong kho `Quoc-Nam-Guide`.

# Hướng Dẫn Chụp Hình — Bài 12: Leader tạo công việc mới

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/12-leader-tao-task.mdx`
**Số ảnh cần chụp:** 5 ảnh
**Cập nhật lần cuối:** 2026-03-25

---

## Hiểu đúng luồng trước khi chụp

Tính năng tạo công việc từ tin nhắn hoạt động theo trình tự sau:

```
Tin nhắn trong khung chat
  → Di chuột vào → Hàng nút hành động hiện ra (hover-action-button)
  → Bấm nút "Giao việc" (ClipboardPlus icon)
  → AssignTaskSheet trượt ra từ bên phải màn hình (width: 420px)
  → Điền: Tên công việc / Giao cho / Mẫu danh sách kiểm tra
  → Bấm "Giao việc"
  → Sheet đóng lại
  → Tin nhắn gốc có thêm biểu tượng công việc
  → Một dòng thông báo hệ thống xuất hiện trong chat
  → Tab Công Việc bên phải tự động chuyển sang, hiện công việc mới
```

### Hai luồng mở form (chỉ chụp luồng 1)

| Luồng | Cách mở | Bài này chụp? |
|-------|---------|---------------|
| **Từ tin nhắn** | Di chuột → Bấm nút Giao việc trên bong bóng tin nhắn | ✅ Có |
| Từ thông tin xác nhận | Bấm "Tạo việc" trong mục Thông tin tiếp nhận | ❌ Không (bài khác) |

---

## Chuẩn bị trước khi chụp

### Tài khoản
Bắt buộc dùng tài khoản **Leader** hoặc **Admin**.
- Nút "Giao việc" chỉ hiện cho Leader/Admin — Staff không thấy.
- Không cần tài khoản đặc biệt, chỉ cần có vai trò Leader trở lên.

### Dữ liệu cần chuẩn bị

| Điều kiện | Lý do |
|-----------|-------|
| Nhóm chat có **ít nhất 2 thành viên** (ngoài Leader) | Ô "Giao cho" có danh sách nhân viên để chọn |
| Nhóm chat có **ít nhất 1 mẫu danh sách kiểm tra** được cấu hình | Phần xem trước mục kiểm tra mới hiển thị |
| Có **ít nhất 1 tin nhắn văn bản** trong nhóm chat **chưa có công việc liên kết** | Tin nhắn đã liên kết sẽ không hiện nút Giao việc |
| Tên tin nhắn test đủ ngắn, rõ nghĩa | Tên tự động điền vào ô "Tên công việc" — cần đọc được rõ |

**Gợi ý nội dung tin nhắn test:**
```
"Kiểm tra hàng nhập kho ngày 25/3, lô HK-2403"
```
→ Nội dung này sẽ tự điền vào ô tên công việc khi mở form.

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |
| Cột bên phải | Đang ở tab **Công Việc** (để thấy kết quả ở Ảnh 5) |
| Thanh địa chỉ | Ẩn hoặc crop ra ngoài ảnh |

### Màu và dạng đánh dấu
- Màu: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc 2–3px
- Đúng **1 điểm** mỗi ảnh, không đánh dấu nhiều nơi cùng lúc

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Di chuột vào tin nhắn, hàng nút hành động hiện ra

**Tên tệp:** `12-leader-tao-task-buoc-01.webp`

**Mục tiêu:** Cho thấy hàng nút hành động xuất hiện khi di chuột vào tin nhắn — và nút Giao việc (biểu tượng bảng kẹp có dấu cộng) nằm ở đó.

**Trạng thái màn hình:**
- Con trỏ chuột đang đặt trên một bong bóng tin nhắn văn bản
- Hàng nút hành động đang hiển thị (hover state) — các nút nhỏ nổi trên góc trên/trái của bong bóng

**Bố cục hàng nút hành động:**
```
┌─────────────────────────────────────────────────────────────┐
│                       Khung chat                            │
│                                                             │
│  [Avatar] Tên người gửi                          10:30 SA  │
│           ┌──────────────────────────────────────────────┐ │
│           │  "Kiểm tra hàng nhập kho ngày 25/3..."       │ │ ← bong bóng tin nhắn
│           └──────────────────────────────────────────────┘ │
│                                                             │
│  Hàng nút hành động hiện khi hover:                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ [↩ Trả lời] [⭐ Đánh dấu] [📋 Giao việc]            │  │
│  └──────────────────────────────────────────────────────┘  │
│                ↑ hover-action-button xuất hiện             │
│                  (bg-white, border, shadow nhẹ)            │
└─────────────────────────────────────────────────────────────┘
```

**Vị trí nút "Giao việc":**
- Biểu tượng: `ClipboardPlus` (bảng kẹp có dấu cộng nhỏ góc phải)
- `data-testid="create-task-button"`
- Màu khi hover: xanh emerald (`hover:text-emerald-600`)
- Nút này **chỉ hiện** khi tin nhắn chưa có công việc liên kết (`!message.linkedTaskId`)

**Đánh dấu:** Viền màu #10B981 quanh **nút Giao việc** (biểu tượng bảng kẹp) trong hàng nút hành động

**Lưu ý kỹ thuật chụp:**
- Phải giữ con trỏ chuột trên bong bóng tin nhắn khi chụp — nếu chuột rời đi hàng nút sẽ ẩn
- Dùng công cụ chụp ảnh màn hình có độ trễ (ví dụ: Snipping Tool → "Delay 3 seconds") để kịp di chuột vào đúng vị trí
- Nên chụp bong bóng tin nhắn **của người khác** (không phải tin nhắn của chính mình) để giao diện tự nhiên hơn

---

### 📸 Ảnh 2 — Tấm thông tin "Giao công việc" vừa trượt ra, ô tên tự điền

**Tên tệp:** `12-leader-tao-task-buoc-02.webp`

**Mục tiêu:** Cho thấy tấm thông tin bên phải đã mở, ô "Tên công việc" đã được tự điền từ nội dung tin nhắn.

**Trạng thái màn hình:**
- `AssignTaskSheet` đang mở (trượt ra từ phải: `side="right"`, `width: 420px`)
- Ô **"Tên công việc"** (`data-testid="task-title-input"`) đã có nội dung tự điền từ tin nhắn gốc
- Con trỏ chuột đang ở trong ô tên công việc (đang focus), hoặc chưa chỉnh gì

**Bố cục tấm thông tin:**
```
┌──────────────────────────────────────────────┐
│  Giao công việc                    [✕ Đóng]  │  ← SheetHeader
│  Tạo công việc mới cho thành viên trong nhóm │
├──────────────────────────────────────────────┤
│                                              │
│  Tên công việc *                             │
│  ┌────────────────────────────────────────┐  │
│  │ Kiểm tra hàng nhập kho ngày 25/3...    │  │  ← đã tự điền
│  └────────────────────────────────────────┘  │
│                                              │
│  Giao cho *                                  │
│  ┌────────────────────────────────────────┐  │
│  │ [Nguyễn Văn A ▼]                       │  │  ← tự chọn mặc định
│  └────────────────────────────────────────┘  │
│                                              │
│  Mẫu danh sách kiểm tra                     │
│  ┌────────────────────────────────────────┐  │
│  │ [Chọn mẫu checklist ▼]                 │  │
│  └────────────────────────────────────────┘  │
│                                              │
├──────────────────────────────────────────────┤
│  [    Huỷ    ]  [     Giao việc     ]        │  ← SheetFooter
└──────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô "Tên công việc"** — cụ thể là toàn bộ `<Input>` đang hiển thị nội dung tự điền

**Điểm cần thấy rõ:**
1. Tiêu đề tấm: **"Giao công việc"** (chữ đậm) + dòng phụ "Tạo công việc mới cho thành viên trong nhóm"
2. Ô "Tên công việc" có **nội dung tự điền** — không còn trống
3. Nhãn có dấu **\*** đỏ = bắt buộc

**Lưu ý kỹ thuật chụp:**
- Khung chat bên trái vẫn có thể thấy được (tấm thông tin chỉ che 420px từ bên phải)
- Đảm bảo tấm thông tin đã tải xong (không còn hiện vòng tròn xoay `Loader2`)

---

### 📸 Ảnh 3 — Ô "Giao cho" đang mở, chọn nhân viên

**Tên tệp:** `12-leader-tao-task-buoc-03.webp`

**Mục tiêu:** Cho thấy trình đơn chọn nhân viên đang mở, có danh sách tên các thành viên trong nhóm.

**Trạng thái màn hình:**
- Đã bấm vào ô **"Giao cho"** (`data-testid="task-assignee-select"`)
- Trình đơn thả xuống `SelectContent` (`data-testid="task-assignee-list"`) đang mở
- Hiển thị 2–4 tên nhân viên
- Một trong số đó có ghi chú **(Tôi)** bên cạnh — đây là tên của Leader đang đăng nhập

**Bố cục trình đơn chọn nhân viên:**
```
┌─────────────────────────────────────────────────┐
│  Giao cho *                                     │
│  ┌───────────────────────────────────────────┐  │
│  │ Nguyễn Văn A ▲  (đang chọn, caret lên)    │  │
│  └───────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────┐  │  ← SelectContent dropdown
│  │  Nguyễn Văn A                              │  │
│  │  Trần Thị B                                │  │
│  │  Lê Văn C (Tôi)          ← Leader tự chọn │  │
│  │  Phạm Thị D                                │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **trình đơn thả xuống** (`SelectContent`) đang hiển thị danh sách nhân viên — tức là phần hộp danh sách tên bên dưới ô chọn

**Điểm cần thấy rõ:**
1. Trình đơn chọn đang **mở** (không phải ở trạng thái đóng)
2. Có ít nhất **2 tên nhân viên** khác nhau
3. Có **ít nhất 1 tên** kèm ghi chú **(Tôi)** — đây là chính Leader

---

### 📸 Ảnh 4 — Đã chọn nhân viên, phần xem trước mục kiểm tra hiển thị

**Tên tệp:** `12-leader-tao-task-buoc-04.webp`

**Mục tiêu:** Cho thấy trạng thái form sau khi đã chọn xong mẫu danh sách kiểm tra — phần xem trước các mục kiểm tra hiện ra bên dưới.

**Trạng thái màn hình:**
- Ô "Giao cho" đã chọn một nhân viên (trình đơn đã đóng lại)
- Ô **"Mẫu danh sách kiểm tra"** (`data-testid="checklist-template-dropdown"`) đã chọn một mẫu
- Phần **xem trước mục kiểm tra** (`data-testid="checklist-preview"`) hiển thị bên dưới — khung nền xám nhạt, liệt kê 3–5 mục

**Bố cục phần xem trước mẫu:**
```
┌──────────────────────────────────────────────────┐
│  Mẫu danh sách kiểm tra                         │
│  ┌────────────────────────────────────────────┐  │
│  │ Kiểm tra nhập kho (Mặc định)            ▼  │  │  ← đã chọn xong
│  └────────────────────────────────────────────┘  │
│                                                  │
│  ┌────────────────────────────────────────────┐  │  ← checklist-preview
│  │  Các mục danh sách kiểm tra (4)            │  │    bg-gray-50, border
│  │  ○ Đối chiếu phiếu nhập với đơn đặt hàng  │  │
│  │  ○ Kiểm tra số lượng từng mặt hàng         │  │
│  │  ○ Ghi nhận hàng hỏng / thiếu hụt          │  │
│  │  ○ Ký xác nhận biên bản nhập kho            │  │
│  └────────────────────────────────────────────┘  │
│                                                  │
├──────────────────────────────────────────────────┤
│  [    Huỷ    ]  [     Giao việc     ]            │
└──────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **toàn bộ khung xem trước mẫu** (`data-testid="checklist-preview"`) — phần khung nền xám có liệt kê các mục kiểm tra

**Điểm cần thấy rõ:**
1. Ô "Mẫu danh sách kiểm tra" đã hiển thị **tên mẫu** (không còn chữ "Chọn mẫu checklist")
2. Khung xem trước bên dưới có **dòng tiêu đề** "Các mục danh sách kiểm tra (X)" và **danh sách các mục** với biểu tượng tròn ○ ở đầu mỗi dòng
3. Nút **"Giao việc"** ở cuối đang sáng (không bị mờ) — sẵn sàng để bấm

---

### 📸 Ảnh 5 — Công việc tạo xong, thông báo hệ thống hiện trong chat

**Tên tệp:** `12-leader-tao-task-buoc-05.webp`

**Mục tiêu:** Cho thấy kết quả sau khi bấm "Giao việc" — tấm thông tin đã đóng, dòng thông báo hệ thống hiện trong chat, và tab Công Việc hiển thị công việc mới.

**Trạng thái màn hình:**
- Tấm thông tin `AssignTaskSheet` đã **đóng** hoàn toàn
- Trong khung chat xuất hiện thêm một **dòng thông báo hệ thống** (căn giữa, màu xám nhạt):
  `"Công việc '[tên công việc]' đã được tạo bởi [Leader] và giao cho [Nhân viên]"`
- Bên cạnh tin nhắn gốc có thêm **biểu tượng công việc** nhỏ (icon `MessageSquarePlus` màu emerald)
- Cột bên phải đã **chuyển sang tab Công Việc** và hiện công việc mới trong nhóm trạng thái **Chưa xử lý**

**Bố cục màn hình sau khi tạo xong:**
```
┌──────────────────────────────────┬──────────────────────────┐
│ KHUNG CHAT                       │ CỘT BÊN PHẢI             │
│                                  │ [Thông Tin] [Công Việc]  │
│ [Avatar] Nhân viên    10:30 SA   │               ↑ active   │
│ "Kiểm tra hàng nhập kho..." 📋   │ ──────────────────────── │
│  ↑ biểu tượng CV đã liên kết     │ [■ Nhóm] [Của tôi]       │
│                                  │ ──────────────────────── │
│ ──── [Thông báo hệ thống] ────   │ ● Chưa xử lý (1) ▲       │
│ Công việc "Kiểm tra hàng..."     │ ┌──────────────────────┐ │
│ đã được tạo bởi [Leader]         │ │ Kiểm tra hàng nhập.. │ │  ← công việc mới
│ và giao cho [Nhân viên]          │ │ Nhân viên • Nhập kho │ │
│                                  │ └──────────────────────┘ │
└──────────────────────────────────┴──────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **dòng thông báo hệ thống** trong khung chat (phần căn giữa, nền xám, ghi tên công việc vừa tạo)

**Điểm cần thấy rõ:**
1. **Dòng thông báo hệ thống** — căn giữa, font nhỏ màu xám, không có avatar người gửi, có nội dung đúng công thức: *"Công việc 'X' đã được tạo bởi Y và giao cho Z"*
2. Tin nhắn gốc có thêm **biểu tượng công việc** (icon nhỏ màu emerald) ở góc dưới/trên bong bóng
3. Tab **Công Việc** bên phải đang active
4. Công việc mới xuất hiện trong nhóm **"Chưa xử lý"** ở cột bên phải

**Lưu ý kỹ thuật chụp:**
- Cần chụp **ngay sau khi bấm Giao việc** — dòng thông báo hệ thống xuất hiện gần cuối danh sách tin nhắn
- Nếu màn hình chưa tự cuộn xuống cuối, hãy kéo xuống để thấy dòng thông báo
- Nên chụp cả khung chat + cột bên phải cùng một lúc để thấy kết quả đầy đủ

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  → Đăng nhập tài khoản Leader
  → Chọn nhóm chat có nhân viên + mẫu danh sách kiểm tra đã được cấu hình
  → Đảm bảo có ít nhất 1 tin nhắn văn bản chưa có công việc liên kết
  → Mở cột bên phải → tab Công Việc
  ↓
Ảnh 1  →  Di chuột vào tin nhắn
           Hàng nút hành động hiện ra
           → CHỤP (dùng chụp màn hình có độ trễ)
           (đánh dấu nút Giao việc)
           ↓
Ảnh 2  →  Bấm nút Giao việc
           Tấm thông tin trượt ra, ô tên công việc tự điền
           → CHỤP
           (đánh dấu ô "Tên công việc")
           ↓
Ảnh 3  →  Bấm vào ô "Giao cho"
           Trình đơn nhân viên mở ra
           → CHỤP
           (đánh dấu vùng danh sách tên)
           ↓
           Chọn một nhân viên (trình đơn đóng lại)
           ↓
Ảnh 4  →  Bấm vào ô "Mẫu danh sách kiểm tra" → chọn một mẫu
           Phần xem trước các mục kiểm tra hiện ra bên dưới
           → CHỤP
           (đánh dấu khung xem trước mẫu)
           ↓
Ảnh 5  →  Bấm nút "Giao việc"
           Tấm đóng lại, dòng thông báo hệ thống xuất hiện trong chat
           Công việc mới hiện ở tab Công Việc bên phải
           → CHỤP
           (đánh dấu dòng thông báo hệ thống)
           ↓
Hoàn thành ✅
```

---

## Bảng kiểm tra trước khi nộp

```
□ Đủ 5 ảnh, đúng tên tệp (12-leader-tao-task-buoc-01 đến 05)
□ Chiều rộng: 1280px
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu màu #10B981

□ Ảnh 1: Hàng nút hành động hiện rõ, nút Giao việc (ClipboardPlus) nổi bật
□ Ảnh 2: Tấm thông tin mở, ô tên công việc có nội dung tự điền
□ Ảnh 3: Trình đơn nhân viên đang MỞ, có ghi chú "(Tôi)" bên cạnh tên Leader
□ Ảnh 4: Khung xem trước mẫu hiện ra, liệt kê ≥ 3 mục kiểm tra
□ Ảnh 5: Dòng thông báo hệ thống + công việc mới trong tab Công Việc bên phải

□ Không có thông tin nhạy cảm (tên thật nhân viên, nội dung công việc nội bộ)
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
                    ├── 12-leader-tao-task-buoc-01.webp  ← hover tin nhắn, nút Giao việc
                    ├── 12-leader-tao-task-buoc-02.webp  ← tấm thông tin mở, ô tên tự điền
                    ├── 12-leader-tao-task-buoc-03.webp  ← trình đơn chọn nhân viên đang mở
                    ├── 12-leader-tao-task-buoc-04.webp  ← xem trước mẫu danh sách kiểm tra
                    └── 12-leader-tao-task-buoc-05.webp  ← kết quả: thông báo hệ thống + tab Công Việc
```

---

## Câu hỏi thường gặp khi chụp

**H: Không thấy nút Giao việc (ClipboardPlus) khi di chuột vào tin nhắn?**
→ Kiểm tra 2 trường hợp:
1. Đang dùng tài khoản **Staff** — Staff không có nút này. Đổi sang tài khoản Leader.
2. Tin nhắn đó **đã có công việc liên kết** — sẽ thấy biểu tượng `MessageSquarePlus` (xem trao đổi công việc) thay vì `ClipboardPlus` (tạo việc mới). Dùng tin nhắn khác chưa có công việc.

**H: Tấm thông tin mở ra nhưng đang hiện vòng xoay tải?**
→ Hệ thống đang tải danh sách thành viên + mẫu danh sách kiểm tra. Chờ vài giây. Nếu quá lâu, kiểm tra kết nối mạng.

**H: Ô "Mẫu danh sách kiểm tra" hiện "Không có Mẫu checklist nào"?**
→ Loại việc của nhóm chat này chưa được cấu hình mẫu. Nhờ Admin vào Quản trị → Tạo mẫu danh sách kiểm tra. Trong thời gian chờ, vẫn chụp bình thường (bỏ qua phần xem trước), hoặc chuyển sang nhóm chat khác đã có mẫu.

**H: Sau khi bấm "Giao việc", tấm thông tin đóng nhưng không thấy dòng thông báo trong chat?**
→ Cuộn xuống cuối danh sách tin nhắn — thông báo hệ thống xuất hiện ở vị trí mới nhất trong chuỗi tin nhắn. Nếu vẫn không thấy, chờ thêm 2–3 giây (phụ thuộc tốc độ SignalR).

**H: Chụp ảnh 1 khó vì chuột phải trên bong bóng thì không bấm chụp màn hình được?**
→ Dùng **Snipping Tool** (Windows) với chế độ "Delay 3–5 giây" → bấm New → di chuột vào bong bóng tin nhắn → hàng nút hiện → chờ đếm ngược → chụp. Hoặc dùng phím **Print Screen** ngay khi hàng nút đang hiện.

---

## Ghi chú bổ sung

**Nếu UI thay đổi sau khi chụp:**
Xem `docs/CONTENT_GUIDE.md` — Mục 10: *Update khi UI thay đổi*. Giữ nguyên tên tệp ảnh.

**Câu hỏi & hỗ trợ:**
Liên hệ BA phụ trách hoặc tạo yêu cầu trong kho `Quoc-Nam-Guide`.

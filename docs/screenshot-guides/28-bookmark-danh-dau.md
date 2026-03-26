# Hướng Dẫn Chụp Hình — Bài 28: Đánh dấu tin nhắn quan trọng

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/28-bookmark-danh-dau.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Chuẩn bị trước khi chụp

### Tài khoản và dữ liệu

Dùng tài khoản **Staff** (đủ để thao tác đánh dấu). Trước khi chụp, cần có:
- Một nhóm chat có **ít nhất 5–6 tin nhắn thật** từ 2–3 người khác nhau
- Ít nhất **2–3 tin nhắn đã được đánh dấu sẵn** (để danh sách ở Ảnh 3 và Ảnh 4 trông có nội dung) — đánh dấu trước khi bắt đầu chụp

Gợi ý nội dung tin nhắn đánh dấu sẵn (test data):
- _"Họp sáng thứ 2 lúc 9 giờ, mọi người nhớ chuẩn bị báo cáo tuần."_
- _"Kho hàng xác nhận đã nhập đủ, chờ phiếu ký duyệt."_

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |

### Màu và dạng đánh dấu

- Màu viền: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc 2–3px, hoặc mũi tên khi cần chỉ vào nút nhỏ
- **1 điểm đánh dấu** trên mỗi ảnh — không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Nhóm nút thao tác hiện khi di chuột vào tin nhắn

**Tên tệp:** `28-bookmark-danh-dau-buoc-01.webp`

**Trạng thái màn hình:**
- Đang trong một cuộc trò chuyện nhóm có tin nhắn
- Đang di chuột vào một tin nhắn — nhóm nút thao tác đang hiển thị
- Biểu tượng ngôi sao (☆) **chưa được tô đậm** — tin nhắn này chưa được đánh dấu
- Nút thao tác nằm cạnh bong bóng tin nhắn (phía bên ngoài, không che lên nội dung)

**Bố cục cần thấy:**
```
┌──────────────────────────────────────────────────────────────────┐
│ KHUNG CHAT CHÍNH                                                  │
│                                                                   │
│  [Tin nhắn của người khác — trên cùng]                           │
│                                                                   │
│  Tên người gửi          10:25 SA                                 │
│  ┌────────────────────────────────────────────┐  [↩️][☆][📎...]  │
│  │ "Họp sáng thứ 2 lúc 9 giờ, mọi người      │                  │
│  │  nhớ chuẩn bị báo cáo tuần."              │                  │
│  └────────────────────────────────────────────┘                  │
│                          ↑ con trỏ đang ở đây                    │
│  [Tin nhắn khác — phía dưới]                                     │
│                                                                   │
│ ──────────────────────────────────────────────────────────────── │
│  [📎] [🖼️]  Nhập tin nhắn...                             [⬆️]   │
└──────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh biểu tượng **ngôi sao rỗng** (☆, `data-testid="toggle-star-button"`) trong nhóm nút thao tác

**Điểm cần thấy rõ:**
1. Bong bóng tin nhắn đang được di chuột vào — có thể có viền nhẹ hoặc nền khác biệt
2. Nhóm nút thao tác **đang hiện** cạnh tin nhắn — thường gồm: Trả lời (↩️), Đánh dấu (☆), và các nút khác
3. Biểu tượng ngôi sao **rỗng** (chưa đánh dấu) — tông màu xám (`text-gray-500`)
4. Các tin nhắn khác trong khung (không cần nhiều — 3–4 tin là đủ)

**Lưu ý về vị trí nút:**
- Với tin nhắn của **người khác** (không phải tin của mình): nhóm nút xuất hiện **bên phải** bong bóng
- Với **tin nhắn của mình**: nhóm nút xuất hiện **bên trái** bong bóng
- Ưu tiên chụp tin nhắn của người khác (phổ biến hơn trong nhóm chat)

---

### 📸 Ảnh 2 — Tin nhắn sau khi đã được đánh dấu, nhãn xanh hiện trên bong bóng

**Tên tệp:** `28-bookmark-danh-dau-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm vào biểu tượng ngôi sao → tin nhắn đã được đánh dấu thành công
- Bong bóng tin nhắn có **viền màu xanh** (`border-blue-400`) thay vì viền xám thông thường
- Nhãn nhỏ **"Đã đánh dấu"** kèm biểu tượng ngôi sao xanh đặc (`fill-blue-600`) hiện **phía trên** bong bóng
- Con trỏ chuột vẫn đang ở gần khu vực tin nhắn (để nhóm nút thao tác còn hiển thị, thấy ngôi sao đã chuyển màu)

**Bố cục cần thấy:**
```
┌──────────────────────────────────────────────────────────────────┐
│ KHUNG CHAT CHÍNH                                                  │
│                                                                   │
│  Tên người gửi          10:25 SA                                 │
│  ★ Đã đánh dấu  ←── NHÃN XANH hiện phía trên bong bóng         │
│  ┌────────────────────────────────────────────┐  [↩️][★][📎...]  │
│  │ "Họp sáng thứ 2 lúc 9 giờ, mọi người      │◄── viền xanh     │
│  │  nhớ chuẩn bị báo cáo tuần."              │    (border-blue) │
│  └────────────────────────────────────────────┘                  │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **nhãn "Đã đánh dấu"** phía trên bong bóng — dòng chữ nhỏ có biểu tượng ngôi sao đặc màu xanh (`fill-blue-600`) và chữ "Đã đánh dấu"

**Điểm cần thấy rõ:**
1. Nhãn **"★ Đã đánh dấu"** hiện **phía trên** bong bóng tin nhắn — chữ nhỏ, tông màu xanh
2. Bong bóng tin nhắn có **viền xanh** (border-blue-400) — khác với viền xám thông thường
3. Biểu tượng ngôi sao trong nhóm nút thao tác đã **chuyển thành màu vàng/cam** (`text-amber-600`) — báo hiệu đang ở trạng thái đã đánh dấu
4. (Tùy chọn) Nếu nhóm nút đang hiển thị, thấy nút ★ đang sáng màu

**Kỹ thuật chụp:**
Sau khi bấm đánh dấu, giữ con trỏ chuột trong vùng tin nhắn để nhóm nút vẫn hiện → chụp ngay. Nếu nhóm nút ẩn mất (di chuột ra ngoài), vẫn chụp được — nhãn "Đã đánh dấu" và viền xanh sẽ luôn hiển thị dù không hover.

---

### 📸 Ảnh 3 — Bảng Công cụ mở, ô Tin đánh dấu đang được bấm

**Tên tệp:** `28-bookmark-danh-dau-buoc-03.webp`

**Trạng thái màn hình:**
- Đã bấm biểu tượng **Công cụ** (cờ lê) trên thanh bên trái → bảng bật ra
- **Chưa bấm ô Tin đánh dấu** — cột Tin Đánh Dấu chưa mở
- Ô **Tin đánh dấu** trong bảng đang được thấy rõ (biểu tượng ngôi sao ⭐)

**Bố cục bảng Công cụ cần thấy:**
```
┌────────────────────────────────────────────────────────────────────┐
│ THANH BÊN TRÁI (bg-brand-600)                                      │
│  ... [🔧 Công cụ]  ← nút đã bấm / đang sáng                      │
│          │                                                         │
│          ├──► BẢNG CÔNG CỤ (Popover, w-56)                        │
│          │    "Công cụ"  (tiêu đề)                                 │
│          │    ─────────────────────────────────────               │
│          │    ┌──────────┐  ┌──────────┐                          │
│          │    │ ⚡        │  │ ⭐        │◄── ÔI ĐÁY             │
│          │    │ Tin nhắn │  │ Tin đánh │                          │
│          │    │ nhanh    │  │ dấu      │                          │
│          │    └──────────┘  └──────────┘                          │
│          │    ┌──────────┐  ┌──────────┐                          │
│          │    │ ☑        │  │ ⚙        │ (leader only)           │
│          │    │ Danh sách│  │ Quản lý  │                          │
│          │    │ việc cần │  │loại việc │                          │
│          │    └──────────┘  └──────────┘                          │
└────────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh ô **Tin đánh dấu** (`data-testid="tools-pinned-messages-button"`) — ô có biểu tượng ngôi sao ⭐ và chữ "Tin đánh dấu" bên dưới

**Điểm cần thấy rõ:**
1. Bảng Công cụ đang **mở** (Popover visible)
2. Lưới 2×2 (hoặc 2×1 rưỡi với Staff không có Quản lý loại việc)
3. Ô **Tin đánh dấu** ở góc trên bên phải — biểu tượng ngôi sao `Star` màu brand-600 trong vòng tròn nền brand-50
4. Chữ "Tin đánh dấu" dưới biểu tượng — rõ ràng, đủ cỡ chữ

**Lưu ý:**
- Bảng Công cụ xuất hiện như một cửa sổ nhỏ nổi lên bên phải thanh bên trái, căn lề `side="right"`, `align="start"`
- Nền trắng, viền xám nhạt, bo góc, có đổ bóng (`shadow-lg`)

---

### 📸 Ảnh 4 — Cột Tin Đánh Dấu mở, danh sách tin nhắn đã đánh dấu

**Tên tệp:** `28-bookmark-danh-dau-buoc-04.webp`

**Trạng thái màn hình:**
- Đã bấm ô **Tin đánh dấu** → cột **Tin Đánh Dấu** (`PinnedMessagesPanel`) mở ra bên phải màn hình (thay thế cột chi tiết thông thường)
- Cột này hiển thị **danh sách tin nhắn đã đánh dấu**, nhóm theo ngày
- Có **ít nhất 2–3 tin nhắn** trong danh sách để trông đầy đủ

**Bố cục cột Tin Đánh Dấu cần thấy:**
```
┌──────────────────────────────────────────────────────────────────┐
│ KHUNG CHAT              │  CỘT TIN ĐÁNH DẤU (PinnedMessagesPanel)│
│  [Tin nhắn...]          │  ┌──────────────────────────────────┐  │
│                         │  │ [🔍 Tìm kiếm...              ]   │  │
│                         │  ├──────────────────────────────────┤  │
│                         │  │ Tin Đánh Dấu (Tất cả)           │  │
│                         │  ├──────────────────────────────────┤  │
│                         │  │ Hôm nay                          │  │
│                         │  ├────────────────────────────────  │  │
│                         │  │ Nguyễn Văn A - 10:25 SA ...     │  │
│                         │  │ "Họp sáng thứ 2 lúc 9 giờ..."   │  │
│                         │  │ Nhóm Kho • Nhận hàng            │  │
│                         │  ├────────────────────────────────  │  │
│                         │  │ Trần Thị B - 09:10 SA ...       │  │
│                         │  │ "Kho xác nhận đã nhập đủ..."    │  │
│                         │  │ Nhóm Kho • Đổi trả              │  │
│                         │  └──────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **hàng tin nhắn đầu tiên** trong danh sách — hàng có tên người gửi, nội dung tin nhắn (tối đa 100 ký tự), và nhãn nhóm/cuộc trò chuyện bên dưới

**Điểm cần thấy rõ:**
1. Tiêu đề **"Tin Đánh Dấu (Tất cả)"** phía trên danh sách
2. Nhóm theo ngày — nhãn **"Hôm nay"** hoặc **"Hôm qua"** dạng chữ nhỏ xám phía trên mỗi nhóm
3. Mỗi hàng tin nhắn có:
   - **Tên người gửi** (in đậm) + **ngày giờ** (màu xám nhỏ)
   - **Nội dung tin nhắn** — bị cắt sau 100 ký tự (nếu dài)
   - **Tên nhóm • Tên cuộc trò chuyện** — dòng chữ nhỏ nhất, màu xám, phía dưới cùng mỗi hàng
4. Khi di chuột vào hàng: biểu tượng **bỏ đánh dấu** (☆ bị gạch — `StarOff`) xuất hiện ở góc phải trên — nhưng **không cần có trong ảnh này**
5. Cột danh sách nằm **bên phải** màn hình, cạnh khung chat

**Điều kiện dữ liệu:**
- Danh sách có **ít nhất 2 tin nhắn** — không để danh sách trống
- Tên người gửi và nội dung là dữ liệu có nghĩa (không phải "Test user", "abc 123")
- Nhãn nhóm/cuộc trò chuyện hiển thị đúng (không hiện "[Category]" hay "[Conversation]")

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  Mở nhóm chat có 5-6 tin nhắn
  Đánh dấu sẵn 2-3 tin nhắn (để Ảnh 3, 4 có dữ liệu)
  ↓
Ảnh 1  →  Di chuột vào một tin nhắn chưa đánh dấu
           Nhóm nút thao tác xuất hiện, thấy biểu tượng ngôi sao rỗng (☆)
           → CHỤP (đánh dấu biểu tượng ngôi sao)
           Chưa bấm
           ↓
Ảnh 2  →  Bấm biểu tượng ngôi sao
           Nhãn "Đã đánh dấu" và viền xanh xuất hiện trên bong bóng
           Giữ chuột gần tin nhắn
           → CHỤP (đánh dấu nhãn "Đã đánh dấu")
           ↓
Ảnh 3  →  Bấm biểu tượng Công cụ (cờ lê) trên thanh bên trái
           Bảng Công cụ bật ra
           → CHỤP (đánh dấu ô Tin đánh dấu)
           Chưa bấm ô Tin đánh dấu
           ↓
Ảnh 4  →  Bấm ô Tin đánh dấu trong bảng
           Cột Tin Đánh Dấu mở ra bên phải
           Danh sách tin nhắn hiển thị
           → CHỤP (đánh dấu hàng tin nhắn đầu tiên)
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

□ Ảnh 1: Nhóm nút đang HIỆN, biểu tượng ngôi sao RỖNG (☆) thấy rõ
□ Ảnh 2: Nhãn "Đã đánh dấu" + viền xanh trên bong bóng đều THẤY RÕ
□ Ảnh 3: Bảng Công cụ ĐANG MỞ, ô Tin đánh dấu thấy rõ, cột CHƯA MỞ
□ Ảnh 4: Cột Tin Đánh Dấu MỞ, có ÍT NHẤT 2 tin nhắn trong danh sách
□ Dữ liệu có nghĩa (không phải "test", "abc123", "[Category]")
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
                    ├── 28-bookmark-danh-dau-buoc-01.webp  ← nút hover, ngôi sao rỗng
                    ├── 28-bookmark-danh-dau-buoc-02.webp  ← nhãn "Đã đánh dấu", viền xanh
                    ├── 28-bookmark-danh-dau-buoc-03.webp  ← bảng Công cụ, ô Tin đánh dấu
                    └── 28-bookmark-danh-dau-buoc-04.webp  ← cột Tin Đánh Dấu, danh sách
```

---

## Giải phẫu vùng nút thao tác tin nhắn (MessageBubbleSimple)

Khi di chuột vào bong bóng tin nhắn, nhóm nút xuất hiện tại `group-hover:opacity-100`:

```
Tin nhắn của NGƯỜI KHÁC (trái màn hình):
┌──────────────────────────────────────────┐  [↩️ Trả lời]
│ Nội dung tin nhắn                        │  [☆ Đánh dấu]  ← data-testid="toggle-star-button"
└──────────────────────────────────────────┘  [📋 Giao việc]  (leader only)
                                              [✅ Xác nhận]  (leader only)

Tin nhắn của BẠN (phải màn hình):
[↩️][☆][📎...]  ┌──────────────────────────────────────────┐
                │ Nội dung tin nhắn của bạn                │
                └──────────────────────────────────────────┘
```

**Trạng thái biểu tượng ngôi sao:**

| Trạng thái | Biểu tượng | Màu | Tiêu đề (title) |
|-----------|-----------|-----|----------------|
| Chưa đánh dấu | `Star` (rỗng) | `text-gray-500` → hover `text-amber-600` | "Đánh dấu" |
| Đã đánh dấu | `StarOff` (có gạch) | `text-amber-600` → hover `text-amber-700` | "Bỏ đánh dấu" |

---

## Giải phẫu cột Tin Đánh Dấu (PinnedMessagesPanel)

```
┌──────────────────────────────────────────────────────────────────┐
│ aside  (rounded-2xl, border, bg-white, shadow-sm)               │
│                                                                   │
│ PHẦN ĐẦU (border-b, p-3)                                        │
│  [🔍 Tìm kiếm...                                    ]           │
│                                                                   │
│ TIÊU ĐỀ (px-3, py-2)                                            │
│  "Tin Đánh Dấu (Tất cả)"  (font-medium)                         │
│                                                                   │
│ DANH SÁCH (ScrollArea, space-y-4)                                │
│  Nhóm theo ngày:                                                 │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │ "Hôm nay"  (text-xs, gray-500, font-medium, px-3)       │    │
│  ├──────────────────────────────────────────────────────────┤    │
│  │ Hàng tin nhắn (group relative cursor-pointer, p-3)      │    │
│  │  [tên người gửi — đậm]  [ngày giờ — xám nhỏ]           │    │
│  │  [nội dung text — tối đa 100 ký tự, rồi "…"]           │    │
│  │  [tên nhóm • tên cuộc trò chuyện — nhỏ nhất, xám]      │    │
│  │                                          [★ bỏ khi hover]│   │
│  └──────────────────────────────────────────────────────────┘    │
│                                                                   │
│ TRẠNG THÁI TRỐNG (khi chưa đánh dấu tin nào):                   │
│  ⭐ (h-12 w-12 text-brand-400)                                   │
│  "Đánh dấu tin nhắn để có thể tìm lại một cách nhanh chóng..."  │
└──────────────────────────────────────────────────────────────────┘
```

**Nút bỏ đánh dấu trong danh sách:**
- Vị trí: `absolute top-2 right-2` — góc trên bên phải của mỗi hàng
- Hiển thị: `opacity-0 group-hover:opacity-100` — **chỉ hiện khi di chuột**
- Biểu tượng: `StarOff` (17px), màu `text-brand-500`, hover `text-rose-500`
- Tooltip: "Bỏ đánh dấu tin nhắn"

---

## Sự khác biệt với nhãn "Đã đánh dấu" trên bong bóng tin nhắn

Có **2 vị trí** nhãn hiển thị khi tin nhắn đã được đánh dấu — cả 2 đều thấy trên Ảnh 2:

| Vị trí | Tin nhắn của người khác | Tin nhắn của bạn |
|--------|------------------------|-----------------|
| **Nhãn xanh** | Phía **trên** bong bóng (`mb-1`) | Phía **trên** bong bóng (`mb-1`) |
| **Viền bong bóng** | `border-blue-400` thay vì `border-gray-200` | `border-blue-400` thay vì `border-gray-200` |

Nhãn gồm: `★` (ngôi sao xanh đặc `fill-blue-600`, 10px) + chữ **"Đã đánh dấu"** (text-[11px], text-blue-600)

---

## Câu hỏi thường gặp khi chụp

**H: Bấm ngôi sao xong nhưng không thấy nhãn "Đã đánh dấu"?**
→ Tải lại trang và thử lại — có thể phiên đăng nhập hết hạn, hoặc thao tác bị lỗi mạng. Kiểm tra `isStarred` flag bằng DevTools nếu cần.

**H: Danh sách Tin Đánh Dấu hiện "[Category]" hoặc "[Conversation]"?**
→ Dữ liệu danh mục chưa tải về. Đợi 2–3 giây sau khi đăng nhập rồi mở lại cột, hoặc tải lại trang.

**H: Cột Tin Đánh Dấu không mở ra sau khi bấm ô Tin đánh dấu?**
→ Thao tác `onSelect("pinned")` trong `MainSidebar` cần được `WorkspaceView` xử lý. Kiểm tra console xem có lỗi JavaScript không.

---

## Ghi chú bổ sung

### Phân biệt "đánh dấu" (star) với "ghim" (pin) trong codebase

Codebase có 2 khái niệm khác nhau — bài hướng dẫn này chỉ nói về **đánh dấu (star)**:

| | Đánh dấu (Star) — bài này | Ghim (Pin) — đã bỏ |
|--|--|--|
| Phạm vi | **Cá nhân** — chỉ bạn thấy | Nhóm — mọi người thấy |
| Trạng thái | Hiện tại: **đang dùng** | Đã loại bỏ (`[PHASE2-REMOVED]`) |
| Viền bong bóng | `border-blue-400` | `border-amber-400` (cũ) |
| Tên trường API | `isStarred` | `isPinned` (cũ) |
| Biểu tượng | `Star` / `StarOff` (màu xanh) | `Pin` (màu vàng hổ phách — đã ẩn) |

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong kho `Quoc-Nam-Guide`.

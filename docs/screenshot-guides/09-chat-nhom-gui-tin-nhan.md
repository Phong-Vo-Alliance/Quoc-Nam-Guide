# Hướng Dẫn Chụp Hình — Bài 09: Vào nhóm chat và gửi tin nhắn

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/09-chat-nhom-gui-tin-nhan.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-23

---

## Chuẩn bị trước khi chụp

### Tài khoản dùng để chụp
- Dùng tài khoản **Staff** (để bài hướng dẫn đúng với góc nhìn người dùng phổ thông nhất)
- Đảm bảo tài khoản đã được phân vào ít nhất **2–3 nhóm chat** có tin nhắn thật

### Thiết lập cửa sổ trình duyệt
| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome (khuyến nghị) |
| Zoom | 100% (không zoom) |
| Độ rộng | **1280px** (Desktop) |
| Chế độ | Cửa sổ thường (không fullscreen) |
| Thanh địa chỉ | Ẩn hoặc crop ra khỏi ảnh |

### Công cụ highlight
- Dùng công cụ vẽ viền/mũi tên màu **#10B981 (emerald/xanh lá)**
- **Không dùng màu đỏ**, không highlight nhiều chỗ cùng lúc
- Chỉ highlight **1 điểm chính** cần thao tác trong mỗi ảnh
- Dạng viền: hình chữ nhật bo góc, nét 2–3px
- Dạng mũi tên: chỉ dùng khi cần chỉ đến phần tử nhỏ khó thấy

### Định dạng xuất ảnh
- **Format:** WebP (ưu tiên) hoặc PNG
- **Tên file:** đặt đúng theo quy tắc (xem từng bước bên dưới)
- **Vị trí lưu:** `guide-site/src/content/web/images/`

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Tab Nhóm ở thanh bên trái

**Tên file:** `09-chat-nhom-buoc-01.webp`

**Trạng thái màn hình cần đạt:**
- Người dùng vừa đăng nhập xong, đang ở màn hình chính
- Tab **Nhóm** ở thanh bên trái **chưa được chọn** (hoặc vừa vào trang, chưa chọn nhóm nào) — để thấy rõ trạng thái trước khi bấm
- Có thể thay bằng trạng thái tab Nhóm đang được chọn (active) nếu đây là màn hình mặc định khi vào

**Khu vực cần có trong ảnh:**
```
┌────────────────────────────────────────────────┐
│  Thanh bên trái (ConversationListSidebar)      │
│  ┌──────────────────────────────────────────┐  │
│  │  [🔧]  [ Nhóm ]  [ Cá nhân ]  [🔍]      │  │  ← highlight tab "Nhóm"
│  ├──────────────────────────────────────────┤  │
│  │  Danh sách nhóm chat (3–4 nhóm)          │  │
│  │  mỗi nhóm có: tên, tin nhắn mới nhất,   │  │
│  │  thời gian, badge số đỏ (nếu có)         │  │
│  └──────────────────────────────────────────┘  │
│                                                │
│  (Khung chat bên phải mờ hoặc trống)           │
└────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **tab "Nhóm"** ở thanh trên cùng của sidebar

**Ghi chú:**
- Đảm bảo có ít nhất **2 nhóm** hiển thị trong danh sách
- Tốt nhất 1 nhóm có **badge số đỏ** để người dùng nhận biết tin chưa đọc
- Che hoặc xóa thông tin nhạy cảm (tên người thật, nội dung tin nhắn riêng tư)

---

### 📸 Ảnh 2 — Chọn nhóm chat, nội dung trò chuyện hiện ra

**Tên file:** `09-chat-nhom-buoc-02.webp`

**Trạng thái màn hình cần đạt:**
- Đã bấm vào một nhóm chat → nhóm đó đang **được chọn (highlighted)**
- Khung chat bên phải đã **tải xong và hiển thị tin nhắn** (ít nhất 4–6 tin nhắn từ 2–3 người)
- Không cần có nhiều tin nhắn — đủ để thấy giao diện là được

**Khu vực cần có trong ảnh:**
```
┌──────────────────┬─────────────────────────────┐
│  Sidebar         │  Khung chat chính            │
│                  │  ┌─────────────────────────┐ │
│  ■ Nhóm A ◄──── │  │ Header: Tên nhóm, số TV  │ │
│    (đang chọn)   │  ├─────────────────────────┤ │
│                  │  │ Tin nhắn 1               │ │
│  Nhóm B          │  │ Tin nhắn 2               │ │
│  Nhóm C          │  │ Tin nhắn 3               │ │
│                  │  ├─────────────────────────┤ │
│                  │  │ [Ô nhập tin nhắn]       │ │
│                  │  └─────────────────────────┘ │
└──────────────────┴─────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **tên nhóm đang được chọn** trong sidebar (phần bên trái)

**Ghi chú:**
- Nhóm được chọn thường có **nền sáng hơn** các nhóm còn lại — đảm bảo điều này thấy rõ trong ảnh
- Không cần chụp toàn màn hình — crop lấy 2/3 từ trái là đủ nếu cần
- Tin nhắn trong khung chat có thể là dữ liệu test (không nhất thiết phải thật)

---

### 📸 Ảnh 3 — Ô nhập tin nhắn đang được focus

**Tên file:** `09-chat-nhom-buoc-03.webp`

**Trạng thái màn hình cần đạt:**
- Đã bấm vào ô **Nhập tin nhắn** → ô đang được focus (cursor nhấp nháy)
- **Chưa gõ gì** — ô vẫn hiện placeholder "Nhập tin nhắn"
- Nút Gửi (mũi tên lên) đang **mờ** (vì chưa có nội dung)

**Khu vực cần chụp (crop vùng dưới màn hình):**
```
┌────────────────────────────────────────────────┐
│  (Vài tin nhắn cuối của cuộc trò chuyện)       │
├────────────────────────────────────────────────┤
│  Khu vực nhập liệu (ChatInputArea)             │
│  ┌──────────────────────────────────────────┐  │
│  │ [📎] [🖼️]  Nhập tin nhắn...    [💬] [⬆️] │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **toàn bộ ô nhập tin nhắn** (phần text input)

**Ghi chú:**
- Ảnh có thể crop chỉ lấy **1/3 dưới** của màn hình để thấy rõ khu vực input
- Đảm bảo thấy cả 2 nút đính kèm (📎 và 🖼️) bên trái và nút Gửi bên phải
- Nếu khó thấy cursor, có thể chụp ngay lúc vừa bấm vào ô (cursor đang hiện)

---

### 📸 Ảnh 4 — Tin nhắn vừa gửi thành công

**Tên file:** `09-chat-nhom-buoc-04.webp`

**Trạng thái màn hình cần đạt:**
- Đã gõ một tin nhắn ngắn và bấm Gửi
- **Tin nhắn vừa gửi hiển thị** ở cuối khung chat
- Ô nhập tin nhắn đã **trống trở lại**
- Nút Gửi **mờ trở lại** (vì ô đã trống)

**Nội dung tin nhắn test gợi ý:**
```
"Chào mọi người, tôi đang kiểm tra tính năng chat."
```
*(Ngắn, trung tính, không chứa thông tin nhạy cảm)*

**Khu vực cần có trong ảnh:**
```
┌────────────────────────────────────────────────┐
│  (Các tin nhắn cũ phía trên)                   │
├────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────┐  │
│  │  Tên người dùng                10:30 SA  │  │
│  │  "Chào mọi người, tôi đang..."       ✓✓ │  │  ← tin nhắn vừa gửi
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  [📎] [🖼️]  Nhập tin nhắn...              [⬆️] │  ← ô đã trống
└────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **bong bóng tin nhắn vừa gửi** (bubble cuối cùng)

**Ghi chú:**
- Đảm bảo thấy **dấu ✓✓** (đã gửi) ở góc phải dưới tin nhắn
- Ô nhập phía dưới phải **trống** — đây là dấu hiệu gửi thành công
- Nếu tin nhắn bị che bởi ô input, scroll lên một chút để thấy cả tin nhắn

---

## Quy trình chụp theo thứ tự

```
Bước 1  →  Mở web, đăng nhập bằng tài khoản Staff
           ↓
Bước 2  →  Đảm bảo đang ở tab "Nhóm" (hoặc chưa chọn tab nào)
           → Chụp ảnh 1 (09-chat-nhom-buoc-01.webp)
           ↓
Bước 3  →  Bấm vào một nhóm chat
           → Chờ tin nhắn tải xong
           → Chụp ảnh 2 (09-chat-nhom-buoc-02.webp)
           ↓
Bước 4  →  Bấm vào ô "Nhập tin nhắn" (chưa gõ gì)
           → Chụp ảnh 3 (09-chat-nhom-buoc-03.webp)
           ↓
Bước 5  →  Gõ tin nhắn test và bấm Gửi
           → Chờ tin nhắn hiện ra
           → Chụp ảnh 4 (09-chat-nhom-buoc-04.webp)
```

---

## Sau khi chụp xong

### Checklist trước khi nộp

```
□ Đúng 4 ảnh, đúng tên file
□ Kích thước ảnh: 1280px chiều ngang
□ Format: WebP hoặc PNG
□ Mỗi ảnh chỉ có 1 điểm highlight màu #10B981
□ Không có thông tin nhạy cảm (tên thật, số điện thoại, nội dung riêng tư)
□ Ảnh rõ nét, không bị mờ hoặc vỡ pixel
□ Đặt ảnh vào đúng thư mục: guide-site/src/content/web/images/
```

### Lưu ảnh vào đúng vị trí

```
Quoc-Nam-Guide/
└── guide-site/
    └── src/
        └── content/
            └── web/
                └── images/
                    ├── 09-chat-nhom-buoc-01.webp  ← ảnh 1
                    ├── 09-chat-nhom-buoc-02.webp  ← ảnh 2
                    ├── 09-chat-nhom-buoc-03.webp  ← ảnh 3
                    └── 09-chat-nhom-buoc-04.webp  ← ảnh 4
```

---

## Ghi chú bổ sung

### Nếu UI thay đổi sau khi chụp
Xem hướng dẫn cập nhật ảnh tại `docs/CONTENT_GUIDE.md` — Mục 10: *Update khi UI thay đổi*
**Lưu ý:** Giữ nguyên tên file, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách bài viết hoặc tạo issue trong repo `Quoc-Nam-Guide`.

# Hướng Dẫn Chụp Hình — Bài 10: Đính kèm file trong chat và xem lại

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/10-dinh-kem-file-chat.mdx`
**Số ảnh cần chụp:** 5 ảnh
**Cập nhật lần cuối:** 2026-03-23

---

## Chuẩn bị trước khi chụp

### Tài khoản & dữ liệu
- Dùng tài khoản **Staff** để chụp
- Đã mở sẵn một nhóm chat có vài tin nhắn (không cần nhiều)
- Chuẩn bị sẵn **1 file PDF hoặc Word** (dưới 1 MB, nội dung trung tính)
- Chuẩn bị sẵn **1 ảnh JPG hoặc PNG** (dưới 500 KB)

### Thiết lập trình duyệt
| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Zoom | 100% |
| Độ rộng cửa sổ | **1280px** |
| Chế độ | Cửa sổ thường |
| Thanh địa chỉ | Crop ra khỏi ảnh cuối |

### Công cụ highlight
- Màu viền: **#10B981** (emerald)
- Dạng: viền hình chữ nhật bo góc (2–3px), hoặc mũi tên khi cần chỉ phần tử nhỏ
- Chỉ highlight **1 điểm chính** mỗi ảnh
- Không dùng màu đỏ

### Định dạng ảnh
- **Format:** WebP (hoặc PNG nếu công cụ không hỗ trợ WebP)
- **Tên file:** xem mục từng ảnh
- **Lưu vào:** `guide-site/src/content/web/images/`

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Hai nút đính kèm ở khu vực nhập liệu

**Tên file:** `10-dinh-kem-file-buoc-01.webp`

**Trạng thái màn hình:**
- Đang mở một nhóm chat, ô nhập tin nhắn **chưa có gì**
- Không cần focus ô input
- Nút Gửi đang **mờ** (không có nội dung)

**Vùng cần chụp** — Crop phần dưới cùng của màn hình (khu vực input):
```
┌─────────────────────────────────────────────────────┐
│  (Vài tin nhắn cuối phía trên — để có ngữ cảnh)    │
├─────────────────────────────────────────────────────┤
│  Khu vực nhập liệu                                  │
│  ┌───────────────────────────────────────────────┐  │
│  │ [📎]  [🖼️]   Nhập tin nhắn...        [💬] [⬆️]│  │
│  │  ↑     ↑                                      │  │
│  │ ghim  ảnh   ← 2 nút này cần highlight         │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **cả 2 nút** (📎 và 🖼️) cùng lúc — đây là ngoại lệ duy nhất highlight 2 điểm vì 2 nút này liên quan trực tiếp đến nhau trong cùng một bước

**Ghi chú thêm:**
- Ảnh này nên crop **1/3 dưới** của màn hình để thấy rõ khu vực input
- Đảm bảo thấy cả placeholder "Nhập tin nhắn" trong ô nhập
- Nếu có nút Quick Messages (💬) ở giữa, để nguyên — không cần highlight

---

### 📸 Ảnh 2 — Cửa sổ chọn file từ hệ điều hành

**Tên file:** `10-dinh-kem-file-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm nút 📎 → cửa sổ chọn file của Windows/Mac đã mở
- Cửa sổ chọn file hiển thị **đè lên** giao diện web

**Vùng cần chụp** — Toàn bộ màn hình (bao gồm cả cửa sổ chọn file):
```
┌────────────────────────────────────────────────────────┐
│  Giao diện web (mờ phía sau)                           │
│   ┌──────────────────────────────────────────────────┐ │
│   │  Windows Explorer / Mac Finder (open dialog)     │ │
│   │                                                  │ │
│   │  📁 Documents/                                   │ │
│   │     📄 bao-cao-thang-3.pdf          45 KB        │ │
│   │     📄 ke-hoach-q2.docx             82 KB        │ │
│   │     🖼️ anh-hop.jpg                  230 KB       │ │
│   │                                                  │ │
│   │  Tên file: [bao-cao-thang-3.pdf    ]  [Mở]      │ │
│   └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh nút **Mở** (hoặc "Open") ở góc dưới phải của cửa sổ chọn file

**Ghi chú thêm:**
- Đây là cửa sổ của hệ điều hành, **không phải** giao diện web — cứ chụp tự nhiên
- Nên chọn sẵn 1 file PDF có tên tiếng Việt trung tính (ví dụ: `bao-cao.pdf`)
- Không để lộ đường dẫn thư mục cá nhân (ví dụ: `C:\Users\NguyenVanA\...`) — có thể dùng folder test riêng

---

### 📸 Ảnh 3 — File xem trước phía trên ô nhập, chưa gửi

**Tên file:** `10-dinh-kem-file-buoc-03.webp`

**Trạng thái màn hình:**
- Đã chọn file xong, cửa sổ chọn file đã đóng
- File hiển thị dưới dạng **preview nhỏ** ngay phía trên ô nhập tin nhắn
- Có thanh tiến trình (nếu chụp kịp lúc đang tải) HOẶC đã tải xong (thanh xanh lá 100%)
- Nút **✕** để xóa file đang hiển thị góc file
- Ô nhập tin nhắn vẫn trống (chưa gõ gì)

**Vùng cần chụp** — Crop phần dưới màn hình:
```
┌──────────────────────────────────────────────────────┐
│  (Vài tin nhắn phía trên — để có ngữ cảnh)          │
├──────────────────────────────────────────────────────┤
│  Khu vực file preview                                │
│  ┌────────────────────────────────────────────────┐  │
│  │  ┌─────────────────────┐                       │  │
│  │  │ 📄  bao-cao.pdf  [✕]│  ← file preview      │  │
│  │  │     45 KB           │                       │  │
│  │  │ ████████████░░ 75%  │  ← thanh tiến trình  │  │
│  │  └─────────────────────┘                       │  │
│  └────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────┐  │
│  │ [📎] [🖼️]   Nhập tin nhắn...          [💬] [⬆️]│  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **toàn bộ card file preview** (bao gồm tên file, dung lượng, thanh tiến trình và nút ✕)

**Mẹo chụp thanh tiến trình:**
- Chụp ảnh ngay sau khi chọn file, **trong vòng 1–2 giây đầu** — thanh tiến trình đang ở khoảng 30–70%
- Nếu không kịp (file nhỏ tải quá nhanh) → dùng DevTools (F12) để throttle mạng về **Slow 3G** trước khi chọn file, sau đó tắt throttle đi
- Nếu vẫn không kịp → chụp lúc thanh đã xanh 100% cũng được (vẫn minh họa được điểm cần highlight)

---

### 📸 Ảnh 4 — Tin nhắn kèm file hiện trong khung chat sau khi gửi

**Tên file:** `10-dinh-kem-file-buoc-04.webp`

**Trạng thái màn hình:**
- Đã bấm Gửi, file đã tải lên xong
- Tin nhắn kèm file **hiển thị trong khung chat**
- Ô nhập tin nhắn đã **trống lại**
- File hiển thị dưới dạng:
  - **Ảnh:** hình thu nhỏ trực tiếp trong bubble
  - **PDF/Word/Excel:** biểu tượng tài liệu + tên file + dung lượng

**Vùng cần chụp:**
```
┌──────────────────────────────────────────────────────┐
│  (Vài tin nhắn cũ phía trên)                        │
├──────────────────────────────────────────────────────┤
│  Tin nhắn vừa gửi (ở cuối)                          │
│  ┌────────────────────────────────────────────────┐  │
│  │  Tên bạn                         10:35 SA      │  │
│  │  ┌──────────────────────────────────────────┐  │  │
│  │  │ 📄  bao-cao.pdf                          │  │  │
│  │  │      45 KB                          [↓]  │  │  │
│  │  └──────────────────────────────────────────┘  │  │
│  │                                           ✓✓   │  │
│  └────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────┤
│  [📎] [🖼️]   Nhập tin nhắn...               [💬][⬆️] │
└──────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **bong bóng tin nhắn chứa file** (toàn bộ card file trong bubble)

**Ghi chú thêm:**
- Đảm bảo thấy dấu **✓✓** (đã gửi thành công) ở góc phải dưới tin nhắn
- Ô nhập phía dưới phải **trống** — chứng minh đã gửi xong
- Nếu gửi ảnh (JPG/PNG) thì hình thu nhỏ sẽ hiển thị trực tiếp — chụp cả thumbnail

---

### 📸 Ảnh 5 — Modal xem file toàn màn hình

**Tên file:** `10-dinh-kem-file-buoc-05.webp`

**Trạng thái màn hình:**
- Đã bấm vào file/ảnh trong tin nhắn
- **Modal xem file** mở ra, đè lên toàn bộ giao diện
- Nội dung file hiển thị bên trong modal

**Có 2 loại modal — chụp 1 trong 2:**

**Loại A — Modal xem ảnh (nếu gửi JPG/PNG):**
```
┌────────────────────────────────────────────────────────┐
│  [✕ Đóng]                    [↓ Tải xuống]            │
├────────────────────────────────────────────────────────┤
│                                                        │
│              [ Hình ảnh đầy đủ ở đây ]                │
│                                                        │
│   [← Trước]                              [Sau →]      │
│                        1 / 3                          │
└────────────────────────────────────────────────────────┘
```

**Loại B — Modal xem PDF/Word/Excel:**
```
┌────────────────────────────────────────────────────────┐
│  bao-cao.pdf                           [↓ Tải xuống]  │
│  [← Trang trước]  Trang 1 / 5  [Trang sau →]         │
├────────────────────────────────────────────────────────┤
│                                                        │
│           [ Nội dung tài liệu hiển thị ở đây ]        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **nút điều hướng trang** (← Trang trước / Trang sau →) hoặc nút **← →** trong gallery ảnh

**Ghi chú thêm:**
- Nếu dùng file PDF, đảm bảo file có **ít nhất 2 trang** để thấy rõ nút điều hướng
- Nếu dùng ảnh, có thể gửi **2–3 ảnh trong 1 tin nhắn** để thấy gallery mode (1 / 3)
- Nội dung tài liệu trong modal có thể là dữ liệu test trung tính (ví dụ: báo cáo mẫu, không có thông tin thật)

---

## Bonus: Cách chụp tính năng Paste ảnh (Ctrl+V)

> Tính năng này được đề cập trong Callout của bài — không cần ảnh riêng trong MDX, nhưng có thể dùng làm ảnh minh họa trong tài liệu nội bộ nếu cần.

**Cách thực hiện:**
1. Chụp màn hình một phần giao diện bằng **Snipping Tool** (Windows) hoặc **⌘+Shift+4** (Mac) → ảnh vào clipboard
2. Bấm vào ô **Nhập tin nhắn** trong chat
3. Nhấn **Ctrl+V**
4. Ảnh từ clipboard tự động xuất hiện ở khu vực file preview (giống Ảnh 3)
5. Toast xuất hiện: "Đã paste 1 ảnh"

**Nếu muốn chụp màn hình tại bước này:**
- Chụp lúc **toast "Đã paste 1 ảnh"** còn hiển thị ở góc màn hình
- Highlight: viền màu #10B981 quanh khu vực file preview
- Đặt tên: `10-dinh-kem-file-paste-bonus.webp` (chỉ để tham khảo nội bộ, không dùng trong bài)

---

## Quy trình chụp theo thứ tự

```
Bước 1 → Mở web, đăng nhập bằng tài khoản Staff
          Chuẩn bị file PDF + ảnh JPG sẵn
          ↓
Bước 2 → Mở nhóm chat, CHƯA bấm gì vào input
          → Chụp Ảnh 1 (09-chat-nhom-buoc-01.webp)
          ↓

  [Nhánh A: Dùng nút 📎 để gửi PDF]

Bước 3 → Bấm nút 📎 → Cửa sổ chọn file mở
          → Chụp Ảnh 2 (TRƯỚC khi bấm Mở)
          ↓
Bước 4 → Bấm Mở, cửa sổ đóng
          → NHANH: Chụp Ảnh 3 trong 1-2 giây đầu (thanh tiến trình đang chạy)
          ↓
Bước 5 → Đợi tải xong → Bấm Gửi
          → Chụp Ảnh 4 (file hiện trong chat)
          ↓

  [Nhánh B: Bấm vào file vừa gửi để xem]

Bước 6 → Bấm vào card file trong tin nhắn → Modal mở
          → Chụp Ảnh 5 (modal đang mở)
          ↓
Bước 7 → Done ✅
```

---

## Checklist trước khi nộp

```
□ Đúng 5 ảnh, đúng tên file
□ Kích thước: 1280px chiều ngang
□ Format: WebP hoặc PNG
□ Mỗi ảnh có highlight màu #10B981
□ Ảnh 1: Ảnh 3 riêng ngoại lệ: 2 nút cùng lúc (📎 và 🖼️)
□ Không có thông tin nhạy cảm (tên thật, SĐT, nội dung riêng tư)
□ Ảnh rõ nét, không mờ
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
                    ├── 10-dinh-kem-file-buoc-01.webp  ← nút đính kèm
                    ├── 10-dinh-kem-file-buoc-02.webp  ← cửa sổ chọn file
                    ├── 10-dinh-kem-file-buoc-03.webp  ← file preview + tiến trình
                    ├── 10-dinh-kem-file-buoc-04.webp  ← file trong chat
                    └── 10-dinh-kem-file-buoc-05.webp  ← modal xem file
```

---

## Ghi chú bổ sung

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong repo `Quoc-Nam-Guide`.

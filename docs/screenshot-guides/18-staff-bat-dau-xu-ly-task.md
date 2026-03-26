# Hướng Dẫn Chụp Hình — Bài 18: Bắt đầu xử lý task

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/18-staff-bat-dau-xu-ly-task.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-23

---

## Chuẩn bị trước khi chụp

### ⚠️ Bài này PHẢI dùng tài khoản Staff thuần túy
Tương tự bài 17 — không dùng Leader/Admin vì giao diện nút hành động và quyền khác nhau.

### Dữ liệu test cần có

| Cần | Số lượng | Mô tả |
|-----|---------|-------|
| Task Chưa xử lý | **≥ 2** | Để chụp xong Ảnh 1–2 vẫn còn task làm ví dụ |
| Task có checklist | ≥ 1 | Tốt nhất 1 trong các task trên có checklist (thanh tiến trình đẹp hơn) |

> **Lưu ý:** Quy trình chụp sẽ **thực sự bấm Bắt đầu** một task — sau khi chụp xong Ảnh 3, task đó sẽ chuyển thành Đang xử lý. Hãy chuẩn bị dư 1 task để không ảnh hưởng dữ liệu thật.
>
> **Gợi ý:** Nhờ Leader tạo 2–3 task test có tên trung tính (ví dụ: "Kiểm tra tài liệu mẫu A", "Xem xét báo cáo thử B") trước khi chụp, dùng xong thì xóa.

### Thiết lập trình duyệt
| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Zoom | 100% |
| Độ rộng cửa sổ | **1280px** |
| Chế độ | Cửa sổ thường |

### Công cụ highlight
- Màu viền: **#10B981** (emerald)
- Dạng: viền bo góc (2–3px), mũi tên khi cần chỉ phần tử nhỏ
- **1 điểm highlight** mỗi ảnh
- Không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Thẻ task Chưa xử lý với nút Bắt đầu

**Tên file:** `18-staff-bat-dau-buoc-01.webp`

**Trạng thái màn hình:**
- Tab **Công Việc** đang mở, mục **Công Việc Của Tôi** đang hiển thị
- Thấy ít nhất 1 thẻ task có badge **Chưa xử lý** (nền vàng nhạt, chữ vàng/nâu)
- Nút **Bắt đầu** đang hiển thị ở góc phải dưới thẻ — **chưa bấm**

**Vùng cần chụp — cột phải toàn bộ:**
```
┌──────────────────────────────────────────────┐
│  [ Thông Tin ]  [ Công Việc ✓ ]              │
├──────────────────────────────────────────────┤
│  📋 Công Việc Của Tôi              [∧]       │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │                       [Chưa xử lý] ◄──┼──── badge góc phải trên
│  │ Kiểm tra tài liệu mẫu A               │  │
│  │ Nhóm: Phát triển                       │  │
│  │ ████████░░ 4/6 mục  ← thanh tiến trình│  │
│  │ 23/03 09:15  [Nhật ký]  [Bắt đầu] ◄───┼──── nút cần highlight
│  └────────────────────────────────────────┘  │
│                                              │
│  (task khác bên dưới nếu có)                 │
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **nút "Bắt đầu"** (nút nhỏ ở góc phải dưới thẻ task)

**Ghi chú thêm:**
- Badge **Chưa xử lý** nằm **nổi ở góc phải trên** của thẻ — hơi nhô ra ngoài viền thẻ, màu nền vàng nhạt (`amber-200`).
- Nút **Bắt đầu** và nút **Nhật ký** nằm cùng hàng ở dưới cùng thẻ. Nút Bắt đầu nằm bên phải.
- Nếu task có checklist → thanh tiến trình màu xanh lá nằm giữa tên task và dòng nút — rất đẹp, cố giữ trong ảnh.

---

### 📸 Ảnh 2 — Nút Bắt đầu đang xử lý (spinning)

**Tên file:** `18-staff-bat-dau-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm nút **Bắt đầu**
- Nút đang hiển thị **vòng tròn xoay** (spinner) trong khi chờ API phản hồi
- Thẻ task vẫn có badge **Chưa xử lý** (chưa đổi)

**Đây là ảnh khó chụp nhất vì spinner chỉ hiện trong ~0.5–1 giây.**

**Cách chụp spinner:**

**Cách A — Dùng DevTools throttle mạng (khuyến nghị):**
1. Mở DevTools (F12) → tab **Network**
2. Đổi "No throttling" thành **Slow 3G**
3. Bấm nút Bắt đầu → spinner sẽ hiện trong 3–5 giây → chụp thoải mái
4. Sau khi chụp xong → đổi lại về "No throttling"

**Cách B — Dùng screen recorder:**
1. Dùng phần mềm quay màn hình (OBS, ShareX, Loom…) để quay toàn bộ thao tác
2. Từ video, trích xuất đúng frame khi spinner đang hiện
3. Export frame đó thành ảnh WebP/PNG

**Cách C — Nếu không chụp được spinner:**
Thay thế bằng ảnh **lúc vừa bấm xong nút** — task đang ở trạng thái trung gian (badge vẫn "Chưa xử lý" nhưng nút bị mờ). Chú thích trong ảnh bằng mũi tên chỉ vào vùng nút.

**Vùng cần chụp — crop sát phần nút phía dưới thẻ task:**
```
┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  │
│  │                   [Chưa xử lý]  │  │
│  │ Kiểm tra tài liệu mẫu A         │  │
│  │ Nhóm: Phát triển                 │  │
│  │                                  │  │
│  │ 23/03 09:15  [Nhật ký]  [ ⟳ ] ◄─┼──── spinner đang xoay
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **vùng nút đang có spinner** (góc phải dưới thẻ)

---

### 📸 Ảnh 3 — Task đã chuyển sang Đang xử lý, badge mới

**Tên file:** `18-staff-bat-dau-buoc-03.webp`

**Trạng thái màn hình:**
- API phản hồi thành công
- Badge của task đã đổi thành **Đang xử lý** (nền xanh dương nhạt `sky-50`, chữ xanh dương)
- Nút **Bắt đầu** đã BIẾN MẤT
- Thay vào đó xuất hiện nút **Chờ duyệt** ở góc phải dưới thẻ

**Đây là kết quả chính của bài — ảnh quan trọng nhất.**

**Vùng cần chụp — cột phải, zoom vào thẻ task:**
```
┌──────────────────────────────────────────────┐
│  📋 Công Việc Của Tôi              [∧]       │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │                    [Đang xử lý] ◄──────┼──── badge đã đổi màu xanh dương
│  │ Kiểm tra tài liệu mẫu A               │  │
│  │ Nhóm: Phát triển                       │  │
│  │ ████████░░ 4/6 mục                     │  │
│  │ 23/03 09:15  [Nhật ký]  [Chờ duyệt] ◄─┼──── nút mới xuất hiện
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **badge "Đang xử lý"** (góc phải trên thẻ)

**Ghi chú thêm:**
- So sánh với Ảnh 1: badge từ vàng → xanh dương; nút từ **Bắt đầu** → **Chờ duyệt**. Đây là 2 điểm thay đổi rõ nhất mà người dùng cần nhận ra.
- Nếu task có checklist: ở trạng thái **Đang xử lý**, các ô tick trong checklist **đã có thể bấm** (không còn bị mờ). Nếu chụp được trạng thái checklist đã mở và ô tick sáng lên → càng tốt, nhưng không bắt buộc.

---

### 📸 Ảnh 4 — Panel Nhật ký công việc đang mở

**Tên file:** `18-staff-bat-dau-buoc-04.webp`

**Trạng thái màn hình:**
- Đã bấm nút **Nhật ký** trên thẻ task vừa bắt đầu
- Panel **Nhật ký công việc** mở ra (dạng slide-over từ phải hoặc bottom sheet)
- Có ít nhất 1 **tin nhắn hệ thống** ghi: `"[Tên] đã chuyển trạng thái công việc [tên task] sang Đang xử lý."`
- Ô nhập tin nhắn ở cuối panel sẵn sàng để nhập

**Bố cục panel nhật ký:**
```
┌────────────────────────────────────────────────────────┐
│  Header:                                               │
│  Nhật ký: Kiểm tra tài liệu mẫu A          [✕]       │
│  Trạng thái: Đang xử lý  •  Giao cho: Nguyễn Văn A   │
├────────────────────────────────────────────────────────┤
│  Nội dung (nền xám nhạt):                             │
│                                                        │
│  ── 23/03/2026 ─────────────────────────────────────  │  ← date separator
│                                                        │
│  ┌────────────────────────────────────────────────┐   │
│  │  ⚙  Nguyễn Văn A đã chuyển trạng thái công    │   │  ← system message
│  │     việc Kiểm tra tài liệu mẫu A sang          │   │    (màu xám, căn giữa)
│  │     Đang xử lý.               09:16            │   │
│  └────────────────────────────────────────────────┘   │
│                                                        │
├────────────────────────────────────────────────────────┤
│  Composer:                                             │
│  [📎] [🖼️]  Nhập nội dung để trao đổi...    [→ Gửi] │
│  Tin nhắn trong nhật ký sẽ được lưu riêng...          │
└────────────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **tin nhắn hệ thống** (dòng ghi thay đổi trạng thái)

**Ghi chú thêm:**
- Tin nhắn hệ thống thường có dạng **pill căn giữa** màu xám — khác với tin nhắn thường (bubble trái/phải).
- Header panel hiển thị tên task (truncated nếu dài) + trạng thái + người được giao.
- Dòng chú thích nhỏ ở cuối composer: `"Tin nhắn trong nhật ký công việc sẽ được lưu riêng cho task này, không làm rối hội thoại chính."` — cố giữ trong ảnh nếu được.
- Nếu đã có nhiều tin nhắn hệ thống trước đó trong nhật ký → scroll xuống cuối để thấy tin nhắn mới nhất.

---

## Quy trình chụp theo thứ tự

```
Bước 1 → Đăng nhập tài khoản Staff
          Mở nhóm chat có task Chưa xử lý
          ↓
Bước 2 → Tab Công Việc → thấy thẻ task badge vàng "Chưa xử lý"
          CHƯA bấm gì
          → Chụp Ảnh 1 (task với nút Bắt đầu, highlight nút)
          ↓
Bước 3 → [Nếu dùng DevTools throttle: bật Slow 3G trước]
          Bấm nút Bắt đầu
          → NHANH: Chụp Ảnh 2 (spinner đang xoay)
          [Nếu dùng DevTools throttle: tắt Slow 3G sau khi chụp]
          ↓
Bước 4 → Đợi API phản hồi xong (0.5–2 giây)
          Badge đổi sang "Đang xử lý" (xanh dương)
          → Chụp Ảnh 3 (badge mới, nút Chờ duyệt)
          ↓
Bước 5 → Bấm nút Nhật ký trên thẻ task vừa bắt đầu
          Panel nhật ký mở ra
          Tìm tin nhắn hệ thống "đã chuyển trạng thái... sang Đang xử lý"
          → Chụp Ảnh 4 (panel nhật ký + tin nhắn hệ thống)
          ↓
Bước 6 → Done ✅
```

---

## Checklist trước khi nộp

```
□ Đúng 4 ảnh, đúng tên file
□ Chụp bằng tài khoản STAFF (không phải Leader/Admin)
□ Kích thước: 1280px chiều ngang
□ Format: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm highlight màu #10B981
□ Ảnh 1: badge "Chưa xử lý" màu vàng rõ ràng + nút Bắt đầu
□ Ảnh 2: spinner đang xoay HOẶC nút đang bị mờ (disabled)
□ Ảnh 3: badge đã đổi "Đang xử lý" màu xanh dương + nút Chờ duyệt
□ Ảnh 4: panel nhật ký mở + tin nhắn hệ thống về thay đổi trạng thái
□ Tên task trong ảnh là dữ liệu test (không phải task thật của công ty)
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
                    ├── 18-staff-bat-dau-buoc-01.webp  ← task badge vàng + nút Bắt đầu
                    ├── 18-staff-bat-dau-buoc-02.webp  ← nút đang spinner
                    ├── 18-staff-bat-dau-buoc-03.webp  ← badge xanh Đang xử lý
                    └── 18-staff-bat-dau-buoc-04.webp  ← panel Nhật ký
```

---

## Bảng so sánh thẻ task trước/sau bấm Bắt đầu

| Phần tử | Trước (Chưa xử lý) | Sau (Đang xử lý) |
|---------|---------------------|------------------|
| Badge góc phải trên | Vàng nhạt `amber-200` | Xanh dương nhạt `sky-50` |
| Nhãn badge | "Chưa xử lý" | "Đang xử lý" |
| Nút hành động | **[Nhật ký] [Bắt đầu]** | **[Nhật ký] [Chờ duyệt]** |
| Checklist tick | Mờ, không bấm được | Sáng, bấm được |

> Đây là bảng tham khảo để kiểm tra ảnh 1 và ảnh 3 trước khi nộp.

---

## Ghi chú về Nhật ký công việc (TaskLogThreadSheet)

Panel Nhật ký là một **thread riêng** gắn với task — hoạt động như một luồng chat mini. Đặc điểm:
- **Tin nhắn hệ thống** (`contentType: "SYS"`) hiển thị dạng pill căn giữa, nền xám, không có avatar.
- **Tin nhắn thường** (người dùng gửi) hiển thị dạng bubble trái/phải có avatar.
- Hỗ trợ đính kèm file (📎) và ảnh (🖼️) — giống chat chính.
- Không ảnh hưởng khung chat nhóm chính.

Trong Ảnh 4, cần thấy rõ **tin nhắn hệ thống** (pill xám căn giữa) — đây là điểm minh họa tính năng audit trail mà người dùng hay bỏ qua.

---

## Ghi chú bổ sung

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong repo `Quoc-Nam-Guide`.

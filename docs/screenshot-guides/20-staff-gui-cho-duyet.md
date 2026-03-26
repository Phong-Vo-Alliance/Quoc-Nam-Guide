# Hướng Dẫn Chụp Hình — Bài 20: Gửi "Chờ duyệt"

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/20-staff-gui-cho-duyet.mdx`
**Số ảnh cần chụp:** 3 ảnh
**Cập nhật lần cuối:** 2026-03-23

---

## Chuẩn bị trước khi chụp

### ⚠️ Tài khoản và trạng thái task bắt buộc

| Yêu cầu | Chi tiết |
|---------|---------|
| Tài khoản | **Staff thuần túy** — không dùng Leader/Admin |
| Lý do | Leader có nút **Hoàn tất** thay cho **Chờ duyệt** — giao diện khác hoàn toàn |
| Trạng thái task | **Đang xử lý** + checklist đã tick **100%** (nếu task có checklist) |

### 🔗 Tái dùng từ bài 19

Nếu vừa chụp xong bài 19 (checklist 100%), **không cần tạo task mới** — dùng luôn task đó:
- Task đang ở trạng thái **Đang xử lý**
- Checklist đã tick **5/5** (hoặc bất kỳ N/N)
- Nút **Chờ duyệt** đang sáng, sẵn sàng bấm

Nếu không có sẵn, nhờ Leader tạo task mới → Staff bấm Bắt đầu → tick hết checklist → bắt đầu chụp.

### Task không có checklist cũng được

Nếu task **không có checklist** thì nút **Chờ duyệt** sáng ngay từ khi ở trạng thái Đang xử lý — không cần tick gì. Trường hợp này vẫn chụp được nhưng Ảnh 1 sẽ không có thanh tiến trình. Ưu tiên dùng task **có checklist 100%** để ảnh đầy đủ thông tin hơn.

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Zoom | 100% |
| Độ rộng cửa sổ | **1280px** |

### Công cụ highlight

- Màu viền: **#10B981** (emerald)
- Dạng: viền bo góc (2–3px), mũi tên khi cần
- **1 điểm highlight** mỗi ảnh
- Không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Thẻ task Đang xử lý, nút Chờ duyệt đang sáng

**Tên file:** `20-staff-gui-cho-duyet-buoc-01.webp`

**Trạng thái màn hình:**
- Tab **Công Việc** đang mở, mục **Công Việc Của Tôi** hiển thị
- Thẻ task có badge **Đang xử lý** (nền `sky-50` xanh dương nhạt)
- Thanh tiến trình hiển thị **100%** (toàn bộ màu xanh lá gradient) — nếu có checklist
- Dòng checklist header hiển thị **(N/N)** — số mục bằng nhau
- Nút **Chờ duyệt** ở góc phải dưới thẻ: **sáng rõ, không bị mờ**

**Bố cục thẻ task:**
```
┌──────────────────────────────────────────────┐
│                          [Đang xử lý]        │  ← badge xanh dương nhạt
│ Kiểm tra quy trình mẫu                       │
│ Nhóm: Phát triển                             │
│ ████████████████████ 100%                    │  ← thanh tiến trình đầy
│ ▼ Checklist (5/5)                            │  ← (có thể đóng hoặc mở đều được)
│                                              │
│ 23/03 09:15  [Nhật ký]    [Chờ duyệt]  ◄────┼── HIGHLIGHT — nút sáng
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **nút "Chờ duyệt"** (góc phải dưới thẻ)

**Điểm cần thấy rõ trong ảnh:**
1. Badge **Đang xử lý** xanh dương nhạt — xác nhận đúng trạng thái
2. Thanh tiến trình **100%** xanh lá — xác nhận checklist đã xong
3. Nút **Chờ duyệt sáng** — đây là điểm khác biệt so với Ảnh 1 bài 19 (nút mờ)

**Ghi chú:** Checklist có thể đang đóng hoặc mở — không quan trọng. Miễn là thấy thanh tiến trình 100% và nút Chờ duyệt sáng.

---

### 📸 Ảnh 2 — Nút Chờ duyệt đang xử lý (spinner)

**Tên file:** `20-staff-gui-cho-duyet-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm nút **Chờ duyệt**
- Nút đang hiển thị **vòng tròn xoay** (spinner `Loader2`) trong khi chờ API
- Thẻ task vẫn có badge **Đang xử lý** — chưa đổi
- Nút bị `disabled` trong lúc đang xử lý (`disabled:opacity-50`)

**Đây là ảnh khó nhất — spinner chỉ hiện trong ~0.5–1 giây.**

**3 cách chụp spinner (giống bài 18):**

**Cách A — DevTools throttle mạng (khuyến nghị):**
1. F12 → tab **Network** → đổi sang **Slow 3G**
2. Bấm **Chờ duyệt** → spinner hiện 3–5 giây → chụp
3. Sau khi chụp xong → đổi lại **No throttling**

**Cách B — Screen recorder:**
1. Quay màn hình toàn bộ thao tác bằng OBS / ShareX / Loom
2. Từ video, trích xuất frame đúng lúc spinner đang hiện
3. Export thành WebP/PNG

**Cách C — Nếu không chụp được spinner:**
Chụp ảnh **ngay sau khi bấm** — nút vừa bị disable (mờ, chưa có spinner). Dùng mũi tên highlight chỉ vào vùng nút.

**Bố cục vùng cần chụp:**
```
┌────────────────────────────────────────────┐
│  ┌──────────────────────────────────────┐  │
│  │                       [Đang xử lý]  │  │
│  │ Kiểm tra quy trình mẫu              │  │
│  │ ...                                  │  │
│  │ 23/03 09:15  [Nhật ký]  [  ⟳  ] ◄──┼──── spinner xoay
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **vùng nút đang có spinner** (góc phải dưới thẻ)

---

### 📸 Ảnh 3 — Task đã chuyển vào mục Chờ Duyệt

**Tên file:** `20-staff-gui-cho-duyet-buoc-03.webp`

**Đây là ảnh quan trọng nhất — minh họa toàn bộ kết quả của flow.**

**Trạng thái màn hình:**
- Mục **Công Việc Của Tôi** đang **trống** (hoặc không còn task vừa gửi)
- Mục **Chờ Duyệt** đang mở rộng, hiển thị task vừa gửi
- Badge của task: **Chờ duyệt** (nền `amber-50` cam nhạt, chữ `amber-700`)
- **Chỉ còn nút Nhật ký** — không có nút Bắt đầu, Chờ duyệt, hay Hoàn tất
- Nút chữ nhỏ **"Xem tất cả công việc đã hoàn thành"** vẫn còn ở cuối mục Chờ Duyệt

**Bố cục cột phải cần chụp:**
```
┌──────────────────────────────────────────────────┐
│  [ Thông Tin ]  [ Công Việc ✓ ]                  │
├──────────────────────────────────────────────────┤
│  📋 Công Việc Của Tôi                  [∧]       │
│  ┌──────────────────────────────────────────┐    │
│  │  Không có việc cần làm.                  │    │  ← empty state
│  └──────────────────────────────────────────┘    │
│                                                  │
│  ✏️ Chờ Duyệt                          [∧]  ◄───┼── HIGHLIGHT toàn mục
│  ┌──────────────────────────────────────────┐    │
│  │                         [Chờ duyệt] ◄───┼──── badge cam nhạt
│  │ Kiểm tra quy trình mẫu                   │    │
│  │ Nhóm: Phát triển                         │    │
│  │ ████████████████████ 5/5 mục             │    │
│  │ 23/03 09:15  [Nhật ký]                   │    │  ← CHỈ còn Nhật ký
│  └──────────────────────────────────────────┘    │
│                                                  │
│           Xem tất cả công việc đã hoàn thành     │
└──────────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **mục "Chờ Duyệt"** — bao gồm header accordion và thẻ task bên trong

**4 điểm cần thấy rõ trong ảnh:**
1. Mục **Công Việc Của Tôi** hiện **"Không có việc cần làm"** — task đã rời khỏi đây
2. Badge **Chờ duyệt** màu cam nhạt trên thẻ task
3. Thẻ task **chỉ có nút Nhật ký** — không còn nút hành động nào khác
4. Mục Chờ Duyệt **đang mở rộng** — accordion expanded

**Ghi chú:**
- Nếu mục Công Việc Của Tôi còn các task khác (trạng thái khác), chúng sẽ vẫn hiển thị — không sao, chỉ cần thấy rõ **task vừa gửi đã xuất hiện trong mục Chờ Duyệt**.
- Badge **Chờ duyệt** (`amber-50`) trông khác hẳn badge **Đang xử lý** (`sky-50`) — màu cam nhạt vs xanh dương nhạt. Cần thấy sự khác biệt rõ ràng.
- Accordion **Chờ Duyệt** cần đang mở (expanded). Nếu đang đóng → bấm vào header để mở trước khi chụp.

---

## Quy trình chụp theo thứ tự

```
Bước 1 → Đăng nhập tài khoản Staff
          Mở nhóm chat → tab Công Việc
          Tìm task "Đang xử lý" có checklist 100% (hoặc không có checklist)
          Kiểm tra nút Chờ duyệt đang SÁNG
          → Chụp Ảnh 1 (highlight nút Chờ duyệt sáng)
          ↓
Bước 2 → [Nếu dùng DevTools: bật Slow 3G]
          Bấm nút Chờ duyệt
          → NHANH: Chụp Ảnh 2 (spinner đang xoay)
          [Nếu dùng DevTools: tắt Slow 3G sau khi chụp]
          ↓
Bước 3 → Đợi API phản hồi (0.5–2 giây)
          Task di chuyển từ "Công Việc Của Tôi" → "Chờ Duyệt"
          Đảm bảo accordion Chờ Duyệt đang MỞ
          → Chụp Ảnh 3 (highlight mục Chờ Duyệt)
          ↓
Bước 4 → Done ✅
```

---

## Checklist trước khi nộp

```
□ Đúng 3 ảnh, đúng tên file
□ Chụp bằng tài khoản STAFF (không phải Leader/Admin)
□ Kích thước: 1280px chiều ngang
□ Format: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm highlight màu #10B981
□ Ảnh 1: badge "Đang xử lý" xanh dương + thanh 100% + nút Chờ duyệt SÁNG
□ Ảnh 2: spinner đang xoay HOẶC nút vừa bị mờ (disabled state)
□ Ảnh 3: task trong mục Chờ Duyệt + badge cam nhạt + CHỈ có nút Nhật ký
□ Ảnh 3: mục Công Việc Của Tôi trống hoặc không còn task vừa gửi
□ Ảnh 3: accordion Chờ Duyệt đang MỞ (expanded)
□ Tên task test trung tính
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
                    ├── 20-staff-gui-cho-duyet-buoc-01.webp  ← nút Chờ duyệt sáng
                    ├── 20-staff-gui-cho-duyet-buoc-02.webp  ← spinner đang xoay
                    └── 20-staff-gui-cho-duyet-buoc-03.webp  ← task trong mục Chờ Duyệt
```

---

## So sánh badge trước/sau gửi Chờ duyệt

| | Trước (Đang xử lý) | Sau (Chờ duyệt) |
|--|--|--|
| Badge màu nền | `sky-50` xanh dương nhạt | `amber-50` cam nhạt |
| Badge chữ | `sky-700` xanh dương | `amber-700` cam/vàng |
| Nút hành động | **[Nhật ký] [Chờ duyệt]** | **[Nhật ký]** (chỉ còn 1) |
| Vị trí trong panel | Mục Công Việc Của Tôi | Mục Chờ Duyệt |
| Checklist tick | Bấm được | **Không bấm được** — tooltip "Task đang chờ duyệt, không thể chỉnh sửa" |

> Bảng này giúp cross-check Ảnh 1 và Ảnh 3 trước khi nộp.

---

## Lưu ý về quyền: Tại sao Staff thấy "Chờ duyệt" còn Leader thấy "Hoàn tất"?

Đây là câu hỏi hay phát sinh khi chụp nhầm tài khoản:

- **Staff** (`canChangeToNeedVerify = true`, `canChangeToFinished = false`): thấy nút **Chờ duyệt**
- **Leader** (`canChangeToFinished = true`): thấy nút **Hoàn tất** (bỏ qua bước Chờ duyệt)

Nếu chụp bằng tài khoản Leader → nút **Chờ duyệt** sẽ không xuất hiện → ảnh sai hoàn toàn.

---

## Tip: Chuỗi chụp 4 bài liên tiếp (17 → 18 → 19 → 20)

Nếu chụp cả 4 bài trong một lần, có thể dùng **1 task duy nhất** chạy xuyên suốt:

```
Task mới (Chưa xử lý) ──→ [Bài 17: xem tổng quan]
           ↓ Bắt đầu
Task Đang xử lý       ──→ [Bài 18: bắt đầu xử lý]
           ↓ Tick checklist
Task Đang xử lý 100%  ──→ [Bài 19: checklist]
           ↓ Chờ duyệt
Task Chờ duyệt        ──→ [Bài 20: gửi Chờ duyệt]
```

Tiết kiệm thời gian tạo dữ liệu test, đảm bảo tính nhất quán về tên task và giao diện giữa các bài.

---

## Ghi chú bổ sung

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong repo `Quoc-Nam-Guide`.

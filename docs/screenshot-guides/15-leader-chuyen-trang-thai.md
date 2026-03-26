# Hướng Dẫn Chụp Hình — Bài 15: Chuyển trạng thái công việc

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/15-leader-chuyen-trang-thai.mdx`
**Số ảnh cần chụp:** 3 ảnh
**Cập nhật lần cuối:** 2026-03-25

---

## Hiểu đúng tính năng trước khi chụp

### Sơ đồ luồng trạng thái

```
Chưa xử lý ──[Bắt đầu]──► Đang xử lý ──[Hoàn tát]──► Hoàn thành
                                │                          ▲
                           [Chờ duyệt]                    │
                                │                    [Hoàn tát]
                                ▼                          │
                           Chờ duyệt ─────────────────────┘
```

**Bảng tóm tắt nút – trạng thái:**

| Trạng thái hiện tại | Nút hiển thị (Leader) | Nút hiển thị (Staff) |
|--------------------|----------------------|----------------------|
| Chưa xử lý | **Bắt đầu** | **Bắt đầu** |
| Đang xử lý | **Hoàn tát** | **Chờ duyệt** |
| Chờ duyệt | **Hoàn tát** ← điểm khác biệt Leader | *(không có nút)* |
| Hoàn thành | *(không có nút)* | *(không có nút)* |

→ **Điểm đặc trưng của Leader:** chỉ Leader/Admin mới thấy nút **Hoàn tát** khi công việc đang ở **Chờ duyệt** — đây là hành động duyệt/phê duyệt công việc của nhân viên.

### Màu huy hiệu trạng thái (dùng để nhận biết khi chụp)

| Trạng thái | Màu huy hiệu |
|-----------|-------------|
| Chưa xử lý | Nền vàng nhạt (`amber-200`), chữ nâu |
| Đang xử lý | Nền xanh dương nhạt (`sky-50`), chữ xanh dương |
| Chờ duyệt | Nền vàng cam nhạt (`amber-50`), chữ vàng cam |
| Hoàn thành | Nền xanh lá nhạt (`emerald-50`), chữ xanh lá |

### Điều kiện nút bị mờ (không bấm được)

Cả **Hoàn tát** và **Chờ duyệt** đều bị mờ nếu:
- Công việc có danh sách kiểm tra (checklist) và **còn mục chưa được đánh dấu**
- Khi di chuột vào nút mờ, tooltip hiện: *"Vui lòng hoàn thành tất cả checklist trước"*

→ Khi chụp, ưu tiên dùng công việc **không có checklist** hoặc checklist **đã tick đủ** để tránh tình trạng nút mờ.

### Tin nhắn hệ thống tự động

Sau mỗi lần chuyển trạng thái thành công, hệ thống tự gửi 1 tin nhắn vào luồng chat:
> *"[Tên người dùng] đã chuyển trạng thái công việc [tên CV] sang [trạng thái mới]."*

Tin nhắn này **không ảnh hưởng đến ảnh chụp** — chỉ cần biết để giải thích nếu thấy tin nhắn lạ xuất hiện.

---

## Chuẩn bị trước khi chụp

### Tài khoản
Bắt buộc dùng **Leader** hoặc **Admin**.

### Dữ liệu cần chuẩn bị

Cần có **2 công việc** ở 2 trạng thái khác nhau để minh họa đầy đủ:

| Công việc | Trạng thái yêu cầu | Dùng cho ảnh | Ghi chú |
|-----------|-------------------|-------------|---------|
| Công việc A | **Chưa xử lý** | Ảnh 2 (nút Bắt đầu) | Không cần checklist |
| Công việc B | **Chờ duyệt** | Ảnh 2 (nút Hoàn tát) | Đây là kịch bản quan trọng nhất của Leader |

> Nếu không có công việc ở **Chờ duyệt**: tạo 1 công việc mới bằng tài khoản Staff → dùng Staff bấm **Bắt đầu** rồi **Chờ duyệt** → quay lại tài khoản Leader để chụp.

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

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Tab Công Việc đang mở, thấy các nhóm trạng thái

**Tên tệp:** `15-leader-chuyen-trang-thai-buoc-01.webp`

**Mục tiêu:** Cho thấy toàn cảnh bảng Công Việc với các nhóm trạng thái — người dùng đang tìm thẻ cần chuyển.

**Trạng thái màn hình:**
- Bảng bên phải đang mở, tab **Công Việc** được chọn (active)
- Chế độ xem **Nhóm** (Team) đang bật (không phải chế độ Của tôi)
- Ít nhất **2 nhóm trạng thái** đang hiển thị và có thẻ công việc bên trong
- Ưu tiên thấy nhóm **Chờ duyệt** (nếu có) vì đây là điểm Leader hay làm nhất

**Bố cục bảng bên phải cần thấy:**
```
┌──────────────────────────────────────────┐
│  [Thông Tin]  [Công Việc] ← active       │
│  ─────────────────────────────────────── │
│  ● Chờ duyệt (1) ▼                      │  ← nhóm amber
│  ┌──────────────────────────────────┐    │
│  │  Tên CV…  [Chờ duyệt]           │    │
│  │  Nhóm: … • Giao cho: …          │    │
│  │  [Nhật ký]  [Hoàn tát]          │    │  ← nút Hoàn tát
│  └──────────────────────────────────┘    │
│  ● Chưa xử lý (2) ▼                     │  ← nhóm amber-200
│  ● Đang xử lý (1) ▼                     │  ← nhóm sky
│  ● Hoàn thành (3) ▼                     │  ← nhóm emerald
└──────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **tiêu đề tab "Công Việc"** ở thanh tab trên cùng của bảng

**Ghi chú:**
- Không cần thấy tất cả 4 nhóm cùng lúc — 2–3 nhóm là đủ
- Ưu tiên bố cục **Chờ duyệt** ở đầu danh sách (vì đây là nội dung chính của bài)
- Nếu bảng quá chật, có thể chụp crop phần bảng bên phải riêng (không cần chat bên trái)

---

### 📸 Ảnh 2 — Thẻ công việc đang ở Chờ duyệt, nút Hoàn tát nổi bật

**Tên tệp:** `15-leader-chuyen-trang-thai-buoc-02.webp`

**Mục tiêu:** Đây là ảnh **quan trọng nhất** của bài — thể hiện đặc quyền của Leader khi thấy nút **Hoàn tát** trên công việc đang Chờ duyệt.

**Trạng thái màn hình:**
- Thẻ công việc đang ở trạng thái **Chờ duyệt** (huy hiệu màu vàng cam, chữ "Chờ duyệt")
- Góc dưới phải thẻ có nút **Hoàn tát** (sáng, bấm được — không mờ)
- **Không có** nút **Chờ duyệt** (vì đã ở trạng thái đó rồi)

**Chi tiết thẻ công việc cần thấy rõ:**
```
┌─────────────────────────────────────────────────────┐
│                              [Chờ duyệt] ← huy hiệu│  ← góc trên phải
│  Tên công việc (link xanh dương)                    │
│  Nhóm: Kho hàng  •  Giao cho: Nguyễn Văn A         │
│                                                     │
│  ─────────────── danh sách kiểm tra (nếu có) ────   │
│                                                     │
│  28/03  10:30            [Nhật ký]  [Hoàn tát]     │  ← góc dưới phải
└─────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **nút Hoàn tát** ở góc dưới phải của thẻ

**Lưu ý quan trọng khi chọn thẻ để chụp:**
- Nút **Hoàn tát** phải đang **sáng** (không mờ) → công việc không có checklist hoặc checklist đã tick đủ
- Huy hiệu **Chờ duyệt** (vàng cam) phải nhìn thấy rõ để phân biệt với các trạng thái khác
- Nếu không tìm được công việc Chờ duyệt phù hợp: xem mục **"Tạo dữ liệu test nhanh"** cuối tài liệu này

**Biến thể có thể chụp thêm (không bắt buộc):**
Nếu muốn minh họa cả nút **Bắt đầu** (từ Chưa xử lý), có thể chụp 1 thẻ thứ hai với huy hiệu **Chưa xử lý** (vàng nhạt) và nút **Bắt đầu** ở góc dưới. Đặt tên `15-leader-chuyen-trang-thai-buoc-02b.webp` — chỉ dùng làm tài liệu nội bộ, không dùng trong bài MDX.

---

### 📸 Ảnh 3 — Thẻ đã chuyển sang Hoàn thành, huy hiệu xanh lá

**Tên tệp:** `15-leader-chuyen-trang-thai-buoc-03.webp`

**Mục tiêu:** Cho thấy kết quả ngay lập tức sau khi bấm **Hoàn tát** — huy hiệu đổi sang màu xanh lá, thẻ chuyển nhóm.

**Trạng thái màn hình:**
- Thẻ công việc vừa được chuyển sang **Hoàn thành**
- Huy hiệu góc trên phải hiện **Hoàn thành** (nền xanh lá nhạt `emerald-50`, chữ xanh lá)
- Không còn nút hành động nào (không có Bắt đầu / Chờ duyệt / Hoàn tát)
- Thẻ đang nằm trong nhóm **Hoàn thành** (nếu thấy được tiêu đề nhóm)

**Chi tiết thẻ sau khi hoàn thành:**
```
┌─────────────────────────────────────────────────────┐
│                           [Hoàn thành] ← huy hiệu  │  ← xanh lá nhạt
│  Tên công việc (link xanh dương)                    │
│  Nhóm: Kho hàng  •  Giao cho: Nguyễn Văn A         │
│                                                     │
│  28/03  10:30                         [Nhật ký]    │  ← chỉ còn Nhật ký
└─────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **huy hiệu "Hoàn thành"** ở góc trên phải của thẻ

**Điểm người đọc cần thấy rõ:**
1. Huy hiệu đổi màu: từ vàng cam (Chờ duyệt) → xanh lá (Hoàn thành)
2. **Không có** nút hành động nào còn lại (trạng thái cuối — không thể chuyển tiếp)
3. Chỉ còn nút **Nhật ký** (luôn hiển thị, không liên quan trạng thái)

**Mẹo chụp:** Bấm **Hoàn tát** → chụp ngay trong vòng 2–3 giây đầu trước khi thẻ có thể bị cuộn hoặc tự ẩn khỏi nhóm hiện tại.

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  → Đăng nhập tài khoản Leader
  → Mở nhóm chat có công việc ở trạng thái "Chờ duyệt"
  → Mở bảng bên phải, chọn tab Công Việc
  ↓
Ảnh 1  →  Bảng Công Việc đang hiện với các nhóm trạng thái
           Thấy ít nhất nhóm "Chờ duyệt" và 1 nhóm khác
           → CHỤP (đánh dấu tab "Công Việc")
           ↓
Ảnh 2  →  Phóng to / cuộn đến thẻ công việc "Chờ duyệt"
           Thấy rõ huy hiệu vàng cam và nút "Hoàn tát" sáng
           → CHỤP (đánh dấu nút "Hoàn tát")
           ↓
           Bấm nút "Hoàn tát"
           Đợi 1–2 giây để thẻ cập nhật
           ↓
Ảnh 3  →  Huy hiệu đã đổi sang xanh lá "Hoàn thành"
           Không còn nút hành động
           → CHỤP (đánh dấu huy hiệu "Hoàn thành")
           ↓
Hoàn thành ✅
```

---

## Tạo dữ liệu test nhanh (khi không có công việc Chờ duyệt)

Nếu danh sách không có công việc ở trạng thái **Chờ duyệt**, thực hiện các bước sau:

```
1. Mở cửa sổ ẩn danh (Ctrl+Shift+N) → Đăng nhập tài khoản Staff
2. Mở cùng nhóm chat
3. Dùng Staff: Bấm "Bắt đầu" trên 1 công việc "Chưa xử lý"
   → Trạng thái đổi sang "Đang xử lý"
4. Dùng Staff: Bấm "Chờ duyệt"
   → Trạng thái đổi sang "Chờ duyệt"
5. Quay lại cửa sổ Leader → Tải lại trang (F5)
6. Công việc đó sẽ xuất hiện trong nhóm "Chờ duyệt" → sẵn sàng để chụp
```

---

## Bảng kiểm tra trước khi nộp

```
□ Đủ 3 ảnh, đúng tên tệp (15-leader-chuyen-trang-thai-buoc-01 đến 03)
□ Chiều rộng: 1280px
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu màu #10B981

□ Ảnh 1: Tab "Công Việc" đang active, thấy ít nhất 2 nhóm trạng thái
□ Ảnh 2: Thẻ ở trạng thái "Chờ duyệt" (huy hiệu vàng cam) + nút "Hoàn tát" sáng
□ Ảnh 3: Huy hiệu đã đổi sang "Hoàn thành" (xanh lá), không còn nút hành động

□ Dùng tài khoản Leader — không dùng Staff
□ Nút "Hoàn tát" ở ảnh 2 phải sáng (không mờ) — checklist đã tick đủ hoặc không có checklist
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
                    ├── 15-leader-chuyen-trang-thai-buoc-01.webp  ← bảng Công Việc, các nhóm trạng thái
                    ├── 15-leader-chuyen-trang-thai-buoc-02.webp  ← thẻ Chờ duyệt + nút Hoàn tát
                    └── 15-leader-chuyen-trang-thai-buoc-03.webp  ← thẻ đã Hoàn thành, huy hiệu xanh lá
```

---

## So sánh với bài liên quan (tránh nhầm lẫn khi chụp)

| Bài | Thao tác | Tài khoản | Nút chính |
|-----|---------|-----------|-----------|
| Bài 15 (bài này) | Leader **duyệt** / chuyển trạng thái | Leader / Admin | **Hoàn tát** (từ Chờ duyệt) |
| Bài 18 | Staff **bắt đầu** công việc | Staff | **Bắt đầu** (từ Chưa xử lý) |
| Bài 20 | Staff **nộp chờ duyệt** | Staff | **Chờ duyệt** (từ Đang xử lý) |

---

## Câu hỏi thường gặp khi chụp

**H: Nút "Hoàn tát" bị mờ, không chụp được đẹp?**
Công việc có checklist chưa tick đủ. Dùng tài khoản Staff tick hết các mục trong danh sách kiểm tra → quay lại Leader thì nút sáng trở lại.

**H: Không thấy nhóm "Chờ duyệt" trong bảng?**
Chưa có công việc nào ở trạng thái đó. Xem mục **"Tạo dữ liệu test nhanh"** phía trên.

**H: Sau khi bấm "Hoàn tát", thẻ biến mất khỏi màn hình?**
Thẻ đã chuyển vào nhóm **Hoàn thành** ở cuối danh sách. Cuộn xuống để thấy và chụp ảnh 3.

**H: Thấy cả nút "Chờ duyệt" lẫn "Hoàn tát" trên cùng một thẻ?**
Công việc đang ở trạng thái **Đang xử lý**, không phải **Chờ duyệt**. Nếu muốn thấy nút **Hoàn tát** duy nhất (đặc quyền Leader từ Chờ duyệt), cần dùng công việc ở đúng trạng thái **Chờ duyệt**.

---

## Ghi chú bổ sung

**Nếu UI thay đổi sau khi chụp:**
Xem `docs/CONTENT_GUIDE.md` — Mục 10. Giữ nguyên tên tệp ảnh.

**Câu hỏi & hỗ trợ:**
Liên hệ BA phụ trách hoặc tạo yêu cầu trong kho `Quoc-Nam-Guide`.

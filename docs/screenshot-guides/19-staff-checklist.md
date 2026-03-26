# Hướng Dẫn Chụp Hình — Bài 19: Tick checklist & lưu tiến độ

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/19-staff-checklist.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-23

---

## Chuẩn bị trước khi chụp

### ⚠️ Tài khoản và trạng thái task bắt buộc

| Yêu cầu | Chi tiết |
|---------|---------|
| Tài khoản | **Staff thuần túy** — không dùng Leader/Admin |
| Trạng thái task | **Đang xử lý** (`doing`) — checklist chỉ tick được ở trạng thái này |
| Số mục checklist | **4–6 mục** — đủ thấy tiến trình %; không nên quá ít (2 mục) hoặc quá nhiều (10+) |
| Trạng thái checklist lúc bắt đầu chụp | **Chưa có mục nào được tick** (0/N) |

> **Tại sao phải là 0/N?**
> Quy trình chụp sẽ tick dần từng mục qua 4 ảnh. Nếu đã có mục tick sẵn, chuỗi ảnh mất tính liên tục.

### Chuẩn bị dữ liệu test

**Nhờ Leader thực hiện (trước khi chụp):**
1. Tạo 1 task test với tên trung tính — ví dụ: _"Kiểm tra quy trình mẫu"_
2. Thêm **5 mục checklist** với tên đơn giản, ví dụ:
   - "Xem xét tài liệu"
   - "Kiểm tra thông tin"
   - "Xác nhận dữ liệu"
   - "Cập nhật kết quả"
   - "Ghi chú hoàn tất"
3. Giao task cho tài khoản Staff sẽ dùng để chụp
4. Dùng tài khoản Staff **bấm Bắt đầu** → task chuyển sang **Đang xử lý**
5. **Chưa tick bất kỳ mục nào** — để nguyên 0/5

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Zoom | 100% |
| Độ rộng cửa sổ | **1280px** |
| Chế độ | Cửa sổ thường |

### Công cụ highlight

- Màu viền: **#10B981** (emerald)
- Dạng: viền bo góc (2–3px); mũi tên khi phần tử quá nhỏ
- **1 điểm highlight** mỗi ảnh (trừ Ảnh 2 — xem ghi chú)
- Không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Thẻ task Đang xử lý, checklist đang đóng

**Tên file:** `19-staff-checklist-buoc-01.webp`

**Trạng thái màn hình:**
- Tab **Công Việc** đang mở, mục **Công Việc Của Tôi** hiển thị
- Thẻ task có badge **Đang xử lý** (nền xanh dương nhạt `sky-50`, chữ `sky-700`)
- Thanh tiến trình hiển thị **0%** (thanh màu xanh lá chưa có, hoặc rất nhỏ)
- Dòng **"Checklist (0/5)"** đang đóng (chevron `▶` trỏ sang phải)
- Danh sách mục **chưa hiện** — chỉ thấy header "Checklist (0/5)"

**Bố cục thẻ task cần thấy:**
```
┌──────────────────────────────────────────────┐
│                          [Đang xử lý]        │  ← badge xanh dương nhạt
│ Kiểm tra quy trình mẫu                       │  ← tên task
│ Nhóm: Phát triển                             │  ← metadata
│ ░░░░░░░░░░░░░░░░░░░░ 0%                      │  ← thanh tiến trình (trống/gần trống)
│ ▶ Checklist (0/5)                            │  ← header đóng ← HIGHLIGHT
│ 23/03 09:15  [Nhật ký]  [Chờ duyệt mờ]      │  ← nút Chờ duyệt bị mờ (disabled)
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh dòng **"Checklist (0/5)"** (bao gồm cả icon chevron ▶)

**2 điểm người dùng cần thấy trong ảnh này:**
1. **Thanh tiến trình 0%** — chứng minh chưa có mục nào được tick
2. **Nút Chờ duyệt bị mờ** (disabled) — mờ vì checklist chưa hoàn thành; đây là điều người dùng hay thắc mắc

**Ghi chú:** Nếu thanh tiến trình hoàn toàn trống (0%), nó có thể trông như một vệt xám mỏng — bình thường, cứ chụp. Thanh xanh lá sẽ xuất hiện rõ hơn ở các ảnh sau khi tick.

---

### 📸 Ảnh 2 — Checklist mở rộng, tất cả mục chưa tick

**Tên file:** `19-staff-checklist-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm vào dòng "Checklist (0/5)" → danh sách đang **mở rộng**
- Icon chevron đổi thành `▼` (trỏ xuống)
- Hiển thị đủ **5 mục checklist**, tất cả **chưa tick**:
  - Ô tròn bên trái: viền mỏng xanh lá nhạt, nền trắng (chưa tick)
  - Tên mục: chữ `text-gray-700` (bình thường, không gạch ngang)
- Nút **+ Thêm** KHÔNG hiển thị (vì Staff không có quyền thêm mục)

**Bố cục danh sách checklist:**
```
┌──────────────────────────────────────────────┐
│                          [Đang xử lý]        │
│ Kiểm tra quy trình mẫu                       │
│ Nhóm: Phát triển                             │
│ ░░░░░░░░░░░░░░░░░░░░ 0%                      │
│ ▼ Checklist (0/5)                            │
│                                              │
│   ○  Xem xét tài liệu           ← chưa tick │
│   ○  Kiểm tra thông tin                      │
│   ○  Xác nhận dữ liệu                        │
│   ○  Cập nhật kết quả                        │
│   ○  Ghi chú hoàn tất                        │
│                                              │
│ 23/03 09:15  [Nhật ký]  [Chờ duyệt mờ]      │
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **toàn bộ vùng checklist** (từ dòng "▼ Checklist (0/5)" đến hết mục cuối cùng)

**Ghi chú về ô tròn chưa tick:**
- Ô tròn (`h-4 w-4`, hình tròn nhỏ) có viền `border-emerald-300`, nền trắng
- Khi rê chuột: hiện `hover:shadow-[0_0_4px_rgba(16,185,129,0.35)]` — glow xanh nhẹ
- Nếu muốn thấy glow: rê chuột vào ô tròn đầu tiên rồi chụp (không cần thiết nhưng đẹp hơn)

---

### 📸 Ảnh 3 — Đang tick từng mục, tiến trình đang tăng

**Tên file:** `19-staff-checklist-buoc-03.webp`

**Trạng thái màn hình:**
- Đã tick **2–3 mục** (không phải tất cả — để còn mục chưa tick)
- Mục đã tick: ô tròn màu `emerald-500` (xanh lá đậm) có dấu ✓, tên mục có `line-through text-gray-400`
- Mục chưa tick: ô tròn viền nhạt, tên mục bình thường
- Danh sách **đã tự sắp xếp lại**: mục **chưa tick lên trên**, mục **đã tick xuống dưới**
- Thanh tiến trình hiển thị **40–60%** (xanh lá gradient)
- Header cập nhật: **"Checklist (2/5)"** hoặc **"(3/5)"**

**Bố cục lý tưởng — đã tick 2/5 mục:**
```
┌──────────────────────────────────────────────┐
│                          [Đang xử lý]        │
│ Kiểm tra quy trình mẫu                       │
│ Nhóm: Phát triển                             │
│ ████████░░░░░░░░░░░░ 40%  ← thanh tiến trình│
│ ▼ Checklist (2/5)                            │
│                                              │
│   ○  Xác nhận dữ liệu    ← chưa tick (trên) │
│   ○  Cập nhật kết quả                        │
│   ○  Ghi chú hoàn tất                        │
│   ●✓ Xem xét tài liệu    ← đã tick (dưới)  │
│   ●✓ Kiểm tra thông tin                      │
│                                              │
│ 23/03 09:15  [Nhật ký]  [Chờ duyệt mờ]      │
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **thanh tiến trình** (vệt xanh gradient ở giữa thẻ)

**Điểm cần thấy rõ trong ảnh này:**
1. **Thanh tiến trình đang ở giữa** (40–60%) — thấy rõ phần đã lấp đầy màu xanh lá và phần còn lại màu xám
2. **Header "Checklist (X/5)"** đã cập nhật số
3. **Mục đã tick xuống dưới, mục chưa tick lên trên** — behavior auto-sort đặc biệt cần minh họa

**Mẹo chụp:** Tick 2 mục liên tiếp → checklist tự sắp xếp lại → dừng lại → chụp. Không cần chờ animation kết thúc.

---

### 📸 Ảnh 4 — Tất cả mục đã tick, tiến trình 100%, nút Chờ duyệt sáng

**Tên file:** `19-staff-checklist-buoc-04.webp`

**Trạng thái màn hình:**
- Đã tick **tất cả 5 mục**
- Tất cả ô tròn đều màu `emerald-500` (xanh lá đậm) có dấu ✓
- Tất cả tên mục đều có `line-through text-gray-400`
- Header: **"Checklist (5/5)"**
- Thanh tiến trình: **100%** (toàn bộ thanh màu xanh lá gradient)
- Nút **Chờ duyệt** ở góc phải dưới: **sáng và bấm được** (không còn `opacity-50`)

**Bố cục kết quả cuối:**
```
┌──────────────────────────────────────────────┐
│                          [Đang xử lý]        │
│ Kiểm tra quy trình mẫu                       │
│ Nhóm: Phát triển                             │
│ ████████████████████ 100%  ← toàn bộ xanh lá│
│ ▼ Checklist (5/5)                            │
│                                              │
│   ●✓ Xem xét tài liệu    ← tất cả có dấu ✓ │
│   ●✓ Kiểm tra thông tin                      │
│   ●✓ Xác nhận dữ liệu                        │
│   ●✓ Cập nhật kết quả                        │
│   ●✓ Ghi chú hoàn tất                        │
│                                              │
│ 23/03 09:15  [Nhật ký]    [Chờ duyệt] ◄─────┼── sáng lên, bấm được
└──────────────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **nút "Chờ duyệt"** (góc phải dưới thẻ — lúc này đã sáng, không còn mờ)

**Đây là ảnh quan trọng nhất của bài** — minh họa "phần thưởng" sau khi hoàn thành checklist: nút Chờ duyệt được mở khóa.

**Ghi chú so sánh với Ảnh 1:**
| | Ảnh 1 (0/5) | Ảnh 4 (5/5) |
|--|--|--|
| Thanh tiến trình | Trống / gần trống | **Xanh lá 100%** |
| Header | Checklist (0/5) | **Checklist (5/5)** |
| Ô tròn | Viền nhạt, rỗng | **Xanh lá đậm, dấu ✓** |
| Nút Chờ duyệt | **Mờ** (disabled) | **Sáng** (enabled) |

---

## Quy trình chụp theo thứ tự

```
Bước 1 → Đăng nhập tài khoản Staff
          Mở nhóm chat → tab Công Việc
          Tìm task "Đang xử lý" có 5 mục checklist chưa tick
          ↓
Bước 2 → Thẻ task hiện với thanh tiến trình ~0%, checklist ĐÓNG
          → Chụp Ảnh 1 (highlight dòng "Checklist (0/5)")
          ↓
Bước 3 → Bấm vào dòng "Checklist (0/5)" để MỞ RỘNG danh sách
          Tất cả 5 mục hiện ra, ô tròn đều rỗng
          → Chụp Ảnh 2 (highlight toàn bộ vùng checklist)
          ↓
Bước 4 → Bấm tick MỤC 1 → danh sách tự sắp xếp lại
          Bấm tick MỤC 2
          Dừng — thanh tiến trình đang ở khoảng 40%
          → Chụp Ảnh 3 (highlight thanh tiến trình)
          ↓
Bước 5 → Tick tiếp MỤC 3, 4, 5
          Tất cả ô tròn xanh lá, thanh 100%
          Nút Chờ duyệt đã sáng
          → Chụp Ảnh 4 (highlight nút Chờ duyệt)
          ↓
Bước 6 → Done ✅
```

> **Sau khi chụp xong:** Task này đã sẵn sàng gửi Chờ duyệt — bạn có thể dùng nó để chụp bài 20 tiếp theo, hoặc hủy để tránh ảnh hưởng dữ liệu thật.

---

## Checklist trước khi nộp

```
□ Đúng 4 ảnh, đúng tên file
□ Chụp bằng tài khoản STAFF (không phải Leader/Admin)
□ Kích thước: 1280px chiều ngang
□ Format: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm highlight màu #10B981
□ Ảnh 1: badge "Đang xử lý" xanh dương + checklist ĐÓNG + nút Chờ duyệt MỜ
□ Ảnh 2: checklist MỞ + tất cả 5 mục chưa tick (ô tròn rỗng)
□ Ảnh 3: đã tick 2–3 mục + mục chưa tick NẰM TRÊN + thanh tiến trình 40–60%
□ Ảnh 4: tất cả tick xanh + thanh 100% + nút Chờ duyệt SÁNG
□ Tên mục checklist trung tính (không lộ nội dung công việc thật)
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
                    ├── 19-staff-checklist-buoc-01.webp  ← checklist đóng, 0%
                    ├── 19-staff-checklist-buoc-02.webp  ← checklist mở, chưa tick
                    ├── 19-staff-checklist-buoc-03.webp  ← đang tick, 40-60%
                    └── 19-staff-checklist-buoc-04.webp  ← 100%, Chờ duyệt sáng
```

---

## Bảng màu và trạng thái ô tròn checklist

| Trạng thái mục | Ô tròn | Tên mục | Ghi chú |
|----------------|--------|---------|---------|
| Chưa tick | Viền `emerald-300` mỏng, nền trắng, rỗng | `text-gray-700` bình thường | Hover: glow xanh nhẹ |
| Đã tick | `bg-emerald-500` xanh lá đậm + dấu ✓ trắng | `text-gray-400` + `line-through` | Xuống cuối danh sách |
| Bị mờ (task chưa Đang xử lý) | Nền `bg-gray-100`, viền `border-gray-200`, `opacity-70` | `cursor-not-allowed` | Không bấm được |

> Bảng này giúp kiểm tra ảnh trước khi nộp — ô tròn trong Ảnh 2 phải là dạng "Chưa tick", ô trong Ảnh 4 phải là "Đã tick".

---

## Hành vi auto-sort quan trọng cần thấy trong Ảnh 3

Source code `TaskCard.tsx` sort checklist theo logic:
```
1. Mục chưa tick (done=false) → lên trên
2. Mục đã tick (done=true)   → xuống dưới
3. Cùng nhóm: sắp xếp theo field `order` (tăng dần)
```

Sau mỗi lần tick, danh sách **tự sắp xếp lại ngay lập tức** — người dùng thường bị bất ngờ khi mục vừa tick "nhảy" xuống cuối. Ảnh 3 cần thấy rõ hiện tượng này: mục chưa tick nằm trên, mục đã tick nằm dưới.

---

## Ghi chú bổ sung

### Nếu không thể chuẩn bị task 0/5 tick
Nếu task đã có mục tick sẵn, có thể bỏ tick từng mục để về 0/5:
- Bấm lại vào ô tròn đã tick → ô quay về rỗng
- Làm lần lượt cho tất cả mục đã tick

### Nếu nút Chờ duyệt vẫn mờ dù tick đủ 5 mục
Cuộn danh sách checklist xuống — có thể có mục ẩn thứ 6+ chưa tick mà bạn chưa thấy.

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong repo `Quoc-Nam-Guide`.

# Hướng Dẫn Chụp Hình — Bài 21: Leader — Duyệt hoàn tất

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/21-leader-duyet-hoan-tat.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-25

---

## Chuẩn bị trước khi chụp

### Tài khoản & dữ liệu test
| Yêu cầu | Chi tiết |
|---------|---------|
| **Tài khoản** | **Leader** hoặc **Admin** — bắt buộc, Staff không thấy nút Hoàn tất |
| **Nhóm chat** | Mở nhóm đã có Loại việc được chọn sẵn |
| **Dữ liệu bắt buộc** | Ít nhất **1 công việc** đang ở trạng thái **Chờ duyệt** (nhân viên đã bấm Chờ duyệt) |
| **Dữ liệu bổ sung** | Có thêm công việc ở trạng thái Hoàn thành hôm nay (để ảnh 4 có nội dung) |

> **Cách tạo dữ liệu nhanh:** Dùng tài khoản nhân viên mở task đang "Đang xử lý" → bấm **Chờ duyệt** → chuyển lại tài khoản Leader để chụp.

### Thiết lập trình duyệt
| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Độ rộng cửa sổ | **1280px** |
| Chế độ | Cửa sổ thường |
| Thanh địa chỉ | Cắt ra khỏi ảnh cuối |

### Trạng thái ban đầu trước khi chụp
- Tab **Công Việc** trong bảng bên phải đang mở
- Chế độ hiển thị đang là **Nhóm** (nút Nhóm màu xanh)
- Loại việc đã được chọn (để thấy danh sách công việc)

### Công cụ đánh dấu
- Màu viền: **#10B981** (xanh emerald)
- Dạng: viền chữ nhật bo góc (2–3px), hoặc mũi tên khi phần tử nhỏ
- **1 điểm đánh dấu / ảnh**

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Nút Nhóm đang active, phần thống kê hiển thị số chờ duyệt

**Tên file:** `21-leader-duyet-hoan-tat-buoc-01.webp`

**Trạng thái màn hình:**
- Bảng bên phải đang mở, tab **Công Việc** đang active
- Cặp nút chuyển chế độ: nút **Nhóm** (bên trái) đang được chọn — nền xanh đậm, chữ trắng; nút **Của tôi** (bên phải) nền trắng
- Phần thống kê hiển thị: `Đang xem X công việc • Y chưa xử lý • Z đang xử lý • W chờ duyệt`
- Số **chờ duyệt** hiển thị màu cam đậm

**Vùng cần chụp — cột bảng bên phải:**
```
┌─────────────────────────────────────┐
│  [ Thông Tin ]     [ Công Việc ]    │ ← tab Công Việc đang active
├─────────────────────────────────────┤
│                                     │
│  [👥 Nhóm]    [👤 Của tôi]          │ ← cặp nút chuyển chế độ
│   ▲ nền xanh                        │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ 👥 Công Việc Của Nhóm [tên] │    │ ← phần header thống kê
│  │ Nhân viên: [Tất cả ▾]      │    │
│  │ Đang xem 5 công việc •      │    │
│  │ 2 chưa xử lý • 1 đang xử lý│    │
│  │ • 2 chờ duyệt               │    │ ← "2 chờ duyệt" màu cam đậm
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

**Điểm đánh dấu:** Viền #10B981 quanh **nút Nhóm** (nút bên trái đang được chọn màu xanh)

**Ghi chú:**
- Dòng thống kê ở dưới header: phần **"X chờ duyệt"** phải hiển thị số > 0 và màu cam (amber) — quan trọng để người đọc biết đây là nơi leader xem tổng quan
- Nếu dòng thống kê hiện "Chọn loại việc để xem thông tin" → cần chọn Loại việc trước trong thanh dropdown Nhân viên

---

### 📸 Ảnh 2 — Phần "Chờ duyệt" đang mở, thẻ công việc hiển thị với nút Hoàn tất

**Tên file:** `21-leader-duyet-hoan-tat-buoc-02.webp`

**Trạng thái màn hình:**
- Phần **Chờ duyệt (N)** đang mở rộng (dấu ▲)
- Hiển thị ít nhất 1 thẻ công việc với trạng thái **Chờ duyệt**
- Trên thẻ thấy rõ: tên công việc, tên nhân viên thực hiện, nút **Nhật ký** và nút **Hoàn tất**

**Vùng cần chụp — phần Chờ duyệt trong cột bảng bên phải:**
```
┌─────────────────────────────────────┐
│  ● Chờ duyệt (2) ▲                  │ ← tiêu đề phần (dấu chấm cam)
├─────────────────────────────────────┤
│  ┌────────────────────────────────┐  │
│  │ [Chờ duyệt]          (góc phải)│  │ ← huy hiệu vàng cam
│  │ Tên công việc ở đây            │  │
│  │ Nhóm: Kiểm soát chất lượng    │  │
│  │ Thực hiện bởi: Nguyễn Văn A    │  │
│  │ 23-03  15:17                   │  │
│  │ [Nhật ký]        [Hoàn tất]    │  │ ← nút Hoàn tất góc phải
│  └────────────────────────────────┘  │
│  ┌────────────────────────────────┐  │
│  │ (thẻ thứ 2 nếu có)             │  │
│  └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

**Điểm đánh dấu:** Viền #10B981 quanh **nút Hoàn tất** trên thẻ đầu tiên

**Ghi chú:**
- Nút **Hoàn tất** chỉ hiện khi đăng nhập bằng tài khoản Leader — kiểm tra trước
- Nút Hoàn tất màu trắng viền nhạt, chữ nhỏ — cần đánh dấu rõ để người đọc nhìn ra
- Huy hiệu **Chờ duyệt** nằm góc trên phải thẻ, nền vàng nhạt, chữ vàng cam
- Nếu nút **Hoàn tất** bị mờ (disabled): task có checklist chưa tick đủ — cần dùng task không có checklist hoặc đã tick hết

---

### 📸 Ảnh 3 — Ngay sau khi bấm Hoàn tất (nút đang xử lý hoặc thẻ đã biến mất)

**Tên file:** `21-leader-duyet-hoan-tat-buoc-03.webp`

**Có 2 phương án chụp — chọn phương án nào dễ hơn:**

**Phương án A — Chụp lúc nút đang xử lý (biểu tượng xoay):**
- Bấm nút **Hoàn tất** → lập tức chụp màn hình
- Nút đang hiển thị biểu tượng xoay (spinner) thay cho chữ "Hoàn tất"
- Cần chụp rất nhanh — dùng phím tắt Win+Shift+S

**Phương án B (dễ hơn) — Chụp sau khi thẻ đã biến khỏi phần Chờ duyệt:**
- Bấm nút Hoàn tất → chờ xử lý xong
- Phần **Chờ duyệt** giảm từ (2) xuống (1), hoặc hiện dạng rỗng nếu hết task
- Chụp ngay lúc này để thấy kết quả: thẻ đã biến mất, số trong tiêu đề đã giảm

**Vùng cần chụp (Phương án B):**
```
┌─────────────────────────────────────┐
│  ● Chờ duyệt (1) ▲                  │ ← số giảm từ 2 xuống 1
├─────────────────────────────────────┤
│  ┌────────────────────────────────┐  │
│  │ (còn 1 thẻ, thẻ vừa duyệt mất)│  │
│  └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

**Điểm đánh dấu:**
- Phương án A: viền #10B981 quanh **nút đang xử lý** (biểu tượng xoay)
- Phương án B: viền #10B981 quanh **tiêu đề "Chờ duyệt (N)"** để làm nổi số lượng đã giảm

**Ghi chú:**
- Ảnh này minh chứng cho "hành động đã thực hiện" — phương án B ổn định hơn và dễ chụp hơn
- Đảm bảo thấy rõ số đếm trong tiêu đề **Chờ duyệt (N)** đã thay đổi

---

### 📸 Ảnh 4 — Phần "Hoàn thành hôm nay" hiển thị thẻ vừa được duyệt

**Tên file:** `21-leader-duyet-hoan-tat-buoc-04.webp`

**Trạng thái màn hình:**
- Cuộn xuống trong bảng bên phải đến phần **Hoàn thành hôm nay (N)**
- Thẻ công việc vừa duyệt đã xuất hiện trong phần này
- Thẻ hiển thị huy hiệu **Hoàn thành** màu xanh lá

**Vùng cần chụp — phần Hoàn thành hôm nay:**
```
┌─────────────────────────────────────┐
│  ● Hoàn thành hôm nay (1) ▲         │ ← tiêu đề (dấu chấm xanh lá)
├─────────────────────────────────────┤
│  ┌────────────────────────────────┐  │
│  │ [Hoàn thành]         (góc phải)│  │ ← huy hiệu xanh lá
│  │ Tên công việc vừa duyệt        │  │
│  │ Nhóm: Kiểm soát chất lượng    │  │
│  │ Thực hiện bởi: Nguyễn Văn A    │  │
│  │ 23-03  15:30                   │  │
│  │ [Nhật ký]                      │  │ ← chỉ còn nút Nhật ký
│  └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

**Điểm đánh dấu:** Viền #10B981 quanh **huy hiệu "Hoàn thành"** (nền xanh lá nhạt, chữ xanh đậm)

**Ghi chú:**
- Thẻ trong phần **Hoàn thành hôm nay** không còn nút **Hoàn tất** — chỉ còn nút **Nhật ký**
- Huy hiệu trạng thái chuyển từ màu vàng cam (Chờ duyệt) sang màu xanh lá (Hoàn thành) — đây là điểm khác biệt trực quan quan trọng nhất của bài
- Cuộn đủ xuống để thấy phần này — nó nằm sau các phần Chờ duyệt, Chưa xử lý, Đang xử lý

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị:
  Đăng nhập tài khoản LEADER
  Mở nhóm chat đã có task "Chờ duyệt"
  Mở bảng bên phải → tab Công Việc → nút Nhóm
  ↓

Ảnh 1 → Chụp cả cột bảng bên phải
          Nút Nhóm đang xanh + dòng thống kê có "X chờ duyệt" màu cam
          ↓

Ảnh 2 → Bấm tiêu đề "Chờ duyệt" để mở danh sách
          Chụp thẻ công việc với nút Hoàn tất rõ ràng
          (CHƯA bấm Hoàn tất)
          ↓

Ảnh 3 → Bấm nút Hoàn tất trên 1 thẻ
          Chụp ngay sau khi bấm:
          - Phương án A: chụp lúc nút đang xoay (cần nhanh)
          - Phương án B: chụp sau khi thẻ biến mất, số đếm giảm
          ↓

Ảnh 4 → Cuộn xuống phần "Hoàn thành hôm nay"
          Chụp thẻ vừa được duyệt với huy hiệu xanh lá
          ↓
          Done ✅
```

---

## Checklist trước khi nộp

```
□ Đúng 4 ảnh, đúng tên file (21-leader-duyet-hoan-tat-buoc-0X.webp)
□ Chụp bằng tài khoản LEADER hoặc ADMIN (không phải Staff)
□ Kích thước: 1280px chiều ngang
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu màu #10B981
□ Ảnh 1: Dòng thống kê hiện "X chờ duyệt" màu cam, số > 0
□ Ảnh 2: Nút Hoàn tất thấy rõ trên thẻ (không bị mờ/disabled)
□ Ảnh 3: Thấy được kết quả sau khi duyệt (thẻ biến mất HOẶC nút đang xoay)
□ Ảnh 4: Huy hiệu "Hoàn thành" màu xanh lá trên thẻ vừa duyệt
□ Không có tên thật, số điện thoại, nội dung công việc nhạy cảm
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
                    ├── 21-leader-duyet-hoan-tat-buoc-01.webp  ← nút Nhóm + thống kê chờ duyệt
                    ├── 21-leader-duyet-hoan-tat-buoc-02.webp  ← danh sách Chờ duyệt + nút Hoàn tất
                    ├── 21-leader-duyet-hoan-tat-buoc-03.webp  ← sau khi bấm Hoàn tất
                    └── 21-leader-duyet-hoan-tat-buoc-04.webp  ← thẻ trong phần Hoàn thành hôm nay
```

---

## Ghi chú bổ sung

### Phân biệt các trạng thái trên thẻ công việc khi chụp

| Trạng thái | Màu huy hiệu | Nút hành động |
|------------|-------------|--------------|
| Chưa xử lý | Vàng nền + chữ nâu | Nhật ký · Bắt đầu |
| Đang xử lý | Xanh da trời nhạt | Nhật ký · Chờ duyệt |
| **Chờ duyệt** | **Vàng cam nhạt (amber)** | **Nhật ký · Hoàn tất** |
| **Hoàn thành** | **Xanh lá nhạt (emerald)** | **Nhật ký** (chỉ vậy thôi) |

### Nếu nút Hoàn tất bị mờ (không bấm được)
Checklist chưa tick đủ. Chuyển sang tài khoản nhân viên, mở nhật ký → tick hết các mục còn lại → chuyển lại tài khoản Leader để chụp.

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay nội dung ảnh.

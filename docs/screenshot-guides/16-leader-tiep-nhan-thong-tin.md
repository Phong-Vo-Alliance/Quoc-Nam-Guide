# Hướng Dẫn Chụp Hình — Bài 16: Tiếp nhận thông tin từ tin nhắn

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/16-leader-tiep-nhan-thong-tin.mdx`
**Số ảnh cần chụp:** 5 ảnh
**Cập nhật lần cuối:** 2026-03-25

---

## Chuẩn bị trước khi chụp

### Tài khoản & dữ liệu
| Yêu cầu | Chi tiết |
|---------|---------|
| **Tài khoản** | **Leader** (bắt buộc — Staff không thấy nút Tiếp nhận) |
| **Nhóm chat** | Mở một nhóm chat có sẵn vài tin nhắn thường của nhân viên (không phải tin nhắn hệ thống màu xám) |
| **Tin nhắn mẫu** | Chuẩn bị 1 tin nhắn chưa được tiếp nhận, chưa có task — nội dung trung tính như *"Hàng đã về kho, anh/chị kiểm tra nhé"* |
| **Bảng phải** | Mở sẵn bảng bên phải (panel) ở tab **Công Việc** |

### Thiết lập trình duyệt
| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Zoom | 100% |
| Độ rộng cửa sổ | **1280px** |
| Chế độ | Cửa sổ thường (không fullscreen) |
| Thanh địa chỉ | Crop ra khỏi ảnh cuối |

### Công cụ highlight
- Màu viền: **#10B981** (emerald)
- Dạng: viền hình chữ nhật bo góc (2–3px) hoặc mũi tên chỉ đến phần tử nhỏ
- Chỉ **1 điểm highlight** mỗi ảnh
- Không dùng màu đỏ

### Định dạng ảnh
- **Format:** WebP (hoặc PNG)
- **Tên file:** theo từng mục bên dưới
- **Lưu vào:** `guide-site/src/content/web/images/`

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Hover lên tin nhắn, thanh công cụ hiện ra

**Tên file:** `16-tiep-nhan-thong-tin-buoc-01.webp`

**Trạng thái màn hình:**
- Đang mở nhóm chat, bảng phải có thể đóng hoặc mở
- Di chuyển chuột **đang nằm trên** một tin nhắn thường (không phải tin nhắn hệ thống màu xám)
- Thanh công cụ nhỏ đang hiển thị phía trên hoặc cạnh tin nhắn với 6–7 icon

**Vùng cần chụp — Crop quanh tin nhắn đó:**
```
┌─────────────────────────────────────────────────────────┐
│                     [💬][📌][⭐][📝][📋][📥]           │ ← thanh icon hover
│  ╔═══════════════════════════════════════════════════╗  │
│  ║  Tên nhân viên                       10:15 SA     ║  │
│  ║  "Hàng đã về kho, anh/chị kiểm tra nhé"           ║  │ ← tin nhắn
│  ╚═══════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────┘
```

**Các icon trong thanh công cụ (từ trái sang phải):**
- 💬 Trả lời
- 📌 Ghim
- ⭐ Đánh dấu
- 📝 Thảo luận task (chỉ hiện nếu có task)
- 📋 Tạo task
- **📥 Tiếp nhận thông tin** ← icon hộp thư (Inbox)

**Highlight:** Viền màu #10B981 quanh **toàn bộ thanh công cụ** (dãy icon phía trên tin nhắn)

**Ghi chú thêm:**
- Phải dùng tài khoản **Leader** — nếu dùng tài khoản Staff sẽ không thấy icon 📥
- Tin nhắn cần là tin nhắn thường — **không** hover lên tin nhắn hệ thống (dòng chữ xám ở giữa màn hình)
- Thanh icon thường xuất hiện phía trên góc phải của bubble tin nhắn
- Chụp lúc chuột **đang đứng yên** trên tin nhắn (thanh hiển thị rõ nhất)

---

### 📸 Ảnh 2 — Sau khi bấm, dòng xác nhận hiện dưới tin nhắn

**Tên file:** `16-tiep-nhan-thong-tin-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm vào icon 📥, hệ thống đã xử lý xong
- Thanh công cụ đã biến mất (chuột đã rời tin nhắn)
- Dòng xác nhận màu xanh lá xuất hiện **ngay phía dưới** tin nhắn vừa tiếp nhận

**Vùng cần chụp — Crop quanh tin nhắn và dòng xác nhận:**
```
┌─────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════╗  │
│  ║  Tên nhân viên                       10:15 SA     ║  │
│  ║  "Hàng đã về kho, anh/chị kiểm tra nhé"           ║  │
│  ╚═══════════════════════════════════════════════════╝  │
│     📎 Đã tiếp nhận bởi Nguyễn Văn A                   │ ← dòng xác nhận
└─────────────────────────────────────────────────────────┘
```

**Dòng xác nhận trông như thế nào:**
- Icon: 📎 (Paperclip — hình cái kẹp giấy)
- Text: `"Đã tiếp nhận bởi [Tên Leader]"` — màu xanh lá (#059669)
- Cỡ chữ: nhỏ (11px), nằm ngay dưới bubble tin nhắn

**Highlight:** Viền màu #10B981 quanh **dòng "📎 Đã tiếp nhận bởi..."**

**Ghi chú thêm:**
- Dòng này xuất hiện ngay lập tức sau khi bấm — không cần reload trang
- Tên hiển thị là tên thật của Leader đang đăng nhập
- Nếu tên hiện là "Bạn" thay vì tên thật — đó là hiển thị cho chính Leader đó, vẫn đúng, cứ chụp
- Đảm bảo tin nhắn gốc vẫn thấy rõ phía trên để người đọc hiểu ngữ cảnh

---

### 📸 Ảnh 3 — Mục "Thông tin đã tiếp nhận" trong tab Công Việc

**Tên file:** `16-tiep-nhan-thong-tin-buoc-03.webp`

**Trạng thái màn hình:**
- Bảng bên phải đang mở, đang ở tab **Công Việc**
- Mục **Thông tin đã tiếp nhận** hiển thị với badge số (ví dụ: `1` hoặc `2`)
- Có ít nhất **1 thẻ thông tin** đang chờ xử lý (thẻ có nút "Giao việc")

**Vùng cần chụp — Cột phải màn hình:**
```
┌───────────────────────────────────┐
│  [ Thông Tin ]  [ Công Việc ]    │ ← 2 tab ở đầu bảng phải
├───────────────────────────────────┤
│  📋 Thông tin đã tiếp nhận  [1]  │ ← tiêu đề section + badge
│  ┌─────────────────────────────┐  │
│  │ "Hàng đã về kho, anh/chị   │  │ ← thẻ thông tin
│  │  kiểm tra nhé"              │  │
│  │ Từ: Trần Thị B • 10:15 SA  │  │
│  │              [Giao việc]    │  │ ← nút hành động
│  └─────────────────────────────┘  │
└───────────────────────────────────┘
```

**Chi tiết thẻ thông tin (waiting card):**
- **Tiêu đề:** nội dung rút gọn của tin nhắn gốc
- **Dòng phụ:** `Từ: [Tên người gửi] • Tiếp nhận lúc: [giờ]`
- **Nút:** `Giao việc` (màu xanh lá, góc dưới phải thẻ)
- **Badge số** ở tiêu đề section: màu cam (amber), ví dụ: `1`

**Highlight:** Viền màu #10B981 quanh **badge số** ở tiêu đề "Thông tin đã tiếp nhận" VÀ **thẻ thông tin** bên dưới — highlight 2 phần tử vì chúng liên quan trực tiếp với nhau trong cùng một bước

**Ghi chú thêm:**
- Nếu bảng phải chưa mở: bấm nút toggle panel ở header của chat (biểu tượng ◀/▶) để mở
- Nếu tab **Công Việc** chưa active: bấm vào tab đó
- Cuộn xuống trong bảng phải nếu mục "Thông tin đã tiếp nhận" nằm dưới mục khác
- Đảm bảo thấy rõ nút **"Giao việc"** màu xanh trên thẻ

---

### 📸 Ảnh 4 — Sheet "Giao việc" vừa mở ra

**Tên file:** `16-tiep-nhan-thong-tin-buoc-04.webp`

**Trạng thái màn hình:**
- Đã bấm nút **"Giao việc"** trên thẻ thông tin
- Sheet (bảng trượt từ phải) đã mở ra, đè lên một phần màn hình
- Tiêu đề sheet: **"Giao việc"**
- Các trường đang hiển thị nhưng **chưa chọn gì** (hoặc đang ở trạng thái mặc định)

**Vùng cần chụp — Sheet bên phải:**
```
┌──────────────────────────────────────┐
│  ← Giao việc                        │ ← tiêu đề sheet
├──────────────────────────────────────┤
│  Nội dung đã xác nhận               │
│  ┌────────────────────────────────┐  │
│  │ "Hàng đã về kho, anh/chị      │  │ ← hộp read-only xám
│  │  kiểm tra nhé"                │  │
│  └────────────────────────────────┘  │
│                                      │
│  💼 Nhóm                            │
│  [ Chọn nhóm...               ▾ ]   │ ← dropdown chưa chọn
│                                      │
│  👥 Loại việc                        │
│  [ Chọn loại việc...          ▾ ]   │ ← dropdown mờ (disabled)
│                                      │
│  👤 Giao cho                         │
│  [ Chọn người nhận...         ▾ ]   │ ← dropdown mờ (disabled)
│                                      │
│  [   Hủy   ]  [ Giao việc →  ]      │ ← 2 nút
└──────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **toàn bộ khu vực 3 trường dropdown** (từ trường Nhóm đến trường Giao cho)

**Ghi chú thêm:**
- Sheet trượt từ phải sang — toàn bộ phần sheet phải nằm trong ảnh (không bị crop)
- **Hộp nội dung** phía trên (màu xám) hiển thị đúng nội dung tin nhắn gốc — đây là phần quan trọng cho người đọc thấy tính năng tự điền
- Nút **"Giao việc →"** ở cuối sheet đang bị mờ (disabled) vì chưa chọn đủ trường — chụp đúng trạng thái này
- Không cần chụp lúc dropdown đang mở

---

### 📸 Ảnh 5 — Đã chọn đủ các trường, bấm Giao việc

**Tên file:** `16-tiep-nhan-thong-tin-buoc-05.webp`

**Trạng thái màn hình:**
- Đã chọn đủ: **Nhóm** + **Loại việc** + **Giao cho**
- Ba dropdown đều đang hiển thị giá trị đã chọn (không còn placeholder)
- Nút **"Giao việc →"** đang **active** (màu xanh, có thể bấm)

**Vùng cần chụp — Sheet bên phải (trạng thái đã điền đủ):**
```
┌──────────────────────────────────────┐
│  ← Giao việc                        │
├──────────────────────────────────────┤
│  Nội dung đã xác nhận               │
│  ┌────────────────────────────────┐  │
│  │ "Hàng đã về kho, anh/chị      │  │
│  │  kiểm tra nhé"                │  │
│  └────────────────────────────────┘  │
│                                      │
│  💼 Nhóm                            │
│  [ Kho vận                    ▾ ]   │ ← đã chọn
│                                      │
│  👥 Loại việc                        │
│  [ Nhập hàng                  ▾ ]   │ ← đã chọn
│                                      │
│  👤 Giao cho                         │
│  [ Lê Văn C (Bạn)             ▾ ]   │ ← đã chọn
│                                      │
│  [   Hủy   ]  [ Giao việc →  ]      │ ← nút Giao việc active
└──────────────────────────────────────┘
```

**Highlight:** Viền màu #10B981 quanh **nút "Giao việc →"** ở cuối sheet

**Ghi chú thêm:**
- Chụp **trước khi bấm** nút Giao việc (nút đang active, chưa submit)
- Ba trường dropdown phải hiển thị **giá trị thật** — dùng dữ liệu test trung tính (tên nhóm, loại việc, tên nhân viên không có thông tin riêng tư)
- Nút "Giao việc →" khi active có màu xanh lá/brand rõ ràng — khác hẳn lúc disabled (màu mờ xám)

---

## Quy trình chụp theo thứ tự

```
Bước 0 → Đăng nhập bằng tài khoản LEADER (bắt buộc)
          Mở nhóm chat có tin nhắn của nhân viên
          ↓

Bước 1 → Di chuột lên 1 tin nhắn thường → thanh icon hiện ra
          → Chụp Ảnh 1 (buoc-01) ngay lúc thanh icon đang hiển thị
          ↓

Bước 2 → Bấm vào icon 📥 (Inbox) — icon cuối cùng trong thanh
          → Chờ hệ thống xử lý (icon quay vòng ~1 giây)
          → Rời chuột khỏi tin nhắn để thanh biến mất
          → Chụp Ảnh 2 (buoc-02) lúc dòng "📎 Đã tiếp nhận bởi..." hiện rõ
          ↓

Bước 3 → Bấm nút mở bảng phải (nếu chưa mở)
          → Bấm tab Công Việc
          → Cuộn để thấy mục "Thông tin đã tiếp nhận"
          → Chụp Ảnh 3 (buoc-03)
          ↓

Bước 4 → Bấm nút "Giao việc" trên thẻ thông tin
          → Sheet trượt ra từ phải
          → Chụp Ảnh 4 (buoc-04) lúc sheet mới mở, chưa chọn gì
          ↓

Bước 5 → Chọn Nhóm → chọn Loại việc → chọn Giao cho
          → Nút "Giao việc →" chuyển sang active
          → Chụp Ảnh 5 (buoc-05) trước khi bấm Submit
          ↓
          Done ✅
```

---

## Mẹo chụp ảnh quan trọng

### Ảnh 1: Giữ chuột đứng yên để chụp thanh icon
Thanh icon chỉ hiện khi chuột đang hover — nếu chuột rời đi, thanh biến mất. Dùng phần mềm chụp màn hình có **delay 3–5 giây** (như Snipping Tool chế độ delay, hoặc ShareX) để kịp đặt chuột trước khi chụp.

### Ảnh 2: Chuột KHÔNG còn trên tin nhắn
Sau khi bấm icon 📥, hãy **rời chuột ra** để thanh icon biến mất — lúc đó chỉ còn dòng "📎 Đã tiếp nhận bởi..." nằm dưới tin nhắn, hình ảnh sẽ sạch và rõ hơn.

### Ảnh 1 thay thế (nếu không chụp kịp thanh icon)
Nếu không dùng được delay chụp ảnh, có thể thay thế bằng cách: hover lên tin nhắn → chụp screenshot nhanh bằng **Windows: Win+Shift+S**, kéo vùng chọn quanh tin nhắn khi thanh icon đang hiển thị.

---

## Checklist trước khi nộp

```
□ Đúng 5 ảnh, đúng tên file
□ Chụp bằng tài khoản LEADER (không phải Staff)
□ Kích thước: 1280px chiều ngang
□ Format: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm highlight màu #10B981
   (ngoại lệ Ảnh 3: highlight 2 phần tử liên quan)
□ Ảnh 1: Thanh icon hover thấy rõ icon 📥 cuối hàng
□ Ảnh 2: Dòng "📎 Đã tiếp nhận bởi..." màu xanh lá thấy rõ
□ Ảnh 3: Mục "Thông tin đã tiếp nhận" + badge số + thẻ có nút "Giao việc"
□ Ảnh 4: Sheet 3 dropdown chưa chọn, nút "Giao việc →" đang mờ
□ Ảnh 5: Sheet 3 dropdown đã chọn, nút "Giao việc →" active
□ Không có tên/SĐT thật, không có nội dung tin nhắn nhạy cảm
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
                    ├── 16-tiep-nhan-thong-tin-buoc-01.webp  ← hover toolbar
                    ├── 16-tiep-nhan-thong-tin-buoc-02.webp  ← dòng xác nhận xanh
                    ├── 16-tiep-nhan-thong-tin-buoc-03.webp  ← mục Thông tin đã tiếp nhận
                    ├── 16-tiep-nhan-thong-tin-buoc-04.webp  ← sheet chưa chọn
                    └── 16-tiep-nhan-thong-tin-buoc-05.webp  ← sheet đã chọn đủ
```

---

## Ghi chú bổ sung

### Phân biệt tài khoản — Quan trọng nhất của bài này
Đây là bài dành cho **Leader/Admin**. Nếu chụp bằng tài khoản Staff, icon 📥 sẽ không xuất hiện trong thanh hover và toàn bộ flow không thực hiện được. **Bắt buộc dùng tài khoản Leader.**

### Nếu tin nhắn đã bị tiếp nhận trước đó
- Icon 📥 sẽ biến mất khỏi thanh hover của tin nhắn đó
- Tạo thêm 1 tin nhắn test mới trong nhóm chat rồi tiếp nhận tin nhắn đó

### Nếu UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên file, chỉ thay nội dung ảnh.

# Hướng Dẫn Chụp Hình — Bài Quick Start cho Trưởng Nhóm (Leader)

**Dành cho:** BA, QA (người chụp hình)  
**Bài tương ứng:** `guide-site/src/content/quick-start/02-quick-start-leader.mdx`  
**Số ảnh cần chụp:** 8 ảnh  
**Cách lưu:** `guide-site/src/content/quick-start/images/`  
**Cập nhật lần cuối:** 2026-04-14

---

## Hiểu đúng luồng trước khi chụp

Luồng bắt đầu nhanh cho Trưởng Nhóm:

```
Trang đăng nhập
  → Nhập email (Leader/Admin)
  → Nhập mật khẩu
  → Bấm Đăng nhập
  → Hệ thống xác nhận quyền Leader
  → Tự động hiển thị giao diện quản lý trưởng nhóm
  → Tìm tin nhắn cần tạo công việc trong khung chat
  → Di chuột vào tin nhắn → Hàng nút hành động xuất hiện
  → Bấm nút "Giao việc" (biểu tượng bảng kẹp +)
  → Tấm thông tin trượt ra
  → Chọn người giao cho và mẫu checklist
  → Bấm "Giao việc" → Công việc được tạo
```

---

## Chuẩn bị trước khi chụp

### Tài khoản
- Dùng tài khoản **Leader hoặc Admin** (phải có quyền tạo công việc)
- Tài khoản phải **đã được kích hoạt** bởi Admin
- Phải có ít nhất **2–3 nhân viên** trong nhóm để giao việc

### Dữ liệu cần chuẩn bị

| Điều kiện | Lý do |
|-----------|-------|
| Tài khoản Leader/Admin đã kích hoạt | Đăng nhập thành công + có quyền tạo công việc |
| Mật khẩu chính xác | Không bị lỗi xác thực |
| Ít nhất 1 tin nhắn trong nhóm chat | Dùng để tạo công việc (ảnh 6) |
| Ít nhất 2–3 nhân viên trong nhóm | Hiển thị danh sách khi giao việc (ảnh 8) |
| Ít nhất 1 mẫu danh sách kiểm tra được cấu hình (Optional) | Cho phần xem trước checklist |
| Kết nối internet ổn định | Tải trang và dữ liệu nhanh |

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome (phiên bản mới nhất) |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** (desktop) |
| State | Mới logout hoặc session cũ đã hết |
| Thanh địa chỉ | Ẩn hoặc crop ra ngoài ảnh |

### Màu và dạng đánh dấu
- **Màu:** #10B981 (xanh lá emerald)
- **Dạng:** Viền bo góc 2–3px hoặc mũi tên chỉ
- **Số lượng:** Đúng **1 điểm** mỗi ảnh

---

## Chi tiết từng ảnh

### 📸 Ảnh 1 — Trang đăng nhập

**Tên tệp:** `02-quick-start-leader-buoc-01.webp`

**Mục tiêu:** Toàn bộ trang đăng nhập với logo và form.

**Trạng thái màn hình:**
- URL không hiển thị (crop ra khỏi ảnh)
- Logo Quốc Nam ở trung tâm phía trên
- Form trong hộp trắng
- Tiêu đề "Portal Internal Chat"
- Hai ô input (email, password) trống
- Nút "Đăng nhập"

**Đánh dấu:** Viền quanh **toàn bộ hộp form** hoặc quanh **nút Đăng nhập**

---

### 📸 Ảnh 2 — Nhập email

**Tên tệp:** `02-quick-start-leader-buoc-02.webp`

**Mục tiêu:** Ô email đang focus, có nội dung email Leader.

**Trạng thái màn hình:**
- Ô email (`data-testid="identifier-input"`) **focus** (có border sáng hoặc glow)
- Nội dung: `leader@quocnam.com` hoặc tương tự
- Ô password vẫn trống

**Đánh dấu:** Viền quanh **ô email**

---

### 📸 Ảnh 3 — Nhập mật khẩu

**Tên tệp:** `02-quick-start-leader-buoc-03.webp`

**Mục tiêu:** Ô password đang focus, hiển thị dấu chấm hoặc text.

**Trạng thái màn hình:**
- Ô email đã có nội dung (unfocus)
- Ô password **focus** (border sáng, glow)
- Nội dung: ẩn bằng dấu chấm (●●●●●) HOẶC hiển thị (password123)
- Biểu tượng mắt ở bên phải ô password

**Đánh dấu:** Viền quanh **ô password**

---

### 📸 Ảnh 4 — Bấm nút Đăng nhập

**Tên tệp:** `02-quick-start-leader-buoc-04.webp`

**Mục tiêu:** Nút Đăng nhập ở hover/loading state.

**Trạng thái màn hình:**
- Cả email và password đã có nội dung
- Nút "Đăng nhập" ở **hover** (sáng/đậm hơn) hoặc **loading** (hiện icon xoay)
- Form vẫn nhìn thấy đầy đủ

**Đánh dấu:** Viền hoặc vòng tròn quanh **nút Đăng nhập**

---

### 📸 Ảnh 5 — Giao diện chính của trưởng nhóm

**Tên tệp:** `02-quick-start-leader-buoc-05.webp`

**Mục tiêu:** Sau khi đăng nhập, giao diện quản lý trưởng nhóm hiển thị với khung chat chứa tin nhắn.

**Trạng thái màn hình:**
- Trang đã load xong (không có vòng xoay)
- **Khung chat** hiển thị với các tin nhắn từ nhóm
- Bên trái có **sidebar** với danh sách nhóm/người
- Bên phải có **detail panel** với tab thông tin hoặc công việc
- Giao diện rõ ràng là của leader (khác Staff view)

**Bố cục:**
```
┌──────────────┬──────────────┬──────────────┐
│   SIDEBAR    │  KHUNG CHAT  │ DETAIL PANEL │
│              │              │              │
│ • Nhóm 1     │ [Tin nhắn]   │ Thông tin    │
│ • Nhóm 2     │ "Hãy kiểm..  │ Công Việc    │
│              │              │              │
│ • DM User    │ [Avatar]     │ ──────────── │
│              │ Tin nhắn...   │ Chi tiết     │
└──────────────┴──────────────┴──────────────┘
```

**Đánh dấu:** Viền quanh **khung chat** ở giữa

**Điểm cần thấy rõ:**
1. **Khung chat** rõ có tin nhắn (nơi sẽ tạo công việc)
2. Giao diện leader view (khác Staff view)

---

### 📸 Ảnh 6 — Di chuột vào tin nhắn, nút Giao việc xuất hiện

**Tên tệp:** `02-quick-start-leader-buoc-06.webp`

**Mục tiêu:** Khi di chuột vào một tin nhắn trong chat, hàng nút hành động xuất hiện. Nút "Giao việc" (biểu tượng bảng kẹp +) nổi bật.

**Trạng thái màn hình:**
- Con trỏ chuột **đang hover** trên một tin nhắn văn bản
- **Hàng nút hành động** nhỏ xuất hiện phía trên/góc bong bóp tin nhắn
- Có nút: "Trả lời" (↩), "Đánh dấu" (⭐), **"Giao việc"** (biểu tượng bảng kẹp +)

**Bố cục:**
```
[Avatar] Người gửi             10:30 AM
┌─────────────────────────────────────┐
│ "Hãy kiểm tra file báo cáo của..."  │  ← tin nhắn
└─────────────────────────────────────┘

Hàng nút hành động (hover):
[↩ Trả lời] [⭐ Đánh dấu] [📋+ Giao việc]
                           ↑ Highlight
```

**Đánh dấu:** Viền quanh **nút Giao việc** (biểu tượng bảng kẹp +)

**Điểm cần thấy rõ:**
1. **Hàng nút hành động** xuất hiện khi hover
2. **Nút Giao việc** (📋 +) rõ ràng
3. Tin nhắn là **văn bản bình thường** (không có biểu tượng công việc)

**Lưu ý kỹ thuật chụp:**
- Phải giữ con trỏ trên bong bóp tin nhắn khi chụp
- Dùng **Snipping Tool** (Windows) với "Delay 3 giây" hoặc công cụ chụp có độ trễ
- Chụp tin nhắn **của người khác** (không phải của chính mình)

---

### 📸 Ảnh 7 — Tấm thông tin Giao việc mở ra

**Tên tệp:** `02-quick-start-leader-buoc-07.webp`

**Mục tiêu:** Sau khi bấm nút "Giao việc", tấm thông tin `AssignTaskSheet` trượt ra từ bên phải.

**Trạng thái màn hình:**
- **Tấm thông tin** mở từ bên phải (width ~420px, title: "Giao công việc")
- Ô **"Tên công việc"** đã **tự động điền** từ nội dung tin nhắn
- Ô **"Giao cho"** sẵn sàng chọn (dropdown, rỗng hoặc có default)
- Ô **"Mẫu danh sách kiểm tra"** (dropdown, tuỳ chọn)
- Nút **"Hủy"** và **"Giao việc"** ở cuối

**Bố cục:**
```
┌──────────────────────────────────┐
│ Giao công việc    [✕]            │
│ Tạo CV mới cho thành viên       │
├──────────────────────────────────┤
│                                  │
│ Tên công việc *                  │
│ ┌──────────────────────────────┐ │
│ │ Hãy kiểm tra file báo cáo.. │ │  ← TỰ ĐIỀN
│ └──────────────────────────────┘ │
│                                  │
│ Giao cho *                       │
│ ┌──────────────────────────────┐ │
│ │ [Chọn nhân viên        ▼]    │ │
│ └──────────────────────────────┘ │
│                                  │
│ Mẫu danh sách kiểm tra           │
│ ┌──────────────────────────────┐ │
│ │ [Chọn mẫu              ▼]    │ │
│ └──────────────────────────────┘ │
├──────────────────────────────────┤
│ [Hủy]          [Giao việc]       │
└──────────────────────────────────┘
```

**Đánh dấu:** Viền quanh **ô "Tên công việc"** để chỉ tự-điền

**Điểm cần thấy rõ:**
1. Tiêu đề tấm: **"Giao công việc"**
2. Ô **"Tên công việc"** đã có **nội dung** (từ tin nhắn)
3. Nhãn **\*** (đỏ) ghi bắt buộc
4. Nút "Hủy" + "Giao việc" ở cuối

---

### 📸 Ảnh 8 — Ô "Giao cho" mở, chọn nhân viên

**Tên tệp:** `02-quick-start-leader-buoc-08.webp`

**Mục tiêu:** Bấm vào ô "Giao cho", dropdown mở ra hiển thị danh sách nhân viên.

**Trạng thái màn hình:**
- Ô **"Giao cho"** đang **focus** (border sáng, caret dropdown ▼)
- **SelectContent dropdown** mở dưới ô
- Hiển thị 2–4 tên nhân viên
- Ít nhất **1 tên** có ghi chú **(Tôi)** — chính Leader

**Bố cục:**
```
│ Giao cho *                       │
│ ┌──────────────────────────────┐ │
│ │ [Nguyễn Văn A        ▲]      │ │  ← focus
│ └──────────────────────────────┘ │
│ ┌──────────────────────────────┐ │
│ │ Nguyễn Văn A                 │ │
│ │ Trần Thị B                   │ │
│ │ Lê Văn C (Tôi)       ✓       │ │  ← có (Tôi)
│ │ Phạm Văn D                   │ │
│ └──────────────────────────────┘ │
```

**Đánh dấu:** Viền quanh **SelectContent dropdown**

**Điểm cần thấy rõ:**
1. Dropdown **mở** đầy đủ
2. Có **≥2 tên** nhân viên
3. Có ghi chú **(Tôi)** bên cạnh 1 tên

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  → Tài khoản Leader/Admin
  → 2–3 nhân viên trong nhóm
  → 1+ tin nhắn trong nhóm chat
  ↓
Ảnh 1  →  Trang đăng nhập
Ảnh 2  →  Nhập email
Ảnh 3  →  Nhập mật khẩu  
Ảnh 4  →  Bấm Đăng nhập
           ↓ (chờ tải)
Ảnh 5  →  Giao diện leader + khung chat
Ảnh 6  →  Di chuột → nút Giao việc xuất hiện
Ảnh 7  →  Bấm Giao việc → tấm mở + tên tự-điền
Ảnh 8  →  Bấm "Giao cho" → dropdown mở
           ↓
Hoàn thành ✅
```

---

## Bảng kiểm tra trước khi nộp

```
□ Đủ 8 ảnh, đúng tên tệp (buoc-01 đến 08)
□ Chiều rộng: 1280px
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu #10B981

□ Ảnh 1: Trang đăng nhập đầy đủ
□ Ảnh 2: Ô Email focus + nội dung
□ Ảnh 3: Ô Password focus + nội dung
□ Ảnh 4: Nút Đăng nhập hover/loading
□ Ảnh 5: Giao diện leader + khung chat rõ
□ Ảnh 6: Di chuột tin nhắn, nút Giao việc rõ
□ Ảnh 7: Tấm Giao công việc mở, tên tự-điền
□ Ảnh 8: Dropdown "Giao cho" mở, có "(Tôi)"

□ Không có info nhạy cảm
□ Email/tên dùng format an toàn
□ Lưu đúng thư mục: quick-start/images/
```

---

## Vị trí lưu ảnh

```
guide-site/src/content/quick-start/images/
├── 02-quick-start-leader-buoc-01.webp
├── 02-quick-start-leader-buoc-02.webp
├── 02-quick-start-leader-buoc-03.webp
├── 02-quick-start-leader-buoc-04.webp
├── 02-quick-start-leader-buoc-05.webp
├── 02-quick-start-leader-buoc-06.webp
├── 02-quick-start-leader-buoc-07.webp
└── 02-quick-start-leader-buoc-08.webp
```

---

## Ghi chú bổ sung

**Cách tạo công việc từ tin nhắn (quan trọng):**
- Không phải từ nút "Tạo task" trong menu
- Mà từ **hàng nút hành động xuất hiện khi hover tin nhắn**
- Tên công việc **tự động điền** từ nội dung tin nhắn
- Điều này giúp liên kết công việc với cuộc thảo luận gốc

**Nếu UI thay đổi:**
Xem `docs/CONTENT_GUIDE.md` Mục 10. Giữ tên tệp ảnh nguyên.

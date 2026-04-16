# Hướng Dẫn Chụp Hình — Bài Quick Start cho Staff

**Dành cho:** BA, QA (người chụp hình)  
**Bài tương ứng:** `guide-site/src/content/quick-start/01-quick-start-staff.mdx`  
**Số ảnh cần chụp:** 6 ảnh  
**Cách lưu:** `guide-site/src/content/quick-start/images/`  
**Cập nhật lần cuối:** 2026-04-14

---

## Hiểu đúng luồng trước khi chụp

Luồng bắt đầu nhanh cho Staff:

```
Trình duyệt → Trang đăng nhập
  → Nhập email
  → Nhập mật khẩu
  → Bấm Đăng nhập
  → Chuyển hướng → Giao diện chính (PortalWireframes)
  → Thấy 3 vùng chính: Sidebar (trái), Chat (giữa), Detail Panel (phải)
```

---

## Chuẩn bị trước khi chụp

### Tài khoản
- Dùng tài khoản **Staff** (nhân viên)
- Tài khoản phải **đã được kích hoạt** bởi Admin
- Có ít nhất **1 công việc được giao** để hiển thị ở Bước 6

### Dữ liệu cần chuẩn bị

| Điều kiện | Lý do |
|-----------|-------|
| Email/tài khoản đã kích hoạt | Đăng nhập thành công |
| Mật khẩu chính xác | Không bị lỗi xác thực |
| Ít nhất 1 công việc "Đang xử lý" gán cho tài khoản này | Hiển thị danh sách công việc ở bước 6 |
| Kết nối internet ổn định | Tải trang và dữ liệu nhanh |

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome (phiên bản mới nhất) |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** (desktop) hoặc **390px** (mobile) |
| State | Mới mở ứng dụng hoặc đã logout |
| Thanh địa chỉ | Ẩn hoặc crop ra ngoài ảnh |

### Màu và dạng đánh dấu
- **Màu:** #10B981 (xanh lá emerald)
- **Dạng:** Viền bo góc 2–3px hoặc mũi tên chỉ
- **Số lượng:** Đúng **1 điểm** mỗi ảnh

---

## Chi tiết từng ảnh

### 📸 Ảnh 1 — Trang đăng nhập

**Tên tệp:** `01-quick-start-staff-buoc-01.webp`

**Mục tiêu:** Hiển thị giao diện đăng nhập mới với logo Quốc Nam ở giữa.

**Trạng thái màn hình:**
- URL không hiển thị (hoặc crop ra khỏi ảnh)
- Logo Quốc Nam nằm ở giữa trên cùng, kích thước ~120px
- Form đăng nhập nằm trong hộp trắng, có shadow nhẹ
- Tiêu đề **"Portal Internal Chat"** hiển thị bên dưới logo
- Hai ô input: email và mật khẩu
- Nút **"Đăng nhập"** ở dưới cùng

**Bố cục trang đăng nhập:**
```
┌────────────────────────────────────────┐
│                                        │
│                                        │
│              [Logo QN]                 │
│         (khoảng 120×120px)             │
│                                        │
│        ┌──────────────────────┐        │
│        │ Portal Internal Chat │        │
│        ├──────────────────────┤        │
│        │                      │        │
│        │ Email/ID             │        │
│        │ ┌──────────────────┐ │        │
│        │ │  [nhập email]    │ │        │
│        │ └──────────────────┘ │        │
│        │                      │        │
│        │ Password             │        │
│        │ ┌──────────────────┐ │        │
│        │ │  [nhập mật khẩu] │ │        │
│        │ └──────────────────┘ │        │
│        │                      │        │
│        │    [ Đăng nhập ]     │        │
│        └──────────────────────┘        │
│                                        │
│    © 2026 Quốc Nam. All rights        │
│                                        │
└────────────────────────────────────────┘
```

**Đánh dấu:** Viền quanh **toàn bộ hộp form** (khung chính chứa input + nút) hoặc vòng tròn quanh **nút Đăng nhập**

**Điểm cần thấy rõ:**
1. Logo Quốc Nam nổi bật
2. Tiêu đề "Portal Internal Chat" rõ ràng
3. Hai ô input có placeholder hoặc label
4. Nút "Đăng nhập" sáng/tối rõ ràng

---

### 📸 Ảnh 2 — Nhập email

**Tên tệp:** `01-quick-start-staff-buoc-02.webp`

**Mục tiêu:** Ô email đang focus, có con trỏ bên trong hoặc nội dung đã nhập.

**Trạng thái màn hình:**
- Ô email (`data-testid="identifier-input"` hoặc tương tự) đang **focus** (border sáng hoặc highlight)
- Có nội dung đã nhập: `staff@quocnam.com` hoặc tương tự
- Ô password vẫn trống
- Nhìn thấy con trỏ chuột hoặc keyboard cursor trong ô email

**Bố cục:**
```
Form đăng nhập — focus vào ô email:

│ Email/ID             │
│ ┌──────────────────┐ │  ← đang focus (border xanh emerald)
│ │ staff@quocnam.│  │ │  ← nội dung đã nhập
│ └──────────────────┘ │
│                      │
│ Password             │
│ ┌──────────────────┐ │  ← chưa touch (border mặc định)
│ │                  │ │
│ └──────────────────┘ │
```

**Đánh dấu:** Viền 2–3px quanh **ô email** nhập

**Điểm cần thấy rõ:**
1. Ô email có **focus state** (border rõ, có thể có shadow xanh)
2. Có nội dung email tự nhiên (không quá dài hoặc quá ngắn)
3. Ô password vẫn ở trạng thái unfocus

---

### 📸 Ảnh 3 — Nhập mật khẩu

**Tên tệp:** `01-quick-start-staff-buoc-03.webp`

**Mục tiêu:** Ô mật khẩu đang focus, ẩn hoặc hiện nội dung (tùy theo biểu tượng mắt).

**Trạng thái màn hình:**
- Ô email đã có nội dung (không focus)
- Ô password (`data-testid="password-input"` hoặc tương tự) **đang focus**
- Có nội dung mật khẩu — có thể hiển thị dạng **dấu chấm** (●) hoặc **text** nếu người dùng bấm icon mắt
- Biểu tượng **mắt** hiển thị ở phía bên phải ô password (để toggle hiện/ẩn mật khẩu)

**Bố cục:**
```
│ Email/ID             │
│ ┌──────────────────┐ │
│ │ staff@quocnam... │ │  ← đã nhập
│ └──────────────────┘ │
│                      │
│ Password             │
│ ┌──────────────────┬─┐ │
│ │ ●●●●●●●●●      │👁│ │  ← focus, mật khẩu ẩn, có icon mắt
│ └──────────────────┴─┘ │
│      Hoặc:             │
│ ┌──────────────────┬─┐ │
│ │ password123      │👁│ │  ← focus, mật khẩu hiển thị
│ └──────────────────┴─┘ │
```

**Đánh dấu:** Viền 2–3px quanh **ô password**

**Điểm cần thấy rõ:**
1. Ô password nhập **focus state**
2. Có mật khẩu được ẩn bằng dấu chấm HOẶC hiển thị rõ (tùy toggle)
3. Biểu tượng **mắt** hiển thị ở bên phải ô

---

### 📸 Ảnh 4 — Bấm nút Đăng nhập

**Tên tệp:** `01-quick-start-staff-buoc-04.webp`

**Mục tiêu:** Nút Đăng nhập đang bị highlight hoặc hover, hoặc đang ở trạng thái loading (hiện vòng xoay).

**Trạng thái màn hình:**
- Cả ô email và password đã có nội dung
- Nút **"Đăng nhập"** đang ở trạng thái **hover** (đậm hơn, có shadow) HOẶC **loading** (hiện `Loader2` spinning, nút bị disable)
- Form vẫn nhìn thấy được đầy đủ

**Bố cục:**
```
│ Email/ID             │
│ └──────────────────┘ │
│ │ staff@quocnam... │ │
│                      │
│ Password             │
│ │ ●●●●●●●●●       │ │
│ └──────────────────┘ │
│                      │
│  [  ↻ Đang xử lý  ]  │  ← nút đang loading (hoặc hover)
```

**Đánh dấu:** Viền hoặc vòng tròn quanh **nút Đăng nhập**

**Điểm cần thấy rõ:**
1. Nút ở trạng thái **hover** (màu sáng hơn) HOẶC **loading** (hiện icon xoay)
2. Form đầy đủ thông tin
3. Nút có thể bị **disable** (màu mờ) nếu đang xử lý

---

### 📸 Ảnh 5 — Giao diện chính sau đăng nhập

**Tên tệp:** `01-quick-start-staff-buoc-05.webp`

**Mục tiêu:** Toàn landscape giao diện chính với 3 vùng: Sidebar (trái), Chat (giữa), Detail Panel (phải).

**Trạng thái màn hình:**
- Trang đã load xong (không có vòng xoay)
- Hiển thị **3 vùng chính**:
  - **Trái (Sidebar):** Danh sách nhóm/người, có tab "Tin nhắn" hoặc "Liên hệ"
  - **Giữa (Chat):** Khu vực chat, có logo/empty state hoặc tin nhắn cuối cùng
  - **Phải (Detail Panel):** Chi tiết công việc/thông tin, có tabs như "Thông tin", "Công việc"
- **Nút chuyển chế độ** ở góc dưới bên phải (biểu tượng người hoặc background)

**Bố cục tổng quan:**
```
┌─────────────┬──────────────────┬────────────────┐
│   SIDEBAR   │  CHAT AREA       │  DETAIL PANEL  │
│             │                  │                │
│ [Tin nhắn]  │ [Danh sách nhóm] │ [Thông tin] [CV]│
│ [Liên hệ]   │                  │                │
│             │ Khung chat:      │ Chi tiết công  │
│ • Nhóm 1    │ [Avatar] Người   │ việc được giao │
│ • Nhóm 2    │ Nội dung tin...  │                │
│ • DM User   │                  │ ○ Mục 1        │
│             │ [Avatar] Người   │ ○ Mục 2        │
│             │ Nội dung tin...  │ ... (checklist)│
│             │                  │                │
└─────────────┴──────────────────┴────────────────┘
            ╭─────────────╮
            │ chế độ view │ ← góc phải dưới
            ╰─────────────╯
```

**Đánh dấu:** Viền quanh **3 vùng chính** hoặc chỉ vùng **chat giữa** để làm nổi bật

**Điểm cần thấy rõ:**
1. **Sidebar trái:** Có danh sách nhóm/người liên hệ
2. **Chat giữa:** Có tin nhắn hoặc trạng thái empty
3. **Detail panel phải:** Có tabs, hiển thị chi tiết
4. **Nút chuyển chế độ** ở góc dưới bên phải

**Lưu ý kỹ thuật chụp:**
- Chụp **full width (1280px)** để thấy cả 3 vùng trong 1 ảnh
- Không crop bất kỳ vùng nào

---

### 📸 Ảnh 6 — Danh sách công việc "Đang xử lý"

**Tên tệp:** `01-quick-start-staff-buoc-06.webp`

**Mục tiêu:** Chi tiết panel bên phải hiển thị danh sách công việc "Đang xử lý" với ít nhất 1 công việc.

**Trạng thái màn hình:**
- Tab **"Công Việc"** đang active ở detail panel (bên phải)
- Hiển thị nhóm trạng thái **"Đang xử lý"** (hoặc "In Progress")
- Trong nhóm này có ít nhất **1 công việc** được hiển thị dưới dạng thẻ (card)
- Mỗi thẻ công việc hiển thị:
  - Tiêu đề công việc
  - Tên người thực hiện (hoặc ghi "Tôi")
  - Thể loại công việc (nếu có)

**Bố cục detail panel — tab Công Việc:**
```
┌─────────────────────────────────────┐
│ [Thông tin]  [Công Việc]            │  ← tabs
│ ───────────────────────────────────  │
│                                     │
│ ● Đang xử lý (2)              ▲     │  ← nhóm trạng thái
│ ┌─────────────────────────────────┐ │
│ │ 📋 Kiểm tra hàng nhập kho...   │ │  ← công việc 1
│ │    Nhân viên • Nhập kho        │ │
│ │ ───────────────────────────────│ │
│ │ 📋 Cập nhật báo cáo hôm nay    │ │  ← công việc 2
│ │    Tôi • Kinh doanh            │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ● Chờ duyệt (0)                ▼   │
│ ● Hoàn thành (5)               ▼   │
└─────────────────────────────────────┘
```

**Đánh dấu:** Viền quanh **khu vực "Đang xử lý"** hoặc chỉ **1 thẻ công việc** trong nhóm này

**Điểm cần thấy rõ:**
1. Tab **"Công Việc"** active (background sáng hoặc underline)
2. Nhóm **"Đang xử lý"** với số lượng công việc hiển thị (ví dụ: (2))
3. Ít nhất **1 thẻ công việc** hoàn chỉnh với tiêu đề, người thực hiện, thể loại
4. Biểu tượng công việc (📋 hoặc task icon) rõ ràng

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  → Chấp nhận tài khoản Staff đã kích hoạt
  → Đảm bảo có 1–2 công việc "Đang xử lý" gán cho tài khoản này
  → Mở trình duyệt → vào trang đăng nhập
  ↓
Ảnh 1  →  Trang đăng nhập mở sẵn (chưa nhập gì)
           → CHỤP
           (đánh dấu form hoặc nút)
           ↓
Ảnh 2  →  Bấm vào ô Email, nhập tài khoản Staff
           → CHỤP
           ↓
Ảnh 3  →  Bấm vào ô Password, nhập mật khẩu
           → Có thể hiển thị dấu chấm hoặc text
           → CHỤP
           ↓
Ảnh 4  →  Bấm nút "Đăng nhập"
           → Chờ 1–2 giây cho hệ thống xử lý
           → CHỤP khi nút hiện loading icon hoặc hover state
           ↓
           Trang chuyển hướng, tải giao diện chính...
           ↓
Ảnh 5  →  Giao diện chính tải xong (3 vùng sidebar + chat + detail)
           → CHỤP toàn màn hình 1280px
           (đánh dấu 3 vùng hoặc vùng chat giữa)
           ↓
Ảnh 6  →  Nhấp vào tab "Công Việc" ở detail panel bên phải
           Danh sách công việc "Đang xử lý" hiển thị
           → CHỤP riêng detail panel hoặc full screen (tùy chọn)
           (đánh dấu nhóm "Đang xử lý" hoặc 1 thẻ công việc)
           ↓
Hoàn thành ✅
```

---

## Bảng kiểm tra trước khi nộp

```
□ Đủ 6 ảnh, đúng tên tệp (01-quick-start-staff-buoc-01 đến 06)
□ Chiều rộng: 1280px (hoặc 390px nếu mobile)
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu màu #10B981

□ Ảnh 1: Trang đăng nhập hiển thị toàn bộ form
□ Ảnh 2: Ô Email focus + được nhập nội dung
□ Ảnh 3: Ô Password focus + được nhập nội dung (ẩn bằng dấu chấm)
□ Ảnh 4: Nút Đăng nhập ở hover hoặc loading state
□ Ảnh 5: Giao diện chính với 3 vùng (sidebar + chat + detail panel)
□ Ảnh 6: Tab Công Việc active, nhóm "Đang xử lý" hiển thị ≥ 1 công việc

□ Không có thông tin nhạy cảm (email thực, mật khẩu, tên riêng nhân viên)
□ Email dùng có format an toàn (ví dụ: staff@quocnam.com)
□ Lưu đúng thư mục: guide-site/src/content/quick-start/images/
```

---

## Vị trí lưu ảnh

```
Quoc-Nam-Guide/
└── guide-site/
    └── src/
        └── content/
            └── quick-start/
                └── images/
                    ├── 01-quick-start-staff-buoc-01.webp  ← trang đăng nhập
                    ├── 01-quick-start-staff-buoc-02.webp  ← nhập email
                    ├── 01-quick-start-staff-buoc-03.webp  ← nhập mật khẩu
                    ├── 01-quick-start-staff-buoc-04.webp  ← bấm đăng nhập
                    ├── 01-quick-start-staff-buoc-05.webp  ← giao diện chính
                    └── 01-quick-start-staff-buoc-06.webp  ← danh sách công việc
```

---

## Câu hỏi thường gặp khi chụp

**H: Không có công việc "Đang xử lý" để chụp ảnh 6?**
→ Hỏi Admin tạo 1–2 công việc test gán cho tài khoản Staff này. Hoặc dùng công việc từ hôm trước (nên đổi trạng thái về "Đang xử lý" trước khi chụp).

**H: Giao diện không tải xong, vẫn hiện vòng xoay loading?**
→ Chờ thêm 2–3 giây. Nếu quá lâu, kiểm tra kết nối mạng hoặc reload trang (F5).

**H: Nút chuyển chế độ (ViewModeSwitcher) không hiện ở ảnh 5?**
→ Nút này **chỉ hiện được nếu tài khoản có quyền Leader/Admin**. Nếu dùng tài khoản Staff thuần, sẽ không thấy. Điều này là **bình thường** — bài hướng dẫn Staff sẽ không nhìn thấy nút này.

**H: Không thể nhập email vì bị lỗi "Invalid email"?**
→ Kiểm tra input validation — có thể form yêu cầu format cụ thể. Dùng email fake an toàn nhưng hợp lệ, ví dụ: `staff@quocnam.local` hoặc `teststaff@company.com`.

---

## Ghi chú bổ sung

**Nếu UI thay đổi sau khi chụp:**
Xem `docs/CONTENT_GUIDE.md` — Mục 10: *"Update khi UI thay đổi"*. Giữ nguyên tên tệp ảnh, chỉ replace ảnh cũ bằng ảnh mới.

**Màu highlight an toàn:**
Nếu công cụ highlight không có đúng #10B981, dùng màu xanh lá gần nhất: `#34D399` (emerald-400) hoặc `#059669` (emerald-700).

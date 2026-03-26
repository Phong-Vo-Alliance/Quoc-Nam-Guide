# Hướng Dẫn Chụp Hình — Bài 31: Thanh thông báo công việc

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/31-notification-banner.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Hiểu đúng tính năng trước khi chụp

**Thanh thông báo công việc** (`TaskBanner`) là một dải màu vàng nằm ngay phía dưới tiêu đề nhóm chat — **không phải** thông báo đẩy hay hộp bật lên (popup). Nó chỉ xuất hiện khi:

1. Người dùng đang trong một **nhóm chat** (không phải nhắn tin riêng)
2. Nhóm đó có **ít nhất 1 công việc** ở trạng thái `todo` (Chưa xử lý) hoặc `doing` (Đang xử lý)
3. Dữ liệu đã tải xong từ máy chủ

Thanh có **2 trạng thái:**
- **Thu gọn** (`isExpanded = false`): chỉ hiện 1 dòng — chuông 🔔, tên loại việc mới nhất, và số tổng trong ô tròn
- **Mở rộng** (`isExpanded = true`): bảng chi tiết trượt xuống bên dưới, liệt kê từng loại việc với số đang làm / chưa xử lý và nút **Xem chi tiết**

---

## Chuẩn bị trước khi chụp

### Tài khoản và dữ liệu

**Dùng tài khoản Leader** (khuyến nghị) — Leader thường có nhiều loại việc được giao hơn Staff, giúp thanh thông báo hiển thị đầy đủ và phong phú hơn.

**Dữ liệu cần chuẩn bị sẵn:**

| Điều kiện | Chi tiết |
|-----------|----------|
| Nhóm chat | Chọn 1 nhóm chat có **ít nhất 2 loại việc** đang hoạt động |
| Công việc ở trạng thái `todo` | Ít nhất **2 công việc** ở trạng thái Chưa xử lý |
| Công việc ở trạng thái `doing` | Ít nhất **1 công việc** ở trạng thái Đang xử lý |
| Tên công việc | Có nghĩa và đủ dài để thấy bị cắt — ví dụ: _"Kiểm tra lại toàn bộ phiếu nhập kho tuần này"_ |

> **Lưu ý quan trọng:** Nếu tất cả công việc của nhóm đang ở trạng thái `finished` (Hoàn thành) hoặc `need_to_verified` (Chờ duyệt), thanh thông báo **sẽ không hiện**. Cần đảm bảo có công việc `todo` hoặc `doing`.

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |
| Thanh địa chỉ | Ẩn hoặc crop ra khỏi ảnh |
| Cột bên phải | **Đang mở** (hiển thị tab Thông Tin hoặc Công Việc) — để Ảnh 3 thấy rõ hiệu ứng chuyển tab |

### Màu và dạng đánh dấu ảnh

- Màu viền: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc 2–3px, hoặc mũi tên chỉ vào phần tử nhỏ
- **Đúng 1 điểm đánh dấu** mỗi ảnh — không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Thanh thông báo thu gọn đang hiển thị phía dưới tiêu đề nhóm

**Tên tệp:** `31-notification-banner-buoc-01.webp`

**Mục tiêu:** Cho thấy thanh thông báo ở trạng thái mặc định — thu gọn, nằm ngay dưới tiêu đề nhóm chat.

**Trạng thái màn hình:**
- Đang ở trong một nhóm chat
- Thanh thông báo **đang hiển thị** (trạng thái thu gọn, `isExpanded = false`)
- Bảng chi tiết **chưa mở** — chỉ thấy 1 dòng thanh màu vàng
- Khung chat bên dưới hiển thị tin nhắn bình thường

**Bố cục cần thấy:**
```
┌────────────────────────────────────────────────────────────────────┐
│ KHUNG CHAT CHÍNH                                                    │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │ ChatHeader: [Tên nhóm]   [Số thành viên]   [🔍] [⭐] [◀] [⋮]  │ │
│ ├────────────────────────────────────────────────────────────────┤ │
│ │ THANH THÔNG BÁO (bg-amber-50, border-amber-300)               │ │
│ │ 🔔  Nhận hàng: Kiểm tra lại toàn bộ phiếu nhập...  [5 ∨]     │ │  ← đây
│ │     ↑ Bell icon   ↑ tên loại việc: tên công việc    ↑ số tổng │ │
│ ├────────────────────────────────────────────────────────────────┤ │
│ │ [Tin nhắn trong nhóm...]                                       │ │
│ │ [Tin nhắn trong nhóm...]                                       │ │
│ │ [Tin nhắn trong nhóm...]                                       │ │
│ ├────────────────────────────────────────────────────────────────┤ │
│ │ [📎] [🖼️]  Nhập tin nhắn...                             [⬆️]  │ │
│ └────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

**Giải phẫu thanh thu gọn (`TaskBannerCollapsed`):**
```
┌──────────────────────────────────────────────────────────────────┐
│  px-4 py-2.5  bg-amber-50  border-[2px] border-amber-300        │
│  rounded-lg  (mx-4 mt-2 — có lề 2 bên)                          │
│                                                                  │
│  🔔           Nhận hàng: Kiểm tra phiếu nhập...        [ 5 ∨ ]  │
│  Bell(amber)  font-semibold tên loại việc + tên cv      badge   │
│  h-5 w-5      truncate (cắt nếu quá dài)               amber-400│
└──────────────────────────────────────────────────────────────────┘
```

**Thành phần trong thanh thu gọn:**
- Biểu tượng chuông 🔔 (`Bell`, h-5 w-5, `text-amber-500`) — có animation lắc khi số thay đổi
- Tên loại việc (**in đậm**, `font-semibold text-gray-800`) + dấu hai chấm + tên công việc mới nhất (`text-gray-600`, bị cắt)
- Ô tròn số tổng (`border-2 border-amber-400 rounded-full px-2.5 py-0.5`, `font-semibold text-amber-600`) + biểu tượng mũi tên xuống (∨ `ChevronDown`)

**Đánh dấu:** Viền màu #10B981 quanh **toàn bộ thanh thông báo** — từ chuông đến ô tròn số, bao gồm cả vùng nền vàng

**Điểm cần thấy rõ:**
1. Thanh nằm **ngay phía dưới `ChatHeader`** — giữa tiêu đề nhóm và vùng tin nhắn
2. Nền **vàng nhạt** (`bg-amber-50`) và **viền vàng** (`border-amber-300`) rõ ràng
3. Biểu tượng **chuông màu vàng** bên trái
4. Tên loại việc + tên công việc ở giữa (có thể bị cắt `...` nếu quá dài — OK)
5. Ô tròn có **số tổng** và mũi tên xuống ∨ ở bên phải
6. Bảng chi tiết **chưa mở** — không có phần nào bên dưới thanh

---

### 📸 Ảnh 2 — Thanh đã bấm, bảng chi tiết đang mở rộng

**Tên tệp:** `31-notification-banner-buoc-02.webp`

**Mục tiêu:** Cho thấy nội dung bảng chi tiết sau khi bấm vào thanh.

**Trạng thái màn hình:**
- Vừa bấm vào thanh thông báo → `isExpanded = true`
- Bảng chi tiết (`TaskBannerExpanded`) đã **trượt xuống** và đang hiển thị đầy đủ
- Ô tròn bên phải thanh đã đổi thành mũi tên lên (∧ `ChevronUp`)

**Bố cục bảng chi tiết mở rộng:**
```
┌──────────────────────────────────────────────────────────────────┐
│  THANH THU GỌN (vẫn hiện ở trên):                               │
│  🔔  Nhận hàng: Kiểm tra phiếu nhập...              [ 5 ∧ ]     │
├──────────────────────────────────────────────────────────────────┤
│  BẢNG CHI TIẾT (bg-white, border border-gray-200, shadow-sm)    │
│                                                                  │
│  Công việc theo loại                                             │  ← tiêu đề (font-semibold)
│  Nhấn "Xem chi tiết" để chuyển đến tab tương ứng               │  ← phụ đề (text-xs, gray-500)
│  ──────────────────────────────────────────────────────────────  │
│  Nhận hàng                                         [Xem chi tiết›]│
│  ● 2 đang làm   ● 1 chưa xử lý                                  │
│  ──────────────────────────────────────────────────────────────  │
│  Đổi trả                                           [Xem chi tiết›]│
│  ● 1 đang làm   ● 2 chưa xử lý                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Giải phẫu từng hàng loại việc:**
```
┌────────────────────────────────────────────────────────────┐
│ Nhận hàng                           [  Xem chi tiết  ›  ] │
│ ● 2 đang làm  ● 1 chưa xử lý                               │
│ ↑                                   ↑                      │
│ text-sm font-semibold text-gray-800  bg-brand-600          │
│                                      text-white rounded-lg │
│ Nhãn trạng thái:                                           │
│ "đang làm" → nền xanh dương (bg-blue-50), chữ blue-600     │
│ "chưa xử lý" → nền cam nhạt (bg-orange-50), chữ orange-600 │
└────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **bảng chi tiết đang mở** (`data-testid="task-banner-expanded"`) — toàn bộ phần nền trắng từ tiêu đề "Công việc theo loại" đến hàng loại việc cuối cùng

**Điểm cần thấy rõ:**
1. Thanh thu gọn **vẫn hiện ở trên** — ô tròn đã đổi thành mũi tên **lên** (∧)
2. Tiêu đề **"Công việc theo loại"** (`font-semibold text-gray-800`) ở đầu bảng
3. Dòng phụ đề nhỏ bên dưới: _"Nhấn 'Xem chi tiết' để chuyển đến tab tương ứng"_
4. Ít nhất **2 hàng loại việc**, mỗi hàng có:
   - Tên loại việc (in đậm)
   - Nhãn số lượng có màu: **xanh dương** cho "đang làm", **cam** cho "chưa xử lý"
   - Nút **Xem chi tiết** (nền xanh thương hiệu, chữ trắng) bên phải
5. Bảng có nền **trắng**, viền xám, đổ bóng nhẹ — tách biệt rõ với thanh vàng phía trên

**Kỹ thuật chuẩn bị — quan trọng:**
Cần đủ **2 loại việc trở lên** trong bảng. Nếu chỉ có 1 loại việc, hình sẽ thiếu tính thuyết phục. Nếu môi trường test chỉ có 1 loại việc, hãy đổi sang nhóm chat khác có nhiều loại việc hơn.

---

### 📸 Ảnh 3 — Sau khi bấm "Xem chi tiết", cột bên phải đã chuyển sang tab Công Việc đúng loại việc

**Tên tệp:** `31-notification-banner-buoc-03.webp`

**Mục tiêu:** Cho thấy kết quả sau khi bấm — hệ thống tự điều hướng đến đúng loại việc trong tab Công Việc.

**Trạng thái màn hình:**
- Vừa bấm nút **Xem chi tiết** của loại việc "Nhận hàng" (hoặc bất kỳ loại việc nào)
- **Cột bên phải** đã chuyển sang **tab Công Việc** (`tab-cong-viec`)
- Đang hiển thị danh sách công việc của đúng loại việc vừa chọn
- Thanh thông báo **vẫn hiển thị** phía trên khung chat (không bị ẩn)

**Bố cục toàn màn hình:**
```
┌────────────────────────────────────────────────┬───────────────────┐
│ KHUNG CHAT CHÍNH                               │ CỘT BÊN PHẢI      │
│ ┌──────────────────────────────────────────┐   │ [Thông Tin][Công Việc]│
│ │ ChatHeader: Tên nhóm                     │   │          ↑ đang chọn│
│ ├──────────────────────────────────────────┤   │ ─────────────────── │
│ │ 🔔 Nhận hàng: Kiểm tra phiếu...  [5 ∧] │   │ Nhận hàng           │
│ ├──────────────────────────────────────────┤   │ ─────────────────── │
│ │ BẢNG CHI TIẾT (nếu vẫn mở)              │   │ ■ Kiểm tra phiếu... │
│ │ Nhận hàng                [Xem chi tiết] │   │   Đang xử lý        │
│ │ Đổi trả                  [Xem chi tiết] │   │ ■ Cập nhật số lượng │
│ ├──────────────────────────────────────────┤   │   Chưa xử lý        │
│ │ [Tin nhắn...]                            │   │ ■ Đối chiếu cuối    │
│ │ [Tin nhắn...]                            │   │   Chưa xử lý        │
│ └──────────────────────────────────────────┘   └───────────────────┘
└────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **tab "Công Việc" ở cột bên phải** — tab đang được chọn (active), có nền/gạch chân khác với tab "Thông Tin"

**Điểm cần thấy rõ:**
1. **Tab "Công Việc"** đang được chọn ở cột bên phải — rõ ràng khác với tab "Thông Tin"
2. Danh sách công việc trong tab hiển thị **đúng loại việc** vừa bấm (tên loại việc hiện ở đầu danh sách hoặc trong tiêu đề)
3. Có ít nhất **2–3 công việc** trong danh sách — với trạng thái (Đang xử lý / Chưa xử lý)
4. Thanh thông báo màu vàng **vẫn còn hiện** phía trên khung chat bên trái
5. Cột bên phải và cột chat đang **hiển thị song song** — người xem thấy 2 cột cùng lúc

**Kỹ thuật chuẩn bị:**
- Đảm bảo cột bên phải **đang mở** trước khi chụp (bấm nút mở cột nếu đang ẩn)
- Chụp ngay sau khi bấm **Xem chi tiết** — tab chuyển tức thì, không cần chờ

---

### 📸 Ảnh 4 — Thanh đã thu gọn trở lại sau khi bấm lần hai

**Tên tệp:** `31-notification-banner-buoc-04.webp`

**Mục tiêu:** Cho thấy thanh có thể thu gọn — bảng chi tiết đã đóng, chỉ còn 1 dòng thanh vàng.

**Trạng thái màn hình:**
- Vừa bấm lại vào thanh thông báo lần 2 → `isExpanded = false`
- Bảng chi tiết **đã đóng** — không còn phần nào bên dưới thanh
- Ô tròn bên phải thanh đã đổi lại thành mũi tên xuống (∨ `ChevronDown`)
- Cột bên phải vẫn đang ở tab Công Việc (từ bước 3) — OK, không cần thay đổi

**Bố cục cần thấy:**
```
┌────────────────────────────────────────────────────────────────────┐
│ KHUNG CHAT CHÍNH                                                    │
│ ┌────────────────────────────────────────────────────────────────┐ │
│ │ ChatHeader: [Tên nhóm]   [🔍] [⭐] [◀] [⋮]                    │ │
│ ├────────────────────────────────────────────────────────────────┤ │
│ │ 🔔  Nhận hàng: Kiểm tra phiếu nhập...              [ 5 ∨ ]   │ │  ← thu gọn lại
│ │                                                                │ │  (chỉ 1 dòng)
│ ├────────────────────────────────────────────────────────────────┤ │
│ │ [Tin nhắn trong nhóm...]                                       │ │
│ │ [Tin nhắn trong nhóm...]                                       │ │
│ └────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô tròn chứa số và mũi tên xuống** (∨) ở bên phải thanh — chi tiết nhỏ nhưng quan trọng để người dùng hiểu rằng có thể bấm lại để mở

**Điểm cần thấy rõ:**
1. Thanh thông báo chỉ còn **1 dòng** — bảng chi tiết đã đóng hoàn toàn
2. Ô tròn bên phải hiển thị **mũi tên xuống** (∨) — thể hiện trạng thái đang thu gọn (có thể bấm để mở lại)
3. Nội dung thanh giống Ảnh 1 — thanh vẫn còn đó, chưa bị ẩn
4. Vùng tin nhắn bên dưới rộng hơn so với Ảnh 2 (không bị bảng chi tiết che)

> **Lưu ý:** Ảnh 1 và Ảnh 4 có bố cục tương tự nhau (đều là thanh thu gọn). Điểm khác biệt là **ngữ cảnh**: Ảnh 1 chụp trạng thái ban đầu khi mới vào nhóm; Ảnh 4 chụp sau khi đã mở → đóng lại. Nếu cần phân biệt rõ hơn, Ảnh 4 có thể chụp với cột bên phải đang ở **tab Công Việc** (kết quả từ Ảnh 3) để tạo sự liên kết.

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  Đăng nhập tài khoản Leader
  Chọn nhóm chat có ≥ 2 loại việc, mỗi loại có công việc todo/doing
  Mở cột bên phải (nếu đang ẩn)
  ↓
Ảnh 1  →  Chuyển vào nhóm chat có công việc todo/doing
           Thanh thông báo vàng hiện ngay dưới tiêu đề nhóm
           Bảng chi tiết CHƯA MỞ
           → CHỤP (đánh dấu toàn bộ thanh màu vàng)
           ↓
Ảnh 2  →  Bấm vào thanh thông báo
           Bảng chi tiết MỞ RỘNG (trượt xuống)
           Thấy ít nhất 2 hàng loại việc + nút Xem chi tiết
           → CHỤP (đánh dấu bảng chi tiết đang mở)
           ↓
Ảnh 3  →  Bấm nút "Xem chi tiết" của loại việc đầu tiên
           Cột bên phải TỰ CHUYỂN sang tab Công Việc
           Danh sách công việc của đúng loại việc hiện ra
           → CHỤP NGAY (đánh dấu tab Công Việc đang active)
           ↓
Ảnh 4  →  Bấm lại vào thanh thông báo (hoặc phần thanh)
           Bảng chi tiết THU GỌN lại
           Ô tròn đổi về mũi tên xuống ∨
           → CHỤP (đánh dấu ô tròn + mũi tên xuống ∨)
           ↓
Hoàn thành ✅
```

---

## Bảng kiểm tra trước khi nộp

```
□ Đúng 4 ảnh, đúng tên tệp
□ Chiều rộng: 1280px
□ Định dạng: WebP hoặc PNG
□ Mỗi ảnh có đúng 1 điểm đánh dấu màu #10B981
□ Không có thông tin nhạy cảm (tên thật, nội dung công việc nội bộ)

□ Ảnh 1: Thanh vàng ĐANG HIỆN dưới tiêu đề nhóm, bảng chi tiết CHƯA MỞ, mũi tên ∨
□ Ảnh 2: Bảng chi tiết ĐÃ MỞ, ≥ 2 loại việc, nhãn màu (xanh/cam), nút Xem chi tiết
□ Ảnh 3: Tab "Công Việc" bên phải ĐANG ACTIVE, danh sách đúng loại việc, thanh vàng vẫn hiện
□ Ảnh 4: Bảng chi tiết ĐÃ THU GỌN, ô tròn có mũi tên ∨, thanh chỉ còn 1 dòng
□ Dữ liệu tên loại việc và tên công việc có nghĩa — không phải "test" hay "abc"
□ Ảnh rõ nét, không bị cắt mép
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
                    ├── 31-notification-banner-buoc-01.webp  ← thanh vàng thu gọn, bảng chưa mở
                    ├── 31-notification-banner-buoc-02.webp  ← bảng chi tiết mở rộng
                    ├── 31-notification-banner-buoc-03.webp  ← tab Công Việc đang active bên phải
                    └── 31-notification-banner-buoc-04.webp  ← bảng thu gọn lại, mũi tên ∨
```

---

## Giải phẫu kỹ thuật — cấu trúc đầy đủ của TaskBanner

```
TaskBanner (mx-4 mt-2) — chỉ render khi visible=true (totalCount > 0)
│
├── TaskBannerCollapsed  (luôn hiện)
│   button [data-testid="task-banner-collapsed-button"]
│   bg-amber-50  border-[2px] border-amber-300  rounded-lg  px-4 py-2.5
│   │
│   ├── [Trái] Bell icon (h-5 w-5, text-amber-500)
│   │   + animate-bell-ring (600ms) khi totalCount thay đổi
│   │
│   ├── [Giữa] Tên loại việc mới nhất (lastUpdatedAt)
│   │   <span font-semibold text-gray-800>{workTypeName}:</span>
│   │   <span text-gray-600 truncate>{latestTaskTitle}</span>
│   │
│   └── [Phải] Ô tròn tổng số
│       border-2 border-amber-400 rounded-full px-2.5 py-0.5
│       font-semibold text-amber-600
│       {totalCount}
│       + ChevronUp (∧) khi isExpanded=true
│       + ChevronDown (∨) khi isExpanded=false
│
└── TaskBannerExpanded  (chỉ render khi isExpanded=true)
    [data-testid="task-banner-expanded"]
    bg-white  border border-gray-200 border-t-0  rounded-b-lg  shadow-sm
    animate-slide-down (200ms ease-out từ translateY(-8px))
    │
    ├── Header (px-4 pt-3 pb-2)
    │   "Công việc theo loại"  (text-sm font-semibold text-gray-800)
    │   "Nhấn 'Xem chi tiết' để..."  (text-xs text-gray-500)
    │
    └── Danh sách breakdown (px-4 pb-3 space-y-3)
        Mỗi hàng loại việc:
        ├── [Trái] Tên loại việc + nhãn trạng thái
        │   text-sm font-semibold text-gray-800
        │   Nhãn "đang làm": bg-blue-50 text-blue-600 + ● xanh
        │   Nhãn "chưa xử lý": bg-orange-50 text-orange-600 + ● cam
        │
        └── [Phải] Nút "Xem chi tiết ›"
            [data-testid="task-banner-view-detail-{conversationId}"]
            bg-brand-600 hover:bg-brand-700 text-white
            px-3 py-1.5 rounded-lg text-sm font-medium
            ChevronRight (h-4 w-4)
```

---

## Quy tắc hiển thị cần biết

| Hành vi | Chi tiết |
|---------|---------|
| **Khi nào hiện** | `totalCount > 0` — có ít nhất 1 công việc `todo` hoặc `doing` trong nhóm |
| **Khi nào ẩn** | `totalCount = 0` — tất cả đã hoàn thành hoặc chờ duyệt |
| **Cập nhật tự động** | Lắng nghe sự kiện `TasksUpdated` qua kết nối thời gian thực — khi có task đổi trạng thái, số cập nhật ngay, chuông lắc 600ms |
| **Loại việc nào hiện** | Chỉ `todo` (Chưa xử lý) và `doing` (Đang xử lý) — `need_to_verified` và `finished` không tính |
| **Loại việc mới nhất** | Dòng rút gọn hiện **loại việc có task được cập nhật gần nhất** (`lastUpdatedAt`) |
| **Bấm "Xem chi tiết"** | Gọi `onViewWorkType(conversationId)` → WorkspaceView chuyển tab Công Việc và lọc đúng loại việc |

---

## Câu hỏi thường gặp khi chụp

**H: Thanh không hiện dù nhóm có công việc?**
→ Kiểm tra trạng thái: Thanh chỉ hiện với task `todo` và `doing`. Nếu task đang ở `need_to_verified` (Chờ duyệt) hoặc `finished` (Hoàn thành), thanh không hiện. Cần tạo/đổi ít nhất 1 task về `todo` hoặc `doing`.

**H: Chỉ thấy 1 loại việc trong bảng, cần 2 để chụp đẹp?**
→ Chuyển sang nhóm chat khác có nhiều loại việc hơn, hoặc nhờ Leader/Admin tạo thêm task cho loại việc thứ hai trong cùng nhóm.

**H: Bấm "Xem chi tiết" nhưng cột bên phải không đổi sang tab Công Việc?**
→ Hai trường hợp: (1) Cột bên phải đang bị ẩn — mở cột lên trước; (2) Đang ở màn hình nhắn tin riêng (DM) — tính năng chỉ hoạt động trong nhóm chat, không hoạt động trong DM.

**H: Chuông lắc có cần chụp không?**
→ Không cần — animation chỉ kéo dài 600ms và xảy ra khi số task thay đổi (hiếm khi chụp kịp). Bài viết không đề cập đến animation này, không cần ảnh riêng.

---

## Phân biệt 3 loại thông báo trong hệ thống

Để tránh nhầm lẫn khi viết hoặc chụp:

| Loại | Tên kỹ thuật | Vị trí | Bài hướng dẫn |
|------|-------------|--------|---------------|
| **Thanh thông báo công việc** | `TaskBanner` | Trong khung chat, dưới tiêu đề nhóm | **Bài này (31)** |
| **Thông báo nổi** | `toast` (sonner) | Góc màn hình, tự biến mất sau vài giây | Không có bài riêng — đề cập trong các bài liên quan |
| **Thanh gợi ý** | `HintBanner` | Trong cột bên phải, trên cùng | Không có bài riêng |

### Ghi chú bổ sung

### Nếu UI thay đổi sau khi chụp
Xem hướng dẫn tại `docs/CONTENT_GUIDE.md` — Mục 10: *Update khi UI thay đổi*.
Giữ nguyên tên tệp ảnh, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo yêu cầu trong kho `Quoc-Nam-Guide`.

# Hướng Dẫn Chụp Hình — Bài 26: Xem hồ sơ tệp gắn với task/chat

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/26-xem-ho-so-file.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Chuẩn bị trước khi chụp

### Tài khoản và dữ liệu

Dùng tài khoản bất kỳ (Staff / Leader / Admin). Quan trọng nhất là cuộc trò chuyện **nhóm** đang mở cần có **đủ dữ liệu thực**:

| Loại tệp cần có sẵn trong nhóm | Số lượng tối thiểu | Dùng cho ảnh |
|-------------------------------|-------------------|-------------|
| Ảnh (JPG/PNG) đã gửi trong chat | ≥ 4 ảnh | Ảnh 2 |
| Tài liệu (PDF/Word/Excel) đã gửi | ≥ 2 tài liệu | Ảnh 3 |
| Bất kỳ tệp nào | Vài tệp | Ảnh 4 |

> **Không có dữ liệu thực?** Nhờ đồng nghiệp gửi thử 3–4 ảnh và 2 tài liệu vào nhóm chat trước khi chụp.

### Trạng thái màn hình ban đầu

Bắt đầu từ trạng thái **bảng thông tin bên phải đang đóng** (chưa mở) để Ảnh 1 có thể chụp đúng thao tác mở bảng.

Kiểm tra: nếu bảng thông tin đang mở sẵn → bấm nút thu gọn để đóng lại → rồi mới bắt đầu chụp.

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |

### Màu và dạng đánh dấu

- Màu viền: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc (2–3px), mũi tên khi phần tử nhỏ
- **1 điểm đánh dấu** mỗi ảnh — không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Nút mở bảng thông tin trên thanh tiêu đề chat

**Tên tệp:** `26-xem-ho-so-file-buoc-01.webp`

**Trạng thái màn hình:**
- Khung chat chính đang mở, bảng thông tin bên phải **chưa mở** (`showRight = false`)
- Nút **mở bảng thông tin** hiển thị trên thanh tiêu đề chat (`ChatHeader`)
- **Chưa bấm nút** — bảng chưa trượt ra

**Vị trí nút cần đánh dấu trên `ChatHeader`:**

```
┌──────────────────────────────────────────────────────────────────────────┐
│ ChatHeader  (border-b, bg-white, h-[60px], px-4)                         │
│                                                                          │
│  [Tên nhóm chat]            [🔍] [⭐] [◀▶ nút mở bảng] ◄──── ĐÁNH DẤU  │
│  Loại việc: …                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **nút mở/đóng bảng thông tin** — biểu tượng bảng với mũi tên (`PanelRightOpen` khi đóng / `PanelRightClose` khi mở), nằm ngoài cùng bên phải thanh tiêu đề chat

**Điểm cần thấy rõ:**
1. Thanh tiêu đề chat đầy đủ — tên nhóm, loại việc, các nút chức năng
2. Nút cần đánh dấu nằm **ngoài cùng bên phải** — sau nút sao và nút tìm kiếm
3. Bảng bên phải **chưa mở** — vùng bên phải của khung chat trống hoặc không thấy bảng Thông Tin
4. Khung chat chính có tin nhắn hiển thị bình thường

**Ghi chú:**
- Nút này là `onToggleRightPanel={() => setShowRight(!showRight)}` trong `WorkspaceView`
- Khi `showRight = false`: biểu tượng là `PanelRightOpen` (bảng đang đóng, bấm để mở)
- Khi `showRight = true`: biểu tượng là `PanelRightClose` (bảng đang mở, bấm để đóng)
- **Chụp khi `showRight = false`** (bảng chưa mở)

---

### 📸 Ảnh 2 — Bảng Thông Tin mở, mục Ảnh / Video đang hiển thị lưới

**Tên tệp:** `26-xem-ho-so-file-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm nút mở → bảng **Thông Tin** trượt ra bên phải (`showRight = true`)
- Tab **Thông Tin** đang được chọn (mặc định khi mở)
- Mục **Ảnh / Video** đang mở (accordion đã triển khai)
- Lưới ảnh 3 cột hiển thị ảnh thu nhỏ thực (`grid grid-cols-3 gap-2`)
- Có **ít nhất 4 ảnh** trong lưới

**Bố cục bảng Thông Tin cần thấy:**
```
┌──────────────────────────────────────────────────────────────────┐
│ KHUNG CHAT CHÍNH                  │ BẢNG THÔNG TIN (bên phải)   │
│ (flex-1, vùng tin nhắn)           │  width: ~360px              │
│                                   │                              │
│                                   │  [Thông Tin] [Công Việc]     │
│                                   │   ─── tab bar ───            │
│                                   │                              │
│                                   │  ┌─────────────────────────┐ │
│                                   │  │ Ảnh / Video ▼           │ │
│                                   │  ├─────────────────────────┤ │
│                                   │  │ [ảnh][ảnh][ảnh]         │ │
│                                   │  │ [ảnh][ảnh][ảnh] ◄─────  │ │ ← ĐÁNH DẤU
│                                   │  │ [Xem tất cả]            │ │
│                                   │  └─────────────────────────┘ │
│                                   │                              │
│                                   │  ┌─────────────────────────┐ │
│                                   │  │ Tất Cả Tệp ▼           │ │
│                                   │  └─────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **lưới ảnh thu nhỏ 3×2** trong mục Ảnh / Video (`grid grid-cols-3 gap-2`, `data-testid="media-grid-container"`)

**Điểm cần thấy rõ:**
1. Bảng Thông Tin đã mở — tab bar ở đầu bảng với "Thông Tin" đang được chọn (có dấu gạch chân hoặc màu nổi)
2. Mục **Ảnh / Video** đang mở (accordion triển khai)
3. Lưới ảnh 3 cột với **ảnh thu nhỏ thực** (không phải placeholder xám)
4. Nút **Xem tất cả** hiện bên dưới lưới (chỉ xuất hiện khi `allFiles.length > 6`)

**Điều kiện dữ liệu:**
- Cần ≥ 4 ảnh đã gửi trong nhóm → lưới đủ đầy
- Nếu < 4 ảnh: lưới sẽ trống/ít ô → không đủ minh hoạ → thêm ảnh vào nhóm trước khi chụp

---

### 📸 Ảnh 3 — Mục Tài liệu hiển thị danh sách tệp

**Tên tệp:** `26-xem-ho-so-file-buoc-03.webp`

**Trạng thái màn hình:**
- Bảng Thông Tin vẫn mở
- Người dùng đã **cuộn xuống** trong bảng để thấy mục **Tài liệu**
- Mục Tài liệu đang mở (accordion đã triển khai)
- Danh sách tài liệu hiển thị (dạng hàng, không phải lưới)

**Bố cục mục Tài liệu cần thấy:**
```
┌──────────────────────────────────────────────────────────────────┐
│ BẢNG THÔNG TIN (đã cuộn xuống)                                  │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Tài liệu ▼                                                  │ │
│  ├─────────────────────────────────────────────────────────────┤ │
│  │  ┌────┐  ten-bao-cao-thang-3.pdf                            │ │
│  │  │ 📄 │  1.2 MB • 20/03/2026                    [💬 xem]   │ │ ← ĐÁNH DẤU
│  │  └────┘                                                     │ │
│  │  ┌────┐  ke-hoach-quy-2.xlsx                               │ │
│  │  │ 📊 │  456 KB • 18/03/2026                               │ │
│  │  └────┘                                                     │ │
│  └─────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **một hàng tài liệu** — hàng đầu tiên trong danh sách (`data-testid="document-list-item-..."`, `flex items-center gap-2 rounded-md px-2 py-1.5`)

**Điểm cần thấy rõ:**
1. Biểu tượng theo loại tệp rõ ràng:
   - PDF → `📄` màu đỏ hồng (`text-rose-600`)
   - Excel → `📊` màu xanh lá (`text-emerald-600`)
   - Word → `📝` màu xanh dương (`text-sky-600`)
2. Tên tệp có nghĩa (không phải `document1.pdf`) — tên tệp thực từ môi trường test
3. Dung lượng và ngày gửi bên dưới tên (`text-[11px] text-gray-500`)

**Nút "Xem tin nhắn gốc" (tuỳ chọn):**
Nếu di chuột qua hàng tài liệu, nút `💬 Xem tin nhắn gốc` (`MessageCircle`) hiển thị ở góc phải. Nếu bắt được trạng thái này trong ảnh → thêm giá trị, nhưng không bắt buộc vì là `opacity-0 group-hover:opacity-100`.

---

### 📸 Ảnh 4 — Cửa sổ Tất cả tệp đang mở với danh sách tệp

**Tên tệp:** `26-xem-ho-so-file-buoc-04.webp`

**Trạng thái màn hình:**
- Đã bấm nút **Xem Tất Cả Tệp** trong mục "Tất Cả Tệp" của bảng Thông Tin
- Cửa sổ `ViewAllFilesModal` đang mở — phủ lên toàn bộ giao diện
- Danh sách tệp hiển thị dạng lưới (`FileGrid`)
- Ô tìm kiếm và tuỳ chọn sắp xếp hiển thị ở phần đầu

**Bố cục cửa sổ cần thấy:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ NỀN TỐI (bg-black/80, fixed inset-0)                               │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ TIÊU ĐỀ  (border-b, pb-4)                                   │   │
│  │  Tất cả file                                       [✕]      │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ THANH CÔNG CỤ  (bg-gray-50, rounded-lg, p-4)                │   │
│  │  ┌──────────────────────────────┐                           │   │
│  │  │ 🔍 Tìm kiếm file...          │ ◄──── ĐÁNH DẤU           │   │
│  │  └──────────────────────────────┘                           │   │
│  │  Sắp xếp: [Mới nhất ▼]                                     │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ VÙNG HIỂN THỊ TỆP  (overflow-y-auto, px-4)                  │   │
│  │  [thẻ tệp] [thẻ tệp] [thẻ tệp] [thẻ tệp]                  │   │
│  │  [thẻ tệp] [thẻ tệp] [thẻ tệp] [thẻ tệp]                  │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │ PHÂN TRANG  (border-t, pt-4)                                │   │
│  │  Trang 1 / 2   [< Trước] [Tiếp >]   Hiển thị 20 / 35 tệp  │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô tìm kiếm** (`FileSearchBar`, `data-testid="chat-view-all-files-toolbar"` trong vùng thanh công cụ)

**Điểm cần thấy rõ:**
1. Tiêu đề cửa sổ "Tất cả file" + nút ✕
2. Ô tìm kiếm ở phần thanh công cụ — placeholder "Tìm kiếm file..."
3. Tuỳ chọn sắp xếp (dropdown "Sắp xếp:")
4. Danh sách tệp hiển thị bên dưới — ít nhất 4–6 thẻ tệp
5. Phân trang ở cuối (nếu có đủ tệp)

**Lưu ý về trạng thái tải:**
Khi vừa bấm mở, cửa sổ có thể hiển thị trạng thái đang tải một vài giây. Đợi đến khi danh sách tệp hiển thị rõ ràng rồi mới chụp.

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị → Mở nhóm chat có ≥ 4 ảnh và ≥ 2 tài liệu đã gửi
            Bảng thông tin bên phải ĐANG ĐÓNG (showRight = false)
            ↓
Ảnh 1   → Xác định nút mở bảng thông tin (ngoài cùng bên phải ChatHeader)
            → CHỤP (đánh dấu nút mở bảng)
            CHƯA bấm nút
            ↓
Ảnh 2   → Bấm nút mở bảng → bảng Thông Tin trượt ra bên phải
            Mục Ảnh / Video tự mở theo mặc định → lưới ảnh hiển thị
            → CHỤP (đánh dấu lưới ảnh)
            CHƯA bấm gì thêm
            ↓
Ảnh 3   → Cuộn xuống trong bảng để thấy mục Tài liệu
            Bấm vào tiêu đề "Tài liệu" nếu accordion đang đóng
            → Danh sách tài liệu hiển thị → CHỤP (đánh dấu một hàng tài liệu)
            ↓
Ảnh 4   → Cuộn lên bảng để tìm mục "Tất Cả Tệp"
            Bấm nút "Xem Tất Cả Tệp" (biểu tượng FileText + chữ "Xem Tất Cả Tệp",
            bg-brand-50, border-brand-300)
            Cửa sổ bật lên, đợi tệp tải xong
            → CHỤP (đánh dấu ô tìm kiếm)
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
□ Ảnh 1: bảng thông tin CHƯA MỞ, nút mở bảng RÕ RÀNG trong ChatHeader
□ Ảnh 2: bảng Thông Tin ĐÃ MỞ, lưới ảnh 3 cột CÓ ẢNH THỰC (không phải placeholder)
□ Ảnh 3: mục Tài liệu ĐANG MỞ, thấy ÍT NHẤT 1 hàng tài liệu với biểu tượng đúng loại
□ Ảnh 4: cửa sổ "Tất cả file" ĐÃ HIỂN THỊ DANH SÁCH TỆP (không phải trạng thái đang tải)
□ Tên tệp trong Ảnh 3 và Ảnh 4 có nghĩa thực tế (ví dụ: bao-cao-thang-3.pdf)
□ Không thấy dữ liệu nhạy cảm (số điện thoại, mật khẩu, thông tin nội bộ)
□ Ảnh rõ nét, không bị mờ
□ Lưu đúng thư mục: guide-site/src/content/web/images/
```

## Vị trí lưu ảnh

```
Quoc-Nam-Guide/
└── guide-site/
    └── src/
        └── content/
            └── web/
                └── images/
                    ├── 26-xem-ho-so-file-buoc-01.webp  ← nút mở bảng trong ChatHeader
                    ├── 26-xem-ho-so-file-buoc-02.webp  ← lưới ảnh/video trong bảng Thông Tin
                    ├── 26-xem-ho-so-file-buoc-03.webp  ← danh sách tài liệu trong bảng Thông Tin
                    └── 26-xem-ho-so-file-buoc-04.webp  ← cửa sổ "Tất cả file" đang mở
```

---

## Giải phẫu bảng Thông Tin (ConversationDetailPanel)

```
┌─────────────────────────────────────────────────────────────────────┐
│ BẢNG THÔNG TIN  (w-[360px], border-l, bg-white)                    │
│                                                                     │
│  ─── TAB BAR (sticky) ───────────────────────────────────────────  │
│   [Thông Tin ●]  [Công Việc]                                        │
│   (● = đang chọn, có gạch chân brand)     chỉ nhóm mới có tab này  │
│   ─ với DM (nhắn tin cá nhân): chỉ có tab Thông Tin ─               │
│                                                                     │
│  ─── NỘI DUNG TAB THÔNG TIN ────────────────────────────────────── │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Thẻ nhóm (gradient từ brand-50 qua emerald-50 đến cyan-50)  │   │
│  │  Tên nhóm          (text-sm font-semibold)                   │   │
│  │  Đang xem thông tin cho Loại việc: [tên]                     │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ─── Ảnh / Video (accordion) ───────────────────────────────────   │
│  grid grid-cols-3 gap-2                                             │
│  [ảnh][ảnh][ảnh]  (aspect-[4/3], rounded-lg, cursor-pointer)       │
│  [ảnh][ảnh][ảnh]  (tối đa 6, sắp xếp mới nhất trước)              │
│  [Xem tất cả] (chỉ hiện khi > 6 tệp)                               │
│                                                                     │
│  ─── Tất Cả Tệp (accordion) ────────────────────────────────────   │
│  [FileText icon] Xem Tất Cả Tệp  (button, bg-brand-50)             │
│                                                                     │
│  ─── Tài liệu (accordion) ──────────────────────────────────────   │
│  [biểu tượng] tên-tệp.pdf          dung-lượng • ngày               │
│  [biểu tượng] tên-tệp.xlsx         dung-lượng • ngày               │
│  (tối đa 3, sắp xếp mới nhất trước)                                │
│                                                                     │
│  ─── Thành viên (accordion) ── CHỈ LEADER/ADMIN ────────────────   │
│  [Users icon] N thành viên                         [+ Thêm]        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Giải phẫu cửa sổ Tất cả tệp (ViewAllFilesModal)

```
┌─────────────────────────────────────────────────────────────────────┐
│ ViewAllFilesModal  (max-w-4xl, max-h-[90vh], z-50)                 │
│                                                                     │
│  TIÊU ĐỀ  "Tất cả file"                              [✕ đóng]      │
│  ─────────────────────────────────────────────────────────────────  │
│  THANH CÔNG CỤ  (bg-gray-50, p-4, rounded-lg)                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │ 🔍 Tìm kiếm file...   (FileSearchBar)                       │   │
│   └─────────────────────────────────────────────────────────────┘   │
│   Sắp xếp:  [Mới nhất ▼]  (FileSortDropdown)                      │
│  ─────────────────────────────────────────────────────────────────  │
│  VÙNG TỆP  (FileGrid hoặc FileList)                                │
│   [thẻ][thẻ][thẻ][thẻ]                                             │
│   [thẻ][thẻ][thẻ][thẻ]                                             │
│   Trạng thái trống: "Không tìm thấy file" + "Thử thay đổi bộ lọc" │
│  ─────────────────────────────────────────────────────────────────  │
│  PHÂN TRANG  (border-t, pt-4)                                      │
│   FilePagination: Trang N/M   [< Trước] [Tiếp >]   N / Tổng tệp  │
└─────────────────────────────────────────────────────────────────────┘
```

**Luồng tải dữ liệu:**
```
Bấm "Xem Tất Cả Tệp"
   ↓
useViewFiles.openModal(messages, groupId, workTypeId)
   ↓
ViewAllFilesModal mở (isOpen = true)
   ↓
useEffect: fetchMessagesAndExtractFiles(currentGroupId)
   ↓
getMessages({ conversationId, limit: 100 })
   ↓
extractAllFilesFromMessages(messages)
   ↓
updateFiles(files) → displayedFiles cập nhật
   ↓
FileGrid/FileList hiển thị tệp
```

---

## Phân biệt biểu tượng tài liệu theo loại

| Loại tệp | Biểu tượng | Màu |
|----------|-----------|-----|
| PDF | FileText | `text-rose-600` (đỏ hồng) |
| Excel (.xls/.xlsx) | FileSpreadsheet | `text-emerald-600` (xanh lá) |
| Word (.doc/.docx) | FileType2 | `text-sky-600` (xanh dương nhạt) |
| Khác | FileText | `text-gray-500` (xám) |

---

## Ghi chú bổ sung

### Accordion trong bảng Thông Tin
Mỗi mục (Ảnh / Video, Tất Cả Tệp, Tài liệu, Thành viên) là một `RightAccordion`. Mặc định có thể đóng hoặc mở tuỳ trạng thái khởi tạo. Nếu mục đang đóng → bấm vào tiêu đề để mở rồi chụp.

### Tab Công Việc không hiển thị khi nhắn tin cá nhân
Trong cuộc trò chuyện nhóm: tab bar có **Thông Tin + Công Việc**. Trong nhắn tin cá nhân (DM): chỉ có **Thông Tin**. Bài này chụp trên cuộc trò chuyện **nhóm** — cần thấy cả 2 tab.

### Dữ liệu nhạy cảm
Tên tệp, nội dung tài liệu, tên người dùng trong ảnh đều phải được kiểm tra trước khi nộp. Dùng dữ liệu test không chứa thông tin thật của khách hàng.

### Khi UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên tệp ảnh, chỉ thay nội dung.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong kho `Quoc-Nam-Guide`.

# Hướng Dẫn Chụp Hình — Bài 11: Tổng quan tab Công Việc (Leader)

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/11-leader-tong-quan-cong-viec.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-25

---

## Hiểu đúng tính năng trước khi chụp

Tab **Công Việc** ở cột bên phải hiển thị hoàn toàn khác nhau tùy vai trò:

| Vai trò | Giao diện nhận được |
|---------|---------------------|
| **Staff** | Chế độ đơn — chỉ thấy việc của chính mình, không có nút Nhóm/Của tôi |
| **Leader / Admin** | Chế độ kép — có 2 nút **Nhóm** và **Của tôi** ở trên cùng |

Bài này chụp dành cho **Leader / Admin**. Bắt buộc dùng tài khoản có vai trò Leader trở lên.

### Cấu trúc giao diện Leader cần nắm

```
CỘT BÊN PHẢI (ConversationDetailPanel)
│
├── [Thông Tin]  [Công Việc]   ← 2 tab trên cùng (SegmentedTabs)
│                   ↑ đang chọn
└── NỘI DUNG tab Công Việc (LeaderModeContent)
    │
    ├── ReceivedInfoSection (OPTIONAL — chỉ hiện nếu có thông tin tiếp nhận chờ xử lý)
    │
    ├── [   Nhóm   ]  [  Của tôi  🔴2  ]   ← ToggleGroup chuyển chế độ
    │         ↑ data-testid="team-filter-button"
    │                     ↑ data-testid="personal-filter-button"
    │                       chấm tròn vàng khi có việc chưa xong
    │
    ├── Khung tiêu đề thống kê (rounded-xl border bg-white p-4 shadow-sm)
    │   ├── "Công Việc Của Nhóm [Tên phòng ban]"  (chế độ Nhóm)
    │   │   hoặc "Công Việc Của Tôi"              (chế độ Của tôi)
    │   ├── "• Loại việc: [Tên loại việc]"
    │   ├── Ô lọc nhân viên (select dropdown)     (chỉ chế độ Nhóm)
    │   │   + nút 📋 Xem checklist mặc định
    │   └── Dòng thống kê nhỏ:
    │       "Đang xem X công việc • Y chưa xử lý • Z đang xử lý • W chờ duyệt"
    │       (chỉ hiện khi đã chọn loại việc)
    │
    └── Danh sách công việc theo trạng thái
        ├── ● Chờ duyệt (N) ▼     ← bg-amber-500, có highlight amber khi mới mở
        ├── ● Chưa xử lý (N) ▼    ← bg-amber-400
        ├── ● Đang xử lý (N) ▼    ← bg-sky-400 (chế độ Nhóm)
        │   hoặc bg-sky-400        ← (chế độ Của tôi)
        └── ● Hoàn thành hôm nay (N) ▼  ← bg-emerald-400 (chỉ chế độ Của tôi)
```

---

## Chuẩn bị trước khi chụp

### Tài khoản

Bắt buộc dùng tài khoản **Leader**. Không dùng tài khoản Staff (sẽ thấy giao diện khác, không có nút Nhóm/Của tôi).

### Dữ liệu cần chuẩn bị

| Điều kiện | Lý do |
|-----------|-------|
| Nhóm chat có **ít nhất 2 loại việc** | Thanh điều hướng loại việc đẹp hơn, thực tế hơn |
| Loại việc đang chọn có **ít nhất 5–6 công việc** | Đủ để thấy cả 3 nhóm trạng thái (chờ duyệt, chưa xử lý, đang xử lý) |
| Có **ít nhất 1 công việc "Chờ duyệt"** | Nhóm này nổi bật nhất — màu vàng, cần thấy rõ |
| Có **ít nhất 2 nhân viên** được giao việc | Ô lọc nhân viên mới có ý nghĩa |
| Leader đang có **ít nhất 1 công việc** được giao cho bản thân | Để nút "Của tôi" hiện chấm tròn vàng, và chế độ "Của tôi" không trống |

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |
| Cột bên phải | **Đang mở** (phải thấy cả chat và cột bên phải song song) |
| Thanh địa chỉ | Ẩn hoặc crop ra khỏi ảnh |

### Màu và dạng đánh dấu

- Màu viền: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc 2–3px
- Đúng **1 điểm đánh dấu** mỗi ảnh
- Không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Tab Công Việc vừa được bấm, chưa chọn loại việc

**Tên tệp:** `11-leader-tong-quan-buoc-01.webp`

**Mục tiêu:** Cho thấy giao diện ban đầu của tab Công Việc dành cho Leader — có 2 nút Nhóm / Của tôi, và trạng thái "Chọn loại việc để xem thông tin".

**Trạng thái màn hình:**
- Đang ở trong một nhóm chat
- Cột bên phải đang ở **tab Công Việc** (vừa bấm vào)
- **Chưa chọn loại việc nào** — hoặc vừa mới vào nhóm
- Chế độ mặc định: **Nhóm** (nút Nhóm đang active, nền xanh thương hiệu)

**Bố cục cần thấy:**
```
┌────────────────────────────────────────────────┬──────────────────────┐
│ KHUNG CHAT (bên trái)                          │ CỘT BÊN PHẢI         │
│ [Tin nhắn nhóm...]                             │ [Thông Tin][Công Việc]│
│                                                │          ↑ active    │
│                                                │ ─────────────────── │
│                                                │ [■ Nhóm] [Của tôi]  │
│                                                │  ↑ active (nền xanh) │
│                                                │ ─────────────────── │
│                                                │ ┌──────────────────┐ │
│                                                │ │ Công Việc Của    │ │
│                                                │ │ Nhóm [Tên PB]    │ │
│                                                │ │                  │ │
│                                                │ │ Chọn loại việc   │ │
│                                                │ │ để xem thông tin │ │
│                                                │ └──────────────────┘ │
└────────────────────────────────────────────────┴──────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **tab "Công Việc"** ở hàng tab trên cùng của cột bên phải

**Điểm cần thấy rõ:**
1. Tab **"Công Việc"** đang được chọn (active) — khác màu với tab "Thông Tin"
2. 2 nút **[Nhóm]** và **[Của tôi]** hiển thị — nút Nhóm đang active (nền xanh thương hiệu, chữ trắng); nút Của tôi không active (nền trắng, chữ xám)
3. Khung tiêu đề có dòng chữ **"Chọn loại việc để xem thông tin"** (text-xs text-gray-500 text-center) — đây là trạng thái chưa chọn loại việc
4. Bên trái vẫn thấy khung chat bình thường (không bị che)

---

### 📸 Ảnh 2 — Đã chọn loại việc, khung tiêu đề hiện thống kê

**Tên tệp:** `11-leader-tong-quan-buoc-02.webp`

**Mục tiêu:** Cho thấy phần tiêu đề thống kê sau khi đã chọn một loại việc — tên loại việc, số lượng công việc theo trạng thái.

**Trạng thái màn hình:**
- Đã chọn một loại việc (thông qua thanh thông báo hoặc nhóm chat bên trái)
- `selectedWorkTypeId` đã có giá trị
- Khung tiêu đề đang hiện thống kê đầy đủ
- Danh sách công việc đã tải xong bên dưới (thấy ít nhất 1 nhóm trạng thái)

**Bố cục khung tiêu đề (chế độ Nhóm, đã chọn loại việc):**
```
┌─────────────────────────────────────────────────────────┐
│  rounded-xl border bg-white p-4 shadow-sm               │
│                                                         │
│  👥  Công Việc Của Nhóm  [Tên phòng ban xanh]           │
│       • Loại việc:  Nhận hàng                           │
│                                                         │
│  Nhân viên:  [Tất cả ▼]         📋                      │
│  ↑ select dropdown               ↑ nút checklist mặc định│
│                                                         │
│  Đang xem 7 công việc  •  2 chưa xử lý  •              │
│  3 đang xử lý  •  2 chờ duyệt (in đậm vàng)            │
└─────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **toàn bộ khung tiêu đề thống kê** (phần `rounded-xl border bg-white p-4 shadow-sm`) — từ dòng "Công Việc Của Nhóm" đến dòng thống kê số lượng ở dưới cùng

**Điểm cần thấy rõ:**
1. Dòng tiêu đề: **"Công Việc Của Nhóm"** + tên phòng ban màu xanh thương hiệu
2. Dòng phụ: **"• Loại việc: [Tên loại việc]"** — xác nhận đã chọn đúng loại việc
3. Ô lọc nhân viên đang chọn **"Tất cả"**
4. Nút 📋 nhỏ bên phải ô lọc (xem checklist mặc định) — màu emerald, nhỏ nhắn
5. Dòng thống kê phía dưới: "Đang xem **X** công việc • **Y** chưa xử lý • **Z** đang xử lý • **W** chờ duyệt" — chữ "chờ duyệt" in đậm màu vàng nếu có

**Lưu ý kỹ thuật chụp:**
Cần scroll lên đầu cột bên phải để thấy đầy đủ khung tiêu đề + ít nhất 1 nhóm trạng thái bên dưới. Không cần thấy toàn bộ danh sách công việc — chỉ cần thấy phần tiêu đề là đủ cho Ảnh 2.

---

### 📸 Ảnh 3 — Chế độ Nhóm: danh sách công việc chia theo trạng thái

**Tên tệp:** `11-leader-tong-quan-buoc-03.webp`

**Mục tiêu:** Cho thấy danh sách công việc ở chế độ Nhóm — 3 nhóm trạng thái màu sắc khác nhau, và ô lọc nhân viên đang được thao tác.

**Trạng thái màn hình:**
- Chế độ **Nhóm** đang active
- Đã chọn loại việc có công việc ở cả 3 trạng thái: Chờ duyệt, Chưa xử lý, Đang xử lý
- Tất cả 3 nhóm đều đang mở (expanded, hiện danh sách thẻ công việc)
- Ô lọc nhân viên đang ở **"Tất cả"** — chưa lọc

**Bố cục danh sách trạng thái:**
```
● Chờ duyệt (2) ▲
┌──────────────────────────────────────┐
│ Tên công việc A            [Hành động] │  ← TaskCard, viewMode="lead"
│ Nguyễn Văn B • Nhận hàng             │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ Tên công việc B            [Hành động] │
└──────────────────────────────────────┘

● Chưa xử lý (3) ▲
┌──────────────────────────────────────┐
│ Tên công việc C            [Hành động] │
└──────────────────────────────────────┘
...

● Đang xử lý (2) ▲
┌──────────────────────────────────────┐
│ Tên công việc D            [Hành động] │
└──────────────────────────────────────┘
...
```

**Màu chấm tròn đầu mỗi nhóm:**
- ● **Chờ duyệt** → `bg-amber-500` (vàng đậm)
- ● **Chưa xử lý** → `bg-amber-400` (vàng nhạt)
- ● **Đang xử lý** → `bg-sky-400` (xanh dương nhạt) [chế độ Nhóm] hoặc `bg-sky-400` [chế độ Của tôi]

**Đánh dấu:** Viền màu #10B981 quanh **ô lọc nhân viên** (select dropdown "Nhân viên: [Tất cả ▼]") — điểm nhấn bước này là người dùng có thể lọc theo nhân viên cụ thể

**Điểm cần thấy rõ:**
1. Ít nhất **2 nhóm trạng thái** đang mở, mỗi nhóm có ít nhất 1 thẻ công việc
2. **Màu chấm tròn** trước tên mỗi nhóm (vàng đậm / vàng nhạt / xanh)
3. Tên nhân viên được giao việc xuất hiện trong từng thẻ công việc
4. Ô lọc nhân viên **"Nhân viên: Tất cả ▼"** hiện rõ trong khung tiêu đề

**Kỹ thuật chụp:**
Cần scroll cột bên phải đến vùng danh sách công việc (bên dưới khung tiêu đề). Chụp vừa đủ để thấy khung tiêu đề phía trên + 2–3 nhóm trạng thái bên dưới. Không cần thấy tất cả thẻ công việc.

---

### 📸 Ảnh 4 — Chế độ "Của tôi": công việc của chính Leader

**Tên tệp:** `11-leader-tong-quan-buoc-04.webp`

**Mục tiêu:** Cho thấy sự khác biệt khi chuyển sang chế độ "Của tôi" — tiêu đề đổi thành "Công Việc Của Tôi", không có ô lọc nhân viên, và chấm tròn vàng trên nút.

**Trạng thái màn hình:**
- Vừa bấm nút **Của tôi** → nút này đang active (nền xanh thương hiệu, chữ trắng)
- Nút **Nhóm** không còn active (nền trắng, chữ xám)
- Khung tiêu đề hiện **"Công Việc Của Tôi"** — không có ô lọc nhân viên
- Chấm tròn vàng bên cạnh chữ "Của tôi" vẫn thấy (nếu có việc chưa xong)
- Danh sách công việc bên dưới là việc của chính Leader

**Bố cục nút chuyển đổi (trạng thái Của tôi active):**
```
┌──────────────────────────────────────────┐
│ [      Nhóm      ] [■  Của tôi  🔴2  ]   │
│  ↑ không active      ↑ active (xanh)     │
│  bg-white text-gray   bg-brand-600       │
│                       text-white         │
│                       + chấm vàng số 2   │
└──────────────────────────────────────────┘
```

**Bố cục khung tiêu đề (chế độ Của tôi, đã chọn loại việc):**
```
┌─────────────────────────────────────────────────────────┐
│  rounded-xl border bg-white p-4 shadow-sm               │
│                                                         │
│  👤  Công Việc Của Tôi                                  │
│       • Loại việc:  Nhận hàng                           │
│                                                         │
│  (KHÔNG có ô lọc nhân viên — đây là điểm khác biệt)    │
│                                                         │
│  Đang thực hiện 3 công việc  •  1 chưa xử lý  •        │
│  2 đang xử lý  •  1 hoàn thành hôm nay (xanh lá)       │
└─────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **nút "Của tôi"** — nút đang active với nền xanh thương hiệu và chấm tròn vàng

**Điểm cần thấy rõ:**
1. Nút **"Của tôi"** đang active — nền xanh thương hiệu (`bg-brand-600`), chữ trắng
2. **Chấm tròn vàng** (`bg-amber-500`) bên cạnh chữ "Của tôi" hiển thị số việc chưa xong
3. Nút **"Nhóm"** không còn active — nền trắng, chữ xám
4. Khung tiêu đề hiện **"Công Việc Của Tôi"** (icon người đơn `UserIcon`, không phải `Users`)
5. **Không có** ô lọc nhân viên — đây là điểm phân biệt chính với chế độ Nhóm
6. Dòng thống kê: "Đang thực hiện X công việc" — cú pháp khác với chế độ Nhóm ("Đang xem X công việc")

**Kỹ thuật chuẩn bị:**
Đảm bảo Leader đang có ít nhất 1 công việc được giao cho bản thân trong loại việc đang chọn. Nếu danh sách trống (hiện "Bạn chưa có công việc nào cần làm"), hãy nhờ Admin giao thêm việc cho tài khoản Leader đang dùng.

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  Đăng nhập tài khoản Leader
  Chọn nhóm chat có ≥ 2 loại việc, mỗi loại có đủ công việc ở các trạng thái
  Đảm bảo cột bên phải đang mở
  Đảm bảo Leader đang có việc được giao cho bản thân
  ↓
Ảnh 1  →  Bấm vào tab "Công Việc" ở cột bên phải
           Chưa chọn loại việc (hoặc loại việc chưa được chọn)
           Chế độ Nhóm đang active, Của tôi không active
           → CHỤP (đánh dấu tab "Công Việc")
           ↓
Ảnh 2  →  Chọn một loại việc (qua thanh thông báo hoặc nhóm chat)
           Khung tiêu đề hiện tên loại việc + thống kê số lượng
           → CHỤP (đánh dấu toàn bộ khung tiêu đề thống kê)
           ↓
Ảnh 3  →  Scroll xuống xem danh sách công việc (vẫn ở chế độ Nhóm)
           Thấy ít nhất 2 nhóm trạng thái đang mở
           → CHỤP (đánh dấu ô lọc nhân viên)
           ↓
Ảnh 4  →  Bấm nút "Của tôi"
           Nút Của tôi active (xanh), nút Nhóm không active
           Khung tiêu đề đổi thành "Công Việc Của Tôi", không có ô lọc nhân viên
           Chấm tròn vàng hiện bên cạnh "Của tôi"
           → CHỤP (đánh dấu nút "Của tôi" đang active)
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

□ Ảnh 1: Tab "Công Việc" active, 2 nút Nhóm/Của tôi hiện rõ, dòng "Chọn loại việc"
□ Ảnh 2: Khung tiêu đề đầy đủ — tên phòng ban, loại việc, ô lọc nhân viên, thống kê số
□ Ảnh 3: Danh sách trạng thái ≥ 2 nhóm, màu chấm tròn đúng (vàng/xanh), ô lọc nổi bật
□ Ảnh 4: Nút "Của tôi" active (xanh) + chấm vàng, tiêu đề "Công Việc Của Tôi", KHÔNG có ô lọc
□ Dùng tài khoản Leader — không dùng Staff
□ Cột bên phải hiển thị song song với khung chat
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
                    ├── 11-leader-tong-quan-buoc-01.webp  ← tab Công Việc, chưa chọn loại việc
                    ├── 11-leader-tong-quan-buoc-02.webp  ← khung tiêu đề đủ thông tin
                    ├── 11-leader-tong-quan-buoc-03.webp  ← danh sách theo trạng thái, chế độ Nhóm
                    └── 11-leader-tong-quan-buoc-04.webp  ← nút Của tôi active, không có ô lọc
```

---

## Bảng màu trạng thái trong giao diện (để đánh dấu đúng)

| Trạng thái | Màu chấm tròn | Màu chữ / nhãn | Ghi chú |
|-----------|---------------|-----------------|---------|
| Chờ duyệt | `bg-amber-500` vàng đậm | `text-gray-600` | Nhóm trạng thái quan trọng nhất |
| Chưa xử lý | `bg-amber-400` vàng nhạt | `text-gray-600` | — |
| Đang xử lý | `bg-sky-400` xanh | `text-gray-600` | Chế độ Nhóm: `bg-sky-400`; Của tôi: `bg-sky-400` |
| Hoàn thành hôm nay | `bg-emerald-400` xanh lá | `text-gray-700` | **Chỉ có trong chế độ Của tôi** |

---

## Phân biệt với giao diện Staff

Khi chụp nhầm tài khoản Staff, cột bên phải sẽ trông như sau (KHÔNG phải giao diện cần chụp):

```
CỘT BÊN PHẢI — STAFF MODE (StaffModeContent)
│
├── [Thông Tin]  [Công Việc]
│
└── KHÔNG CÓ nút [Nhóm] / [Của tôi]   ← dấu hiệu sai tài khoản
    ↓
    Khung thống kê: "Công Việc Của Tôi trong [Loại việc]"
    (tương tự nhưng không có toggle Nhóm/Của tôi)
```

Nếu thấy giao diện này, hãy đăng xuất và đăng nhập lại bằng tài khoản Leader.

---

## Câu hỏi thường gặp khi chụp

**H: Chấm tròn vàng trên nút "Của tôi" không hiện?**
→ Leader chưa có việc nào chưa xong được giao cho bản thân trong loại việc đang chọn. Nhờ Admin giao thêm việc cho tài khoản Leader, hoặc chuyển sang loại việc khác mà Leader đang được giao việc.

**H: Không thấy nhóm "Chờ duyệt" trong danh sách?**
→ Chưa có công việc nào ở trạng thái `need_to_verified`. Nhờ một tài khoản Staff gửi "Chờ duyệt" cho 1 công việc trong loại việc đang chọn.

**H: Ô lọc nhân viên chỉ có 1 người (chính mình)?**
→ Nhóm chat chỉ có mình Leader, chưa có nhân viên nào. Nhờ Admin thêm thành viên vào nhóm.

**H: Cột bên phải quá hẹp, không thấy rõ nội dung?**
→ Kéo giữa thanh phân chia để mở rộng cột bên phải. Với độ rộng 1280px, cột bên phải nên chiếm khoảng 320–360px.

---

## Ghi chú bổ sung

**Nếu UI thay đổi sau khi chụp:**
Xem `docs/CONTENT_GUIDE.md` — Mục 10: *Update khi UI thay đổi*. Giữ nguyên tên tệp ảnh, chỉ thay nội dung.

**Câu hỏi & hỗ trợ:**
Liên hệ BA phụ trách hoặc tạo yêu cầu trong kho `Quoc-Nam-Guide`.

# Hướng Dẫn Chụp Hình — Bài 29: Mở danh sách tin đánh dấu và xem lại ngữ cảnh

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/29-bookmark-xem-lai.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Chuẩn bị trước khi chụp

### Tài khoản và dữ liệu

Dùng tài khoản **Staff**. Trước khi chụp, cần chuẩn bị sẵn:

| Điều kiện | Chi tiết |
|-----------|----------|
| Tin đã đánh dấu | Tối thiểu **4–5 tin nhắn** từ **2–3 nhóm chat khác nhau** |
| Nội dung tin nhắn | Có nghĩa, đủ dài để thấy bị cắt (hơn 100 ký tự) — ví dụ: _"Anh ơi, lô hàng sáng nay đã nhập xong, tổng 240 thùng, đang chờ phiếu ký duyệt từ kế toán trước khi chuyển kho."_ |
| Nhóm và cuộc trò chuyện | Tên hiển thị đúng trong danh sách (không phải "[Category]" hay "[Conversation]") |
| Cuộc trò chuyện đang mở | Khi chụp Ảnh 3, nên đang ở một nhóm **khác** với nhóm của tin nhắn sẽ bấm vào — để thấy hệ thống tự chuyển nhóm |

**Gợi ý chuẩn bị dữ liệu test (đánh dấu sẵn trước khi chụp):**
- _"Lịch họp tuần này: Thứ 2 lúc 9h tại phòng 3, thứ 4 lúc 14h online. Mọi người xác nhận tham dự trước 8h sáng ngày họp."_
- _"Anh ơi, lô hàng sáng nay đã nhập xong, tổng 240 thùng, đang chờ phiếu ký duyệt từ kế toán trước khi chuyển kho."_
- _"Nhớ cập nhật báo cáo tiến độ trước 17h hôm nay, gửi lên nhóm Kế hoạch để leader duyệt."_

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |
| Thanh địa chỉ | Ẩn hoặc crop ra khỏi ảnh |

### Màu và dạng đánh dấu ảnh

- Màu viền: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc 2–3px, hoặc mũi tên khi cần chỉ vào phần tử nhỏ
- **Đúng 1 điểm đánh dấu** mỗi ảnh — không dùng màu đỏ, không đánh dấu nhiều chỗ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Bảng Công cụ đang mở, ô Tin đánh dấu vừa được bấm — cột đang hiển thị

**Tên tệp:** `29-bookmark-xem-lai-buoc-01.webp`

**Mục tiêu:** Cho thấy cách mở cột Tin Đánh Dấu từ bảng Công cụ.

**Trạng thái màn hình:**
- Cột **Tin Đánh Dấu** (`PinnedMessagesPanel`) đã **thay thế danh sách cuộc trò chuyện** ở bên trái
- Danh sách đang hiển thị **ít nhất 2–3 tin nhắn** nhóm theo ngày
- Tiêu đề **"Tin Đánh Dấu (Tất cả)"** hiện rõ ở đầu cột

> Lưu ý: Ảnh 1 bài 28 chụp *bảng Công cụ đang mở chưa bấm*. Ảnh này chụp *sau khi đã bấm* — cột đã mở xong.

**Bố cục cần thấy:**
```
┌────────────────────────────────────────────────────────────────────┐
│ CỘT TRÁI (thay danh sách cuộc trò chuyện)                          │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ [🔍 Tìm kiếm...                                         ]   │   │
│ ├──────────────────────────────────────────────────────────────┤   │
│ │ Tin Đánh Dấu (Tất cả)                                       │   │
│ ├──────────────────────────────────────────────────────────────┤   │
│ │ Hôm nay                                                      │   │
│ ├──────────────────────────────────────────────────────────────┤   │
│ │  Nguyễn Văn A  -  10:25  12/03/2026                         │   │
│ │  "Lịch họp tuần này: Thứ 2 lúc 9h..."                       │   │
│ │  Nhóm Kho • Nhận hàng                                        │   │
│ ├──────────────────────────────────────────────────────────────┤   │
│ │  Trần Thị B  -  09:10  12/03/2026                           │   │
│ │  "Anh ơi, lô hàng sáng nay đã nhập..."                      │   │
│ │  Nhóm Kho • Đổi trả                                          │   │
│ └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
│             KHUNG CHAT CHÍNH (bên phải)                            │
│             [Đang hiển thị cuộc trò chuyện hiện tại]               │
└────────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh tiêu đề **"Tin Đánh Dấu (Tất cả)"** — dòng chữ `font-medium` ở đầu danh sách, phía dưới thanh tìm kiếm

**Điểm cần thấy rõ:**
1. Cột bên trái đang hiển thị **Tin Đánh Dấu** — không còn là danh sách nhóm chat thông thường
2. Tiêu đề **"Tin Đánh Dấu (Tất cả)"** hiện rõ
3. Ít nhất **2 hàng tin nhắn** trong danh sách, nhóm theo ngày ("Hôm nay" / "Hôm qua")
4. Mỗi hàng có 3 dòng thông tin: tên người gửi + giờ ngày, nội dung tin, tên nhóm • cuộc trò chuyện
5. Khung chat vẫn hiển thị bên phải (không bị che)

---

### 📸 Ảnh 2 — Ô Tìm kiếm đang có từ khóa, danh sách đã lọc

**Tên tệp:** `29-bookmark-xem-lai-buoc-02.webp`

**Mục tiêu:** Cho thấy tính năng tìm kiếm trong danh sách tin đánh dấu.

**Trạng thái màn hình:**
- Cột Tin Đánh Dấu đang mở
- Ô **Tìm kiếm** đang được focus và có **từ khóa đã nhập** (ví dụ: "họp" hoặc "lịch")
- Danh sách hiển thị **kết quả phù hợp** (hoặc danh sách đầy đủ nếu tính năng lọc chưa hoạt động — xem lưu ý bên dưới)

<br>

> **Lưu ý quan trọng về trạng thái tính năng:**
> Ô tìm kiếm trong `PinnedMessagesPanel` hiện tại là **Input tĩnh** — chưa có logic lọc kết nối (dòng code: `<Input placeholder="Tìm kiếm" className="h-9 text-sm" />` không có `onChange` hay `value`). Điều này có nghĩa là danh sách **không lọc** khi nhập.
>
> → Khi chụp, cứ nhập từ khóa vào ô (cursor đang ở trong ô, có chữ đã nhập), chụp trạng thái **đang nhập**. Danh sách bên dưới hiện toàn bộ — không sao.
> → Nội dung bài viết đã viết *"Nhập từ khóa vào ô Tìm kiếm để lọc nhanh"* và phần lỗi thường gặp đã ghi chú tính năng đang hoàn thiện.

**Bố cục cần thấy:**
```
┌────────────────────────────────────────────────────────────────────┐
│ CỘT TIN ĐÁNH DẤU                                                   │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ [🔍  họp                                             ] ◄──  │   │
│ │         ↑ ô đang focus, có từ khóa đã nhập                  │   │
│ ├──────────────────────────────────────────────────────────────┤   │
│ │ Tin Đánh Dấu (Tất cả)                                       │   │
│ ├──────────────────────────────────────────────────────────────┤   │
│ │ Hôm nay                                                      │   │
│ ├──────────────────────────────────────────────────────────────┤   │
│ │  Nguyễn Văn A  -  10:25  12/03/2026                         │   │
│ │  "Lịch họp tuần này: Thứ 2 lúc 9h..."   ← có chứa "họp"    │   │
│ │  Nhóm Kho • Nhận hàng                                        │   │
│ └──────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô Tìm kiếm** — input `h-9 text-sm` có placeholder "Tìm kiếm", đang có chữ và đang được focus (viền xanh của trình duyệt hoặc viền focus của component)

**Điểm cần thấy rõ:**
1. Ô tìm kiếm **đang focus** và có từ khóa đã nhập (vài ký tự ngắn — 3–5 ký tự là đủ, ví dụ: "lịch", "họp", "nhập")
2. Con trỏ nhấp nháy trong ô (nếu chụp kịp)
3. Từ khóa nhập vào có liên quan đến nội dung một tin nhắn đang hiển thị bên dưới — người xem bài sẽ hiểu mục đích

---

### 📸 Ảnh 3 — Tin nhắn vừa được bấm, đang nổi sáng trong cuộc trò chuyện gốc

**Tên tệp:** `29-bookmark-xem-lai-buoc-03.webp`

**Mục tiêu:** Cho thấy hiệu ứng "nhảy về vị trí" sau khi bấm vào tin nhắn trong danh sách.

**Trạng thái màn hình:**
- Vừa bấm vào một hàng tin nhắn trong cột Tin Đánh Dấu
- Nếu tin nhắn đó thuộc **nhóm khác**: hệ thống đã chuyển sang nhóm đó (tên nhóm thay đổi ở header)
- Tin nhắn đang được **nổi sáng**: nền vàng (`yellow-200`), viền cam (`orange-400`), hiệu ứng kéo dài 2,5 giây
- Cột Tin Đánh Dấu **vẫn còn mở** ở bên trái

**Kỹ thuật chụp — quan trọng:**
Hiệu ứng nổi sáng chỉ kéo dài **2,5 giây** rồi tắt. Cần chụp nhanh:
1. Bấm vào tin nhắn trong danh sách
2. Chờ ~0,3–0,5 giây (để tin nhắn cuộn vào tầm nhìn)
3. **Chụp ngay** — trong khoảng 0,5–2 giây sau đó

Nếu lỡ hiệu ứng tắt, bấm lại vào cùng tin nhắn đó trong danh sách để kích hoạt lại.

**Bố cục cần thấy:**
```
┌────────────────────────────────────────────────────┬───────────────┐
│ CỘT TIN ĐÁNH DẤU (vẫn mở)                         │ KHUNG CHAT    │
│  ...                                               │               │
│  ■ Nguyễn Văn A  (đang được chọn)                  │ [Các tin nhắn │
│    "Lịch họp tuần này..."                          │  khác phía    │
│    Nhóm Kho • Nhận hàng                            │  trên]        │
│  ...                                               │               │
│                                                    │ ┌───────────┐ │
│                                                    │ │ nền VÀNG  │ │  ← tin nhắn đang
│                                                    │ │ viền CAM  │ │    nổi sáng
│                                                    │ │ "Lịch họp │ │
│                                                    │ │  tuần..." │ │
│                                                    │ └───────────┘ │
│                                                    │               │
│                                                    │ [Các tin nhắn │
│                                                    │  khác phía    │
│                                                    │  dưới]        │
└────────────────────────────────────────────────────┴───────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **bong bóng tin nhắn đang nổi sáng** (nền vàng, viền cam) trong khung chat bên phải

**Điểm cần thấy rõ:**
1. **Nền vàng** (`yellow-200`) trên bong bóng tin nhắn — màu này xuất hiện từ animation `highlight-pulse`
2. **Viền cam** (`orange-400`, 2px) xung quanh bong bóng
3. Tin nhắn ở **giữa màn hình** (hệ thống đã `scrollIntoView({ block: "center" })`) — không bị cắt ở trên hay dưới
4. Cột Tin Đánh Dấu vẫn hiển thị bên trái — người xem thấy 2 phần song song
5. (Tùy chọn) Nếu hệ thống đã chuyển nhóm, header khung chat hiển thị tên nhóm mới — điều này minh họa tính năng "chuyển nhóm tự động"

**Nếu không chụp kịp hiệu ứng:** Có thể crop ảnh sau khi hiệu ứng tắt và dùng công cụ vẽ để mô phỏng nền vàng + viền cam lên bong bóng tin nhắn đúng vị trí. Tuy nhiên chụp thật sẽ chân thực hơn.

---

### 📸 Ảnh 4 — Biểu tượng bỏ đánh dấu xuất hiện khi di chuột vào hàng trong danh sách

**Tên tệp:** `29-bookmark-xem-lai-buoc-04.webp`

**Mục tiêu:** Cho thấy cách bỏ đánh dấu trực tiếp từ danh sách mà không cần quay lại cuộc trò chuyện.

**Trạng thái màn hình:**
- Cột Tin Đánh Dấu đang mở, có danh sách tin nhắn
- Đang **di chuột vào một hàng** tin nhắn — hàng đó có nền sáng hơn (`hover:bg-brand-50`)
- Biểu tượng **ngôi sao có gạch** (`StarOff`, 17px) **đang hiển thị** ở góc trên bên phải của hàng

**Bố cục cần thấy:**
```
┌──────────────────────────────────────────────────────────────────┐
│ CỘT TIN ĐÁNH DẤU                                                 │
│                                                                   │
│  Hôm nay                                                         │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ Nguyễn Văn A  -  10:25  12/03/2026           [☆̶]  ◄── đây │  │
│  │ "Lịch họp tuần này: Thứ 2 lúc 9h tại phòng 3..."         │  │
│  │ Nhóm Kho • Nhận hàng                                       │  │
│  │  ↑ nền sáng hơn (hover:bg-brand-50)                       │  │
│  └────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ Trần Thị B  -  09:10  12/03/2026                          │  │
│  │ "Anh ơi, lô hàng sáng nay đã nhập xong..."               │  │
│  │ Nhóm Kho • Đổi trả                                         │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **biểu tượng ngôi sao có gạch** (`StarOff`) ở góc trên bên phải của hàng đang hover — kèm mũi tên chỉ vào nếu biểu tượng nhỏ khó thấy

**Điểm cần thấy rõ:**
1. **Biểu tượng `StarOff`** (17px, `text-brand-500`) xuất hiện ở góc trên bên phải — đây là nút "Bỏ đánh dấu"
2. Hàng đang hover có **nền sáng hơn** so với các hàng khác (`hover:bg-brand-50`)
3. Con trỏ chuột đang **nằm trong vùng hàng** — biểu tượng chỉ hiện khi hover (`opacity-0 group-hover:opacity-100`)
4. Các hàng còn lại trong danh sách không có biểu tượng này (do không hover)

**Kỹ thuật chụp:**
- Di chuột vào hàng → biểu tượng hiện ra với animation fade-in ngắn → chụp ngay
- Nếu dùng công cụ chụp màn hình có delay, đặt delay 2–3 giây để kịp di chuột vào đúng vị trí

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị
  Đăng nhập tài khoản Staff
  Đánh dấu sẵn 4–5 tin nhắn từ 2–3 nhóm khác nhau
  Chọn một nhóm bất kỳ để đang hiển thị trong khung chat chính
  ↓
Ảnh 1  →  Bấm Công cụ → bấm Tin đánh dấu → cột mở ra
           Danh sách hiện ≥ 2 tin nhắn, thấy tiêu đề "Tin Đánh Dấu (Tất cả)"
           → CHỤP (đánh dấu tiêu đề "Tin Đánh Dấu (Tất cả)")
           ↓
Ảnh 2  →  Bấm vào ô Tìm kiếm ở đầu cột
           Nhập 3–5 ký tự có liên quan đến một tin trong danh sách
           → CHỤP (đánh dấu ô Tìm kiếm đang focus và có chữ)
           ↓
Ảnh 3  →  Bấm vào một hàng tin nhắn trong danh sách
           (Chọn tin thuộc nhóm KHÁC với nhóm đang mở — để thấy tự chuyển nhóm)
           Chờ ~0,5 giây để tin nhắn cuộn vào giữa màn hình
           → CHỤP NGAY khi tin nhắn đang nổi sáng vàng-cam
           (đánh dấu bong bóng đang nổi sáng)
           ↓
Ảnh 4  →  Quay lại cột Tin Đánh Dấu (vẫn còn mở)
           Di chuột vào một hàng tin nhắn bất kỳ
           → CHỤP khi biểu tượng StarOff hiện ở góc phải hàng
           (đánh dấu biểu tượng StarOff)
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
□ Không có thông tin nhạy cảm (tên thật, số điện thoại, nội dung nội bộ)

□ Ảnh 1: Cột Tin Đánh Dấu ĐÃ MỞ, tiêu đề "Tin Đánh Dấu (Tất cả)" thấy rõ, ≥ 2 hàng tin
□ Ảnh 2: Ô Tìm kiếm ĐANG FOCUS, có từ khóa đã nhập (3–5 ký tự)
□ Ảnh 3: Bong bóng tin nhắn đang NỔISÁNG (nền vàng + viền cam), cột trái vẫn mở
□ Ảnh 4: Biểu tượng StarOff ĐANG HIỆN ở góc phải hàng đang hover
□ Dữ liệu tin nhắn có nghĩa — tên nhóm, nội dung, tên người gửi đều thật
□ Ảnh rõ nét, không bị mờ hoặc bị cắt xén sát mép
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
                    ├── 29-bookmark-xem-lai-buoc-01.webp  ← cột Tin Đánh Dấu đã mở, danh sách hiển thị
                    ├── 29-bookmark-xem-lai-buoc-02.webp  ← ô Tìm kiếm đang focus, có từ khóa
                    ├── 29-bookmark-xem-lai-buoc-03.webp  ← tin nhắn nổi sáng vàng-cam trong khung chat
                    └── 29-bookmark-xem-lai-buoc-04.webp  ← biểu tượng bỏ đánh dấu khi hover hàng
```

---

## Tham khảo kỹ thuật — hiệu ứng nổi sáng

Khi bấm vào tin nhắn trong danh sách, hàm `handleScrollToMessage` trong `useJumpToMessage.ts` thực hiện:

```
Bước 1 — Kiểm tra cuộc trò chuyện
  Nếu tin nhắn thuộc nhóm KHÁC đang mở:
    → toast.info("Đang chuyển đến cuộc trò chuyện...")
    → setSelectedConversation(newTarget)  → chuyển nhóm
    → Sau 1 giây: tìm phần tử trong DOM và gọi scrollToAndHighlight()

  Nếu tin nhắn thuộc nhóm ĐANG MỞ:
    → Kiểm tra phần tử trong DOM ngay
    → Nếu có: gọi scrollToAndHighlight() sau 500ms
    → Nếu không có (tin quá cũ): gọi getMessagesAround() để tải thêm

Bước 2 — scrollToAndHighlight(element)
  element.scrollIntoView({ behavior: "smooth", block: "center" })
  element.classList.add("message-highlighted")
  Sau 2500ms: element.classList.remove("message-highlighted")
```

**CSS animation (`message-highlighted`):**
```css
.message-highlighted .message-bubble {
  animation: highlight-pulse 2.5s ease-in-out;
  border: 2px solid rgb(251 146 60);  /* orange-400 */
}

@keyframes highlight-pulse {
  0%          { background-color: transparent; }
  10%, 90%    { background-color: rgb(254 240 138); }  /* yellow-200 */
  100%        { background-color: transparent; }
}
```

→ Hiệu ứng: **fade in vàng** (10%) → **giữ vàng** (10–90%) → **fade out** (90–100%), kèm viền cam cố định suốt 2,5 giây.

---

## Phân biệt bài 28 và bài 29

| | Bài 28 — Đánh dấu tin nhắn | Bài 29 — Xem lại danh sách |
|--|--|--|
| **Mục tiêu** | Đánh dấu / bỏ đánh dấu 1 tin nhắn cụ thể | Mở danh sách tổng hợp và điều hướng |
| **Điểm bắt đầu** | Đang đọc chat, di chuột vào tin nhắn | Bất kỳ đâu trong hệ thống |
| **Ảnh trọng tâm** | Nút ngôi sao trên bong bóng, nhãn "Đã đánh dấu" | Cột Tin Đánh Dấu, hiệu ứng nổi sáng |
| **Kết quả** | Trạng thái `isStarred` thay đổi | Nhảy về đúng vị trí trong cuộc trò chuyện |

→ Hai bài nên chụp **cùng một phiên** để dữ liệu nhất quán (cùng tài khoản, cùng dữ liệu test).

---

## Câu hỏi thường gặp khi chụp

**H: Bấm vào tin nhắn nhưng hệ thống không chuyển nhóm, chỉ cuộn trong nhóm hiện tại?**
→ Tin nhắn đó thuộc nhóm đang mở. Để chụp được cảnh "tự chuyển nhóm", hãy chọn tin nhắn thuộc nhóm **khác** với nhóm đang hiển thị trong khung chat.

**H: Không chụp kịp hiệu ứng vàng-cam — 2,5 giây quá nhanh?**
→ Dùng tính năng chụp màn hình có độ trễ (delay capture) của hệ điều hành hoặc công cụ như Snagit. Đặt delay 2 giây, bấm chụp, rồi bấm vào hàng tin nhắn. Hoặc dùng tổ hợp phím chụp màn hình ngay sau khi bấm (Windows: Win + Shift + S; Mac: Cmd + Shift + 4).

**H: Danh sách hiện "[Category]" thay vì tên nhóm thật?**
→ Dữ liệu danh mục chưa tải về bộ nhớ đệm. Điều hướng qua lại giữa các nhóm chat 1–2 lần rồi mở lại cột Tin Đánh Dấu — khi đó dữ liệu nhóm đã sẵn sàng.

**H: Biểu tượng `StarOff` không hiện khi di chuột?**
→ Cần di chuột **chính xác vào vùng hàng** (`group relative cursor-pointer p-3`). Di chuột vào giữa hàng — không phải vào đường kẻ phân cách giữa hai hàng.

---

## Ghi chú bổ sung

### Liên kết giữa bài 28 và bài 29
Hai bài tạo thành một cặp hoàn chỉnh cho tính năng đánh dấu tin nhắn:
- Bài 28 (`28-bookmark-danh-dau`): **Cách tạo** tin đánh dấu
- Bài 29 (`29-bookmark-xem-lai`): **Cách dùng** danh sách tin đánh dấu

Trong bài 28, phần *Bài liên quan* đã liên kết đến bài 29. Ngược lại, bài 29 liên kết về bài 28.

### Nếu UI thay đổi sau khi chụp
Xem hướng dẫn cập nhật tại `docs/CONTENT_GUIDE.md` — Mục 10: *Update khi UI thay đổi*.
Giữ nguyên tên tệp ảnh, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong kho `Quoc-Nam-Guide`.

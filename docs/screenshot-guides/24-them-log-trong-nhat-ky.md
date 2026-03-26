# Hướng Dẫn Chụp Hình — Bài 24: Thêm log & trao đổi trong Nhật ký

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/24-them-log-trong-nhat-ky.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Chuẩn bị trước khi chụp

### Tài khoản

Dùng bất kỳ tài khoản nào (Staff / Leader / Admin). Khuyến nghị dùng **Staff** để nhất quán chuỗi bài. Quan trọng là tài khoản đang đứng **bên trong panel Nhật ký** của một task.

### Dữ liệu test

| Cần có | Chi tiết |
|--------|---------|
| Task có Nhật ký đang mở | Panel `TaskLogThreadSheet` đang hiển thị |
| Ô soạn thảo sẵn sàng | Chưa có nội dung gì trong ô (sạch) |
| Có ít nhất 1 tệp PDF/Word/ảnh trên máy | Để chụp bước đính kèm tệp |

> Nối tiếp từ bài 23: nếu vừa chụp xong bài 23 và panel Nhật ký đang mở, dùng ngay — không cần thoát ra.

### Thiết lập trình duyệt

| Thông số | Giá trị |
|----------|---------|
| Trình duyệt | Chrome |
| Thu phóng | 100% |
| Chiều rộng cửa sổ | **1280px** |

### Màu và dạng đánh dấu

- Màu viền: **#10B981** (xanh lá emerald)
- Dạng: viền bo góc (2–3px), mũi tên khi phần tử quá nhỏ
- **1 điểm đánh dấu** mỗi ảnh — không dùng màu đỏ

---

## Chi tiết từng ảnh

---

### 📸 Ảnh 1 — Ô soạn thảo đang có nội dung, nút Gửi sáng lên

**Tên tệp:** `24-them-log-buoc-01.webp`

**Trạng thái màn hình:**
- Panel Nhật ký đang mở
- Ô soạn thảo (phần dưới cùng panel) **đang chứa văn bản** — ví dụ: "Anh ơi em cần xác nhận thêm về yêu cầu này ạ"
- Nút **Gửi** (mũi tên →) ở góc phải **đang sáng** (`bg-brand-600`, không bị mờ)
- Nút vẫn chưa được bấm

**Bố cục vùng soạn thảo cần thấy:**
```
┌──────────────────────────────────────────────────────────┐
│  (Phần luồng tin nhắn phía trên — đã cuộn)               │
├──────────────────────────────────────────────────────────┤
│ THANH SOẠN TIN (border-t, bg-white, px-4 py-3)           │
│                                                          │
│  [📎] [🖼️]  Anh ơi em cần xác nhận thêm...  [→] ◄──────── ĐÁNH DẤU
│                                                          │
│  Tin nhắn trong nhật ký sẽ được lưu riêng...             │
└──────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **nút Gửi** (mũi tên →, `bg-brand-600 text-white`, đang sáng)

**Điểm cần thấy rõ:**
1. Ô soạn thảo chứa văn bản tiếng Việt (nội dung tự nhiên, không phải "test 123")
2. Nút Gửi **sáng** rõ (nền xanh brand, không bị mờ `disabled:bg-gray-300`)
3. Dòng chú thích nhỏ bên dưới: _"Tin nhắn trong nhật ký sẽ được lưu riêng cho task này, không làm rối hội thoại chính."_

**Ghi chú về ô soạn thảo:**
Ô soạn thảo là `MentionInputInline` — về mặt nhìn trông như ô nhập thông thường, nhưng hỗ trợ gợi ý @tên khi gõ `@`. Để ảnh tự nhiên hơn, không cần gõ `@` — chỉ cần nội dung văn bản bình thường.

---

### 📸 Ảnh 2 — Ô xem trước tệp đính kèm xuất hiện bên trên thanh soạn tin

**Tên tệp:** `24-them-log-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm nút **kẹp ghim** (📎) và chọn 1 tệp (ví dụ: `bao-cao.pdf`)
- Ô xem trước tệp (`FilePreview`) hiển thị **bên trên ô soạn thảo**
- Thấy tên tệp, dung lượng, và nút ✕ để bỏ tệp
- Nút Gửi đã sáng (vì đã có tệp — `canSendWithoutText={selectedFiles.length > 0}`)

**Bố cục vùng cần thấy:**
```
┌──────────────────────────────────────────────────────────┐
│  (Phần luồng phía trên)                                  │
├──────────────────────────────────────────────────────────┤
│ Ô XEM TRƯỚC TỆP (border-t, bg-gray-50 hoặc bg-white)    │
│  ┌─────────────────────────────────────────────────┐     │
│  │ 📄 bao-cao.pdf                  128 KB    [✕]   │◄─── ĐÁNH DẤU
│  └─────────────────────────────────────────────────┘     │
├──────────────────────────────────────────────────────────┤
│ THANH SOẠN TIN                                           │
│  [📎] [🖼️]  Nhập nội dung...                      [→]   │
│  Tin nhắn trong nhật ký...                               │
└──────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **ô xem trước tệp** (toàn bộ khung chứa tên tệp + nút ✕)

**Điểm cần thấy rõ:**
1. Tên tệp hiển thị rõ — dùng tên tệp có nghĩa (ví dụ: `bao-cao-thang-3.pdf`, không phải `file1.pdf`)
2. Dung lượng tệp (ví dụ: 128 KB)
3. Nút ✕ để bỏ tệp — ở góc phải của khung xem trước
4. Ô soạn thảo vẫn trống (chưa gõ) — cho thấy có thể gửi chỉ với tệp, không cần văn bản

**Ghi chú:**
- Bấm nút 📎 sẽ mở hộp chọn tệp của hệ điều hành. Chọn xong, ô xem trước xuất hiện ngay.
- Nếu chụp bằng PDF: tên tệp sẽ có biểu tượng PDF. Nếu chụp bằng ảnh: sẽ có ảnh thu nhỏ.
- Ưu tiên dùng **PDF** vì dễ nhận ra hơn là ảnh thông thường (tránh nhầm với bài 25 về gửi ảnh/video).

---

### 📸 Ảnh 3 — Nút Gửi đang xử lý (vòng tròn xoay)

**Tên tệp:** `24-them-log-buoc-03.webp`

**Trạng thái màn hình:**
- Đã bấm nút Gửi
- Nút Gửi hiện **vòng tròn xoay** (`Loader2 animate-spin`) thay cho biểu tượng mũi tên
- Ô soạn thảo bị vô hiệu hoá (`disabled`) trong lúc gửi

**Đây là ảnh khó nhất — vòng xoay chỉ hiện ~0.5 giây**

**3 cách chụp (chọn 1):**

**Cách A — Làm chậm mạng bằng DevTools (khuyến nghị):**
1. Nhấn **F12** → chọn tab **Mạng (Network)**
2. Đổi từ "Không giới hạn" sang **Slow 3G**
3. Gõ nội dung vào ô soạn thảo → bấm Gửi → vòng xoay xuất hiện 3–5 giây → chụp
4. Sau khi chụp: đổi lại "Không giới hạn"

**Cách B — Quay màn hình rồi trích khung:**
1. Dùng OBS / ShareX / Loom quay màn hình toàn bộ thao tác
2. Từ video: tua đến đúng lúc vòng xoay hiển thị → xuất thành ảnh WebP/PNG

**Cách C — Dùng ảnh thay thế:**
Nếu không chụp được vòng xoay: chụp **ngay sau khi bấm Gửi** — nút bị mờ, ô soạn thảo bị vô hiệu hoá. Dùng mũi tên đánh dấu vào vùng nút đang mờ.

**Bố cục vùng cần thấy:**
```
┌──────────────────────────────────────────────────────────┐
│ THANH SOẠN TIN                                           │
│                                                          │
│  [📎] [🖼️]  (ô bị mờ/vô hiệu)        [ ⟳ ] ◄────────── ĐÁNH DẤU
│                                                          │
│  Tin nhắn trong nhật ký...                               │
└──────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **nút Gửi đang có vòng xoay** (góc phải thanh soạn tin)

---

### 📸 Ảnh 4 — Tin nhắn vừa gửi xuất hiện ở bên phải luồng

**Tên tệp:** `24-them-log-buoc-04.webp`

**Trạng thái màn hình:**
- Tin nhắn vừa gửi thành công
- Tin nhắn **của mình** hiển thị ở **bên phải** luồng (`isOwn = msg.senderId === user?.id`)
- Ô soạn thảo đã trắng, sẵn sàng nhập tiếp
- Cuộn tự động xuống cuối luồng (`bottomRef.scrollIntoView`)

**Bố cục luồng sau khi gửi:**
```
┌──────────────────────────────────────────────────────────┐
│ LUỒNG TIN NHẮN (bg-gray-50)                              │
│                                                          │
│  ── 24/03/2026 ──────────────────────────────── date ──  │
│                                                          │
│  ⚙  [Tên] đã chuyển trạng thái... (SYS pill xám)        │
│                                                          │
│                    [Avatar] Tên của tôi   14:32          │
│                ┌──────────────────────────────────┐      │
│                │ Anh ơi em cần xác nhận thêm về   │ ◄─── ĐÁNH DẤU
│                │ yêu cầu này ạ                    │      │
│                └──────────────────────────────────┘      │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ THANH SOẠN TIN                                           │
│  [📎] [🖼️]  Nhập nội dung...  (ô đã trắng)      [→]   │
└──────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **bong bóng tin nhắn vừa gửi** (bên phải luồng)

**Điểm cần thấy rõ:**
1. Bong bóng tin nhắn **căn phải** — phân biệt với tin nhắn người khác (căn trái)
2. Nội dung tin nhắn trùng với nội dung đã nhập ở Ảnh 1 — tính liên tục của flow
3. Ô soạn thảo **đã trắng** — xác nhận gửi thành công, sẵn sàng nhập tiếp
4. Giờ gửi hiển thị bên phải bên trên bong bóng

**Lưu ý về màu bong bóng:**
- Bong bóng của mình (`isOwn = true`): nền màu brand (xanh dương hệ thống) hoặc trắng tuỳ thiết kế `MessageBubbleSimple`
- Bong bóng người khác (`isOwn = false`): nền trắng, căn trái, có avatar

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị → Mở panel Nhật ký của task bất kỳ
            Đảm bảo ô soạn thảo đang trống
            Có sẵn 1 tệp PDF trên máy để đính kèm
            ↓
Ảnh 1 → Gõ nội dung vào ô soạn thảo (ví dụ: "Anh ơi em cần xác nhận thêm ạ")
         Nút Gửi sáng lên → CHỤP (đánh dấu nút Gửi)
         CHƯA bấm Gửi
         ↓
Ảnh 2 → Xoá sạch ô soạn thảo (Ctrl+A → Delete)
         Bấm nút kẹp ghim 📎 → chọn tệp PDF
         Ô xem trước tệp xuất hiện → CHỤP (đánh dấu ô xem trước)
         CHƯA bấm Gửi
         ↓
         Lựa chọn: giữ tệp đính kèm đó để gửi, HOẶC xoá tệp rồi gõ lại văn bản
         (Khuyến nghị: xoá tệp → gõ lại "Anh ơi em cần xác nhận thêm ạ" để flow nhất quán)
         ↓
Ảnh 3 → [Nếu dùng DevTools: bật Slow 3G]
         Bấm nút Gửi → vòng tròn xoay xuất hiện → CHỤP NGAY (đánh dấu nút đang xoay)
         [Nếu dùng DevTools: tắt Slow 3G sau khi chụp]
         ↓
Ảnh 4 → Đợi tin nhắn xuất hiện trong luồng (0.5–2 giây)
         Luồng tự cuộn xuống cuối, tin nhắn mình ở bên phải → CHỤP (đánh dấu bong bóng)
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
□ Ảnh 1: ô soạn thảo CÓ văn bản + nút Gửi ĐANG SÁNG
□ Ảnh 2: ô xem trước tệp ĐANG HIỂN THỊ bên trên thanh soạn tin
□ Ảnh 3: nút Gửi ĐANG CÓ vòng xoay (hoặc đang mờ disabled)
□ Ảnh 4: bong bóng tin nhắn của mình CĂN PHẢI + ô soạn thảo ĐÃ TRẮNG
□ Nội dung tin nhắn trong Ảnh 1 và Ảnh 4 TRÙNG nhau (cùng một câu)
□ Không dùng nội dung test kiểu "test 123" hay "aaaa"
□ Tên tệp đính kèm trong Ảnh 2 có nghĩa (ví dụ: bao-cao-thang-3.pdf)
□ Ảnh rõ nét, không mờ, không che khuất phần quan trọng
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
                    ├── 24-them-log-buoc-01.webp  ← ô soạn thảo có văn bản
                    ├── 24-them-log-buoc-02.webp  ← ô xem trước tệp đính kèm
                    ├── 24-them-log-buoc-03.webp  ← nút Gửi đang xoay
                    └── 24-them-log-buoc-04.webp  ← tin nhắn xuất hiện bên phải
```

---

## Giải phẫu thanh soạn tin

Tham khảo để kiểm tra ảnh trước khi nộp:

```
┌──────────────────────────────────────────────────────────────┐
│ THANH SOẠN TIN  (border-t border-gray-200, bg-white)         │
│  flex items-end gap-2  ·  px-4 py-3                          │
│                                                              │
│  ┌──┐  ┌──┐  ┌─────────────────────────────────┐  ┌──┐ ┌──┐│
│  │📎│  │🖼️│  │  Nhập nội dung...  (flex-1)     │  │⚡│ │→ ││
│  └──┘  └──┘  └─────────────────────────────────┘  └──┘ └──┘│
│  [nút  [nút  [MentionInputInline — ô soạn thảo chính]  [nút ││
│  tệp]  ảnh]                                           nhanh] ││
│                                                        [gửi] ││
│                                                              │
│  "Tin nhắn trong nhật ký sẽ được lưu riêng cho task này,    │
│   không làm rối hội thoại chính."  ← text-[10px] gray-400   │
└──────────────────────────────────────────────────────────────┘
```

| Nút | Biểu tượng | Hành động | Ghi chú |
|-----|-----------|-----------|---------|
| Đính kèm tệp | 📎 Paperclip | Mở hộp chọn tệp hệ điều hành | Chấp nhận: PDF, Word, Excel, JPG, PNG, WEBP, MP4 |
| Đính kèm ảnh | 🖼️ ImageIcon | Mở hộp chọn tệp — chỉ ảnh | Chấp nhận: định dạng ảnh theo `FILE_CATEGORIES.IMAGE` |
| Tin nhắn nhanh | ⚡ MessageSquareText | Mở danh sách tin nhắn đặt sẵn | **Chỉ hiện khi có tin nhắn nhanh** (`quickMessageCount > 0`) |
| Gửi | → SendHorizonal | Gửi tin nhắn | Mờ khi không có nội dung VÀ không có tệp đính kèm |

---

## Phân biệt nút Gửi ở 3 trạng thái

| Trạng thái | Hình dạng nút | Màu nền | Bấm được? |
|------------|--------------|---------|----------|
| Chưa có nội dung & chưa có tệp | Biểu tượng → mờ | `bg-gray-300` | ❌ Không |
| Có nội dung hoặc có tệp | Biểu tượng → sáng | `bg-brand-600` | ✅ Được |
| Đang gửi | Vòng tròn xoay (`Loader2`) | `bg-brand-600` | ❌ Bị khoá |

> Ảnh 1 cần trạng thái **hàng 2** (sáng). Ảnh 3 cần trạng thái **hàng 3** (đang xoay).

---

## Lưu ý đặc biệt: Ảnh 2 và bài 25

Bài **25 (gửi ảnh/video trong Nhật ký)** sẽ chụp chi tiết hơn về luồng đính kèm hình ảnh. Ảnh 2 của bài này chỉ cần **minh hoạ khái quát** rằng ô xem trước xuất hiện — không cần chi tiết như bài 25. Dùng **tệp PDF** thay vì ảnh để tránh trùng lặp nội dung chụp giữa 2 bài.

---

## Ghi chú bổ sung

### Khi UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên tệp, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong kho `Quoc-Nam-Guide`.

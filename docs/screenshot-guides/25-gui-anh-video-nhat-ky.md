# Hướng Dẫn Chụp Hình — Bài 25: Gửi ảnh/video trong Nhật ký

**Dành cho:** BA, QA (người chụp hình)
**Bài tương ứng:** `guide-site/src/content/web/25-gui-anh-video-nhat-ky.mdx`
**Số ảnh cần chụp:** 4 ảnh
**Cập nhật lần cuối:** 2026-03-24

---

## Chuẩn bị trước khi chụp

### Tài khoản

Dùng bất kỳ tài khoản nào (Staff / Leader / Admin). Quan trọng là đang đứng **bên trong panel Nhật ký** của một task.

### Tệp ảnh dùng để chụp

Chuẩn bị sẵn **3 tệp ảnh thực** (không phải ảnh giả tạo) để chụp bài này:

| Tệp | Yêu cầu | Mục đích |
|-----|---------|---------|
| `anh-bao-cao-1.png` | PNG hoặc JPG, dưới 5 MB | Tệp chính để chụp Ảnh 1–3 |
| `anh-bao-cao-2.png` | Cùng định dạng, khác nội dung | Dùng thêm để chụp Ảnh 4 (chế độ thư viện) |
| `anh-bao-cao-3.png` | Tuỳ chọn | Tăng tính thực tế cho ô xem trước nhiều tệp |

> **Dùng ảnh thực** — nên là ảnh chụp màn hình giao diện hệ thống hoặc tài liệu thực tế. Tránh dùng ảnh ngẫu nhiên từ internet để ảnh hướng dẫn trông chuyên nghiệp và nhất quán với sản phẩm.

> **Không dùng video cho Ảnh 1–3** — chụp toàn bộ flow với ảnh trước. Nếu muốn minh hoạ thêm về video, ghi chú riêng trong hướng dẫn nội bộ.

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

### 📸 Ảnh 1 — Thanh soạn tin, nút hình ảnh chưa bấm

**Tên tệp:** `25-gui-anh-video-buoc-01.webp`

**Trạng thái màn hình:**
- Panel Nhật ký đang mở
- Thanh soạn tin hiển thị đầy đủ ở cuối panel
- Ô xem trước tệp **chưa có gì** (chưa chọn ảnh)
- Nút hình ảnh (🖼️ `ImageIcon`) chưa bấm — **chưa có hộp chọn tệp nào bật lên**

**Bố cục thanh soạn tin cần thấy:**
```
┌─────────────────────────────────────────────────────────┐
│ THANH SOẠN TIN  (border-t, bg-white)                    │
│                                                         │
│  [📎]  [🖼️] ◄──── ĐÁNH DẤU    [ô soạn thảo...]  [→]   │
│                                                         │
│  Tin nhắn trong nhật ký sẽ được lưu riêng...            │
└─────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **nút hình ảnh** (🖼️ `ImageIcon`, `rounded-lg p-2`, nằm ngay bên phải nút kẹp ghim)

**Phân biệt 2 nút trong thanh soạn tin:**

| Nút | Biểu tượng | Vị trí | Chấp nhận định dạng |
|-----|-----------|--------|-------------------|
| Kẹp ghim (📎) | Paperclip | Trái ngoài cùng | PDF, Word, Excel, ảnh, MP4 |
| **Hình ảnh (🖼️)** | ImageIcon | Ngay bên phải kẹp ghim | Chỉ ảnh: JPG, PNG, GIF, WEBP |

> Ảnh này cần làm rõ **nút nào cần bấm** khi muốn gửi ảnh — đây là điểm dễ nhầm nhất với bài 24.

---

### 📸 Ảnh 2 — Ô xem trước ảnh thu nhỏ sau khi chọn tệp

**Tên tệp:** `25-gui-anh-video-buoc-02.webp`

**Trạng thái màn hình:**
- Đã bấm nút 🖼️ và chọn **2–3 ảnh** trong hộp chọn tệp
- Ô xem trước (`FilePreview`) hiển thị **bên trên** thanh soạn tin
- Mỗi ảnh hiện dưới dạng ảnh thu nhỏ thực (10×10 pixel — `w-10 h-10 object-cover`) kèm tên tệp + dung lượng + nút ✕
- Hộp chọn tệp hệ điều hành đã **đóng lại**
- Nút Gửi đã sáng (`bg-brand-600`)

**Bố cục ô xem trước cần thấy:**
```
┌─────────────────────────────────────────────────────────┐
│ Ô XEM TRƯỚC (border-t, bg-muted/30, flex flex-wrap)     │
│                                                         │
│  ┌───────────────────┐  ┌───────────────────┐           │
│  │ [ảnh nhỏ 40×40]   │  │ [ảnh nhỏ 40×40]   │           │
│  │ anh-bao-cao-1.png │  │ anh-bao-cao-2.png │           │
│  │ 1.2 MB       [✕] │  │ 980 KB       [✕] │           │
│  └───────────────────┘  └───────────────────┘           │
│         ▲                                               │
│    ĐÁNH DẤU một thẻ ảnh bất kỳ                          │
├─────────────────────────────────────────────────────────┤
│ THANH SOẠN TIN                                          │
│  [📎] [🖼️]  [ô soạn thảo trống]               [→ sáng] │
└─────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **một thẻ xem trước ảnh** (thẻ đầu tiên — `border border-border rounded-lg`, rộng tối đa 200px)

**Điểm cần thấy rõ:**
1. **Ảnh thu nhỏ thực** trong thẻ (`w-10 h-10 object-cover rounded`) — không phải biểu tượng tệp chung
2. **Tên tệp** — cắt ngắn nếu dài, hiển thị một phần
3. **Dung lượng** — ví dụ: 1.2 MB
4. **Nút ✕** — góc phải thẻ, để bỏ tệp nếu chọn nhầm

**Ghi chú về `FilePreview` khi chọn ảnh:**
- Ảnh: hiện `<img src={preview} />` — ảnh thu nhỏ thực từ blob URL (tạo ngay trên trình duyệt)
- Video MP4: hiện `<video>` + `<Play className="text-white" />` đè lên ảnh thu nhỏ
- Tệp khác (PDF, Word…): hiện `<FileIcon>` — biểu tượng theo loại tệp

---

### 📸 Ảnh 3 — Thanh tiến trình đang tải lên

**Tên tệp:** `25-gui-anh-video-buoc-03.webp`

**Trạng thái màn hình:**
- Đã bấm nút Gửi
- Thanh tiến trình (`progress bar`) xuất hiện **bên dưới mỗi thẻ ảnh** trong ô xem trước
- Thanh tiến trình đang ở khoảng 40–70% (màu xanh dương `bg-blue-500`)
- Hiển thị phần trăm ví dụ: "62%"
- Nút Gửi bị vô hiệu hoá (`disabled:bg-gray-300`)

**Đây là ảnh khó chụp — thanh tiến trình chỉ hiện vài giây**

**Bố cục cần thấy:**
```
┌─────────────────────────────────────────────────────────┐
│ Ô XEM TRƯỚC                                             │
│                                                         │
│  ┌───────────────────────────────────┐                  │
│  │ [ảnh nhỏ] anh-bao-cao-1.png      │                  │
│  │ 1.2 MB                           │                  │
│  │ ████████████░░░░░░░░░  62% ◄──── ĐÁNH DẤU           │
│  └───────────────────────────────────┘                  │
│  ┌───────────────────────────────────┐                  │
│  │ [ảnh nhỏ] anh-bao-cao-2.png      │                  │
│  │ 980 KB                           │                  │
│  │ ██░░░░░░░░░░░░░░░░░░░  18%       │                  │
│  └───────────────────────────────────┘                  │
├─────────────────────────────────────────────────────────┤
│  [📎] [🖼️]  (ô bị vô hiệu hoá)             [→ mờ]     │
└─────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **thanh tiến trình** (dải thanh `h-1.5 bg-gray-200 rounded-full` + phần đã tải xanh dương)

**3 cách chụp ảnh này:**

**Cách A — Làm chậm mạng bằng DevTools (khuyến nghị):**
1. Nhấn **F12** → tab **Mạng** → đổi sang **Slow 3G**
2. Chọn ảnh → bấm Gửi → thanh tiến trình hiện rõ, tải chậm 5–10 giây → chụp
3. Sau khi chụp: đổi lại **Không giới hạn**

**Cách B — Dùng ảnh dung lượng lớn (3–5 MB):**
Chọn 2–3 ảnh mỗi ảnh ~3 MB — tổng ~9 MB — thanh tiến trình sẽ hiện dài hơn ngay cả trên mạng tốt.

**Cách C — Quay màn hình rồi trích khung:**
Quay toàn bộ thao tác bằng OBS/ShareX, sau đó tua đến đúng lúc thanh tiến trình ở khoảng 50% → xuất thành ảnh WebP.

**Phân biệt 2 màu thanh tiến trình:**
- `bg-blue-500` — đang tải lên (0%–99%)
- `bg-green-500` — tải xong (100%, hiện "✓")

> Ảnh chụp cần thấy **màu xanh dương** (đang tải), không phải xanh lá (đã xong).

---

### 📸 Ảnh 4 — Cửa sổ phóng to nhiều ảnh (chế độ thư viện)

**Tên tệp:** `25-gui-anh-video-buoc-04.webp`

**Trạng thái màn hình:**
- Ảnh đã gửi thành công, xuất hiện trong luồng dưới dạng ảnh thu nhỏ
- Người dùng đã bấm vào một ảnh trong luồng
- Cửa sổ xem phóng to (`ImagePreviewModal`) đang mở toàn màn hình
- Đang hiển thị **chế độ thư viện** (2 ảnh trở lên trong cùng tin nhắn)

**Bố cục cửa sổ phóng to cần thấy:**
```
┌──────────────────────────────────────────────────────────────┐
│ NỀN TỐI (bg-black/50, fixed inset-0)                        │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ TIÊU ĐỀ (border-b, bg-white, h-[60px])               │    │
│  │  anh-bao-cao-1.png                     [↓] [✕]       │    │
│  ├──────────────────────────────────────────────────────┤    │
│  │ NỘI DUNG (bg-gray-50, flex-1)                        │    │
│  │                                                      │    │
│  │              [ảnh phóng to, object-contain]          │    │
│  │                                                      │    │
│  ├──────────────────────────────────────────────────────┤    │
│  │ ĐIỀU HƯỚNG (border-t, bg-white, h-[70px])            │    │
│  │  [◀ Trước]         1 / 2         [Sau ▶] ◄──── ĐÁNH DẤU  │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

**Đánh dấu:** Viền màu #10B981 quanh **thanh điều hướng ảnh** ở cuối cửa sổ (phần chứa nút ◀ Trước, số thứ tự "1 / 2", nút Sau ▶)

**Điểm cần thấy rõ:**
1. **Ảnh phóng to** trong vùng nội dung — đúng là ảnh bạn vừa gửi
2. **Tên tệp** trong tiêu đề — `anh-bao-cao-1.png`
3. **Thanh điều hướng** ở cuối — ◀ Trước (mờ nếu đang ở ảnh đầu) + số thứ tự "1 / 2" + Sau ▶
4. **Nút tải xuống (↓)** ở tiêu đề — chỉ hiện nếu `canDownload = true` (tuỳ cài đặt phân quyền)

**Cách bảo đảm thấy chế độ thư viện:**
- Tin nhắn vừa gửi phải có **2 ảnh trở lên** — lúc đó `hasMultipleImages = true` và thanh điều hướng hiển thị
- Nếu chỉ gửi 1 ảnh → thanh điều hướng **không hiện** (chế độ đơn lẻ)
- Đảm bảo gửi 2 ảnh ở Bước 2–3 để Ảnh 4 có thể chụp được chế độ thư viện

**Phím tắt hiển thị trong ảnh (nếu có thể):**
Nếu màn hình đủ chỗ, thêm chú thích nhỏ bên cạnh thanh điều hướng: "← → để chuyển · Esc để đóng". Không bắt buộc.

---

## Quy trình chụp theo thứ tự

```
Chuẩn bị → Mở panel Nhật ký của task bất kỳ
            Chuẩn bị sẵn 2–3 tệp ảnh (anh-bao-cao-1.png, -2.png, -3.png)
            Ô xem trước tệp đang trống
            ↓
Ảnh 1   → Panel Nhật ký đang mở, ô xem trước TRỐNG
            Xác định vị trí nút 🖼️ trong thanh soạn tin
            → CHỤP (đánh dấu nút 🖼️)
            CHƯA bấm gì
            ↓
Ảnh 2   → Bấm nút 🖼️ → hộp chọn tệp bật lên
            Chọn anh-bao-cao-1.png VÀ anh-bao-cao-2.png → bấm Mở
            Ô xem trước hiện 2 thẻ ảnh thu nhỏ
            → CHỤP (đánh dấu 1 thẻ ảnh)
            CHƯA bấm Gửi
            ↓
Ảnh 3   → [Nếu dùng DevTools: bật Slow 3G]
            Bấm nút Gửi → thanh tiến trình xuất hiện → CHỤP NGAY
            (cần ở khoảng 40–70%, màu xanh dương)
            [Nếu dùng DevTools: tắt Slow 3G sau khi chụp]
            ↓
Ảnh 4   → Đợi ảnh gửi thành công, xuất hiện trong luồng
            Bấm vào 1 trong 2 ảnh vừa gửi
            Cửa sổ phóng to mở → thấy thanh điều hướng ◀ 1/2 ▶
            → CHỤP (đánh dấu thanh điều hướng)
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
□ Ảnh 1: nút 🖼️ rõ ràng trong thanh soạn tin, ô xem trước TRỐNG
□ Ảnh 2: ô xem trước có ≥ 2 thẻ ảnh thu nhỏ THỰC (không phải biểu tượng tệp)
□ Ảnh 3: thanh tiến trình MÀU XANH DƯƠNG (đang tải), KHÔNG phải xanh lá (đã xong)
□ Ảnh 4: cửa sổ phóng to CÓ thanh điều hướng ◀ N/N ▶ ở cuối
□ Tên tệp ảnh thực tế (anh-bao-cao-*.png), không phải "test.jpg" hay "image1.jpg"
□ Cùng 2 ảnh xuất hiện nhất quán từ Ảnh 2 → Ảnh 3 → Ảnh 4
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
                    ├── 25-gui-anh-video-buoc-01.webp  ← thanh soạn tin + nút 🖼️
                    ├── 25-gui-anh-video-buoc-02.webp  ← ô xem trước ảnh thu nhỏ
                    ├── 25-gui-anh-video-buoc-03.webp  ← thanh tiến trình đang tải
                    └── 25-gui-anh-video-buoc-04.webp  ← cửa sổ phóng to thư viện
```

---

## Giải phẫu `FilePreview` — ô xem trước tệp

```
┌──────────────────────────────────────────────────────────┐
│ CONTAINER  (flex flex-wrap gap-2 p-2, border-t, bg-muted)│
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │ THẺ TỆP  (max-w-[200px], border, rounded-lg)     │    │
│  │  flex items-center gap-2                         │    │
│  │  ┌────────┐  Tên tệp (font-medium, truncate)     │    │
│  │  │ ảnh    │  Dung lượng (text-xs, text-muted)    │    │
│  │  │ 40×40  │                          [✕]         │    │
│  │  └────────┘                                      │    │
│  │  [██████████░░░░░░░░░░░] 62%  ← thanh tiến trình │    │
│  │   h-1.5, bg-gray-200, rounded-full               │    │
│  │   ↑ phần đã tải: bg-blue-500 (đang) / green-500  │    │
│  └──────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

**Phân biệt ảnh thu nhỏ theo loại tệp trong `FilePreview`:**

| Loại tệp | Hiển thị thu nhỏ | Ghi chú |
|----------|-----------------|---------|
| Ảnh (JPG/PNG/GIF/WEBP) | `<img>` — ảnh thu nhỏ thực | Blob URL tạo ngay trên trình duyệt |
| Video (MP4) | `<video>` + biểu tượng ▶ | Thu nhỏ video + Play icon đè lên |
| Tệp khác (PDF/Word…) | `<FileIcon>` — biểu tượng theo loại | Không có ảnh thu nhỏ thực |

---

## Giải phẫu `ImagePreviewModal` — cửa sổ phóng to

```
┌─────────────────────────────────────────────────────────────────┐
│ NỀN TỐI  (fixed inset-0 z-50, bg-black/50)                     │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ TIÊU ĐỀ  (h-[60px], border-b, bg-white, px-6)           │   │
│  │  [Tên tệp — truncate]                [↓ tải] [✕ đóng]   │   │
│  │                                      ← chỉ hiện nếu     │   │
│  │                                        canDownload=true  │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │ NỘI DUNG  (flex-1, overflow-y-auto, bg-gray-50)          │   │
│  │  [đang tải → vòng xoay lớn + "Đang tải ảnh..."]         │   │
│  │  [lỗi → "Không thể tải ảnh"]                            │   │
│  │  [thành công → <img max-h-full max-w-full object-contain>│   │
│  │    draggable=false (không kéo được)]                    │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │ ĐIỀU HƯỚNG  (h-[70px], border-t, bg-white, px-6)        │   │
│  │  CHỈ HIỆN khi images.length ≥ 2                         │   │
│  │  [◀ Trước]  [số thứ tự: N / Tổng]  [Sau ▶]             │   │
│  │  ← mờ nếu ở đầu          ← mờ nếu ở cuối               │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

**Phím tắt hoạt động trong cửa sổ phóng to:**
- `← ArrowLeft` → ảnh trước
- `→ ArrowRight` → ảnh tiếp theo
- `Esc` → đóng cửa sổ (xử lý bởi `DialogContent`)
- Bấm vào **vùng nền tối** (`backdrop`) → đóng cửa sổ

---

## Ghi chú bổ sung

### Nếu không thấy thanh điều hướng ở Ảnh 4
Tin nhắn chỉ có 1 ảnh → `hasMultipleImages = false` → thanh điều hướng **ẩn**. Cần gửi lại với **2 ảnh cùng lúc** để thấy chế độ thư viện.

### Về nút tải xuống trong cửa sổ phóng to
Nút `↓` chỉ hiện khi `canDownload = true` — tuỳ thuộc vào cài đặt phân quyền tải xuống của Admin. Nếu không thấy nút này trong ảnh → bình thường, không phải lỗi.

### Sự khác biệt so với bài 24 (gửi tệp tài liệu)
- Bài 24: chụp ô xem trước **tệp PDF/Word** — `FileIcon`, không có ảnh thu nhỏ thực
- Bài 25: chụp ô xem trước **ảnh/video** — `<img>` thu nhỏ thực, có màu sắc và nội dung

### Khi UI thay đổi sau khi chụp
Xem mục 10 trong `docs/CONTENT_GUIDE.md`. Giữ nguyên tên tệp, chỉ thay nội dung ảnh.

### Câu hỏi & hỗ trợ
Liên hệ BA phụ trách hoặc tạo issue trong kho `Quoc-Nam-Guide`.

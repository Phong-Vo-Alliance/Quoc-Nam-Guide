# Hướng Dẫn Viết Bài — Guide Site QuocNam
**Dành cho:** BA, QA  
**Cập nhật lần cuối:** 2026-03-04  

---

## 1. MDX Frontmatter Template

Mỗi file MDX BẮT BUỘC có frontmatter đầy đủ:

```markdown
---
title: "Cách tạo task mới"
roles: ["leader", "admin"]
tags: ["task", "tạo task", "công việc", "giao việc"]
lastUpdated: "2026-03-04"
appVersion: "1.0.0"
---
```

### Quy tắc từng field

| Field | Bắt buộc | Giá trị hợp lệ | Ghi chú |
|-------|---------|--------------|---------|
| `title` | ✅ | Chuỗi bắt đầu bằng "Cách …" | Tiêu đề hiển thị trên trang |
| `roles` | ✅ | `["staff"]` / `["leader","admin"]` / `["admin"]` / `["staff","leader","admin"]` | Array, lowercase |
| `tags` | ✅ | Mảng từ khóa tiếng Việt | Dùng cho search |
| `lastUpdated` | ✅ | `YYYY-MM-DD` | Ngày cập nhật gần nhất |
| `appVersion` | ✅ | `1.0.0` | Phiên bản app lúc viết bài |

---

## 2. Cấu trúc bài viết (9 mục bắt buộc)

```markdown
---
[frontmatter]
---

## Ai dùng
[Staff / Leader / Admin] — 1 dòng

## Khi nào dùng
[1–2 câu mô tả tình huống cụ thể]

## Điều kiện
- [Điều kiện 1, ví dụ: Đã đăng nhập]
- [Điều kiện 2, ví dụ: Là Leader của nhóm chat]

![Demo](./images/[số]-[tên-bài]-demo.gif)

## Các bước

### Bước 1 — [Tên bước ngắn gọn]
![Bước 1](./images/[số]-[tên-bài]-buoc-01.webp)
[Mô tả ngắn, tối đa 2 câu]

### Bước 2 — [Tên bước ngắn gọn]
![Bước 2](./images/[số]-[tên-bài]-buoc-02.webp)
[Mô tả ngắn, tối đa 2 câu]

[... tối đa 7 bước]

## Kết quả mong đợi
[Mô tả kết quả sau khi hoàn thành đúng]

## Lỗi thường gặp

| Lỗi | Nguyên nhân | Cách xử lý |
|-----|-------------|------------|
| [Lỗi 1] | [Nguyên nhân] | [Cách xử lý] |
| [Lỗi 2] | [Nguyên nhân] | [Cách xử lý] |

## Bài liên quan
- [Tên bài liên quan 1](../đường-dẫn)
- [Tên bài liên quan 2](../đường-dẫn)

---
*Cập nhật lần cuối: [lastUpdated] — Phiên bản ứng dụng: [appVersion]*
```

---

## 3. Quy tắc viết nội dung

### Tiêu đề bài
- ✅ Bắt đầu bằng **"Cách …"**
- ✅ Ví dụ: *"Cách giao task cho nhân viên"*
- ❌ Không dùng tên module: *"Hướng dẫn WorkType Assignment"*

### Số bước
- **Tối thiểu:** 3 bước
- **Tối đa:** 7 bước
- Nếu nhiều hơn 7 bước → **tách thành 2 bài**

### Mỗi bước
- 1 ảnh minh họa (bắt buộc)
- Tối đa 2 câu mô tả
- Dùng động từ mệnh lệnh: *"Bấm", "Chọn", "Nhập", "Kéo"*

### Ngôn ngữ
- Tiếng Việt 100%
- Không dùng tiếng Anh, kể cả thuật ngữ kỹ thuật
- Dùng thuật ngữ đã định nghĩa trong bài 04 (Thuật ngữ)

### Tags (dùng cho search)
- 4–8 tags mỗi bài
- Bao gồm: tên tác vụ, tên màn hình, từ đồng nghĩa thông dụng
- Ví dụ cho bài "Tạo task": `["task", "tạo task", "công việc mới", "giao việc", "leader"]`

---

## 4. Chuẩn ảnh

### Thông số kỹ thuật
| Loại | Format | Kích thước | Ghi chú |
|------|--------|-----------|---------|
| Screenshot desktop | WebP hoặc PNG | 1280px width | |
| Screenshot mobile | WebP hoặc PNG | 390px width | |
| GIF demo | GIF | 800px width, 15fps | 10–20 giây |

### Highlight
- Dùng **viền hoặc mũi tên** màu `#10B981` (emerald) để chỉ vùng thao tác
- Không dùng màu đỏ (dễ nhầm với lỗi)

### Đặt tên file ảnh
```
[số-bài]-[tên-bài-slug]-buoc-[số-bước].webp
[số-bài]-[tên-bài-slug]-demo.gif

Ví dụ:
  12-giao-task-buoc-01.webp
  12-giao-task-buoc-02.webp
  12-giao-task-demo.gif
```

### Vị trí lưu
```
src/content/[nhóm]/images/[tên-file]

Ví dụ:
  src/content/web/images/12-giao-task-buoc-01.webp
  src/content/mobile/images/35-checklist-buoc-01.webp
  src/content/admin/images/48-tao-user-buoc-01.webp
```

---

## 5. Callout Blocks (Note / Warning / Tip)

Dùng component `<Callout>` trong MDX:

```mdx
<Callout type="note">
  Chỉ Leader mới thấy nút "Giao task". Nếu bạn không thấy nút này,
  vui lòng liên hệ Admin để kiểm tra vai trò tài khoản.
</Callout>

<Callout type="warning">
  Sau khi gửi "Chờ duyệt", bạn không thể chỉnh sửa checklist.
  Hãy kiểm tra kỹ trước khi gửi.
</Callout>

<Callout type="tip">
  Dùng phím tắt Quick Messages để tiết kiệm thời gian nhập nội dung lặp lại.
</Callout>
```

---

## 6. Quy trình publish bài mới

```
1. Tạo file MDX theo template
2. Viết nội dung + chụp ảnh
3. Đặt ảnh đúng thư mục + đúng tên
4. Tự review theo checklist:
   □ Đúng role trong frontmatter
   □ Ảnh rõ, có highlight
   □ Có "Lỗi thường gặp" (≥ 2 lỗi)
   □ Có "Bài liên quan" (≥ 2 link)
   □ lastUpdated đúng ngày hôm nay
5. Tạo Pull Request → QA review → PM duyệt → merge
```

---

## 7. Quy trình update bài khi UI thay đổi

```
1. Dev/BA xác định bài bị ảnh hưởng bởi UI mới
   → Dựa vào appVersion trong frontmatter
2. Chụp ảnh UI mới theo đúng chuẩn (mục 4)
3. Thay file ảnh cũ (GIỮ NGUYÊN tên file)
4. Dùng AI hỗ trợ chỉnh nội dung MDX nếu cần
5. Cập nhật lastUpdated và appVersion trong frontmatter
6. Tạo Pull Request → QA review → PM duyệt → merge
```

> **Lưu ý:** Giữ nguyên tên file ảnh khi replace để tránh phải sửa đường dẫn trong MDX.
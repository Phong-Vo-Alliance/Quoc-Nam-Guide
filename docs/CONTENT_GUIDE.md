📘 Hướng Dẫn Viết Bài — Guide Site QuocNam (Version 2)
======================================================

**Dành cho:** BA, QA  
**Cập nhật lần cuối:** 2026-03-20

***

🎯 0. Triết lý chung (RẤT QUAN TRỌNG)
=====================================

> Người dùng KHÔNG đọc để hiểu  
> → Họ đọc để **làm theo ngay lập tức**

### Nguyên tắc cốt lõi

*   ✅ Ưu tiên **step-by-step rõ ràng**
    
*   ✅ Mỗi bước = 1 hành động
    
*   ✅ Nhìn ảnh → làm được ngay
    
*   ❌ Không phụ thuộc vào GIF/video
    
*   ❌ Không viết dài, không giải thích lan man
    

***

🧱 1. MDX Frontmatter Template
==============================

\---  
title: "Cách tạo task mới"  
roles: \["leader", "admin"\]  
tags: \["task", "tạo task", "công việc", "giao việc"\]  
lastUpdated: "2026-03-20"  
appVersion: "1.0.0"  
\---

### Quy tắc từng field

Field

Bắt buộc

Giá trị hợp lệ

Ghi chú

`title`

✅

Chuỗi bắt đầu bằng "Cách …"

Không dùng tiếng Anh

`roles`

✅

`["staff"]`, `["leader","admin"]`, `["admin"]`, `["staff","leader","admin"]`

lowercase

`tags`

✅

4–8 từ khóa tiếng Việt

Dùng cho search

`lastUpdated`

✅

`YYYY-MM-DD`

Ngày cập nhật

`appVersion`

✅

`1.0.0`

Version app

***

🧩 2. Cấu trúc bài viết (BẮT BUỘC)
==================================

\---  
\[frontmatter\]  
\---  

  
\## Khi nào dùng  
\[1–2 câu mô tả tình huống cụ thể\]  
  
\## Điều kiện  
\- \[Điều kiện 1\]  
\- \[Điều kiện 2\]  
  
<!-- Demo (OPTIONAL — chỉ dùng khi thật sự cần) -->  
  
\## Các bước  
  
\### Bước 1 — \[Tên bước rõ nghĩa\]  
!\[Bước 1\](./images/xx-buoc-01.webp)  
\[Mô tả ≤ 2 câu\]  
  
\### Bước 2 — ...  
!\[Bước 2\](...)  
  
\[... tối đa 7 bước\]  
  
\## Kết quả mong đợi  
\[Mô tả kết quả\]  
  
\## Lỗi thường gặp  
  
| Lỗi | Nguyên nhân | Cách xử lý |  
|-----|-------------|------------|  
| ... | ... | ... |  
  
\## Bài liên quan  
\- \[Tên bài\](../link)  
\- \[Tên bài\](../link)  
  
\---  
  
\*Cập nhật lần cuối: \[lastUpdated\] — Phiên bản ứng dụng: \[appVersion\]\*

***

🔥 3. Quy tắc viết nội dung
===========================

3.1 Tiêu đề
-----------

*   ✅ Bắt buộc bắt đầu bằng **"Cách …"**
    
*   ✅ Ví dụ: _Cách đăng nhập hệ thống_
    
*   ❌ Không dùng tên kỹ thuật / tiếng Anh
    

***

3.2 Số bước
-----------

*   Tối thiểu: **3 bước**
    
*   Tối đa: **7 bước**
    

👉 Nếu >7 bước → **tách bài**

***

3.3 Quy tắc “Atomic Step” (CỰC QUAN TRỌNG)
------------------------------------------

> Mỗi bước = 1 hành động duy nhất

### ❌ Sai

*   Nhập tài khoản và mật khẩu rồi bấm đăng nhập
    

### ✅ Đúng

*   Bước 1 — Nhập tài khoản
    
*   Bước 2 — Nhập mật khẩu
    
*   Bước 3 — Bấm đăng nhập
    

***

3.4 Mỗi bước phải có
--------------------

*   ✅ 1 ảnh
    
*   ✅ ≤ 2 câu mô tả
    
*   ✅ Dùng động từ mệnh lệnh:
    
    *   Bấm
        
    *   Chọn
        
    *   Nhập
        
    *   Kéo
        

***

3.5 Ngôn ngữ
------------

*   100% tiếng Việt
    
*   Không dùng thuật ngữ tiếng Anh
    
*   Viết như đang hướng dẫn người không biết gì
    

***

3.6 Heading phải có keyword (tối ưu search)
-------------------------------------------

### ❌ Không tốt

Bước 2 — Tiếp tục

### ✅ Tốt

Bước 2 — Nhập mật khẩu

👉 Giúp Fuse.js search hiệu quả hơn

***

🖼 4. Chuẩn ảnh (CỐT LÕI THAY GIF)
==================================

4.1 Nguyên tắc
--------------

> Screenshot + highlight = thay thế hoàn toàn GIF

***

4.2 Bắt buộc
------------

*   Mỗi bước = 1 ảnh
    
*   Ảnh phải:
    
    *   Rõ nét
        
    *   Đúng vị trí thao tác
        
    *   Không chứa nhiều hành động
        

***

4.3 Highlight
-------------

*   Màu: **#10B981 (emerald)**
    
*   Dạng:
    
    *   Viền
        
    *   Mũi tên
        

### ❌ Không dùng

*   Màu đỏ
    
*   Highlight nhiều chỗ
    

***

4.4 Thông số kỹ thuật
---------------------

Loại

Format

Kích thước

Desktop

WebP/PNG

1280px

Mobile

WebP/PNG

390px

***

4.5 Đặt tên file
----------------

\[số-bài\]-\[slug\]-buoc-\[01\].webp

Ví dụ:

07-dang-nhap-buoc-01.webp

***

4.6 Vị trí lưu
--------------

src/content/\[nhóm\]/images/

***

🎥 5. GIF / Video (OPTIONAL)
============================

❗ KHÔNG bắt buộc
----------------

***

✅ Chỉ dùng khi:
---------------

*   Drag & drop
    
*   Swipe mobile
    
*   Animation nhiều bước
    

***

❌ Không dùng khi:
-----------------

*   Chỉ là click / nhập / chọn
    
*   Có thể giải thích bằng ảnh
    

***

🎯 Rule
-------

> Nếu ảnh đã đủ hiểu → KHÔNG dùng GIF

***

🧠 6. Callout (Thay thế cho giải thích dài)
===========================================

<Callout type="note">  
 Nội dung lưu ý  
</Callout>  
  
<Callout type="warning">  
 Nội dung cảnh báo  
</Callout>  
  
<Callout type="tip">  
 Mẹo sử dụng nhanh  
</Callout>

***

🔍 7. Tags (Tối ưu search Fuse.js)
==================================

*   4–8 tags
    
*   Bao gồm:
    
    *   Tên tác vụ
        
    *   Từ đồng nghĩa
        
    *   Cách user thường nói
        

### Ví dụ

\["đăng nhập", "login", "vào hệ thống", "tài khoản"\]

***

✅ 8. Checklist trước khi publish
================================

□ Title bắt đầu bằng "Cách"  
□ Đúng role  
□ 3–7 bước  
□ Mỗi bước có 1 ảnh  
□ Highlight rõ  
□ Không phụ thuộc GIF  
□ Có ≥2 lỗi thường gặp  
□ Có ≥2 bài liên quan  
□ lastUpdated đúng

***

🚀 9. Quy trình publish
=======================

1\. Tạo file MDX  
2\. Viết nội dung  
3\. Chụp ảnh + highlight  
4\. Đặt đúng tên file  
5\. Self-review checklist  
6\. PR → QA → PM → merge

***

🔄 10. Update khi UI thay đổi
=============================

1\. Xác định bài bị ảnh hưởng  
2\. Chụp lại ảnh  
3\. Replace ảnh (GIỮ NGUYÊN tên file)  
4\. Update nội dung nếu cần  
5\. Update lastUpdated + appVersion  
6\. PR → review → merge

***

💡 11. Nguyên tắc vàng (PHẢI NHỚ)
=================================

### 1\. Không phụ thuộc GIF

→ Ảnh phải đủ để làm theo

### 2\. Không viết để đọc

→ Viết để **làm ngay**

### 3\. Không gộp bước

→ 1 bước = 1 hành động
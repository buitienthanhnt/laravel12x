Laravel Wayfinder là một package chính thức của Laravel giúp kết nối backend và frontend một cách liền mạch bằng cách tự động tạo các định nghĩa TypeScript từ code PHP của bạn. 
Laravel
Laravel
 +1
Công cụ này giải quyết vấn đề lớn nhất khi làm việc với các stack như Inertia.js hoặc API riêng biệt: việc phải duy trì thủ công các URL route và kiểu dữ liệu (types) ở cả hai phía. 
Laravel
Laravel
Các tính năng chính
Wayfinder phân tích ứng dụng Laravel của bạn và tạo ra các phiên bản TypeScript tương đương cho: 
Routes: Cho phép gọi endpoint trực tiếp từ code frontend như một hàm bình thường, không cần hardcode URL.
Eloquent Models: Tự động tạo kiểu dữ liệu cho các attributes, quan hệ và accessors của model.
Form Requests: Trích xuất các quy tắc xác thực (validation) thành TypeScript types, hoạt động tốt với hook useForm của Inertia.
PHP Enums: Đồng bộ hóa các Enum từ PHP sang TypeScript tự động.
Inertia Data: Tạo types cho Inertia page props và dữ liệu dùng chung (shared data).
Broadcast Events: Hỗ trợ tự động hoàn thành (autocomplete) cho tên channel và payload của sự kiện khi dùng Laravel Echo. 
Laravel
Laravel
 +3
Cách hoạt động
Wayfinder dựa trên hai thư viện nền tảng là Surveyor (phân tích tĩnh code Laravel) và Ranger (chuyển đổi kết quả thành DTO để Wayfinder tạo file TypeScript). 
Laravel
Laravel
 +1
Cài đặt và Sử dụng
Cài đặt qua Composer:
bash
composer require laravel/wayfinder
Hãy thận trọng khi sử dụng mã.

Tích hợp với Vite: Thêm plugin vào vite.config.js để tự động cập nhật các định nghĩa TypeScript khi file PHP thay đổi.
Sử dụng trên Frontend:
typescript
import { store, update } from "@/actions/App/Http/Controllers/PostController";

// Sử dụng trực tiếp trong form của React/Vue
<form {...update.form.put(1)}> 
Hãy thận trọng khi sử dụng mã.

 
Packagist
Packagist
 +2
Hiện tại, Wayfinder đang ở giai đoạn Beta công khai và được tích hợp sẵn trong các bộ Starter Kits mới nhất của Laravel dành cho React và Vue. Bạn có thể xem mã nguồn và tài liệu chi tiết tại GitHub laravel/wayfinder. 
Bạn có đang định tích hợp Wayfinder vào một dự án Inertia hiện có hay bắt đầu một dự án mới từ đầu không?



# Use:
<!-- generate router and controller: -->
php artisan wayfinder:generate

<!-- ganerate controller action with form method: -->
php artisan wayfinder:generate --with-form


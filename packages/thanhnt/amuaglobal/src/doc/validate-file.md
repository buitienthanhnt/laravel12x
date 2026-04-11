<!-- laravel validate file type -->
Trong Laravel, bạn có thể xác thực loại file (file type) dựa trên extension (đuôi file) hoặc MIME type bằng nhiều cách khác nhau tùy thuộc vào phiên bản Laravel bạn đang sử dụng. 
Laravel
Laravel
 +1
Dưới đây là các phương pháp phổ biến và tối ưu nhất để thực hiện việc này:

# 1. Sử dụng Class File (Khuyên dùng cho Laravel 9, 10, 11, 12, 13) 
Từ Laravel 9.x trở lên, framework cung cấp một đối tượng Illuminate\Validation\Rules\File giúp viết code cực kỳ rõ ràng, dễ đọc và hỗ trợ gợi ý code (autocomplete) tốt trong các IDE. 
Stack Overflow
Stack Overflow
php
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;

public function upload(Request $request)
{
    $request->validate([
        'document' => [
            'required',
            File::types(['pdf', 'doc', 'docx']) // Chỉ định nghĩa các đuôi file được phép
                ->max(1024 * 10), // Giới hạn dung lượng tối đa (ví dụ: 10MB)
        ],
    ]);
}
Hãy thận trọng khi sử dụng mã.

# 2. Sử dụng chuỗi quy tắc truyền thống (Mọi phiên bản) 
Nếu bạn đang dùng phiên bản Laravel cũ hơn hoặc quen thuộc với cách viết gộp bằng chuỗi, bạn có thể sử dụng quy tắc mimes hoặc mimetypes. 
Stack Overflow
Stack Overflow
mimes:csv,pdf,jpeg: Bạn chỉ cần điền đuôi mở rộng của file. Laravel sẽ tự động đọc nội dung file đó để suy đoán ra MIME chuẩn và đối chiếu.
mimetypes:text/plain,application/pdf: Bạn bắt buộc phải điền chính xác định dạng MIME đầy đủ của file. 
Stack Overflow
Stack Overflow
 +1
php
$request->validate([
    // Xác thực bằng đuôi file (Khuyên dùng vì ngắn gọn)
    'photo' => 'required|file|mimes:jpg,png,jpeg|max:2048', 
    
    // Xác thực bằng MIME type đầy đủ
    'video' => 'required|file|mimetypes:video/mp4,video/avi|max:50000',
]);
Hãy thận trọng khi sử dụng mã.

% # 3. Quy tắc dành riêng cho Hình ảnh
Nếu mục tiêu của bạn chỉ là tải lên hình ảnh, Laravel có sẵn quy tắc image. Quy tắc này sẽ tự động giới hạn file phải thuộc các định dạng: jpg, jpeg, png, bmp, gif, svg, hoặc webp. 
Stack Overflow
Stack Overflow
 +2
php
$request->validate([
    'avatar' => 'required|image|max:1024', // Đã bao gồm kiểm tra file là ảnh
]);
Hãy thận trọng khi sử dụng mã.

⚠️ Lưu ý cực kỳ quan trọng khi xử lý File Upload 
Enctype ở Frontend: Tại form HTML ở View, bạn bắt buộc phải có thuộc tính enctype="multipart/form-data" thì file mới có thể truyền lên server để Laravel xác thực.
Cấu hình Server: Nếu bạn gặp lỗi khi upload file dung lượng lớn dù đã khai báo đúng trong Laravel, hãy kiểm tra file php.ini và cập nhật lại 2 giá trị upload_max_filesize và post_max_size cho đồng bộ. 
Stack Overflow
Stack Overflow
 +2
Bạn đang cần viết quy tắc xác thực cụ thể cho loại file nào (như Excel, CSV, Audio...) hay đang gặp khó khăn gì với file upload hiện tại không? 

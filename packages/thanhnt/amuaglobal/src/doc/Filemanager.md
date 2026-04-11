# laravel filemanager
Laravel Filemanager là giải pháp giúp bạn tích hợp một giao diện quản lý file (upload, tạo thư mục, xóa, sửa ảnh) trực tiếp vào ứng dụng Laravel, rất phổ biến khi làm các hệ thống CMS. 

Tùy thuộc vào nhu cầu dự án, bạn có thể lựa chọn các giải pháp File Manager tốt nhất dưới đây: 
# 1. UniSharp / Laravel-Filemanager (Phổ biến nhất cho Editor) 
Đây là package kinh điển và được dùng nhiều nhất nếu bạn cần tích hợp một trình quản lý file đi kèm với các trình soạn thảo WYSIWYG như CKEditor, TinyMCE hoặc Summernote. 
GitHub
GitHub
Ưu điểm: Tích hợp cực sâu và dễ dàng vào các trình soạn thảo văn bản; hỗ trợ tự động crop/resize ảnh; hỗ trợ chế độ đa người dùng (mỗi người dùng có một thư mục riêng).
Hạn chế: Giao diện hơi hướng cổ điển (dựa trên Bootstrap 3/4).
Cài đặt nhanh:
bash
composer require unisharp/laravel-filemanager
php artisan vendor:publish --tag=lfm_config
php artisan vendor:publish --tag=lfm_public
php artisan storage:link
Hãy thận trọng khi sử dụng mã.

Tài liệu tham khảo: Bạn có thể xem hướng dẫn cài đặt đầy đủ tại UniSharp Laravel Filemanager Docs. 
GitHub
GitHub
 +4
# 2. Alexusmai / Laravel-File-Manager (Mạnh mẽ & Đầy đủ tính năng) 
Nếu bạn cần một hệ thống quản lý file độc lập, chuyên nghiệp giống như Google Drive hay Finder thu nhỏ, đây là package tối ưu nhất. 
Packagist
Packagist
 +1
Ưu điểm: Giao diện rất hiện đại (viết bằng Vue.js 3 và Bootstrap 5); hỗ trợ 2 khung nhìn (split panel); tích hợp sẵn trình nghe nhạc, xem video, xem code; phân quyền ACL cực kỳ chi tiết (ai được đọc, ai được xóa file nào).
Hạn chế: Việc tích hợp vào các trình soạn thảo phức tạp hơn UniSharp một chút.
Tài liệu tham khảo: Xem mã nguồn và cách sử dụng tại Alexusmai Laravel File Manager GitHub. 
# 3. Livewire Filemanager (Hiện đại cho TALL Stack) 
Nếu bạn đang xây dựng ứng dụng Laravel bằng Livewire (TALL Stack), đây là một package tương đối mới và đang phát triển mạnh mẽ. 
Laravel News
Laravel News
 +1
Ưu điểm: Thuần PHP & Livewire; hỗ trợ kéo thả file mượt mà; hỗ trợ Dark mode đẹp mắt; không cần cài đặt các thư viện JS cồng kềnh.
Tài liệu tham khảo: Đọc thêm và xem giao diện tại Livewire Filemanager trên GitHub. 
💡 Gợi ý lựa chọn
Nếu bạn làm Blog/CMS và cần chèn ảnh vào bài viết thông qua CKEditor/TinyMCE: Hãy chọn UniSharp.
Nếu bạn làm Hệ thống quản lý tài liệu, ứng dụng lưu trữ nội bộ cần phân quyền folder chặt chẽ: Hãy chọn Alexusmai.
Nếu bạn đang sử dụng Livewire: Hãy dùng Livewire Filemanager. 
GitHub
GitHub
 +1
Bạn đang cần dùng File Manager để tích hợp vào một trình soạn thảo (như CKEditor) hay làm một trang quản lý file độc lập? Hãy cho mình biết để mình đưa ra hướng dẫn cài đặt và cấu hình cụ thể nhất! 


# cai nao dung duoc voi react
Khi sử dụng Laravel làm Backend (API) và React làm Frontend, việc chọn một thư viện quản lý file (File Manager) đòi hỏi thư viện đó phải hỗ trợ cơ chế API hoặc có các Component viết riêng cho React.
Cả 3 cái tên ở lượt trước (UniSharp, Alexusmai, Livewire) đều có những giới hạn hoặc đặc thù riêng khi đưa vào hệ sinh thái React. Dưới đây là phân tích chi tiết và các giải 

pháp tối ưu nhất cho React:
# 1. 🥇 Giải pháp Tốt nhất: Flmngr (Chuyên nghiệp & Native React)
Nếu bạn cần một giải pháp cực kỳ mượt mà, hỗ trợ React trực tiếp từ nhà phát triển và kết nối hoàn hảo với Laravel, hãy chọn Flmngr.
Cách hoạt động: Phần hiển thị UI là một npm package chuẩn cho React. Phần xử lý file phía sau sẽ gọi về API của Laravel (họ cung cấp sẵn file xử lý PHP/Laravel).
Ưu điểm: Có component <Flmngr ... /> viết riêng cho React; giao diện hiện đại; tích hợp rất tốt nếu bạn dùng TinyMCE hoặc CKEditor trong React.
Liên kết Action: Bạn có thể xem tài liệu tích hợp chi tiết tại Flmngr React Integration. 


# 2. 🥈 Giải pháp Toàn diện: Alexusmai / Laravel-File-Manager
Đây là thư viện mình đã nhắc tới ở lượt trước. Mặc dù giao diện của nó được viết bằng Vue.js, nhưng nó chạy theo cơ chế Client - Server độc lập. 

Cách hoạt động: Bạn cài đặt backend trên Laravel để nó sinh ra các API quản lý file. Ở phía React, bạn không dùng code React để vẽ giao diện này, mà bạn nhúng nó qua một thẻ <iframe> hoặc mở một cửa sổ popup dẫn đến route chứa File Manager của Laravel.
Ưu điểm: Đầy đủ tính năng nhất (phân quyền, kéo thả, xem ảnh/video).
Nhược điểm: Không phải là component React thuần túy, giao tiếp giữa React và Iframe phải thông qua postMessage của Javascript nếu muốn lấy link ảnh sau khi chọn. 


# 3. 🥉 Giải pháp Đơn giản: UniSharp / Laravel-Filemanager
Thư viện quốc dân này không có component dành riêng cho React. 

Cách hoạt động: Tương tự như Alexusmai, bạn sẽ phải tạo một route riêng trong Laravel hiển thị giao diện Filemanager (sử dụng Blade template truyền thống) và dùng <iframe> hoặc popup trong React để gọi nó ra.
Nhược điểm: Giao diện cũ, việc cấu hình để React bắt được sự kiện "đã chọn file" từ iframe khá rườm rà.
🚀 Lời khuyên & Giải pháp Thay thế (Nên cân nhắc)
Vì bạn đang dùng React, cách tiếp cận hiện đại và tối ưu nhất cho trải nghiệm người dùng thường là:
Tự viết Component React (Custom Media Manager): Bạn dùng React tạo giao diện lưới (Grid) hiển thị ảnh. Khi người dùng cuộn trang thì gọi API Laravel lấy danh sách file (áp dụng Pagination). Khi upload thì dùng Axios đẩy file lên API Laravel. Cách này giúp bạn làm chủ 100% giao diện và nhẹ ứng dụng nhất.
Sử dụng Cloudinary hoặc Firebase Storage: Thay vì tự quản lý file trên host Laravel, bạn dùng SDK của Cloudinary hoặc Firebase thẳng trong React để upload lên đám mây. Chúng có sẵn các Widget "Media Library" cực đẹp để chèn vào React chỉ với vài dòng code. 
Laracasts
Laracasts
 +1
Dự án của bạn đang dùng React theo kiểu SPA tách rời hoàn toàn (Giao diện React riêng, Laravel chỉ làm API) hay dùng Laravel Inertia + React? Hãy cho mình biết để mình đưa ra mẫu code kết nối chính xác nhất nhé! 
Laracasts
Laracasts
 +1


# tich hop voi  Flmngr nhu nao
Để tích hợp Flmngr vào một dự án sử dụng React (Frontend) và Laravel (Backend), bạn cần thực hiện theo cơ chế Client-Server: Cài đặt API trên Laravel để quản lý file và cài đặt Component trên React để hiển thị giao diện.
Dưới đây là các bước chi tiết để cấu hình hoàn chỉnh:

BƯỚC 1: Cấu hình Backend (Laravel)
Laravel sẽ đóng vai trò là "máy chủ file" để nhận lệnh tải lên, xóa và liệt kê file từ React truyền về.

# 1. Cài đặt package qua Composer
Mở terminal tại thư mục dự án Laravel và chạy lệnh:
bash
composer require edsdk/flmngr-server-php
Hãy thận trọng khi sử dụng mã.

# 2. Tạo Route để xử lý API
Mở file routes/web.php (hoặc routes/api.php) và thêm một route để bắt các request từ file manager. 
Flmngr
Flmngr
 +1

php
use EdSDK\FlmngrServer\FlmngrServer;

// Đảm bảo thư mục public/uploads đã tồn tại trên host của bạn
Route::post('/flmngr', function () {
    FlmngrServer::flmngrRequest([
        'dirFiles' => public_path('uploads') // Nơi lưu trữ file thực tế
    ]);
})->name('flmngr.api');
Hãy thận trọng khi sử dụng mã.

(Lưu ý: Nếu dùng api.php hoặc hệ thống có middleware CSRF, bạn cần tắt xác thực CSRF token cho route /flmngr này).


BƯỚC 2: Cấu hình Frontend (React)
Phần giao diện sẽ nằm hoàn toàn bên phía React.
# 1. Cài đặt package qua NPM/Yarn
Mở terminal tại thư mục dự án React và chạy lệnh cài đặt component dành riêng cho React: 
NPM
NPM
bash
npm install --save @flmngr/flmngr-react
# hoặc dùng yarn: yarn add @flmngr/flmngr-react
Hãy thận trọng khi sử dụng mã.

# 2. Viết Code Component trong React
Import thư viện và sử dụng API của Flmngr để mở cửa sổ quản lý file: 
Flmngr
Flmngr
 +1
jsx
import React from 'react';
import Flmngr from 'flmngr'; // Thư viện lõi để gọi hàm open

export default function MediaManager() {

    const openFileManager = () => {
        Flmngr.open({
            apiKey: "FLMNFLMN", // API key mặc định miễn phí (có thể thay nếu mua bản quyền)
            
            // ĐÂY LÀ ĐIỂM QUAN TRỌNG: Kết nối tới Laravel của bạn
            urlFileManager: 'http://localhost:8000/flmngr', // Route POST vừa tạo ở Bước 1
            urlFiles: 'http://localhost:8000/uploads',     // Đường dẫn URL công khai để xem ảnh

            isMultiple: false, // true nếu cho phép chọn nhiều file cùng lúc

            // Callback sau khi user chọn file và bấm "Insert"
            onFlmngrClose: (files) => {
                if (files && files.length > 0) {
                    console.log("File đã chọn:", files[0].url);
                    alert("Bạn đã chọn file: " + files[0].url);
                }
            }
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Quản lý thư viện Media</h2>
            <button 
                onClick={openFileManager}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                Mở Trình Quản Lý File
            </button>
        </div>
    );
}
Hãy thận trọng khi sử dụng mã.

⚠️ Những lỗi hay gặp và cách khắc phục:
Lỗi CORS (Cross-Origin Resource Sharing): Nếu React chạy ở localhost:3000 và Laravel chạy ở localhost:8000, Laravel sẽ chặn request. Bạn cần cài đặt/cấu hình gói fruitcake/laravel-cors (với Laravel cũ) hoặc chỉnh sửa file config/cors.php (Laravel mới) để cho phép domain của React gọi tới.
Quyền ghi thư mục (Folder Permissions): Đảm bảo thư mục public/uploads trên Laravel có quyền ghi (chmod 755 hoặc 777 trên Linux) để PHP có thể tạo file và thư mục con trong đó.
Bạn đã cài đặt thử và gặp phải thông báo lỗi cụ thể nào ở bước kết nối giữa React và Laravel chưa?





undefined
undefined
4 trang web
@flmngr/flmngr-react - npm
29 thg 8, 2025 — Full installation manual of Flmngr file manager for React is available on official website. Using NPM: npm i --save @flmngr/flmngr...

NPM

API: Flmngr.load() - preload the file manager
load. ... Loads the libraries of the file manager from CDN and optionally preconfigures it with some parameters. It is recommended...

Flmngr
Install Flmngr as a module for your Laravel website or app
Install Flmngr as a module for your Laravel website or app. PHP Composer package. Include PHP script directly. PHP Laravel package...

Flmngr

Hiện tất cả
Uncaught `onFinish` listener is required for `Flmngr.open()` method and wait for some file to be picked (when `isMultiple` != null)
Lỗi này xảy ra do cơ chế hoạt động của thư viện Flmngr. Khi bạn thiết lập tham số isMultiple khác null (có thể là false để chọn 1 file, hoặc true để chọn nhiều file), Flmngr hiểu rằng bạn đang mở cửa sổ để chọn file và lấy kết quả trả về. 
Flmngr file manager
Flmngr file manager
 +1
Do đó, Flmngr bắt buộc bạn phải khai báo một hàm callback có tên là onFinish để hứng dữ liệu file mà người dùng vừa chọn. Nếu thiếu hàm này, hệ thống sẽ ném ra lỗi Uncaught onFinish listener is required.... 
Flmngr file manager
Flmngr file manager
Để khắc phục, bạn cần bổ sung thuộc tính onFinish vào bên trong hàm Flmngr.open().
🛠️ Cách khắc phục
Dưới đây là mẫu code chuẩn để sửa lỗi này. Hãy đảm bảo bạn đã truyền hàm onFinish vào đối tượng cấu hình: 
Flmngr file manager
Flmngr file manager
javascript
import Flmngr from 'flmngr';

const openFileManager = () => {
    Flmngr.open({
        apiKey: "FLMNFLMN", // Thay bằng API key của bạn nếu có
        urlFileManager: 'http://localhost:8000/flmngr',
        urlFiles: 'http://localhost:8000/uploads',
        
        // 1. Bạn đang đặt isMultiple khác null (ở đây là false hoặc true)
        isMultiple: false, 

        // 2. BẮT BUỘC PHẢI THÊM listener onFinish ở đây
        onFinish: (files) => {
            if (files && files.length > 0) {
                // files sẽ là một mảng chứa thông tin các file được chọn
                console.log("Danh sách file đã chọn:", files);
                
                // Ví dụ lấy ra URL của file đầu tiên
                const fileUrl = files[0].url;
                console.log("Đường dẫn file:", fileUrl);
                
                // Bạn có thể set state hoặc làm gì đó với URL này tại đây
            }
        },

        // (Tùy chọn) Thêm callback khi người dùng bấm nút Cancel mà không chọn gì
        onCancel: () => {
            console.log("Người dùng đã đóng trình quản lý file mà không chọn gì.");
        }
    });
};
Hãy thận trọng khi sử dụng mã.

💡 Lưu ý thêm:
Nếu mục đích của bạn chỉ là mở trình quản lý file lên để xem, tải lên hoặc xóa file mà không cần trả kết quả (link ảnh/file) về cho React sau khi đóng:
👉 Hãy sửa isMultiple: false (hoặc true) thành isMultiple: null. Khi đặt bằng null, Flmngr sẽ không đòi hỏi hàm onFinish nữa. 
Flmngr file manager
Flmngr file manager
 +1
Bạn đã áp dụng hàm onFinish này vào code và lấy được đường dẫn ảnh thành công chưa?

import Flmngr from 'flmngr'; // Thư viện lõi để gọi hàm open

export default function MediaManager() {

    const openFileManager = () => {
        Flmngr.open({
            apiKey: "wewO9YKsKxuwgz4Omr2Mcmbp", // API key mặc định miễn phí (có thể thay nếu mua bản quyền)
            // ĐÂY LÀ ĐIỂM QUAN TRỌNG: Kết nối tới Laravel của bạn
            urlFileManager: 'http://laravel12x.local/flmngr', // Route POST vừa tạo ở Bước 1
            urlFiles: 'http://laravel12x.local/uploads',     // Đường dẫn URL công khai để xem ảnh
            isMultiple: true, // true nếu cho phép chọn nhiều file cùng lúc
            // Callback sau khi user chọn file và bấm "Insert"
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

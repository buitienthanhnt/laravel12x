declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}

<!-- Đoạn mã của bạn là một Module Augmentation trong TypeScript. Nó dùng để "mở rộng" (merge) thêm các thuộc tính mới vào một interface đã có sẵn của thư viện @inertiajs/core. -->


Cụ thể, bạn đang định nghĩa cấu trúc cho sharedPageProps — những dữ liệu mà server luôn gửi về cho mọi trang (như thông tin user, trạng thái sidebar).

Giải thích chi tiết:
<!-- declare module '@inertiajs/core': Thông báo cho TypeScript rằng bạn muốn sửa đổi hoặc bổ sung kiểu dữ liệu cho package này mà không cần sửa trực tiếp file trong node_modules. -->

InertiaConfig: Đây là interface gốc của Inertia. Bằng cách viết lại nó ở đây, TypeScript sẽ tự động hợp nhất (merge) các thuộc tính bạn khai báo vào interface gốc.
sharedPageProps:
name: string: Tên ứng dụng hoặc tên user.
auth: Auth: Thông tin xác thực (thường chứa user, permissions). Bạn cần đảm bảo type Auth đã được định nghĩa ở đâu đó.
sidebarOpen: boolean: Trạng thái đóng/mở của thanh menu bên cạnh.
[key: string]: unknown: Đây là Index Signature. Nó cho phép bạn thêm bất kỳ thuộc tính nào khác mà không bị báo lỗi type, miễn là key là chuỗi.
Lợi ích khi làm việc này:

Khi bạn sử dụng hook usePage() trong React/Vue với Inertia, bạn sẽ có IntelliSense (gợi ý code):


typescript
import { usePage } from '@inertiajs/react';

const { props } = usePage();
// TypeScript sẽ gợi ý ngay:
// props.auth, props.name, props.sidebarOpen...
Hãy thận trọng khi sử dụng mã.

Lưu ý nhỏ:
Nếu file này của bạn không có lệnh import hoặc export nào ở đầu file, TypeScript có thể coi đây là một file script global thay vì module. Nếu gặp lỗi, hãy thêm export {} vào đầu file để biến nó thành một module:
typescript
import { Auth } from '@/types'; // Giả sử bạn có type Auth

export {}; // Biến file này thành module

declare module '@inertiajs/core' {
    // ... code của bạn
}
Hãy thận trọng khi sử dụng mã.

Bạn có cần hỗ trợ định nghĩa nốt interface Auth để bộ Type này hoàn chỉnh không?

use:
<!-- import type { InertiaConfig } from '@inertiajs/core'; -->

export default function Home(props: InertiaConfig['sharedPageProps']) {

  console.log(props);
  
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}
<!-- typescript import type -->


Trong TypeScript, import type là một cú pháp đặc biệt dùng để chỉ nhập các định nghĩa kiểu (interfaces, types, classes dưới dạng type), giúp tối ưu hóa quá trình biên dịch.

1. Tại sao nên dùng import type?
Khi bạn biên dịch code sang JavaScript:
import thông thường: Trình biên dịch sẽ giữ lại dòng import này (nếu đó là class hoặc giá trị thực thi).
import type: Trình biên dịch sẽ xóa hoàn toàn dòng này khỏi file JS cuối cùng.
Lợi ích:
Hiệu suất: Giảm kích thước file JS vì không chứa các phần thừa chỉ phục vụ việc kiểm tra kiểu.
Tránh lỗi vòng lặp (Circular Dependencies): Nếu hai file chỉ phụ thuộc nhau về mặt "kiểu dữ liệu", dùng import type sẽ giúp tránh lỗi cấu trúc lúc runtime.

2. Cách sử dụng
Nhập toàn bộ là Type:
typescript
import type { User, Auth } from './types';

const login = (user: User) => { /* ... */ };
Hãy thận trọng khi sử dụng mã.

Nhập kết hợp (Inline import type):
Nếu bạn cần nhập cả giá trị (hàm, biến) và kiểu dữ liệu từ cùng một file:
typescript
import { loginUser, type UserCredentials } from './api';

// loginUser là một hàm thực thi (giá trị)
// UserCredentials chỉ là một định nghĩa kiểu (type)
Hãy thận trọng khi sử dụng mã.

3. Áp dụng vào ví dụ Inertia của bạn
Trong file mà bạn sử dụng usePage, bạn có thể dùng import type để lấy các interface đã khai báo:
typescript
import { usePage } from '@inertiajs/react';
// Chỉ lấy Type để kiểm tra, không lấy code thực thi
import type { User, Auth } from './types'; 

const Profile = () => {
    const { props } = usePage();
    const user = props.auth.user as User; // Ép kiểu an toàn
    
    return <div>{user.name}</div>;
};
Hãy thận trọng khi sử dụng mã.

4. Khi nào BẮT BUỘC dùng?
Nếu bạn bật flag "verbatimModuleSyntax": true hoặc "isolatedModules": true trong tsconfig.json, TypeScript sẽ yêu cầu bạn phải dùng import type cho các kiểu dữ liệu để đảm bảo việc chuyển đổi sang JS (Transpilation) diễn ra an toàn và độc lập giữa các file.
Bạn có muốn mình giải thích thêm về cách cấu hình tsconfig.json để tự động tối ưu các lệnh import này không?





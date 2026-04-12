<!-- react env file -->
Cách sử dụng file .env (biến môi trường) trong dự án React phụ thuộc vào công cụ khởi tạo dự án bạn đang dùng (như Vite hoặc Create React App). 

<!-- 1. Dành cho dự án dùng Vite (Khuyên dùng hiện nay) -->
Vite sử dụng đối tượng import.meta.env thay vì process.env và yêu cầu một tiền tố đặc biệt cho các biến số. 
DEV Community
DEV Community
 +1
Bước 1: Tạo file .env
Tạo một file tên là .env ở thư mục gốc của dự án (cùng cấp với package.json). 
Medium
Medium
 +1
Quy tắc: Mọi biến tự định nghĩa bắt buộc phải bắt đầu bằng tiền tố VITE_. 
DEV Community
DEV Community
env
# .env
VITE_API_URL=https://api.example.com
VITE_TIMEOUT=5000
Hãy thận trọng khi sử dụng mã.

Bước 2: Sử dụng trong code React
Bạn truy cập vào các biến này thông qua import.meta.env.VITE_.... 
DEV Community
DEV Community
 +1
javascript
// App.jsx
function App() {
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log(apiUrl); // In ra: https://api.example.com
  
  return <div>API URL là: {apiUrl}</div>;
}
Hãy thận trọng khi sử dụng mã.

<!-- 2. Dành cho dự án dùng Create React App (CRA)  -->
Create React App sử dụng đối tượng process.env truyền thống và yêu cầu tiền tố khác. 
Medium
Medium
 +1
Bước 1: Tạo file .env
Tạo file .env ở thư mục gốc của dự án. 
Medium
Medium
 +1
Quy tắc: Mọi biến tự định nghĩa bắt buộc phải bắt đầu bằng tiền tố REACT_APP_. 
Medium
Medium
 +1
env
# .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_SECRET_KEY=123456789
Hãy thận trọng khi sử dụng mã.

Bước 2: Sử dụng trong code React
Bạn truy cập vào các biến này thông qua process.env.REACT_APP_.... 
Medium
Medium
 +1
javascript
// App.js
function App() {
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(apiUrl); // In ra: https://api.example.com
  
  return <div>API URL là: {apiUrl}</div>;
}
Hãy thận trọng khi sử dụng mã.

<!-- ⚠️ Lưu ý cực kỳ quan trọng khi dùng .env trong React -->
Không lưu trữ thông tin tuyệt mật: Bản chất React là code chạy dưới Client (trình duyệt của người dùng). Khi bạn build dự án, các giá trị trong file .env sẽ bị đóng gói cứng (hardcoded) thẳng vào file Javascript công khai. Ai cũng có thể inspect source code để lấy ra. Hãy chỉ dùng nó để lưu URL API, mã phân vùng, v.v...
Khởi động lại server: Bất cứ khi nào bạn chỉnh sửa hay thêm biến mới vào file .env, bạn bắt buộc phải tắt terminal đi và chạy lại lệnh khởi động (npm run dev hoặc npm start) thì React mới nhận giá trị mới.
Bảo mật mã nguồn: Luôn luôn thêm .env vào file .gitignore để tránh đẩy các cấu hình này lên các kho chứa công khai như GitHub. 
Bạn đang sử dụng công cụ nào để phát triển dự án React của mình, Vite hay Create React App?

<!-- Hiện tất cả -->
<!-- dung vite co cach nao de import gia tri nhanh nhu: import.meta.env -->

Có, trong Vite bạn có thể rút ngắn cách viết bằng cách sử dụng tính năng alias (đường dẫn ảo) trong file cấu hình hoặc gán nó vào một file trung gian.
Dưới đây là 2 cách phổ biến nhất để bạn không phải gõ cụm từ import.meta.env.VITE_... dài dòng ở khắp mọi nơi trong dự án:
Cách 1: Tạo một file cấu hình tập trung (Khuyên dùng)
Đây là cách làm chuẩn mực nhất trong các dự án thực tế. Bạn gom toàn bộ biến môi trường vào một file duy nhất, vừa giúp rút ngắn cú pháp, vừa dễ quản lý và bảo trì.
Bước 1: Tạo một file đặt tên là env.js (hoặc env.ts) nằm trong thư mục src/:
javascript
// src/env.js
export const ENV = import.meta.env;

// Hoặc bóc tách tường minh từng biến (được khuyên dùng để có gợi ý code tốt hơn)
export const API_URL = import.meta.env.VITE_API_URL;
export const TIMEOUT = import.meta.env.VITE_TIMEOUT;
Hãy thận trọng khi sử dụng mã.

<!-- Bước 2: Sử dụng cực kỳ ngắn gọn trong các file Component: -->
javascript
// src/App.jsx
import { ENV, API_URL } from './env';

function App() {
  console.log(ENV.VITE_API_URL); // Cách lấy nhanh toàn bộ
  console.log(API_URL);          // Cách lấy siêu ngắn gọn
  
  return <div>{API_URL}</div>;
}
Hãy thận trọng khi sử dụng mã.

Cách 2: Sử dụng tính năng "Define" trong vite.config.js
Nếu bạn thực sự muốn biến đó trở thành một biến toàn cục (Global Variable) mà không cần phải thực hiện bất kỳ lệnh import nào ở đầu file, bạn có thể định nghĩa nó trong file cấu hình của Vite.
Bước 1: Mở file vite.config.js ở thư mục gốc và thêm thuộc tính define:
javascript
// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load file .env dựa theo mode (development/production)
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Định nghĩa từ khóa thay thế
      __API_URL__: JSON.stringify(env.VITE_API_URL),
      __ENV__: JSON.stringify(env)
    }
  }
})
Hãy thận trọng khi sử dụng mã.

<!-- Bước 2: Sử dụng trực tiếp trong code mà không cần import: -->
javascript
// src/App.jsx
function App() {
  // Không cần dòng import nào ở trên đầu file cả!
  console.log(__API_URL__); 
  
  return <div>URL: {__API_URL__}</div>;
}
Hãy thận trọng khi sử dụng mã.

⚠️ Lưu ý cho Cách 2: Nếu bạn dùng TypeScript, bạn sẽ cần phải khai báo kiểu dữ liệu cho __API_URL__ trong file .d.ts để tránh bị báo lỗi đỏ gạch chân (dù code vẫn chạy được).
Bạn thấy cách tạo file tập trung (Cách 1) hay dùng biến toàn cục (Cách 2) phù hợp với thói quen code của bạn hơn?
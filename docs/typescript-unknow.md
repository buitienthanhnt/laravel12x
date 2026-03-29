# type 'unknown' is not assignable to type 'ReactNode'.ts(2322) index.d.ts(2267, 9): The expected type comes from property 'children' which is declared here on type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'


Lỗi này xảy ra vì bạn đang cố gắng hiển thị một giá trị có kiểu unknown trực tiếp vào trong JSX (ví dụ: giữa cặp thẻ <h1>...</h1>).
Trong TypeScript, unknown là kiểu "an toàn nhất" nhưng cũng "khắt khe nhất". React không cho phép render unknown vì nó không chắc chắn đó là chuỗi, số hay một component hợp lệ.
1. Tại sao bạn bị lỗi này?
Dựa vào các câu hỏi trước, lỗi này xuất phát từ dòng này trong file định nghĩa của bạn:
typescript
[key: string]: unknown; // Các thuộc tính bổ sung có kiểu unknown
Hãy thận trọng khi sử dụng mã.

Khi bạn lấy một giá trị từ sharedPageProps (ví dụ: props.name) mà TypeScript hiểu nó là unknown, nó sẽ chặn không cho bạn render.
2. Cách khắc phục
Cách A: Ép kiểu (Type Assertion) - Nhanh nhất
Nếu bạn biết chắc chắn giá trị đó là gì (ví dụ là một chuỗi), hãy dùng as:
tsx
<h1>{props.name as string}</h1>
Hãy thận trọng khi sử dụng mã.

Cách B: Thu hẹp kiểu (Type Guarding) - An toàn nhất
Kiểm tra xem nó có tồn tại và là kiểu dữ liệu hợp lệ hay không trước khi dùng:
tsx
{typeof props.name === 'string' && <h1>{props.name}</h1>}
Hãy thận trọng khi sử dụng mã.

Cách C: Cập nhật lại Interface (Khuyên dùng)
Thay vì để unknown, hãy định nghĩa chính xác kiểu dữ liệu cho các thuộc tính bạn thường xuyên sử dụng trong declare module:
typescript
declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string; // Đã xác định là string, sẽ không bị lỗi ReactNode
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: any; // Hoặc dùng 'any' nếu bạn muốn thoải mái (nhưng kém an toàn hơn)
        };
    }
}
Hãy thận trọng khi sử dụng mã.

Tại sao ReactNode không nhận unknown?
ReactNode bao gồm: string, number, ReactElement, Array<ReactNode>, boolean, null hoặc undefined. Vì unknown có thể là bất cứ thứ gì (kể cả một Object hoặc Symbol - những thứ làm React bị crash khi render), nên TypeScript bắt buộc bạn phải xác nhận kiểu dữ liệu trước.
Bạn đang gặp lỗi này ở biến nào cụ thể trong file JSX của mình?





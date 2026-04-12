# Trong Tailwind CSS v4.x, class .container không có một độ rộng (content width) cố định. Chiều rộng tối đa (max-width) của nó sẽ tự động thay đổi khớp với kích thước của breakpoint hiện tại mà màn hình của người dùng đạt tới. 

Nếu bạn sử dụng cỡ chữ mặc định của trình duyệt (1rem = 16px), chiều rộng cụ thể của khối .container ở các màn hình sẽ như sau:
# 1. Chiều rộng cụ thể theo từng màn hình
Khi màn hình rộng từ... 	Độ rộng Content của .container sẽ là:	Tương đương pixel (nếu 1rem = 16px)

<!-- 
	Dưới 640px (Mobile)	100% (Tràn toàn bộ chiều rộng màn hình)	Toàn màn hình
	Từ 640px đến 767px (sm)	40rem	640px
	Từ 768px đến 1023px (md)	48rem	768px
	Từ 1024px đến 1279px (lg)	64rem	1024px
	Từ 1280px đến 1535px (xl)	80rem	1280px
	Từ 1536px trở lên (2xl)	96rem	1536px 
-->

📌 Lưu ý quan trọng: Vì .container chỉ quy định max-width, nên nếu bạn viết <div class="container">, khối này sẽ bị lệch về bên trái màn hình. Bạn bắt buộc phải thêm mx-auto để đẩy nó ra giữa. 

# 2. Muốn giới hạn Content nhỏ hơn (Ví dụ: Không cho to quá 1200px)
Rất nhiều website không muốn nội dung bị dãn rộng tới tận 1536px trên các màn hình máy tính lớn vì sẽ rất mỏi mắt khi đọc. Nếu bạn muốn giới hạn lại, đừng dùng .container. Hãy dùng các class max-w-* kết hợp với w-full và mx-auto để kiểm soát độ rộng chính xác:
Muốn rộng tối đa khoảng 1024px: w-full max-w-5xl mx-auto
Muốn rộng tối đa khoảng 1280px: w-full max-w-7xl mx-auto
Muốn rộng tối đa con số tùy ý (ví dụ 1200px): w-full max-w-[1200px] mx-auto

# 3. Cách ép .container v4.x có một độ rộng cố định cố định
Nếu bạn vẫn muốn dùng class .container nhưng muốn cấu hình lại độ rộng cố định cho nó (không ăn theo breakpoint mặc định nữa), hãy mở file CSS chính và dùng tính năng @utility của v4: 

css
<!-- 
@import "tailwindcss";

@utility container {
  width: 100%;
  margin-inline: auto; /* Tự động căn giữa */
  padding-inline: 1rem; /* Tạo khoảng đệm 16px 2 bên */
  
  /* Giới hạn kịch khung dù màn hình có siêu lớn */
  max-width: 1200px; 
} 
-->

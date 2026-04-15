<!-- keo di chuyen the nhu nao -->
# Để kéo và di chuyển (Drag and Drop) một thẻ div đến vị trí bất kỳ trên màn hình trong React, bạn cần kết hợp giữa: useRef (để lưu trạng thái không làm re-render liên tục), useState (để cập nhật tọa độ hiển thị) và lắng nghe các sự kiện chuột trên toàn màn hình [1].

Dưới đây là cách thực hiện hoàn chỉnh và tối ưu nhất bằng React + TypeScript:
Code React kéo di chuyển thẻ Div
Bạn hãy tạo một component mới và dán đoạn code sau vào. Code này đã được xử lý mượt mà và fix hết các lỗi TypeScript/Event mà bạn gặp ở các câu trước [1].
tsx

import React, { useState, useRef, useEffect } from 'react';

const DraggableDiv = () => {
  // 1. State lưu vị trí hiện tại của thẻ Div (mặc định cách góc trên trái 100px)
  const [position, setPosition] = useState({ x: 100, y: 100 });

  // 2. Các biến Ref để lưu trạng thái kéo (Ref không làm component bị re-render liên tục khi di chuột)
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  // 3. Khi người dùng click chuột xuống thẻ Div
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;

    // Lấy vị trí thực tế của thẻ div lúc click
    const rect = e.currentTarget.getBoundingClientRect();

    // Tính khoảng cách từ điểm click chuột đến mép trên/trái của thẻ div
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  useEffect(() => {
    // 4. Hàm xử lý khi di chuyển chuột trên TOÀN MÀN HÌNH
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      // Tính toán tọa độ X, Y mới của thẻ div
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;

      setPosition({ x: newX, y: newY });
    };

    // 5. Hàm xử lý khi thả chuột ra
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Gắn sự kiện vào document để chuột di chuyển ra ngoài thẻ div vẫn ăn lệnh
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Hủy lắng nghe khi component bị xóa (unmount)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={divRef}
      onMouseDown={handleMouseDown}
      style={{
        // Các thuộc tính CSS bắt buộc để di chuyển tự do
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        
        // CSS làm đẹp giao diện
        width: '200px',
        height: '100px',
        background: '#4caf50',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'move', // Đổi con trỏ chuột thành dạng bàn tay 4 hướng
        userSelect: 'none', // Ngăn bôi đen chữ khi đang kéo
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      }}
    >
      Giữ chuột & Kéo tôi đi!
    </div>
  );
};

export default DraggableDiv;
Hãy thận trọng khi sử dụng mã.
# 💡 Giải thích nguyên lý hoạt động:
Hàm getBoundingClientRect(): Được dùng ở sự kiện onMouseDown để tính toán chính xác điểm bạn nhấp chuột trên thẻ div (offset). Nhờ đó khi kéo, chuột sẽ không bị nhảy về góc trên bên trái của thẻ [1].
MouseEvent thuần: Hàm handleMouseMove trong useEffect bắt buộc phải dùng MouseEvent của trình duyệt chứ không phải React.MouseEvent vì nó được gắn qua lệnh document.addEventListener [1].
position: 'absolute': Thẻ div bắt buộc phải có thuộc tính này trong CSS thì việc gán tọa độ bằng pixel (left, top) mới có tác dụng di chuyển trên màn hình [1].
Bạn có muốn bổ sung thêm tính năng giới hạn vùng kéo (ví dụ không cho kéo thẻ div này lọt ra ngoài phạm vi màn hình) không?
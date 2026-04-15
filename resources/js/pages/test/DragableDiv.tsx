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
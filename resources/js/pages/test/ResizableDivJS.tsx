import React, { useState, useRef } from 'react';

const ResizableBothJS = () => {
  // State quản lý kích thước
  const [dims, setDims] = useState({ width: 300, height: 150 });
  const isResizing = useRef(false);


  // Khi di chuột
  const handleResizeDown = (e: MouseEvent) => {
    if (!isResizing.current) return;

    // Tính toán kích thước mới (giới hạn min 150px, max 800px)
    // const newWidth = Math.max(150, Math.min(800, e.clientX));
    // const newHeight = Math.max(100, Math.min(600, e.clientY));
    const newWidth = e.clientX;
    const newHeight = e.clientY;

    setDims({ width: newWidth, height: newHeight });
  };

  // Khi bấm nút nắm hình vuông
  const showPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    /**
     * getBoundingClientRect() trả về một đối tượng chứa thông tin về vị trí và kích thước của phần tử trên trang, bao gồm:
     * - top: Khoảng cách từ cạnh trên của phần tử đến cạnh trên của cửa sổ trình duyệt.
     * - left: Khoảng cách từ cạnh trái của phần tử đến cạnh trái của cửa sổ trình duyệt.
     * - width: Chiều rộng của phần tử.
     * - height: Chiều cao của phần tử.
     * - right: Khoảng cách từ cạnh phải của phần tử đến cạnh trái của cửa sổ trình duyệt.
     * - bottom: Khoảng cách từ cạnh dưới của phần tử đến cạnh trên của cửa sổ trình duyệt.
     * Thông tin này rất hữu ích để xác định vị trí và kích thước của phần tử trên trang, đặc biệt khi bạn cần thực hiện các thao tác liên quan đến vị trí hoặc kích thước của phần tử đó.
     * 
     */
    target.getBoundingClientRect();
  };

  // Khi thả chuột
  const handleResizeMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResizeDown);
    document.removeEventListener('mouseup', handleResizeMouseUp);
  };

  // Khi bấm chuột vào nút kéo
  const handleMouseResizeDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isResizing.current = true;
    document.addEventListener('mousemove', handleResizeDown);
    document.addEventListener('mouseup', handleResizeMouseUp);
  };


  return (
    <div>
      <div
        style={{
          width: `${dims.width}px`,
          height: `${dims.height}px`,
          position: 'relative', // Quan trọng để đặt nút kéo ở góc
          background: '#e3f2fd',
          border: '1px solid #2196f3',
          padding: '15px',
          boxSizing: 'border-box',
          top: '120px',
          left: '120px',
        }}
      >
        <div>Rộng: <b>{dims.width}px</b></div>
        <div>Cao: <b>{dims.height}px</b></div>

        {/* Nút nắm hình vuông nhỏ ở góc dưới bên phải */}
        <div
          onMouseDown={handleMouseResizeDown}
          style={{
            width: '12px',
            height: '12px',
            background: '#1565c0',
            position: 'absolute',
            right: '0',
            bottom: '0',
            cursor: 'nwse-resize', // Con trỏ chuột dạng kéo chéo
          }}
        />
      </div>
      <div className='p-2 px-4 top-3 bg-gray-500 text-white rounded-xl justify-center content-center text-center absolute left-0' onClick={showPosition}>
        show position
      </div>
    </div>
  );
};

export default ResizableBothJS;
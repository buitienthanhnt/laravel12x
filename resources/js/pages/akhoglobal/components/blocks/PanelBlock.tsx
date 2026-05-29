import { router } from '@inertiajs/react';
import { debounce } from 'lodash';
import { Settings } from 'lucide-react';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { type Block } from '@/pages/test/StockPosition';




type Props = Omit<Block, 'key'> & {
  onSelected?: (param: string) => void;
  selected: 0 | 1 | 2;
  blockKey: string;
};

const PanelBlock = ({ width, height, x, y, name, blockKey, onSelected, selected, style }: Props) => {
  // 1. State lưu vị trí hiện tại của thẻ Div (mặc định cách góc trên trái 100px)
  const [position, setPosition] = useState({ x, y });
  // State quản lý kích thước
  const [dims, setDims] = useState({ width, height });
  const isResizing = useRef(false);

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

  // Khi di chuột
  const handleResizeDown = (e: MouseEvent) => {
    if (!isResizing.current) return;

    const newWidth = e.clientX - position.x;
    const newHeight = e.clientY - position.y;
    // console.log('sự kiện kích hoạt khi kéo chuột thay đổi kích thước khối', { width: newWidth, height: newHeight });
    updateBlockPosition({ width: newWidth, height: newHeight });
    setDims({ width: newWidth, height: newHeight });
  };

  // Hàm xử lý khi di chuyển chuotine trên TOÀN MÀN HÌNH
  const updateBlockPosition = useCallback(
    debounce((newPosition: { width?: number; height?: number, x?: number, y?: number }) => {
      // console.log({ blockKey, ...newPosition });
      router.put('/test/update-block', { key: blockKey, ...newPosition });
    }, 500),
    [blockKey]
  );

  // Khi bấm nút nắm hình vuông
  // const showPosition = (e: React.MouseEvent<HTMLDivElement>) => {
  // const target = e.target as HTMLElement;
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
  // console.log(target.getBoundingClientRect());
  // };

  // Khi thả chuột
  const handleResizeMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResizeDown);
    document.removeEventListener('mouseup', handleResizeMouseUp);
    // console.log('sự kiện kích hoạt sau khi kéo rồi thả chuột thay đổi kích thước khối', dims);
  };

  // Khi bấm chuột vào nút kéo
  const handleMouseResizeDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    isResizing.current = true;
    document.addEventListener('mousemove', handleResizeDown);
    document.addEventListener('mouseup', handleResizeMouseUp);
  };

  useEffect(() => {
    // 4. Hàm xử lý khi di chuyển chuột trên TOÀN MÀN HÌNH
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      // Tính toán tọa độ X, Y mới của thẻ div
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;
      // console.log('kích hoạt khi di chuyển vị trí khối');
      updateBlockPosition({ x: newX, y: newY });
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
  }, [blockKey, updateBlockPosition]);

  /**
   * Khi bấm nút nắm hình vuông
   */
  const onSetSelectedBlock = useCallback(() => {
    onSelected?.(blockKey);
  }, [blockKey, onSelected]);

  return (
    <div
      ref={divRef}
      style={{
        // Các thuộc tính CSS bắt buộc để di chuyển tự do
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        // CSS làm đẹp giao diện
        // width: '200px',
        // height: '100px',
        width: `${dims.width}px`,
        height: `${dims.height}px`,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none', // Ngăn bôi đen chữ khi đang kéo
        borderRadius: '4px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        backgroundColor: selected === 2 || selected === 1 ? undefined : style?.color,
        zIndex: selected === 2 || selected === 1 ? undefined : style?.zIndex,
      }}
      className={selected === 1 ? 'bg-green-400' : 'bg-gray-400'}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: '8px',
          height: '8px',
          background: 'violet',
          position: 'absolute',
          left: 0,
          top: 0,
          cursor: 'move', // Đổi con trỏ chuột thành dạng bàn tay 4 hướng
          zIndex: 50
        }}
      />
      <div className='flex justify-center py-2 w-full h-full relative'>
        {name && <b className='text-black'>{name}</b>}
        <Settings className='absolute top-1 right-1 cursor-pointer opacity-30 hover:opacity-100 ' onClick={onSetSelectedBlock} size={20} color='black'></Settings>
      </div>
      {/* Nút nắm hình vuông nhỏ ở góc dưới bên phải */}
      <div
        onMouseDown={handleMouseResizeDown}
        style={{
          width: '8px',
          height: '8px',
          background: '#1565c0',
          position: 'absolute',
          right: '0',
          bottom: '0',
          cursor: 'nwse-resize', // Con trỏ chuột dạng kéo chéo
        }}
      />
    </div>
  );
};

export default PanelBlock;
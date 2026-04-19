
import Flmngr, { type FlmngrFileWithFormats } from 'flmngr'; // Thư viện lõi để gọi hàm open
import { Trash } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import { type FormField } from '@/types/shareType/FormField';

// interface MediaFileProps {
//   url: string; // Đường dẫn URL của file đã chọn,
//   format: string; // Định dạng file (ví dụ: 'jpg', 'png', 'pdf', v.v.),
//   isServerFile: boolean; // Cho biết file này có phải là file đã lưu trên server hay không
//   metadata: { url: string, },
//   formats: unknown[], // Thông tin về các định dạng khác nhau của file (nếu có)
// }

export default function PickFile({ name, label, ...props }: FormField) {
  const [selectedFiles, setSelectedFiles] = useState<FlmngrFileWithFormats[]>([]);

  const inputFileValue = useMemo(() => {
    if (selectedFiles.length > 0) {
      return selectedFiles.map((file) => file.url).join('|'); // Nếu muốn lưu nhiều URL, có thể nối chúng lại bằng dấu phẩy
    }
    return '';
  }, [selectedFiles]);

  const openFileManager = useCallback(() => {
    const env = import.meta.env;
    if (!env.VITE_APP_URL) {
      console.error("APP_URL is not defined");
      return;
    }

    Flmngr.open({
      apiKey: env.VITE_FLMNGR_KEY, // API key mặc định miễn phí (có thể thay nếu mua bản quyền)
      // ĐÂY LÀ ĐIỂM QUAN TRỌNG: Kết nối tới Laravel của bạn
      urlFileManager: env.VITE_URL_FILE_MANAGER, // Route POST vừa tạo ở Bước 1
      urlFiles: env.VITE_URL_FILES,     // Đường dẫn URL công khai để xem ảnh
      isMultiple: true, // true nếu cho phép chọn nhiều file cùng lúc
      // Callback sau khi user chọn file và bấm "Insert"
      onFinish: (files) => {
        if (files && files.length > 0) {
          // files sẽ là một mảng chứa thông tin các file được chọn
          setSelectedFiles(files); // Lưu lại danh sách file đã chọn vào state
        }
      },
      // (Tùy chọn) Thêm callback khi người dùng bấm nút Cancel mà không chọn gì
      onCancel: () => {
        console.log("Người dùng đã đóng trình quản lý file mà không chọn gì.");
      },
    });
  }, []);

  const handleRemoveFile = useCallback((index: number) => {
    setSelectedFiles((prevFiles) => [...prevFiles.filter((_, i) => i !== index)]);
  }, []);

  return (
    <div className='flex flex-col gap-2'>
      {label && <label htmlFor={`file-${name}`} className={`sm:text-base md:text-lg ${props.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>{label}:</label>}
      <div>
        <p onClick={openFileManager} className='p-2 px-4 bg-gray-600 rounded-md text-white font-semibold inline-block cursor-pointer'>Mở Trình Quản Lý File</p>
      </div>
      {selectedFiles.length > 0 && (
        <>
          <input
            type="text"
            name={name}
            placeholder='selected files...'
            className={`border border-gray-400 p-2 rounded-md`}
            value={inputFileValue}
            readOnly
            title={inputFileValue} // Hiển thị tooltip khi hover nếu có nhiều URL
          />
          <h3>File đã chọn:</h3>
          <div className='grid grid-cols-4 gap-1 bg-gray-200 p-1 rounded-md'>
            {selectedFiles.map((file, index) => (
              <div key={index} className='relative'>
                <img src={file.url} style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px', objectFit: 'cover' }} />
                <Trash className="size-8 text-black absolute top-2 right-2 bg-white rounded-full p-1" onClick={() => handleRemoveFile(index)}></Trash>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

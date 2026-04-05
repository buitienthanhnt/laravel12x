
import { type InertiaConfig } from '@inertiajs/core';
import React, { useCallback, type FunctionComponent } from "react";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';


const Manage: FunctionComponent<InertiaConfig['sharedPageProps']> = () => {
  const listData: { label: string; value: string }[] = [
    { label: 'option1', value: '1' },
    { label: 'option2', value: '2' },
    { label: 'option3', value: '3' },
    { label: 'option4', value: '4' },
  ];
  const [value, setValue] = React.useState<string | null>(null);

  const handleSelect = useCallback((value: string | null) => {
    setValue(value);
  }, []);

  return (
    <div>
      <h3>the page of manage</h3>
      <Checkbox defaultChecked onCheckedChange={(value) => {
        console.log(value);
      }}></Checkbox>
      <Button>
        <span>demo btn</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger >
          <DropdownMenuLabel>{listData.find((item) => item.value === value)?.label || 'Select an option'}</DropdownMenuLabel>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent sideOffset={5}>
            <DropdownMenuItem onSelect={() => {
              handleSelect(null);
            }}>...</DropdownMenuItem>
            {listData.map((item) => <DropdownMenuItem key={item.value} onSelect={() => {
              handleSelect(item.value)
            }} textValue={item.value}>{item.label}</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>

      {/* Trong HTML, để tạo danh sách gợi ý cho một trường nhập liệu (form field), bạn sử dụng thẻ <datalist> kết hợp với thuộc tính list của thẻ <input>. 
        Cách thức hoạt động:

        Thẻ <datalist>: Chứa các thẻ <option> định nghĩa những giá trị gợi ý.

        Liên kết: Bạn gán một id duy nhất cho <datalist> và tham chiếu id đó trong thuộc tính list của thẻ <input>.

        Trải nghiệm người dùng: Khi người dùng nhập liệu, trình duyệt sẽ hiển thị một menu thả xuống chứa các tùy chọn khớp với nội dung đang nhập (tính năng tự động hoàn

        Các điểm cần lưu ý:

        Tính linh hoạt: Khác với thẻ <select> (bắt buộc chọn trong danh sách), <datalist> vẫn cho phép người dùng tự nhập các giá trị không có sẵn.

        Hỗ trợ loại Input: Ngoài loại text, nó còn hoạt động tốt với các loại như date, time, number, range, và color.

        Giao diện: Trình duyệt tự quyết định cách hiển thị danh sách này; bạn rất khó dùng CSS để tùy chỉnh kiểu dáng trực tiếp của menu thả xuống.

        Dùng cho nhiều trường: Bạn có thể dùng một <datalist> duy nhất cho nhiều thẻ <input> khác nhau bằng cách gán cùng một id vào thuộc tính list của chúng. 
      */}
      <div className='bg-blue-100 my-4'>
        <label htmlFor="browser-input">Chọn trình duyệt bạn dùng:</label>
        <input list="browsers" id="browser-input" name="browser" placeholder="Gõ để tìm kiếm..." />

        <datalist id="browsers">
          <option value="Chrome" />
          <option value="Firefox" />
          <option value="Safari" />
          <option value="Edge" />
          <option value="Opera" />
        </datalist>
      </div>

    </div>
  )
}

export default Manage;
import { type InertiaConfig } from '@inertiajs/core';
import { Link } from '@inertiajs/react';
import React, { useCallback, type FunctionComponent } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import akho from '@/routes/akho';
import { type ProductInterface } from '@/types/akhoglobal/product';
import { type Pagination } from '@/types/shareType/Pagination';


const Manage: FunctionComponent<InertiaConfig['sharedPageProps'] & { products: Pagination, categories: Pagination }> = ({ products, categories }) => {
  const listData: { label: string; value: string }[] = [
    { label: 'option1', value: '1' },
    { label: 'option2', value: '2' },
    { label: 'option3', value: '3' },
    { label: 'option4', value: '4' },
  ];
  // console.log(categories.data);

  const [value, setValue] = React.useState<string | null>(null);

  const handleSelect = useCallback((value: string | null) => {
    setValue(value);
  }, []);

  return (
    <div className='p-1 sm:p-2 md:p-4 space-y-2'>
      <DropdownMenu>
        <DropdownMenuTrigger >
          <DropdownMenuLabel>{listData.find((item) => item.value === value)?.label || 'Select an option'}</DropdownMenuLabel>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent sideOffset={5}>
            {/* <DropdownMenuItem onSelect={() => {
              handleSelect(null);
            }}>...</DropdownMenuItem> */}
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
      <Input className='mt-2'
        placeholder={'Gõ để tìm kiếm...'}
        list="browserx"
      >
      </Input>
      <datalist id="browserx">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Safari" />
        <option value="Edge" />
        <option value="Opera" />
      </datalist>

      <Link className='btn bg-green-400 text-white p-2 rounded-xl my-2' href={akho.register.url()}>create product</Link>
      <Link className='btn bg-blue-400 text-white p-2 rounded-xl my-2' href={akho.category.create.url()}>create category</Link>

      {products.data && <div className='space-y-1 my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1'>
        {products.data.map((item: ProductInterface) => <Link href={akho.product.detail.url(item.alias)} className='flex gap-2 bg-gray-200 p-1 rounded-md' key={item.id}>
          <img src={item.image_path} className='size-28 object-cover rounded-md' alt={item.name} loading='lazy' />
          <p className='font-semibold'>{item.name}</p>
        </Link>)}
      </div>}
    </div>
  )
}

export default Manage;

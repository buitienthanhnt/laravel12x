import type * as  SelectPrimitive from "@radix-ui/react-select";
import { useState, type FunctionComponent } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type FormField } from "@/types/shareType/FormField";

type Option = {
  label: string,
  value: string,
};

type Props = React.ComponentProps<typeof SelectPrimitive.Root> & FormField

const SelectOption: FunctionComponent<Props> = ({ name, placeholder, options, ...props }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(props.value);

  /**
   * handle function for select item.
   * @param newValue 
   */
  const handleValueChange = (newValue: string) => {
    // Nếu click lại đúng giá trị cũ -> Xóa giá trị (Bỏ chọn)
    if (newValue === selectedValue) {
      setSelectedValue("");
    } else {
      // Nếu click vào giá trị mới -> Cập nhật bình thường
      setSelectedValue(newValue);
    }
  };

  if (!options) {
    return null;
  }

  return (
    <Select name={name} {...props}
      value={selectedValue}
    >
      <SelectTrigger className="SelectTrigger">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option: Option) => <SelectItem className="select-item" onPointerDown={() => {
          handleValueChange(option.value.toString());
        }} value={option.value.toString()} key={option.value}>{option.label}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}

export default SelectOption;

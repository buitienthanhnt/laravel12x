import { XIcon } from "lucide-react";
import { type FunctionComponent, useState } from "react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { type FormField } from "@/types/shareType/FormField";

type Option = {
  label: string,
  value: string,
};

type Props = {
  options?: Option[],
  selected?: string[],
  onSelect: (selectedValues: string[]) => void,
  className?: string,
} & FormField

const SelectMultiCheckbox: FunctionComponent<Props> = ({ placeholder, options, onSelect, selected: initialSelected, label, className, ...props }) => {
  const [selected, setSelected] = useState<string[]>(initialSelected || []);

  const handleSelect = (value: string) => {
    let newSelected: string[];
    if (selected.includes(value)) {
      newSelected = selected.filter((v) => v !== value);
    } else {
      newSelected = [...selected, value];
    }
    setSelected(newSelected);
    onSelect(newSelected);
  }

  if (!options) {
    return null;
  }

  return (
    <div className={cn("border border-gray-300 rounded-md p-2", className)}>
      <DropdownMenu >
        <DropdownMenuTrigger className="min-w-4">
          {label && <div className={`sm:text-base md:text-lg ${props.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>{label || placeholder || "Select Option"}:</div>}
        </DropdownMenuTrigger>
        {selected.length > 0 ? <div className="flex flex-wrap gap-1">
          {selected.map((s, index) => <div className="flex border px-1.5 border-gray-400 p-1 rounded-md items-center space-x-1" key={index}>
            <XIcon className="size-4 cursor-pointer font-semibold" color="black" strokeWidth={3.5} onClick={() => handleSelect(s)} />
            <span>{options.find((o) => o.value === s)?.label}</span>
          </div>)}
        </div> : null}
        <DropdownMenuContent>
          {options.map((option) => (
            <DropdownMenuCheckboxItem textValue={option.value} key={option.value} checked={selected.includes(option.value)}
              onSelect={(e) => {
                e.preventDefault(); // Quan trọng: Giữ menu mở để chọn tiếp mục khác
                handleSelect(option.value);
              }}>
              <span>{option.label}</span>
            </DropdownMenuCheckboxItem>
          ))}
          {/* <DropdownMenuSub>
            <DropdownMenuSubTrigger className="px-2 py-1.5 text-sm">Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuCheckboxItem textValue="Sub Option 1" checked={selected.includes("Sub Option 1")}
                onSelect={(e) => {
                  e.preventDefault();
                  handleSelect("Sub Option 1");
                }}>
                <span>Sub Option 1</span>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem textValue="Sub Option 2" checked={selected.includes("Sub Option 2")}
                onSelect={(e) => {
                  e.preventDefault();
                  handleSelect("Sub Option 2");
                }}>
                <span>Sub Option 2</span>
              </DropdownMenuCheckboxItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SelectMultiCheckbox;

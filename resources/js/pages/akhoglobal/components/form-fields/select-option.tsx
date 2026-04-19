import type * as  SelectPrimitive from "@radix-ui/react-select";
import { type FunctionComponent } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type FormField } from "@/types/shareType/FormField";

type Option = {
  label: string,
  value: string,
};

type Props = React.ComponentProps<typeof SelectPrimitive.Root> & FormField

const SelectOption: FunctionComponent<Props> = ({ name, placeholder, options, ...props }) => {
  if (!options) {
    return null;
  }

  return (
    <Select name={name} {...props}>
      <SelectTrigger className="SelectTrigger">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option: Option) => <SelectItem value={option.value.toString()} key={option.value}>{option.label}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}

export default SelectOption;

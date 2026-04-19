import { Input } from "@/components/ui/input";
import { type FormFieldDefine, } from '@/types/shareType/FormField';
import { FormFieldType } from "../../constans/FormField";
import { ChooseFile, PickFile, SelectOption, Textarea, Checkbox } from "../form-fields";
import SelectMultiCheckbox from '../form-fields/multi-select';

type Props = {
  form_fields: FormFieldDefine[];
  onChange?: (key: string, value: string | string[] | boolean | null | undefined | number) => void;
  errors: { [key: string]: string };
};

export default function FieldsRender({ form_fields, errors, onChange }: Props) {

  return (
    <>
      {form_fields.map((field, index) => {
        switch (field.type) {
          case FormFieldType.TEXT:
            return (
              <Input
                name={field.key}
                placeholder={field.label}
                key={index}
                type='text'
                required={field.required}
              ></Input>
            );
          case FormFieldType.NUMBER:
            return (
              <Input
                name={field.key}
                placeholder={field.label}
                key={index}
                type='number'
                required={field.required}
                {...field.field_rules}
              ></Input>
            );
          case FormFieldType.CHOOSE_FILE:
            return (
              <ChooseFile
                key={index}
                name={field.key}
                placeholder={field.label}
                label={field.label}
                required={field.required}
                error={errors[field.key]}
              ></ChooseFile>
            );
          case FormFieldType.SELECT:
            return (
              <SelectOption name={field.key}
                key={index}
                placeholder={field.placeholder}
                label={field.label}
                required={field.required}
                options={field.options}
              ></SelectOption>
            );
          case FormFieldType.SELECT_CHECKBOX:
            return (
              <SelectMultiCheckbox
                name={field.key}
                key={index}
                label={field.label}
                onSelect={(val) => {
                  onChange?.(field.key, val)
                }}
                placeholder={field.placeholder}

                required={field.required}
                options={field.options}>
              </SelectMultiCheckbox>
            );
          case FormFieldType.TEXTAREA:
            return (
              <Textarea key={index} placeholder={field.label}></Textarea>
            );
          case FormFieldType.CHECKBOX:
            return (
              <Checkbox key={index} name={field.key} label={field.label} required={field.required} value={'on'}></Checkbox>
            )
          case FormFieldType.PICK_FILE:
            return (
              <PickFile key={index} name={field.key} label={field.label} required={field.required}></PickFile>
            )
          default:
            break;
        }
      })}
    </>
  )
}

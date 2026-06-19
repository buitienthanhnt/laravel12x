import { type InertiaConfig } from '@inertiajs/core';
import { Form, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type FormFieldDefine, } from '@/types/shareType/FormField';
import { type RouteFormDefinition } from '@/wayfinder';
import { FormFieldType } from "../../constans/FormField";
import { ChooseFile, PickFile, SelectOption, Textarea, Checkbox } from "../form-fields";
import SelectMultiCheckbox from '../form-fields/multi-select';


type Method = "get" | "post" | "put" | "delete" | "patch" | "head" | "options";

type Props = {
  form_info: RouteFormDefinition<Method>,
  form_fields: FormFieldDefine[];
} & Omit<InertiaConfig['sharedPageProps'], 'form_fields'>;

export default function FormRender({ form_info, form_fields }: Props) {
  const _form_fields: { [key: string]: string | string[] } = {};
  form_fields.map((field) => {
    _form_fields[field.key] = '';
  });


  /**
   * Xây dựng mảng dành cho MultiSelect
   * @see https://react-select.com/home
   * khi dùng hành động gán giá trị thủ công cho form thì vẫn phải thông qua hook useForm để bắt và gán giá trị
   * @see https://react-hook-form.com/get-started
   * bởi vì các thành phần tùy chỉnh không tự tham chiếu giá trị vào phần tử form được
   * do đó các giá trị là mảng hay kiểu tuỳ ý nào thì cứ áp dụng quy tắc của JsonObject để truyền giá trị lên server
   * vd: 
   *   const { data, setData, errors } = useForm({
   *     title: '',
   *     skills: [], // Mảng dành cho MultiSelect
   *   });
   * chúng ta truyền mảng string: 
   *   setData('skills', ['React', 'Vue']) cho skill.
   */

  const { data: form_data, setData, } = useForm(_form_fields);

  return (
    <Form
      {...(form_info) as unknown as RouteFormDefinition<Method>}
      className="space-y-2"
      disableWhileProcessing
      showProgress={true}
      transform={(data) => {
        const cleaned = Object.fromEntries(
          Object.entries(form_data).filter(([_, value]) => value !== null && value !== undefined && value !== "")
        );
        return { ...data, ...cleaned };
      }}
    >
      {({
        errors,
        hasErrors,
        processing,
        progress,
        wasSuccessful,
        recentlySuccessful,
        setError,
        clearErrors,
        resetAndClearErrors,
        defaults,
        isDirty,
        reset,
        submit,
      }) => (
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
                      setData(field.key, val)
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
          <Button
            type="submit"
            // type="button"
            className="mt-2 w-full"
            tabIndex={5}
            data-test="register-user-button"
          >
            Create product
          </Button>
        </>
      )}
    </Form>
  )
}

//  <div className="mt-4">
//         <label>Chọn kỹ năng:</label>
//         <MultiSelect
//           options={[
//             { value: 'php', label: 'PHP' },
//             { value: 'react', label: 'React' }
//           ]}
//           selected={data.skills}
//           // Cập nhật state của useForm, component <Form /> sẽ tự lấy data mới nhất
//           onChange={(values) => setData('skills', values)}
//         />
//         {errors.skills && <div className="text-red-500">{errors.skills}</div>}
//       </div>
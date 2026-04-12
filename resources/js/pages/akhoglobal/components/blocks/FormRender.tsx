import { type InertiaConfig } from '@inertiajs/core';
import { Form } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {type FormFieldDefine, } from '@/types/shareType/FormField';
import { type RouteFormDefinition } from '@/wayfinder';
import { FormFieldType } from "../../constans/FormField";
import { ChooseFile, PickFile, SelectOption, Textarea, Checkbox } from "../form-fields";


type Method = "get" | "post" | "put" | "delete" | "patch" | "head" | "options";

type Props = {
  form_info: RouteFormDefinition<Method>,
  form_fields: FormFieldDefine[];
} & InertiaConfig['sharedPageProps'];

export default function FormRender({ form_info, form_fields }: Props) {

  return (
    // @ts-ignore
    <Form
      {...(form_info) as unknown as RouteFormDefinition<Method>}
      className="space-y-2"
      disableWhileProcessing
      showProgress={true}
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
                    placeholder={field.label}
                    label={field.label}
                    required={field.required}
                    options={field.options}
                  ></SelectOption>
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
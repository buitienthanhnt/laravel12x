import { type InertiaConfig } from '@inertiajs/core';
import { type FormFieldDefine } from "@/types/shareType/FormField";
import FieldsRender from '../components/blocks/FieldsRender';
import { Button } from '@/components/ui/button';
import { Form, useForm } from '@inertiajs/react';
import { RouteFormDefinition } from '@/wayfinder';


type Props = {
  custom_fields: {
    price_fields: FormFieldDefine[];
  },
  form_fields: FormFieldDefine[] & InertiaConfig['sharedPageProps'];
};

const CreateProduct = ({ custom_fields: { price_fields }, form_fields }: Props) => {

  const _form_fields: { [key: string]: string | string[] } = {};
  form_fields.map((field) => {
    _form_fields[field.key] = '';
  });
  const { data: form_data, setData, } = useForm(_form_fields);

  return (
    <div className='container mx-auto p-4'>
      <Form
      {...({ method: 'post', action: '/akho/store' } as RouteFormDefinition<'post'>)}
      className="space-y-2"
      disableWhileProcessing
      showProgress={true}
      transform={(data) => {
        const cleaned = Object.fromEntries(
          Object.entries(form_data).filter(([_, value]) => value !== null && value !== undefined && value !== "")
        );
        return {...data, ...cleaned};
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
        <FieldsRender form_fields={form_fields} errors={errors} onChange={setData}></FieldsRender>
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
    </div>
  );
}

export default CreateProduct;
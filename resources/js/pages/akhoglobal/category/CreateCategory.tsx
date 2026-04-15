import { type InertiaConfig } from "@inertiajs/core";
import { Head } from "@inertiajs/react";
import { type FormFieldDefine } from "@/types/shareType/FormField";
import { type RouteFormDefinition } from "@/wayfinder";
import FormRender from "../components/blocks/FormRender";


type Props = {
  form_fields: FormFieldDefine[];
} & InertiaConfig['sharedPageProps'];

export default function Create({ form_fields, }: Props) {
  console.log(form_fields);
  

  return (
    <>
      <Head>
        <title>product create</title>
      </Head>
      <div className="container mx-auto min-h-screen">
        <div className="p-4 bg-gray-100">
          <FormRender
            form_info={{ method: 'post', action: '/akho/cate/store' } as RouteFormDefinition<'post'>}
            form_fields={form_fields}
          />
        </div>
      </div >
    </>
  );
}

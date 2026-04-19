import { type InertiaConfig } from "@inertiajs/core";
import { Head } from "@inertiajs/react";
import { type FormFieldDefine } from "@/types/shareType/FormField";
import { type RouteFormDefinition } from "@/wayfinder";
import FormRender from "./components/blocks/FormRender";


type Props = {
  custom_fields: {
    	price_fields: FormFieldDefine[]; 
  },
  form_fields: FormFieldDefine[] & InertiaConfig['sharedPageProps'];
};

export default function Create({ form_fields, custom_fields: { price_fields } }: Props) {

  return (
    <>
      <Head>
        <title>product create</title>
      </Head>
      <div className="mx-auto min-h-screen">
        <div className="p-2 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* @ts-expect-error */}
          <FormRender
            form_info={{ method: 'post', action: '/akho/store' } as RouteFormDefinition<'post'>}
            form_fields={[...form_fields, ...price_fields]}
          />
          <div className="bg-blue-200 min-h-10">
            <div>
              price setting
            </div>
            <div>
              stock setting
            </div>
            <div>
              category setting
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

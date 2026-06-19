import { type InertiaConfig } from "@inertiajs/core";
import { Head } from "@inertiajs/react";
import FormRender from "@/pages/akhoglobal/components/blocks/FormRender";
import { type FormFieldDefine } from "@/types/shareType/FormField";
import { type RouteFormDefinition } from "@/wayfinder";
import AmuaUrl from "../../network/AmuaUrl";

type Props = {
  form_fields: FormFieldDefine[];
} & InertiaConfig['sharedPageProps'];

export default function Create({ form_fields, }: Props) {

  return (
    <>
      <Head>
        <title>product category</title>
      </Head>
      <div className="container mx-auto min-h-screen">
        <div className="p-4 bg-gray-100">
          <FormRender
            form_info={AmuaUrl.category.store as RouteFormDefinition<'post'>}
            form_fields={form_fields}
          />
        </div>
      </div >
    </>
  );
}

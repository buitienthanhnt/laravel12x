import { type InertiaConfig } from "@inertiajs/core";
import { Head } from "@inertiajs/react";
import { type JSX } from "react";
import FormRender from "@/pages/amuaglobal/components/blocks/FormRender";
import { type FormFieldDefine } from "@/types/shareType/FormField";
import { type RouteFormDefinition } from "@/wayfinder";
import { ContentLayout } from "../../layout";
import AmuaUrl from "../../network/AmuaUrl";



type Props = {
  form_fields: FormFieldDefine[];
} & InertiaConfig['sharedPageProps'];

function Create({ form_fields, }: Props) {

  return (
    <>
      <Head>
        <title>category register</title>
      </Head>
      <div className="p-4 bg-gray-100">
        <FormRender
          form_info={AmuaUrl.category.store as RouteFormDefinition<'post'>}
          form_fields={form_fields}
          submitTitle="Create category"
        />
      </div>
    </>
  );
}

Create.layout = (page: JSX.Element) => <ContentLayout>{page}</ContentLayout>

export default Create;

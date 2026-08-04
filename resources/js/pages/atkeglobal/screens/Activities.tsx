import { Form, Link, useForm, usePage } from "@inertiajs/react";
import { type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectOption } from "@/pages/akhoglobal/components/form-fields";
import { type PageShareType } from "@/pages/amuaglobal/types/PageType";
import ActivityItem from "../components/sliver/ActivityItem";
import BaseLayout from "../layouts/BaseLayout";
import { type ActivityPaginateType } from "../types/Activity";
import {type TransactionType } from "../types/Transaction";

interface Props extends PageShareType {
  activity_paginate: ActivityPaginateType;
}

const Activities: FunctionComponent<Props> = () => {

  return (
    <BaseLayout>
      <Link href="/activity/transactions" className="text-blue-500 underline">Xem danh sách giao dịch</Link>
      <ActivitiesPage />
      <ActivityForm></ActivityForm>
    </BaseLayout>
  );
}

const ActivitiesPage: FunctionComponent = () => {
  const { activity_paginate } = usePage<Props>().props;

  if (!activity_paginate) {
    return null;
  }

  return <div className="flex flex-col gap-y-4 my-2">
    <div className="text-lg font-semibold">Danh sách giao dịch:</div>
    <div className="flex flex-col gap-y-2">
      {activity_paginate.data.map((activity) => (<ActivityItem key={activity.id} activity={activity} />))}
    </div>
  </div>
}

export const ActivityForm: FunctionComponent<{ transaction?: TransactionType }> = ({ transaction }) => {
  const { data, setData } = useForm({
    price: 0,
    qty: 1,
    tran_id: transaction?.id || null,
  });

  return (
    <Form action={'/activity/add-activity'} method={'post'} className="border p-4 rounded-xl space-y-2">
      <Input type="text" name="label" placeholder="Ghi chú" ></Input>
      <SelectOption name="action" placeholder="Lệnh" required options={[
        { label: 'mua', value: 'buy' },
        { label: 'bán', value: 'sell' }
      ]} />
      <div className="flex space-x-4">
        <SelectOption name="type" placeholder="Vật phẩm" required options={[
          { label: 'bạc', value: 'sliver' },
          { label: 'vàng', value: 'gold' }
        ]} />
        <SelectOption name="unit" placeholder="Đơn vị" required options={[
          { label: 'Lượng', value: 'L' },
          { label: 'Chỉ', value: 'C' },
          { label: 'Gram', value: 'G' },
          { label: 'Kg', value: 'KG' },
          { label: 'Ounce', value: 'O' },
        ]} />
      </div>
      <Input name="tran_id" type="hidden" value={data.tran_id || ''}></Input>
      <div className="flex space-x-4">
        <Input type="number" min={0} name="price" placeholder="Giá giao dịch" onChange={(e) => setData('price', Number(e.target.value || 0))}></Input>
        <Input type="number" min={1} name="qty" placeholder="Số lượng giao dịch" onChange={(e) => setData('qty', Number(e.target.value || 1))}></Input>
      </div>
      {!!data.price && !!data.qty && <div className="font-semibold text-xl justify-end flex text-blue-400">Khối lượng khớp lệnh: {data.price * data.qty}</div>}
      <div>
        <Button>Khớp lệnh</Button>
      </div>
    </Form>
  )
}
export default Activities;

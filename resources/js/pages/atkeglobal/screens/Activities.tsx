import { Form, Link, useForm, usePage } from "@inertiajs/react";
import clsx from "clsx";
import { type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectOption } from "@/pages/akhoglobal/components/form-fields";
import { type PageShareType } from "@/pages/amuaglobal/types/PageType";
import BaseLayout from "../layouts/BaseLayout";
import { type ActivityPaginateType } from "../types/Activity";

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
      {activity_paginate.data.map((activity) => (
        <Link key={activity.id} href={`/activity/detail/${activity.id}`} className="border p-4 rounded-xl space-y-2 flex justify-between">
          <div className="font-semibold">{activity.label}</div>
          <div>{activity.type}</div>
          <div>Giá: {activity.price}</div>
          <div>{activity.qty} {activity.unit}</div>
          <div className={clsx(activity.action === 'buy' ? 'text-green-500' : 'text-red-500')}>
            Lệnh: {activity.action === 'buy' ? 'mua' : 'bán'}
          </div>
          <div>{new Date(activity.created_at).toLocaleString()}</div>
        </Link>
      ))}
    </div>
  </div>
}

const ActivityForm: FunctionComponent = () => {
  const { data, setData } = useForm({
    price: 0,
    qty: 1,
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

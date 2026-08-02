import { useCallback, type FunctionComponent } from "react";
import { type PageShareType } from "@/pages/amuaglobal/types/PageType";
import BaseLayout from "../layouts/BaseLayout";
import { type ActivityType } from "../types/Activity";
import clsx from "clsx";
import { Form, Head, router, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  activity: ActivityType;
} & PageShareType;

const ActivityDetail: FunctionComponent<Props> = ({ activity }) => {

  const { data, setData, post, con } = useForm({
    ...activity
  });

  const onSellAction = useCallback(() => {
    router.post('/activity/add-activity', {
      type: data.type,
      action: 'sell',
      price: data.price,
      qty: data.qty,
      unit: data.unit,
      label: data.label,
      target_id: data.id,
    }, {
      onBefore: () => confirm('Bạn có chắc chắn muốn bán?'),
    })
  }, [data]);

  return (
    <BaseLayout>
      <Head title="Chi tiết giao dịch" />
      <div className="flex flex-col gap-y-4 my-2">
        <div className="font-semibold">{activity.label}</div>
        <div className="border p-4 rounded-xl space-y-2 justify-between">
          <div>{activity.type}</div>
          <div>Giá: {activity.price}</div>
          <div>{activity.qty} {activity.unit}</div>
          <div className={clsx(activity.action === 'buy' ? 'text-green-500' : 'text-red-500')}>
            Lệnh: {activity.action === 'buy' ? 'mua' : 'bán'}
          </div>
          <div>{new Date(activity.created_at).toLocaleString()}</div>
          {activity.action === 'buy' && (
            <Form>
              <p>lua chon ban:</p>
              <div className="flex space-x-4 my-2">
                <Input type="number" min={0} name="price" value={data.price} placeholder="Giá giao dịch" onChange={(e) => setData('price', e.target.value as unknown as number)}></Input>
                <Input type="number" min={1} name="qty" value={data.qty} placeholder="Số lượng giao dịch" onChange={(e) => setData('qty', Number(e.target.value))}></Input>
              </div>
              {!!data.price && !!data.qty && <div className="font-semibold text-xl justify-end flex text-blue-400">Khối lượng khớp lệnh: {data.price * data.qty}</div>}
              <Button type="button" onClick={onSellAction} className="bg-red-500 text-white hover:bg-red-600">Bán</Button>
            </Form>
          )}
        </div>
      </div>
    </BaseLayout>
  )
}

export default ActivityDetail;
import { Form, Head, router, useForm } from "@inertiajs/react";
import clsx from "clsx";
import { useCallback, type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type PageShareType } from "@/pages/amuaglobal/types/PageType";
import { useSellPrice } from "../hooks/useSellPrice";
import BaseLayout from "../layouts/BaseLayout";
import { type ActivityType } from "../types/Activity";

type Props = {
  activity: ActivityType;
} & PageShareType;

const ActivityDetail: FunctionComponent<Props> = ({ activity }) => {
  const { sliver, gold } = useSellPrice();

  const { data, setData,} = useForm({
    ...activity,
    price: activity.type === 'sliver' ? sliver[activity.unit].buyPrice : gold[activity.unit].buyPrice,
  });

  const totalSell = data.price * data.qty - activity.price * data.qty;

  const onSellAction = useCallback(() => {
    router.post('/transaction/add-activity', {
      type: data.type,
      action: 'sell',
      price: data.price,
      qty: data.qty,
      unit: data.unit,
      label: data.label,
      target_id: data.id,
      tran_id: data.tran_id,
    }, {
      onBefore: () => confirm('Bạn có chắc chắn muốn bán?'),
    })
  }, [data,]);

  return (
    <BaseLayout>
      <Head title="Chi tiết giao dịch" />
      <div className="flex flex-col gap-y-4 my-2">
        <div className="font-semibold">{activity.label}</div>
        <div className="border p-4 rounded-xl space-y-2 justify-between">
          <div className={clsx(activity.action === 'buy' ? 'text-green-500' : 'text-red-500', 'font-semibold flex justify-between')}>
            <span>Lệnh: {activity.action === 'buy' ? 'mua' : 'bán'}</span>
            <span className="text-black text-sm">{new Date(activity.created_at).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold text-xl">Vật phẩm: {' '}
              <span className={activity.type === 'sliver' ? 'text-gray-400' : 'text-yeoolw-500'}>{activity.type === 'sliver' ? 'Bạc' : 'Vàng'}</span>
            </div>
            <div className="font-semibold text-xl">Giá: {activity.price}</div>
            <div className="font-semibold text-xl">Số lượng: {activity.qty} {activity.unit}</div>
          </div>
          {activity.action === 'buy' && (
            <Form>
              <p className="font-semibold text-md text-red-400">Lựa chọn bán:</p>
              <div className="flex space-x-4 my-2">
                <div className="flex flex-col flex-1">
                  <p className="font-semibold">
                    Giá bán:
                  </p>
                  <Input type="number" min={0} name="price" value={data.price} placeholder="Giá giao dịch" onChange={(e) => setData('price', e.target.value as unknown as number)}></Input>
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-semibold">Số lượng:</p>
                  <Input type="number" min={1} name="qty" value={data.qty} placeholder="Số lượng giao dịch" onChange={(e) => setData('qty', Number(e.target.value))}></Input>
                </div>
              </div>
              {!!data.price && !!data.qty && <div className="font-semibold text-xl justify-end flex text-blue-400">Khối lượng khớp lệnh: {data.price * data.qty}</div>}
              <div className={clsx(totalSell > 0 ? 'text-green-500' : 'text-red-500', "font-semibold text-xl justify-end flex")}>{totalSell > 0 ? 'Lãi' : 'Lỗ'} dự kiến: {Math.abs(totalSell)}</div>
              <Button type="button" onClick={onSellAction} className="bg-red-500 text-white hover:bg-red-600">Bán</Button>
            </Form>
          )}
        </div>
      </div>
    </BaseLayout>
  )
}

export default ActivityDetail;
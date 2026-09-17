import clsx from "clsx";
import { forIn, groupBy } from "lodash";
import { type FunctionComponent } from "react";
import { formatCurrency } from "@/pages/amuaglobal/until/currency";
import { bangGia } from "../../assets/data";
import { type ActivityType } from "../../types/Activity";

interface Props {
  type: 'sliver' | 'gold';
  activities: ActivityType[];
}
const ReduceActivity: FunctionComponent<Props> = ({ type, activities }) => {

  const groupByUnit = groupBy(activities, (activity) => activity.unit);
  const total: { unit: string; qty: number, buyPrice: number }[] = [];
  let totalBuyPrice = 0;
  let totalSellPrice = 0;
  let targetSell = 0;

  forIn(groupByUnit, (value, key) => {
    let totalQuantity = 0;
    let totalBuyUnit = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i].action === 'buy') {
        totalQuantity += value[i].qty;
        totalBuyPrice += value[i].qty * value[i].price;
        totalBuyUnit += value[i].qty * value[i].price;
      } else {
        totalQuantity -= value[i].qty;
        totalSellPrice += value[i].qty * value[i].price;
        totalBuyUnit -= value[i].qty * value[i].price;
      }
    }
    targetSell += totalQuantity * bangGia[type][key].buyPrice;
    if (totalQuantity <= 0) {
      return;
    }
    total.push({
      unit: key,
      qty: totalQuantity,
      buyPrice: totalBuyUnit,
    });
  });

  const totalTarget = total.length > 0 ? (targetSell + totalSellPrice - totalBuyPrice) : (totalSellPrice - totalBuyPrice);

  if (!activities || activities.length === 0) {
    return null;
  }

  return (
    <div className="border rounded-xl p-2 ">
      <div className={clsx(
        "mt-2 font-semibold text-xl",
        type === 'sliver' ? 'text-gray-400' : 'text-yellow-400',
      )}>
        Tổng tích trữ {type === 'sliver' ? 'bạc' : 'vàng'} phiên hiện tại:
        {total.length > 0 ? total.map((item, index) => (
          <div key={index}> {item.unit}: {item.qty} {'=>'} {formatCurrency(item.qty * bangGia[type][item.unit].buyPrice, 'vnđ')}</div>
        )) : ' Không có tích trữ'}
      </div>
      <div className="mt-2 font-semibold text-md">
        <p className="text-red-400">Giá trị mua: {formatCurrency(totalBuyPrice, 'vnđ')}</p>
        {!!totalSellPrice && <p className="text-blue-400">Giá trị đã bán: {formatCurrency(totalSellPrice, 'vnđ')}</p>}
        {!!total.length && <p>Đọng vốn: {formatCurrency(totalBuyPrice - totalSellPrice, 'vnđ')}</p>}
        {!!total.length && <p className="text-green-400">Gía trị nắm giữ hiện tại: {formatCurrency(targetSell, 'vnđ')}</p>}
        <p className={
          `${totalTarget > 0 ? 'text-green-500' : 'text-red-500'}`
        }>{total.length > 0 ? 'Dự kiến:' : ''} {totalTarget > 0 ? 'Lãi' : 'Lỗ'}: {formatCurrency(Math.abs(totalTarget), 'vnđ')}
        </p>
      </div>
    </div>
  )
}

export default ReduceActivity;
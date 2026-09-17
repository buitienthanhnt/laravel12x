import { Link } from "@inertiajs/react";
import clsx from "clsx";
// import { useCallback } from "react";
import { type ActivityType } from "../../types/Activity";

const ActivityItem = ({ activity }: { activity: ActivityType }) => {

  // const onSellAction = useCallback(() => {
  //   console.log(activity);
  //   return;
  // }, [activity])

  return (
    <Link href={`/transaction/activity/detail/${activity.id}`} className="border p-4 rounded-xl space-y-2 flex justify-between items-center">
      <div className={clsx(activity.action === 'buy' ? 'text-green-500' : 'text-red-500', "font-semibold")}>
        Lệnh: {activity.action === 'buy' ? 'mua' : 'bán'}
      </div>
      <div className={clsx(activity.type === 'sliver' ? 'text-gray-400' : 'text-yellow-500', "font-semibold")}>{activity.type === 'sliver' ? 'Bạc' : 'Vàng'}</div>
      <div className="font-semibold">{activity.label}</div>
      <div>Giá: {activity.price}</div>
      <div>{activity.qty} {activity.unit}</div>
      <div>{new Date(activity.created_at).toLocaleString()}</div>
      {/* {activity.action === 'buy' && <div className="bg-red-400 p-2 rounded-md font-semibold text-white">Bán</div>} */}
    </Link>
  )
}

export default ActivityItem;
import { Link } from "@inertiajs/react"
import clsx from "clsx"
import { type ActivityType } from "../../types/Activity";

const ActivityItem = ({ activity }: { activity: ActivityType }) => {

  return (
    <Link href={`/activity/detail/${activity.id}`} className="border p-4 rounded-xl space-y-2 flex justify-between">
      <div className="font-semibold">{activity.label}</div>
      <div>{activity.type}</div>
      <div>Giá: {activity.price}</div>
      <div>{activity.qty} {activity.unit}</div>
      <div className={clsx(activity.action === 'buy' ? 'text-green-500' : 'text-red-500')}>
        Lệnh: {activity.action === 'buy' ? 'mua' : 'bán'}
      </div>
      <div>{new Date(activity.created_at).toLocaleString()}</div>
    </Link>
  )
}

export default ActivityItem;
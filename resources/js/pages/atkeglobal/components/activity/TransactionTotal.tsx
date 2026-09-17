import { groupBy } from "lodash";
import { type ActivityType } from "../../types/Activity";
import ReduceActivity from "./ReduceActivity";

export const TransactionTotal = ({ activities }: { activities?: ActivityType[] }) => {
  const allBuy = groupBy(activities, (activity) => activity.type);

  if (!activities || activities.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-between mt-2">
      <ReduceActivity type={'sliver'} activities={allBuy?.sliver}></ReduceActivity>
      <ReduceActivity type={'gold'} activities={allBuy?.gold}></ReduceActivity>
    </div>
  )
}

export default TransactionTotal;
import { type PageShareType } from "@/pages/amuaglobal/types/PageType";
import ActivityItem from "../components/sliver/ActivityItem";
import BaseLayout from "../layouts/BaseLayout";
import { type ActivityType } from "../types/Activity";
import { type TransactionType } from "../types/Transaction";
import { ActivityForm } from "./Activities";

interface Props extends PageShareType {
  transaction: TransactionType;
}

const TransactionDetail = ({ transaction }: Props) => {

  return (
    <BaseLayout>
      <div>
        <p className="font-semibold">Giao dịch: {transaction.label} </p>
        <p className="font-semibold text-blue-600">{transaction.time}</p>
      </div>

      <ListActivity activities={transaction.activities}></ListActivity>
      <ActivityForm transaction={transaction}></ActivityForm>
    </BaseLayout>
  )
}

const ListActivity = ({ activities }: { activities?: ActivityType[] }) => {

  return (
    <div>
      <div>list activity</div>
      {activities?.map((activity) => (
        <ActivityItem key={activity.id} activity={activity}></ActivityItem>
      ))}
    </div>
  )
}


export default TransactionDetail;
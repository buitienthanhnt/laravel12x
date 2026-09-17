import { Link } from "@inertiajs/react";
import { type PageShareType } from "@/pages/amuaglobal/types/PageType";
import ActivityItem from "../components/activity/ActivityItem";
import TransactionTotal from "../components/activity/TransactionTotal";
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
      <TransactionInfo transaction={transaction}></TransactionInfo>
      <ActivityForm transaction={transaction}></ActivityForm>
      <ListActivity activities={transaction.activities}></ListActivity>
      <TransactionTotal activities={transaction.activities}></TransactionTotal>
    </BaseLayout>
  )
}

const TransactionInfo = ({ transaction }: { transaction: TransactionType }) => {
  return (
    <div>
      <div className="flex justify-end">
        <Link href={'/transaction'}
          className="text-blue-600 font-semibold text-md hover:underline uppercase ">
          Danh sách giao dịch
        </Link>
      </div>
      <div className="flex gap-x-3">
        <p className="font-semibold">Giao dịch: {transaction.label} </p>
        <p className="font-semibold text-blue-600">{transaction.time}</p>
      </div>
    </div>
  )
}

const ListActivity = ({ activities }: { activities?: ActivityType[] }) => {

  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-md m-2">Danh mục khớp lệnh:</p>
      {activities?.map((activity) => (
        <ActivityItem key={activity.id} activity={activity}></ActivityItem>
      ))}
    </div>
  )
}


export default TransactionDetail;
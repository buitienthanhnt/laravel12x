import { Link } from "@inertiajs/react";
import { type TransactionType } from "../../types/Transaction";

const TransactionItem = ({ transaction }: {
  transaction: TransactionType
}) => {
  return (
    <Link
      href={`/activity/tran-detail/${transaction.id}`} className="border p-4 rounded-xl space-y-2 flex justify-between bg-blue-300">
      {transaction.label} - {transaction.time}
    </Link>
  )
}

export default TransactionItem;
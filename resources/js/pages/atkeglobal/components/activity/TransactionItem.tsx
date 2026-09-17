import { Link } from "@inertiajs/react";
import { type TransactionType } from "../../types/Transaction";

const TransactionItem = ({ transaction }: {
  transaction: TransactionType
}) => {
  return (
    <Link
      href={`/transaction/detail/${transaction.id}`}
      className="border p-4 rounded-xl space-y-2 flex justify-between items-center border-blue-300 font-semibold">
      <span>Giao dịch: {transaction.label}</span>
      <span>{transaction.time}</span>
    </Link>
  )
}

export default TransactionItem;
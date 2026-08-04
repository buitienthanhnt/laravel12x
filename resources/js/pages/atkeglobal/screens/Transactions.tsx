import { type FunctionComponent } from "react"
import { type PageShareType } from "@/pages/amuaglobal/types/PageType"
import BaseLayout from "../layouts/BaseLayout";
import { Form, usePage } from "@inertiajs/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type TransactionType } from "../types/Transaction";
import { type Pagination } from "@/types/shareType/Pagination";
import TransactionItem from "../components/activity/TransactionItem";


interface Props extends PageShareType {
  transactions: Omit<Pagination, 'data'> & { data: TransactionType[] },
}

const Transactions: FunctionComponent<Props> = ({ transactions }) => {

  return (
    <BaseLayout>
      <TransList></TransList>
      <div>
        Tạo giao dịch mới:
      </div>
      <TransForm />
    </BaseLayout>
  )
}

const TransList = () => {
  const { transactions } = usePage().props as unknown as Props;

  if (!transactions.data || transactions?.data.length === 0) {
    return (
      <div>
        Chưa có giao dịch
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {transactions?.data.map((transaction, index) => <TransactionItem
        key={index}
        transaction={transaction}>
      </TransactionItem>
      )}
    </div>
  );
}

const TransForm: FunctionComponent = () => {
  return (
    <Form action={'/activity/add-transaction'} method={'post'} className="border p-4 rounded-xl space-y-2">
      <Input type="text" name="label" placeholder="Ghi chú" ></Input>
      <Input type="datetime-local" name="time" placeholder="Thời gian" ></Input>
      <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Tạo giao dịch</Button>
    </Form>
  );
}

export default Transactions;
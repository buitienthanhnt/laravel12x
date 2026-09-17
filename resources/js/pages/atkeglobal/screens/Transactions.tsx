import { Form, Head, Link, usePage } from "@inertiajs/react";
import { type FunctionComponent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type PageShareType } from "@/pages/amuaglobal/types/PageType";
import { type Pagination } from "@/types/shareType/Pagination";
import TransactionItem from "../components/activity/TransactionItem";
import BaseLayout from "../layouts/BaseLayout";
import { type TransactionType } from "../types/Transaction";

interface Props extends PageShareType {
  transactions: Omit<Pagination, 'data'> & { data: TransactionType[] },
}

const Transactions: FunctionComponent<Props> = () => {

  return (
    <BaseLayout className={'flex gap-x-4'}>
      <Head title="Giao dịch"></Head>
      <TransList />
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
    <div className="space-y-2 flex-1">
      <div className="flex justify-between">
        <p className="font-semibold text-xl uppercase">Danh sách giao dịch:</p>
        <Link href="/transaction/activity" className="font-semibold text-md uppercase text-blue-500">Danh sách khớp lệnh:</Link>
      </div>
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
    <div className="flex-1 space-y-2">
      <p className="font-semibold text-xl uppercase text-purple-400">
        Tạo giao dịch mới:
      </p>
      <Form action={'/transaction/add'} method={'post'} className="border p-4 rounded-xl space-y-2">
        <Input type="text" name="label" placeholder="Ghi chú" ></Input>
        <Input type="datetime-local" name="time" placeholder="Thời gian" ></Input>
        <div className="flex-1 flex justify-end">
          <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Tạo giao dịch</Button>
        </div>
      </Form>
    </div>
  );
}

export default Transactions;
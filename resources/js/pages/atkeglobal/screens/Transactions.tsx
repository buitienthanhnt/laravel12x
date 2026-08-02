import { type FunctionComponent } from "react"
import { type PageShareType } from "@/pages/amuaglobal/types/PageType"
import BaseLayout from "../layouts/BaseLayout";
import { Form } from "@inertiajs/react";
import { Input } from "@/components/ui/input";


interface Props extends PageShareType {
  transactions: unknown[],
}

const Transactions: FunctionComponent<Props> = ({ transactions }) => {

  return (
    <BaseLayout>
      <div>
        Tạo giao dịch mới:
      </div>
      <TransForm />
    </BaseLayout>
  )
}

const TransForm: FunctionComponent = () => {
  return (
    <Form action={'/activity/add-transaction'} method={'post'} className="border p-4 rounded-xl space-y-2">
      <Input type="text" name="label" placeholder="Ghi chú" ></Input>
      <Input type="datetime-local" name="time" placeholder="Thời gian" ></Input>
    </Form>
  );
}

export default Transactions;
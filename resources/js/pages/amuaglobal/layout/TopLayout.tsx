import clsx from "clsx";
import BaseLayout from "./BaseLayout";
import { TopPage } from "./components";

type Props = {
  chiddren: React.ReactNode;
  className?: string;
}

const TopLayout = ({ chiddren, className }: Props) => {
  return (
    <BaseLayout>
      <TopPage></TopPage>
      <div className={clsx('', className)}>
        {chiddren}
      </div>
    </BaseLayout>
  )
}

export default TopLayout;
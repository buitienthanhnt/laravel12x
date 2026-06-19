import clsx from "clsx";
import BaseLayout from "./BaseLayout";
import { FootPage } from "./components";

type FootLayoutProps = {
  children: React.ReactNode,
  className?: string;
};

const FootLayout = ({ children, className }: FootLayoutProps) => {
  return (
    <BaseLayout>
      <div className={clsx('', { className })}>
        {children}
      </div>
      <FootPage></FootPage>
    </BaseLayout>
  )
}

export default FootLayout
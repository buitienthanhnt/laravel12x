import clsx from "clsx";
import BaseLayout from "./BaseLayout";
import { TopPage, FootPage } from "./components";

type ContentLayoutProps = {
  children: React.ReactNode;
  className?: string;
};
const ContentLayout = ({ children, className }: ContentLayoutProps) => {
  /**
   * className="flex flex-col flex-1" cho base layout 
   * để có thể dãn hết nội dung phần thân(cũng cần có: "flex-1" để dãn tối đa) với header, footer
   */
  return (
    <BaseLayout className="space-y-4 flex flex-col flex-1 ">
      <TopPage></TopPage>
      <div className={clsx('flex-1 p-4', className)} id="page-content-id">
        {children}
      </div>
      <FootPage></FootPage>
    </BaseLayout>
  )
}

export default ContentLayout;
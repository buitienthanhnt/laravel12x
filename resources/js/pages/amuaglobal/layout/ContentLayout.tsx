import clsx from "clsx";
import BaseLayout from "./BaseLayout";
import { TopPage, FootPage } from "./components";

type ContentLayoutProps = {
  children: React.ReactNode;
  contentClass?: string;
  baseClass?: string;
};
const ContentLayout = ({ children, baseClass, contentClass }: ContentLayoutProps) => {
  /**
   * className="flex flex-col flex-1" cho base layout 
   * để có thể dãn hết nội dung phần thân(cũng cần có: "flex-1" để dãn tối đa) với header, footer
   */
  return (
    <BaseLayout className={clsx('flex flex-col flex-1', baseClass)}>
      <TopPage></TopPage>
      <div className={clsx('flex-1', contentClass)} id="page-content-id">
        {children}
      </div>
      <FootPage></FootPage>
    </BaseLayout>
  )
}

export default ContentLayout;
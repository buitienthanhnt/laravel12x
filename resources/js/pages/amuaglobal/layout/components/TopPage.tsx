import { Link } from "@inertiajs/react";
import clsx from "clsx";

type TopPageProps = {
  className?: string
}

const adminhtmlPrefix = '/adminhtml';

type ActivityProp = {
  label: string;
  path: string;
};

const activities: ActivityProp[] = [
  {
    label: 'product',
    path: `${adminhtmlPrefix}/product`,
  },
  {
    label: 'category',
    path: `${adminhtmlPrefix}/category`,
  },
];

const TopPage = ({ className }: TopPageProps) => {
  return (
    <div className={clsx("bg-gray-300 p-2 flex gap-1", className)}>
      {activities.map((activity, index) => <ActivityBtn key={index} {...activity}></ActivityBtn>)}
    </div>
  )
}

const ActivityBtn = ({ label, path, className }: ActivityProp & { className?: string }) => {
  return (
    <Link href={path} className={clsx("bg-gray-700 rounded-[5px] p-2 px-4 font-semibold text-xl text-white", className)}>
      {label}
    </Link>
  )
}

export default TopPage;
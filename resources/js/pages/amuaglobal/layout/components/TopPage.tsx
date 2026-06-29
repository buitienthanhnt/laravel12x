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
    label: 'dashboard',
    path: adminhtmlPrefix,
  },
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
    <div className={clsx("bg-gray-200 py-2 p-1 flex gap-px", className)}>
      {activities.map((activity, index) => <ActivityBtn key={index} {...activity}></ActivityBtn>)}
    </div>
  )
}

const ActivityBtn = ({ label, path, className }: ActivityProp & { className?: string }) => {
  return (
    <Link href={path} className={clsx("bg-gray-700 p-2 px-4 font-semibold text-xl text-white", className)}>
      {label}
    </Link>
  )
}

export default TopPage;
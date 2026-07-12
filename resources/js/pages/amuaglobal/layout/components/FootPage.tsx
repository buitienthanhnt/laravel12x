import { Link } from "@inertiajs/react";
import clsx from "clsx";

type FootPageProps = {
  className?: string;
};

const FootPage = ({ className }: FootPageProps) => {

  return (
    <div className={clsx("bg-gray-400 p-4 justify-center items-center flex", className)}>
      <Link href={'/'} className="text-xl font-semibold">foot page</Link>
    </div>
  )
}

export default FootPage;
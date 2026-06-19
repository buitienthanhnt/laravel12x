import clsx from "clsx";
import { type CategoryType } from "../../types/CategoryType";

interface Props {
  category: CategoryType;
  className?: string;
}

export default function CategoryListItem({ category: { name, id, ...rest }, className }: Props) {
  return (
    <div className={clsx("flex items-center gap-2 bg-white p-2 rounded-md hover:cursor-pointer", className)}>
      <img src={rest.image_path} alt={name} className="w-20 h-20 object-contain" />
      <h1 className="font-semibold">{name} {id}</h1>
    </div>
  )
}
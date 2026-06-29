import clsx from "clsx";
import { type CategoryType } from "../../types/CategoryType";

interface Props {
  category: CategoryType;
  className?: string;
}

export default function CategoryListItem({ category: { name, id, ...rest }, className }: Props) {
  return (
    <div className={clsx("flex gap-2 bg-white p-2 rounded-md hover:cursor-pointer", className)}>
      <img src={rest.image_path} alt={name} className="w-32 h-32 object-cover rounded-lg " />
      <div className="flex flex-1">
        <h1 className="font-semibold">{name} {id}</h1>
        <p>{rest.description}</p>
      </div>
    </div>
  )
}
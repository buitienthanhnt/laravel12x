import { Deferred, usePage } from "@inertiajs/react";
import { type FunctionComponent } from "react";
import { type CategoryType } from "../../types/CategoryType";



export default function TopCategory() {
  const { mainCategory }: { mainCategory: CategoryType[] } = usePage().props as unknown as { mainCategory: CategoryType[] };

  return (
    <Deferred fallback={<div>Loading...</div>} data={["mainCategory"]}>
      <div className="flex gap-2">
        {mainCategory?.map((category) => {
          return (
            <MainCategory {...category} key={category.id}></MainCategory>
          )
        })}
      </div>
    </Deferred >
  );
}

const MainCategory: FunctionComponent<CategoryType> = ({ name, ...category }) => {
  return (
    <div className="font-semibold text-xl text-white bg-gray-400 p-2 px-3 rounded-md hover:cursor-pointer">
      {name}
    </div>
  )
}

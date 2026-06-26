import { Link } from "@inertiajs/react";
import { type JSX } from "react/jsx-runtime";
import { CategoryListItem } from "../../components/category";
import { ContentLayout } from "../../layout";
import AmuaUrl from "../../network/AmuaUrl";
import { type CategoryType } from "../../types/CategoryType";

type Props = {
  categories: CategoryType[];
};
export default function List({ categories }: Props) {

  return (
    <>
      <Link href={AmuaUrl.category.create.action}>Create category</Link>
      <h1>Category List</h1>
      {!!categories?.length && <div className="bg-gray-400 space-y-2 rounded-xl p-2">
        {categories.map((category, index) => {
          return (<CategoryListItem key={index} category={category} />)
        })}
      </div>
      }
    </>
  )
}

List.layout = (page: JSX.Element) => <ContentLayout>{page}</ContentLayout>
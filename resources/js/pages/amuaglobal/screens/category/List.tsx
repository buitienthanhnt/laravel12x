import { Head, Link } from "@inertiajs/react";
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
      <Head>
        <title>categories</title>
      </Head>
      <div className="space-y-2 my-1">
        <Link href={AmuaUrl.category.create.action} className="bg-gray-400 p-2 rounded-md inline-block">Create category</Link>
        {!!categories?.length && <div className="bg-gray-300 rounded-xl p-2 grid grid-cols-3 gap-1">
          {categories.map((category, index) => {
            return (<CategoryListItem key={index} category={category} />)
          })}
        </div>
        }
      </div>
    </>
  )
}

List.layout = (page: JSX.Element) => <ContentLayout>{page}</ContentLayout>
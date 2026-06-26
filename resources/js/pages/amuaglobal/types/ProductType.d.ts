import { type CategoryType } from "./CategoryType";

export type ProductType = {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export type ProductDetailType = ProductType & {
  image_path: string;
  description: string;
  categories: CategoryType[];
  attributes: { [key: string]: string };
  galleries: { path: string }[];
};
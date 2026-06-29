export type CategoryType = {
  id: number;
  name: string;
  slug: string;
  image_path?: string;
  description?: string;
  parent_id: number | null;
}

export type AdminCategoryType = CategoryType & {
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export type CategoryDetail = CategoryType & {
  childrents: CategoryType[],
  parent: CategoryType | null,
  // attributes?: Attribute[],
}
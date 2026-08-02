import { type Pagination } from "@/types/shareType/Pagination";

export interface ActivityType {
  id: number;
  label: string;
  action: 'buy' | 'sell';
  type: 'sliver' | 'gold';
  unit: 'L' | 'C' | 'G' | 'KG' | 'O';
  price: number;
  qty: number;
  target_id: number | null;
  user_id: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ActivityPaginateType extends Omit<Pagination, 'data'> {
  data: ActivityType[];
}
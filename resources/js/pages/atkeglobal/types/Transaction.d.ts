export interface TransactionType {
  id: number;
  time: string;
  label?: string;
  activities?: ActivityType[];
}
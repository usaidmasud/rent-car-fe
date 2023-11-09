import { DataUser } from "./auth.model";
import { TMeta } from "./root.model";
import { DataTransaction } from "./transaction.model";

export interface ReturnTransactionResponseModel {
  totalItems: number;
  data: DataReturnTransaction[];
  meta?: TMeta;
}

export interface DataReturnTransaction {
  id: string;
  date: string;
  total_day: number;
  rental_fee: number;
  total_payment: number;
  transaction_id: string;
  user_id: string;
  transaction: DataTransaction;
  user: DataUser;
  created_at: string | null;
  updated_at: string | null;
}
export interface RequestDataReturnTransactionTemp {
  plat_number: string;
}

export interface RequestDataReturnTransaction {
  plat_number: string;
  date: string;
}

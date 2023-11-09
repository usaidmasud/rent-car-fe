import { DataUser } from "./auth.model";
import { DataCar } from "./car.model";
import { TMeta } from "./root.model";

export interface TransactionResponseModel {
  totalItems: number;
  data: DataTransaction[];
  meta?: TMeta;
}

export interface DataTransaction {
  id: string;
  date: string;
  start_date: string;
  end_date: string;
  car_id: string;
  status: string;
  car: DataCar;
  user: DataUser;
  created_at: string | null;
  updated_at: string | null;
}
export interface RequestDataTransactionTemp {
  rangeDate: string[];
  car_id: string;
}

export interface RequestDataTransaction {
  start_date: string;
  end_date: string;
  car_id: string;
}

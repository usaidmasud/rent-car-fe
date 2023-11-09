import { TMeta } from "./root.model";

export interface CarResponseModel {
  totalItems: number;
  data: DataCar[];
  meta?: TMeta;
}

export interface DataCar {
  id: string;
  merk: string;
  model: string;
  photo?: string;
  plat_number: string;
  rental_fee: number;
  is_rent: number;
  created_at: string | null;
  updated_at: string | null;
}
export interface RequestDataCar {
  merk: string;
  model: string;
  plat_number: string;
  rental_fee: number;
  is_rent: number;
}

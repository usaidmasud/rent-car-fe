import { DataCar, RequestDataCar } from "@/libs/models/car.model";

export const initialFormState = (row?: DataCar): RequestDataCar => {
  if (row) {
    return {
      merk: row.merk,
      model: row.model,
      plat_number: row.plat_number,
      is_rent: row.is_rent,
      rental_fee: row.rental_fee,
    };
  }
  return {
    merk: "",
    model: "",
    plat_number: "",
    is_rent: 0,
    rental_fee: 0,
  };
};

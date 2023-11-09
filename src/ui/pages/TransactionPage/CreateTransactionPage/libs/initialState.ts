import {
  DataTransaction,
  RequestDataTransactionTemp
} from "@/libs/models/transaction.model";
import dayjs from "dayjs";

export const initialFormState = (
  row?: DataTransaction
): RequestDataTransactionTemp => {
  if (row) {
    return {
      rangeDate: [
        dayjs(row.start_date).toISOString(),
        dayjs(row.end_date).toISOString(),
      ],
      car_id: row.car_id,
    };
  }
  return {
    rangeDate: [dayjs().toISOString(), dayjs().add(2, 'day').toISOString()],
    car_id: "",
  };
};

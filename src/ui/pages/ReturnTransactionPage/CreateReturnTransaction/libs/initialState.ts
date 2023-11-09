import {
  DataReturnTransaction,
  RequestDataReturnTransactionTemp,
} from "@/libs/models/returnTransaction.model";
import {
  DataTransaction,
  RequestDataTransactionTemp,
} from "@/libs/models/transaction.model";
import dayjs from "dayjs";

export const initialFormState = (
  row?: DataReturnTransaction
): RequestDataReturnTransactionTemp => {
  if (row) {
    return {
      plat_number: row.transaction?.car?.plat_number,
    };
  }
  return {
    plat_number: "",
  };
};

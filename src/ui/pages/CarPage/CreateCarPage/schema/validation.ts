import { MESSAGE_STATE } from "@/libs/utils/messageState";
import * as yup from "yup";

export const validation = yup
  .object({
    merk: yup.string().required(MESSAGE_STATE.VALIDATION_REQUIRED),
    model: yup.string().required(MESSAGE_STATE.VALIDATION_REQUIRED),
    plat_number: yup.string().required(MESSAGE_STATE.VALIDATION_REQUIRED),
    rental_fee: yup.number().required(MESSAGE_STATE.VALIDATION_REQUIRED),
    is_rent: yup.number().required(MESSAGE_STATE.VALIDATION_REQUIRED),
  })
  .required();

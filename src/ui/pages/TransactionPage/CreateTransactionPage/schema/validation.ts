import { MESSAGE_STATE } from "@/libs/utils/messageState";
import * as yup from "yup";

export const validation = yup
  .object({
    rangeDate: yup
      .array()
      .of(yup.string().required(MESSAGE_STATE.VALIDATION_REQUIRED))
      .min(2)
      .required(MESSAGE_STATE.VALIDATION_REQUIRED),
    car_id: yup.string().required(MESSAGE_STATE.VALIDATION_REQUIRED),
  })
  .required();

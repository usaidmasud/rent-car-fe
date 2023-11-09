import { MESSAGE_STATE } from "@/libs/utils/messageState";
import * as yup from "yup";

export const validation = yup
  .object({
    plat_number: yup.string().required(MESSAGE_STATE.VALIDATION_REQUIRED),
  })
  .required();

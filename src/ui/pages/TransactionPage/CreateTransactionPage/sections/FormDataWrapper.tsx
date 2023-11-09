"use client";
import {
  RequestDataTransaction,
  RequestDataTransactionTemp,
} from "@/libs/models/transaction.model";
import { getListTransaction } from "@/libs/redux/features/transaction.slice";
import { AppDispatch } from "@/libs/redux/store";
import { storeTransactionService } from "@/libs/services/restAPI/transaction.service";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import { openNotificationWithIcon } from "@/libs/utils/notification";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { initialFormState } from "../libs/initialState";
import { validation } from "../schema/validation";
import FormData from "./FormData";
import dayjs from "dayjs";
function FormDataWrapper() {
  const {
    handleSubmit,
    control,
    setFocus,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RequestDataTransactionTemp>({
    defaultValues: initialFormState(),
    resolver: yupResolver(validation),
  });
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const onSubmit: SubmitHandler<RequestDataTransactionTemp> = async (data) => {
    const formData: RequestDataTransaction = {
      car_id: data.car_id,
      start_date: dayjs(data.rangeDate[0]).format('YYYY-MM-DD'),
      end_date: dayjs(data.rangeDate[1]).format('YYYY-MM-DD'),
    };
    await storeTransactionService(formData)
      .then(() => {
        dispatch(getListTransaction());
        openNotificationWithIcon({
          type: "success",
          message: MESSAGE_STATE.STORE_SUCCESS,
        });
        router.back();
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    setTimeout(() => {
      setFocus("rangeDate");
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="px-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormData control={control} errors={errors} setValue={setValue} />
        <ButtonFill block loading={isSubmitting} color="primary">
          {MESSAGE_STATE.BUTTON_STORE}
        </ButtonFill>
      </form>
    </div>
  );
}

export default FormDataWrapper;

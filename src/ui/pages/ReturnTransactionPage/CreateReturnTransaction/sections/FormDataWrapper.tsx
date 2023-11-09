"use client";
import { getListTransaction } from "@/libs/redux/features/transaction.slice";
import { AppDispatch } from "@/libs/redux/store";
import { storeTransactionService } from "@/libs/services/restAPI/transaction.service";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import { openNotificationWithIcon } from "@/libs/utils/notification";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { initialFormState } from "../libs/initialState";
import { validation } from "../schema/validation";
import FormData from "./FormData";
import { RequestDataReturnTransaction, RequestDataReturnTransactionTemp } from "@/libs/models/returnTransaction.model";
import { storeReturnTransactionService } from "@/libs/services/restAPI/returnTransaction.service";
import { getListReturnTransaction } from "@/libs/redux/features/returnTransaction.slice";
function FormDataWrapper() {
  const {
    handleSubmit,
    control,
    setFocus,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RequestDataReturnTransactionTemp>({
    defaultValues: initialFormState(),
    resolver: yupResolver(validation),
  });
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const onSubmit: SubmitHandler<RequestDataReturnTransactionTemp> = async (data) => {
    const formData: RequestDataReturnTransaction = {
      plat_number: data.plat_number,
      date: dayjs().format('YYYY-MM-D')
    };
    await storeReturnTransactionService(formData)
      .then(() => {
        dispatch(getListReturnTransaction());
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
      setFocus("plat_number");
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="px-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=""></div>
        <FormData control={control} errors={errors} setValue={setValue} />
        <ButtonFill block loading={isSubmitting} color="primary">
          {MESSAGE_STATE.BUTTON_STORE}
        </ButtonFill>
      </form>
    </div>
  );
}

export default FormDataWrapper;

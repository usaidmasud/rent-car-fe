"use client";
import { RequestDataCar } from "@/libs/models/car.model";
import { getDetailCar, getListCar } from "@/libs/redux/features/car.slice";
import { useAppSelector } from "@/libs/redux/hooks";
import { AppDispatch } from "@/libs/redux/store";
import { updateCarService } from "@/libs/services/restAPI/car.service";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import { openNotificationWithIcon } from "@/libs/utils/notification";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import FormSkeleton from "@/ui/components/Form/FormSkeleton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { initialFormState } from "../../CreateCarPage/libs/initialState";
import { validation } from "../../CreateCarPage/schema/validation";
import FormData from "../../CreateCarPage/sections/FormData";
function FormDataWrapper() {
  const { row, status } = useAppSelector((state) => state.carSlice);
  console.log("row ", row);
  const {
    handleSubmit,
    control,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<RequestDataCar>({
    resolver: yupResolver(validation),
  });
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetailCar(id as string))
      .unwrap()
      .then((res) => {
        reset(initialFormState(res.data));

        setTimeout(() => {
          setFocus("merk");
        }, 200);
      })
      .catch(() => {
        router.back();
        openNotificationWithIcon({
          type: "warning",
          message: MESSAGE_STATE.NOT_FOUND,
        });
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const router = useRouter();
  const onSubmit: SubmitHandler<RequestDataCar> = async (data) => {
    await updateCarService(row.id, data)
      .then(() => {
        dispatch(getListCar());
        openNotificationWithIcon({
          type: "success",
          message: MESSAGE_STATE.UPDATE_SUCCESS,
        });
        router.back();
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="px-6 pb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {status === "loading" ? (
          <FormSkeleton />
        ) : (
          <Fragment>
            <FormData control={control} errors={errors} />
            <ButtonFill block loading={isSubmitting} color="primary">
              {MESSAGE_STATE.BUTTON_UPDATE}
            </ButtonFill>
          </Fragment>
        )}
      </form>
    </div>
  );
}

export default FormDataWrapper;

"use client";
import { RequestDataReturnTransactionTemp } from "@/libs/models/returnTransaction.model";
import { useAppSelector } from "@/libs/redux/hooks";
import InputField from "@/ui/components/Form/InputField";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
interface Props {
  control: Control<RequestDataReturnTransactionTemp, any>;
  errors: FieldErrors<RequestDataReturnTransactionTemp>;
  setValue: UseFormSetValue<RequestDataReturnTransactionTemp>;
}
function FormData({ control, errors, setValue }: Props) {
  const { response } = useAppSelector((state) => state.carSlice);

  return (
    <div>
      <div className="">

      <Controller
        control={control}
        name="plat_number"
        render={({ field }) => (
          <InputField
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            inputRef={field.ref}
            label="Masukkan Nomor Kendaraan"
            helpText={errors?.plat_number?.message}
            isDanger={errors?.plat_number && true}
          />
        )}
      />
      </div>
    </div>
  );
}

export default FormData;

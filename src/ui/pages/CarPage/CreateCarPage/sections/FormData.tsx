"use client";
import { RequestDataCar } from "@/libs/models/car.model";
import InputField from "@/ui/components/Form/InputField";
import InputFieldNumber from "@/ui/components/Form/InputFieldNumber";
import InputRadio from "@/ui/components/Form/InputRadio";
import { Control, Controller, FieldErrors } from "react-hook-form";
interface Props {
  control: Control<RequestDataCar, any>;
  errors: FieldErrors<RequestDataCar>;
}
function FormData({ control, errors }: Props) {
  return (
    <div>
      <Controller
        control={control}
        name="merk"
        render={({ field }) => (
          <InputField
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            inputRef={field.ref}
            label="Merk"
            helpText={errors?.merk?.message}
            isDanger={errors?.merk && true}
          />
        )}
      />
      <Controller
        control={control}
        name="model"
        render={({ field }) => (
          <InputField
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            inputRef={field.ref}
            label="Model"
            helpText={errors?.model?.message}
            isDanger={errors?.model && true}
          />
        )}
      />
      <Controller
        control={control}
        name="plat_number"
        render={({ field }) => (
          <InputField
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            inputRef={field.ref}
            label="Nomor Plat"
            helpText={errors?.plat_number?.message}
            isDanger={errors?.plat_number && true}
          />
        )}
      />
      <Controller
        control={control}
        name="rental_fee"
        render={({ field }) => (
          <InputFieldNumber
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            inputRef={field.ref}
            label="Biaya sewa / hari"
            helpText={errors?.rental_fee?.message}
            isDanger={errors?.rental_fee && true}
          />
        )}
      />
      <Controller
        control={control}
        name="is_rent"
        render={({ field }) => (
          <InputRadio
            inputProps={{
              value: field.value,
              onBlur: field.onBlur,
              onChange: field.onChange,
            }}
            options={[
              {
                label: "Available",
                value: 0,
              },
              {
                label: "Not Available",
                value: 1,
              },
            ]}
            inputRef={field.ref}
            label="Status"
            helpText={errors?.is_rent?.message}
            isDanger={errors?.is_rent && true}
          />
        )}
      />
    </div>
  );
}

export default FormData;

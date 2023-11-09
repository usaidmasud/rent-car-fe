"use client";
import { DataCar } from "@/libs/models/car.model";
import { RequestDataTransactionTemp } from "@/libs/models/transaction.model";
import { useAppSelector } from "@/libs/redux/hooks";
import CarItem from "@/ui/components/CarItem";
import InputRangeDatePicker from "@/ui/components/Form/InputRangeDatePicker";
import dayjs from "dayjs";
import { useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import { initialFormState } from "../libs/initialState";
interface Props {
  control: Control<RequestDataTransactionTemp, any>;
  errors: FieldErrors<RequestDataTransactionTemp>;
  setValue: UseFormSetValue<RequestDataTransactionTemp>;
}
function FormData({ control, errors, setValue }: Props) {
  const [date, setDate] = useState<dayjs.Dayjs[]>([
    dayjs(initialFormState().rangeDate[0]),
    dayjs(initialFormState().rangeDate[1]),
  ]);
  const { response } = useAppSelector((state) => state.carSlice);

  const handleDate = (date: dayjs.Dayjs[], dateString: string[]) => {
    setDate(date);
    // setValue('fromDate', dayjs(dateString[0]).toISOString());
    // setValue('toDate', dayjs(dateString[1]).toISOString());
    setValue("rangeDate", dateString);
  };

  return (
    <div>
      <Controller
        control={control}
        name="rangeDate"
        render={({ field }) => (
          <InputRangeDatePicker
            inputProps={{
              value: date,
              onChange: handleDate,
              disabledDate: (current: any) => {
                return dayjs().add(-1, "days") >= current;
              },
            }}
            inputRef={field.ref}
            label="Tgl Pinjaman"
            helpText={errors?.rangeDate?.message}
            isDanger={errors?.rangeDate && true}
          />
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {response.data.map((item: DataCar, index: number) => (
          <CarItem setValue={setValue} key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default FormData;

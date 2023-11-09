import { DataCar } from "@/libs/models/car.model";
import React from "react";
import ButtonFill from "./Button/ButtonFill";
import Image from "next/image";
import clsx from "clsx";
import { currency } from "@/libs/utils/currency";
import { AppDispatch } from "@/libs/redux/store";
import { useDispatch } from "react-redux";
import { setSelectedCar } from "@/libs/redux/features/car.slice";
import { useAppSelector } from "@/libs/redux/hooks";
import { UseFormSetValue } from "react-hook-form";
import { RequestDataTransaction, RequestDataTransactionTemp } from "@/libs/models/transaction.model";

interface CarItemProps extends DataCar {
  setValue: UseFormSetValue<RequestDataTransactionTemp>;
}

function CarItem({
  id,
  is_rent,
  merk,
  model,
  plat_number,
  photo,
  rental_fee,
  setValue,
}: CarItemProps) {
  const { selected } = useAppSelector((state) => state.carSlice);
  const dispatch: AppDispatch = useDispatch();
  const handleClick = (id: string) => {
    if (is_rent === 1) return false;
    setValue("car_id", id);
    dispatch(setSelectedCar(id));
  };
  return (
    <div className="rounded-xl overflow-hidden bg-slate-100 shadow-lg">
      {/* image */}
      <div className="relative w-full h-36">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL! + photo}
          alt={plat_number}
          fill
          className="w-full h-20"
        />
        <div className="absolute bottom-2 left-2">
          <h5 className="font-bold text-lg bg-info-main px-2 py-0.5 rounded-lg text-white">
            {currency(rental_fee)}
          </h5>
        </div>
        <div className="absolute top-2 right-2">
          <span
            className={clsx(
              "text-xs px-2 py-0.5 rounded-full tracking-wider font-semibold",
              is_rent === 0 && "bg-success-dark text-gray-200",
              is_rent === 1 && "bg-danger-dark text-gray-200"
            )}
          >
            {is_rent === 0 ? "Available" : "Not Available"}
          </span>
        </div>
      </div>
      <div className="flex  justify-between p-4 items-end">
        <div className="w-2/3">
          <h5 className="text-lg font-bold">{model}</h5>
          <span className="text-xs font-semibold">{merk}</span>
        </div>
        <div className="w-1/3">
          <ButtonFill
            type="button"
            onClick={() => handleClick(id)}
            size="sm"
            disabled={is_rent === 0 ? false : true}
            block
            color={id === selected ? "success" : "secondary"}
          >
            {id === selected ? "Terpilih" : "Pilih"}
          </ButtonFill>
        </div>
      </div>
    </div>
  );
}

export default CarItem;

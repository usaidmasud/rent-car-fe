import { DataCar } from "@/libs/models/car.model";
import { getListCar } from "@/libs/redux/features/car.slice";
import { useAppSelector } from "@/libs/redux/hooks";
import { AppDispatch } from "@/libs/redux/store";
import { deleteCarService } from "@/libs/services/restAPI/car.service";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import { openNotificationWithIcon } from "@/libs/utils/notification";
import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { currency } from "@/libs/utils/currency";
function CardView() {
  const { response, filter, status } = useAppSelector(
    (state) => state.carSlice
  );
  console.log("response", response);
  const dispatch: AppDispatch = useDispatch();
  const handleDelete = async (id: string) => {
    await deleteCarService(id)
      .then(() => {
        dispatch(getListCar());
        openNotificationWithIcon({
          type: "success",
          message: MESSAGE_STATE.DELETE_SUCCESS,
        });
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          openNotificationWithIcon({
            type: "warning",
            message: MESSAGE_STATE.NOT_FOUND,
          });
        }
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
      {response.data.map((item: DataCar, index: number) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}

function Item({
  id,
  is_rent,
  merk,
  model,
  photo,
  plat_number,
  rental_fee,
}: DataCar) {
  return (
    <div className="relative w-full h-36">
      <Image fill className="w-full" src={process.env.NEXT_PUBLIC_IMAGE_URL + photo} alt={merk} />
      <div className="">
        <p className="">{currency(rental_fee)} /hari</p>
      </div>
    </div>
  );
}
export default CardView;

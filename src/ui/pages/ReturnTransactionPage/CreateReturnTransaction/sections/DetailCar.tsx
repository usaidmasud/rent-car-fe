"use client";
import { RequestDataReturnTransaction } from "@/libs/models/returnTransaction.model";
/* eslint-disable @next/next/no-img-element */
import { DataTransaction } from "@/libs/models/transaction.model";
import { getListReturnTransaction } from "@/libs/redux/features/returnTransaction.slice";
import { AppDispatch } from "@/libs/redux/store";
import { storeReturnTransactionService } from "@/libs/services/restAPI/returnTransaction.service";
import { currency } from "@/libs/utils/currency";
import { formatDate } from "@/libs/utils/formateDate";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface DetailCarProps {
  transaction: DataTransaction;
}

function DetailCar({ transaction }: DetailCarProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const getTotalDay = () => {
    const end = dayjs(transaction.end_date);
    return end.diff(transaction.start_date, "days") + 1;
  };

  const getTotalPayment = () => {
    return transaction.car?.rental_fee * getTotalDay();
  };

  const router = useRouter();
  const prosesReturn = async () => {
    setLoading(true);
    const formData: RequestDataReturnTransaction = {
      date: dayjs().format("YYYY-MM-D"),
      plat_number: transaction.car.plat_number,
    };
    await storeReturnTransactionService(formData)
      .then((res) => {
        dispatch(getListReturnTransaction());
        router.replace("/return-transaction");
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="rounded-xl overflow-hidden bg-slate-200 shadow-lg p-6 max-w-sm">
      <div className="mb-6">
        <img
          src={process.env.NEXT_PUBLIC_IMAGE_URL! + transaction.car?.photo}
          alt="image"
          className="w-full h-36"
        />
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <span className="font-semibold text-sm w-20">Tgl Pinjam</span>
          <span className="">
            {formatDate(transaction.start_date) +
              " s/d " +
              formatDate(transaction.end_date)}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold text-sm w-20">Jumlah Hari</span>
          <span className="">{getTotalDay() + " hari"}</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold text-sm w-20">Jumlah Hari</span>
          <span className="">{currency(transaction.car?.rental_fee)}</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold text-sm w-20">Total Biaya</span>
          <span className="">{currency(getTotalPayment())}</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold text-sm w-20">Nomor Plat</span>
          <span className="">{transaction.car?.plat_number}</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-semibold text-sm w-20">Merk</span>
          <span className="">
            {transaction.car?.merk + " - " + transaction.car?.model}
          </span>
        </li>
      </ul>
      <div className="mt-6">
        <ButtonFill
          loading={loading}
          onClick={() => prosesReturn()}
          color="primary"
          block
        >
          Proses Kembalian
        </ButtonFill>
      </div>
    </div>
  );
}

export default DetailCar;

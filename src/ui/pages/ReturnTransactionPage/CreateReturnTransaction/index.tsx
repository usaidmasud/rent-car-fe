"use client";
import { DataTransaction } from "@/libs/models/transaction.model";
import { getListCar, setFilterCar } from "@/libs/redux/features/car.slice";
import { AppDispatch } from "@/libs/redux/store";
import { getDetailReturnTransactionService } from "@/libs/services/restAPI/returnTransaction.service";
import { MENU_STATE } from "@/libs/utils/menuState";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import CustomCard from "@/ui/components/CustomCard";
import InputField from "@/ui/components/Form/InputField";
import PageHeader from "@/ui/components/PageHeader";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DetailCar from "./sections/DetailCar";

function CreateReturnTransactionPage() {
  const dispatch: AppDispatch = useDispatch();
  const [transaction, setTransaction] = useState<DataTransaction | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const initialFetch = useCallback(() => {
    dispatch(
      setFilterCar({
        page: null,
        per_page: null,
        is_rent: "0",
      })
    );
    dispatch(getListCar());
  }, [dispatch]);

  const handleSearch = async () => {
    setTransaction(null);
    setLoading(true);
    await getDetailReturnTransactionService(search)
      .then((res) => {
        setTransaction(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        setTransaction(null);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    initialFetch();
  }, [initialFetch]);
  return (
    <CustomCard className="">
      <div className="p-6">
        <PageHeader
          showBackButton
          title={MENU_STATE.RETURN_TRANSACTION.PAGE_TITLE_CREATE}
        />
      </div>
      <div className="px-6 pb-8 max-w-md w-full">
        <div className="flex items-center gap-1">
          <div className="w-full">
            <InputField
              noMargin
              placeholder="Masukkan Nomor Plat"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ButtonFill
            className="w-36"
            loading={loading}
            size="base"
            onClick={handleSearch}
            type="button"
            color="info"
          >
            Cari
          </ButtonFill>
        </div>
        {transaction && <DetailCar transaction={transaction} />}
        {!transaction && <p>Kendaraan tidak ditemukan</p>}
      </div>
      {/* <FormDataWrapper /> */}
    </CustomCard>
  );
}

export default CreateReturnTransactionPage;

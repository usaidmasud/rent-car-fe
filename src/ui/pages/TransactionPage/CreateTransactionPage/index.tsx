"use client";
import { MENU_STATE } from "@/libs/utils/menuState";
import CustomCard from "@/ui/components/CustomCard";
import PageHeader from "@/ui/components/PageHeader";
import FormDataWrapper from "./sections/FormDataWrapper";
import { useCallback, useEffect } from "react";
import { AppDispatch } from "@/libs/redux/store";
import { useDispatch } from "react-redux";
import { getListCar, setFilterCar } from "@/libs/redux/features/car.slice";

function CreateCarPage() {
  const dispatch: AppDispatch = useDispatch();
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

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);
  return (
    <CustomCard className="">
      <div className="p-6">
        <PageHeader
          showBackButton
          title={MENU_STATE.TRANSACTION.PAGE_TITLE_CREATE}
        />
      </div>
      <FormDataWrapper />
    </CustomCard>
  );
}

export default CreateCarPage;

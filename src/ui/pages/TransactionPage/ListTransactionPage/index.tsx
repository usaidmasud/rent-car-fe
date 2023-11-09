"use client";
import { getListTransaction } from "@/libs/redux/features/transaction.slice";
import { AppDispatch } from "@/libs/redux/store";
import { MENU_STATE } from "@/libs/utils/menuState";
import ButtonFill from "@/ui/components/Button/ButtonFill";
import CustomCard from "@/ui/components/CustomCard";
import PageHeader from "@/ui/components/PageHeader";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Filter from "./sections/Filter";
import Table from "./sections/Table";

export default function ListTransactionPage() {
  const dispatch: AppDispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getListTransaction());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <CustomCard className="">
      <div className="p-6">
        <PageHeader
          title={MENU_STATE.TRANSACTION.PAGE_TITLE}
          description={MENU_STATE.TRANSACTION.DESCRIPTION}
          extra={
            <Link href="/transaction/create">
              <ButtonFill
                color="primary"
                className="inline-flex items-center gap-1"
              >
                <PlusCircledIcon /> {MENU_STATE.TRANSACTION.BUTTON_CREATE}
              </ButtonFill>
            </Link>
          }
        />
      </div>
      <Filter />
      <Table />
    </CustomCard>
  );
}

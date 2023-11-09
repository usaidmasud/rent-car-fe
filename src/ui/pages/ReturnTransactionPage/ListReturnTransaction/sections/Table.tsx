"use client";
import { DataReturnTransaction } from "@/libs/models/returnTransaction.model";
import { DataTransaction } from "@/libs/models/transaction.model";
import {
  getListReturnTransaction,
  setFilterReturnTransaction,
} from "@/libs/redux/features/returnTransaction.slice";
import { useAppSelector } from "@/libs/redux/hooks";
import { AppDispatch } from "@/libs/redux/store";
import { deleteReturnTransactionService } from "@/libs/services/restAPI/returnTransaction.service";
import { currency } from "@/libs/utils/currency";
import { formatDate } from "@/libs/utils/formateDate";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import { openNotificationWithIcon } from "@/libs/utils/notification";
import ButtonIcon from "@/ui/components/Button/ButtonIcon";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Popconfirm, Table as TableOri } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDispatch } from "react-redux";
export default function Table() {
  const { response, filter, status } = useAppSelector(
    (state) => state.returnTransactionSlice
  );
  const dispatch: AppDispatch = useDispatch();
  const handleDelete = async (id: string) => {
    await deleteReturnTransactionService(id)
      .then(() => {
        dispatch(getListReturnTransaction());
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

  const columns: ColumnsType<DataReturnTransaction> = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: 50,
      render: (value, record, index) =>
        (filter?.page! - 1) * filter?.per_page! + (index + 1),
    },
    {
      title: "Tanggal Kembali",
      dataIndex: "date",
      key: "date",
      width: 200,
      render: (value) => formatDate(value),
    },
    {
      title: "Kendaraan",
      dataIndex: "transaction",
      key: "transaction",
      width: 200,
      render: (value: DataTransaction) =>
        value?.car?.merk + " - " + value?.car?.model,
    },
    {
      title: "Total Hari",
      dataIndex: "total_day",
      key: "total_day",
      width: 200,
    },
    {
      title: "Biaya Rental / Hari ",
      dataIndex: "rental_fee",
      key: "rental_fee",
      width: 200,
      render: (value) => currency(value),
    },
    {
      title: "Total Pembayaran ",
      dataIndex: "total_payment",
      key: "total_payment",
      width: 200,
      render: (value) => currency(value),
    },
    {
      title: "Action",
      key: "action",
      width: 250,
      render: (value: DataReturnTransaction) => (
        <div className="inline-flex space-x-1">
          <Popconfirm
            title="Konfirmasi"
            description={MESSAGE_STATE.CONFIRM_DELETE}
            onConfirm={async () => await handleDelete(value.id)}
            okText="Yes"
            cancelText="No"
          >
            <ButtonIcon
              color="danger"
              icon={<TrashIcon className="h-4 w-4" />}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <TableOri
        tableLayout="fixed"
        scroll={{
          x: 480,
        }}
        size="small"
        rowKey={(record) => record.id}
        columns={columns}
        loading={status === "loading"}
        dataSource={response?.data ?? []}
        pagination={{
          defaultPageSize: 10,
          total: response?.meta?.total,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20", "30", "40", "50"],
          size: "default",
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          onChange: (page: number, limit: number) => {
            dispatch(
              setFilterReturnTransaction({
                ...filter,
                page: page,
                per_page: limit,
              })
            );
            dispatch(getListReturnTransaction());
          },
        }}
      />
    </div>
  );
}

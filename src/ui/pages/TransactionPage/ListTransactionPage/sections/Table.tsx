"use client";
import { DataCar } from "@/libs/models/car.model";
import { DataTransaction } from "@/libs/models/transaction.model";
import {
  getListTransaction,
  setFilterTransaction,
} from "@/libs/redux/features/transaction.slice";
import { useAppSelector } from "@/libs/redux/hooks";
import { AppDispatch } from "@/libs/redux/store";
import { deleteTransactionService } from "@/libs/services/restAPI/transaction.service";
import { formatDate } from "@/libs/utils/formateDate";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import { openNotificationWithIcon } from "@/libs/utils/notification";
import ButtonIcon from "@/ui/components/Button/ButtonIcon";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Popconfirm, Table as TableOri, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
export default function Table() {
  const { response, filter, status } = useAppSelector(
    (state) => state.transactionSlice
  );
  const dispatch: AppDispatch = useDispatch();
  const handleDelete = async (id: string) => {
    await deleteTransactionService(id)
      .then(() => {
        dispatch(getListTransaction());
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

  const columns: ColumnsType<DataTransaction> = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: 50,
      render: (value, record, index) =>
        (filter?.page! - 1) * filter?.per_page! + (index + 1),
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      key: "date",
      width: 200,
      render: (value) => formatDate(value),
    },
    {
      title: "Tgl Sewa",
      dataIndex: "start_date",
      key: "start_date",
      width: 250,
      render: (_, record) => (
        <div className="">
          <p className="">
            {formatDate(record.start_date) +
              " s/d " +
              formatDate(record.end_date)}
          </p>
          <p className="">
            {dayjs(record.end_date).diff(record.start_date, "day")+1+" hari"}
          </p>
        </div>
      ),
    },
    {
      title: "Mobil ",
      dataIndex: "car",
      key: "car",
      width: 200,
      render: (value: DataCar) =>
        value.merk + " - " + value.model + " #" + value.plat_number,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 200,
      render: (value) => (
        <Tag color={value === "success" ? "blue" : "red"}>
          {value === "success" ? "Success" : "Running"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 250,
      render: (value: DataTransaction) => (
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
              setFilterTransaction({
                ...filter,
                page: page,
                per_page: limit,
              })
            );
            dispatch(getListTransaction());
          },
        }}
      />
    </div>
  );
}

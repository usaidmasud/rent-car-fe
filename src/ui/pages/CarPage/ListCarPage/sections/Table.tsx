"use client";
import { DataCar } from "@/libs/models/car.model";
import { getListCar, setFilterCar } from "@/libs/redux/features/car.slice";
import { useAppSelector } from "@/libs/redux/hooks";
import { AppDispatch } from "@/libs/redux/store";
import { deleteCarService } from "@/libs/services/restAPI/car.service";
import { currency } from "@/libs/utils/currency";
import { MESSAGE_STATE } from "@/libs/utils/messageState";
import { openNotificationWithIcon } from "@/libs/utils/notification";
import ButtonIcon from "@/ui/components/Button/ButtonIcon";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Popconfirm, Table as TableOri, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useDispatch } from "react-redux";
export default function Table() {
  const { response, filter, status } = useAppSelector(
    (state) => state.carSlice
  );
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

  const columns: ColumnsType<DataCar> = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: 50,
      render: (value, record, index) =>
        (filter?.page! - 1) * filter?.per_page! + (index + 1),
    },
    {
      title: "Merk",
      dataIndex: "merk",
      key: "merk",
      width: 200,
      render: (_, record) => record.merk + " - " + record.model,
    },
    {
      title: "Plat Nomor",
      dataIndex: "plat_number",
      key: "plat_number",
      width: 200,
    },
    {
      title: "Biaya ",
      dataIndex: "rental_fee",
      key: "rental_fee",
      width: 200,
      render: (value) => currency(value),
    },
    {
      title: "Status",
      dataIndex: "is_rent",
      key: "is_rent",
      width: 200,
      render: (value) => (
        <Tag color={value === 0 ? "blue" : "red"}>
          {value === 0 ? "Available" : "Not Available"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 250,
      render: (value: DataCar) => (
        <div className="inline-flex space-x-1">
          <Link href={`/car/${value.id}/edit`}>
            <ButtonIcon
              color="success"
              icon={<PencilIcon className="h-4 w-4" />}
            />
          </Link>
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
              setFilterCar({
                ...filter,
                page: page,
                per_page: limit,
              })
            );
            dispatch(getListCar());
          },
        }}
      />
    </div>
  );
}

import { MenuProps } from "antd";

import {
  DashboardIcon,
  PersonIcon
} from "@radix-ui/react-icons";
import Link from "next/link";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href={`/`}>Dashboard</Link>, "home", <DashboardIcon />),
  getItem(<Link href={`/car`}>Mobil</Link>, "car", <PersonIcon />),
  getItem(
    <Link href={`/transaction`}>Transaksi Pinjaman</Link>,
    "transaction",
    <PersonIcon />
  ),
  getItem(
    <Link href={`/return-transaction`}>Transaksi Pengembalian</Link>,
    "return-transaction",
    <PersonIcon />
  ),
];

export default items;

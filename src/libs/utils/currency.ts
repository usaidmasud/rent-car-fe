import isNull from './isNull';
import { renderCell } from './renderCell';
import _ from 'lodash';
export const currency = (money: number) => {
  if (isNull(money)) return renderCell(money);
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(money);
};

export const thousandFormat = (number: any) => {
  try {
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  } catch (error) {}
};

export const formatNumber = (number: string | number) => {
  return _.toNumber(number).toLocaleString();
};

/* eslint-disable no-unused-vars */
import dayjs from 'dayjs';
import id from 'dayjs/locale/id';
export const enum FORMAT_DATE {
  SERVER = 'YYYY-MM-DD',
  TIME = 'HH:mm:ss',
  SHORTTIME = 'HH:mm',
  DATE = 'DD MMM YYYY',
  DATETIME = 'DD MMM YYY HH:mm:ss',
}

export function formatDate(
  params: string | Date,
  format?: string,
  withTime = false
) {
  return dayjs(params)
    .locale(id)
    .format(format ?? FORMAT_DATE.DATE);
}

export function getMonthName(monthNumber: number, isFull = false) {
  const date = new Date();
  date.setMonth(monthNumber - 1); // starts with 0, so 0 is January
  return date.toLocaleString('id-ID', { month: isFull ? 'long' : 'short' });
}

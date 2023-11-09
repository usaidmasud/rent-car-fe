import isNull from './isNull';

export const renderCell = (value: any) => {
  return isNull(value) ? 'N/A' : value;
};

import { FilterResponseModel } from '../models/root.model';
import isNull from './isNull';

export function formatFilter(value: FilterResponseModel) {
  const newObj = Object.entries(value).map(([key, value]) => {
    if (!isNull(value)) {
      return `${key}=${value}`;
    }
  });
  const removeUndefined = newObj.filter((item) => item !== undefined);
  return '?' + removeUndefined.join('&');
}

import isNull from './isNull';

export const formatFilter = (filter: string, remove: string) => {
  if (!isNull(filter)) {
    const filterArr = filter.split('&');
    const updatedList = filterArr.filter((item) => {
      return item.search(remove);
    });

    return updatedList.join('&');
  }
  return '';
};

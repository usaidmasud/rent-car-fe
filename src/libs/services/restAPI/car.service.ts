import { FilterResponseModel } from '@/libs/models/root.model';
import { formatFilter } from '@/libs/utils/filterFilter';
import instance from '../instance';
import { RequestDataCar } from '@/libs/models/car.model';

export const getListCarService = async (
  // eslint-disable-next-line no-unused-vars
  filter: FilterResponseModel
) => {
  const filterValue = formatFilter(filter);
  const response = await instance.get(`/car` + filterValue);
  return response;
};

export const getDetailCarService = async (id: string) => {
  const response = await instance.get('/car/' + id);
  return response;
};

export const storeCarService = async (data: RequestDataCar) => {
  const response = await instance.post('/car', data);
  return response;
};

export const updateCarService = async (
  id: string,
  data: RequestDataCar
) => {
  const response = await instance.patch('/car/' + id, data);
  return response;
};

export const deleteCarService = async (id: string) => {
  const response = await instance.delete('/car/' + id);
  return response;
};

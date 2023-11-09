import { FilterResponseModel } from '@/libs/models/root.model';
import { formatFilter } from '@/libs/utils/filterFilter';
import instance from '../instance';
import { RequestDataReturnTransaction } from '@/libs/models/returnTransaction.model';

export const getListReturnTransactionService = async (
  // eslint-disable-next-line no-unused-vars
  filter: FilterResponseModel
) => {
  const filterValue = formatFilter(filter);
  const response = await instance.get(`/return-transaction` + filterValue);
  return response;
};

export const getDetailReturnTransactionService = async (id: string) => {
  const response = await instance.get('/return-transaction/' + id);
  return response;
};

export const storeReturnTransactionService = async (data: RequestDataReturnTransaction) => {
  const response = await instance.post('/return-transaction', data);
  return response;
};

export const updateReturnTransactionService = async (
  id: string,
  data: RequestDataReturnTransaction
) => {
  const response = await instance.patch('/return-transaction/' + id, data);
  return response;
};

export const deleteReturnTransactionService = async (id: string) => {
  const response = await instance.delete('/return-transaction/' + id);
  return response;
};

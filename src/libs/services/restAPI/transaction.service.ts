import { FilterResponseModel } from '@/libs/models/root.model';
import { formatFilter } from '@/libs/utils/filterFilter';
import instance from '../instance';
import { RequestDataTransaction } from '@/libs/models/transaction.model';

export const getListTransactionService = async (
  // eslint-disable-next-line no-unused-vars
  filter: FilterResponseModel
) => {
  const filterValue = formatFilter(filter);
  const response = await instance.get(`/transaction` + filterValue);
  return response;
};

export const getDetailTransactionService = async (id: string) => {
  const response = await instance.get('/transaction/' + id);
  return response;
};

export const storeTransactionService = async (data: RequestDataTransaction) => {
  const response = await instance.post('/transaction', data);
  return response;
};

export const updateTransactionService = async (
  id: string,
  data: RequestDataTransaction
) => {
  const response = await instance.patch('/transaction/' + id, data);
  return response;
};

export const deleteTransactionService = async (id: string) => {
  const response = await instance.delete('/transaction/' + id);
  return response;
};

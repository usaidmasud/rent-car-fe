import {
  RequestDataLogin,
  RequestDataRegister,
} from '@/libs/models/auth.model';
import { apiPublic } from '../api';

export const loginService = async (data: RequestDataLogin) => {
  const response = await apiPublic.post('/auth/login', data);
  return response;
};

export const registerService = async (data: RequestDataRegister) => {
  const response = await apiPublic.post('/auth/register', data);
  return response;
};

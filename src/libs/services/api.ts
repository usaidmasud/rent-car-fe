// @/src/common/axiosPublic.js
import axios from 'axios';

const baseURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;
export const apiPublic = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const apiPrivate = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

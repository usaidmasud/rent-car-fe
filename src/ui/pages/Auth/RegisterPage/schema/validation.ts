import * as yup from 'yup';

export const validation = yup.object({
  sim_number: yup.string().required(),
  phone_number: yup.string().required(),
  name: yup.string().required(),
  address: yup.string().required(),
  password: yup.string().required(),
});

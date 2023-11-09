import * as yup from 'yup';

export const validation = yup.object({
  sim_number: yup.string().required(),
  password: yup.string().required(),
});

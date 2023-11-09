export interface RequestDataLogin {
  sim_number: string;
  password: string;
}

export interface RequestDataRegister {
  sim_number: string;
  phone_number: string;
  name: string;
  address: string;
  password: string;
}

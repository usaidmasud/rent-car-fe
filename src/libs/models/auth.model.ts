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

export interface DataUser {
  id: string;
  sim_number: string;
  phone_number: string;
  name: string;
  address: string;
  password: string;
  created_at: string | null;
  updated_at: string | null;
}

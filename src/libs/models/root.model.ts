export interface InitialResponseModel {
  response: GlobalResponseModel;
  filter: FilterResponseModel;
  status: 'idle' | 'loading' | 'success' | 'fail';
  error: any;
}

export interface GlobalResponseModel {
  totalItems: number;
  message: string;
  data: any;
  meta?: TMeta;
}

export type TColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'danger'
  | 'warning'
  | 'green'
  | 'sky'
  | 'cyan'
  | 'indigo'
  | 'violet'
  | 'purple';
export type TSize = 'lg' | 'base' | 'sm';

export type TMeta = {
  nextPage: any | null;
  prevPage: any | null;
  lastPage: any | null;
};

export interface FilterResponseModel {
  page?: number | null;
  pageSize?: number | null;
  search?: string | null;
  employeeId?: string | null;
  month?: number | null;
  year?: number | null;
}

export type TStatusFetch = 'idle' | 'loading' | 'success' | 'fail';

export interface DefaultOptionType {
  label: React.ReactNode;
  value?: string | number | null | boolean;
}

export interface RequestUploadFile {
  file: any;
}

export type TParams = {
  params: {
    id: string;
  };
};

export interface InitialResponseModel {
  response: GlobalResponseModel;
  filter: FilterResponseModel;
  status: "idle" | "loading" | "success" | "fail";
  error: any;
}

export interface GlobalResponseModel {
  message: string;
  data: any;
  meta?: TMeta;
  links?: Tlinks;
}

export type TColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "danger"
  | "warning"
  | "green"
  | "sky"
  | "cyan"
  | "indigo"
  | "violet"
  | "purple";
export type TSize = "lg" | "base" | "sm";

export type TMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links?: TMetaLink[];
  path?: string;
  per_page: number;
  to?: number;
  total?: number;
};
export type TMetaLink = {
  url: string | null;
  label: string;
  active: any;
};

export type Tlinks = {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
};

export interface FilterResponseModel {
  page?: number | null;
  per_page?: number | null;
  search?: string | null;
  status?: string | null;
  is_rent?: string | null;
}

export type TStatusFetch = "idle" | "loading" | "success" | "fail";

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

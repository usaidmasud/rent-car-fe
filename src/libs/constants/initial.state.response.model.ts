import {
  FilterResponseModel,
  GlobalResponseModel,
  InitialResponseModel,
} from '../models/root.model';

export const initialStateFilter: FilterResponseModel = {
  page: 1,
  pageSize: 10,
};

export const initialStateGlobalResponseModel: GlobalResponseModel = {
  data: [],
  message: '',
  totalItems: 0,
  meta: {
    lastPage: 1,
    prevPage: null,
    nextPage: null,
  },
};

export const initialStateResponseModel: InitialResponseModel = {
  response: initialStateGlobalResponseModel,
  filter: initialStateFilter,
  status: 'idle',
  error: '',
};

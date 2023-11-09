import {
  FilterResponseModel,
  GlobalResponseModel,
  InitialResponseModel,
} from '../models/root.model';

export const initialStateFilter: FilterResponseModel = {
  page: 1,
  per_page: 10,
};

export const initialStateGlobalResponseModel: GlobalResponseModel = {
  data: [],
  message: '',
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    links:[],
    per_page: 10,
    
  },
};

export const initialStateResponseModel: InitialResponseModel = {
  response: initialStateGlobalResponseModel,
  filter: initialStateFilter,
  status: 'idle',
  error: '',
};

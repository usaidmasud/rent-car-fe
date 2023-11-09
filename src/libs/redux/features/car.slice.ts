import {
    initialStateGlobalResponseModel,
    initialStateResponseModel,
} from '@/libs/constants/initial.state.response.model';
import { DataCar } from '@/libs/models/car.model';
import {
    getDetailCarService,
    getListCarService,
} from '@/libs/services/restAPI/car.service';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    DefaultOptionType,
    FilterResponseModel,
    InitialResponseModel,
} from '../../models/root.model';
  
  interface CarProps extends InitialResponseModel {
    optionSelect: DefaultOptionType[];
    row: DataCar;
  }
  const defaultOptionSelect = [
    {
      label: 'Pilih',
      value: '',
    },
  ];
  const initialState: CarProps = {
    ...initialStateResponseModel,
    optionSelect: defaultOptionSelect,
    row: {} as DataCar,
  };
  
  export const getListCar = createAsyncThunk(
    'car/getListCar',
    async (_, { getState }) => {
      const state = getState() as any;
      const filterValue = state.carSlice.filter;
      const response = await getListCarService(filterValue);
      return response.data;
    }
  );
  
  export const getDetailCar = createAsyncThunk(
    'car/getDetailListCar',
    async (id: string) => {
      const response = await getDetailCarService(id);
      return response.data;
    }
  );
  
  export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
      reset: () => initialState,
      setFilterCar: (state, action: PayloadAction<FilterResponseModel>) => {
        state.filter = action.payload;
      },
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder
        .addCase(getListCar.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getListCar.fulfilled, (state, action) => {
          if (action) {
            state.response = action.payload;
            const option = (state.response?.data ?? []).map(
              (item: DataCar) => {
                return {
                  label: item.merk,
                  value: item.id,
                };
              }
            );
            state.optionSelect = [...defaultOptionSelect, ...option];
          } else {
            state.response = initialStateGlobalResponseModel;
          }
          state.status = 'success';
  
          // Add user to the state array
        })
        .addCase(getListCar.rejected, (state) => {
          state.status = 'fail';
          // Add user to the state array
        })
        .addCase(getDetailCar.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getDetailCar.fulfilled, (state, action) => {
          state.row = action.payload.data;
          state.status = 'success';
          // Add user to the state array
        })
        .addCase(getDetailCar.rejected, (state) => {
          state.status = 'fail';
          // Add user to the state array
        });
    },
  });
  
  export const { reset, setFilterCar } = carSlice.actions;
  
  export default carSlice.reducer;
  
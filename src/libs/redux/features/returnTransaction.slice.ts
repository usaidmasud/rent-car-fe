import {
  initialStateGlobalResponseModel,
  initialStateResponseModel,
} from '@/libs/constants/initial.state.response.model';
import { DataReturnTransaction } from '@/libs/models/returnTransaction.model';
import {
  getDetailReturnTransactionService,
  getListReturnTransactionService,
} from '@/libs/services/restAPI/returnTransaction.service';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  DefaultOptionType,
  FilterResponseModel,
  InitialResponseModel,
} from '../../models/root.model';
  
  interface ReturnTransactionProps extends InitialResponseModel {
    optionSelect: DefaultOptionType[];
    row: DataReturnTransaction;
  }
  const defaultOptionSelect = [
    {
      label: 'Pilih',
      value: '',
    },
  ];
  const initialState: ReturnTransactionProps = {
    ...initialStateResponseModel,
    optionSelect: defaultOptionSelect,
    row: {} as DataReturnTransaction,
  };
  
  export const getListReturnTransaction = createAsyncThunk(
    'returnTransaction/getListReturnTransaction',
    async (_, { getState }) => {
      const state = getState() as any;
      const filterValue = state.returnTransactionSlice.filter;
      const response = await getListReturnTransactionService(filterValue);
      return response.data;
    }
  );
  
  export const getDetailReturnTransaction = createAsyncThunk(
    'returnTransaction/getDetailListTransaction',
    async (id: string) => {
      const response = await getDetailReturnTransactionService(id);
      return response.data;
    }
  );
  
  export const returnTransactionSlice = createSlice({
    name: 'returnTransaction',
    initialState,
    reducers: {
      reset: () => initialState,
      setFilterReturnTransaction: (state, action: PayloadAction<FilterResponseModel>) => {
        state.filter = action.payload;
      },
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder
        .addCase(getListReturnTransaction.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getListReturnTransaction.fulfilled, (state, action) => {
          if (action) {
            state.response = action.payload;
          } else {
            state.response = initialStateGlobalResponseModel;
          }
          state.status = 'success';
  
          // Add user to the state array
        })
        .addCase(getListReturnTransaction.rejected, (state) => {
          state.status = 'fail';
          // Add user to the state array
        })
        .addCase(getDetailReturnTransaction.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getDetailReturnTransaction.fulfilled, (state, action) => {
          state.row = action.payload.data;
          state.status = 'success';
          // Add user to the state array
        })
        .addCase(getDetailReturnTransaction.rejected, (state) => {
          state.status = 'fail';
          // Add user to the state array
        });
    },
  });
  
  export const { reset, setFilterReturnTransaction } = returnTransactionSlice.actions;
  
  export default returnTransactionSlice.reducer;
  
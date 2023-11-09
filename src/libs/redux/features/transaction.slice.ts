import {
  initialStateGlobalResponseModel,
  initialStateResponseModel,
} from '@/libs/constants/initial.state.response.model';
import { DataTransaction } from '@/libs/models/transaction.model';
import {
  getDetailTransactionService,
  getListTransactionService,
} from '@/libs/services/restAPI/transaction.service';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  DefaultOptionType,
  FilterResponseModel,
  InitialResponseModel,
} from '../../models/root.model';
  
  interface TransactionProps extends InitialResponseModel {
    optionSelect: DefaultOptionType[];
    row: DataTransaction;
  }
  const defaultOptionSelect = [
    {
      label: 'Pilih',
      value: '',
    },
  ];
  const initialState: TransactionProps = {
    ...initialStateResponseModel,
    optionSelect: defaultOptionSelect,
    row: {} as DataTransaction,
  };
  
  export const getListTransaction = createAsyncThunk(
    'transaction/getListTransaction',
    async (_, { getState }) => {
      const state = getState() as any;
      const filterValue = state.transactionSlice.filter;
      const response = await getListTransactionService(filterValue);
      return response.data;
    }
  );
  
  export const getDetailTransaction = createAsyncThunk(
    'transaction/getDetailListTransaction',
    async (id: string) => {
      const response = await getDetailTransactionService(id);
      return response.data;
    }
  );
  
  export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
      reset: () => initialState,
      setFilterTransaction: (state, action: PayloadAction<FilterResponseModel>) => {
        state.filter = action.payload;
      },
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder
        .addCase(getListTransaction.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getListTransaction.fulfilled, (state, action) => {
          if (action) {
            state.response = action.payload;
          } else {
            state.response = initialStateGlobalResponseModel;
          }
          state.status = 'success';
  
          // Add user to the state array
        })
        .addCase(getListTransaction.rejected, (state) => {
          state.status = 'fail';
          // Add user to the state array
        })
        .addCase(getDetailTransaction.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getDetailTransaction.fulfilled, (state, action) => {
          state.row = action.payload.data;
          state.status = 'success';
          // Add user to the state array
        })
        .addCase(getDetailTransaction.rejected, (state) => {
          state.status = 'fail';
          // Add user to the state array
        });
    },
  });
  
  export const { reset, setFilterTransaction } = transactionSlice.actions;
  
  export default transactionSlice.reducer;
  
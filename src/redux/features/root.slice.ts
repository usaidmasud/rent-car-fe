import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RootState = {
  selectedKeys: string[];
  openKeys: string[];
  collapsed: boolean;
  accessToken: string;
  isAuthenticated: boolean;
  openMenuNotification: boolean;
};

const initialState = {
  selectedKeys: ['home'],
  accessToken: '',
  openKeys: [''],
  collapsed: false,
  isAuthenticated: false,
  openMenuNotification: false,
} as RootState;

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    reset: () => initialState,
    setSelectedKeys: (state, action: PayloadAction<string[]>) => {
      state.selectedKeys = action.payload;
    },
    setOpenKeys: (state, action: PayloadAction<string[]>) => {
      state.openKeys = action.payload;
    },
    setCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setOpenMenuNotification: (state, action: PayloadAction<boolean>) => {
      state.openMenuNotification = action.payload;
    },
  },
});

export const {
  setSelectedKeys,
  setAuthenticated,
  setOpenKeys,
  reset,
  setCollapsed,
  setToken,
  setOpenMenuNotification,
} = rootSlice.actions;

export default rootSlice.reducer;

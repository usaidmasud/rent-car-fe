import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./features/car.slice";
import rootSlice from "./features/root.slice";
import transactionSlice from "./features/transaction.slice";
export const store = configureStore({
  reducer: {
    rootSlice,
    carSlice,
    transactionSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

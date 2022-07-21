import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import dialogSlice from './dialogSlice';
import filterSlice from './filter-slice';

const combinedReducers = combineReducers({
  authSlice,
  cartSlice,
  filterSlice,
  dialogSlice
});

const store = configureStore({
  reducer: combinedReducers
});
export const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export const wrapper = createWrapper(makeStore);

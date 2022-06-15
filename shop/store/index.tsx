import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { create } from "domain";
import { createWrapper } from "next-redux-wrapper";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";

const combinedReducers = combineReducers({
    authSlice,
    cartSlice,
})

const store = configureStore({
    reducer: combinedReducers,
  });
export const makeStore = () =>  store
  
export type RootState = ReturnType<typeof store.getState>
export const wrapper = createWrapper(makeStore);
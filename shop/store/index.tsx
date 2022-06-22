import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { create } from "domain";
import { createWrapper } from "next-redux-wrapper";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import filterSlice from "./filter-slice";
import dialogSlice from "./dialogSlice";

const combinedReducers = combineReducers({
    authSlice,
    cartSlice,
    filterSlice,
    dialogSlice
})

const store = configureStore({
    reducer: combinedReducers,
  });
export const makeStore = () =>  store
  
export type RootState = ReturnType<typeof store.getState>
export const wrapper = createWrapper(makeStore);
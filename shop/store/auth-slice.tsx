import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../src/Model/Module";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false } as AuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
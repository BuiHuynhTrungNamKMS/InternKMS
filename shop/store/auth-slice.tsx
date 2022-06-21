import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../src/Model/Module";

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    isLoggedIn: false,
    id: -1,
    username: "",
    email: "",
    accessToken: "",
    tokenType: "",
  } as AuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.tokenType = action.payload.tokenType;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.id = -1;
      state.username = "";
      state.email = "";
      state.accessToken = "";
      state.tokenType = "";
    },
    
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
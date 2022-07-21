import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from '../src/Model/Module';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    accessToken: '',
    tokenType: ''
  } as AuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.tokenType = action.payload.tokenType;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.accessToken = '';
      state.tokenType = '';
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

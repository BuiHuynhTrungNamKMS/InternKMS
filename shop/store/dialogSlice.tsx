import { createSlice } from '@reduxjs/toolkit';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    message: '',
    isShow: false
  },
  reducers: {
    changeMessage(state, action) {
      state.message = action.payload;
    },
    changeShow(state, action) {
      state.isShow = action.payload;
    }
  }
});

export const dialogActions = dialogSlice.actions;

export default dialogSlice.reducer;

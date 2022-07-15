import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: 'all',
    isChange: false,
    searchKey: '',
    sortOption: -1,
    gender: 'all',
    currentFilterOption: 0
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
      state.currentFilterOption = 1;
    },
    changeSearchKey(state, action) {
        state.searchKey = action.payload;
        state.currentFilterOption = 2;
      },
    changeSortOption(state, action) {
        state.sortOption = action.payload;
      },
    changeGender(state, action) {
      if(action.payload === "Men")  state.gender = "male";
      else if (action.payload === "Women") state.gender = "female";
      else state.gender = "all";
      state.currentFilterOption = 1;
      },
    refreshFilter(state) {
      state.filter = "all";
      state.isChange = false;
      state.searchKey = '';
      state.sortOption = -1;
      state.gender = 'all';
      state.currentFilterOption = 0;
      },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;

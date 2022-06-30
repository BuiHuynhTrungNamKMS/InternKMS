import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterList: [] as string[],
    isChange: false,
    searchKey: '',
    sortOption: -1,
    gender: '',
  },
  reducers: {
    changeFilter(state, action) {
      const option: string = action.payload;
      if (state.filterList.includes(option)) {
        state.filterList = state.filterList.filter(
          (item: string) => item !== option
        );
      } else {
        state.filterList.push(option);
      }
      state.isChange = true;
    },
    changeSearchKey(state, action) {
        state.searchKey = action.payload;
      },
    changeSortOption(state, action) {
        state.sortOption = action.payload;
      },
    changeGender(state, action) {
      state.gender = action.payload;
      },
    refreshFilter(state) {
      state.filterList = [];
      state.isChange = false;
      state.searchKey = '';
      state.sortOption = -1;
      state.gender = '';
      },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;

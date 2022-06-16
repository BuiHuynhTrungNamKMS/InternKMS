import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterList: [] as string[],
    isChange: false,
    searchKey: '',
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
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;

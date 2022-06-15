import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterList: [] as number[],
    isChange: false,
  },
  reducers: {
    changeFilter(state, action) {
      const option: number = action.payload;
      if (state.filterList.includes(option)) {
        state.filterList = state.filterList.filter(
          (item: number) => item !== option
        );
      } else {
        state.filterList.push(option);
      }
      state.isChange = true;
    },
    // changeOption(state) {
    //     state.isChange = !state.isChange;
    //   },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;

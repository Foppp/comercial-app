import { createSlice } from "@reduxjs/toolkit";

export const sortProductsInfo = createSlice({
  name: 'sort',
  initialState: {
    sortOption: null,
  },
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const {
  setSortOption,
} = sortProductsInfo.actions;

export default sortProductsInfo.reducer;
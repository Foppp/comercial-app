import { createSlice } from "@reduxjs/toolkit";

export const paginationInfo = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    perPage: 10,
    totalPages: null,
  },
  reducers: {
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setNextPage: (state) => {
      state.currentPage += 1;
    },
    setPrevPage: (state) => {
      state.currentPage -= 1;
    }
  },
});

export const {
  setTotalPages,
  setCurrentPage,
  setPerPage,
  setNextPage,
  setPrevPage,
} = paginationInfo.actions;

export default paginationInfo.reducer;
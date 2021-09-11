import { createSlice } from "@reduxjs/toolkit";
import { setModalClose } from '../../redux/modal/modal';

export const searchInfo = createSlice({
  name: 'search',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  },
  extraReducers: {
    [setModalClose]: (state ) => {
      state.searchQuery = '';
    },
  }
});

export const { setSearchQuery } = searchInfo.actions;
export default searchInfo.reducer;
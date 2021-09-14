import { createSlice } from "@reduxjs/toolkit";

export const modalInfo = createSlice({
  name: 'modal',
  initialState: {
    isOpened: false,
    type: null,
  },
  reducers: {
    setModalOpen: (state, action) => {
      state.type = action.payload
      state.isOpened = true;
    },
    setModalClose: (state, action) => {
      state.isOpened = false;
    },
    setModalType : (state, action) => {
      state.isOpened = action.payload;
    },
  },
});

export const {
  setModalOpen,
  setModalClose,
  setModalType, 
} = modalInfo.actions;

export default modalInfo.reducer;
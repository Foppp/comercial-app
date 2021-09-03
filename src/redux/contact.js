import { createSlice } from "@reduxjs/toolkit";

export const contactInfo = createSlice({
  name: 'contact',
  initialState: {
    messageStatus: null,
    sendErrorMessage: null,
  },
  reducers: {
    setMessageStatus: (state, action) => {
      state.messageStatus = action.payload;
    },
    setSendErrorMessage: (state, action) => {
      state.sendErrorMessage = action.payload;
    },
  }
});

export const {
  setMessageStatus,
  setSendErrorMessage,
} = contactInfo.actions;

export default contactInfo.reducer;

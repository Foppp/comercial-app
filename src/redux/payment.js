import { createSlice } from "@reduxjs/toolkit";

export const paymentInfo = createSlice({
  name: 'payment',
  initialState: {
    paymentStatus: null,
    paymentErrorMessage: null,
  },
  reducers: {
    setPaymentStatus: (state, action) => {
      state.paymentStatus = action.payload;
    },
    setPaymentErrorMessage: (state, action) => {
      state.paymentErrorMessage = action.payload;
    },
  }
});

export const {
  setPaymentStatus,
  setPaymentErrorMessage,
} = paymentInfo.actions;

export default paymentInfo.reducer;
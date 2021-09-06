import { createSlice } from "@reduxjs/toolkit";
import { createPayment } from "./asyncThunk";

export const paymentInfo = createSlice({
  name: 'payment',
  initialState: {
    paymentMethodId: null,
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
  },
  extraReducers: {
    [createPayment.pending]: (state, action) => {
      state.paymentStatus = 'pending';
    },
    [createPayment.fulfilled]: (state, action) => {
      state.paymentMethodId = action.payload;
      state.paymentStatus = 'fulfilled';
      state.paymentErrorMessage = null;
    },
    [createPayment.rejected]: (state, action) => {
      state.paymentStatus = 'rejected';
      state.paymentErrorMessage = action.payload;
    }
  }
});

export const {
  setPaymentStatus,
  setPaymentErrorMessage,
} = paymentInfo.actions;

export default paymentInfo.reducer;
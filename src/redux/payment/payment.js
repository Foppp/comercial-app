import { createSlice } from "@reduxjs/toolkit";
import { createPayment } from "./asyncThunk";
import { captureCheckout } from "../checkout/asyncThunk";

export const paymentInfo = createSlice({
  name: 'payment',
  initialState: {
    paymentMethodId: null,
    paymentInfoStatus: null,
    paymentCheckoutStatus: null,
    paymentInfoError: null,
    paymentCheckoutError: null,
  },
  reducers: {},
  extraReducers: {
    [createPayment.pending]: (state, action) => {
      state.paymentInfoStatus = 'pending';
      state.paymentCheckoutStatus = 'pending';
    },
    [createPayment.fulfilled]: (state, action) => {
      state.paymentMethodId = action.payload;
      state.paymentInfoStatus = 'fulfilled';
      state.paymentInfoError = null;
      state.paymentCheckoutError = null;
    },
    [createPayment.rejected]: (state, action) => {
      state.paymentInfoStatus = 'rejected';
      state.paymentCheckoutStatus = 'rejected';
      state.paymentInfoError = action.payload;
    },
    [captureCheckout.fulfilled]: (state, action) => {
      state.paymentCheckoutStatus = 'fulfilled';
      state.paymentCheckoutError = null;
      // state.order = action.payload;
      // state.status = 'fulfilled';
    },
    [captureCheckout.rejected]: (state, action) => {
      state.paymentCheckoutError = action.payload;
      state.paymentCheckoutStatus = 'rejected';
    },
  }
});

export const {
  setPaymentStatus,
  setPaymentErrorMessage,
} = paymentInfo.actions;

export default paymentInfo.reducer;
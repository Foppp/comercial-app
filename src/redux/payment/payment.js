import { createSlice } from "@reduxjs/toolkit";
import { createPayment, captureCheckout } from "./asyncThunk";

export const paymentInfo = createSlice({
  name: 'payment',
  initialState: {
    paymentMethodId: null,
    status: null,
    error: null,
    order: null,
  },
  reducers: {},
  extraReducers: {
    [createPayment.pending]: (state, action) => {
      state.status = 'pending';
    },
    [createPayment.fulfilled]: (state, action) => {
      state.paymentMethodId = action.payload;
      state.error = null;
    },
    [createPayment.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [captureCheckout.pending]: (state, action) => {
      state.status = 'pending';
    },
    [captureCheckout.fulfilled]: (state, action) => {
      state.order = action.payload;
      state.status = 'fulfilled';
      state.error = null;
    },
    [captureCheckout.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    },

  }
});

export const {
  setPaymentStatus,
  setPaymentErrorMessage,
} = paymentInfo.actions;

export default paymentInfo.reducer;
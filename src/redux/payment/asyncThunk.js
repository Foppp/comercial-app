import { createAsyncThunk } from "@reduxjs/toolkit";

const payment = async (options) => {
  const { stripe, method } = options;
  const { error, paymentMethod } = await stripe.createPaymentMethod(method);
  if (error) throw error;
  return paymentMethod.id;
};

export const createPayment = createAsyncThunk(
  'payment/createPayment', async (options, { rejectWithValue }) => {
    try {
      return payment(options);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

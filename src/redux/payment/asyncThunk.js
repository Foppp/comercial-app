import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

const payment = async (options) => {
  const { stripe, method } = options;
  const { error, paymentMethod } = await stripe.createPaymentMethod(method);
  if (error) {
    throw error;
  } else {
    return paymentMethod.id;
  }
};

export const createPayment = createAsyncThunk(
  'payment/createPayment', async (options, { rejectWithValue }) => {
    try {
      return await payment(options);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const captureCheckout = createAsyncThunk(
  'payment/captureCheckout', async (checkoutData, { rejectWithValue }) => {
    try {
      const { checkoutTokenId, newOrder } = checkoutData;
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      return incomingOrder;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);
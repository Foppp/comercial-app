import { createAsyncThunk } from "@reduxjs/toolkit";
import { capture } from "../../services";
import { getPaymentMethodId } from '../../services';


export const createPayment = createAsyncThunk(
  'payment/createPayment', async (options, { rejectWithValue }) => {
    try {
      return await getPaymentMethodId(options);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const captureCheckout = createAsyncThunk(
  'payment/captureCheckout', async (checkoutData, { rejectWithValue }) => {
    try {
      return await capture(checkoutData);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
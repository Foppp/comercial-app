import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', async(_, { rejectWithValue }) => {
    try {
      const { data } = await commerce.products.list();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

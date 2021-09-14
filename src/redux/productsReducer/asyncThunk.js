import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductList } from "../../services";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', async(_, { rejectWithValue }) => {
    try {
      return await getProductList();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

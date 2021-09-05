import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../lib/commerce";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', async(obj, { rejectWithValue }) => {
    try {
      const { data } = await commerce.products.list();
    return data;
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const productsInfo = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
    productsErrorMessage: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentProductId: (state, action) => {
      state.currentProductId = action.payload;
    },
    setProductsErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = 'fulfilled';
      state.productsErrorMessage = null;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.productsErrorMessage = action.payload;
    }
  }
});

export const {
  setProducts,
  setCurrentProductId,
  setProductsErrorMessage,
} = productsInfo.actions;

export default productsInfo.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./asyncThunk";

export const productsInfo = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
    status: null,
    productsErrorMessage: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
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
  setFilteredProducts,
  setProductsErrorMessage,
} = productsInfo.actions;

export default productsInfo.reducer;
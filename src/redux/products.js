import { createSlice } from "@reduxjs/toolkit";

export const productsInfo = createSlice({
  name: 'products',
  initialState: {
    products: [],
    currentProductId: null,
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
  }
});

export const {
  setProducts,
  setCurrentProductId,
  setProductsErrorMessage,
} = productsInfo.actions;

export default productsInfo.reducer;
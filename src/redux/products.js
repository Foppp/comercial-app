import { createSlice } from "@reduxjs/toolkit";

export const productsInfo = createSlice({
  name: 'products',
  initialState: {
    products: [],
    currentProductId: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentProductId: (state, action) => {
      state.currentProductId = action.payload;
    },
  }
});

export const {
  setProducts,
  setCurrentProductId,
} = productsInfo.actions;

export default productsInfo.reducer;
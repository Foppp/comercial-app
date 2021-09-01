import { createSlice } from "@reduxjs/toolkit";

export const productsInfo = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  }
});

export const {
  setProducts,
} = productsInfo.actions;

export default productsInfo.reducer;
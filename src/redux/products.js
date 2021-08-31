import { createSlice } from "@reduxjs/toolkit";

export const productsInfo = createSlice({
  name: 'products',
  initialState: {
    products: [],
    // currentProductId: null,
  },
  reducers: {
    setInitialState: (state, action) => {
      state.products = action.payload.products;
    }
  }
});

export const { setInitialState } = productsInfo.actions;

export default productsInfo.reducer;

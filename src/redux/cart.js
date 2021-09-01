import { createSlice } from "@reduxjs/toolkit";

export const cartInfo = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  }
});

export const {
  setCart,
} = cartInfo.actions;

export default cartInfo.reducer;
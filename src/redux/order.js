import { createSlice } from "@reduxjs/toolkit";

export const orderInfo = createSlice({
  name: 'order',
  initialState: {
    order: null,
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  }
});

export const {
  setOrder,
} = orderInfo.actions;

export default orderInfo.reducer;
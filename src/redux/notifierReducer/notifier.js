import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../cartReducer/asyncThunk";
import { sendContactEmail } from "../contactReducer/asyncThync";

export const notificationInfo = createSlice({
  name: 'notification',
  initialState: {
    type: '',
    message: '',
    show: false,
  },
  reducers: {
    setShowNotification: (state, action) => {
      state.show = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    setHideNotification: (state) => {
      state.show = false;
    }
  },
  extraReducers: {
    [addToCart.fulfilled]: (state, action) => {
      state.type = 'success';
      state.message = 'Product was added to cart!';
      state.show = true;
    },
    [addToCart.rejected]: (state, action) => {
      state.type = 'danger';
      state.message = 'Ooops! Product was not added. Try again!';
      state.show = true;
    },
  }
});

export const {
  setShowNotification,
  setHideNotification
} = notificationInfo.actions;

export default notificationInfo.reducer;
import { createSlice } from "@reduxjs/toolkit";

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
  }
});

export const {
  setShowNotification,
  setHideNotification
} = notificationInfo.actions;

export default notificationInfo.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { sendContactEmail } from "./asyncThync";

export const contactInfo = createSlice({
  name: 'contact',
  initialState: {
    status: null,
    error: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  },
  extraReducers: {
    [sendContactEmail.pending]: (state, action) => {
      state.status = 'pending';
    },
    [sendContactEmail.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
    },
    [sendContactEmail.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }
  }
});

export const {
  setStatus,
} = contactInfo.actions;

export default contactInfo.reducer;

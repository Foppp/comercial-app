import { createSlice } from "@reduxjs/toolkit";

export const checkoutInfo = createSlice({
  name: 'checkout',
  initialState: {
    steps: [],
    currentStep: 0,
  },
  reducers: {
    setSteps: (state, action) => {
      state.steps = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    backStep: (state) => {
      state.currentStep -= 1;
    },
  }
});

export const {
  setSteps,
  nextStep,
  backStep,
} = checkoutInfo.actions;

export default checkoutInfo.reducer;
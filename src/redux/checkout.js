import { createSlice } from "@reduxjs/toolkit";

export const checkoutInfo = createSlice({
  name: 'checkout',
  initialState: {
    steps: [],
    currentStep: 0,
    order: null,
    shippingData: null,
    shippingCountries: [],
    shippingCountry: '',
    shippingSubdivisions: [],
    shippingSubdivision: '',
    shippingOptions: [],
    shippingOption: '',
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
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setShippingData: (state, action) => {
      state.shippingData = action.payload;
    },
    setShippingCountries: (state, action) => {
      state.shippingCountries = action.payload;
    },
    setShippingCountry: (state, action) => {
      state.shippingCountry = action.payload;
    },
    setShippingSubdivisions: (state, action) => {
      state.shippingSubdivisions = action.payload;
    },
    setShippingSubdivision: (state, action) => {
      state.shippingSubdivision = action.payload;
    },
    setShippingOptions: (state, action) => {
      state.shippingOptions = action.payload;
    },
    setShippingOption: (state, action) => {
      state.shippingOption = action.payload;
    },
  }
});

export const {
  setSteps,
  nextStep,
  backStep,
} = checkoutInfo.actions;

export default checkoutInfo.reducer;
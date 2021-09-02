import { createSlice } from "@reduxjs/toolkit";

export const checkoutInfo = createSlice({
  name: 'checkout',
  initialState: {
    steps: [],
    currentStep: 1,
    checkoutToken: null,
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
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
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
    setCheckoutToken: (state, action) => {
      state.checkoutToken = action.payload;
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
  setCurrentStep,
  nextStep,
  backStep,
  setOrder,
  setCheckoutToken,
  setShippingData,
  setShippingCountries,
  setShippingCountry,
  setShippingSubdivisions,
  setShippingSubdivision,
  setShippingOptions,
  setShippingOption,
} = checkoutInfo.actions;

export default checkoutInfo.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const checkoutInfo = createSlice({
  name: 'checkout',
  initialState: {
    currentStep: 1,
    checkoutToken: null,
    order: null,
    shipping: {
      shippingData: {},
      shippingCountries: [],
      shippingCountry: '',
      shippingSubdivisions: [],
      shippingSubdivision: '',
      shippingOptions: [],
      shippingOption: '',
    },
    errorMessage: '',
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
      state.shipping.shippingData = action.payload;
    },
    setShippingCountries: (state, action) => {
      state.shipping.shippingCountries = action.payload;
    },
    setShippingCountry: (state, action) => {
      state.shipping.shippingCountry = action.payload;
    },
    setShippingSubdivisions: (state, action) => {
      state.shipping.shippingSubdivisions = action.payload;
    },
    setShippingSubdivision: (state, action) => {
      state.shipping.shippingSubdivision = action.payload;
    },
    setShippingOptions: (state, action) => {
      state.shipping.shippingOptions = action.payload;
    },
    setShippingOption: (state, action) => {
      state.shipping.shippingOption = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    }
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
  setErrorMessage,
} = checkoutInfo.actions;

export default checkoutInfo.reducer;
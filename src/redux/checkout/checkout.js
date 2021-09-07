import { createSlice } from "@reduxjs/toolkit";
import {
  fetchShippingCountries,
  fetchSubdivisions,
  fetchShippingOptions,
  generateToken,
} from './asyncThunk';
import { captureCheckout } from "../payment/asyncThunk";

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
    status: null,
    errors: {
      shippingError: '',
      checkoutTokenError: '',
      orderError: '',
    },
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
  },
  extraReducers: {
    [fetchShippingCountries.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchShippingCountries.fulfilled]: (state, action) => {
      state.shipping.shippingCountries = action.payload;
      state.status = 'fulfilled';
      state.errors.shippingError = null;
    },
    [fetchShippingCountries.rejected]: (state, action) => {
      state.status = 'rejected';
      state.errors.shippingError = action.payload;
    },
    [fetchSubdivisions.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchSubdivisions.fulfilled]: (state, action) => {
      state.shipping.shippingSubdivisions = action.payload;
      state.status = 'fulfilled';
      state.errors.shippingError = null;
    },
    [fetchSubdivisions.rejected]: (state, action) => {
      state.status = 'rejected';
      state.errors.shippingError = action.payload;
    },
    [fetchShippingOptions.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchShippingOptions.fulfilled]: (state, action) => {
      state.shipping.shippingOptions = action.payload;
      state.status = 'fulfilled';
      state.errors.shippingError = null;
    },
    [fetchShippingOptions.rejected]: (state, action) => {
      state.status = 'rejected';
      state.errors.shippingError = action.payload;
    },
    [generateToken.pending]: (state, action) => {
      state.status = 'pending';
    },
    [generateToken.fulfilled]: (state, action) => {
      state.checkoutToken = action.payload;
      state.status = 'fulfilled';
      state.checkoutTokenError = null;
      state.shipping.shippingData = {};
      state.currentStep = 1;
    },
    [generateToken.rejected]: (state, action) => {
      state.status = 'rejected';
      state.checkoutTokenError = action.payload;
    },
    [captureCheckout.fulfilled]: (state, action) => {
      state.currentStep += 1;
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
  setErrorMessage,
} = checkoutInfo.actions;

export default checkoutInfo.reducer;
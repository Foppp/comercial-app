import { createSlice } from "@reduxjs/toolkit";
import {
  fetchShippingCountries,
  fetchSubdivisions,
  fetchShippingOptions,
  generateToken,
} from './asyncThunk';
import { captureCheckout } from "../paymentReducer/asyncThunk";
import { createPayment } from "../paymentReducer/asyncThunk";

export const checkoutInfo = createSlice({
  name: 'checkout',
  initialState: {
    steps: [
      { id: 1, name: 'Shipping Address', completed: false },
      { id: 2, name: 'Order Information', completed: false },
      { id: 3, name: 'Payment Details', completed: false },
      { id: 4, name: 'Complete', completed: false },
    ],
    currentStepId: 1,
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
      state.currentStepId = action.payload;
    },
    nextStep: (state) => {
      state.steps = state.steps
        .map((step) => step.id === state.currentStepId
          ? { ...step, completed: true }
          : step);
      state.currentStepId += 1;
    },
    backStep: (state) => {
      state.steps = state.steps
        .map((step) => step.id === state.currentStepId - 1
          ? { ...step, completed: false }
          : step);
      state.currentStepId -= 1;
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
      state.steps = state.steps.map((step) => ({ ...step, completed: false }));
      state.status = 'pending';
    },
    [generateToken.fulfilled]: (state, action) => {
      state.checkoutToken = action.payload;
      state.status = 'fulfilled';
      state.checkoutTokenError = null;
      state.shipping.shippingData = {};
      state.currentStepId = 1;
    },
    [generateToken.rejected]: (state, action) => {
      state.status = 'rejected';
      state.checkoutTokenError = action.payload;
    },
    [captureCheckout.fulfilled]: (state) => {
      state.currentStepId += 1;
      state.steps = state.steps
      .map((step) => step.id === state.currentStepId
        ? { ...step, completed: true }
        : step);
      
    },
    [createPayment.fulfilled]: (state) => {
      state.steps = state.steps
        .map((step) => step.id === state.currentStepId
          ? { ...step, completed: true }
          : step);
    },
  },
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
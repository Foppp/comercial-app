import { createSlice } from "@reduxjs/toolkit";

export const filterProductsInfo = createSlice({
  name: 'filter',
  initialState: {
    filterBy: {
      price: {
        min: null,
        max: Infinity,
      },
      categories: [],
    },
  },
  reducers: {
    setMinPrice: (state, action) => {
      state.filterBy.price.min = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filterBy.price.max = action.payload === 0 ? Infinity :  action.payload;
    },
    setManufacturer: (state, action) => {
      state.filterBy.categories = [...state.filterBy.categories, action.payload];
    },
    removeManufacturer: (state, action) => {
      state.filterBy.categories = state.filterBy.categories
        .filter((category) => category !== action.payload);
    },
    setKeys: (state, action) => {
      state.filterBy.categories = [...state.filterBy.categories, action.payload];
    },
    removeKeys: (state, action) => {
      state.filterBy.categories = state.filterBy.categories
        .filter((keys) => keys.id !== action.payload.id);
    },
    setActiveFilter: (state, action) => {
      state.filters = state.filters.map((filter) => filter.id === action.payload
        ? ({ ...filter, active: !filter.active })
        : filter);
    }
  },
});

export const {
  setMinPrice,
  setMaxPrice,
  setManufacturer,
  setKeys,
  removeManufacturer,
  removeKeys,
  setActiveFilter,
} = filterProductsInfo.actions;

export default filterProductsInfo.reducer;
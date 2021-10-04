import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./asyncThunk";
import filterProductList from '../../utils/filters';
import sortProducts from '../../utils/sort';
import paginate from '../../utils/pagination';

export const productsInfo = createSlice({
  name: 'products',
  initialState: {
    products: [],
    updatedProducts: [],
    paginatedProducts: [],
    filter: {
      type: {
        price: {
          min: null,
          max: Infinity,
        },
        category: '',
      },
    },
    pagination: {
      currentPage: 1,
      perPage: 10,
      totalPages: null,
    },
    sortOption: null,
    status: null,
    productsErrorMessage: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setMinPrice: (state, action) => {
      state.filter.type.price.min = action.payload;
      const { currentPage, perPage } = state.pagination;
      const filteredList = filterProductList(state.products, state.filter.type);
      state.updatedProducts = sortProducts(filteredList, state.sortOption);
      state.paginatedProducts = paginate(currentPage, perPage, state.updatedProducts);
    },
    setMaxPrice: (state, action) => {
      state.filter.type.price.max = action.payload === 0 ? Infinity : action.payload;
      const { currentPage, perPage } = state.pagination;
      const filteredList = filterProductList(state.products, state.filter.type);
      state.updatedProducts = sortProducts(filteredList, state.sortOption);
      state.paginatedProducts = paginate(currentPage, perPage, state.updatedProducts);
    },
    setCategory: (state, action) => {
      state.filter.type.category = action.payload;
      const { currentPage, perPage } = state.pagination;
      const filteredList = filterProductList(state.products, state.filter.type);
      state.updatedProducts = sortProducts(filteredList, state.sortOption);
      state.paginatedProducts = paginate(currentPage, perPage, state.updatedProducts);
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
      const { currentPage, perPage } = state.pagination;
      const filteredList = filterProductList(state.products, state.filter.type);
      state.updatedProducts = sortProducts(filteredList, state.sortOption);
      state.paginatedProducts = paginate(currentPage, perPage, state.updatedProducts);
    },
    setTotalPages: (state, action) => {
      state.pagination.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
      const { currentPage, perPage } = state.pagination;
      state.paginatedProducts = paginate(currentPage, perPage, state.updatedProducts);
    },
    setPerPage: (state, action) => {
      state.pagination.perPage = action.payload;
      state.pagination.currentPage = 1;
      const { currentPage, perPage } = state.pagination;
      state.paginatedProducts = paginate(currentPage, perPage, state.updatedProducts);
    },
    setNextPage: (state) => {
      state.pagination.currentPage += 1;
      const { currentPage, perPage } = state.pagination;
      state.paginatedProducts = paginate(currentPage, perPage, state.updatedProducts);
    },
    setPrevPage: (state) => {
      state.pagination.currentPage -= 1;
      const { currentPage, perPage } = state.pagination;
      state.paginatedProducts = paginate(currentPage, perPage, state.updatedProducts);
    },
    setProductsErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.updatedProducts = action.payload;
      state.paginatedProducts = action.payload;
      state.status = 'fulfilled';
      state.productsErrorMessage = null;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.productsErrorMessage = action.payload;
    },
  }
});

export const {
  setProducts,
  setFilteredProducts,
  setMinPrice,
  setMaxPrice,
  setCategory,
  setSortOption,
  setTotalPages,
  setCurrentPage,
  setPerPage,
  setNextPage,
  setPrevPage,
  setProductsErrorMessage,
} = productsInfo.actions;

export default productsInfo.reducer;
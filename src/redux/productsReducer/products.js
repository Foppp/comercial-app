import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchCategories, fetchCategoryProducts } from "./asyncThunk";
import filterProductList from '../../utils/filters';
import sortProducts from '../../utils/sort';
import paginate from '../../utils/pagination';

export const productsInfo = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categoryList: [],
    filteredProducts: [],
    paginatedProducts: [],
    filter: {
      type: {
        price: {
          min: null,
          max: Infinity,
        },
        categories: [],
      },
      filtersData: {
        categories: ['Analog', 'Digital', 'Modular', 'Desktop'],
        manufactures: ['Moog', 'Korg', 'Behringer', 'Sequential'],
        keys: ['25', '32', '37', '49'],
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
      const filterType = state.filter.type;
      const { currentPage, perPage } = state.pagination;
      state.filteredProducts = filterProductList(state.products, filterType);
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
    },
    setMaxPrice: (state, action) => {
      state.filter.type.price.max = action.payload === 0 ? Infinity : action.payload;
      const filterType = state.filter.type;
      const { currentPage, perPage } = state.pagination;
      state.filteredProducts = filterProductList(state.products, filterType);
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
    },
    setCategory: (state, action) => {
      state.filter.type.categories = [...state.filter.type.categories, action.payload];
      const filterType = state.filter.type;
      const { currentPage, perPage } = state.pagination;
      state.filteredProducts = filterProductList(state.products, filterType);
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
    },
    removeCategory: (state, action) => {
      state.filter.type.categories = state.filter.type.categories
        .filter((category) => category !== action.payload);
      const filterType = state.filter.type;
      const { currentPage, perPage } = state.pagination;
      state.filteredProducts = filterProductList(state.products, filterType);
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
      const { currentPage, perPage } = state.pagination;
      state.filteredProducts = sortProducts(state.filteredProducts, state.sortOption);
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
    },
    setTotalPages: (state, action) => {
      state.pagination.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
      const { currentPage, perPage } = state.pagination;
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
    },
    setPerPage: (state, action) => {
      state.pagination.perPage = action.payload;
      const { currentPage, perPage } = state.pagination;
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
    },
    setNextPage: (state) => {
      state.pagination.currentPage += 1;
      const { currentPage, perPage } = state.pagination;
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
    },
    setPrevPage: (state) => {
      state.pagination.currentPage -= 1;
      const { currentPage, perPage } = state.pagination;
      state.paginatedProducts = paginate(currentPage, perPage, state.filteredProducts);
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
      state.filteredProducts = action.payload;
      state.paginatedProducts = action.payload;
      state.status = 'fulfilled';
      state.productsErrorMessage = null;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.productsErrorMessage = action.payload;
    },
    [fetchCategories.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categoryList = action.payload;
      // state.filteredProducts = action.payload;
      // state.paginatedProducts = action.payload;
      state.status = 'fulfilled';
      state.productsErrorMessage = null;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = 'rejected';
      state.productsErrorMessage = action.payload;
    }
  }
});

export const {
  setProducts,
  setFilteredProducts,
  setMinPrice,
  setMaxPrice,
  setCategory,
  removeCategory,
  setSortOption,
  setTotalPages,
  setCurrentPage,
  setPerPage,
  setNextPage,
  setPrevPage,
  setProductsErrorMessage,
} = productsInfo.actions;

export default productsInfo.reducer;
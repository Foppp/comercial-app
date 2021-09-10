import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import filterProductList from '../../utils/filters';
import sortProducts from '../../utils/sort';
import paginate from '../../utils/pagination';

const Products = () => {
  const products = useSelector((state) => state.productsInfoReducer.products);
  const filters = useSelector(
    (state) => state.filterProductsInfoReducer.filterBy
  );
  const sortOption = useSelector(
    (state) => state.sortProductsInfoReducer.sortOption
  );
  const perPage = useSelector((state) => state.paginationInfoReducer.perPage);
  const currentPage = useSelector(state => state.paginationInfoReducer.currentPage);
  const filteredProductList = filterProductList(products, filters);
  const sortedProductList = sortProducts(filteredProductList, sortOption);
  const paginatedProductList = paginate(currentPage, perPage, sortedProductList);
  return (
    <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center mt-3 px-3'>
      {paginatedProductList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

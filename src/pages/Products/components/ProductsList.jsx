import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import filterProductList from '../../../utils/filters';
import sortProducts from '../../../utils/sort';
import paginate from '../../../utils/pagination';
import { Row } from 'react-bootstrap';

const Products = () => {
  const products = useSelector((state) => state.productsInfoReducer.products);
  const filters = useSelector((state) => state.filterProductsInfoReducer.filterBy);
  const sortOption = useSelector((state) => state.sortProductsInfoReducer.sortOption);
  const perPage = useSelector((state) => state.paginationInfoReducer.perPage);
  const currentPage = useSelector(state => state.paginationInfoReducer.currentPage);
  const filteredProductList = filterProductList(products, filters);
  const sortedProductList = sortProducts(filteredProductList, sortOption);
  const paginatedProductList = paginate(currentPage, perPage, sortedProductList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <Row lg={3} md={2} sm={1} xs={1} className="mt-2">
      {paginatedProductList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      </Row>
  );
};

export default Products;

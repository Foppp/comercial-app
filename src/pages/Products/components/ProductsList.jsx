import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import ProductItem from './ProductItem';
import filterProductList from '../../../utils/filters';
import sortProducts from '../../../utils/sort';
import paginate from '../../../utils/pagination';
import LoadSpinner from '../../../components/Spinner/Spinner';

const Products = () => {
  const products = useSelector((state) => state.productsInfoReducer.products);
  const filters = useSelector((state) => state.filterProductsInfoReducer.filterBy);
  const sortOption = useSelector((state) => state.sortProductsInfoReducer.sortOption);
  const perPage = useSelector((state) => state.paginationInfoReducer.perPage);
  const currentPage = useSelector((state) => state.paginationInfoReducer.currentPage);
  const filteredProductList = filterProductList(products, filters);
  const sortedProductList = sortProducts(filteredProductList, sortOption);
  const paginatedProductList = paginate(currentPage, perPage, sortedProductList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderFilteredProducts = () => {
    if (paginatedProductList.length !== 0) {
      return (
        paginatedProductList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )
    } return (
      <Container className='product-container text-center py-5'>
          <span className="fs-5">Products not found...</span>
        </Container>
    )
  }
  return (
    <Row xl={4} lg={3} md={3} sm={2} xs={1} className='mt-2 justify-content-center'>
      {products.length === 0 ? (
        <Container fluid className='product-container text-center py-5'>
          <LoadSpinner />
        </Container>
      ) : 
        renderFilteredProducts()
      }
    </Row>
  );
};

export default Products;

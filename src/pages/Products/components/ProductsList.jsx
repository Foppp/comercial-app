import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { setTotalPages } from '../../../redux/productsReducer/products';
import LoadSpinner from '../../../components/Spinner/Spinner';

const Products = () => {
  const products = useSelector((state) => state.productsInfoReducer.products);
  const updatedProducts = useSelector((state) => state.productsInfoReducer.updatedProducts);
  const paginatedProducts = useSelector((state) => state.productsInfoReducer.paginatedProducts);
  const perPage = useSelector((state) => state.productsInfoReducer.pagination.perPage);
  const currentPage = useSelector((state) => state.productsInfoReducer.pagination.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const totalPages = Math.ceil(updatedProducts.length / perPage);
    dispatch(setTotalPages(totalPages));
  }, [dispatch, perPage, updatedProducts, currentPage]);

  const renderFilteredProducts = () => {
    if (paginatedProducts.length !== 0) {
      return paginatedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ));
    } else {
      return (
        <Container className='product-container text-center py-5'>
          <span className='fs-5'>Products not found...</span>
        </Container>
      );
    }
  };
  return (
    <Row
      xl={4}
      lg={3}
      md={3}
      sm={2}
      xs={1}
      className='mt-2 justify-content-center'
    >
      {products.length === 0 ? (
        <Container fluid className='product-container text-center py-5'>
          <LoadSpinner />
        </Container>
      ) : (
        renderFilteredProducts()
      )}
    </Row>
  );
};

export default Products;

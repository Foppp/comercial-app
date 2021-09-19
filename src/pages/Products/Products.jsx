import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Filters from './components/Filters';
import ProductsList from './components/ProductsList';
import Sort from './components/Sort';
import PagePagination from './components/PagePagination';

import './products.style.css';

const Products = () => {
  return (
    <Container>
      <Row className='mt-3'>
        <Col md={12} lg={3}>
          <Filters />
        </Col>
        <Col>
          <Container className='products-container p-1'>
            <Sort />
            <ProductsList />
            <PagePagination />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductsList from './components/ProductsList';
import Sort from './components/Sort';
import PagePagination from './components/PagePagination';

const Products = () => {
  return (
    <Container>
      <Row className='mt-3'>
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

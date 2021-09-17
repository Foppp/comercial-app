import React from 'react';
import Filters from './components/Filters';
import ProductsList from './components/ProductsList';
import Sort from './components/Sort';
import Pagination from './components/Pagination';
import { Container, Row, Col } from 'react-bootstrap';
const Products = () => {
  return (
    <Container fluid>
      <Row className='mt-3'>
        <Col md={12} lg={3}>
          <Filters />
        </Col>
        <Col>
          <Container fluid className="p-0">
            <Sort />
            <ProductsList />
            <Pagination />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;

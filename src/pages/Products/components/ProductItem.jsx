import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import { addToCart } from '../../../redux/cartReducer/asyncThunk';
import { setCurrentProductId } from '../../../redux/productsReducer/products';
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ product }) => {

  return (
    <Col className='mb-3'>
      <Card className='product-card h-100'>
        <Link
          to={`products/${product.permalink}`}
          className='product-info text-decoration-none'
        >
          <Card.Img
            variant='top'
            className='p-2'
            alt={`${product.name}`}
            src={product.media.source}
          />
        </Link>
        <Card.Body className='text-center d-flex flex-column justify-content-between'>
          <Link
            to={`products/${product.permalink}`}
            className='product-info text-decoration-none'
          >
            <Card.Title className='text-dark text-wrap'>
              {product.name}
            </Card.Title>
            <Card.Text className='text-secondary'>
              {product.price.formatted_with_symbol}
            </Card.Text>
          </Link>
          <footer>
            <AddToCartButton product={product} />
          </footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;

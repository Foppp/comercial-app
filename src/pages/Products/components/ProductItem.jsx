import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import { addToCart } from '../../../redux/cartReducer/asyncThunk';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

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
            <Card.Title className='text-dark'>{product.name}</Card.Title>
            <Card.Text className='text-secondary'>
              {product.price.formatted_with_symbol}
            </Card.Text>
          </Link>
          <footer>
            <Button
              variant='light'
              className='rounded-pill mt-2'
              onClick={() =>
                dispatch(addToCart({ productId: product.id, qty: 1 }))
              }
            >
              Add to cart
            </Button>
          </footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;

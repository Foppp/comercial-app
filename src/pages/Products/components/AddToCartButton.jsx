import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
import { addToCart } from '../../../redux/cartReducer/asyncThunk';
import { setCurrentProductId } from '../../../redux/productsReducer/products';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const currentProductId = useSelector(
    (state) => state.productsInfoReducer.currentProductId
  );
  const status = useSelector((state) => state.cartInfoReducer.status);

  const handleAddToCart = (productId, qty) => (dispatch) => {
    dispatch(setCurrentProductId(productId));
    dispatch(addToCart({ productId, qty }));
  };

  return status === 'pending' && currentProductId === product.id ? (
    <Button variant='light' className='rounded-pill mt-2 text-wrap' disabled>
      <Spinner
        as='span'
        animation='grow'
        size='sm'
        role='status'
        aria-hidden='true'
      />
      <span className='ms-1'>Adding..</span>
    </Button>
  ) : (
    <Button
      variant='light'
      className='rounded-pill mt-2 text-wrap'
      onClick={() => dispatch(handleAddToCart(product.id, 1))}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;

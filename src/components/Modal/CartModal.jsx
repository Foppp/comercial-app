import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../Cart/CartItem';
import Spinner from '../Spinner/Spinner';
import { setModalClose } from '../../redux/modal/modal';

const CartQuickView = () => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const dispatch = useDispatch();

  const renderEmptyCart = () => (
    <div className='container text-center mt-5'>
      <h1>Your cart is empty!</h1>
      <h3>
        <Link to='/products' type='button' className='btn btn-secondary' onClick={() => dispatch(setModalClose())}>
          Start shopping now
        </Link>
      </h3>
    </div>
  );

  if (!cart.line_items)
    return (
      <div className='cart-container d-flex justify-content-center'>
        <Spinner />
      </div>
    );

  const renderCart = () => (
    <>
      {cart.line_items.map((lineItem) => (
        <CartItem key={lineItem.id} item={lineItem} />
      ))}
      <div className='d-flex flex-row-reverse text-center row mt-3'>
        <div className='col-md-4'>
          <h5 className=''>Total: {cart.subtotal.formatted_with_symbol}</h5>
        </div>
      </div>
      <div className='shopping-cart-footer mt-3'>
        <div className='column float-start'>
          <Link
            to='/products'
            className='btn btn-outline-secondary rounded-pill'
            onClick={() => dispatch(setModalClose())}
          >
            Back to Shopping
          </Link>
        </div>
        <div className='column float-end'>
          <Link
            to='/cart'
            className='btn btn-warning mx-3 rounded-pill'
            onClick={() => dispatch(setModalClose())}
          >
            Go to cart
          </Link>
          <Link
            to='/checkout'
            className='btn btn-info rounded-pill'
            onClick={() => dispatch(setModalClose())}
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className=''>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </div>
  );
};

export default CartQuickView;

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCart,
  setCartErrorMessage,
  setCartStatus,
} from '../../redux/cart.js';
import showNotification from '../ToastNotification/index.js';
import { commerce } from '../../lib/commerce';

import CartItem from './CartItem';
import Spinner from '../Spinner/Spinner';

const handleUpdateCartQty = (lineItemId, quantity) => async (dispatch) => {
  dispatch(setCartStatus('processing'));
  try {
    const response = await commerce.cart.update(lineItemId, { quantity });
    dispatch(setCart(response.cart));
    dispatch(setCartStatus('fulfilled'));
    dispatch(setCartErrorMessage(null));
    dispatch(showNotification('success', 'Item quantity was updated!'));
  } catch (e) {
    dispatch(setCartStatus('rejected'));
    dispatch(setCartErrorMessage(e.message));
    dispatch(
      showNotification('danger', 'Item quantity was not updated! Try again!')
    );
  }
};

const handleRemoveFromCart = (lineItemId) => async (dispatch) => {
  dispatch(setCartStatus('processing'));
  try {
    const response = await commerce.cart.remove(lineItemId);
    dispatch(setCart(response.cart));
    dispatch(setCartStatus('fulfilled'));
    dispatch(setCartErrorMessage(null));
    dispatch(showNotification('success', 'Item was removed from cart!'));
  } catch (e) {
    dispatch(setCartStatus('rejected'));
    dispatch(setCartErrorMessage(e.message));
    dispatch(showNotification('danger', 'Item was not removed! Try again!'));
  }
};

const handleEmptyCart = () => async (dispatch) => {
  dispatch(setCartStatus('processing'));
  try {
    const response = await commerce.cart.empty();
    dispatch(setCart(response.cart));
    dispatch(setCartStatus('fulfilled'));
    dispatch(setCartErrorMessage(null));
    dispatch(showNotification('success', 'Items removed!'));
  } catch (e) {
    dispatch(setCartStatus('rejected'));

    dispatch(setCartErrorMessage(e.message));
    dispatch(showNotification('danger', 'Items was not removed! Try again!'));
  }
};

const Cart = ({ showNotification }) => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);

  const dispatch = useDispatch();

  const renderEmptyCart = () => (
    <div className='container text-center mt-5'>
      <h1>Your cart is empty!</h1>
      <h3>
        <Link to='/products' type='button' className='btn btn-secondary'>
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
      <div className='container'>
        {cart.line_items.map((lineItem) => (
          <CartItem
            key={lineItem.id}
            item={lineItem}
            onRemove={handleRemoveFromCart}
            onUpdateQty={handleUpdateCartQty}
          />
        ))}
        <div className='d-flex flex-row-reverse text-center row mt-3'>
          <div className='col-md-2'>
            <h5 className=''>Total: {cart.subtotal.formatted_with_symbol}</h5>
          </div>
        </div>
        <div className='shopping-cart-footer mt-3'>
          <div className='column float-start'>
            <Link to='/products' className='btn btn-outline-secondary'>
              Back to Shopping
            </Link>
          </div>
          <div className='column float-end'>
            <button
              className='btn btn-danger mx-3'
              type='button'
              onClick={() => dispatch(handleEmptyCart())}
            >
              Clear Cart
            </button>
            <Link to='/checkout' className='btn btn-success'>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className='cart-container'>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </div>
  );
};

export default Cart;

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../../redux/cart/asyncThunk';
import CartItem from './CartItem';
import Spinner from '../Spinner/Spinner';

const Cart = () => {
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
          <CartItem key={lineItem.id} item={lineItem} />
        ))}
              <div className='d-flex text-center row mt-3'>
      <div className='col-md-6'>
          <h5 className=''>Items in cart: {cart.line_items.length}</h5>
        </div>
      <div className='col-md-6'>
          <h5 className=''>Total: {cart.subtotal.formatted_with_symbol}</h5>
        </div>
      </div>
        <div className='shopping-cart-footer mt-3'>
          <div className='column float-start'>
            <Link to='/products' className='btn btn-outline-secondary rounded-pill'>
              Back to Shopping
            </Link>
          </div>
          <div className='column float-end'>
            <button
              className='btn btn-warning mx-3 rounded-pill'
              type='button'
              onClick={() => dispatch(emptyCart())}
            >
              Clear Cart
            </button>
            <Link to='/checkout' className='btn btn-info rounded-pill'>
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

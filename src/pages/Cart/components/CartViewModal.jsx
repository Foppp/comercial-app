import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner';
import { setModalClose } from '../../../redux/modalReducer/modal';

const CartQuickView = () => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const dispatch = useDispatch();

  const renderEmptyCart = () => (
    <div className='container text-center mt-5'>
      <h1>Your cart is empty!</h1>
      <h3>
        <Link
          to='/products'
          type='button'
          className='btn btn-secondary'
          onClick={() => dispatch(setModalClose())}
        >
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
      {cart.line_items.map((item) => (
        <div key={item.id} className='row text-center m-1 border rounded p-2'>
          <div className='col-md-2'>
            <img src={item.media.source} alt='Product' width='40' height='40' />
          </div>
          <div className='col-md-6'>
            <h6 className='product-title mt-2'>
              <Link
                to={`products/${item.permalink}`}
                className='text-decoration-none text-black'
              >
                {item.name}
              </Link>
            </h6>
          </div>
          <div className='col-md-2'>
            <div className='d-flex justify-content-around'>
              <span className='mt-2'>{item.quantity}</span>
            </div>
          </div>
          <div className='col-md-2 mt-2'>
            {item.line_total.formatted_with_symbol}
          </div>
        </div>
      ))}
      <div className='d-flex text-center row mt-3'>
        <div className='col-md-6'>
          <h5 className=''>Items in cart: {cart.line_items.length}</h5>
        </div>
        <div className='col-md-6'>
          <h5 className=''>Total: {cart.subtotal.formatted_with_symbol}</h5>
        </div>
      </div>
      <div className='mt-3'>
        <div className='column float-start'>
          <button
            className='btn btn-outline-secondary rounded-pill'
            onClick={() => dispatch(setModalClose())}
          >
            Back
          </button>
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

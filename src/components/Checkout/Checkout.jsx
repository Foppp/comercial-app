import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateToken } from '../../redux/checkout/asyncThunk.js';
import Spinner from '../Spinner/Spinner';
import CheckoutForm from './index.jsx';

const Checkout = () => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const dispatch = useDispatch();
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);

  useEffect(() => {
    if (cart.id) {
      dispatch(generateToken(cart.id));
    }
  }, [cart, dispatch]);

  return (
    <div className='checkout-container'>
      <div className='m-3 d-flex justify-content-center'>
        {!checkoutToken ? <Spinner /> : <CheckoutForm />}
      </div>
    </div>
  );
};

export default Checkout;

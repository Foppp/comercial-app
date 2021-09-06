/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStep, setShippingData } from '../../redux/checkout/checkout.js';
import { generateToken } from '../../redux/checkout/asyncThunk.js';
import Spinner from '../Spinner/Spinner';
import CheckoutForm from './index.jsx';

const Checkout = () => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const dispatch = useDispatch();
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);

  useEffect(() => {
    if (cart.id) {
      dispatch(setShippingData({}));
      dispatch(generateToken(cart.id));
      dispatch(setCurrentStep(1));
    }
  }, [dispatch]);

  return (
    <div className='checkout-container'>
      <div className='m-3 d-flex justify-content-center'>
        {!checkoutToken ? <Spinner /> : <CheckoutForm />}
      </div>
    </div>
  );
};

export default Checkout;

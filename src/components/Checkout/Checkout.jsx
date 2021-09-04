/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCheckoutToken,
  setCurrentStep,
  setShippingData,
  setErrorMessage,
} from '../../redux/checkout.js';
import { commerce } from '../../lib/commerce.js';
import Spinner from '../Spinner/Spinner';
import CheckoutForm from './index.jsx';

const Checkout = () => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const dispatch = useDispatch();
  const checkoutToken = useSelector(
    (state) => state.checkoutInfoReducer.checkoutToken
  );

  useEffect(() => {
    if (cart.id) {
      const generateToken = () => async (dispatch) => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: 'cart',
          });
          dispatch(setCheckoutToken(token));
        } catch (e) {
          dispatch(setErrorMessage(e.message));
        }
      };
      dispatch(setShippingData({}));
      dispatch(generateToken());
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

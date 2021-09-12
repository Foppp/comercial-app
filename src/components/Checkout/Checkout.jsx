import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateToken } from '../../redux/checkout/asyncThunk.js';
import Spinner from '../Spinner/Spinner';
import AdressForm from "./AdressFormPayment";
import Review from "./Review";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import Stepper from './Stepper.jsx';

const steps = {
  1: AdressForm,
  2: Review,
  3: Payment,
  4: Confirmation,
};

const Checkout = () => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const dispatch = useDispatch();
  const checkoutToken = useSelector(
    (state) => state.checkoutInfoReducer.checkoutToken
  );
  const currentStepId = useSelector(
    (state) => state.checkoutInfoReducer.currentStepId
  );

  const Form = steps[currentStepId];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStepId]);

  useEffect(() => {
    if (cart.id) {
      dispatch(generateToken(cart.id));
    }
  }, [cart, dispatch]);

  return (
    <div className='checkout-container'>
      <div className='m-3 d-flex justify-content-center'>
        {!checkoutToken ? (
          <Spinner />
        ) : (
            <div className='card checkout-card shadow-sm'>
              <Stepper />
            <div className='container'>
              <Form />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateToken } from '../../redux/checkoutReducer/asyncThunk.js';
import Spinner from '../../components/Spinner/Spinner';
import AdressForm from './components/AdressFormPayment';
import Review from './components/Review';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Stepper from './components/Stepper';

const steps = {
  1: AdressForm,
  2: Review,
  3: Payment,
  4: Confirmation,
};

const Checkout = () => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const dispatch = useDispatch();
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);
  const currentStepId = useSelector((state) => state.checkoutInfoReducer.currentStepId);

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
    <div className='checkout-container container container-fuid h-100'>
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

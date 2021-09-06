import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { refreshCart } from '../../redux/cart/asyncThunk.js';
import { setCheckoutToken } from '../../redux/checkout/checkout.js';

const Confirmation = () => {
  const dispatch = useDispatch();
  const shippingData = useSelector((state) => state.checkoutInfoReducer.shipping.shippingData);
  const order = useSelector((state) => state.checkoutInfoReducer.order);

  console.log(order)

  useEffect(() => {
    dispatch(refreshCart());
    return () => {
      dispatch(setCheckoutToken(null));
    };
  }, [dispatch]);

  return (
    <div className='text-center m-3'>
      <h1>{`Thank you for your purchase, ${shippingData.firstName} ${shippingData.lastName}!`}</h1>
      <Link
        to='/products'
        className='full-width btn btn-secondary m-3'
        type='button'
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Confirmation;

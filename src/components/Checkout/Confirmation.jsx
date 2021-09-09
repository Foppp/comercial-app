import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { refreshCart } from '../../redux/cart/asyncThunk.js';
import { setCheckoutToken, setOrder } from '../../redux/checkout/checkout.js';

const Confirmation = () => {
  const dispatch = useDispatch();
  const shippingData = useSelector(
    (state) => state.checkoutInfoReducer.shipping.shippingData
  );

  useEffect(() => {
    return () => {
      dispatch(setCheckoutToken(null));
      dispatch(setOrder(null));
      dispatch(refreshCart());
    };
  }, [dispatch]);

  return (
    <div className='text-center m-3'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='freen'
        className='bi bi-check-lg'
        viewBox='0 0 16 16'
      >
        <path d='M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z' />
      </svg>
      <h3>{`Thank you for your purchase, ${shippingData.firstName} ${shippingData.lastName}!`}</h3>
      <Link
        to='/products'
        className='full-width btn btn-info m-3'
        type='button'
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Confirmation;

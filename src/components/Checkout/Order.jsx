import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { captureCheckout } from '../../redux/checkout/asyncThunk';

const Order = () => {
  console.log('-----')
  // const paymentMethodId = useSelector((state) => state.paymentInfoReducer.paymentMethodId);
  // const order = useSelector((state) => state.checkoutInfoReducer.order);
  // const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);
  // const shippingData = useSelector((state) => state.checkoutInfoReducer.shipping.shippingData);
  // const error = useSelector((state) => state.checkoutInfoReducer.errorMessage)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const orderData = {
  //     line_items: checkoutToken.live.line_items,
  //     customer: {
  //       firstname: shippingData.firstName,
  //       lastname: shippingData.lastName,
  //       email: shippingData.email,
  //     },
  //     shipping: {
  //       name: 'International',
  //       street: shippingData.address1,
  //       town_city: shippingData.city,
  //       county_state: shippingData.shippingSubdivision,
  //       postal_zip_code: shippingData.zip,
  //       country: shippingData.shippingCountry,
  //     },
  //     fulfillment: { shipping_method: shippingData.shippingOption },
  //     payment: {
  //       gateway: 'stripe',
  //       stripe: { payment_method_id: paymentMethodId },
  //     },
  //   };
  //   dispatch(
  //     captureCheckout({
  //       checkoutTokenId: checkoutToken.id,
  //       newOrder: orderData,
  //     })
  //   );
  // }, [dispatch]);

  return (
    <div className='text-center m-3'>
      <h1>Placing order...</h1>
      {/* {!order ? <Spinner /> : <h1>{error}</h1>} */}
    </div>
  );
};

export default Order;

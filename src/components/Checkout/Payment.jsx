/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { backStep } from "../../redux/checkout/checkout.js";
import { createPayment } from "../../redux/payment/asyncThunk.js";
import { captureCheckout } from "../../redux/payment/asyncThunk.js";

import PayButton from './PayButton.jsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY, { locale: "en" });

const Payment = () => {
  const dispatch = useDispatch();
  const paymentError = useSelector((state) => state.paymentInfoReducer.error);
  const paymentMethodId = useSelector((state) => state.paymentInfoReducer.paymentMethodId);
  const shippingData = useSelector((state) => state.checkoutInfoReducer.shipping.shippingData);
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);

  const handleSubmit = (event, elements, stripe) => async (dispatch) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const options = {
      stripe, method: {
        type: 'card',
        card: cardElement,
      }
    };
    dispatch(createPayment(options))
  };

  useEffect(() => {
    if (paymentMethodId) {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: 'International',
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: { payment_method_id: paymentMethodId },
        },
      };
      dispatch(
        captureCheckout({
          checkoutTokenId: checkoutToken.id,
          newOrder: orderData,
        })
      );
    }
  }, [paymentMethodId]);

  return (
    <div className='col text-center align-items-center mt-3'>
      <div className='py-2 text-center'>
        <h2>Payment Details</h2>
      </div>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => dispatch(handleSubmit(e, elements, stripe))}>
              <CardElement />
              {paymentError && (
                <p className='text-center text-danger mt-3'>{paymentError}</p>
              )}
              <br /> <br />
              <div className='d-flex justify-content-between m-3'>
                <button
                  className='btn btn-outline-secondary'
                  onClick={() => dispatch(backStep())}
                >
                  Back
                </button>
                <PayButton stripe={stripe} />
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default Payment;

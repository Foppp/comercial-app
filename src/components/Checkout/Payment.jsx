import React from "react";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { setOrder, nextStep, backStep } from "../../redux/checkout/checkout.js";
import { setPaymentStatus, setPaymentErrorMessage } from "../../redux/payment/payment.js";
import { captureCheckout } from "../../redux/checkout/asyncThunk.js";
import { refreshCart } from "../../redux/cart/asyncThunk.js";
import { createPayment } from "../../redux/payment/asyncThunk.js";
import PayButton from './PayButton.jsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY, { locale: "en" });

const Payment = () => {
  const dispatch = useDispatch();
  const paymentErrorMessage = useSelector((state) => state.paymentInfoReducer.paymentErrorMessage);
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);
  const shippingData = useSelector((state) => state.checkoutInfoReducer.shipping.shippingData);
  
  const handleSubmit = (event, elements, stripe) => async (dispatch) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    dispatch(setPaymentErrorMessage(null));
    dispatch(setPaymentStatus('pending'));
    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
      if (error) {
        throw error;
      } else {
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
            payment: { gateway: 'stripe', stripe: { payment_method_id: paymentMethod.id },
          },
        };
        dispatch(setPaymentStatus('fulfilled'));
        dispatch(captureCheckout({ checkoutTokenId: checkoutToken.id, newOrder: orderData }));
        dispatch(refreshCart());
        dispatch(nextStep());
      }
    } catch (e) {
      dispatch(setPaymentStatus('rejected'));
      dispatch(setPaymentErrorMessage(e.message));
    }
  };

  return (
    <main>
      <div className='py-5 text-center'>
        <h2>Order Payment</h2>
      </div>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => dispatch(handleSubmit(e, elements, stripe))}>
              <CardElement />
              {paymentErrorMessage && (
                <p className='text-center text-danger mt-3'>
                  {paymentErrorMessage}
                </p>
              )}
              <br /> <br />
              <div className='d-flex justify-content-between m-3'>
                <button
                  className='btn btn-secondary'
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
    </main>
  );
};

export default Payment;

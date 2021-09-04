import React from "react";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/cart.js";
import { setOrder, nextStep, backStep } from "../../redux/checkout.js";
import { setPaymentStatus, setPaymentErrorMessage } from "../../redux/payment.js";
import { commerce } from "../../lib/commerce";
import PayButton from './PayButton.jsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY, { locale: "en" });

const refreshCart = () => async (dispatch) => {
  const newCart = await commerce.cart.refresh();
  dispatch(setCart(newCart));
};

const handleCaptureCheckout = (checkoutTokenId, newOrder) => async (dispatch) => {
  try {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId,newOrder);
    dispatch(setOrder(incomingOrder));
    dispatch(refreshCart());
    dispatch(setPaymentStatus("fulfilled"));
    dispatch(setPaymentErrorMessage(null));
    dispatch(nextStep());
  } catch (e) {
    dispatch(setPaymentStatus("rejected"));
    dispatch(setPaymentErrorMessage(e.data.error.message));
  }
};

const Payment = () => {
  const dispatch = useDispatch();
  const paymentErrorMessage = useSelector((state) => state.paymentInfoReducer.paymentErrorMessage);
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);
  const shippingData = useSelector((state) => state.checkoutInfoReducer.shipping.shippingData);
  const handleSubmit = (event, elements, stripe) => async (dispatch) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    dispatch(setPaymentErrorMessage(null));
    dispatch(setPaymentStatus('processing'));
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
        dispatch(handleCaptureCheckout(checkoutToken.id, orderData));
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

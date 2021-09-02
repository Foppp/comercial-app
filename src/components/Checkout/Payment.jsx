import React, { useState } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/cart.js";
import {
  setOrder,
  nextStep,
  backStep,
  setCurrentStep,
} from "../../redux/checkout.js";

import { commerce } from "../../lib/commerce";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const refreshCart = () => async (dispatch) => {
  const newCart = await commerce.cart.refresh();
  dispatch(setCart(newCart));
};

const handleCaptureCheckout =
  (checkoutTokenId, newOrder) => async (dispatch) => {
    const incomingOrder = await commerce.checkout.capture(
      checkoutTokenId,
      newOrder
    );
    dispatch(setOrder(incomingOrder));
    dispatch(refreshCart());
  };

const Payment = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const dispatch = useDispatch();
  const checkoutToken = useSelector(
    (state) => state.checkoutInfoReducer.checkoutToken
  );
  const shippingData = useSelector(
    (state) => state.checkoutInfoReducer.shippingData
  );

  const handleSubmit = (event, elements, stripe) => async (dispatch) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setPaymentStatus("processing");

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
      setPaymentStatus("rejected");
      setErrorMessage(error.message);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "International",
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      setPaymentStatus("fulfilled");
      setErrorMessage(null);
      dispatch(handleCaptureCheckout(checkoutToken.id, orderData));
      dispatch(nextStep());
    }
  };

  return (
    <main>
      <div className="py-5 text-center">
        <h2>Order Payment</h2>
      </div>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => dispatch(handleSubmit(e, elements, stripe))}>
              <CardElement />
              {errorMessage && (
                <p className="text-center text-danger mt-3">{errorMessage}</p>
              )}
              <br /> <br />
              <div className="d-flex justify-content-between m-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => dispatch(backStep())}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={!stripe || paymentStatus === "processing"}
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </main>
  );
};

export default Payment;

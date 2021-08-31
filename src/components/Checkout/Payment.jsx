import React, { useState } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = ({
  checkoutToken,
  nextStep,
  backStep,
  shippingData,
  onCaptureCheckout,
}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = async (event, elements, stripe) => {
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
      onCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };

  return (
    <div className="card checkout-card shadow-sm">
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>Order Payment</h2>
          </div>
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ elements, stripe }) => (
                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                  <CardElement />
                  {errorMessage && (
                    <p className="text-center text-danger mt-3">
                      {errorMessage}
                    </p>
                  )}
                  <br /> <br />
                  <div className="d-flex justify-content-between m-3">
                    <button className="btn btn-secondary" onClick={backStep}>
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
      </div>
    </div>
  );
};

export default Payment;

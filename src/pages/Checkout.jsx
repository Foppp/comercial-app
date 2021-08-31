/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { commerce } from "../lib/commerce";
import Payment from "../components/Checkout/Payment";
import AdressForm from "../components/Checkout/AdressFormPayment";
import Review from "../components/Checkout/Review";
import Spinner from "../components/Spinner/Spinner";
import Confirmation from "../components/Checkout/Confirmation";

const Checkout = ({
  cart,
  onCaptureCheckout,
  order,
  error,
  totalItems,
  setErrorMessage,
  setOrder,
}) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    setErrorMessage("");
    setOrder(null);

    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          setCheckoutToken(token);
        } catch (e) {
          console.log(e);
        }
      };
      generateToken();
    }
  }, [activeStep, setErrorMessage, setOrder]);

  const submitShippingData = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () => {
    const steps = {
      0: () => (
        <AdressForm
          checkoutToken={checkoutToken}
          nextStep={nextStep}
          submitShippingData={submitShippingData}
        />
      ),
      1: () => (
        <Review
          checkoutToken={checkoutToken}
          shippingData={shippingData}
          nextStep={nextStep}
          backStep={backStep}
        />
      ),
      2: () => (
        <Payment
          checkoutToken={checkoutToken}
          nextStep={nextStep}
          backStep={backStep}
          shippingData={shippingData}
          onCaptureCheckout={onCaptureCheckout}
        />
      ),
    };
    return steps[activeStep]();
  };

  return (
    <div className="checkout-container">
      <div className="m-3 d-flex justify-content-center">
        {!checkoutToken ? (
          <Spinner />
        ) : (
          <>
            {activeStep === 3 ? (
              <Confirmation
                order={order}
                error={error}
                backStep={backStep}
                shippingData={shippingData}
              />
            ) : (
              <Form />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;

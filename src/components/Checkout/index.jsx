import React from "react";
import { useSelector } from "react-redux";
import AdressForm from "./AdressFormPayment";
import Review from "./Review";
import Payment from "./Payment";
import Order from './Order';
import Confirmation from "./Confirmation";


const steps = {
  1: AdressForm,
  2: Review,
  3: Payment,
  4: Order,
  5: Confirmation
};

const CheckoutForm = () => {
  const currentStep = useSelector((state) => state.checkoutInfoReducer.currentStep);
  const Form = steps[currentStep];

  return (
    <div className="card checkout-card shadow-sm">
      <div className="container">
        <Form />
      </div>
    </div>
  );
};

export default CheckoutForm;

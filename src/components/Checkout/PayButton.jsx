import React from "react";
import { useSelector } from "react-redux";

const PayButton = ({ stripe }) => {
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);
  const paymentCheckoutStatus = useSelector((state) => state.paymentInfoReducer.paymentCheckoutStatus);

  return paymentCheckoutStatus === 'pending' ? (
    <button className="btn btn-success" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span className="">Processing...</span>
    </button>
  ) : (
    <button
      type="submit"
      className="btn btn-success"
      disabled={!stripe || paymentCheckoutStatus === "pending"}
    >
      Pay {checkoutToken.live.subtotal.formatted_with_symbol}
    </button>
  );
};

export default PayButton;

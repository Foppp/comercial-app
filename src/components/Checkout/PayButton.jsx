import React from "react";
import { useSelector } from "react-redux";

const PayButton = ({ stripe }) => {
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);
  const paymentStatus = useSelector((state) => state.paymentInfoReducer.status);

  return paymentStatus === 'pending' ? (
    <button className="btn btn-info" type="button" disabled>
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
      className="btn btn-info"
      disabled={!stripe || paymentStatus === "pending"}
    >
      Pay {checkoutToken.live.subtotal.formatted_with_symbol}
    </button>
  );
};

export default PayButton;

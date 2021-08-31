import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Confirmation = ({ error, order, backStep, shippingData }) => {
  return (
    <div>
      {error ? (
        <div className="text-center m-3">
          <h1>Oops...! Payment was not seccessfull!</h1>
          <h3>{error}</h3>
          <Link
            to="/cart"
            className="full-width btn btn-secondary m-3"
            type="button"
          >
            back
          </Link>
        </div>
      ) : !order ? (
        <Spinner />
      ) : (
        <div className="text-center m-3">
          <h1>{`Thank you for your purchase, ${shippingData.firstName} ${shippingData.lastName}!`}</h1>
          <Link
            to="/products"
            className="full-width btn btn-secondary m-3"
            type="button"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Confirmation;

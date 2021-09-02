/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCheckoutToken,
  setCurrentStep,
  setOrder,
} from "../redux/checkout.js";
import { commerce } from "../lib/commerce.js";
import Spinner from "../components/Spinner/Spinner";
import CheckoutForm from "../components/Checkout/index.jsx";

const Checkout = ({ error, setErrorMessage }) => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const checkoutToken = useSelector(
    (state) => state.checkoutInfoReducer.checkoutToken
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setErrorMessage("");
    dispatch(setOrder(null));

    if (cart.id) {
      const generateToken = () => async (dispatch) => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          dispatch(setCheckoutToken(token));
        } catch (e) {
          console.log(e);
        }
      };
      dispatch(generateToken());
      dispatch(setCurrentStep(1));
    }
  }, [dispatch]);

  return (
    <div className="checkout-container">
      <div className="m-3 d-flex justify-content-center">
        {!checkoutToken ? <Spinner /> : <CheckoutForm />}
      </div>
    </div>
  );
};

export default Checkout;

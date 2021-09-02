/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrder, setCheckoutToken } from "../redux/checkout.js";
import { setCart } from "../redux/cart.js";
import { commerce } from "../lib/commerce.js";
import Payment from "../components/Checkout/Payment";
import AdressForm from "../components/Checkout/AdressFormPayment";
import Review from "../components/Checkout/Review";
import Spinner from "../components/Spinner/Spinner";
import Confirmation from "../components/Checkout/Confirmation";

const Checkout = ({ error, setErrorMessage }) => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  // const totalItems = cart.total_items;
  const order = useSelector((state) => state.checkoutInfoReducer.order);
  const checkoutToken = useSelector(
    (state) => state.checkoutInfoReducer.checkoutToken
  );

  const currentStep = useSelector(
    (state) => state.checkoutInfoReducer.currentStep
  );

  const dispatch = useDispatch();
  // const [checkoutToken, setCheckoutToken] = useState(null);
  // const [currentStep, setActiveStep] = useState(0);
  // const [shippingData, setShippingData] = useState({});

  // const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    // setErrorMessage("");
    // dispatch(setOrder(null));

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
    }
  }, [dispatch]);

  const Form = () => {
    const steps = {
      0: () => <AdressForm />,
      1: () => <Review />,
      2: () => <Payment />,
    };
    return steps[currentStep]();
  };

  return (
    <div className="checkout-container">
      <div className="m-3 d-flex justify-content-center">
        {!checkoutToken ? (
          <Spinner />
        ) : (
          <>{currentStep === 3 ? <Confirmation error={error} /> : <Form />}</>
        )}
      </div>
    </div>
  );
};

export default Checkout;

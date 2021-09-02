import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toast } from "bootstrap";
import { setProducts } from "./redux/products.js";
import { setCart } from "./redux/cart.js";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer/Footer";

import "./style.css";

import { commerce } from "./lib/commerce.js";
import ProductDetails from "./components/Products/ProductDetails";

const fetchProducts = () => async (dispatch) => {
  const { data } = await commerce.products.list();
  dispatch(setProducts(data));
};

const fetchCart = () => async (dispatch) => {
  const cart = await commerce.cart.retrieve();
  dispatch(setCart(cart));
};

const handleAddToCart = (productId, quantity) => async (dispatch) => {
  try {
    const item = await commerce.cart.add(productId, quantity);
    dispatch(setCart(item.cart));
    // showToast();
  } catch (e) {
    console.log(e);
  }
};

const App = () => {
  const [order, setOrder] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const toastRef = useRef(null);

  const dispatch = useDispatch();

  const showToast = () => {
    const toast = new Toast(toastRef.current);
    toast.show();
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products onAddToCart={handleAddToCart} toastRef={toastRef} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout
            error={errorMessage}
            // setOrder={setOrder}
            setErrorMessage={setErrorMessage}
          />
        </Route>
        <Route path="/products/:id">
          <ProductDetails onAddToCart={handleAddToCart} toastRef={toastRef} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

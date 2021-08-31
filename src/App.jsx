import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toast } from "bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer/Footer";

import "./style.css";

import { commerce } from "./lib/commerce";
import ProductDetails from "./components/Products/ProductDetails";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const toastRef = useRef(null);

  const showToast = () => {
    const toast = new Toast(toastRef.current);
    toast.show();
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      setCart(item.cart);
      showToast();
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    try {
      const response = await commerce.cart.update(lineItemId, { quantity });
      setCart(response.cart);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products
            products={products}
            onAddToCart={handleAddToCart}
            handleUpdateCartQty
            toastRef={toastRef}
          />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            onEmptyCart={handleEmptyCart}
          />
        </Route>
        <Route exact path="/checkout">
          <Checkout
            cart={cart}
            totalItems={cart.total_items}
            order={order}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
            setOrder={setOrder}
            setErrorMessage={setErrorMessage}
          />
        </Route>
        <Route path="/products/:id">
          <ProductDetails
            products={products}
            onAddToCart={handleAddToCart}
            toastRef={toastRef}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProducts, setProductsErrorMessage } from './redux/products.js';
import { setCart, setCartErrorMessage } from './redux/cart.js';
import { Navbar, Home, Products, Contact, Cart, Checkout, Footer } from './components/';
import { commerce } from './lib/commerce.js';
import showNotification from './components/ToastNotification/index.js';
import ProductDetails from './components/Products/ProductDetails';
import ToastMessage from './components/ToastNotification/ToastNotification.jsx';

import './style.css';

const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await commerce.products.list();
    dispatch(setProducts(data));
  } catch (e) {
    dispatch(setProductsErrorMessage(e.message));
  }
};

const fetchCart = () => async (dispatch) => {
  try {
    const cart = await commerce.cart.retrieve();
    dispatch(setCart(cart));
  } catch (e) {
    dispatch(setCartErrorMessage(e.message));
  }
};

const handleAddToCart = (productId, quantity) => async (dispatch) => {
  try {
    const item = await commerce.cart.add(productId, quantity);
    dispatch(setCart(item.cart));
    dispatch(showNotification('success', 'Item was added to cart!'));
  } catch (e) {
    dispatch(showNotification('danger', 'Item was NOT added to cart! Try again!'));
  }
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products'>
          <Products onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/products/:id'>
          <ProductDetails onAddToCart={handleAddToCart} />
        </Route>
      </Switch>
      <Footer />
      <ToastMessage />
    </Router>
  );
};

export default App;

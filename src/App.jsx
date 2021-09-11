import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/products/asyncThunk';
import { fetchCart } from './redux/cart/asyncThunk.js';
import { Navbar, Home, Products, Contact, Cart, Checkout, Footer } from './components/';
import ProductDetails from './components/Products/ProductDetails';
import ToastMessage from './components/ToastNotification/ToastNotification.jsx';
import './style.css';

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
          <Products />
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
          <ProductDetails />
        </Route>
      </Switch>
      <Footer />
      <ToastMessage />
    </Router>
  );
};

export default App;

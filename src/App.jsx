import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/productsReducer/asyncThunk';
import { fetchCart } from './redux/cartReducer/asyncThunk.js';
import { Home, Products, Contact, Cart, Checkout } from './pages';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductDetails from './pages/Products/components/ProductDetails'
import ToastMessage from './components/ToastNotification/ToastNotification.jsx';
import ModalWindow from "./components/Modal/Modal";

import './main.css';

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
      <ModalWindow />
    </Router>
  );
};

export default App;

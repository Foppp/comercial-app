import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts, fetchCategories } from './redux/productsReducer/asyncThunk';
import { fetchCart } from './redux/cartReducer/asyncThunk.js';
import { Home, Products, Contact, Cart, Checkout } from './pages';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProductDetails from './pages/Products/components/ProductDetails.jsx'
import ToastMessage from './components/ToastNotification/ToastNotification.jsx';
import ModalWindow from "./components/Modal/Modal.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
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
        <Route exact path='/products/:id'>
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

import React from "react";
import { Link } from "react-router-dom";

import CartItem from "../components/Cart/CartItem";
import Spinner from "../components/Spinner/Spinner";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <div className="container text-center mt-5">
      <h1>Your cart is empty!</h1>
      <h3>
        <Link to="/products" type="button" className="btn btn-secondary">
          Start shopping now
        </Link>
      </h3>
    </div>
  );

  if (!cart.line_items)
    return (
      <div className="cart-container d-flex justify-content-center">
        <Spinner />
      </div>
    );

  const renderCart = () => (
    <>
      <div className="container">
        {cart.line_items.map((lineItem) => (
          <CartItem
            key={lineItem.id}
            item={lineItem}
            onUpdateCartQty={onUpdateCartQty}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
        <div className="d-flex flex-row-reverse text-center row mt-3">
          <div className="col-md-2">
            <h5 className="">Total: {cart.subtotal.formatted_with_symbol}</h5>
          </div>
        </div>
        <div className="shopping-cart-footer mt-3">
          <div className="column float-start">
            <Link
              to="/products"
              className="btn btn-outline-secondary"
              href="/#"
            >
              Back to Shopping
            </Link>
          </div>
          <div className="column float-end">
            <button
              className="btn btn-danger mx-3"
              type="button"
              onClick={handleEmptyCart}
            >
              Clear Cart
            </button>
            <Link to="/checkout" className="btn btn-success">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="cart-container">
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </div>
  );
};

export default Cart;

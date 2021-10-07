import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row , Button } from 'react-bootstrap';
import { emptyCart } from '../../redux/cartReducer/asyncThunk';
import CartItem from './components/CartItem';
import Spinner from '../../components/Spinner/Spinner';

const Cart = () => {
  const cart = useSelector((state) => state.cartInfoReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderEmptyCart = () => (
    <div className='container text-center mt-5'>
      <h1>Your cart is empty!</h1>
      <h3>
        <Link to='/products' type='button' className='btn btn-secondary'>
          Start shopping now
        </Link>
      </h3>
    </div>
  );

  if (!cart.line_items)
    return (
      <div className='cart-container d-flex justify-content-center'>
        <Spinner />
      </div>
    );

  const renderCart = () => (
    <>
      <Container>
        <Col className='text-center'>
          <h1>Your cart</h1>
        </Col>
        {cart.line_items.map((lineItem) => (
          <CartItem key={lineItem.id} item={lineItem} />
        ))}
        <Row className='d-flex text-center mt-3'>
          <Col md={6}>
            <h5 className=''>Items in cart: {cart.line_items.length}</h5>
          </Col>
          <Col md={6}>
            <h5 className=''>Total: {cart.subtotal.formatted_with_symbol}</h5>
          </Col>
        </Row>
        <Row className='mt-3 text-center'>
          <Col md={8} sm={6} xs={12} className="mt-2">
            <Button
              as={Link}
              to='/products'
              variant='outline-secondary rounded-pill float-sm-start'
            >
              Back to Shopping
            </Button>
          </Col>
          <Col md={4} sm={6} xs={12} className="d-flex justify-content-around mt-2">
            <Button
              variant='warning rounded-pill'
              type='button'
              onClick={() => dispatch(emptyCart())}
            >
              Clear Cart
            </Button>
            <Button sm as={Link} to='/checkout' variant='info rounded-pill'>
              Checkout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );

  return (
    <div className='cart-container mt-3'>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </div>
  );
};

export default Cart;

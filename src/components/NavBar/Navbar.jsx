import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Navbar, Nav, Image, Button } from 'react-bootstrap';
import logo from '../../assets/images/synthmaster_logo_black2.png';
import logo2 from '../../assets/images/synthmaster_logo_black.png';
import { setModalOpen } from '../../redux/modalReducer/modal';

const Navigation = () => {
  const dispatch = useDispatch();
  const navBarRef = useRef(null);
  const location = useLocation();

  const navbarMenuItems = useSelector(
    (state) => state.navbarInfoReducer.menuItems
  );
  const activePath = useSelector((state) => state.navbarInfoReducer.activePath);
  const totalItems = useSelector(
    (state) => state.cartInfoReducer.cart.total_items
  );

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light shadow-sm sticky-top text-center'
    >
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          <Image
            src={logo}
            alt='shop-logo'
            width='30'
            height='30'
            className='d-inline-block align-text-top'
          />
          <Image
            src={logo2}
            alt='shop-name'
            height='35'
            className='d-inline-block align-text-top'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link eventKey={1} as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to='/products'>
              Products
            </Nav.Link>
            <Nav.Link eventKey={3} as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={4} as={Button}
              variant='outline'
              onClick={() => dispatch(setModalOpen('search'))}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </Nav.Link>
            <Nav.Link eventKey={5} as={Button}
              variant='outline'
              onClick={() => dispatch(setModalOpen('cart'))}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-cart-fill mb-1 me-1'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
              </svg>
              Cart
              <span className='badge bg-warning text-dark ms-1 rounded-pill'>
                {totalItems ?? 0}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

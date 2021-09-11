import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import logo from "../../assets/synthmaster_logo_black2.png";
import logo2 from "../../assets/synthmaster_logo_black.png";
import ModalWindow from "../Modal/Modal";
import { toggleNavbar, setActivePath } from '../../redux/navBar/navbar'
import { setModalOpen } from "../../redux/modal/modal";

const Navbar = () => {
  const dispatch = useDispatch();
  const navbarMenuItems = useSelector(state => state.navbarInfoReducer.menuItems);
  const isOpened = useSelector((state) => state.navbarInfoReducer.isOpened);
  const activePath = useSelector((state) => state.navbarInfoReducer.activePath);
  const totalItems = useSelector((state) => state.cartInfoReducer.cart.total_items);
  const location = useLocation();

  const navToggleClass = cn("collapse navbar-collapse", {
    show: isOpened,
    'text-center': isOpened,
  });

  useEffect(() => {
    dispatch(setActivePath(location.pathname));
  }, [dispatch, location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-2 px-lg-6">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="shop-logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          <img
            src={logo2}
            alt="shop-name"
            height="35"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => dispatch(toggleNavbar(!isOpened))}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={navToggleClass} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {navbarMenuItems.map(({ id, title, path }) => {
              const navMenuClass = cn("nav-link", {
                active: path === activePath,
              });
              return (
                <li key={id} className="nav-item">
                  <Link to={path} className={navMenuClass} aria-current="page">
                    <span>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="d-sm-flex justify-content-center">
          <button className="btn search" type="button" onClick={() => dispatch(setModalOpen('search'))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            </button>
            <div className="ms-5 mt-3"></div>
          <button type="button" className="btn cart btn-outline-dark rounded-pill" onClick={() => dispatch(setModalOpen('cart'))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart-fill mb-1 me-1"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            Cart
            <span className="badge bg-danger text-white ms-1 rounded-pill">
              {totalItems ?? 0}
            </span>
          </button>
          </div>
        </div>
      </div>
      <ModalWindow />
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import cn from "classnames";
import logo from "../../assets/synthmaster_logo_black2.png";
import logo2 from "../../assets/synthmaster_logo_black.png";

const navbarMenuItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Products", path: "/products" },
  { id: 3, title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const totalItems = useSelector(
    (state) => state.cartInfoReducer.cart.total_items
  );

  const navToggleClass = cn("collapse navbar-collapse", {
    show: showNav,
  });

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

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
          onClick={() => setShowNav(!showNav)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={navToggleClass} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {navbarMenuItems.map(({ id, title, path, active }) => {
              const navMenuClass = cn("nav-link", {
                active: path === activeMenu,
              });
              return (
                <li key={id} className="nav-item">
                  <Link to={path} className={navMenuClass} aria-current="page">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <div className="d-flex me-5 input-group-sm">
            <input
              className="form-control rounded me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-search mt-2"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div> */}
          <Link to="/cart" className="btn btn-outline-dark">
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
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

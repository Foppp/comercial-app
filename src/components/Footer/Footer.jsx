import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container-footer mt-auto py-3 bg-dark'">
      <ul className='nav justify-content-center pb-2 mb-2 border-top'>
        <li className='nav-item'>
          <Link to='/' className='nav-link px-2 text-muted'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/products' className='nav-link px-2 text-muted'>
            Products
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='nav-link px-2 text-muted'>
            Contact
          </Link>
        </li>
      </ul>
      <p className='text-center text-muted'>© 2021 SynthMaster, Inc</p>
    </footer>
  );
}

export default Footer;

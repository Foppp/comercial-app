import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className='col-md-6 d-flex flex-column align-items-center justify-content-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        fill='green'
        className='bi bi-check-lg'
        viewBox='0 0 16 16'
      >
        <path d='M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z' />
      </svg>
      <div className="mt-5 fs-4">
      Your message was sent!
      </div>
      <h3>
        <Link to='/products' type='button' className='btn btn-info mt-3'>
          Continue shopping
        </Link>
      </h3>
    </div>
  );
};

export default Confirmation;

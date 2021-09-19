import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadSpinner = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      className='spinner-border mt-5 text-center'
      style={{ width: '5rem', height: '5rem' }}
    >
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
};

export default LoadSpinner;

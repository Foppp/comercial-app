import React from 'react';
import { useSelector } from 'react-redux';

const SendButton = () => {
  const messageStatus = useSelector((state) => state.contactInfoReducer.status);
  return messageStatus === 'pending' ? (
    <>
      <button
        type='submit'
        className='btn btn-primary rounded-pill btn-info'
        disabled
      >
       <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span className="ms-1">Sending...</span>
      </button>
    </>
  ) : (
    <>
    <button
      type='submit'
      className='btn btn-primary rounded-pill btn-info'
    >
      Send Message
    </button>
  </>
  );
};

export default SendButton;

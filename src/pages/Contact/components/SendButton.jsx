import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';

const SendButton = () => {
  const messageStatus = useSelector((state) => state.contactInfoReducer.status);
  return messageStatus === 'pending' ? (
    <>
      <Button variant='primary rounded-pill btn-info' disabled>
        <Spinner
          as='span'
          animation='grow'
          size='sm'
          role='status'
          aria-hidden='true'
        />
        <span className='ms-1'>Sending...</span>
      </Button>
    </>
  ) : (
    <>
      <Button type='submit' variant='primary rounded-pill btn-info'>
        <span className='ms-1'>Send Message</span>
      </Button>
    </>
  );
};

export default SendButton;

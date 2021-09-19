import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Confirmation from './components/Confirmation';
import ContactInfo from './components/ContactInfo';
import MessageForm from './components/MessageForm';
import { setStatus } from '../../redux/contactReducer/contact';

import './contact.styles.css';

const Contact = () => {
  const dispatch = useDispatch();
  const messageStatus = useSelector((state) => state.contactInfoReducer.status);

  useEffect(() => {
    return () => {
      dispatch(setStatus(null));
    };
  }, [dispatch]);

  return (
    <Container className="contact-container">
      <Row className="mt-5">
        <ContactInfo />
        {messageStatus !== 'fulfilled' ? <MessageForm /> : <Confirmation />}
      </Row>
    </Container>
  );
};

export default Contact;

import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Confirmation from './components/Confirmation';
import ContactInfo from './components/ContactInfo';
import MessageForm from './components/MessageForm';
import { setStatus } from '../../redux/contactReducer/contact';

const Contact = () => {
  const dispatch = useDispatch();
  const messageStatus = useSelector((state) => state.contactInfoReducer.status);
  
  useEffect(() => {
    return () => {
      dispatch(setStatus(null))
    }
  }, [dispatch]);

  return (
    <div className='container-fluid contact-container mt-5'>
      <div className='row m-3'>
        <ContactInfo />
        { messageStatus !== 'fulfilled' ? <MessageForm /> : <Confirmation /> }
      </div>
    </div>
  );
};

export default Contact;

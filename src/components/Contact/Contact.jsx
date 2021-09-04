import React from 'react';
import emailjs from 'emailjs-com';
import { useDispatch, useSelector } from 'react-redux';
import { setSendErrorMessage, setMessageStatus } from '../../redux/contact';
import showNotification from '../ToastNotification/index.js';

const sendEmail = (e) => (dispatch) => {
  e.preventDefault();
  dispatch(setMessageStatus('processing'));
  emailjs
    .sendForm('service_slxhkgl', 'template_xxundmk', e.target, 'user_YMWIwXTCBxoyKXwb2L7tm')
    .then((result) => {
        dispatch(setMessageStatus('fulfilled'));
        dispatch(setSendErrorMessage(null));
        dispatch(showNotification('success', 'Message was sent!'));
      },
      (error) => {
        dispatch(setMessageStatus('rejected'));
        dispatch(setSendErrorMessage(error.text));
        dispatch(showNotification('danger', 'Message was not sent! Try again!'));
      }
    );
  e.target.reset();
};

const Contact = () => {
  const dispatch = useDispatch();
  const messageStatus = useSelector((state) => state.contactInfoReducer.messageStatus);

  return (
    <div className='container-fluid contact-container mt-5'>
      <div className='row m-3'>
        <div className='col-md-5 mr-auto'>
          <h2>Contact Us</h2>
          <p className='mb-5'>
            SynthMaster. is a family-run musical instrument retailer. With over
            50 years of experience serving the music community in the UK and now
            overseas, we have become renowned for our high-quality service and
            stellar reputation in the industry. From our Guildford store and
            online musical instrument shop, we offer musicians a huge selection
            of keyboards, synthesizers, music accessories and more!
          </p>
          <ul className='list-unstyled pl-md-5 mb-5'>
            <li className='d-flex text-black mb-2'>
              <span className='mr-3'>
                <span className='icon-map'></span>
              </span>{' '}
              34 Street Name, City Name Here, <br /> United States
            </li>
            <li className='d-flex text-black mb-2'>
              <span className='mr-3'>
                <span className='icon-phone'></span>
              </span>{' '}
              +1 (222) 345 6789
            </li>
            <li className='d-flex text-black'>
              <span className='mr-3'>
                <span className='icon-envelope-o'></span>
              </span>{' '}
              info@mywebsite.com{' '}
            </li>
          </ul>
        </div>
        <div className='col-md-6'>
          <form onSubmit={(e) => dispatch(sendEmail(e))}>
            <div className='row'>
              <div className='col-md-12 form-group'>
                <label htmlFor='name' className='col-form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='user_name'
                  id='name'
                  disabled={messageStatus === 'processing'}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 form-group'>
                <label htmlFor='email' className='col-form-label'>
                  Email
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='user_email'
                  id='email'
                  required
                  disabled={messageStatus === 'processing'}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 form-group'>
                <label htmlFor='message' className='col-form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  name='message'
                  id='message'
                  cols='30'
                  rows='7'
                  disabled={messageStatus === 'processing'}
                ></textarea>
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-md-12'>
                <input
                  type='submit'
                  value='Send Message'
                  className='btn btn-primary rounded-3'
                  disabled={messageStatus === 'processing'}
                />
                <span className='submitting'></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

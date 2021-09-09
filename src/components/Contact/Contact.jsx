import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendContactEmail } from '../../redux/contact/asyncThync';

const Contact = () => {
  const dispatch = useDispatch();
  const messageStatus = useSelector((state) => state.contactInfoReducer.status);

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required('Name field is required'),
      user_email: Yup.string()
        .email('Invalid email address')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
    }),
    onSubmit: (values) => {
      dispatch(sendContactEmail({ values, formik }));
    },
  });

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
          <form className='needs-validation' onSubmit={formik.handleSubmit}>
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
                  value={formik.values.user_name}
                  onChange={formik.handleChange}
                  disabled={messageStatus === 'pending'}
                />
                {formik.errors.user_name && formik.touched.user_name ? (
                  <div className='text-danger'>{formik.errors.user_name}</div>
                ) : null}
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
                  value={formik.values.user_email}
                  onChange={formik.handleChange}
                  disabled={messageStatus === 'pending'}
                />
                {formik.errors.user_email && formik.touched.user_email ? (
                  <div className='text-danger'>{formik.errors.user_email}</div>
                ) : null}
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
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  disabled={messageStatus === 'pending'}
                ></textarea>
                {formik.errors.message && formik.touched.message ? (
                  <div className='text-danger'>{formik.errors.message}</div>
                ) : null}
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col-md-12'>
                <input
                  type='submit'
                  value='Send Message'
                  className='btn btn-primary rounded-pill btn-info'
                  disabled={messageStatus === 'pending'}
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

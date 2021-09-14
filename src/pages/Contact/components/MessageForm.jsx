import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import SendButton from './SendButton';
import * as Yup from 'yup';
import { sendContactEmail } from '../../../redux/contactReducer/asyncThync';

const MessageForm = () => {
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
            <SendButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;

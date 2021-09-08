import { createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from 'emailjs-com';

const service = 'service_slxhkgl';
const template = 'template_xxundmk';
const user = 'user_YMWIwXTCBxoyKXwb2L7tm';

const sendEmail = (values, formik) => emailjs
  .send(service, template, values, user)
  .then(
    () => {
      console.log('sent!');
      formik.resetForm();
    },
    (error) => {
      throw error;
    }
  );

export const sendContactEmail = createAsyncThunk(
  'contact/sendContactEmail', async (data, { rejectWithValue }) => {
    try {
      const { values, formik } = data;
      return await sendEmail(values, formik);
    } catch (error) {
      return rejectWithValue(error.text)
    }
  }
);

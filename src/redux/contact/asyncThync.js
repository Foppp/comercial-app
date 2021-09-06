import { createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from 'emailjs-com';

const service = 'service_slxhkgl';
const template = 'template_xxundmk';
const user = 'user_YMWIwXTCBxoyKXwb2L7tm';

const sendEmail = (e) => emailjs
  .sendForm(service, template, e.target, user)
  .then(
    (res) => {
      console.log(res);
      e.target.reset();
    },
    (error) => {
      throw error;
    }
  );

export const sendContactEmail = createAsyncThunk(
  'contact/sendContactEmail', async (e, { rejectWithValue }) => {
    e.preventDefault();
    try {
      return await sendEmail(e);
    } catch (error) {
      return rejectWithValue(error.text)
    }
  }
);

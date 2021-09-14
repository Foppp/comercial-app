import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendEmail } from "../../services";

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

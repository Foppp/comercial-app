import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Form, Row, Col, InputGroup, Button, Container } from "react-bootstrap";
import * as Yup from 'yup';
import {
  nextStep,
  setShippingData,
  setShippingCountry,
  setShippingSubdivision,
  setShippingOption,
} from "../../../redux/checkoutReducer/checkout.js";
import {
  fetchShippingCountries, fetchSubdivisions, fetchShippingOptions,
} from "../../../redux/checkoutReducer/asyncThunk.js";

const AdressForm = () => {
  const dispatch = useDispatch();
  const checkoutToken = useSelector((state) => state.checkoutInfoReducer.checkoutToken);
  const shippingData = useSelector((state) => state.checkoutInfoReducer.shipping.shippingData);
  const shippingCountries = useSelector((state) => state.checkoutInfoReducer.shipping.shippingCountries);
  const shippingCountry = useSelector((state) => state.checkoutInfoReducer.shipping.shippingCountry);
  const shippingSubdivisions = useSelector((state) => state.checkoutInfoReducer.shipping.shippingSubdivisions);
  const shippingSubdivision = useSelector((state) => state.checkoutInfoReducer.shipping.shippingSubdivision);
  const shippingOptions = useSelector((state) => state.checkoutInfoReducer.shipping.shippingOptions);
  const shippingOption = useSelector((state) => state.checkoutInfoReducer.shipping.shippingOption);
  
  const schema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your name'),
    lastName: Yup.string().required('Please enter your last name'),
    email: Yup.string().email('email is not valid').required('Please enter your email'),
    address1: Yup.string().required('Please enter your address'),
    city: Yup.string().required('Please enter your city'),
    zip: Yup.number().required('Please enter your zip'),
    shippingCountry: Yup.string().required('Please select your country'),
    shippingSubdivision: Yup.string().required('Please select your state'),
    shippingOption: Yup.string().required('Please select shipping option'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: shippingData.firstName,
      lastName: shippingData.lastName,
      email: shippingData.email,
      address1: shippingData.address1,
      city: shippingData.city,
      zip: shippingData.zip,
      shippingCountry,
      shippingSubdivision,
      shippingOption,
    },
    validationSchema: schema,
    onSubmit: (data) => {
      submitShippingData(data);
      dispatch(setShippingCountry(data.shippingCountry));
      dispatch(setShippingSubdivision(data.shippingSubdivision));
      dispatch(setShippingOption(data.shippingOption));
    },
  });

  const submitShippingData = (data) => {
    dispatch(setShippingData(data));
    dispatch(nextStep());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchShippingCountries(checkoutToken.id));
  }, [dispatch]);

  useEffect(() => {
    if (formik.values.shippingCountry) dispatch(fetchSubdivisions(formik.values.shippingCountry));
  }, [formik.values.shippingCountry]);

  useEffect(() => {
    if (formik.values.shippingSubdivision)
      dispatch(fetchShippingOptions({
        checkoutTokenId: checkoutToken.id,
        country: formik.values.shippingCountry,
        stateProvince: formik.values.shippingSubdivision,
      }));
  }, [formik.values.shippingSubdivision]);

  
  return (
    <Container>
      <Col className='py-2 text-center'>
        <h2>Shipping Address</h2>
      </Col>
      <Col>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Row className='g-3'>
            <Form.Group as={Col} sm='6' controlId='firstName'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                defaultValue={formik.values.firstName}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.firstName}
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm='6' controlId='lastName'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type='text'
                name='lastName'
                defaultValue={formik.values.lastName}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.lastName}
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm='12' controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                name='email'
                defaultValue={formik.values.email}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm='5' controlId='address1'>
              <Form.Label>Adress</Form.Label>
              <Form.Control
                type='text'
                name='address1'
                defaultValue={formik.values.address1}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.address1}
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.address1}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm='5' controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                name='city'
                defaultValue={formik.values.city}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.city}
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='2' controlId='zip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type='text'
                name='zip'
                defaultValue={formik.values.zip}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.zip}
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='shippingCountry'>
              <Form.Label>Country</Form.Label>
              <Form.Select
                name='shippingCountry'
                defaultValue={formik.values.shippingCountry}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.shippingCountry}
              >
                <option value='' disabled>
                  Select...
                </option>
                {Object.entries(shippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                {formik.errors.shippingCountry}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='shippingSubdivision'>
              <Form.Label>State</Form.Label>
              <Form.Select
                name='shippingSubdivision'
                defaultValue={formik.values.shippingSubdivision}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.shippingSubdivision}
              >
                <option value='' disabled>
                  Select...
                </option>
                {Object.entries(shippingSubdivisions)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                {formik.errors.shippingSubdivision}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='shippingOption'>
              <Form.Label>Shipping Option</Form.Label>
              <Form.Select
                name='shippingOption'
                defaultValue={formik.values.shippingOption}
                onChange={formik.handleChange}
                isInvalid={!!formik.errors.shippingOption}
              >
                <option value='' disabled>
                  Select...
                </option>
                {shippingOptions
                  .map((sO) => ({
                    id: sO.id,
                    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
                  }))
                  .map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                {formik.errors.shippingOption}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Col className='d-flex justify-content-between p-2'>
              <Button
                as={Link}
                to='/cart'
                variant='outline-secondary rounded-pill m-sm-2 mt-2'
              >
                Back to cart
              </Button>
              <Button variant='info rounded-pill m-sm-2 mt-2' type='submit'>
                Continue
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Container>
  );
};

export default AdressForm;

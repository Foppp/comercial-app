import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setMinPrice, setMaxPrice, setCategory, removeCategory,
} from '../../../redux/filterReducer/filter';
import { Container, Row, Col, Accordion, Form, FloatingLabel } from 'react-bootstrap';

const categories = ['Analog', 'Digital', 'Modular', 'Desktop'];
const manufactures = ['Analog', 'Digital', 'Modular', 'Desktop'];
const keys = ['25', '49', '61', '88'];

const handleCategoryFilter = (e) => (dispatch) => {
  const id = e.target.id;
  const setFilter = e.target.checked
    ? dispatch(setCategory(id))
    : dispatch(removeCategory(id));
  return setFilter;
};

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <Row>
      <Accordion defaultActiveKey='0' flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Price Range</Accordion.Header>
          <Accordion.Body>
            <FloatingLabel
              controlId='floatingInput'
              label='Min'
              className='mb-3'
            >
              <Form.Control
                type='number'
                placeholder='name@example.com'
                onChange={(e) => dispatch(setMinPrice(Number(e.target.value)))}
              />
            </FloatingLabel>
            <FloatingLabel controlId='floatingPassword' label='Max'>
              <Form.Control
                type='number'
                placeholder='Password'
                onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
              />
            </FloatingLabel>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Manufacturers</Accordion.Header>
          <Accordion.Body>
            {manufactures.map((value) => (
              <Form.Check
                key={value}
                id={value}
                type='checkbox'
                label={value}
                onChange={(e) => dispatch(handleCategoryFilter(e))}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>
            {categories.map((category) => (
              <Form.Check
                key={category}
                id={category}
                type='checkbox'
                label={category}
                onChange={(e) => dispatch(handleCategoryFilter(e))}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Keys</Accordion.Header>
          <Accordion.Body>
            {keys.map((key) => (
              <Form.Check
                key={key}
                id={key}
                type='checkbox'
                label={key}
                onChange={(e) => dispatch(handleCategoryFilter(e))}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Row>
  );
};

export default Filters;

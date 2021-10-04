import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';
import {
  setSortOption,
  setPerPage,
  setMinPrice,
  setMaxPrice,
  setCategory,
} from '../../../redux/productsReducer/products';

const Sort = () => {
  const dispatch = useDispatch();

  return (
    <Row className='mt-2 d-flex justify-content-between' md={4} sm={2} xs={1}>
      <Col>
        <InputGroup className='price mb-2'>
          <FormControl
            aria-label='First name'
            className='shadow-sm price'
            placeholder='0$'
            onChange={(e) => dispatch(setMinPrice(Number(e.target.value)))}
          />
          <FormControl
            aria-label='Last name'
            className='shadow-sm'
            placeholder='1000$'
            onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
          />
        </InputGroup>
      </Col>
      <Col>
        <Form.Select
          defaultValue=''
          className='shadow-sm mb-2'
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value=''>All Categories</option>
          <option value='Analog'>Analog</option>
          <option value='Digital'>Digital</option>
          <option value='Desktop'>Desktop</option>
          <option value='Modular'>Modular</option>
        </Form.Select>
      </Col>
      <Col className='mb-2'>
        <Form.Select
          defaultValue='noSort'
          className='shadow-sm'
          onChange={(e) => dispatch(setSortOption(e.target.value))}
        >
          <option disabled value='noSort'>
            Sort Products:
          </option>
          <option value='LH'>Price: Low - Hi</option>
          <option value='HL'>Price: Hi - Low</option>
          <option value='AZ'>Name: A - Z</option>
          <option value='ZA'>Name: Z - A</option>
          <option value='NO'>Date: Newest - Oldest</option>
          <option value='ON'>Date: Oldest - Newest</option>
        </Form.Select>
      </Col>

      <Col>
        <Form.Select
          defaultValue='noPer'
          className='shadow-sm'
          onChange={(e) => dispatch(setPerPage(e.target.value))}
        >
          <option disabled value='noPer'>
            Per page:
          </option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default Sort;

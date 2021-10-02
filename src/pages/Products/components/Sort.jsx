import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form , InputGroup, FormControl } from 'react-bootstrap';
import { setSortOption, setPerPage } from '../../../redux/productsReducer/products';

const Sort = () => {
  const dispatch = useDispatch();
  return (
    <Row className='mt-2 d-flex justify-content-between' md={3} sm={1} xs={1}>
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
      <InputGroup className='price mb-2'>
          <FormControl aria-label='First name' className="shadow-sm" placeholder="0$" />
          <FormControl aria-label='Last name' className="shadow-sm" placeholder="1000$"/>
        </InputGroup>
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

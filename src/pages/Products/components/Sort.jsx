import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import { setSortOption } from '../../../redux/sortReducer/sort';
import { setPerPage } from '../../../redux/paginationReducer/pagination';

const Sort = () => {
  const dispatch = useDispatch();
  return (
    <Row className='mt-2 d-flex justify-content-between' sm={2} xs={1}>
      <Col className='mb-2'>
        <Form.Select
          defaultValue='noSort'
          className='shadow-sm'
          onChange={(e) => dispatch(setSortOption(e.target.value))}
        >
          <option disabled value='noSort'>
            Sort Products:
          </option>
          <option value='LH'>Price: Low -> Hi</option>
          <option value='HL'>Price: Hi -> Low</option>
          <option value='AZ'>Name: A -> Z</option>
          <option value='ZA'>Name: Z -> A</option>
          <option value='NO'>Date: Newest -> Oldest</option>
          <option value='ON'>Date: Oldest -> Newest</option>
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

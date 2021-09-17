import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortOption } from '../../../redux/sortReducer/sort';
import { setPerPage } from '../../../redux/paginationReducer/pagination';
import { Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap';

const Sort = () => {
  const dispatch = useDispatch();
  return (
    // <section className='py-2'>
    //   <div className='container px-3 px-lg-3 mt-2'>

    <Row className='mt-3 d-flex justify-content-between' sm={2} xs={1}>
      <Col className="mb-2">
          <Form.Select defaultValue="noSort" onChange={(e) => dispatch(setSortOption(e.target.value))}>
          <option disabled value="noSort">Sort Products:</option>
            <option value='LH'>Price: Low -> Hi</option>
            <option value='HL'>Price: Hi -> Low</option>
            <option value='AZ'>Name: A -> Z</option>
            <option value='ZA'>Name: Z -> A</option>
            <option value='NO'>Date: Newest -> Oldest</option>
            <option value='ON'>Date: Oldest -> Newest</option>
  </Form.Select>
      </Col>
      <Col>
        <Form.Select defaultValue="noPer" onChange={(e) => dispatch(setPerPage(e.target.value))}>
        <option disabled value="noPer">Per page:</option>
  <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
  </Form.Select>
          {/* <select
            className='form-select form-select-sm shadow-sm'
            aria-label='Default select example'
            defaultValue="noSort"
            onChange={(e) => dispatch(setSortOption(e.target.value))}
          >
            <option disabled value="noSort">Sort Products</option>
            <option value='LH'>Price: Low -> Hi</option>
            <option value='HL'>Price: Hi -> Low</option>
            <option value='AZ'>Name: A -> Z</option>
            <option value='ZA'>Name: Z -> A</option>
            <option value='NO'>Date: Newest -> Oldest</option>
            <option value='ON'>Date: Oldest -> Newest</option>
          </select>
          <div className="mx-2"></div>
          <select
            className='form-select form-select-sm shadow-sm'
            aria-label='Default select example'
            defaultValue="perPage"
            onChange={(e) => dispatch(setPerPage(e.target.value))}
          >
            <option disabled value="perPage">Per Page</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select> */}
          </Col>
        </Row>
    //   </div>
    // </section>
  );
};

export default Sort;

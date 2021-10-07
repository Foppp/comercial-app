import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Button, InputGroup, FormControl, CloseButton, Row, Col, Image,
} from 'react-bootstrap';
import { setSearchQuery } from '../../redux/searchReducer/search';
import { setModalClose } from '../../redux/modalReducer/modal';
import { Link, useLocation } from 'react-router-dom';

const searchProducts = (text, data) =>
  data.filter(
    ({ name }) =>
      text.length > 2 && name.toLowerCase().includes(text.toLowerCase())
  );

const SearchModal = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchInfoReducer.searchQuery);
  const products = useSelector((state) => state.productsInfoReducer.products);
  const searchResult = searchProducts(searchQuery, products);
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container className='search-modal-content'>
      <CloseButton
        className='float-end mb-2'
        onClick={() => dispatch(setModalClose())}
      />
      <InputGroup className='mt-2'>
        <FormControl
          ref={inputRef}
          placeholder='Search for product...'
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </InputGroup>
      <Container className='card-body text-center'>
        {searchQuery && searchResult.length === 0 ? (
          <p>No results...</p>
        ) : (
          searchResult.map((product) => (
            <Row
              key={product.id}
              className='row search-item text-center m-1 border rounded p-2'
            >
              <Col sm={2}>
                <Image
                  src={product.media.source}
                  alt='Product'
                  width='30'
                  height='30'
                />
              </Col>
              <Col sm={10}> 
                <span className='product-title mt-2'>
                  <Link
                    to={`${from.pathname}products/${product.permalink}`}
                    className='text-decoration-none text-black'
                    onClick={() => dispatch(setModalClose())}
                  >
                    {product.name}
                  </Link>
                </span>
              </Col>
            </Row>
          ))
        )}
      </Container>
    </Container>
  );
};

export default SearchModal;

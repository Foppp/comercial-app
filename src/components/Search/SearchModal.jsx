import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/searchReducer/search';
import { setModalClose } from '../../redux/modalReducer/modal';
import { Link, useLocation } from 'react-router-dom';

const searchProducts = (text, data) => data
  .filter(({ name }) => text.length > 2 && name.toLowerCase().includes(text.toLowerCase()));

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
    <div className='search-modal-content'>
      <div className='input-group'>
        <input
          ref={inputRef}
          className='form-control border-end-0 border rounded-pill'
          type='search'
          placeholder='Search for product...'
          id='example-search-input'
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
      <div className='card-body text-center'>
        {searchResult.length === 0 ? (
          <p>No results...</p>
        ) : (
          searchResult.map((product) => (
            <div
              key={product.id}
              className='row search-item text-center m-1 border rounded p-2'
            >
              <div className='col-2'>
                <img
                  src={product.media.source}
                  alt='Product'
                  width='30'
                  height='30'
                />
              </div>
              <div className='col-10'>
                <span className='product-title mt-2'>
                  <Link
                    to={`${from.pathname}products/${product.permalink}`}
                    className='text-decoration-none text-black'
                    onClick={() => dispatch(setModalClose())}
                  >
                    {product.name}
                  </Link>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      <button
        className='btn btn-outline-secondary rounded-pill'
        onClick={() => dispatch(setModalClose())}
      >
        Back
      </button>
    </div>
  );
};

export default SearchModal;

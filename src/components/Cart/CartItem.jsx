import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCartQty, removeFromCart } from '../../redux/cart/asyncThunk';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className='row text-center m-1 border rounded p-2'>
      <div className='col-md-2'>
        <img src={item.media.source} alt='Product' width='40' height='40' />
      </div>
      <div className='col-md-4'>
        <h5 className='product-title mt-2'>
          <Link
            to={`products/${item.permalink}`}
            className='text-decoration-none text-black'
          >
            {item.name}
          </Link>
        </h5>
      </div>
      <div className='col-md-3'>
        <div className='d-flex justify-content-around'>
          <button
            type='button'
            className='btn btn-light btn-sm'
            onClick={() =>
              dispatch(
                updateCartQty({
                  lineItemId: item.id,
                  quantity: item.quantity + 1,
                })
              )
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-plus-circle'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
            </svg>
          </button>
          <span className='mt-2'>{item.quantity}</span>
          <button
            type='button'
            className='btn btn-light btn-sm'
            onClick={() =>
              dispatch(
                updateCartQty({
                  lineItemId: item.id,
                  quantity: item.quantity - 1,
                })
              )
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-dash-circle'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z' />
            </svg>
          </button>
          <button
            type='button'
            className='btn'
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='currentColor'
              className='bi bi-trash'
              viewBox='0 0 16 16'
            >
              <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
              <path
                fillRule='evenodd'
                d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='col-md-3 mt-2'>
        {item.line_total.formatted_with_symbol}
      </div>
    </div>
  );
};

export default CartItem;

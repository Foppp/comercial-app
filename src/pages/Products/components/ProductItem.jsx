import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/cartReducer/asyncThunk';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className='col mb-5'>
      <div className='card product-card h-100 d-flex flex-column justify-content-between'>
        <div className='card-header'>
          <img
            className='card-img-top'
            src={product.media.source}
            alt={`${product.name}`}
          />
        </div>
        <div className='card-body p-1 text-black d-flex flex-column justify-content-between'>
          <Link
            to={`products/${product.permalink}`}
            className='product-info text-decoration-none'
          >
            <div>
              <p className='card-title mt-2 text-dark'>{product.name}</p>
            </div>
          </Link>

          <div>
            <h5 className='card-text mt-auto'>
              {product.price.formatted_with_symbol}
            </h5>
          </div>
        </div>
        <div className='card-footer border-top-0 bg-transparent text-center'>
          <button
            className='btn btn-outline-dark rounded-pill mt-auto'
            onClick={() =>
              dispatch(addToCart({ productId: product.id, qty: 1 }))
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

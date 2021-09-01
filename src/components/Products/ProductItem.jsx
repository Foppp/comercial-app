import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const ProductItem = ({ product, onAddToCart }) => {
  const dispatch = useDispatch();

  return (
    <div className="col mb-5">
      <div className="card product-card h-100">
        <Link
          to={`products/${product.permalink}`}
          className="product-info text-decoration-none"
        >
          <img
            className="card-img-top"
            src={product.media.source}
            alt={`${product.name}`}
          />
          <div className="card-body p-1 text-black">
            <div className="text-center mt-3">
              <p className="card-title">{product.name}</p>
              <h5 className="card-text mt-auto">
                {product.price.formatted_with_symbol}
              </h5>
            </div>
          </div>
        </Link>
        <div className="card-footer pt-0 border-top-0 bg-transparent text-center">
          <button
            className="btn btn-outline-dark mt-auto"
            onClick={dispatch(onAddToCart(product.id, 1))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

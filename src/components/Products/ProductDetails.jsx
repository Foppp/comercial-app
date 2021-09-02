import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ToastMessage from "../Toast/ToastMessage";

const ProductDetails = ({ onAddToCart, toastRef }) => {
  const { id } = useParams();
  const products = useSelector((state) => state.productsInfoReducer.products);
  const [product] = products.filter((item) => item.permalink === id);
  const dispatch = useDispatch();

  if (products.length === 0)
    return (
      <div className="product-container d-flex justify-content-center">
        <Spinner />
      </div>
    );

  return product ? (
    <section>
      <div className="container product-container px-4 px-lg-5">
        <div className="col mt-5 gx-4 gx-lg-5 p-3 align-items-center border rounded">
          <div className="row">
            <div className="col-md-6 zoom-without-container">
              <img
                className="card-img-top mb-5 mb-md-3 p-5"
                src={product.media.source}
                alt={`${product.name}`}
              />
            </div>
            <div className=" col-md-6 d-flex flex-column justify-content-around bd-highlight mb-3">
              <div className="p-2 text-center">
                <div className="small mb-1">{product.sku}</div>
                <h1 className="display-5 fw-bolder">{product.name}</h1>
              </div>
              <div className="p-2 text-center">
                <div className="fs-5">
                  <span className="fs-3">
                    {product.price.formatted_with_symbol}
                  </span>
                </div>
              </div>
              <div className="p-2 d-flex justify-content-around text-center">
                <Link
                  to="/products"
                  className="btn btn-outline-dark"
                  type="button"
                >
                  Back
                </Link>
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => dispatch(onAddToCart(product.id, 1))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="row-md-4 mt-5">
            {
              <small
                className="lead"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            }
          </div>
        </div>
      </div>
      <ToastMessage toastRef={toastRef} message="Item was added to cart!" />
    </section>
  ) : (
    <section>
      <div className="container product-container px-4">
        <div className="row mt-5 p-3 text-center border rounded">
          <h1>There is no such product</h1>
          <Link to="/products" className="btn btn-secondary m-3" type="button">
            Back to Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

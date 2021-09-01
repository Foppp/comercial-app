import React from "react";

import Filters from "../components/Filters/Filters";
import ProductsList from "../components/Products/ProductsList";

const Products = ({ toastRef, onAddToCart }) => {
  return (
    <div className="row products-container">
      <Filters />
      <ProductsList onAddToCart={onAddToCart} toastRef={toastRef} />
    </div>
  );
};

export default Products;

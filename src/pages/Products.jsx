import React from "react";

import Filters from "../components/Filters/Filters";
import ProductsList from "../components/Products/ProductsList";

const Products = ({ products, onAddToCart, toastRef }) => {
  return (
    <div className="row products-container">
      <Filters />
      <ProductsList
        products={products}
        onAddToCart={onAddToCart}
        toastRef={toastRef}
      />
    </div>
  );
};

export default Products;

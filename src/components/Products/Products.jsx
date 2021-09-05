import React from 'react';
import Filters from '../Filters/Filters';
import ProductsList from './ProductsList';

const Products = () => {
  return (
    <div className='row products-container'>
      <Filters />
      <ProductsList />
    </div>
  );
};

export default Products;

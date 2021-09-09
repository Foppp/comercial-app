import React from 'react';
import Filters from '../Filters/Filters';
import ProductsList from './ProductsList';
import Sort from '../Sort/Sort';

const Products = () => {
  return (
    <div className='row products-container'>
      <Filters />
      <div className='col-sm-6 col-md-8 col-lg-9 py-3'>
      <Sort />
        <ProductsList />
        </div>
    </div>
  );
};

export default Products;

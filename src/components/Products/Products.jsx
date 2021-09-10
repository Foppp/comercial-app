import React from 'react';
import Filters from '../Filters/Filters';
import ProductsList from './ProductsList';
import Sort from '../Sort/Sort';
import Pagination from '../Pagination/Pagination';

const Products = () => {
  return (
    <div className='row products-container'>
      <Filters />
      <div className='col-sm-6 col-md-8 col-lg-9 py-3 text-center'>
        <Sort />
        <ProductsList />
        <Pagination />
      </div>
    </div>
  );
};

export default Products;

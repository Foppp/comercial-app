import React from 'react';
import Filters from './components/Filters';
import ProductsList from './components/ProductsList';
import Sort from './components/Sort';
import Pagination from './components/Pagination';

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

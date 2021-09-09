import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import ProductsList from './ProductsList';

const Products = () => {
  return (
    <div className='row products-container'>
      <SideMenu />
      <ProductsList />
    </div>
  );
};

export default Products;

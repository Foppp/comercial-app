import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import filterProductList from '../../utils/filters';

const Products = () => {
  const products = useSelector((state) => state.productsInfoReducer.products);
  const filters = useSelector(
    (state) => state.filterProductsInfoReducer.filterBy
  );
  const updatedProductList = filterProductList(products, filters);

  return (
    <div className='col-sm-6 col-md-8 col-lg-9'>
      <section className='py-2'>
        <div className='container px-2 px-lg-3 mt-2'>
          <div className='sort-items d-flex justify-content-around'>
            <select
              className='form-select form-select-sm'
              aria-label='Default select example'
            >
              <option value='0'>Price</option>
              <option value='1'>Low -> Hi</option>
              <option value='2'>Hi -> Low</option>
            </select>
            <select
              className='form-select form-select-sm'
              aria-label='Default select example'
            >
              <option value='0'>Name</option>
              <option value='1'>A -> Z</option>
              <option value='2'>Z - A</option>
            </select>
            <select
              className='form-select form-select-sm'
              aria-label='Default select example'
            >
              <option value='0'>Newest</option>
              <option value='1'>Newest -> Oldest</option>
              <option value='2'>Oldest -> Newest</option>
            </select>
          </div>
          <div className='row gx-4 gx-lg-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center mt-3'>
            {updatedProductList.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

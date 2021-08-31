import React from 'react'
import { Categories, Products } from '../../components';

const Home = ({ products, onAddToCart }) => {
  return (
    <div>
      <Categories />
      {/* <Products products={products} onAddToCart={onAddToCart} handleUpdateCartQty /> */}
    </div>
  )
}

export default Home

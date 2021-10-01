import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import {
  setCurrentPage,
  setNextPage,
  setPrevPage,
} from '../../../redux/productsReducer/products';

const PagePagination = () => {
  const dispatch = useDispatch();
  const updatedProducts = useSelector((state) => state.productsInfoReducer.filteredProducts);
  const totalProducts = updatedProducts.length;
  const perPage = useSelector((state) => state.productsInfoReducer.pagination.perPage);
  const currentPage = useSelector((state) => state.productsInfoReducer.pagination.currentPage);
  const totalPages = useSelector((state) => state.productsInfoReducer.pagination.totalPages);
  const pageNavigation = Array.from({ length: totalPages }, (_, x) => x + 1);

  const handleNextPage = () => {
    if (currentPage === totalPages) return;
    dispatch(setNextPage());
  };
  const handlePrevPage = () => {
    if (currentPage === 1) return;
    dispatch(setPrevPage());
  };

  return (
    <Pagination className='justify-content-center'>
      <Pagination.Prev onClick={() => handlePrevPage()} />
      {pageNavigation.map((page) => (
        <Pagination.Item
          key={page}
          active={currentPage === page}
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => handleNextPage()} />
    </Pagination>
  );
};

export default PagePagination;

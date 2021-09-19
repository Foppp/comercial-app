import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import {
  setCurrentPage,
  setNextPage,
  setPrevPage,
} from '../../../redux/paginationReducer/pagination';

const PagePagination = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsInfoReducer.products);
  const totalProducts = products.length;
  const perPage = useSelector((state) => state.paginationInfoReducer.perPage);
  const currentPage = useSelector((state) => state.paginationInfoReducer.currentPage);
  const totalPages = Math.ceil(totalProducts / perPage);
  const pagNavigation = Array.from({ length: totalPages }, (_, x) => x + 1);

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
      {pagNavigation.map((page) => (
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

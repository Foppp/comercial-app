import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { setCurrentPage, setNextPage, setPrevPage } from '../../redux/pagination/pagination';
import { Link } from 'react-router-dom';

const Pagination = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsInfoReducer.products);
  const totalProducts = products.length;
  const perPage = useSelector((state) => state.paginationInfoReducer.perPage);
  const currentPage = useSelector(
    (state) => state.paginationInfoReducer.currentPage
  );
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
    <div className='btn-group' role='group' aria-label='Basic example'>
      <button
        type='button'
        className='btn btn-outline-secondary'
        onClick={() => handlePrevPage()}
      >
        <span aria-hidden='true'>&laquo;</span>
      </button>
      {pagNavigation.map((page) => {
        const className = cn('btn', {
          'btn-outline-secondary': currentPage !== page,
          'btn-secondary': currentPage === page,
        })
        return (
          <button
            key={page}
            type='button'
            className={className}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            {page}
          </button>
        )
      })}
      <button
        type='button'
        className='btn btn-outline-secondary'
        onClick={() => handleNextPage()}
      >
        <span aria-hidden='true'>&raquo;</span>
      </button>
    </div>
  );
};

export default Pagination;

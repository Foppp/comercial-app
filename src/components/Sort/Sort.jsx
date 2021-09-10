import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortOption } from '../../redux/sort/sort';
import { setPerPage } from '../../redux/pagination/pagination';

const Sort = () => {
  const dispatch = useDispatch();
  return (
    <section className='py-2'>
      <div className='container px-3 px-lg-3 mt-2'>
        <div className='sort-items d-flex justify-content-around'>
          <select
            className='form-select form-select-sm'
            aria-label='Default select example'
            value="noSort"
            onChange={(e) => dispatch(setSortOption(e.target.value))}
          >
            <option disabled value="noSort">Sort Products</option>
            <option value='LH'>Price: Low -> Hi</option>
            <option value='HL'>Price: Hi -> Low</option>
            <option value='AZ'>Name: A -> Z</option>
            <option value='ZA'>Name: Z -> A</option>
            <option value='NO'>Date: Newest -> Oldest</option>
            <option value='ON'>Date: Oldest -> Newest</option>
          </select>
          <div className="mx-2"></div>
          <select
            className='form-select form-select-sm'
            aria-label='Default select example'
            value="perPage"
            onChange={(e) => dispatch(setPerPage(e.target.value))}
          >
            <option disabled value="perPage">Per Page</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Sort;

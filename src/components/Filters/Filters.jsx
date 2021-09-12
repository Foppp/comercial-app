import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Collapse } from 'bootstrap';
import {
  setMinPrice,
  setMaxPrice,
  setManufacturer,
  removeManufacturer,
  setKeys,
  removeKeys,
} from '../../redux/filter/filter';

const manufactures = ['Analog', 'Digital', 'Modular', 'Desktop'];
const keys = ['25', '49', '61', '88'];

const handleManufactureFilter = (e) => (dispatch) => {
  const id = e.target.id;
  const setFilter = e.target.checked
    ? dispatch(setManufacturer(id))
    : dispatch(removeManufacturer(id));
  return setFilter;
};

const handleKeysFilter = (e) => (dispatch) => {
  const id = e.target.id;
  const setFilter = e.target.checked
    ? dispatch(setKeys(id))
    : dispatch(removeKeys(id));
  return setFilter;
};

const toggleCollapse = (ref) => new Collapse(ref);

const Filters = () => {
  const dispatch = useDispatch();
  const priceRef = useRef(null);
  const manufacturerRef = useRef(null);
  const keysRef = useRef(null);
  const minPrice = useSelector((state) => state.filterProductsInfoReducer.filterBy.price.min);
  const maxPrice = useSelector((state) => state.filterProductsInfoReducer.filterBy.price.max);

  return (
    <div className='col-sm-6 col-md-4 col-lg-3 py-3'>
      <section className='py-2'>
        <div className='container px-3 px-lg-3 mt-2'>
          <div className='justify-content-center'>
            <div className='card'>
              <article className='card-group-item'>
                <div
                  className='card-header text-center'
                  type='button'
                  onClick={() => toggleCollapse(priceRef.current)}
                >
                  <h6 className='title'>Price Range</h6>
                </div>
                <div className='filter-content'>
                  <div ref={priceRef} className='card-body collapse show'>
                    <div className='form-row text-center'>
                      <div className='form-group input-group-sm'>
                        <label>Min</label>
                        <input
                          type='number'
                          className='form-control rounded-pill'
                          id='inputEmail4'
                          placeholder='$0'
                          defaultValue={minPrice}
                          onChange={(e) =>
                            dispatch(setMinPrice(Number(e.target.value)))
                          }
                        />
                      </div>
                      <div className='form-group text-right input-group-sm'>
                        <label>Max</label>
                        <input
                          type='number'
                          className='form-control rounded-pill'
                          placeholder='$1,000'
                          defaultValue={maxPrice}
                          onChange={(e) =>
                            dispatch(setMaxPrice(Number(e.target.value)))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className='card-group-item'>
                <div
                  className='card-header text-center'
                  type='button'
                  onClick={() => toggleCollapse(manufacturerRef.current)}
                >
                  <h6 className='title'>Manufactures</h6>
                </div>
                <div className='filter-content'>
                  <div ref={manufacturerRef} className='card-body collapse show'>
                    {manufactures.map((value) => (
                      <div
                        key={value}
                        className='custom-control custom-checkbox'
                      >
                        <input
                          type='checkbox'
                          className='custom-control-input'
                          id={value}
                          onChange={(e) => dispatch(handleManufactureFilter(e))}
                        />
                        <label
                          className='custom-control-label ms-2'
                          htmlFor='Check1'
                        >
                          {value}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
              <article className='card-group-item'>
                <div
                  className='card-header text-center'
                  type='button'
                  onClick={() => toggleCollapse(keysRef.current)}
                >
                  <h6 className='title'>Keys</h6>
                </div>
                <div className='filter-content'>
                  <div ref={keysRef} className='card-body collapse show'>
                    {keys.map((value) => (
                      <div
                        key={value}
                        className='custom-control custom-checkbox'
                      >
                        <input
                          type='checkbox'
                          className='custom-control-input'
                          id={value}
                          onChange={(e) => dispatch(handleKeysFilter(e))}
                        />
                        <label
                          className='custom-control-label ms-2'
                          htmlFor='Check1'
                        >
                          {value}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filters;

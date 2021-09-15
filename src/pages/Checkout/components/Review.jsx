import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, backStep } from '../../../redux/checkoutReducer/checkout';

const Review = () => {
  const dispatch = useDispatch();
  const checkoutToken = useSelector(
    (state) => state.checkoutInfoReducer.checkoutToken
  );
  const shippingData = useSelector(
    (state) => state.checkoutInfoReducer.shipping.shippingData
  );
  const countries = useSelector(
    (state) => state.checkoutInfoReducer.shipping.shippingCountries
  );
  const country = useSelector(
    (state) => state.checkoutInfoReducer.shipping.shippingCountry
  );
  const states = useSelector(
    (state) => state.checkoutInfoReducer.shipping.shippingSubdivisions
  );
  const state = useSelector(
    (state) => state.checkoutInfoReducer.shipping.shippingSubdivision
  );

  return (
    <div className='row'>
      <div className='p-2 text-center'>
        <h2>Order Information</h2>
        <hr />
      </div>
      <div className="row mx-auto">
      <div className='row text-center fs-4'>
          <div className='row m-1'>
            <div className='col'>
              {shippingData.firstName}{' '}
              {shippingData.lastName}
            </div>
          </div>
          <div className='row m-1'>
            <div className='col'>{shippingData.address1}</div>
          </div>
          <div className='row m-1'>
            <div className='col'>
              {shippingData.city} {shippingData.zip}
            </div>
          </div>
          <div className='row m-1'>
            <div className='col'>
              {countries[country]}, {states[state]}
            </div>
          </div>
      </div>

      <div className='col text-center align-items-center mt-5'>
        <ul className='list-group border-top list-group-flush m-sm-0'>
            {checkoutToken.live.line_items.map((item) => (
              <li key={item.id} className='list-group-item lh-sm align-items-center'>
                <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col-3'>
                    <img
                      width='30'
                      height='30'
                      alt='item'
                      src={item.media.source}
                    />
                  </div>
                  <div className='col-5'>
                    <p className=''>{item.name}</p>
                  </div>
                  <div className='col-2'>
                    <small className=''>{item.quantity}</small>
                  </div>
                  <div className='col-2'>
                    <small className='float-end'>
                      {item.line_total.formatted_with_symbol}
                    </small>
                  </div>
                </div>
              </li>
            ))}
            <li className='list-group-item d-flex justify-content-end mt-3'>
              <span className="mx-2">Shipping: </span>
              <strong>
                {checkoutToken.live.shipping.price.formatted_with_symbol}
              </strong>
            </li>
            <li className='list-group-item d-flex justify-content-end mt-3'>
              <span className="mx-2">Total: </span>
              <strong>
                {checkoutToken.live.subtotal.formatted_with_symbol}
              </strong>
            </li>
        </ul>
      </div>
      </div>
      <div className='d-grid gap-2 d-md-flex justify-content-md-between pb-3 mt-3'>
        <button
          className='btn btn-outline-secondary rounded-pill'
          type='button'
          onClick={() => dispatch(backStep())}
        >
          Back
        </button>
        <button
          className='full-width btn btn-info rounded-pill'
          type='submit'
          onClick={() => dispatch(nextStep())}
        >
          Continue to payment
        </button>
      </div>
    </div>
  );
};

export default Review;

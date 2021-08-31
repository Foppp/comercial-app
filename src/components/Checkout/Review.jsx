import React from "react";

const Review = ({ checkoutToken, shippingData, nextStep, backStep }) => {
  return (
    <div className="card checkout-card shadow-sm">
      <div className="col-lg-12 order-last">
        <div className="p-3 text-center">
          <h2>Order Deatails</h2>
        </div>
        <div className="container">
          <div className="row border-bottom m-2">
            <div className="col">First Name: </div>
            <div className="col">{shippingData.firstName}</div>
          </div>
          <div className="row border-bottom m-2">
            <div className="col">Last Name: </div>
            <div className="col">{shippingData.lastName}</div>
          </div>
          <div className="row border-bottom m-2">
            <div className="col">Adress: </div>
            <div className="col">{shippingData.address1}</div>
          </div>
          <div className="row border-bottom m-2">
            <div className="col">City: </div>
            <div className="col">{shippingData.city}</div>
          </div>
          <div className="row border-bottom m-2">
            <div className="col">Zip: </div>
            <div className="col">{shippingData.zip}</div>
          </div>
          <div className="row border-bottom m-2">
            <div className="col">Email: </div>
            <div className="col">{shippingData.email}</div>
          </div>
        </div>

        <ul className="list-group list-group-flush m-sm-0">
          <div className="container rounded">
            {checkoutToken.live.line_items.map((item) => (
              <li key={item.id} className="list-group-item lh-sm">
                <div className="row d-flex justify-content-between">
                  <div className="col">
                    <small className="">{item.quantity} x </small>
                  </div>
                  <div className="col">
                    <img
                      width="30"
                      height="30"
                      alt="item"
                      src={item.media.source}
                    />
                  </div>
                  <div className="col">
                    <p className="my-1">{item.name}</p>
                  </div>
                  <div className="col">
                    <small className="float-end">
                      {item.line_total.formatted_with_symbol}
                    </small>
                  </div>
                </div>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total: </span>
              <strong>
                {checkoutToken.live.subtotal.formatted_with_symbol}
              </strong>
            </li>
          </div>
        </ul>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-3 m-3">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={backStep}
          >
            Back
          </button>
          <button
            className="full-width btn btn-primary"
            type="submit"
            onClick={nextStep}
          >
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;

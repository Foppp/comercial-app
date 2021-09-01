/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const AdressForm = ({ checkoutToken, totalItems, submitShippingData }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region: stateProvince }
    );

    setShippingOptions(options);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address1: "",
      city: "",
      zip: "",
    },
    onSubmit: (data) => {
      submitShippingData({
        ...data,
        shippingCountry,
        shippingSubdivision,
        shippingOption,
      });
      setShippingCountry("");
      setShippingSubdivision("");
      setShippingOption("");
    },
  });
  return (
    <div className="card checkout-card shadow-sm">
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>Order Adress</h2>
          </div>

          <div className="row g-3 border-bottom">
            <div className="col-lg-12">
              <form className="needs-validation" onSubmit={formik.handleSubmit}>
                <div className="row g-3">
                  <div className="form-floating col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      required
                    />
                    <label htmlFor="firstName">First name</label>
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="form-floating col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      required
                    />
                    <label htmlFor="lastName">Last name</label>
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  <div className="form-floating col-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required
                    />
                    <label htmlFor="email">Email</label>
                    <div className="invalid-feedback">
                      Please enter a valid email address htmlFor shipping
                      updates.
                    </div>
                  </div>
                  <div className="form-floating col-sm-5">
                    <input
                      type="text"
                      className="form-control"
                      id="address1"
                      name="address1"
                      placeholder="1234 Main St"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.address1}
                    />
                    <label htmlFor="address1">Address</label>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="form-floating col-sm-5">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      placeholder="City"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.city}
                    />
                    <label htmlFor="city">City</label>
                    <div className="invalid-feedback">
                      Please enter your city.
                    </div>
                  </div>
                  <div className="form-floating col-md-2">
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      name="zip"
                      placeholder="Zip"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.zip}
                    />
                    <label htmlFor="zip">Zip</label>
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                  <div className="form-floating col-md-4">
                    <select
                      className="form-select form-control"
                      id="country"
                      required
                      // value={shippingCountry}
                      onChange={(e) => setShippingCountry(e.target.value)}
                    >
                      <option value={shippingCountry}>Select...</option>
                      {Object.entries(shippingCountries)
                        .map(([code, name]) => ({ id: code, label: name }))
                        .map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.label}
                          </option>
                        ))}
                    </select>
                    <label htmlFor="country">Country</label>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="form-floating col-md-4">
                    <select
                      className="form-select form-control"
                      id="state"
                      selected
                      // value={shippingSubdivision}
                      required
                      onChange={(e) => setShippingSubdivision(e.target.value)}
                    >
                      <option value={shippingSubdivision}>Select...</option>
                      {Object.entries(shippingSubdivisions)
                        .map(([code, name]) => ({ id: code, label: name }))
                        .map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.label}
                          </option>
                        ))}
                    </select>
                    <label htmlFor="state">State</label>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="form-floating col-md-4">
                    <select
                      className="form-select form-control"
                      id="options"
                      required
                      // value={shippingOption}
                      onChange={(e) => setShippingOption(e.target.value)}
                    >
                      <option value={shippingOption}>Select...</option>
                      {shippingOptions
                        .map((sO) => ({
                          id: sO.id,
                          label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
                        }))
                        .map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.label}
                          </option>
                        ))}
                    </select>
                    <label htmlFor="options">Shipping options</label>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-3">
                    <Link
                      to="/cart"
                      className="btn btn-secondary"
                      type="button"
                    >
                      Back to cart
                    </Link>
                    <button
                      className="full-width btn btn-primary"
                      type="submit"
                    >
                      Continue to payment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdressForm;
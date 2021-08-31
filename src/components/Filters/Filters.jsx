import React from "react";

const Filters = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <section className="py-2">
        <div className="container px-3 px-lg-3 mt-2">
          <div className="justify-content-center">
            <div className="card">
              <article className="card-group-item">
                <div className="card-header">
                  <h6 className="title">Price Range</h6>
                </div>
                <div className="filter-content">
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group input-group-sm">
                        <label>Min</label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="$0"
                        />
                      </div>
                      <div className="form-group text-right input-group-sm">
                        <label>Max</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="$1,000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="card-group-item">
                <div className="card-header">
                  <h6 className="title">Manufactures</h6>
                </div>
                <div className="filter-content">
                  <div className="card-body">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Check1"
                      />
                      <label className="custom-control-label" htmlFor="Check1">
                        Samsung
                      </label>
                      <span className="float-right badge badge-light round">
                        132
                      </span>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Check2"
                      />
                      <label className="custom-control-label" htmlFor="Check2">
                        Black berry
                      </label>
                      <span className="float-right badge badge-light round">
                        132
                      </span>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Check3"
                      />
                      <label className="custom-control-label" htmlFor="Check3">
                        Samsung
                      </label>
                      <span className="float-right badge badge-light round">
                        17
                      </span>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Check4"
                      />
                      <label className="custom-control-label" htmlFor="Check4">
                        Other Brand
                      </label>
                      <span className="float-right badge badge-light round">
                        7
                      </span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="card-group-item">
                <div className="card-header">
                  <h6 className="title">Keys</h6>
                </div>
                <div className="filter-content">
                  <div className="card-body">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Check1"
                      />
                      <label className="custom-control-label" htmlFor="Check1">
                        Samsung
                      </label>
                      <span className="float-right badge badge-light round">
                        132
                      </span>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Check2"
                      />
                      <label className="custom-control-label" htmlFor="Check2">
                        Black berry
                      </label>
                      <span className="float-right badge badge-light round">
                        132
                      </span>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Check3"
                      />
                      <label className="custom-control-label" htmlFor="Check3">
                        Samsung
                      </label>
                      <span className="float-right badge badge-light round">
                        17
                      </span>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Check4"
                      />
                      <label className="custom-control-label" htmlFor="Check4">
                        Other Brand
                      </label>
                      <span className="float-right badge badge-light round">
                        7
                      </span>
                    </div>
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

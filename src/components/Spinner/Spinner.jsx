import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner-border mt-5 text-center"
      style={{ width: "5rem", height: "5rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;

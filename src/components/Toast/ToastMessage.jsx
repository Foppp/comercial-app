import React from "react";

const ToastMessage = ({ toastRef, message }) => {
  return (
    <div className="position-fixed top-0 end-0 p-3 mt-5">
      <div
        ref={toastRef}
        className="toast align-items-center text-white bg-success border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ToastMessage;

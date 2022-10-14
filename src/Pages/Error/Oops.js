import React from "react";

const Oops = () => {
  return (
    <div className="row g-0 extra-pad px-5">
      <div className="col-sm-12">
        <div className="text-center rounded bg-white p-4">
          <div className="error-bg-circle mx-auto d-flex align-items-center justify-content-center">
            <img
              src={require("../../Assets/Images/oops.png")}
              width="230px"
              height="180px"
              alt="error"
            />
          </div>
          <p className="big-title-black mt-3 fw-bold">
            Oops! Something went wrong
          </p>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="sidebar-btn"
              onClick={() => (window.location.href = "/")}
            >
              Reload the page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oops;

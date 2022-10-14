import React from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="row g-0 extra-pad px-5">
      <div className="col-sm-12">
        <div className="text-center rounded bg-white p-4">
          <div className="error-bg-circle mx-auto d-flex align-items-center justify-content-center">
            <img
              src={require("../../Assets/Images/404.png")}
              width="230px"
              height="180px"
              alt="error"
            />
          </div>
          <p className="big-title-black mt-3 fw-bold">ERROR 404</p>
          <p className="heading-black mt-3">Something went wrong!</p>
          <div className="d-flex justify-content-center mt-5">
            <button className="sidebar-btn" onClick={() => navigate("/")}>
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

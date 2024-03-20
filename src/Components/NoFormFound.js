import React from "react";
import { useNavigate } from "react-router-dom";

const NoAppFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="fb-bg-circle1 mx-auto d-flex align-items-center justify-content-center mb-3">
        <img
          src={require("../Assets/Images/NoFormFound.png")}
          width="170px"
          height="170px"
          alt="nodata"
        />
      </div>
      <p className="body-large-black mb-2 fw-bold">
        Create new forms and link them with your app to see them display here.
      </p>
      <div
        className="d-flex justify-content-center align-items-center mt-3"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/formdialog")}
      >
        <p className="body-large-black fw-bold response">Create App</p>
        <span>
          <i
            className="bi bi-plus-lg response ms-1"
            style={{ fontSize: "15px" }}
          ></i>
        </span>
      </div>
    </div>
  );
};

export default NoAppFound;

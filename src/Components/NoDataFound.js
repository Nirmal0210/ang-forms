import React from "react";

const NoDataFound = () => {
  return (
    <div>
      <div className="fb-bg-circle1 mx-auto d-flex align-items-center justify-content-center">
        <img
          src={require("../Assets/Images/fb-nodata.png")}
          width="170px"
          height="120px"
          alt="nodata"
        />
      </div>
      <p className="body-large-black mt-3 fw-bold">No data found</p>
    </div>
  );
};

export default NoDataFound;

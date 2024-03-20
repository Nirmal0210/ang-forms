import React from "react";
const DashboardSkeleton = () => {
  return (
    <div className="container pt-4">
      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 justify-content-between">
        <div className="col box">
          <div className="row d-flex align-items-center"></div>
        </div>
        <div className="col box">
          <div className="row d-flex align-items-center"></div>
        </div>
        <div className="col box">
          <div className="row d-flex align-items-center"></div>
        </div>
        <div className="col box">
          <div className="row d-flex align-items-center"></div>
        </div>
      </div>
      <div className="row px-1 mt-4 justify-content-between">
        <div className="col-9 col-lg-9 total-response-graph-box p-3">
          <div className="row"></div>
        </div>
        <div className="col-3 col-lg-3 total-response-box p-3">
          <div className="d-flex"></div>
        </div>
      </div>
      <div className="row px-1 mt-4 mb-4 justify-content-between">
        <div className="col-9 col-lg-9 total-response-graph-box p-3"></div>
        <div
          className="col-3 col-lg-3 total-response-box p-3"
          style={{ backgroundColor: "white" }}
        ></div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;

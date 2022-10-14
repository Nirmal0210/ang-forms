import React from "react";
const Responses = () => {
  return (
    <div className="p-4 extra-pad">
      <div className="row g-0 g-lg-2 p-0 d-flex align-items-center">
        <div className="col-3 text-start">
          <div className="input-group border-0 rounded">
            <span
              className="input-group-text p-2 bg-white border-0"
              id="basic-addon1"
            >
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 subtitle-black ps-0"
              placeholder="Search for forms, app names, etc"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="col-1">
          <div className="bg-white d-flex p-2 align-items-center border-0 rounded">
            <i className="bi bi-funnel"></i>
            <p className="subtitle-black ms-2">Filters</p>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <div className="subtitle-black text-end me-2">
            <label className="fw-bold body-black">
              Form name:
              <select className="ms-2 default-select">
                <option value="fruit">All Forms</option>
                <option value="vegetable">Yearly</option>
                <option value="meat">Daily</option>
              </select>
            </label>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <button className="download-response-btn">
            <i className="bi bi-download" style={{ fontSize: "19px" }} />
            <span className="ms-1">Download Responses </span>
          </button>
        </div>
      </div>
      <p className="body-large-black fw-bold text-start my-3">Responses</p>
      <div className="bg-white rounded row mb-3 g-0 p-3">
        <div className="col-1">
          <img
            src={require("../../Assets/Images/Response1.png")}
            height={"90px"}
            width={"90px"}
            alt="response"
          />
        </div>
        <div className="col-2 p-1 m-auto">
          <p className="body-black fw-bold text-center">Jordan Peterson Jr.</p>
          <div className="d-flex justify-content-center">
            <p className="response-form-name text-center me-0">Form Name</p>
          </div>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Ip address: </p>
          <p className="sm-black ms-1">126.205.209.101</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Device: </p>
          <p className="sm-black ms-1">Mobile</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Device Info: </p>
          <p className="sm-black ms-1">Iphone Xs Max</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Phone no:</p>
          <p className="sm-black ms-1">0123456789</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Browser:</p>
          <p className="sm-black ms-1">Safari</p>
        </div>
        <div className="col-1 text-end">
          <i className="bi bi-three-dots" />
        </div>
      </div>
      <div className="bg-white rounded row mb-3 g-0 p-3">
        <div className="col-1">
          <img
            src={require("../../Assets/Images/Response1.png")}
            height={"90px"}
            width={"90px"}
            alt="response"
          />
        </div>
        <div className="col-2 p-1 m-auto">
          <p className="body-black fw-bold text-center">Jordan Peterson Jr.</p>
          <div className="d-flex justify-content-center">
            <p className="response-form-name text-center me-0">Form Name</p>
          </div>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Ip address: </p>
          <p className="sm-black ms-1">126.205.209.101</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Device: </p>
          <p className="sm-black ms-1">Mobile</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Device Info: </p>
          <p className="sm-black ms-1">Iphone Xs Max</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Phone no:</p>
          <p className="sm-black ms-1">0123456789</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Browser:</p>
          <p className="sm-black ms-1">Safari</p>
        </div>
        <div className="col-1 text-end">
          <i className="bi bi-three-dots" />
        </div>
      </div>
      <div className="bg-white rounded row mb-3 g-0 p-3">
        <div className="col-1">
          <img
            src={require("../../Assets/Images/Response1.png")}
            height={"90px"}
            width={"90px"}
            alt="response"
          />
        </div>
        <div className="col-2 p-1 m-auto">
          <p className="body-black fw-bold text-center">Jordan Peterson Jr.</p>
          <div className="d-flex justify-content-center">
            <p className="response-form-name text-center me-0">Form Name</p>
          </div>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Ip address: </p>
          <p className="sm-black ms-1">126.205.209.101</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Device: </p>
          <p className="sm-black ms-1">Mobile</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Device Info: </p>
          <p className="sm-black ms-1">Iphone Xs Max</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Phone no:</p>
          <p className="sm-black ms-1">0123456789</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Browser:</p>
          <p className="sm-black ms-1">Safari</p>
        </div>
        <div className="col-1 text-end">
          <i className="bi bi-three-dots" />
        </div>
      </div>
      <div className="bg-white rounded row mb-3 g-0 p-3">
        <div className="col-1">
          <img
            src={require("../../Assets/Images/Response1.png")}
            height={"90px"}
            width={"90px"}
            alt="response"
          />
        </div>
        <div className="col-2 p-1 m-auto">
          <p className="body-black fw-bold text-center">Jordan Peterson Jr.</p>
          <div className="d-flex justify-content-center">
            <p className="response-form-name text-center me-0">Form Name</p>
          </div>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Ip address: </p>
          <p className="sm-black ms-1">126.205.209.101</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Device: </p>
          <p className="sm-black ms-1">Mobile</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Device Info: </p>
          <p className="sm-black ms-1">Iphone Xs Max</p>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Phone no:</p>
          <p className="sm-black ms-1">0123456789</p>
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p className="subtitle-black fw-bold">Browser:</p>
          <p className="sm-black ms-1">Safari</p>
        </div>
        <div className="col-1 text-end">
          <i className="bi bi-three-dots" />
        </div>
      </div>
    </div>
  );
};

export default Responses;

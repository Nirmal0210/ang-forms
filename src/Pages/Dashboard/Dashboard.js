import React from "react";
import { BsJoystick } from "react-icons/bs";
const Dashboard = () => {
  return (
    <div className="container pt-4">
      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 justify-content-between">
        <div className="col box">
          <div className="row d-flex align-items-center">
            <div className="col-3 p-3">
              <div className="box-icon">
                <img
                  src={require("../../Assets/Images/chain-bg.png")}
                  width="25px"
                  height="25px"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="title-black" style={{ color: "#39A2AE" }}>
                36
              </div>
              <div className="body-large-black">Form links created</div>
            </div>
          </div>
        </div>
        <div className="col box">
          <div className="row d-flex align-items-center">
            <div className="col-3 p-3">
              <div className="box-icon">
                <img
                  src={require("../../Assets/Images/chain-bg.png")}
                  width="25px"
                  height="25px"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="title-black" style={{ color: "#39A2AE" }}>
                36
              </div>
              <div className="body-large-black">Form links created</div>
            </div>
          </div>
        </div>
        <div className="col box">
          <div className="row d-flex align-items-center">
            <div className="col-3 p-3">
              <div className="box-icon">
                <img
                  src={require("../../Assets/Images/chain-bg.png")}
                  width="25px"
                  height="25px"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="title-black" style={{ color: "#39A2AE" }}>
                36
              </div>
              <div className="body-large-black">Form links created</div>
            </div>
          </div>
        </div>
        <div className="col box">
          <div className="row d-flex align-items-center">
            <div className="col-3 p-3">
              <div className="box-icon">
                <img
                  src={require("../../Assets/Images/chain-bg.png")}
                  width="25px"
                  height="25px"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="title-black" style={{ color: "#39A2AE" }}>
                36
              </div>
              <div className="body-large-black">Form links created</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-1 mt-4 justify-content-between">
        <div className="col-9 col-lg-9 total-response-graph-box p-3">
          <div className="row">
            <div className="col-8 col-lg-8">
              <div className="d-flex justify-content-between">
                <div className="body-large-black fw-bold">
                  Total Monthly Reports
                </div>
                <div className="d-flex align-items-center ">
                  <div className="color-box-blue mx-2"></div>
                  <div className="subtitle-black">Form Links</div>
                  <div className="color-box-green mx-2 ms-4"></div>
                  <div className="subtitle-black">Normal Forms</div>
                </div>
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="subtitle-black text-end">
                <label>
                  Show by
                  <select className="ms-1 show-select">
                    <option value="fruit">Monthly</option>
                    <option value="vegetable">Yearly</option>
                    <option value="meat">Daily</option>
                  </select>
                </label>
              </div>
              <div className="d-flex justify-content-center mt-5 p-3">
                <div className="pie-image">
                  <div className="icon-over-image">
                    <BsJoystick style={{ height: "30px", width: "30px" }} />
                  </div>
                </div>
              </div>
              <div className="container mt-2 p-3 text-center">
                <div className="row row-cols-2 row-cols-lg-2 g-3 g-lg-3">
                  <div className="col d-flex">
                    <div className="dot-1"></div>
                    <div className="subtitle-black fw-bold ms-1">
                      App name 1
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="dot-2"></div>
                    <div className="subtitle-black fw-bold ms-1">
                      App name 2
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="dot-3"></div>
                    <div className="subtitle-black fw-bold ms-1">
                      App name 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 col-lg-3 total-response-box p-3">
          <div className="d-flex">
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              className="box-icon me-2"
            >
              <img
                src={require("../../Assets/Images/speaker.png")}
                width="25px"
                height="25px"
              />
            </div>
            <div>
              <div className="heading-white fw-bold">15,760</div>
              <p className="body-white">Total responses</p>
            </div>
          </div>
          <div className="my-5">
            <div className="my-3">
              <p className="body-large-white my-1">Link Forms - 34%</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="my-3">
              <p className="body-large-white my-1">Normal Forms - 50%</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-1 mt-4 mb-4 justify-content-between">
        <div className="col-9 col-lg-9 total-response-graph-box p-3">
          <div className="body-large-black fw-bold text-start">
            Recent Response
          </div>
          <div className="mt-5 px-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Form Id</th>
                  <th scope="col">Form Name</th>
                  <th scope="col">App/link</th>
                  <th scope="col">Impressions</th>
                  <th scope="col">Responses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="subtitle-black">Random ID</td>
                  <td className="subtitle-black">Random Form Name</td>
                  <td className="subtitle-black">Random App Name</td>
                  <td className="subtitle-black">2</td>
                  <td className="subtitle-black">1500</td>
                </tr>
                <tr>
                  <td className="subtitle-black">Random ID</td>
                  <td className="subtitle-black">Random Form Name</td>
                  <td className="subtitle-black">Thornton</td>
                  <td className="subtitle-black">2</td>
                  <td className="subtitle-black">768</td>
                </tr>
                <tr>
                  <td className="subtitle-black">Random ID</td>
                  <td className="subtitle-black">Random App Name</td>
                  <td className="subtitle-black">Larry the Bird</td>
                  <td className="subtitle-black">20000</td>
                  <td className="subtitle-black">2000</td>
                </tr>
                <tr>
                  <td className="subtitle-black">Random ID</td>
                  <td className="subtitle-black">Random Form Name</td>
                  <td className="subtitle-black">Thornton</td>
                  <td className="subtitle-black">37</td>
                  <td className="subtitle-black">2700</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="col-3 col-lg-3 total-response-box p-3"
          style={{ backgroundColor: "white" }}
        >
          <div className="body-large-black fw-bold text-start mb-3">
            Billing History
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="subtitle-black">12 Jan 2022, 4:30 PM</div>
            <div
              className="body-large-black fw-bold"
              style={{ color: "#12BB7D" }}
            >
              $52.25
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="subtitle-black">12 Jan 2022, 4:30 PM</div>
            <div
              className="body-large-black fw-bold"
              style={{ color: "#12BB7D" }}
            >
              $52.25
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="subtitle-black">12 Jan 2022, 4:30 PM</div>
            <div
              className="body-large-black fw-bold"
              style={{ color: "#12BB7D" }}
            >
              $52.25
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="subtitle-black">12 Jan 2022, 4:30 PM</div>
            <div
              className="body-large-black fw-bold"
              style={{ color: "#12BB7D" }}
            >
              $52.25
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="subtitle-black">12 Jan 2022, 4:30 PM</div>
            <div
              className="body-large-black fw-bold"
              style={{ color: "#12BB7D" }}
            >
              $52.25
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="subtitle-black">12 Jan 2022, 4:30 PM</div>
            <div
              className="body-large-black fw-bold"
              style={{ color: "#12BB7D" }}
            >
              $52.25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

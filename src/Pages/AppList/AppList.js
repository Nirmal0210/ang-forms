import React from "react";
import { BsSearch } from "react-icons/bs";
import ActionPopup from "../../Components/ActionPopup";

const AppList = () => {
  return (
    <div className="p-4 extra-pad">
      <div className="row g-0 p-0 align-items-center">
        <div className="col-3 text-start">
          <div className="input-group mb-3 border rounded">
            <span
              className="input-group-text bg-white border-0"
              id="basic-addon1"
            >
              <BsSearch />
            </span>
            <input
              type="text"
              className="form-control border-0 subtitle-black"
              placeholder="Search for apps"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="col-9 d-flex justify-content-end">
          <button className="publish-btn">Publish</button>
        </div>
      </div>
      <div className="row g-0 mt-4">
        <div className="col-sm-12">
          <div className="text-center rounded bg-white p-4">
            <div className="body-large-black fw-bold text-start">App list</div>
            <div className="mt-5 px-3 tableFixHead">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="body-black fw-bold">
                      Form Id
                    </th>
                    <th scope="col" className="body-black fw-bold">
                      Form Name
                    </th>
                    <th scope="col" className="body-black fw-bold">
                      App ID
                    </th>
                    <th scope="col" className="body-black fw-bold">
                      Impressions
                    </th>
                    <th scope="col" className="body-black fw-bold">
                      Responses
                    </th>
                    <th scope="col" className="body-black fw-bold"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Random App Name</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">1500</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">2</td>
                    <td className="subtitle-black response">768</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random App Name</td>
                    <td className="subtitle-black">Larry the Bird</td>
                    <td className="subtitle-black">20000</td>
                    <td className="subtitle-black response">2000</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                  <tr>
                    <td className="subtitle-black">Random ID</td>
                    <td className="subtitle-black">Random Form Name</td>
                    <td className="subtitle-black">Thornton</td>
                    <td className="subtitle-black">37</td>
                    <td className="subtitle-black response">2700</td>
                    <td className="subtitle-black">
                      <ActionPopup />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppList;

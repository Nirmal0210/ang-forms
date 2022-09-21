import React from "react";
import ActionPopup from "../../Components/ActionPopup";
import { Link } from "react-router-dom";
import { BsSearch, BsFileEarmarkExcel } from "react-icons/bs";
import { HiDownload, HiOutlineFilter } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";
const FormLinkList = () => {
  return (
    <div className="p-4 extra-pad">
      <div className="row g-0 g-lg-2 p-0 d-flex align-items-center">
        <div className="col-3 text-start">
          <div className="input-group border-0 rounded">
            <span
              className="input-group-text p-2 bg-white border-0"
              id="basic-addon1"
            >
              <BsSearch />
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
          <div className="input-group border-0 rounded">
            <span
              className="input-group-text p-2 bg-white border-0"
              id="basic-addon1"
            >
              <HiOutlineFilter />
            </span>
            <input
              type="text"
              className="form-control border-0 subtitle-black ps-0"
              placeholder="Filters"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-6 d-flex justify-content-end">
          <div className="dropdown">
            <button className="dropbtn">
              <span className="me-1">
                <HiDownload style={{ fontSize: "19px" }} />
              </span>
              Download
            </button>
            <div className="dropdown-content">
              <Link href="/" className="d-flex align-items-center">
                <span style={{ fontSize: "20px" }}>
                  <VscFilePdf />
                </span>
                <p className="subtitle-black ms-2">PDF format</p>
              </Link>
              <Link href="/" className="d-flex align-items-center">
                <span style={{ fontSize: "20px" }}>
                  <BsFileEarmarkExcel />
                </span>
                <p className="subtitle-black ms-2">Excel format</p>
              </Link>
            </div>
          </div>
          <button className="download-btn ms-3">
            New Form
            <span className="ms-2">
              <AiOutlinePlus style={{ fontSize: "19px" }} />
            </span>
          </button>
        </div>
      </div>
      <div className="row g-0 mt-4">
        <div className="col-sm-12">
          <div className="text-center rounded bg-white p-4">
            <div className="body-large-black fw-bold text-start">
              Form Links List
            </div>
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
                      Link Address
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

export default FormLinkList;

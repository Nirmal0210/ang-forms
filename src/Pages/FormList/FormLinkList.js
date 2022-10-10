import React, { useState, useEffect } from "react";
import ActionPopup from "../../Components/ActionPopup";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import NoDataFound from "../../Components/NoDataFound";
import ViewDetails from "../../Components/ViewDetails";

const FormLinkList = () => {
  const [loader, setLoader] = useState(false);
  const [formLinkList, setFormLinkList] = useState([]);

  const getData = async () => {
    setLoader(true);
    let documentID = localStorage.getItem("userDocumentID");
    const querySnapshotTemp = await getDocs(
      collection(db, `users/${documentID}/publish`)
    );
    querySnapshotTemp.forEach((item) => {
      let obj = item.data();
      obj.appKey = item.id;
      formLinkList.push(obj);
      setFormLinkList([...formLinkList]);
    });
    setLoader(false);
  };
  useEffect(() => {
    setFormLinkList([]);
    getData();
  }, []);
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
          <div className="input-group border-0 rounded">
            <span
              className="input-group-text p-2 bg-white border-0"
              id="basic-addon1"
            >
              <i className="bi bi-funnel"></i>
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
                <i className="bi bi-download" style={{ fontSize: "19px" }} />
              </span>
              Download
            </button>
            <div className="dropdown-content">
              <Link to="/" className="d-flex align-items-center">
                <span style={{ fontSize: "20px" }}>
                  <i className="bi bi-filetype-pdf"></i>
                </span>
                <p className="subtitle-black ms-2">PDF format</p>
              </Link>
              <Link to="/" className="d-flex align-items-center">
                <span style={{ fontSize: "20px" }}>
                  <i className="bi bi-file-earmark-excel"></i>
                </span>
                <p className="subtitle-black ms-2">Excel format</p>
              </Link>
            </div>
          </div>
          <button className="download-btn ms-3">
            New Form
            <span className="ms-2">
              <i className="bi bi-plus-lg" style={{ fontSize: "19px" }} />
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
            {loader ? (
              <div
                className="d-flex align-items-center"
                style={{ minHeight: "25rem" }}
              >
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
            ) : formLinkList.length > 0 ? (
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
                      <th scope="col" className="body-black fw-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {formLinkList.map((item, index) => (
                      <tr key={index}>
                        <td className="subtitle-black">{item?.formId}</td>
                        <td className="subtitle-black">{item?.formName}</td>
                        <td className="subtitle-black response">
                          <p className="text-ellipsis">{item?.formUrl}</p>
                        </td>
                        <td className="subtitle-black">{item?.impressions}</td>
                        <td className="subtitle-black">{item?.responses}</td>
                        <td className="subtitle-black">
                          <ViewDetails data={item} />
                        </td>
                        <td className="subtitle-black">
                          <ActionPopup />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <NoDataFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLinkList;

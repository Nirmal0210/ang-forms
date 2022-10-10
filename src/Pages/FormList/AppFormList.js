import React, { useState, useEffect } from "react";
import ActionPopup from "../../Components/ActionPopup";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import NoDataFound from "../../Components/NoDataFound";
import ViewDetails from "../../Components/ViewDetails";
const AppFormList = () => {
  const [loader, setLoader] = useState(false);
  const [appList, setAppList] = useState([]);
  const getData = async () => {
    setLoader(true);
    setAppList([]);
    let documentID = localStorage.getItem("userDocumentID");
    const querySnapshotTemp = await getDocs(
      collection(db, `users/${documentID}/apps`)
    );
    querySnapshotTemp.forEach(async (doc) => {
      const querySnapshot = await getDocs(
        collection(db, `users/${documentID}/apps/${doc.id}/forms`)
      );
      querySnapshot.forEach((item) => {
        let obj = item.data();
        obj.appKey = item.id;
        appList.push(obj);
        setAppList([...appList]);
      });
    });
    setLoader(false);
  };
  useEffect(() => {
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
              App Forms List
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
            ) : appList.length > 0 ? (
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
                        App Name
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
                    {appList.map((item, index) => (
                      <tr key={index}>
                        <td className="subtitle-black">{item?.formId}</td>
                        <td className="subtitle-black">{item?.formName}</td>
                        <td className="subtitle-black">Random App Name</td>
                        <td className="subtitle-black">2</td>
                        <td className="subtitle-black response">1500</td>
                        <td className="subtitle-black">
                          <ViewDetails data={item} />
                        </td>
                        <td className="subtitle-black">
                          <ActionPopup />
                        </td>
                      </tr>
                    ))}

                    {/* <tr>
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
                    </tr> */}
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

export default AppFormList;

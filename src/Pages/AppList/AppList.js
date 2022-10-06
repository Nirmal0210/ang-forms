import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import ActionPopup from "../../Components/ActionPopup";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
const AppList = () => {
  const [loader, setLoader] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [appName, setAppName] = useState("");
  const [packageId, setPackageId] = useState("");
  const [webLink, setWebLink] = useState("");
  const [checkedValue, setCheckedValue] = useState("mobile");
  const [appList, setAppList] = useState([]);
  const setClearData = () => {
    setAppName("");
    setPackageId("");
    setWebLink("");
    setCheckedValue("mobile");
    setModalShow(false);
  };

  const onSubmit = async () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const docData = {
      appName: appName,
      platForm: checkedValue,
      packageId: packageId,
      webLink: webLink,
      uid: currentUser.uid,
    };
    await addDoc(collection(db, "data"), docData)
      .then((docRef) => {
        alert("App Create Successfully");
        setModalShow(false);
      })
      .catch((error) => alert(error));
  };
  const getData = async () => {
    setAppList([]);
    const querySnapshot = await getDocs(collection(db, "data"));
    querySnapshot.forEach((doc) => {
      const obj = doc.data();
      obj.appKey = doc.id;
      setAppList([...appList, obj]);
    });
    setLoader(false);
  };
  useEffect(() => {
    setLoader(true);
    getData();
  }, []);

  return modalShow ? (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalShow(false);
              setClearData();
            }}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className="form-group mb-3">
          <label className="body-large-black mt-2 text-start fw-bold">
            App Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter app name"
            onChange={(e) => setAppName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <p className="body-large-black text-start fw-bold">
            For what you want to create this app ?
          </p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="mobile"
              checked={checkedValue === "mobile"}
              onChange={() => {
                setCheckedValue("mobile");
                document.getElementById("t2").value = "";
              }}
            />
            <label className="form-check-label">Mobile App</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="website"
              checked={checkedValue === "website"}
              onChange={() => {
                setCheckedValue("website");
                document.getElementById("t1").value = "";
              }}
            />
            <label className="form-check-label">Website</label>
          </div>
        </div>
        <div>
          {checkedValue === "mobile" ? (
            <div className="form-group mb-3">
              <label className="body-large-black mt-2 text-start fw-bold">
                Enter package Id of Mobile Application
              </label>
              <input
                type="text"
                id="t1"
                className="form-control"
                placeholder="Enter package ID"
                onChange={(e) => {
                  setPackageId(e.target.value);
                }}
              />
            </div>
          ) : (
            <div className="form-group mb-3">
              <label className="body-large-black mt-2 text-start fw-bold">
                Enter link of website
              </label>
              <input
                type="text"
                id="t2"
                className="form-control"
                placeholder="Enter website link"
                onChange={(e) => setWebLink(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setModalShow(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => onSubmit()}>Continue</button>
        </div>
      </div>
    </div>
  ) : (
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
          <button
            className="download-btn ms-3"
            onClick={() => setModalShow(true)}
          >
            Create App
            <span className="ms-2">
              <AiOutlinePlus
                style={{
                  fontSize: "19px",
                }}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="row g-0 mt-4">
        <div className="col-sm-12">
          <div className="text-center rounded bg-white p-4">
            <div className="body-large-black fw-bold text-start">App list</div>
            {loader ? (
              <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden"></span>
              </div>
            ) : appList.length > 0 ? (
              <div className="mt-5 px-3 tableFixHead">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="body-black fw-bold">
                        App Key
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        App Name
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Platform
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Package ID
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Website Link
                      </th>

                      <th scope="col" className="body-black fw-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {appList.map((item) => (
                      <tr>
                        <td className="subtitle-black">
                          {item.appKey ? (
                            item.appKey
                          ) : (
                            <i className="bi bi-dash"></i>
                          )}
                        </td>
                        <td className="subtitle-black">
                          {item.appName ? (
                            item.appName
                          ) : (
                            <i className="bi bi-dash"></i>
                          )}
                        </td>
                        <td className="subtitle-black">
                          {item.platForm ? (
                            item.platForm
                          ) : (
                            <i className="bi bi-dash"></i>
                          )}
                        </td>
                        <td className="subtitle-black">
                          {item.packageId ? (
                            item.packageId
                          ) : (
                            <i className="bi bi-dash"></i>
                          )}
                        </td>
                        <td className="subtitle-black response">
                          {item.webLink ? (
                            item.webLink
                          ) : (
                            <i className="bi bi-dash"></i>
                          )}
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
              <>
                <div className="fb-bg-circle1 mx-auto d-flex align-items-center justify-content-center">
                  <img
                    src={require("../../Assets/Images/fb-nodata.png")}
                    width="170px"
                    height="120px"
                    alt="nodata"
                  />
                </div>
                <p className="body-large-black mt-3 fw-bold">No data found</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppList;

import React, { useState } from "react";
import DeleteApp from "../../Components/DeleteApp";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import { getUserId } from "../../Config/Setting";
import NoAppFound from "../../Components/NoFormFound";

const AppList = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [appName, setAppName] = useState("");
  const [packageId, setPackageId] = useState("");
  const [webLink, setWebLink] = useState("");
  const [checkedValue, setCheckedValue] = useState("mobile");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
  const [appList, setAppList] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const setClearData = () => {
    setAppName("");
    setPackageId("");
    setWebLink("");
    setCheckedValue("mobile");
    setModalShow(false);
  };

  const onSubmit = async () => {
    setSubmitLoader(true);
    const docData = {
      appName: appName,
      platForm: checkedValue,
      packageId: packageId,
      webLink: webLink,
      uid: currentUser.uid,
    };
    getUserId(currentUser).then(async (res) => {
      await setDoc(doc(collection(db, `users/${res.userID}/apps`)), docData)
        .then(() => {
          setModalShow(false);
          setIsSuccessful(true);
          setTimeout(() => {
            setIsSuccessful(false);
          }, 2000);
          setSubmitLoader(false);
          getData();
        })
        .catch((error) => {
          setModalShow(false);
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 2000);
          setSubmitLoader(false);
        });
    });
  };
  const getData = async () => {
    setLoader(true);
    let documentID = localStorage.getItem("userDocumentID");
    const querySnapshotTemp = await getDocs(
      collection(db, `users/${documentID}/apps`)
    );
    let counter = 0;
    let tempArray = [];
    querySnapshotTemp.forEach((doc) => {
      let obj = doc.data();
      obj.appKey = doc.id;
      counter += 1;
      tempArray.push(obj);
    });
    setAppList(tempArray);
    const user = doc(db, "users", localStorage.getItem("userDocumentID"));
    await updateDoc(user, {
      totalApps: counter,
    }).then(() => {
      currentUser["totalApps"] = counter;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setLoader(false);
    });
  };
  useEffect(() => {
    getData();
  }, [isDeleted]);

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
          <button onClick={() => onSubmit()}>
            {submitLoader ? (
              <div className="d-flex align-items-center">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="p-4 extra-pad">
        {isSuccessful && (
          <div
            className="alert alert-success d-flex align-items-center "
            role="alert"
          >
            <i
              className="bi bi-check-circle-fill"
              style={{ fontSize: "35px" }}
            ></i>
            <div className="ms-3">
              <div>Thank You 😄!</div>
              <div>Application Created Successfully !!!</div>
            </div>
          </div>
        )}
        {isError && (
          <div>
            <div
              className="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <i className="bi bi-exclamation-circle-free"></i>
              <div>An example danger alert with an icon</div>
            </div>
          </div>
        )}
        <div className="row g-0 p-0 align-items-center">
          <div className="col-3 text-start">
            <div className="input-group mb-3 border rounded">
              <span
                className="input-group-text bg-white border-0"
                id="basic-addon1"
              >
                <i className="bi bi-search"></i>
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
                <i className="bi bi-plus-lg"></i>
              </span>
            </button>
          </div>
        </div>

        <div className="row g-0 mt-4">
          <div className="col-sm-12">
            <div className="text-center rounded bg-white p-4">
              <div className="body-large-black fw-bold text-start">
                App list
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
                          <td className="subtitle-black response">
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
                            <DeleteApp
                              docId={item.appKey}
                              isDeleted={isDeleted}
                              setIsDeleted={setIsDeleted}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <NoAppFound />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppList;

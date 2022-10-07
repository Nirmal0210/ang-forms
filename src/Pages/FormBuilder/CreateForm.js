import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { convertIntoHTML } from "../../Config/Setting";
import { db } from "../../firebase";
import { elementType } from "./Consts";
import PropertyConfiguration from "./PropertyConfiguration";
const CreateForm = () => {
  const [formName, setFormName] = useState("Form1");
  const [currentFormData, setCurrentFormData] = useState([]);
  const [toolkitVisible, setToolkitVisible] = useState(false);
  const [toolItem, setToolItem] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const { state } = useLocation();
  const { appKey, appName, checkedValue } = state;
  // const [appKey, setAppKey] = useState(state.appKey);
  // const [appName, setAppName] = useState(state.appName);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(appKey, appName);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //Set form name function
  const onHandleChange = (value) => {
    setFormName(value);
  };

  //fucntion to add element in form
  const handleStop = (e, item) => {
    // document.addEventListener("", function (e) {
    //   if (e.target.id === "dropDiv") {
    setCurrentFormData([...currentFormData, convertIntoHTML(item)]);
    setToolkitVisible(true);
    setToolItem(item);
    //   }
    // });
  };

  const handleDrag = (e, item) => {};

  const removeItem = (i) => {
    const data = currentFormData.filter((item, index) => index !== i);
    setCurrentFormData(data);
  };
  const publishForm = async () => {
    let docData = {};
    const q = query(
      collection(db, "users"),
      where("uid", "==", currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    let userID = "";
    querySnapshot.forEach((doc) => {
      userID = doc.id;
    });
    if (checkedValue === "publishableForm") {
      const queryTemp = await getDocs(
        collection(db, "users/" + userID + "/publish")
      );
      queryTemp.forEach(async (document) => {
        console.log(document.id, document.data());
        if (document.id === appKey) {
          const getData = doc(db, "users/" + userID + "/publish", document.id);
          await updateDoc(getData, {
            ["formData"]: JSON.stringify(currentFormData),
          });
        }
      });
    } else {
      const queryTemp = await getDocs(
        collection(db, "users/" + userID + "/apps")
      );
      queryTemp.forEach(async (document) => {
        console.log(document.id, document.data());
        if (document.id === appKey) {
          const getData = doc(db, "users/" + userID + "/apps", document.id);
          await updateDoc(getData, {
            ["formData"]: JSON.stringify(currentFormData),
          });
        }
      });
      console.log(docData);
    }

    // await addDoc(collection(db, "users/" + currentUser.uid + "/apps"), docData)
    //   .then(() => {
    //     setIsSuccessful(true);
    //     setTimeout(() => {
    //       setIsSuccessful(false);
    //     }, 2000);
    //   })
    //   .catch((error) => {
    //     setIsError(true);
    //     setTimeout(() => {
    //       setIsError(false);
    //     }, 2000);
    //   });
  };
  useEffect(() => {
    document.getElementById("main").style.marginLeft = "0px";
  }, []);

  return (
    <div className="row pt-5 g-0">
      {/* <div className="subtitle-black fw-bold">Layout elements</div> */}
      {/* <div className="subtitle-black fw-bold">Text elements</div> */}
      {/* <div className="subtitle-black fw-bold">Date elements</div> */}
      {/* <div className="subtitle-black fw-bold">Multi elements</div> */}
      {/* <div className="subtitle-black fw-bold">Media elements</div> */}
      {/* <div className="subtitle-black fw-bold">Advanced elements</div> */}
      <div className="col-3 bg-white p-3">
        <div className="d-flex justify-content-evenly">
          <div className="response">
            Fields
            <hr style={{ height: "3px" }} className="my-0" />
          </div>
          <div className="response">
            Forms
            <hr style={{ height: "3px" }} className="my-0" />
          </div>
        </div>
        <hr />

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
            placeholder="Search elements"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="row align-items-center">
          {elementType.map((item) => (
            <div className="col-6 my-1">
              <div
                className="fb-elements rounded d-flex align-items-center p-2"
                onClick={(e) => handleStop(e, item)}
              >
                <i className={`bi ${item.icon} fb-icons`}></i>
                <p className="subtitle-black ms-2 fb-text">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-9 bg p-3">
        <div className="row g-1 p-2">
          <div className="col-9 fw-bold heading-black">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Form Name
              </label>
              <div className="d-flex align-items-center">
                <input
                  readOnly={!isEditable}
                  type="text"
                  className="form-control"
                  value={formName}
                  onChange={(e) => onHandleChange(e.target.value)}
                  placeholder="Enter Form Name"
                />
                <button
                  className="button-pencil"
                  onClick={() => setIsEditable(!isEditable)}
                >
                  {isEditable ? (
                    <i className="bi bi-check-lg"></i>
                  ) : (
                    <i className="bi bi-pencil-fill"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <button
              className="publish-btn btn"
              disabled={!currentFormData.length > 0}
              type="button"
              onClick={() => publishForm()}
            >
              Publish
            </button>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-9 p-3">
            <div className="rounded bg-white p-4" id="dropDiv">
              {currentFormData.length <= 0 ? (
                <>
                  <div className="fb-bg-circle mx-auto d-flex align-items-center justify-content-center">
                    <img
                      src={require("../../Assets/Images/fb-nodata.png")}
                      width="230px"
                      height="180px"
                      alt="nodata"
                    />
                  </div>
                  <p className="body-black mt-3 fw-bold">
                    Drag and drop elements from the left toolbar to get started.
                  </p>
                </>
              ) : (
                currentFormData.map((item, index) => (
                  <div key={index} className="mb-1">
                    <div className="d-flex justify-content-end">
                      <button
                        className="button-cross"
                        onClick={() => removeItem(index)}
                      >
                        <i className="bi bi-x"></i>
                      </button>
                    </div>
                    {item.element}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="col-3 p-3">
            <div className="bg-white rounded">Name of the form</div>
            {toolkitVisible && (
              <div>
                <PropertyConfiguration toolItem={toolItem} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;

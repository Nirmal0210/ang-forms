import React, { useState } from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { convertElement } from "../../Config/Setting";
import { db } from "../../firebase";
import { elementType } from "./Consts";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import PropertyConfiguration from "./PropertyConfiguration";
const CreateForm = () => {
  const [formName, setFormName] = useState("Form1");
  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(false);
  const [currentFormData, setCurrentFormData] = useState([]);
  const [toolkitVisible, setToolkitVisible] = useState(false);
  const [toolItem, setToolItem] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const { state } = useLocation();
  const { appKey, appName, checkedValue } = state;
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //Set form name function
  const onHandleChange = (value) => {
    setFormName(value);
  };

  //fucntion to add element in form
  const handleStop = (e, item) => {
    // document.addEventListener("", function (e) {
    //   if (e.target.id === "dropDiv") {
    setCurrentFormData([...currentFormData, convertElement(item)]);
    setToolkitVisible(true);
    setToolItem(item);
    //   }
    // });
  };

  // const handleDrag = (e, item) => {};

  const removeItem = (i) => {
    const data = currentFormData.filter((item, index) => index !== i);
    setCurrentFormData(data);
  };
  const publishForm = async () => {
    let userID = localStorage.getItem("userDocumentID");
    if (userID) {
      if (checkedValue === "publishableForm") {
        let docRef = doc(collection(db, `users/${userID}/publish`));
        await setDoc(docRef, {
          formJSON: JSON.stringify(currentFormData[0]),
        });
        const getData = doc(db, `users/${userID}/publish/${docRef.id}`);
        await updateDoc(getData, {
          formId: docRef.id,
          uId: currentUser.uid,
          impressions: 0,
          responses: 0,
          formName: formName,
          formUrl: `http://localhost:3000/users/${userID}/publish/${docRef.id}`,
        })
          .then(() => {
            setUrl(
              `http://localhost:3000/users/${userID}/publish/${docRef.id}`
            );
            setIsSuccessful(true);
          })
          .catch(() => {
            setIsError(true);
            setTimeout(() => {
              setIsError(false);
            }, 2000);
          });
      } else {
        let docRef = doc(
          collection(db, `users/${userID}/apps/${appKey}/forms`)
        );
        await setDoc(docRef, {
          formJSON: JSON.stringify(currentFormData[0]),
        });
        const getData = doc(
          db,
          `users/${userID}/apps/${appKey}/forms/${docRef.id}`
        );
        await updateDoc(getData, {
          formId: docRef.id,
          uId: currentUser.uid,
          appId: appKey,
          formName: formName,
          appName: appName,
          impressions: 0,
          responses: 0,
          formUrl: `http://localhost:3000/users/${userID}/apps/${appKey}/forms/${docRef.id}`,
        })
          .then(() => {
            setUrl(
              `http://localhost:3000/users/${userID}/apps/${appKey}/forms/${docRef.id}`
            );
            setIsSuccessful(true);
          })
          .catch(() => {
            setIsError(true);
            setTimeout(() => {
              setIsError(false);
            }, 2000);
          });
      }
    }
  };
  useEffect(() => {
    document.getElementById("main").style.marginLeft = "0px";
  }, []);

  return (
    <div className="row pt-5 g-0">
      {isSuccessful && (
        <div
          className="alert alert-success d-flex justify-content-between"
          role="alert"
        >
          <div className=" d-flex align-items-center">
            <i
              className="bi bi-check-circle-fill"
              style={{ fontSize: "35px" }}
            ></i>
            <div className="ms-3">
              <div>Thank You 😄!</div>
              <div>Form Published Successfully !!!</div>
              <div>
                {url ? url : "Not found"}
                <span className="ms-3">
                  <button
                    className="btn rounded bg-white"
                    onClick={() => {
                      setToggle(true);
                      navigator.clipboard.writeText(url);
                    }}
                  >
                    {!toggle ? (
                      <>
                        Copy Link <i className="bi bi-clipboard ms-1"></i>
                      </>
                    ) : (
                      "Copied !"
                    )}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <i
            className="bi bi-x-lg text-end"
            onClick={() => setIsSuccessful(false)}
          ></i>
        </div>
      )}
      {isError && (
        <div>
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <i className="bi bi-exclamation-circle-free"></i>
            <div>Oops !! Something went wrong !!</div>
          </div>
        </div>
      )}
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
          {elementType.map((item, index) => (
            <div className="col-6 my-1" key={index}>
              <div
                className="fb-elements rounded d-flex align-items-center p-2"
                onClick={(e) => handleStop(e, item)}
              >
                <i className={`bi ${item?.icon} fb-icons`}></i>
                <p className="subtitle-black ms-2 fb-text">{item?.name}</p>
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
              disabled={currentFormData.length < 1}
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

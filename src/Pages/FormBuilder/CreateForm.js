import React, { useState } from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { convertIntoHTML } from "../../Config/Setting";
import { elementType } from "./Consts";
import PropertyConfiguration from "./PropertyConfiguration";
const CreateForm = () => {
  const [currentFormData, setCurrentFormData] = useState([]);
  const [toolkitVisible, setToolkitVisible] = useState(false);
  const [toolItem, setToolItem] = useState();

  const handleStop = (e, item) => {
    document.addEventListener("", function (e) {
      if (e.target.id === "dropDiv") {
        setCurrentFormData([...currentFormData, convertIntoHTML(item)]);
        setToolkitVisible(true);
        setToolItem(item);
      }
    });
  };

  const handleDrag = (e, item) => {};

  const removeItem = (index) => {
    // setToolkitVisible(false);
    // setToolItem(null);
    // if (currentFormData.length <= 1) {
    //   setCurrentFormData([]);
    // } else {
    currentFormData.splice(index, 1);
    setCurrentFormData(currentFormData);
    // }
  };
  useEffect(() => {
    // document.getElementById("mySidebar").style.width = "75px";
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
                onDrag={(e) => handleDrag(e, item)}
                onDragEnd={(e) => handleStop(item)}
              >
                <i className={`bi ${item.icon} fb-icons`}></i>
                <p className="subtitle-black ms-2 fb-text">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-9 bg p-3">
        <div className="row">
          <div className="col-9 fw-bold heading-black">Name of the form</div>
          <div className="col-3 d-flex justify-content-center">
            <button className="publish-btn">Publish</button>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-9 p-3">
            <div className="text-center rounded bg-white p-4" id="dropDiv">
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
                  <div>
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

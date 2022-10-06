import React from "react";
import Popup from "reactjs-popup";
const ActionPopup = () => {
  return (
    <div>
      <Popup
        trigger={
          <button className="bg-white border-0">
            <i className="bi bi-three-dots"></i>
          </button>
        }
        position="left center"
      >
        {() => (
          <div>
            {/* <div className="d-flex align-items-center popup-hover">
              <span className="mx-2">
                <BsFillEyeFill />
              </span>
              <p className="body-black">View Form</p>
            </div>
            <div className="d-flex align-items-center popup-hover">
              <span className="mx-2">
                <HiPencil />
              </span>
              <p className="body-black">Edit</p>
            </div>
            <div className="d-flex align-items-center popup-hover">
              <span className="mx-2">
                <IoMdSettings />
              </span>
              <p className="body-black">Settings</p>
            </div>
            <hr className="my-2 px-1" />
            <div className="d-flex align-items-center" style={{ color: "red" }}>
              <span className="mx-2">
                <IoMdTrash />
              </span>
              <p style={{ color: "red", fontSize: "14px" }}>Delete</p>
            </div> */}
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ActionPopup;

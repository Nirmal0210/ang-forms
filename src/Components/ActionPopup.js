import React from "react";
import Popup from "reactjs-popup";
const ActionPopup = () => {
  return (
    <div>
      <Popup
        trigger={
          <button className="border-0" style={{ background: "transparent" }}>
            <i style={{ fontSize: "15px" }} className="bi bi-trash3-fill"></i>
          </button>
        }
        position="left center"
      >
        {() => (
          <div className="p-2">
            <p className="body-large-black fw-bold text-center mb-3">
              Are you sure ?
            </p>
            <div className="d-flex justify-content-between">
              <button className="confirmClosebtn">Close</button>
              <button className="delBtn">Delete</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ActionPopup;

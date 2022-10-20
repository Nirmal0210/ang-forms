import React from "react";
import Popup from "reactjs-popup";

const NotificationPopup = () => {
  return (
    <div>
      <Popup
        trigger={
          <button
            className="nav-link border-0 mb-0"
            style={{ background: "transparent" }}
          >
            <i style={{ fontSize: "15px" }} className="bi bi-bell-fill"></i>
          </button>
        }
        position="bottom right"
      >
        {() => (
          <div className="p-2 mt-3" style={{ zIndex: "1000" }}>
            <div className="d-flex row p-2">
              <div className="notification-userbox-sm col-2">
                <p className="heading-white fw-bold d-flex align-items-center">
                  A
                </p>
              </div>
              <div className="col-10">
                <div className="body-black text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <p className="subtitle-black fw-bold my-2">6 days ago</p>
                <hr className="mt-3 mb-4" />
              </div>
            </div>
            <div className="d-flex row p-2">
              <div className="notification-userbox-sm col-2">
                <p className="heading-white fw-bold d-flex align-items-center">
                  A
                </p>
              </div>
              <div className="col-10">
                <div className="body-black text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <p className="subtitle-black fw-bold my-2">6 days ago</p>
                <hr className="mt-3 mb-4" />
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default NotificationPopup;

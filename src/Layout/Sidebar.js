import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  const openNav = () => {
    document.getElementById("main").style.marginLeft = "190px";
    document.getElementById("mySidebar").style.width = "190px";
    setToggle(!toggle);
  };

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "75px";
    document.getElementById("main").style.marginLeft = "75px";
    setToggle(!toggle);
  };

  useEffect(() => {
    if (true) {
      document.getElementById("main").style.marginLeft = "190px";
      document.getElementById("mySidebar").style.width = "190px";
    }
  }, []);

  return (
    <>
      <div id="mySidebar" className="sidebar">
        <div className="d-flex justify-content-center align-items-center my-3">
          <button
            className="closebtn"
            onClick={() => {
              !toggle ? closeNav() : openNav();
            }}
          >
            Logo{" "}
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => navigate("/formdialog")}
            className={`${!toggle ? "sidebar-btn" : "sidebar-btn-collapse"}`}
          >
            {!toggle ? (
              <div>
                Create Form{" "}
                <i
                  className="bi bi-plus-lg"
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                  }}
                ></i>
              </div>
            ) : (
              <i
                className="bi bi-plus"
                style={{
                  fontSize: "20px",
                }}
              ></i>
            )}
          </button>
        </div>
        <div>
          <NavLink
            activeclassname="active"
            to="/dashboard"
            className="d-flex align-items-center mt-3"
          >
            <i className="bi bi-columns me-3" />
            {!toggle && <p className="body-black">Dashboard</p>}
          </NavLink>
          <NavLink
            className="d-flex align-items-center mt-1"
            onClick={() => setIsDrop(!isDrop)}
          >
            <i
              style={{ fontSize: "19px" }}
              className="me-3 bi bi-clipboard-check text-dark"
            ></i>
            {!toggle && (
              <div className="body-black">
                Forms{" "}
                <span>
                  {isDrop ? (
                    <i className="bi bi-chevron-up ms-1"></i>
                  ) : (
                    <i className="bi bi-chevron-down ms-1"></i>
                  )}
                </span>
              </div>
            )}
          </NavLink>
          {isDrop && (
            <>
              <NavLink
                to="/appformlist"
                activeclassname="active"
                className="d-flex align-items-center mt-1 ms-2"
              >
                <i
                  style={{ fontSize: "19px" }}
                  className="me-2 bi bi-app-indicator"
                ></i>
                {!toggle && <p className="subtitle-black ms-1">App Forms</p>}
              </NavLink>
              <NavLink
                to="/formlinklist"
                activeclassname="active"
                className="d-flex align-items-center mt-1 ms-2"
              >
                <i
                  style={{ fontSize: "19px" }}
                  className="me-2 bi bi-ui-radios"
                ></i>
                {!toggle && <p className="subtitle-black ms-1">Form Links</p>}
              </NavLink>
            </>
          )}
          <NavLink
            to="/applist"
            activeclassname="active"
            className="d-flex align-items-center mt-1"
          >
            <i className="me-3 bi bi-joystick"></i>
            {!toggle && <p className="body-black">My Apps</p>}
          </NavLink>
          <NavLink
            to="/responses"
            activeclassname="active"
            className="d-flex align-items-center mt-1"
          >
            <i className="me-3 bi bi-chat-left-text"></i>
            {!toggle && <p className="body-black">Responses</p>}
          </NavLink>
          <NavLink
            to="/editprofile"
            activeclassname="active"
            className="d-flex align-items-center mt-1"
          >
            <i className="me-3 bi bi-person"></i>
            {!toggle && <p className="body-black">Profile</p>}
          </NavLink>
          {/* <NavLink
            to="/settings"
            activeclassname="active"
            className="d-flex align-items-center mt-1"
          >
            <i className="me-3 bi bi-gear"></i>
            {!toggle && <p className="body-black">Settings</p>}
          </NavLink> */}
        </div>
        {/* {!toggle && (
          <div className="d-flex justify-content-center mt-1">
            <div className="mobile-box text-center p-2">
              <img src={require("../Assets/Images/mobile.png")} alt="mobile" />
              <p className="my-2 sm-white">Download the mobile app</p>
              <div className="d-flex justify-content-evenly">
                <div className="dot-white">
                  <i className="bi bi-google-play" style={{ color: "black" }} />
                </div>
                <div className="dot-white">
                  <i className="bi bi-apple" style={{ color: "black" }} />
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Sidebar;

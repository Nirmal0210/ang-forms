import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import RandomBackground from "../Components/RandomBackground";
import NotificationPopup from "../Components/NotificationPopup";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dateTime, setDateTime] = useState();
  const [showNotification, setShowNotification] = useState(false);
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const logout = () => {
    auth.signOut();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userDocumentID");
    navigate("/");
  };

  useEffect(() => {
    function getDataTime() {
      const formattedDate = new Date().toLocaleDateString(
        {},
        { timeZone: "UTC", month: "long", day: "2-digit", year: "numeric" }
      );
      setDateTime(formattedDate);
    }
    getDataTime();
  }, []);

  return (
    currentUser && (
      <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
          {location.pathname === "/createform" && (
            <div
              className="d-flex justify-content-center align-items-center mx-auto"
              onClick={() => navigate(-1)}
            >
              <div className="response">
                <i
                  className="bi bi-arrow-left"
                  style={{ fontSize: "20px !important" }}
                ></i>
              </div>
              <div className="ms-2">
                <p className="body-large-black response">Back to last page</p>
              </div>
            </div>
          )}
          <div
            className="justify-content-end collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link">{dateTime && dateTime}</div>
              </li>

              <li className="nav-item ms-3">
                {/* <div
                  className="nav-link"
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <i className="bi bi-bell-fill"></i>
                </div> */}
                <NotificationPopup />
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                {currentUser && (
                  <RandomBackground
                    pName={currentUser?.name}
                    pUrl={currentUser?.profile}
                    pClass={"small"}
                  />
                )}
                <div className="nav-link" aria-disabled="true">
                  <p className="body-large-black">{currentUser?.name}</p>
                </div>
                <i className="bi bi-chevron-down" onClick={() => logout()}></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  );
};

export default Header;

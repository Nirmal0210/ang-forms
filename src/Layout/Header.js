import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import RandomBackground from "../Components/RandomBackground";
import NotificationPopup from "../Components/NotificationPopup";

const Header = () => {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const navigate = useNavigate();
  const location = useLocation();
  const [dateTime, setDateTime] = useState();

  const logout = () => {
    auth.signOut();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userDocumentID");
    navigate("/login");
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
              <div className="btn-group dropstart">
                <button type="button" className="btn btn-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-chevron-down"></i>
                </button>
                <ul className="dropdown-menu">
                  <button type="button" className="btn btn-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <p><i className="bi bi-power me-2"></i>Logout</p>
                  </button>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to logout ?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-cancel" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn-logout" data-bs-dismiss="modal" onClick={() => logout()}>Logout</button>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
};

export default Header;

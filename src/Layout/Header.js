import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import RandomBackground from "../Components/RandomBackground";
import { auth } from "../firebase";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const logout = () => {
    auth.signOut();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userDocumentID");
    navigate("/login");
  };

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
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  aria-current="page"
                  href="#"
                >
                  12th January, 2022
                </NavLink>
              </li>

              <li className="nav-item ms-3">
                <NavLink className="nav-link" href="#">
                  <i className="bi bi-bell-fill"></i>
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                {currentUser && (
                  <RandomBackground
                    pName={currentUser?.name}
                    pUrl={currentUser?.profile}
                    pClass={"small"}
                  />
                )}
                <NavLink className="nav-link" href="#" aria-disabled="true">
                  <p className="body-large-black">{currentUser?.name}</p>
                </NavLink>
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

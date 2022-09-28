import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft, BsFillBellFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand navbar-light">
      <div className="container-fluid">
        {location.pathname === "/createform" && (
          <div
            className="d-flex justify-content-center align-items-center mx-auto"
            onClick={() => navigate(-1)}
          >
            <div className="response">
              <BsArrowLeft style={{ fontSize: "20px !important" }} />
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
                <BsFillBellFill />
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center ms-3">
              <img
                src={require("./../Assets/Images/user-icon.png")}
                width="25px"
                height="25px"
                alt="user-icon"
              />
              <NavLink className="nav-link" href="#" aria-disabled="true">
                <p className="body-large-black">Profile Name</p>
              </NavLink>
              <MdOutlineKeyboardArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

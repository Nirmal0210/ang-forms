import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
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

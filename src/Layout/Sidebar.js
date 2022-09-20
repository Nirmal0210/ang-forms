import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/ai";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
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
            onClick={() => navigate("/createform")}
            className={`${!toggle ? "sidebar-btn" : "sidebar-btn-collapse"}`}
          >
            {!toggle ? (
              <div>
                Create Form{" "}
                <AiOutlinePlus
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                  }}
                />
              </div>
            ) : (
              <AiOutlinePlus
                style={{
                  fontSize: "20px",
                }}
              />
            )}
          </button>
        </div>
        <div>
          <a href="#" className="d-flex align-items-center mt-4">
            <MdDashboard className="me-3" />
            {!toggle && <div className="body-black">Dashboard</div>}
          </a>
          <a href="#" className="d-flex align-items-center mt-3">
            <MdDashboard className="me-3" />
            {!toggle && <p className="body-black">Forms</p>}
          </a>
          <a href="#" className="d-flex align-items-center mt-3">
            <MdDashboard className="me-3" />
            {!toggle && <p className="body-black">My Apps</p>}
          </a>
          <a href="#" className="d-flex align-items-center mt-3">
            <MdDashboard className="me-3" />
            {!toggle && <p className="body-black">Responses</p>}
          </a>
          <a href="#" className="d-flex align-items-center mt-3">
            <AiOutlineUser className="me-3" />
            {!toggle && <p className="body-black">Profile</p>}
          </a>
          <a href="#" className="d-flex align-items-center mt-3">
            <MdDashboard className="me-3" />
            {!toggle && <p className="body-black">Settings</p>}
          </a>
        </div>
        {!toggle && (
          <div className="d-flex justify-content-center mt-3">
            <div className="mobile-box text-center p-2">
              <img src={require("../Assets/Images/mobile.png")} />
              <p className="my-2 sm-white">Download the mobile app</p>
              <div className="d-flex justify-content-evenly">
                <div className="dot-white">
                  <IoLogoGooglePlaystore style={{ color: "black" }} />
                </div>
                <div className="dot-white">
                  <IoLogoApple style={{ color: "black" }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;

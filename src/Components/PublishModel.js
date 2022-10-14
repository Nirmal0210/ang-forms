import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PublishModel = ({ url }) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className="p-3 text-center">
          <i
            className="bi bi-check-circle-fill"
            style={{ fontSize: "50px", color: "#2374AB" }}
          ></i>
          <div className="ms-3">
            <div className="heading-black fw-bold">Thank You 😄!</div>
            <div className="body-large-black">
              Form Published Successfully !!!
            </div>
            <div className="mt-2">
              {url ? (
                <p className="response text-url-wrap">{url}</p>
              ) : (
                "Not found"
              )}
              <button
                className="btn rounded bg-white border mt-3"
                onClick={() => {
                  setToggle(true);
                  navigator.clipboard.writeText(url);
                }}
              >
                {!toggle ? (
                  <>
                    Copy Link <i className="bi bi-clipboard ms-1"></i>
                  </>
                ) : (
                  "Copied !"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishModel;

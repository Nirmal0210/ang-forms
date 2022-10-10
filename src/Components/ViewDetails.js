import React from "react";
import Popup from "reactjs-popup";
const ViewDetails = ({ data }) => {
  let userId = localStorage.getItem("userDocumentID");
  const copyText = (str) => {
    navigator.clipboard.writeText(str);
  };
  return (
    <div>
      <Popup
        trigger={
          <button className="bg-white border-0">
            <i style={{ fontSize: "15px" }} className="bi bi-eye-fill"></i>
          </button>
        }
        position="bottom center"
      >
        {() => (
          <div className="p-2">
            {userId && (
              <p className="subtitle-black text-center mb-3">
                <b>User Doc ID : </b>
                {userId}
                <i
                  className="bi bi-clipboard mx-2"
                  style={{ fontSize: "15px" }}
                  onClick={() => copyText(userId)}
                ></i>
              </p>
            )}
            {data?.appKey && (
              <p className="subtitle-black text-center mb-3">
                <b>App Key : </b>
                {data.appKey}
                <i
                  className="bi bi-clipboard mx-2"
                  style={{ fontSize: "15px" }}
                  onClick={() => copyText(data.appKey)}
                ></i>
              </p>
            )}
            {data?.appId && (
              <p className="subtitle-black text-center mb-3">
                <b>App ID : </b>
                {data.appId}
                <i
                  className="bi bi-clipboard mx-2"
                  style={{ fontSize: "15px" }}
                  onClick={() => copyText(data.appId)}
                ></i>
              </p>
            )}
            {data?.formId && (
              <p className="subtitle-black text-center mb-3">
                <b>Form ID : </b>
                {data.formId}
                <i
                  className="bi bi-clipboard mx-2"
                  style={{ fontSize: "15px" }}
                  onClick={() => copyText(data.formId)}
                ></i>
              </p>
            )}
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ViewDetails;

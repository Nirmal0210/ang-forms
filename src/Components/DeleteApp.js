import React from "react";
import Popup from "reactjs-popup";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
const DeleteApp = ({ docId, isDeleted, setIsDeleted }) => {
  const deleteDocument = async () => {
    let userDocId = localStorage.getItem("userDocumentID");
    await deleteDoc(doc(db, `users/${userDocId}/apps`, docId))
      .then(() => {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        currentUser["totalApps"] = currentUser["totalApps"] - 1;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      })
      .then(() => {
        setIsDeleted(!isDeleted);
      });
  };
  return (
    <div>
      <Popup
        trigger={
          <button className="border-0" style={{ background: "transparent" }}>
            <i style={{ fontSize: "15px" }} className="bi bi-trash3-fill"></i>
          </button>
        }
        position="left center"
      >
        {(close) => (
          <div className="p-2">
            <p className="body-large-black fw-bold text-center mb-1">
              Are you sure ?
            </p>
            <p className="text-center mb-2">
              Forms linked with this App will be deleted permanently!!!
            </p>
            <div className="d-flex justify-content-center">
              <button className="confirmClosebtn mx-1">Close</button>
              <button
                className="delBtn mx-1"
                onClick={() => {
                  deleteDocument();
                  close();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default DeleteApp;

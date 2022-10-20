import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

const FormDialog = () => {
  const [appName, setAppName] = useState("");
  const [appKey, setAppKey] = useState("");
  const [appList, setAppList] = useState([]);
  const [checkedValue, setCheckedValue] = useState("appWebsiteForm");
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const setValues = (item) => {
    let temp = item?.split(" ");
    setAppKey(temp[0]);
    setAppName(temp[1]);
  };

  const goToPage = () => {
    if (checkedValue === "appWebsiteForm") {
      if (appKey) {
        navigate("/createform", {
          state: { appKey, appName, checkedValue },
        });
      } else {
        alert("Select Atleast One App");
      }
    } else {
      navigate("/createform", {
        state: { checkedValue },
      });
    }
  };

  const getData = async () => {
    setAppList([]);
    const q = query(
      collection(db, "users"),
      where("uid", "==", currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    let userID = "";
    querySnapshot.forEach((doc) => {
      userID = doc.id;
    });
    const queryTemp = await getDocs(collection(db, `users/${userID}/apps`));
    let tempArray = [];
    queryTemp.forEach((doc) => {
      let obj = doc.data();
      obj.appKey = doc.id;
      tempArray.push(obj);
    });
    setAppList(tempArray);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4 extra-pad">
      <div className="mt-4">
        <div className="text-center rounded bg-white p-4">
          <div className="body-large-black fw-bold text-start">Questions</div>
          <div className="d-flex justify-content-center mb-3">
            <div
              className="d-flex align-items-center choice-box"
              style={{
                border:
                  checkedValue == "appWebsiteForm"
                    ? "1px solid #2374AB"
                    : "1px solid gray",
              }}
              onClick={() => setCheckedValue("appWebsiteForm")}
            >
              <div className="choice-sub-box">
                <p className="body-large-black fw-bold">App / Website Form</p>
                <p className="subtitle-black">This function will create form</p>
              </div>
              <div className="text-start ms-2">
                <input
                  className="form-check-input"
                  checked={checkedValue === "appWebsiteForm"}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
              </div>
            </div>
            <div
              className="d-flex align-items-center choice-box"
              style={{
                border:
                  checkedValue === "publishableForm"
                    ? "1px solid #2374AB"
                    : "1px solid gray",
              }}
              onClick={() => setCheckedValue("publishableForm")}
            >
              <div className="choice-sub-box">
                <p className="body-large-black fw-bold">
                  Publishable Form Link
                </p>
                <p className="subtitle-black">This function will create form</p>
              </div>
              <div className="text-start ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={checkedValue === "publishableForm"}
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </div>
            </div>
          </div>
          {checkedValue === "appWebsiteForm" && (
            <div className="d-flex justify-content-center mb-3">
              <div style={{ width: "50%" }}>
                <select
                  onChange={(e) => {
                    setValues(e.target.value);
                  }}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue={0}>Select AppKey</option>
                  {appList.length > 0 &&
                    appList.map((item, index) => (
                      <option
                        value={item.appKey + " " + item.appName}
                        key={index}
                      >
                        {item.appName + "     " + "(" + item.appKey + ")"}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          )}
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "13rem", marginBottom: "4rem" }}
          >
            <button className="download-btn" onClick={() => goToPage()}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDialog;

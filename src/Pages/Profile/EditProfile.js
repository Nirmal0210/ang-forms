import React, { useState, useEffect } from "react";
import ActionPopup from "../../Components/DeleteApp";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "firebase/auth";

const EditProfile = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const matchPassword = (user) => {
    if (newPassword === confirmPassword) {
      return true;
    } else {
      alert("New Password doesn't match with ConfirmPassword");
      return false;
    }
  };
  //Update User
  const updateUser = async () => {
    const userID = localStorage.getItem("userDocumentID");
    const docRef = doc(db, "users", userID);

    await updateDoc(docRef, {
      name: currentUser.name,
      mobNo: currentUser.mobNo,
    }).then(() => {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    });
    setIsUpdate(!isUpdate);
    navigate("/dashboard");
  };

  const changePassword = () => {
    let validate = matchPassword();
    if (validate) {
      const user = auth.currentUser;
      updatePassword(user, newPassword)
        .then(() => {
          alert("Updated successful.");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const onHandleChange = (e) => {
    const title = e.target.name;
    const value = e.target.value;
    currentUser[title] = value;
    setCurrentUser({ ...currentUser });
  };

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, [isUpdate]);

  return (
    <div className="container extra-pad px-4">
      <div className="row">
        <div className="col-12">
          <p className="fw-bold heading-black text-start">
            Account Informations
          </p>
        </div>
      </div>
      <div className="mt-3">
        <Tabs>
          <TabList>
            <Tab>
              <div className="d-flex align-items-center">
                <i className="tab-icon bi bi-person-circle" />
                <p className="subtitle-black ms-1">Manage profile</p>
              </div>
              <i className="bi bi-chevron-right" />
            </Tab>
            <Tab>
              <div className="d-flex align-items-center">
                <i className="tab-icon bi bi-arrow-repeat" />
                <p className="subtitle-black ms-1">Manage subscription</p>
              </div>
              <i className="bi bi-chevron-right" />
            </Tab>
            <Tab>
              <div className="d-flex align-items-center">
                <i className="tab-icon bi bi-puzzle" />
                <p className="subtitle-black ms-1">Manage Add ons</p>
              </div>
              <i className="bi bi-chevron-right" />
            </Tab>
            <Tab>
              <div className="d-flex align-items-center">
                <i className="bi bi-wallet2 tab-icon"></i>
                <p className="subtitle-black ms-1">
                  Manage Payment methods
                </p>
              </div>
              <i className="bi bi-chevron-right" />
            </Tab>
            {/* {currentUser && currentUser.authProvider === "local" && ( */}
            <Tab>
              <div className="d-flex align-items-center">
                <i className="bi bi-key tab-icon"></i>
                <p className="subtitle-black ms-1">Change Password</p>
              </div>
              <i className="bi bi-chevron-right" />
            </Tab>
            {/* )} */}
          </TabList>

          <TabPanel>
            <div className="panel-content">
              <div className="row">
                <div className="col-6">
                  <p className="body-large-black fw-bold text-start">
                    Profile Information
                  </p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <button className="publish-btn" onClick={() => updateUser()}>
                    Save
                  </button>
                </div>
              </div>

              <div className="mt-2">
                <img
                  className="mask1"
                  src={
                    currentUser.profile
                      ? currentUser.profile
                      : require("../../Assets/Images/user-icon.png")
                  }
                  height={"90px"}
                  width={"90px"}
                  alt="response"
                />
                {/* <label className="custom-file-upload">
                  <input
                    type="file"
                    onChange={(e) => getBase64(e.target.files[0])}
                  />
                  <i className="bi bi-pencil"></i>
                </label> */}
              </div>
              <div className="mt-2">
                <form className="row">
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={currentUser?.name}
                      onChange={onHandleChange}
                      name="name"
                      className="form-control form-control-manual form-control-sm"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={currentUser?.mobNo}
                      name="mobNo"
                      onChange={onHandleChange}
                      className="form-control form-control-manual form-control-sm"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      Email ID
                    </label>
                    <input
                      type="email"
                      value={currentUser?.email}
                      name="email"
                      readOnly
                      className="form-control form-control-manual form-control-sm"
                    />
                  </div>
                </form>
              </div>
              <div className="mt-2">
                <p className="body-large-black text-start fw-bold">
                  Linked Social Accounts
                </p>
              </div>
              <div className="mt-2 d-flex align-items-center">
                {currentUser && currentUser.authProvider !== "google" && (
                  <div className="social-media-circle mx-1">
                    <FcGoogle className="icon" />
                  </div>
                )}
                {currentUser && currentUser.authProvider !== "github" && (
                  <div className="social-media-circle mx-1">
                    <BsGithub className="icon" />
                  </div>
                )}
                <div>
                  <p className="response subtitle-black mx-2">
                    Link more social accounts
                  </p>
                </div>
              </div>
              {!auth.currentUser?.emailVerified && (
                <div className="row g-0 my-3">
                  <button
                    className="download-btn"
                    onClick={() => {
                      sendEmailVerification(auth.currentUser);
                      alert("Mail has been set successfully");
                    }}
                  >
                    Verify Email
                  </button>
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <p className="body-large-black fw-bold text-start">
                Subscription Information
              </p>
              <p className="body-black my-1">
                Simple transparent pricing, No hidden costs
              </p>
              <div className="row mt-3">
                <div className="col-6 col-lg-6">
                  <div className="subscription-box">
                    <p className="fw-bold mb-3">Plan Benefits</p>
                    <div className="form-check checkbox-circle-one mb-3">
                      <label className="form-check-label body-black fw-bold">
                        Benefit 1
                      </label>
                      <input
                        className="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="form-check checkbox-circle-one mb-3">
                      <label className="form-check-label body-black fw-bold">
                        Benefit 2
                      </label>
                      <input
                        className="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="form-check checkbox-circle-one mb-3">
                      <label className="form-check-label body-black fw-bold">
                        Benefit 3
                      </label>
                      <input
                        className="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="form-check checkbox-circle-one mb-3">
                      <label className="form-check-label body-black fw-bold">
                        Benefit 4
                      </label>
                      <input
                        className="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="form-check checkbox-circle-one mb-3">
                      <label className="form-check-label body-black fw-bold">
                        Benefit 5
                      </label>
                      <input
                        className="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-6">
                  <div className="subscription-box">
                    <div className="form-check-box mb-3">
                      <div className="form-check d-flex align-items-center">
                        <input
                          className="form-check-input p-2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <div className="mx-3">
                          <label
                            className="form-check-label w-100"
                            htmlFor="flexRadioDefault2"
                          >
                            Basic
                          </label>
                          <p className="form-check-plan text-center me-0">
                            Current plan
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="heading-white">$50</p>
                          <p
                            style={{
                              color: "rgba(255,255,255,0.5)",
                              fontSize: "14px",
                            }}
                            className="mx-1"
                          >
                            /month
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check-box mb-3">
                      <div className="form-check d-flex align-items-center">
                        <input
                          className="form-check-input p-2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <div className="mx-3">
                          <label
                            className="form-check-label w-100"
                            htmlFor="flexRadioDefault2"
                          >
                            Basic
                          </label>
                          <p className="form-check-plan text-center me-0">
                            Current plan
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="heading-white">$50</p>
                          <p
                            style={{
                              color: "rgba(255,255,255,0.5)",
                              fontSize: "14px",
                            }}
                            className="mx-1"
                          >
                            /month
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="form-check-box mb-3">
                      <div className="form-check d-flex align-items-center">
                        <input
                          className="form-check-input p-2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <div className="mx-3">
                          <label
                            className="form-check-label w-100"
                            htmlFor="flexRadioDefault2"
                          >
                            Basic
                          </label>
                          <p className="form-check-plan text-center me-0">
                            Current plan
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="heading-white">$50</p>
                          <p
                            style={{
                              color: "rgba(255,255,255,0.5)",
                              fontSize: "14px",
                            }}
                            className="mx-1"
                          >
                            /month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h2>Any content 3</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <p className="body-large-black fw-bold text-start mb-4">
                Primary Payment Option
              </p>
              <div className="row">
                <div className="col-6 d-flex justify-content-around">
                  <div className="master-card">
                    <p className="mb-4">Mastercard.</p>
                    <p className="body-white mt-4">XXXX XXXX XXXX 5432</p>
                    <div className="row mt-2">
                      <div className="col-6">
                        <p className="body-white">Valid Thru</p>
                        <p className="subtitle-white">10/12</p>
                        <p className="body-white my-4">Cardholder Name</p>
                      </div>
                      <div className="col-6 text-end">
                        <p className="body-white">Debit Card</p>
                        <img
                          src={require("../../Assets/Images/Mastercard.png")}
                          width="70px"
                          height="50px"
                          className="mt-2"
                          alt="response"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="master-card-dotted">
                    <div className="add-card-circle">
                      <i
                        className="bi bi-plus-circle-fill"
                        style={{ color: "#2374AB", fontSize: "30px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-large-black fw-bold text-start mt-4">
                Saved Cards
              </p>
              <div
                className="mt-1 px-3 tableFixHeadCard"
                style={{ maxHeight: "150px" }}
              >
                <table className="table">
                  <thead
                    style={{
                      background: "rgba(169, 44, 35, 0.1)",
                    }}
                  >
                    <tr>
                      <th scope="col" className="body-black fw-bold">
                        Type
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Card number
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Expiry Date
                      </th>
                      <th scope="col" className="body-black fw-bold"></th>
                      <th scope="col" className="body-black fw-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="subtitle-black">
                        <img
                          src={require("../../Assets/Images/MastercardMini.png")}
                          alt="response"
                        />
                      </td>
                      <td className="subtitle-black">XXXX XXXX XXXX 0007</td>
                      <td className="subtitle-black">03/2023</td>
                      <td className="subtitle-black">
                        <div className="primary-box">
                          <p className="sm-white">Primary</p>
                        </div>
                      </td>
                      <td className="subtitle-black">
                        <ActionPopup />
                      </td>
                    </tr>
                    <tr>
                      <td className="subtitle-black">
                        <img
                          src={require("../../Assets/Images/MastercardMini.png")}
                          alt="response"
                        />
                      </td>
                      <td className="subtitle-black">XXXX XXXX XXXX 0007</td>
                      <td className="subtitle-black">03/2023</td>
                      <td className="subtitle-black">
                        <div className="primary-box">
                          <p className="sm-white">Primary</p>
                        </div>
                      </td>
                      <td className="subtitle-black">
                        <ActionPopup />
                      </td>
                    </tr>
                    <tr>
                      <td className="subtitle-black">
                        <img
                          src={require("../../Assets/Images/MastercardMini.png")}
                          alt="response"
                        />
                      </td>
                      <td className="subtitle-black">XXXX XXXX XXXX 0007</td>
                      <td className="subtitle-black">03/2023</td>
                      <td className="response subtitle-black">Make Primary</td>
                      <td className="subtitle-black">
                        <ActionPopup />
                      </td>
                    </tr>
                    <tr>
                      <td className="subtitle-black">
                        <img
                          src={require("../../Assets/Images/MastercardMini.png")}
                          alt="response"
                        />
                      </td>
                      <td className="subtitle-black">XXXX XXXX XXXX 0007</td>
                      <td className="subtitle-black">03/2023</td>
                      <td className="response subtitle-black">Make Primary</td>
                      <td className="subtitle-black">
                        <ActionPopup />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              {/* {currentUser && currentUser.authProvider === "local" && ( */}
              <div className="mt-3">
                <p className="body-large-black fw-bold text-start">
                  Change Password
                </p>
                <div className="row my-2 g-1">
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      New Password
                    </label>
                    <input
                      type="text"
                      name="newpassword"
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="form-control form-control-sm"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      name="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <div className="row g-0">
                  <button
                    className="download-btn"
                    onClick={() => changePassword()}
                  >
                    Change Password
                  </button>
                </div>
              </div>
              {/* )} */}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default EditProfile;

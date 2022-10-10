import React, { useState, useEffect } from "react";
import ActionPopup from "../../Components/ActionPopup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FcGoogle } from "react-icons/fc";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BsFillPlusCircleFill, BsGithub } from "react-icons/bs";
import { BiChevronRight, BiRefresh } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
const EditProfile = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const matchPassword = async () => {
    const q = query(
      collection(db, "users"),
      where("email", "==", currentUser.email)
    );
    const querySnapshot = await getDocs(q);
    let userID = "";
    querySnapshot.forEach((doc) => {
      userID = doc.id;
    });
    const user = doc(db, "users", userID);
    if (user.password === oldPassword) {
      if (newPassword === confirmPassword) {
        return true;
      } else {
        alert("New Password doesn't match with ConfirmPassword");
        return false;
      }
    } else {
      alert("Old Password doesn't match with Registerd Password");
      return false;
    }
  };
  //Update User
  const updateUser = async () => {
    // const validate = matchPassword();
    // if (validate) {
      
    const q = query(
      collection(db, "users"),
      where("uid", "==", currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    let userID = "";
    querySnapshot.forEach((doc) => {
      userID = doc.id;
    });
    const user = doc(db, "users", userID);
    await updateDoc(user, {
      name: currentUser.name,
      mobNo: currentUser.mobNo,
      // password: newPassword,
    });
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setIsUpdate(!isUpdate);
    //  }
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
        <div className="col-6">
          <p className="fw-bold heading-black text-start">
            Account Informations
          </p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <button className="publish-btn" onClick={() => updateUser()}>
            Save
          </button>
        </div>
      </div>
      <div className="mt-3">
        <Tabs>
          <TabList>
            <Tab>
              <div className="d-flex align-items-center">
                <CgProfile className="tab-icon" />
                <p className="subtitle-black response ms-1">Manage profile</p>
              </div>
              <BiChevronRight />
            </Tab>
            <Tab>
              <div className="d-flex align-items-center">
                <BiRefresh className="tab-icon" />
                <p className="subtitle-black response ms-1">
                  Manage subscription
                </p>
              </div>
              <BiChevronRight />
            </Tab>
            <Tab>
              <div className="d-flex align-items-center">
                <IoExtensionPuzzle className="tab-icon" />
                <p className="subtitle-black response ms-1">Manage Add ons</p>
              </div>
              <BiChevronRight />
            </Tab>
            <Tab>
              <div className="d-flex align-items-center">
                <IoExtensionPuzzle className="tab-icon" />
                <p className="subtitle-black response ms-1">
                  Manage Payment methods
                </p>
              </div>
              <BiChevronRight />
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panel-content">
              <p className="body-large-black fw-bold text-start">
                Profile Information
              </p>
              <div className="mt-2">
                <img
                  className="mask1"
                  src={currentUser.profile}
                  height={"90px"}
                  width={"90px"}
                  alt="response"
                />
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
              {currentUser && currentUser.authProvider === "local" && (
                <div className="mt-3">
                  <p className="body-large-black fw-bold text-start">
                    Change Password
                  </p>
                  <div className="row">
                    <div className="mb-3 col-6">
                      <label className="form-label mb-0 body-black">
                        Old Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="form-control form-control-sm"
                      />
                    </div>
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
                      <BsFillPlusCircleFill
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
                className="mt-1 px-3 tableFixHeadDash"
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
        </Tabs>
      </div>
    </div>
  );
};

export default EditProfile;

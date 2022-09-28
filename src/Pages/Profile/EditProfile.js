import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FcGoogle } from "react-icons/fc";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BsFillPlusCircleFill, BsGithub } from "react-icons/bs";
import { BiChevronRight, BiRefresh } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import ActionPopup from "../../Components/ActionPopup";
const EditProfile = () => {
  return (
    <div className="container extra-pad px-4">
      <div className="row">
        <div className="col-6">
          <p className="fw-bold heading-black text-start">
            Account Informations
          </p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <button className="publish-btn">Save</button>
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
                  src={require("../../Assets/Images/Response1.png")}
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
                      className="form-control form-control-manual form-control-sm"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-manual form-control-sm"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control form-control-manual form-control-sm"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      Email ID
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-manual form-control-sm"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      Password
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-manual form-control-sm"
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label className="form-label mb-0 body-black">
                      Confirm Password
                    </label>
                    <input
                      type="text"
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
                <div className="social-media-circle mx-1">
                  <FcGoogle className="icon" />
                </div>
                <div className="social-media-circle mx-1">
                  <BsGithub className="icon" />
                </div>
                <div>
                  <p className="response subtitle-black mx-2">
                    Link more social accounts
                  </p>
                </div>
              </div>
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
                    <div class="form-check checkbox-circle-one mb-3">
                      <label class="form-check-label body-black fw-bold">
                        Benefit 1
                      </label>
                      <input
                        class="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div class="form-check checkbox-circle-one mb-3">
                      <label class="form-check-label body-black fw-bold">
                        Benefit 2
                      </label>
                      <input
                        class="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div class="form-check checkbox-circle-one mb-3">
                      <label class="form-check-label body-black fw-bold">
                        Benefit 3
                      </label>
                      <input
                        class="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div class="form-check checkbox-circle-one mb-3">
                      <label class="form-check-label body-black fw-bold">
                        Benefit 4
                      </label>
                      <input
                        class="form-check-input check-input-one"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div class="form-check checkbox-circle-one mb-3">
                      <label class="form-check-label body-black fw-bold">
                        Benefit 5
                      </label>
                      <input
                        class="form-check-input check-input-one"
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
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input p-2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <div className="mx-3">
                          <label
                            class="form-check-label w-100"
                            for="flexRadioDefault2"
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
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input p-2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <div className="mx-3">
                          <label
                            class="form-check-label w-100"
                            for="flexRadioDefault2"
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
                      <div class="form-check d-flex align-items-center">
                        <input
                          class="form-check-input p-2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <div className="mx-3">
                          <label
                            class="form-check-label w-100"
                            for="flexRadioDefault2"
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

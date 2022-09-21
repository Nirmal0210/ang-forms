import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import {
  BsSearch,
  BsCollectionFill,
  BsInputCursorText,
  BsCalendar2Date,
  BsListUl,
} from "react-icons/bs";
import { VscTable } from "react-icons/vsc";
import { TbNumbers } from "react-icons/tb";
import { IoIosCheckboxOutline, IoMdArrowDropdown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import { CgFlagAlt } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
const CreateForm = () => {
  return (
    <div className="row pt-5 g-0">
      <div className="col-3 bg-white p-3">
        <div className="d-flex justify-content-evenly">
          <div className="response">
            Fields
            <hr style={{ height: "3px" }} className="my-0" />
          </div>
          <div className="response">
            Forms
            <hr style={{ height: "3px" }} className="my-0" />
          </div>
        </div>
        <hr />
        <div class="input-group mb-3 border rounded">
          <span class="input-group-text bg-white border-0" id="basic-addon1">
            <BsSearch />
          </span>
          <input
            type="text"
            class="form-control border-0 subtitle-black"
            placeholder="Search elements"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="subtitle-black fw-bold">Layout elements</div>
        <div className="row my-2 align-items-center">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-2">
            <div className="fb-elements rounded d-flex p-2">
              <VscTable className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Tables</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Text elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <AiOutlineLine className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Single line</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsCollectionFill className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Multi-lines</p>
            </div>
          </div>

          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <TbNumbers className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Numbers</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsInputCursorText className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Text field</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Date elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsCalendar2Date className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Date</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Date & time</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Multi elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Yes/no</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <IoMdArrowDropdown className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Dropdown</p>
            </div>
          </div>

          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <IoIosCheckboxOutline className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Checkbox</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsListUl className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Checklist</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Media elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <ImAttachment className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Attachments</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <HiOutlinePhotograph className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Photo</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Advanced elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <IoLocationSharp className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">address</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <CgFlagAlt className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Country list</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-9 bg p-3">
        <div className="row">
          <div className="col-9 fw-bold heading-black">Name of the form</div>
          <div className="col-3 d-flex justify-content-center">
            <button className="publish-btn">Publish</button>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-9 p-3">
            <div className="text-center rounded bg-white p-4">
              <div className="fb-bg-circle mx-auto d-flex align-items-center justify-content-center">
                <img
                  src={require("../../Assets/Images/fb-nodata.png")}
                  width="230px"
                  height="180px"
                  alt="nodata"
                />
              </div>
              <p className="body-black mt-3 fw-bold">
                Drag and drop elements from the left toolbar to get started.
              </p>
            </div>
          </div>
          <div className="col-3 p-3">
            <div className="bg-white rounded">Name of the form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;

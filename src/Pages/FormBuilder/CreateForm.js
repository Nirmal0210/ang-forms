import React from "react";
import { BsSearch } from "react-icons/bs";

const CreateForm = () => {
  return (
    <div className="row g-0">
      <div className="col-2 bg-white p-3">
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
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-2">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Text elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>

          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Date elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Multi elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>

          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Media elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
        </div>
        <div className="subtitle-black fw-bold">Advanced elements</div>
        <div className="row my-2">
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
          <div className="col-6 my-1">
            <div className="fb-elements rounded d-flex p-2">
              <BsSearch className="fb-icons" />
              <p className="subtitle-black ms-2 fb-text">Sections</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-10 bg p-3">
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

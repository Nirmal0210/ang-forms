import React, { useState } from "react";
import { FormBuilder as FormBuilderIo, Formio } from "react-formio";
import { formIoData } from "./Consts";
import "formiojs/dist/formio.full.css";
import { BsCheck2 } from "react-icons/bs";

// const url = `https://safe-springs-353/06.herokuapp.com/api/formdata?cid=`;

export default function App() {
  const [formData, setFormData] = useState(formIoData);
  const printResult = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components,
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
    });
  };

  return (
    <div className="extra-pad px-2">
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control border-0"
            placeholder="Enter Form Name"
          />
          <button className="btn btn-primary" type="button">
            {/* <FaPencilAlt /> */}
            <BsCheck2 />
          </button>
        </div>
      </div>
      <div>
        <FormBuilderIo
          form={formIoData}
          onSubmit={(data) => {
            console.log(data);
          }}
          saveForm={(data) => setFormData(data)}
          saveText="Save Form"
          onSubmitDone={(data) => console.log(data)}
        />
      </div>
      <div className="d-flex justify-content-center mt-2">
        <div className="publish-btn" onClick={printResult}>
          Display result
        </div>
      </div>
    </div>
  );
}

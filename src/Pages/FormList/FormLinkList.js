import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import NoDataFound from "../../Components/NoDataFound";
import DeletePublishForm from "../../Components/DeletePublishForm";
import { useNavigate } from "react-router-dom";

const FormLinkList = () => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false);
  const [formLinkList, setFormLinkList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false)
  const [tempIndex, setTempIndex] = useState()
  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      setFormLinkList([]);

      let documentID = localStorage.getItem("userDocumentID");
      const querySnapshotTemp = await getDocs(
        collection(db, `users/${documentID}/publish`)
      );
      querySnapshotTemp.forEach((item) => {
        let obj = item.data();
        obj.appKey = item.id;
        formLinkList.push(obj);
        setFormLinkList([...formLinkList]);
      });
      setLoader(false);
      setTimeout(() => {
        setIsDeleted(false)
      }, [1000])
    };
    getData();
  }, [isDeleted]);
  return (
    <div className="p-4 extra-pad">
      {isDeleted && <div className="alert alert-danger" role="alert">
        Publishable Form has been deleted successfully !!!
      </div>}
      <div className="row g-0 g-lg-2 p-0 d-flex align-items-center">
        <div className="col-12 d-flex justify-content-end">
          <button className="download-btn ms-3"
            onClick={() => navigate("/formdialog")}
          >
            New Form
            <span className="ms-2">
              <i className="bi bi-plus-lg" style={{ fontSize: "19px" }} />
            </span>
          </button>
        </div>
      </div>
      <div className="row g-0 mt-4">
        <div className="col-sm-12">
          <div className="text-center rounded bg-white p-4">
            <div className="body-large-black fw-bold text-start">
              Form Links List
            </div>
            {loader ? (
              <div
                className="d-flex align-items-center"
                style={{ minHeight: "25rem" }}
              >
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
            ) : formLinkList.length > 0 ? (
              <div className="mt-5 px-3">
                <table className="table table-light text-start table-hover">
                  <thead className="border-1">
                    <tr>
                      <th scope="col" className="body-black fw-bold">
                        Form Id
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Form Name
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Link Address
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Impressions
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Responses
                      </th>
                      {/* <th scope="col" className="body-black fw-bold"></th> */}
                      <th scope="col" className="body-black fw-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {formLinkList.map((item, index) => (
                      <>
                        <tr key={index}>
                          <td className="subtitle-black">{item?.formId}</td>
                          <td className="subtitle-black">{item?.formName}</td>
                          <td className="subtitle-black response">
                            <p className="text-ellipsis">{item?.formUrl}</p>
                          </td>
                          <td className="subtitle-black">{item?.impressions}</td>
                          <td className="subtitle-black">{item?.responses}</td>
                          <td className="subtitle-black d-flex">
                            <DeletePublishForm
                              data={item}
                              isDeleted={isDeleted}
                              setIsDeleted={setIsDeleted}
                            />
                            <i
                              className="bi bi-bar-chart-fill expand-button"
                              style={{ fontSize: "15px" }}
                              onClick={() => index !== tempIndex ? setTempIndex(index) : setTempIndex(null)}
                            ></i>
                          </td>
                        </tr>
                        {tempIndex === index && <tr>
                          Hidden Row
                        </tr>}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <NoDataFound />
            )}
          </div>
        </div>
      </div >
    </div >
  );
};

export default FormLinkList;

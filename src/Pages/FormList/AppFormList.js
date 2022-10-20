import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import NoDataFound from "../../Components/NoDataFound";
import ViewDetails from "../../Components/ViewDetails";
import DeleteAppForm from "../../Components/DeleteAppForm";
const AppFormList = () => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [appList, setAppList] = useState([]);
  const [tempIndex, setTempIndex] = useState()
  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      setAppList([]);
      let documentID = localStorage.getItem("userDocumentID");
      const querySnapshotTemp = await getDocs(
        collection(db, `users/${documentID}/apps`)
      );
      querySnapshotTemp.forEach(async (doc) => {
        const querySnapshot = await getDocs(
          collection(db, `users/${documentID}/apps/${doc.id}/forms`)
        );
        querySnapshot.forEach((item) => {
          let obj = item.data();
          obj.appKey = item.id;
          appList.push(obj);
          setAppList([...appList]);
        });
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
        App Form has been deleted successfully !!!
      </div>}
      <div className="row g-0 g-lg-2 p-0 d-flex align-items-center">
        <div className="col-12 d-flex justify-content-end">
          <button
            className="download-btn ms-3"
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
              App Forms List
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
            ) : appList.length > 0 ? (
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
                        App Name
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Impressions
                      </th>
                      <th scope="col" className="body-black fw-bold">
                        Responses
                      </th>
                      <th scope="col" className="body-black fw-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {appList.map((item, index) => (
                      <>
                        <tr
                          key={index}
                          class="accordion-toggle collapsed"
                          id="accordion1"
                          data-toggle="collapse"
                          data-parent="#accordion1"
                          href="#collapseOne"
                        >
                          <td className="subtitle-black">{item?.formId}</td>
                          <td className="subtitle-black">{item?.formName}</td>
                          <td className="subtitle-black">Random App Name</td>
                          <td className="subtitle-black">2</td>
                          <td className="subtitle-black response">
                            <button className="small-button">
                              View
                              <span>
                                <i className="ms-1 bi bi-chevron-right" />
                              </span>
                            </button>
                          </td>
                          <td className="subtitle-black d-flex">
                            <ViewDetails data={item} />
                            <DeleteAppForm
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
      </div>
    </div>
  );
};

export default AppFormList;

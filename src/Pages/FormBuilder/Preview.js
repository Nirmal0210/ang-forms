import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";

const Preview = () => {
  const { state } = useLocation();

  const onSubmit = async () => {
    let userID = localStorage.getItem("userDocumentID");
    let docRef = doc(collection(db, `users/${userID}/apps/${state?.appKey}`));
    await setDoc(docRef, {
    });
  }
  // const [formData, setFormData] = useState(location.state.formData);
  // useEffect(() => {
  //   async function getData() {
  //     document.getElementById("main").style.marginLeft = "0px";
  //     let array = pathname.split("/");
  //     let ref = null,
  //       data = {};
  //     ref = doc(db, `users/${array[2]}/publish/${array[3]}`);
  //     const docSnap = await getDoc(ref);
  //     data = docSnap.data();
  //     setFormData(data);
  //   }
  //   getData();
  // }, []);
  useEffect(() => {
    console.log(state);
  }, []);
  return <div>Hello World</div>;
};

export default Preview;

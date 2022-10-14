import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";

const Preview = () => {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({});
  useEffect(() => {
    async function getData() {
      document.getElementById("main").style.marginLeft = "0px";
      let array = pathname.split("/");
      let ref = null,
        data = {};
      ref = doc(db, `users/${array[2]}/publish/${array[3]}`);
      const docSnap = await getDoc(ref);
      data = docSnap.data();
      setFormData(data);
    }
    getData();
  }, []);
  return (
    <div>
      <p>{formData && console.log(formData)}</p>
    </div>
  );
};

export default Preview;

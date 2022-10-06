import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [logUser, setLogUser] = useState({});
  const [loader, setLoader] = useState(false);
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(
        collection(db, "users"),
        where("email", "==", user.email)
      );
      const docs = await getDocs(q);
      let userID = "";
      docs.forEach((doc) => {
        userID = doc.id;
      });
      const newUser = doc(db, "users", userID);
      const docSnap = await getDoc(newUser);
      if (docSnap.exists()) {
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("currentUser", JSON.stringify(docSnap.data()));
        navigate("/");
      } else {
        if (docs.docs.length === 0) {
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
            profile: user.photoURL,
          });
        }
        if (user) {
          localStorage.setItem("accessToken", user.accessToken);
          const obj = {
            uid: user.uid,
            name: user.displayName,
            mobNo: user.phoneNumber,
            authProvider: "google",
            email: user.email,
            profile: user.photoURL,
          };
          localStorage.setItem("currentUser", JSON.stringify(obj));
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const q = query(
        collection(db, "users"),
        where("email", "==", logUser.email)
      );
      const querySnapshot = await getDocs(q);
      let userID = "";
      querySnapshot.forEach((doc) => {
        userID = doc.id;
      });
      const newUser = doc(db, "users", userID);
      const docSnap = await getDoc(newUser);
      if (docSnap.exists()) {
        const res = await signInWithEmailAndPassword(
          auth,
          logUser.email,
          logUser.password
        );
        const user = res.user;
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("currentUser", JSON.stringify(docSnap.data()));
        setLoader(false);
        navigate("/");
      } else {
        console.log("User does not exist");
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    setLoader(false);
  };
  const onHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    logUser[name] = value;
    setLogUser({ ...logUser });
  };

  return (
    <div className="row g-0">
      <div className="col-6 col-lg-6 login-left">
        <div className="p-5">
          <div className="text-center mt-2">
            <img
              src={require("../../Assets/Images/Reactangle 2.png")}
              height="450px"
              width="100%"
              alt="new"
            />
          </div>
          <div className="big-title-white mt-4 mb-3">
            New creating forms option
          </div>
          <p className="heading-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            turpis ac consequat at varius turpis mattis.
          </p>
        </div>
      </div>
      <div className="col-6 col-lg-6 login-right">
        <div className="login-icon mt-3">
          <div className="login-icon-bg">
            <img
              src={require("../../Assets/Images/Vector-login.png")}
              height="50px"
              width="50px"
              alt="vector"
            />
          </div>
        </div>
        <div className="p-3">
          <div className="title-black text-center fw-bold mb-3">Hello!</div>
          <div className="login-desc">
            <p className="body-large-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              ullamcorper vitae cursus erat.
            </p>
          </div>
        </div>
        <div className="form-login">
          <form onSubmit={logInWithEmailAndPassword}>
            <div className="mb-3">
              <p className="body-black text-start">Email</p>
              <input
                type="email"
                className="form-control"
                name="email"
                value={logUser.email}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <p className="body-black text-start">Password</p>
              <input
                type="text"
                className="form-control"
                name="password"
                value={logUser.password}
                onChange={onHandleChange}
              />
            </div>

            <p className="text-end link-text mb-4">Forgot Password?</p>
            <button type="submit" className="btn-login">
              {!loader ? (
                "LOGIN"
              ) : (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </button>
          </form>
          <p className="py-4 text-center">OR</p>
          <button
            className="form-control mb-3 text-center"
            onClick={signInWithGoogle}
          >
            <img
              src={require("../../Assets/Images/google.png")}
              height={"25px"}
              alt="new"
              className="me-1"
            />
            Sign in using Google
          </button>
          <button className="form-control text-center">
            <img
              src={require("../../Assets/Images/github.png")}
              height={"25px"}
              alt="new"
              className="me-1"
            />
            Sign in using Github
          </button>
          <p className="body-black text-center py-4">
            Don’t have an account?
            <NavLink className="link-text" to={"/signup"}>
              {" "}
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

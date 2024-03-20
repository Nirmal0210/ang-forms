import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { getUserId } from "../../Config/Setting";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [logUser, setLogUser] = useState({});
  const [loader, setLoader] = useState(false);

  const onSubmit = (data) => {
    logInWithEmailAndPassword(data)
  }
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      getUserId(user).then(async (res) => {
        if (res.userID) {
          localStorage.setItem("userDocumentID", res.userID);
          const newUser = doc(db, "users", res.userID);
          const docSnap = await getDoc(newUser);
          localStorage.setItem("accessToken", user.accessToken);
          localStorage.setItem("currentUser", JSON.stringify(docSnap.data()));
          navigate("/dashboard");
        } else {
          if (res.docs?.docs.length === 0) {
            const obj = {
              uid: user.uid,
              name: user.displayName,
              mobNo: user.phoneNumber,
              authProvider: "google",
              email: user.email,
              profile: user.photoURL,
              publishFormLinks: 0,
              appFormLinks: 0,
              totalApps: 0,
            };
            await addDoc(collection(db, "users"), obj);
            localStorage.setItem("userDocumentID", res.userID);
            localStorage.setItem("accessToken", user.accessToken);
            localStorage.setItem("currentUser", JSON.stringify(obj));
            navigate("/dashboard");
          }
        }
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logInWithEmailAndPassword = (logUser) => {
    setLoader(true);
    signInWithEmailAndPassword(auth, logUser.email, logUser.password)
      .then((res) => {
        const user = res.user;
        getUserId(user).then(async (result) => {
          if (result.str !== "") {
            alert("User doesn't exist");
          } else {
            const newUser = doc(db, "users", result.userID);
            const docSnap = await getDoc(newUser);
            localStorage.setItem("userDocumentID", result.userID);
            localStorage.setItem("currentUser", JSON.stringify(docSnap.data()));
            localStorage.setItem("accessToken", user.accessToken);
            setLoader(false);
            navigate("/dashboard");
          }
        });
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
    setLoader(false);
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
          <div className="big-title-white mt-3 mb-2">
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
        <div className="p-1">
          <div className="title-black text-center fw-bold mb-3">Hello!</div>
          <div className="login-desc">
            <p className="body-large-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              ullamcorper vitae cursus erat.
            </p>
          </div>
        </div>
        <div className="form-login">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <p className="body-black text-start">Email</p>
              <input
                type="email"
                className="form-control"
                name="email"
                {...register("email",
                  {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })}
              />
              {errors.email && <p className="text-danger">Please check the Email*</p>}
            </div>
            <div>
              <p className="body-black text-start">Password</p>
              <input
                type="text"
                className="form-control"
                name="password"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && <p className="text-danger">Please check the Password</p>}

            </div>

            <p className="text-end link-text mb-4">Forgot Password?</p>
            <div className="text-center">
              <button type="submit" className="btn-login">
                {!loader ? (
                  "LOGIN"
                ) : (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </button>
            </div>

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

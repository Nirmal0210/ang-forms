import React, { useState } from "react";
import { db, auth } from "../../firebase";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [logUser, setLogUser] = useState({});
  const [agree, setAgree] = useState(false);
  const [toggle, setToggle] = useState(true);

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
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
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const registerWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        logUser.email,
        logUser.password
      );
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        mobNo: logUser.mobNo,
        authProvider: "local",
        email: logUser.email,
        password: logUser.password,
        profile: user.photoURL,
      });
      if (user && logUser) {
        localStorage.setItem("accessToken", user.accessToken);
        const obj = {
          uid: user.uid,
          name: user.displayName,
          mobNo: logUser.mobNo,
          authProvider: "local",
          email: logUser.email,
          password: logUser.password,
          profile: user.photoURL,
        };
        localStorage.setItem("currentUser", JSON.stringify(obj));
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
      console.error(err);
    }
    setLogUser({});
    setAgree(false);
  };
  const onHandleChange = (e) => {
    let title = e.target.name;
    let value = e.target.value;
    logUser[title] = value;
    setLogUser({ ...logUser });
  };
  return (
    <div className="row g-0">
      <div className="col-6 col-lg-6 login-left">
        <div className="p-5 pt-2">
          <div className="text-center mt-2">
            <img
              src={require("../../Assets/Images/Reactangle 2.png")}
              height="450px"
              width="100%"
              alt="new"
            />
          </div>
          <div className="title-white mt-4 mb-3">New creating forms option</div>
          <p className="body-large-white">
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
          <div className="heading-black text-center fw-bold mb-3">Register</div>
          <div className="login-desc">
            <p className="body-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              ullamcorper vitae cursus erat.
            </p>
          </div>
        </div>
        {toggle ? (
          <div className="form-login">
            <div>
              <form>
                <div className="mb-3">
                  <p className="body-black text-start">Email</p>
                  <input
                    className="form-control"
                    name="email"
                    value={logUser.email}
                    onChange={(e) => onHandleChange(e)}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setToggle(!toggle)}
                  className="btn-signup"
                >
                  Continue with Email
                </button>
              </form>
              <p className="py-4 text-center">OR</p>
              <button
                className="form-control mb-3 text-center"
                style={{ cursor: "pointer" }}
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
              <div className="form-control text-center">
                <img
                  src={require("../../Assets/Images/github.png")}
                  height={"25px"}
                  alt="new"
                  className="me-1"
                />
                Sign in using Github
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-2 px-5">
            <form className="row g-1" onSubmit={registerWithEmailAndPassword}>
              <div className="mb-3 col-6">
                <label className="form-label mb-0 body-black">First Name</label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  name="name"
                  value={logUser.name}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>

              <div className="mb-3 col-6">
                <label className="form-label mb-0 body-black">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="mobNo"
                  value={logUser.mobNo}
                  className="form-control form-control-md"
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label mb-0 body-black">Email ID</label>
                <input
                  type="email"
                  value={logUser.email || ""}
                  name="email"
                  className="form-control form-control-md"
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label mb-0 body-black">Password</label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  name="password"
                  value={logUser.password}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label mb-0 body-black">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  name="confirmPassword"
                  value={logUser.confirmPassword}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I agree to all the Terms & Privacy Policy
                </label>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <button type="submit" className="btn-signup">
                  Register
                </button>
              </div>
            </form>
          </div>
        )}

        <p className="body-black text-center py-4">
          Already have an account?{" "}
          <NavLink className="link-text" to={"/login"}>
            {" "}
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;

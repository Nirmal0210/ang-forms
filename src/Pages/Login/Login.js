import React from "react";

const Login = () => {
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
          <form>
            <div className="mb-3">
              <p className="body-black text-start">Email</p>
              <input type="email" className="form-control" name="email" />
            </div>
            <div>
              <p className="body-black text-start">Password</p>
              <input type="text" className="form-control" name="password" />
            </div>

            <p className="text-end link-text mb-4">Forgot Password?</p>
            <button type="submit" className="btn-login">
              LOGIN
            </button>
          </form>
          <p className="py-4 text-center">OR</p>
          <div className="form-control mb-3 text-center">
            <img
              src={require("../../Assets/Images/Twitter.png")}
              height={"25px"}
              alt="new"
              className="me-1"
            />
            Sign in using Google
          </div>
          <div className="form-control text-center">
            <img
              src={require("../../Assets/Images/Twitter.png")}
              height={"25px"}
              alt="new"
              className="me-1"
            />
            Sign in using Twitter
          </div>
          <p className="body-black text-center py-4">
            Don’t have an account?<span className="link-text"> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

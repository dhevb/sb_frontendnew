import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import loginimg from "../../assets/loginimg.jpg";
import { Link } from "react-router-dom";
import "../../App.css"
import "./authpage.css"

const Login = () => {
  return (
    <div className="authpage">
      <Navbar />

      <div className="authcont">
        <img src={loginimg} alt="login" />

        <form className="authform">
          <h1>Login</h1>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="formgroup">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <Link to="/forgotpassword" className="stylenone">
            <p>Forgot Password?</p>{" "}
          </Link>
          <Link to="/" className="stylenone">
            <button className="btn">Login</button>
          </Link>
          <h2 className="or">OR</h2>
          <Link to="/signup" className="stylenone">
            <button className="btn">Signup</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

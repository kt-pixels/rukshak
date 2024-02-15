import React from "react";
import "./Login.css";

import { useClick } from "../Context/AllAPIs";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  const backToHome = () => {
    navigate('/')
  }

  return (
    <section>
      <div className="login-container">
          <div className="cancel" aria-label="close button" onClick={backToHome}>
            X
          </div>
        <div className="heading">
          <h2>Login</h2>
        </div>
        <div className="form" aria-label="sign up form">
          <form>
            <input type="text" placeholder="Your First Name" />
            <input type="email" placeholder="Your email" />
            <input type="submit" value="submit" />
          </form>
        </div>
        <p>
          Create A New Account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;

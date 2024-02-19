import React, { useState, useEffect } from "react";
import "./Login.css";

import { useClick } from "../Context/AllAPIs";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("account"));
    if(auth){
      navigate('/')
    }
  }, [])

  const handleSubmit = async () => {
    console.log("find", email, password)

    let result = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result)

    if(result.fname){
      localStorage.setItem("account", JSON.stringify(result))
      navigate('/')
    }else{
      alert("please give a valid details")
    }
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
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <button onClick={handleSubmit}>Login</button>

        </div>
        <p>
          Create A New Account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

import firebase from "../../firebaseConfig";

function Signup() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("account"));
    if(auth){
      navigate('/')
    }
  }, [])


const collectUsers = async () => {
  console.log("working", fname, lname, email, password);

  try {
    let result = await fetch("http://localhost:3000/sign-up", {
      method: "POST",
      body: JSON.stringify({ fname, lname, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      throw new Error('Network response was not ok');
    }

    result = await result.json();
    console.log(result);
    localStorage.setItem("account", JSON.stringify(result))

    if(result){
      setFname("")
      setLname("")
      setEmail("")
      setPassword("")
      navigate('/')
    }else{
      navigate('/sign-up')
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};


  return (
    <section>
      <div className="sign-up-container">
        <div className="cancel" aria-label="close button" onClick={backToHome}>
          X
        </div>
        <div className="heading">
          <h2>Sign up</h2>
        </div>
        <div className="form" aria-label="sign up form">
          <form>
            <input
              type="text"
              placeholder="Your First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
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

          <button onClick={collectUsers}>Submit</button>
        </div>
        <p>
          Already Have a Account. <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;

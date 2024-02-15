import React from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate()

  const backToHome = () => {
    navigate('/')
  }

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
            <input type="text" placeholder="Your First Name" />
            <input type="text" placeholder="Your Last Name" />
            <input type="email" placeholder="Your email" />
            <input type="tel" placeholder="Your Contact Number" />
            <input type="submit" value="submit" />
          </form>
        </div>
        <p>
          Already Have a Account. <Link to='/login'>Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;

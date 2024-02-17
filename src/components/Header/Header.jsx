import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {

  const [displayNone, setDisplayNone] = useState("display-none")

  const none = () => {
    if(displayNone === ""){
      setDisplayNone('display-none')
    }
  }

  const flex = () => {
    if(displayNone === "display-none"){
      setDisplayNone("")
    }
  }

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="sign-up">
          <img src="itute.png" alt="Rakshak Trust Logo" />
          <ul className={`navlinks ${displayNone}`}>
            <div className="close" onClick={none}>X</div>
            <Link to="">
              <li>Home</li>
            </Link>
            <Link to='/about-us'>
              <li>About Us</li>
            </Link>
            {/* <Link>
              <li>Events</li>
            </Link> */}
            {/* <Link>
              <li>Administration</li>
            </Link> */}
            <Link to='donate'>
              <li>Donate</li>
            </Link>
            <Link to='/admission'>
              <li>Admission</li>
            </Link>
            <Link to='/privacy-policy'>
              <li>Privacy Policy</li>
            </Link>
            <Link to='/terms-and-conditions'>
              <li>Terms And Conditions</li>
            </Link>
            <div className="buttons-for-signup">
            <NavLink to="/sign-up">
              <button className="btn" aria-label="sign up">
                Sign Up
              </button>
            </NavLink>
            <NavLink to="login">
              <button className="btn" aria-label="login">
                Login
              </button>
            </NavLink>
            </div>
            {/* <Link>
              <li>Valunteer</li>
            </Link> */}
            {/* <Link>
              <li>Legal Support</li>
            </Link> */}
            
            {/* <Link>
              <li>Contact Us</li>
            </Link> */}
          </ul>
          <div className="buttons">
            <NavLink to="/sign-up">
              <button className="btn" aria-label="sign up">
                Sign Up
              </button>
            </NavLink>
            <NavLink to="login">
              <button className="btn" aria-label="login">
                Login
              </button>
            </NavLink>
            <div className="hambar" onClick={flex}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        {/* <ul className="navlinks">
          <li>Home</li>
          <li>About Us</li>
          <li>Events</li>
          <li>Administration</li>
          <li>Admission</li>
          <li>Valunteer</li>
          <li>Legal Support</li>
          <li>Donet</li>
          <li>Contact Us</li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Header;

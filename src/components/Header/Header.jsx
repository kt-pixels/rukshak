import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="sign-up">
          <img src="itute.png" alt="Rakshak Trust Logo" />
          <ul className="navlinks">
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

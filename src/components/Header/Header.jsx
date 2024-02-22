import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {useClick} from '../Context/AllAPIs'

// Import Swiper styles

// Install Swiper modules

function Header() {
  const auth = JSON.parse(localStorage.getItem("account"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("account");
    navigate("/sign-up");
  };

  // fonts functionality

  const {increase, decrease, normal} = useClick()

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="sign-up">
          {/* <img src="NGO Logo.png" alt="Rakshak Trust Logo" /> */}
          {/* {auth ? ( */}
            <>
              <button onClick={logout} className="logout">
                LogOut
              </button>
              <div className="fonts" aria-label="font size managers">
                <button onClick={increase} aria-label="increase font">+A</button>
                <button onClick={normal} aria-label="normal font">A</button>
                <button onClick={decrease} aria-label="decrease font">-A</button>
              </div>
            </>
          {/* ) : ( */}
            {/* <div className="log-sign">
              <NavLink to="/sign-up" className={`sign-up-btn`} aria-label="sign up button">
                <button>Sign Up</button>
              </NavLink>
              <NavLink to="/login" className={`sign-up-btn`} aria-label="login button">
                <button>Login</button>
              </NavLink>
            </div> */}
          {/* )} */}
        </div>
        {/* {auth ?  */}
        <ul className={`navlinks`}>
              <Swiper
                spaceBetween={5}
                slidesPerView={8}
                breakpoints={{
                  270: {
                    slidesPerView: 2,
                  },
                  421: {
                    slidesPerView: 3,
                  },
                  610: {
                    slidesPerView: 4,
                  },
                  890: {
                    slidesPerView: 5,
                  },
                  1126: {
                    slidesPerView: 6,
                  },
                }}
              >
                <SwiperSlide>
                  <NavLink to="" className="ctg-btn">
                    <button>Home</button>
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="/about-us" className="ctg-btn">
                    <button>About Us</button>
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="/donate" className="ctg-btn">
                    <button>Donate</button>
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="/admission" className="ctg-btn">
                    <button>Admission</button>
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="/privacy-policy" className="ctg-btn">
                    <button>Privacy Policy</button>
                  </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                  <NavLink to="/terms-and-conditions" className="ctg-btn">
                    <button>T & C</button>
                  </NavLink>
                </SwiperSlide>
              </Swiper>
            </ul>
            
          {/* : ""} */}
      </div>
    </nav>
  );
}

export default Header;


// account {"fname":"harshit","lname":"kaushik","email":"kaushik@gmail.com","_id":"65d5eabd442f33daf4a0601a","__v":0}
import React, { useEffect } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles

// Install Swiper modules

function Header() {
  const auth = JSON.parse(localStorage.getItem("account"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("account");
    navigate("/sign-up");
  };
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="sign-up">
          <img src="NGO Logo.png" alt="Rakshak Trust Logo" />
          {auth ? (
            <button onClick={logout} className="logout">LogOut</button>
          ) : (
            <div className="log-sign">
              <NavLink to="/sign-up" className={`sign-up-btn`}>
                <button>Sign Up</button>
              </NavLink>
              <NavLink to="/login" className={`sign-up-btn`}>
                <button>Login</button>
              </NavLink>
            </div>
          )}
        </div>
        {auth ? (
          <ul className={`navlinks`}>
            <Swiper
              spaceBetween={5}
              slidesPerView={8}
              breakpoints={{
                260: {
                  slidesPerView: 3,
                },
                320: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 5,
                },
                1100: {
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
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles

// Install Swiper modules

function Header() {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="sign-up">
          <img src="NGO Logo.png" alt="Rakshak Trust Logo" />
          <h2>Rakshak</h2>
        </div>
        <ul className={`navlinks`}>
        <Swiper
      spaceBetween={5}
      slidesPerView={6}
      breakpoints={{
        260: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 4,
        },
        600: {
          slidesPerView: 5,
        },
        1100: {
          slidesPerView: 6,
        }
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
          <button>Terms And Conditions</button>
        </NavLink>
      </SwiperSlide>
    </Swiper>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

import React from "react";
import "./Welcome.css";
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Welcome() {
  return (
    <section>
      <div className="welcome">
        <h2 className="welcome-heading">Welcome to Rakshak Institute</h2>
        <p>
          At Rakshak Institute, we are dedicated to nurturing young minds and
          empowering them to reach their fullest potential. Established with a
          vision to provide quality education and holistic development, we
          strive to create a nurturing environment where students can excel
          academically, socially, and emotionally.
        </p>
      </div>

      {/* <div className="cards">
        <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{delay: 3500}}
        >
          <SwiperSlide>
            <div className="card">
              <img src="/back/2.jpg" alt="" />
              <h4>Admission</h4>
              <div className="view">
                <p className="btn">Take A View</p>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/back/2.jpg" alt="" />
              <h4>Event</h4>
              <div className="view">
                <p className="btn">Take A View</p>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/back/2.jpg" alt="" />
              <h4>Broucher</h4>
              <div className="view">
                <p className="btn">Take A View</p>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="/back/2.jpg" alt="" />
              <h4>Course</h4>
              <div className="view">
                <p className="btn">Take A View</p>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </section>
  );
}

export default Welcome;

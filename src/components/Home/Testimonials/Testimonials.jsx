import React from "react";
import "./Testimonials.css";
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Testimonials() {
  return (
    <section className="Testimonials">
      <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{delay: 3500}}
      >
        <SwiperSlide>
          <div className="testimonial">
            <div className="Testimonials-container">
              <div className="image">
                <img src="/faces/3.png" alt="priya sharma image" />
              </div>
              <div className="text">
                <p className="name">Priya Sharma</p>
                <p className="feedback">
                  Rakshak Trust has been a guiding light in my journey towards
                  understanding legal rights and safety measures for visually
                  impaired individuals. Their resources and support have
                  empowered me to advocate for myself and others. I'm grateful
                  for their dedication and commitment.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="Testimonials-container">
              <div className="image">
                <img src="/faces/1.png" alt="priya sharma image" />
              </div>
              <div className="text">
                <p className="name">Rahul Desai</p>
                <p className="feedback">
                As a volunteer with Rakshak Trust, I've witnessed firsthand the positive impact of their work in the visually impaired community. The trust provides invaluable resources and educational opportunities, fostering inclusivity and empowerment. It's truly inspiring to be a part of such a meaningful cause
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="Testimonials-container">
              <div className="image">
                <img src="/faces/2.png" alt="priya sharma image" />
              </div>
              <div className="text">
                <p className="name">Arjun Singh</p>
                <p className="feedback">
                Rakshak Trust goes above and beyond to ensure the needs of visually impaired individuals are met. From educational initiatives to community engagement events, the trust remains dedicated to promoting inclusivity and accessibility. I'm proud to support their mission.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="Testimonials-container">
              <div className="image">
                <img src="/faces/6.png" alt="priya sharma image" />
              </div>
              <div className="text">
                <p className="name">Anjali Patel</p>
                <p className="feedback">
                I cannot thank Rakshak Trust enough for their assistance during a challenging time. Their legal support services provided me with the guidance and resources needed to navigate complex legal processes. I highly recommend their services to anyone seeking legal assistance.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="Testimonials-container">
              <div className="image">
                <img src="/faces/4.png" alt="priya sharma image" />
              </div>
              <div className="text">
                <p className="name">Sneha Mehta</p>
                <p className="feedback">
                Rakshak Trust has been instrumental in providing educational opportunities for visually impaired individuals like myself. Their commitment to accessibility and empowerment has opened doors to new possibilities and enabled me to pursue my academic goals with confidence.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <div className="Testimonials-container">
              <div className="image">
                <img src="/faces/5.png" alt="priya sharma image" />
              </div>
              <div className="text">
                <p className="name">Rajesh Khanna</p>
                <p className="feedback">
                Rakshak Trust has been a beacon of hope for me and many others in the visually impaired community. Their dedication to providing resources, support, and advocacy is truly commendable. Thanks to their efforts, I've gained valuable knowledge and skills that have empowered me to navigate the world with confidence. I'm immensely grateful for their unwavering commitment to our well-being.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;

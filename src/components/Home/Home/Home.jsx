import React from "react";
import "./Home.css";
import About from "../About/About";
import Welcome from "../Welcome/Welcome";
import Join from "../Join/Join";
import Testimonials from "../Testimonials/Testimonials";
import Signup from "../../Signup/Signup";
import Login from "../../Login/Login";

function Home() {
  return (
    <section>
      <div className="background-image blackshade">
        <div className="text">
          <div className="heading">
            <h2>
              Supporting Accessibility, Empowering Lives:{" "}
              <p>Welcome to Rakshak Trust</p>
            </h2>
          </div>
          <div className="btn">
            <button>Become A Valunteer</button>
            <button>Donate Now</button>
          </div>
        </div>
      </div>
      <Welcome />
      <About />
      <Join />
      <Testimonials />
      {/* <Signup/> */}
      {/* <Login /> */}
    </section>
  );
}

export default Home;

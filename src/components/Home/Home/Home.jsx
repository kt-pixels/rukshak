import React, { useState } from "react";
import "./Home.css";
import About from "../About/About";
import Welcome from "../Welcome/Welcome";
import Join from "../Join/Join";
import Testimonials from "../Testimonials/Testimonials";
import DonationForm from "../DonationForm/DonationForm";

function Home() {
  const [display, setDisplay] = useState('none')

  const openDoantionForm = () => {
    if(display === 'none'){
      setDisplay = 'flex'
    }
  }

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
            <button onClick={openDoantionForm}>Donate Now</button>
          </div>
        </div>
      </div>
      <Welcome />
      <About />
      <Join />
      <Testimonials />
      <DonationForm />
      {/* <Signup/> */}
      {/* <Login /> */}
    </section>
  );
}

export default Home;

import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

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

      <div className="cards">
        <Link to='/admission'>
          <div className="card">
            <h4>Admission</h4>
            <div className="view">
              <p className="btn">Take A View</p>
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </Link>
        <Link to='/ruakshak-trust-events'>
          <div className="card">
            <h4>Event</h4>
            <div className="view">
              <p className="btn">Take A View</p>
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </Link>
        <Link>
          <div className="card">
            <h4>Broucher</h4>
            <div className="view">
              <p className="btn">Take A View</p>
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </Link>
        <Link>
          <div className="card">
            <h4>Course</h4>
            <div className="view">
              <p className="btn">Take A View</p>
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Welcome;

import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="heading">
        <h2 className="r-heading">Rakshak Institute</h2>
      </div>
      <div className="about-container-box">
        <div className="boxes">
          <div className="colunms">
            <img src="/back/2.jpg" alt="boxes image" />
            <div className="texts">
              <h3>Our Mission</h3>
              <p className="heading">
                Our mission at Rakshak Institute is to inspire a lifelong love
                for learning, foster critical thinking skills, and instill
                values of integrity, compassion, and resilience in our students.
                We are committed to providing a dynamic and inclusive
                educational experience that equips students with the knowledge,
                skills, and confidence to succeed in an ever-changing world.
              </p>
            </div>
          </div>
          <div className="colunms">
            <img src="/back/2.jpg" alt="boxes image" />
            <div className="texts">
              <h3>Our Approach</h3>
              <p className="heading">
              At Rakshak Institute, we believe in a student-centered approach to education. Our experienced faculty members are dedicated to understanding the unique strengths and needs of each student, fostering a supportive learning environment where every individual can thrive. We emphasize hands-on learning, creative expression, and real-world application of knowledge to ensure that our students are well-prepared for future challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="boxes right">
            <div className="img"></div>
            <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;

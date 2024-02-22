import React from "react";
import "./About.css";
import {useClick} from '../Context/AllAPIs'

function About() {
  const {font} = useClick()
  return (
    <div className="about-rakshak">
      <div className="background">
        <h2>About Rakshak Trust</h2>
      </div>
      <div className="main-content-container">
        <div className="content">
          <h3>Welcome to Rakshak Institute</h3>
          <p style={{fontSize: `${font}px`}}>
            At Rakshak Institute, we are dedicated to nurturing young minds and
            empowering them to reach their fullest potential. Established with a
            vision to provide quality education and holistic development, we
            strive to create a nurturing environment where students can excel
            academically, socially, and emotionally.
          </p>
        </div>
        <div className="content">
          <h3>Our Mission</h3>
          <p style={{fontSize: `${font}px`}}>
            Our mission at Rakshak Institute is to inspire a lifelong love for
            learning, foster critical thinking skills, and instill values of
            integrity, compassion, and resilience in our students. We are
            committed to providing a dynamic and inclusive educational
            experience that equips students with the knowledge, skills, and
            confidence to succeed in an ever-changing world.
          </p>
        </div>
        <div className="content">
          <h3>Our Approach</h3>
          <p style={{fontSize: `${font}px`}}>
            At Rakshak Institute, we believe in a student-centered approach to
            education. Our experienced faculty members are dedicated to
            understanding the unique strengths and needs of each student,
            fostering a supportive learning environment where every individual
            can thrive. We emphasize hands-on learning, creative expression, and
            real-world application of knowledge to ensure that our students are
            well-prepared for future challenges and opportunities.
          </p>
        </div>
        <div className="content">
          <h3>Academic Excellence</h3>
          <p style={{fontSize: `${font}px`}}>
            We uphold high standards of academic excellence and are committed to
            providing rigorous and engaging curriculum that promotes
            intellectual curiosity and academic achievement. Through
            personalized instruction, small class sizes, and innovative teaching
            methods, we strive to inspire a passion for learning and help
            students reach their highest academic potential.
          </p>
        </div>
        <div className="content">
          <h3>Holistic Development</h3>
          <p style={{fontSize: `${font}px`}}>
            At Rakshak Institute, we recognize the importance of nurturing not
            only the mind but also the heart and spirit. We offer a wide range
            of extracurricular activities, leadership opportunities, and
            community service initiatives to encourage students to explore their
            interests, develop their talents, and cultivate a sense of
            responsibility towards others.
          </p>
        </div>
        <div className="content">
          <h3>Our Community</h3>
          <p style={{fontSize: `${font}px`}}>
            Rakshak Institute is more than just a school; it is a vibrant and
            inclusive community where students, parents, teachers, and staff
            come together to learn, grow, and support one another. We foster
            strong partnerships with parents and caregivers, recognizing them as
            valuable partners in their child’s education journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

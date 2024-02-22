import React from "react";
import "./Donate.css";
import {useClick} from '../Context/AllAPIs'

function Donate() {
  const {font} = useClick()
  return (
    <div className="donate-rakshak">
      <div className="background">
        <h2>Take a step</h2>
      </div>
      <div className="main-content-container">
        <div className="content">
          <h3>Support Rakshak Institute: Empowering Tomorrow’s Leaders</h3>
          <p style={{fontSize: `${font}px`}}>
            At Rakshak Institute, we are committed to providing quality
            education and opportunities for every child, regardless of their
            background or circumstances. With your generous support, we can
            continue to empower young minds, nurture talent, and create a
            brighter future for our students and our community.
          </p>
        </div>
        <div className="content">
          <h3>Why Donate to Rakshak Institute?</h3>
          <p style={{fontSize: `${font}px`}}>
            <strong>Impact:</strong> Your donation directly supports our mission to provide a
            nurturing environment where students can thrive academically,
            socially, and emotionally. Every contribution makes a difference in
            the lives of our students and helps us maintain high standards of
            excellence in education.
          </p>
          <p style={{fontSize: `${font}px`}}>
            <strong>Access to Education:</strong> Your donation helps us provide scholarships,
            tuition assistance, and resources to students who may otherwise not
            have access to quality education. By removing financial barriers, we
            ensure that every child has the opportunity to reach their full
            potential.
          </p>
          <p style={{fontSize: `${font}px`}}>
            <strong>Holistic Development:</strong> We believe in fostering not only academic
            success but also personal growth and character development. Your
            donation supports our extracurricular programs, enrichment
            activities, and counseling services, helping students develop
            essential life skills and values.
          </p>
          <p style={{fontSize: `${font}px`}}>
            <strong>Community Impact:</strong> Rakshak Institute is more than just a school; we
            are a vital part of the community. Your donation helps us strengthen
            our community partnerships, engage families, and support initiatives
            that benefit not only our students but also the broader community.
          </p>
        </div>
        <div className="content">
          <h3>Ways to Donate</h3>
          <p style={{fontSize: `${font}px`}}>
            <strong>One-Time Donation:</strong> Make a one-time donation to Rakshak Institute and
            make an immediate impact on the lives of our students. Every
            contribution, no matter the size, helps us continue our important
            work.
          </p>
          <p style={{fontSize: `${font}px`}}>
            <strong>Monthly Giving:</strong> Consider becoming a monthly donor and provide
            ongoing support to Rakshak Institute. Monthly donations help us plan
            ahead, sustain our programs, and make a long-term difference in the
            lives of our students.
          </p>
          <p style={{fontSize: `${font}px`}}>
            <strong>Corporate Sponsorship:</strong> Partner with Rakshak Institute through
            corporate sponsorship opportunities. By investing in education, your
            company can demonstrate its commitment to social responsibility and
            make a positive impact on the community.
          </p>
        </div>
        <div className="content">
          <h3>Donate Today</h3>
          <p style={{fontSize: `${font}px`}}>
          Your support is invaluable to Rakshak Institute and the students we serve. Together, we can empower tomorrow’s leaders and build a brighter future for all. Donate today and join us in making a difference.
          </p>
          <h4>Thank you for your generosity and belief in our mission.</h4>
        </div>
      </div>
    </div>
  );
}

export default Donate;

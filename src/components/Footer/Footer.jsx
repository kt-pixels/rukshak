import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-details">
        <div className="contact">
          <h3>Contact Details</h3>
          <address>
            <p><i className="fas fa-search-location"></i>&nbsp; &nbsp;<b>Location</b> : RAKSHAK TRUST FOR VISUALLY IMPAIRED<br />127, 2/3, Aditiya Properties, Chauhan Patti, Delhi - 110094</p><br />
            <p><i className="fas fa-phone-alt"></i>&nbsp; &nbsp;<b>Email</b> : beingarakshak@gmail.com</p><br />
            <p><i className="fas fa-mail-bulk"></i>&nbsp; &nbsp;<b>Phone no.</b> : 8448453264, 9968460381</p><br />
          </address>
        </div>
        <div className="pages">
          <h3>Pages</h3>
          <Link to='/'><p>Home</p></Link>
          <Link to='/about-us'><p>About Us</p></Link>
          <Link to='/ruakshak-trust-events'><p>Events</p></Link>
          <Link to='/dashboard'><p>Administration</p></Link>
          <Link to='/admission'><p>Admission</p></Link>
          <Link to='/legal-support'><p>Legal Support</p></Link>
          <Link to='/donate'><p>Donate</p></Link>
          <Link to='/privacy-policy'><p>Privacy Policy</p></Link>
          <Link to='/terms-and-conditions'><p>Terms And Conditions</p></Link>
        </div>
        <div className="social-links">
          <h3>Links</h3>
          <li>
            <i className="fab fa-whatsapp whatsapp"></i>
          </li>
          <li>
            <i className="fab fa-instagram insta"></i>
          </li>
          <li>
            <i className="fab fa-twitter twiter"></i>
          </li>
          <li>
            <i className="fab fa-facebook-messenger messenger"></i>
          </li>
        </div>
      </div>
      <p>Copyright © 2024 Rakshak Trust for Visually Impaired. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

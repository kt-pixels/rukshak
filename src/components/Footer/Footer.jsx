import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-details">
        <div className="contact">
          <h3>Contact Details</h3>
          <address>
            <p><i className="fas fa-search-location"></i>&nbsp; &nbsp;Location</p><br />
            <p><i className="fas fa-phone-alt"></i>&nbsp; &nbsp;Phone</p><br />
            <p><i className="fas fa-mail-bulk"></i>&nbsp; &nbsp;Email</p><br />
          </address>
        </div>
        <div className="pages">
          <h3>Pages</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Events</p>
          <p>Administration</p>
          <p>Admission</p>
          <p>Valunteer</p>
          <p>Legal Support</p>
          <p>Donate</p>
          <p>Contact Us</p>
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

import React from "react";
import "./Admission.css";

function Admission() {
  return (
    <section className="admission-form">
      <div className="background">
        <h2>Admission In Rakshak Trust</h2>
      </div>
      <div className="form-heading">
        <h3>Admission Form</h3>
      </div>
      <div className="submition-form">
        <form>
          <div className="fields">
            <label htmlFor="fname">Candidate First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="first name..."
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="lname">Canditate Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="last name..."
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="confirmemail">Email:</label>
            <input
              type="email"
              id="Confirm_email"
              name="confirmemail"
              placeholder="confirm your email"
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="pname">Parents/Guardians Name:</label>
            <input
              type="email"
              id="parents_name"
              name="pname"
              placeholder=""
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="your contact number"
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="Altphone">Alternate Phone Number:</label>
            <input
              type="tel"
              id="Altphone"
              name="Altphone"
              placeholder="Optional"
            />
          </div>

          <div className="fields">
            <label htmlFor="adhaar">Adhar Card Number:</label>
            <input
              type="text"
              id="adhaar"
              name="adhaar"
              placeholder="xxxx xxxx xxxx"
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="address1">Address: (street 1)</label>
            <input id="address1" name="address1" required />
          </div>

          <div className="fields">
            <label htmlFor="address2">Address: (street 2)</label>
            <input id="address2" name="address2" required />
          </div>

          <div className="fields">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />
          </div>

          <div className="fields">
            <label htmlFor="course">Select Course:</label>
            <select id="course" name="course" required>
              <option value="">Select</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MBA">MBA</option>
              <option value="B.Arch">B.Arch</option>
              {/* <!-- Add more options as needed --> */}
            </select>
          </div>

          <div className="fields">
            <label htmlFor="photo"></label>
            <input type="file" name="photo" id="photo" />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Admission;

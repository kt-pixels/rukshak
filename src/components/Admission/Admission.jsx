import React, { useState } from "react";
import "./Admission.css";

function Admission() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [Cemail, setCemail] = useState("");
  const [Pname, setPname] = useState("");
  const [phone, setPhone] = useState("");
  const [Altphone, setAltphone] = useState("");
  const [Adharcard, setAdharcard] = useState("");
  const [address, setAddress] = useState("");
  const [Altadrress, setAltadrress] = useState("");
  const [dob, setDob] = useState("");
  const [course, setCourse] = useState("");


  // ADDMISSION FORM SUBMITION CODE

  const handleSubmit = async () => {
    console.log("submit", fname, lname, email, Cemail, Pname, phone, Altphone, Adharcard, address, Altadrress, dob, course)

    let admissionForm = await fetch("http://localhost:3000/admission", {
      method: "post",
      body: JSON.stringify({ fname, lname, Cemail, Pname, phone, Altphone, Adharcard, address, Altadrress, dob, course }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    admissionForm = await admissionForm.json();
    console.log(admissionForm);

    if(admissionForm){
      alert("form submit successfully")
    }else{
      alert("something went wrong")
    }
  }

  return (
    <section className="admission-form">
      <div className="background">
        <h2>Admission In Rakshak Trust</h2>
      </div>
      <div className="add-form-heading">
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
              value={fname}
              onChange={(e) => setFname(e.target.value)}
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
              value={lname}
              onChange={(e) => setLname(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={Cemail}
              onChange={(e) => setCemail(e.target.value)}
              placeholder="confirm your email"
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="pname">Parents/Guardians Name:</label>
            <input
              type="text"
              id="parents_name"
              name="pname"
              value={Pname}
              onChange={(e) => setPname(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={Altphone}
              onChange={(e) => setAltphone(e.target.value)}
              placeholder="Optional"
            />
          </div>

          <div className="fields">
            <label htmlFor="adhaar">Adhar Card Number:</label>
            <input
              type="text"
              id="adhaar"
              name="adhaar"
              value={Adharcard}
              onChange={(e) => setAdharcard(e.target.value)}
              placeholder="xxxx xxxx xxxx"
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="address1">Address: (street 1)</label>
            <input
              id="address1"
              name="address1"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="address2">Address: (street 2)</label>
            <input
              id="address2"
              name="address2"
              value={Altadrress}
              onChange={(e) => setAltadrress(e.target.value)}
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          <div className="fields">
            <label htmlFor="course">Select Course:</label>
            <select
              id="course"
              name="course"
              required
              onChange={(e) => setCourse(e.target.value)}
              value={course}
            >
              <option value="">Select</option>
              <option value="BA">Bachelor of Arts (BA)</option>
              <option value="BSc">Bachelor of Science (BSc)</option>
              <option value="BCom">Bachelor of Commerce (BCom)</option>
              <option value="BE">Bachelor of Engineering (BE)</option>
              <option value="B.Tech">Bachelor of Technology (B.Tech)</option>
              <option value="BBA">
                Bachelor of Business Administration (BBA)
              </option>
              <option value="BCS">Bachelor of Computer Science (BCS)</option>
              <option value="MBBS">
                Bachelor of Medicine and Bachelor of Surgery (MBBS)
              </option>
              <option value="BFA">Bachelor of Fine Arts (BFA)</option>
              <option value="LLB">Bachelor of Laws (LLB)</option>
            </select>
          </div>
        </form>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
}

export default Admission;

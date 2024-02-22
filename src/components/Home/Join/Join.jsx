import React, { useState } from "react";
import "./Join.css";
import { useClick } from "../../Context/AllAPIs";

function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitContact = async () => {
    console.log("submit done", name, email, phone, message);

    let contact = await fetch("http://localhost:3000/contacts", {
      method: "post",
      body: JSON.stringify({ name, email, phone, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    contact = await contact.json();
    console.log(contact);

    if (contact) {
      alert("Your request is submited. We will contact you soon");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("something went wrong! Please contact us again on email");
    }
  };

  const {font} = useClick()
  return (
    <section>
      <div className="join-us">
        <div className="equal msg">
          <h3 className="heading">Join Us</h3>
          <p className="text"  style={{fontSize: `${font}px`}}>
            We invite you to join the Rakshak Institute family and embark on a
            journey of discovery, growth, and transformation. Together, we can
            empower the next generation of leaders, innovators, and changemakers
            to make a positive impact on the world.
          </p>
        </div>
        <div className="equal form">
          <form id="contact">
            <h3>Contact Us</h3>
            <input
              type="text"
              placeholder="Your Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Number..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>

          <input
            type="submit"
            className="submit"
            id="cont-sub"
            onClick={handleSubmitContact}
          />
        </div>
      </div>
    </section>
  );
}

export default Join;

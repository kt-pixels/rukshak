import React, { useEffect, useState } from "react";

function ContactForm() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContactForms();
  }, []);

  // Get contact forms
  const getContactForms = async () => {
    let contactForms = await fetch("http://localhost:3000/contact-forms");
    contactForms = await contactForms.json();
    setContact(contactForms);
  };

  // Delete Contact forms
  const deleteContactForm = async (id) => {
    let deleteResult = await fetch(
      `http://localhost:3000/deleteContect/${id}`,
      {
        method: "delete",
      }
    );
    deleteResult = await deleteResult.json();
    console.log(deleteResult);

    if (deleteResult) {
      getContactForms();
    }
  };

  return (
    <section className="contact-form-containe">
      <div className="forms-container">
        <div className="form-heading">
          <h2>Contact Forms</h2>
        </div>
        {contact.map((contact, index) => (
          <div className="details" key={index}>
            <div className="name">
              <h3>Name : {contact.name}</h3>
            </div>
            <div className="email">
              <p>Email : {contact.email}</p>
            </div>
            <div className="phone">
              <p>Phone No. : {contact.phone}</p>
            </div>
            <div className="message">
              <p>Message : {contact.message}</p>
            </div>
            <button onClick={() => deleteContactForm(contact._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactForm;

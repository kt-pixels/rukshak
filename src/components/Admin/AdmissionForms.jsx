import React, { useEffect, useState } from "react";

function AdmissionForms() {
  const [admissionForm, setAdmissionForm] = useState([]);

  useEffect(() => {
    getAdmisForm();
  });

  const getAdmisForm = async () => {
    let form = await fetch("http://localhost:3000/admissionforms");
    form = await form.json();
    console.log(form);
    setAdmissionForm(form);
  };

  return (
    <section className="admissionforms">
      <div className="forms-container">
        <div className="heading">
          <h2>Admission Forms</h2>
        </div>
        {admissionForm.map((form, index) => (
          <div className="form-details" key={index}>
            <h2 className="name">
              NAME : {form.fname} {form.lname}
            </h2>
            <div className="display-flex-details">
              <p className="email"><b>Email : </b>{form.Cemail}</p>
              <p className="email"><b>Parents Name : </b>{form.Pname}</p>
              <p className="email"><b>No. : </b>{form.phone}</p>
              <p className="email"><b>Alt. No. : </b>{form.Altphone}</p>
              <p className="email"><b>Adharcard No. : </b>{form.Adharcard}</p>
              <p className="email"><b>Address 1 : </b>{form.address}</p>
              <p className="email"><b>Address 2 : </b>{form.Altadrress}</p>
              <p className="email"><b>Date Of Birth : </b>{form.dob}</p>
              <p className="email"><b>Course : </b>{form.course}</p>
            </div>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdmissionForms;

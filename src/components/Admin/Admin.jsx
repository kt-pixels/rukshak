import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  const logoutFromAdmin = ()=> {
    localStorage.removeItem("admin")
    navigate("/")
  }

  return (
    <section>
      <div className="admin-details-container">
        <div className="admin-leftside">
          <div className="container">
            <div className="dashboard-heading">
              <h2 className="heading">Rakshak Dashboard</h2>
            </div>
            <div className="routing-links">
              <ul className="links-list">
                <Link to={"/dashboard/users"}>
                  <li className="link">Users</li>
                </Link>
                <Link to="contact-forms">
                  <li className="link">Contact Forms</li>
                </Link>
                <Link to="admission-forms">
                  <li className="link">Admission Forms</li>
                </Link>
                <Link to="events">
                  <li className="link">Events</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="backtohome">
            <button onClick={logoutFromAdmin}>Logout</button>
            <button onClick={gotohome}>Go to home</button>
          </div>
        </div>
        <div className="admin-right-side">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Admin;

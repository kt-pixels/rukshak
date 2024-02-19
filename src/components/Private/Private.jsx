import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const auth = JSON.parse(localStorage.getItem("account"));
  return auth ? <Outlet /> : <Navigate to='/sign-up' />
}

export default Private;

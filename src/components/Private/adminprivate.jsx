import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Adminprivate() {
    const admin = JSON.parse(localStorage.getItem("admin"));
    return admin ? <Outlet /> : <Navigate to='/admin' />
}

export default Adminprivate
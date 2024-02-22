import React, { useEffect, useState } from 'react'
import './admin.css'
import { useNavigate } from 'react-router-dom'

function AdminSignup() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    let admin = JSON.parse(localStorage.getItem('admin'))
    if(admin){
      navigate('/dashboard')
    }
  }, [])

  const adminLogin = async () => {
    console.log("admin login", name, password)

    let admin = await fetch("http://localhost:3000/admin-details", {
      method: "post",
      body: JSON.stringify({ name, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    admin = await admin.json();
    console.log(admin)

    if(admin.name){
      setName("")
      setPassword("")
      localStorage.setItem("admin", JSON.stringify(admin))
      navigate('/dashboard')
    }else{
      alert("please give a valid details")
      navigate('/admin')
    }
  }

  return (
    <section>
      <div className="admin-container">
        <div className="admin-form">
          <h2 className="admin-heading">Admin</h2>
          <form>
            <input type="text" placeholder='your name...' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </form>
          <button className="signup-admin" onClick={adminLogin}>Login</button>
        </div>
      </div>
    </section>
  )
}

export default AdminSignup
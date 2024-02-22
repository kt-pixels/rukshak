import React, { useEffect, useState } from "react";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let getUserDetails = await fetch("http://localhost:3000/users");
    getUserDetails = await getUserDetails.json();
    setUser(getUserDetails);
  };

  const deleteUser = async (id) => {
    let deleteUser = await fetch(`http://localhost:3000/deleteUser/${id}`, {
      method: "delete",
    });

    deleteUser = await deleteUser.json();
    console.log("user delete successfully");

    if (deleteUser) {
      alert("user deleted");
      getUsers();
    }
  };

  return (
    <section className="admin-dashbard-users-page">
      <div className="users-container">
        <h2 className="login-user-heading">Login Users</h2>
        {user.map((user, index) => (
          <div className="user-information" key={index}>
            <h3 className="name">
              {user.fname} {user.lname}
            </h3>
            <div className="users-details">
              <p>Email : {user.email}</p>
              <p>Password : {user.password}</p>
            </div>
            <button onClick={() => deleteUser(user._id)}>Delete</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button>Update</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;

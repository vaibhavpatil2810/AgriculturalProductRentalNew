// Dashboard.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:8484/user/users/${id}`)
      .then(() => {
        alert(" ")
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateUser = (id, updatedUser) => {
    axios
      .put(`/api/users/${id}`, updatedUser)
      .then(() => {
        setUsers(
          users.map((user) => (user.id === id ? updatedUser : user))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleShowEquipment = () => {
    // Navigate to the list of equipment
    navigate("")
  };
  
  const handleShowRentals = () => {
    // Navigate to the list of rentals
    navigate("/rentallist")
  };

  return (
    <div className="dashboard">
     <div className="button-container">
        <button className="button" onClick={handleShowEquipment}>
          List of Equipment
        </button>
        <button className="button" onClick={handleShowRentals}>
          List of Rentals
        </button>
        </div>
      <div className="content">
        <h1>List of Users</h1>
        
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="button button-delete"
                    onClick={() => handleDeleteUser(user.userId)}
                  >
                    Delete
                  </button>
                  <button
                    className="button button-update"
                    onClick={() =>
                      handleUpdateUser(user.id, {
                        ...user,
                        name: "Updated Name",
                      })
                    }
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

// Dashboard.css


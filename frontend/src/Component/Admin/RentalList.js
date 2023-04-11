import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RentalList.css';

const RentalList = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/rental/rentals')
      .then(response => {
        setRentals(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="title">Rental List</h2>
      <table className="rental-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Date</th>
            <th>Hours</th>
            <th>Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map(rental => (
            <tr key={rental.id} className="rental">
              <td>{rental.id}</td>
              <td>{rental.startDate}</td>
              <td>{rental.hours}</td>
              <td>{rental.Customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RentalList;

import React, { useState } from 'react';
import axios from 'axios';
import './RentalForm.css';
 import { useLocation, useNavigate } from 'react-router-dom';

const RentalForm = (props) => {
    const navigate =useNavigate();
    const [StartDate, setStartDate] = useState('');
    const [Hours, setHours] = useState('');
  // const location=useLocation();
    const handleSubmit = (event) => {
      event.preventDefault();
    //  const productId=location.state.productId;
      const data = {startDate: StartDate,
      equipmentId: {
          id:1},
           owner: {
              userId: 3},
      hours: Hours };
  
      axios.post('http://localhost:8080/rental/rentals', data)
        .then((response) => {
          console.log(response);
          // handle success
          alert("added successfully")
        })
        .catch((error) => {
          console.log("fgagfasfasfa");
          // handle error
        });
        navigate("/productlist")
  };

  return (
    <div className='rental-form-container'>
      <h2>RENTAL FORM</h2>
      <form className='rental-form'  onSubmit={handleSubmit}>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          name="start-date"
          value={StartDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <br />
        <label htmlFor="hours">Hours:</label>
        <input
          type="number"
          id="hours"
          name="hours"
          value={Hours}
          onChange={(event) => setHours(event.target.value)}
        />
        <br />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default RentalForm;



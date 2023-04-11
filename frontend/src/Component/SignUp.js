import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import signup from './Image/signup.jpg'; // gives image path
import { useNavigate } from "react-router-dom";
function Registration() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Role, setRole] = useState('');
  const navigate=useNavigate()

  const myobject={

      name:Name,
      email:Email,
      password:Password,
      role:Role

  }


  const handleSubmit = (event) => {
    event.preventDefault();


    axios.post('http://localhost:8080/user/users', myobject)
      .then(response => {
      alert("resistered successfully")
      })
      .catch(error => {
        // Handle registration error
      });
     navigate("/login")
  }

  return (
    <div
      style={{
        backgroundImage: `url(${signup})`,
        backgroundSize: 'cover',
        height: '92vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <table align='center'>
        <div className='signup'>
          <form className='needs-validation' onSubmit={handleSubmit}>
            <h2 className="mb-3" align='center'>Sign Up</h2>
            <div className='form-group was-validated mb-2'>
              <label htmlfor='Name' className='form-label'
               >Name</label><br />
              <input id='form1' type='text' className='form-control' placeholder="Enter your name" required  onChange={e => setName(e.target.value)}/>
            </div>

            <div className='form-group was-validated mb-2'>
              <label htmlfor='email' className='form-label'
                >Email</label><br />
              <input type='email' className='form-control' placeholder="Enter your email" required onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='form-group was-validated mb-2'>
              <label htmlfor='password' className='form-label'
                >Create a Password</label><br />
              <input type='password' className='form-control' placeholder="Create a Password" required onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className='form-group was-validated mb-2'>
              {/* <label htmlfor='password' className='form-label'>ROLE</label><br /> */}
             <select  onChange={e => setRole(e.target.value)}>
              <option value="Customer">Take On Rent</option>
              <option value="Owner">Give On Rent</option>
             </select>
            </div>

            <button type='submit' className='btn btn-success w-100 mt-2'>Register</button><br /><br />
            <p className="forgot-password text-right">
              <a href="/login">Already have an account?</a>
            </p>

          </form>
        </div>
      </table>
    </div>
  );
}

export default Registration;

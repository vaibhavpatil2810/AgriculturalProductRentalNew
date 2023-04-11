import React, { useState } from 'react';
import axios from 'axios';
// import backgroundImage from './path/to/background-image.jpg';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/forgot-password', { email })
      .then(response => {
        // Handle successful forgot password request
      })
      .catch(error => {
        // Handle forgot password error
      });
  }

  return (
    <div
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: 'cover',
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    >
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;

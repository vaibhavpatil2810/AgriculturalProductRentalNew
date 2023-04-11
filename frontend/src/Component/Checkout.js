import React, { useState } from 'react';
import axios from 'axios';

function CheckoutForm(props) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/orders', formData)
      .then(res => {
        props.onSuccess(res.data);
      })
      .catch(error => {
        props.onError(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="zip">Zip:</label>
        <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="cardExpiry">Expiration:</label>
        <input type="text" id="cardExpiry" name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="cardCVC">CVC:</label>
        <input type="text" id="cardCVC" name="cardCVC" value={formData.cardCVC} onChange={handleChange} />
      </div>
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default CheckoutForm;

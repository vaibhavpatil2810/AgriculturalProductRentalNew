import React, { useState } from "react";
import axios from "axios";
import "./AddEquipmentForm.css"; // Import your CSS file here

const AddEquipmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgUrl: "",
    
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/product/products", formData);
      console.log(response.data);
      setFormData({
        name: "",
        description: "",
        quantity: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-equipment-form">
      <h2>Add Equipment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Image</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddEquipmentForm;

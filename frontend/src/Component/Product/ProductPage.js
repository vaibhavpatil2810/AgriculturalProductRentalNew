import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProductData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleRentClick = () => {
    // Handle logic for when the "Take on rent" button is clicked
  };

  const handleCartClick = () => {
    // Handle logic for when the "Add to Cart" button is clicked
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      <h1>{productData.name}</h1>
      <img src={productData.image} alt={productData.name} />
      <p>{productData.description}</p>
      <p>Price: {productData.price}</p>
      <button onClick={handleRentClick}>Take on rent</button>
      <button onClick={handleCartClick}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;

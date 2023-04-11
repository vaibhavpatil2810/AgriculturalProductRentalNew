import React from 'react';
import './ProductCard.css';
// import signup from './Image/signup.jpg'; // gives image path
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (
    
    <div className="product-card">
      <img  src={product.imgUrl} alt={product.name}/>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.rentalPrice}</p>
      <Link to={{ pathname: "/rental", state: { productId :product.id } }}>
      <button>Take On Rent</button>
      </Link>
     

    </div>
  );
};

export default ProductCard;

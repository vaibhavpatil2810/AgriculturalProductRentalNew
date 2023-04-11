import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css';
import aboutus from './Image/aboutus.jpg'; // gives image path

function AboutUs() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/about-us-data.json')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{
      backgroundImage: `url(${aboutus})`,
      backgroundSize: 'cover',
      height: '92vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      
      <div className="about-us" align="center">
        {/* <h2 className="about-us-title">{data.title}</h2>
        <p className="about-us-content">{data.content}</p> */}
        <h2 className="about-us-title">ABOUT US</h2>
        <p className="about-us-content">
        The agricultural product rental system refers to a platform where farmers can rent out their equipment and other resources to other farmers who require them on a temporary basis.
         This system can help farmers who do not have the resources or capital to purchase their own equipment to use for farming. 
        The scope of this system includes creating an online platform that allows farmers to list their available resources and enables other farmers to browse and rent them. The platform would need to include features such as search and filter options, 
        booking and payment systems, and a rating system to ensure trust and reliability between parties. 


          
        </p>
      </div>
    </div>

  );
};

export default AboutUs;

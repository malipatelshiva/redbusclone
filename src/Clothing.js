import React from 'react';
import './Clothing.css';

const Clothing = () => {
  return (
    <div className="clothing-page">
      <h1>Clothing</h1>
      <div className="clothing-categories">
        <div className="category">
          <h2>Men's Clothing</h2>
          <ul>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Shorts</li>
            {/* Add more categories as needed */}
          </ul>
        </div>
        <div className="category">
          <h2>Women's Clothing</h2>
          <ul>
            <li>Dresses</li>
            <li>Tops</li>
            <li>Skirts</li>
            <li>Jeans</li>
            <li>Shorts</li>
            {/* Add more categories as needed */}
          </ul>
        </div>
        {/* Add more category sections as needed */}
      </div>
    </div>
  );
};

export default Clothing;
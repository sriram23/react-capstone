import React from 'react';
import "./MenuCard.css"

function MenuCard({ image, dish, price, description }) {
  return (
    <div className="menu-card">
        <figure className='menu-card-image-container'>
      <img src={image} alt={dish} className="menu-card-image" />
      </figure>
      <div className="menu-card-info">
        <h2 className="menu-card-dish">{dish}</h2>
        <p className="menu-card-price">₹{price}</p>
      </div>
      <p className="menu-card-description">{description}</p>
      <button className="menu-card-order-button">Order Now</button>
    </div>
  );
}

export default MenuCard;
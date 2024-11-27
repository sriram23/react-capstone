import React from 'react';
import { Link } from 'react-router-dom';
import HERO_IMAGE from '../assets/hero.png'
import "./Home.css"
import Menu from './Menu';

function Home() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Bangalore</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <Link to="/reservation" className="reserve-button">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-right">
          <img src={HERO_IMAGE} alt="Hero Image" className="hero-image" />
        </div>
      </div>
      <Menu/>
    </div>
  );
}

export default Home;
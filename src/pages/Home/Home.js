import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HERO_IMAGE from '../../assets/hero.png'
import "./Home.css"
import Menu from '../Menu/Menu';
import About from '../About/About';

function Home() {
  const location = useLocation();
  useEffect(() =>{
    const hash = location.hash.substring(1)
    if(hash) {
      const element = document.getElementById(hash)
      if(element) {
        element.scrollIntoView({behavior: 'smooth'})
      }
    } else {
      const element = document.getElementById('hero')
      if(element) {
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  },[location.hash]);
  return (
    <div>
      <div id='hero' className="hero-container">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Bangalore</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <Link to="/reservation" className="reserve-button">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-right">
          <img src={HERO_IMAGE} alt="Hero Section" className="hero-image" />
        </div>
      </div>
      <div id='menu'><Menu/></div>
      <div id='about'><About/></div>
    </div>
  );
}

export default Home;
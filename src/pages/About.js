import React from 'react';
import CHEF from '../assets/chef.png'
import DISH from '../assets/dish.png'
import "./About.css"
function About() {
  return (
    <div className="about">
      <div className="about-left">
        <h1>Little Lemon</h1>
        <h2>Bangalore</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Nunc eget justo eget ligula placerat bibendum. Integer eget nulla eget metus bibendum bibendum. Donec sed ligula eget nulla bibendum bibendum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Nunc eget justo eget ligula placerat bibendum. Integer eget nulla eget metus bibendum bibendum. Donec sed ligula eget nulla bibendum bibendum.</p>
      </div>
      <div className="about-right">
        <div className="about-image">
          <img src={CHEF} alt="Chef" className="image-1" />
          <img src={DISH} alt="Dish" className="image-2" />
        </div>
      </div>
    </div>
  );
}

export default About;
import React from 'react';
import "./Footer.css"
import LITTLE_LEMON from "../../assets/LittleLemon.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <img src={LITTLE_LEMON} alt="Logo" />
        </div>
        <div className="footer-column">
          <h2>Company</h2>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="https://github.com/sriram23">Our Team</a></li>
            <li><a href="https://github.com/sriram23">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Support</h2>
          <ul>
            <li><a href="https://github.com/sriram23">FAQ</a></li>
            <li><a href="https://github.com/sriram23">Contact Us</a></li>
            <li><a href="https://github.com/sriram23">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://x.com/imsriramb">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
      <p>This application is for educational purpose only.</p>
        <p>©️ 2024 &nbsp;<a href='https://github.com/sriram23'>Sriram</a>. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
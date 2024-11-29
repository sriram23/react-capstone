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
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Support</h2>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      ©️ All rights reserved 2024. Developed by <a href='https://github.com/sriram23'>Sriram</a>. This is for educational purpose only.
    </div>
  );
}

export default Footer;
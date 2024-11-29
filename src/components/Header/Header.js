import React from 'react';
import logo from '../../assets/logo.png'; // replace with your logo image
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Little Lemon</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservation" activeClassName="active">
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/#menu" activeClassName="active">
                Order Online
              </NavLink>
            </li>
            <li>
              <NavLink to="/#menu" activeClassName="active">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/#about" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
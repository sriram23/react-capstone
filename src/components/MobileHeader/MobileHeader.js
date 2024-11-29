import React from 'react';
import { NavLink } from 'react-router-dom';

import "./MobileHeader.css"

const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <nav className="mobile-nav">
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
  );
};

export default MobileHeader;
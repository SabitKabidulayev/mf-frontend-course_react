import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/users">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          About Us
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
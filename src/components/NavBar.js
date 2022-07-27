import React from 'react';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import { FaChevronLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const NavBar = () => (
  <div className="header">
    <NavLink to="/">
      {' '}
      <FaChevronLeft className="logo" />
    </NavLink>

    <h3 className="title"> Games Deals Finder</h3>
    <div className="icons">
      <BiMicrophone className="icon" />
      <BiCog className="icon" />
    </div>
  </div>
);

export default NavBar;

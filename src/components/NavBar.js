import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css'; 
import logo from './images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Blogs</li>
        <li>Poltfolio</li> 
        <li>Contact</li>
        <button>Sign In</button>
      </div>

      <div className="burger-menu" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;

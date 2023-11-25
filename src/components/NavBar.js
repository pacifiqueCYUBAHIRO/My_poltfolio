import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import './Navbar.css';
import logo from './images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    setIsOpen(false); // Close the navbar after clicking a link
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>

      
  <li>
    <Link
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      to="about"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      About
    </Link>
  </li>
  <li>
    <Link
      to="blogs"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      Blogs
    </Link>
  </li>
  <li>
    <Link
      to="poltfolio"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      Poltfolio
    </Link>
  </li>
  <li>
    <Link
      to="contacts"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      Contacts
    </Link>
  </li>

        <button>Sign In</button>
      </div>

      <div className="burger-menu" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;

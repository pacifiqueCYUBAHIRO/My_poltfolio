import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link as ScrollLink } from 'react-scroll';
import Modal from 'react-modal';
import './Navbar.css';
import logo from './images/logo.png';
import SignInForm from './SignInForm';
// import SignUpForm from './SignUpForm';

Modal.setAppElement('#root');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  // const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
    // setIsSignUpModalOpen(false);
  };



  const closeModals = () => {
    setIsSignInModalOpen(false);
    // setIsSignUpModalOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleLinkClick('home')}
            className={activeLink === 'home' ? 'active' : ''}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleLinkClick('about')}
            className={activeLink === 'about' ? 'active' : ''}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="blogs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleLinkClick('blogs')}
            className={activeLink === 'blogs' ? 'active' : ''}
          >
            Blogs
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="poltfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleLinkClick('poltfolio')}
            className={activeLink === 'poltfolio' ? 'active' : ''}
          >
            Poltfolio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleLinkClick('contacts')}
            className={activeLink === 'contacts' ? 'active' : ''}
          >
            Contacts
          </ScrollLink>
        </li>

        <button onClick={openSignInModal}>Sign In</button>
        {/* <button onClick={openSignUpModal}>Sign Up</button> */}
      </div>

      <div className="burger-menu" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <Modal
        isOpen={isSignInModalOpen}
        onRequestClose={closeModals}
        contentLabel="Sign In Modal"
        className="modal-content"
      >
        <button className="close-button" onClick={closeModals}>
          Close
        </button>
        <SignInForm />
      </Modal>

     
    </nav>
  );
};

export default Navbar;

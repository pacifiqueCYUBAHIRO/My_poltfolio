import React from 'react'
import logo from './images/logo.png';
import './Navbar.css';
function NavBar() {
  return (
    <div>
      
        <nav className="navbar">
            <img src={logo} alt="" />
            <ul>
                <li id="home">Home</li>
                <li id="about">About us</li>
                <li id="poltfolio">Poltfolio</li>
                <li id="blogs">Blogs</li>
                <li id="contacts">Contacts</li>
            </ul>
            <button id="home"signin>Sign In</button>
        </nav>
    
    </div>
  )
}

export default NavBar;

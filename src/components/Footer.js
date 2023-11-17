import React from 'react'
import './footer.css'
import logo from './images/logo.png';
function Footer() {
  return (
  <div>
    <footer className="footer">
    <div className="main-footer">
        <div className="social-media">
        <h4>Stay Connected</h4>
        <img src={logo}  alt='pic'/>
            
        </div>
        <div className="address">
        <h4>Addresss</h4>
            <p>Kigali, Rwanda <br></br>KG7,Gisozi Sector,Kigali City Province,Adress <br></br>Ruhango cell,Ntora Village <br></br> At ULK center</p>
        </div>
        <div className="quick-links">
        <h4>Quick-links</h4>
            <li>About</li>
            <li>Home</li>
            <li>Contact</li>
            <li>Poltfolio</li>
            <li>Blogs</li>
        </div>
        <div className="latest-article">
            <h4>latest-article</h4>
            <li>but still need the element link,python course</li>
            <li>python course</li>
            <li>but still need the element </li>
            <li>python course</li>
        </div>

    </div>

    <div className="sub-footer">
      <p> Copyright 2023 | &copy; Pacifique All rights Reserved  </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer

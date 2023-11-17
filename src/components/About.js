import React from 'react'
import logo from './images/logo.png';
import "./about.css"

function About() {
  return (
    <div>
      <div className="about-container">
        <h3 className='about'>About Me</h3>
        <div className="about1">
        <div className="pic">
            <img src={logo} width="500px" alt="pic"/>
        </div>
        <div className="about-desc">
            <p>Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions.Proven experience developing consumer-focused websites using HTML, CSS, PHP and JavaScript. Good knowledge of the best practices for web design, user experience, and speed.</p>
            
        </div>
        </div>
        </div>


    </div>
  )
}

export default About

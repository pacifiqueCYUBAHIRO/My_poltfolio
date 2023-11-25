import React, { useEffect } from 'react';
import logo from './images/mypic.png';
import "./about.css";

function About() {
    const opentab = (event, tabname) => {
        const tabLinks = document.getElementsByClassName("tab-links");
        const tabContents = document.getElementsByClassName("tab-contents");
    
        for (const tablink of tabLinks) {
            tablink.classList.remove("active-link");
        }
        for (const tabcontent of tabContents) {
            tabcontent.classList.remove("active-tab");
        }
    
        const targetElement = document.getElementById(tabname);
    
        if (targetElement) {
            event.currentTarget.classList.add("active-link");
            targetElement.classList.add("active-tab");
        } else {
            console.error(`Element with ID ${tabname} not found.`);
        }
    };
    

    return (        <div>
            <div className="about-container">
                <h3 className='about'>About Me</h3>
                <div className="about1">
                    <div className="pic">
                        <img src={logo} alt="pic" />
                    </div>
                    <div className="about-col-2">
                        <p>Solution-driven web developer adept at contributing to a highly collaborative work environment and finding solutions.<br /> Proven experience developing consumer-focused websites using HTML, CSS, PHP, and JavaScript. Good knowledge of the best practices for web design, user experience, and speed.</p>
                        <div className="tab-titles">
                            <p className="tab-links active-link" onClick={(e) => opentab(e, 'skills')}>Skills</p>
                            <p className="tab-links" onClick={(e) => opentab(e, 'experience')}>Experience</p>
                            <p className="tab-links" onClick={(e) => opentab(e, 'education')}>Education</p>
                        </div>
                        <div className="tab-contents active-tab" id="skills">
                            <ul>
                                <li key="skill-1"><span>Html&nbsp;&nbsp;</span>Designing Web/App Interfaces</li>
                                <li key="skill-2"><span>Css&nbsp;&nbsp;</span>Web page Styling</li>
                                {/* ... other list items ... */}
                            </ul>
                        </div>
                        <div className="tab-contents" id="experience">
                            <ul>
                                <li key="exp-1"><span></span>Designing Web/App Interfaces</li>
                                <li key="exp-2"><span>Web Development</span>Web Development</li>
                                {/* ... other list items ... */}
                            </ul>
                        </div>
                        <div className="tab-contents" id="education">
                            <ul>
                                <li key="edu-1"><span>ATLP Certificate</span>Designing Web/App Interfaces</li>
                                <li key="edu-2"><span>Bachelor's Degree</span>Web Development</li>
                                {/* ... other list items ... */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

import React from 'react'
import "./poltfolio.css"

function Poltfolio() {
  return (
    <div>
      <div className="poltfolio">
        <h3 className='poltfolio-title'>Poltfolio</h3>
        <div className="poltfolio-card">
          
          <div className="pcards">
            <h4>Computer science Couses</h4>
            <p>Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions.Proven experience developing consumer-focused websites using HTML, CSS, PHP and JavaScript. Learn more</p>
            <a href='/'>Learn more</a>
          </div>

          <div className="pcards">
            <h4>Software Engineering</h4>
            <p>Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions.Proven experience developing consumer-focused websites using HTML, CSS, PHP and JavaScript. Learn more</p>
            <a href='/'>Learn more</a>
          </div>

          <div className="pcards">
            <h4>Developer Web</h4>
            <p>Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions.Proven experience developing consumer-focused websites using HTML, CSS, PHP and JavaScript. Learn more</p>
            <a href='/'>Learn more</a>
          </div>

        </div>
        <div className='btn'><button className='seemore'>See more</button></div>
      </div>
    </div>
  )
}

export default Poltfolio

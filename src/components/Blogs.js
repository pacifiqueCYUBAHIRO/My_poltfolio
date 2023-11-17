import React from 'react'
import "./blogs.css"

function Blogs() {
  return (
    <div>
      
      <div className="blogs">
        <h3 className='blog-title'>Blogs</h3>
        <div className="blogscard">
          <div className="cards">
            <h4>Web Design</h4>
            <p>Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions.Proven experience developing consumer-focused websites using HTML, CSS, PHP and JavaScript. Learn more</p>
            <a href='/'>Learn more</a>
          </div>

          <div className="cards">
            <h4>UI/UX</h4>
            <p>Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions.Proven experience developing consumer-focused websites using HTML, CSS, PHP and JavaScript. Learn more</p>
            <a href='/'>Learn more</a>
          </div>

          <div className="cards">
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

export default Blogs

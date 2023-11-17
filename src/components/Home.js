import React from 'react'
import './Home.css';
import pacc from './images/pic.png'
function Home() {
  return (
    <div>
    <div className='container'>
        <div className='left-side'>
            <h2>Hello world,<br></br>I’m <span className='pacc'>Pacifique</span>  From Rwanda WEB Developer </h2>
            <label className='desc'>Hello world, I’m Pacifique  From Rwanda WEB Developer</label>
            <br></br><br></br><br></br>
            <button className='cv'><a href="https://drive.google.com/file/d/1-Bvr0fokXGpEI3Qwads8lLsT3lyUthzj/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a></button>
        </div>
      <div className='right-side'>
        <img src={pacc} width="540px" height="540px" alt="" />
      </div>

    </div>

    </div>
  )
}

export default Home
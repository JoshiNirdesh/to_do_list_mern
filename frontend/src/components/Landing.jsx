import React from 'react'
import Hero from "../assets/hero.jpg"
import { Link } from 'react-router-dom'
import "../components/landing.css"
const Landing = () => {
  return (
    <div className='hero'>
      <div className="intro-text">
        <h1>
          <span className='tagline1'>Organize work and life</span>
          <span className="tagline2">finally.</span>
        </h1>
        <p>
          Type just anything into the taks field and TodoList<br/>
          on-of-its-kind natural language recognization will instantly fill your 
          to-do-list
        </p>
        <Link className="btn red" to='/register'>Register Now !</Link>
        <Link className="btn blue" to="/login">Login</Link>
      </div>
      <div>
        <img src={Hero} alt="" width={'100%'} height={515} />
      </div>
    </div>
    
  )
}

export default Landing;

import React from 'react'
import Profile from "../../assets/profile.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Patcharapon P.</span> Full Stack developer
          </h1>

          <p className="home__description">
          Thank you for considering my application for the Full Stack Developer Internship position. I am excited about the opportunity to apply my skills 
          and gain hands-on experience in both front-end and back-end development. I am eager to contribute to your team and learn from talented professionals in the field.
          </p>

          <Link to='/about' className='button'>
            More About me <span className='button__icon'><FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block">

      </div>
    </section>
  )
}

export default Home
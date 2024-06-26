import React from 'react'
import './About.css'
import ME from '../../assets/about16.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Final Year at NIT Raipur</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Connections</h5>
              <small>800+ linkedin connections</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20-30 Projects Completed</small>
            </article>
          </div>
          <p>
            I am a student of National Institute Of Technology, Raipur currently pursuing Bachelor's in Technology from Information Technnology branch.
            I aspire to become a Software Development Engineer. Currently I am a Knight at Leetcode and a 3-star coder at Codechef. On the development side,
            I am familiar with the MERN-Stack(MongoDB, ExpressJs, Reactjs and NodeJs) as a Full-Stack Web Developer. I am also a great fan of sports including cricket and football. My hobby is playing football and listening to some good music.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
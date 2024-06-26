import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Saaraansh Mishra</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/saaraansh-mishra-5392a31b8/"><BsLinkedin/></a>
        <a href="https://twitter.com/SaaraanshMishr1"><IoLogoTwitter/></a>
        <a href="https://api.whatsapp.com/send?phone=+917000631291"><BsWhatsapp/></a>
        
      </div>
      <div className="footer__copyright">
        <small>&copy; Saaraansh Mishra. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
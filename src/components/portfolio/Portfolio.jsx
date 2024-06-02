import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio11.jpg'
import IMG2 from '../../assets/portfolio12.jpg'
import IMG3 from '../../assets/portfolio13.jpg'
import IMG4 from '../../assets/portfolio14.jpg'
import IMG5 from '../../assets/portfolio15.jpg'
import IMG6 from '../../assets/portfolio16.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          
          <div className="portfolio__item-cta">
          <h3>Study-Notion Website</h3>
          <div className="pgl">
          <a href="https://github.com/Saaraansh10/Studynotion-Website" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://studynotion-website-5f95.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="img2" />
          </div>

          <div className="portfolio__item-cta">
          <h3>Razorpay Website Clone</h3>
          <div className="pgl">
          <a href="https://github.com/Saaraansh10/Razorpay-Website-Clone" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://razorpay-website-clone-td3r-93l0d9otg.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="img4" />
          </div>

          <div className="portfolio__item-cta">
          <h3>Password Generator App</h3>
          <div className="pgl">
          <a href="https://github.com/Saaraansh10/Password-Generator" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://saaraansh10.github.io/Password-Generator/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="img3" />
          </div>

          <div className="portfolio__item-cta">
          <h3>Dev-Detective App</h3>
          <div className="pgl">
          <a href="https://github.com/Saaraansh10/Dev-Detective-Project" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://saaraansh10.github.io/Dev-Detective-Project/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="img5" />
          </div>

          <div className="portfolio__item-cta">
          <h3>Shopping Cart App</h3>
          <div className="pgl">
          <a href="https://github.com/Saaraansh10/Shopping-Cart-App" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://shopping-cart-app-seven-kappa.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="img6" />
          </div>

          <div className="portfolio__item-cta">
          <h3>Weather App</h3>
          <div className="pgl">
          <a href="https://github.com/Saaraansh10/Weather-App" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://saaraansh10.github.io/Weather-App/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
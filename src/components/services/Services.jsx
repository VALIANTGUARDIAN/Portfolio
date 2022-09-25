import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full-Stack Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-End Design & Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full-Stack Development</p>
            </li>
          </ul>
        </article>

        {/* END OF FULLSTACK */}

        <article className="service">
          <div className="service__head">
            <h3>SEO SOLUTIONS</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>On-Page SEO</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Site Architecture</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
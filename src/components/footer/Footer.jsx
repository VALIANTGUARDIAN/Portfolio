import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RiTwitterLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>DIGVIJAY</a>

      <ul className='permalinks'>
        <li><a href="#"></a>home</li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram"><AiOutlineInstagram/></a>
        <a href="twitter"><RiTwitterLine/></a>
      </div>
    </footer>
  )
}

export default Footer
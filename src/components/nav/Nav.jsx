import React from 'react';
import './Nav';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#' ? 'active' : ''}><MdOutlineDesignServices /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav
import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {DiGithubAlt} from 'react-icons/di'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="hhttps://www.linkedin.com/in/digvijaysinghvg/" target="_blank"><FiLinkedin /></a>
      <a href="https://github.com" target="_blank"> <DiGithubAlt /></a>
      <a href="https://instagram.com" target="_blank"><AiOutlineInstagram /></a>
    </div>
  )
}

export default HeaderSocials
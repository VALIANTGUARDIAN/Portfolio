import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {DiGithubAlt} from 'react-icons/di'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/digvijaysinghvg/" target="_blank"><FiLinkedin /></a>
      <a href="https://github.com/VALIANTGUARDIAN" target="_blank"> <DiGithubAlt /></a>
      <a href="https://www.instagram.com/valiant__guardian/" target="_blank"><AiOutlineInstagram /></a>
    </div>
  )
}

export default HeaderSocials
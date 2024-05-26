import React from 'react'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='a' className='footer__logo'>W3bzee</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://twitter.com/'><IoLogoTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Created By W3bzee. All rights reserved. </small>
      </div>

    </footer>
  )
}

export default Footer
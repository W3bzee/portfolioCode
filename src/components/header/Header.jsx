import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './headerSocials'
import Llama from '../../assets/Llama.png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>W3bzee</h1>
        <h5 className='text-light'>Web3 Enthusiast</h5>
        <h5 className='text-light'>&</h5>
        <h5 className='text-light'>Fullstack Developer in Training</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={Llama} alt='me'/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    
    </header>
  )
}

export default Header
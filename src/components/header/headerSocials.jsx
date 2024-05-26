import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div>
        <div className='header__socials'>
            <a href='https://github.com/W3bzee' target = "_blank"><AiFillGithub size={42}/></a>
            <a href='https://twitter.com/W3bzee' target = "_blank"><AiOutlineTwitter size={42}/></a>
        </div>
    </div>
  )
}

export default HeaderSocials
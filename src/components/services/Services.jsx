import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className= 'service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Website Layout</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create and Host Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create Web Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Automate redundant tasks</p>
            </li>
          </ul>
        </article>
        {/* End of UI Section */}
        <article className='service'>
          <div className= 'service__head'>
            <h3>Discord Services</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Discord Bot Creation and Hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Discord Server creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Community Moderation</p>
            </li>
          </ul>
        </article>
        {/* End of UI Section */}
        <article className='service'>
          <div className= 'service__head'>
            <h3>Project Advising</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Connect projects together for collaboration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop and implement growth marketing strategies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create Collaboration Art for marketing</p>
            </li>
          </ul>
        </article>
        {/* End of UI Section */}



      </div>
    </section>
  )
}

export default Services
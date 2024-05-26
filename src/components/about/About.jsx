import React from 'react'
import './about.css'
import Llama from '../../assets/Llama.png'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <h5>Development</h5>
              <small>6+ Years</small>
            </article>

            <article className='about__card'>
            <h5>Content Creation</h5>
            <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Hey, thanks for stopping in! I design batteries by day, and contribute to W3b3 every other second I have. 
            I am based in San Francisco, and I joined the W3b3 space late 2021. I love the emphasis on individual contributors - you get out what you put in. 
            On that note, I am looking to connect with like-minded individuals and help develop and deliver great products!
          </p>

          <a href='#contact' className='btn btn_primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
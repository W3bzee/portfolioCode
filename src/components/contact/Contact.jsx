import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {IoLogoTwitter} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kws8x3j', 'template_1jk88iw', form.current, 'ff0MuPrKeoTGwb0NB')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>W3bzee@gmail.com</h5>
            <a href="mailto:W3bzee@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <IoLogoTwitter className='.contact__option-icon'/>
            <h4>Twitter DM</h4>
            <h5>@W3bzee</h5>
            <a href="https://twitter.com/W3bzee" target="_blank">Send a DM</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
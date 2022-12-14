import React, { useRef } from 'react'

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'

import emailjs from '@emailjs/browser'

import ButtonComponent from '../components/ButtonComponent'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID)
        .then(result => console.log(result.text),
        error => console.log(error.text)
        );

        e.target.reset();
  }
  return (
    <section className="collab-container">
    <div className="collab">
      <div className="collab-part">
        <h4>
          let's work together
        </h4>
      </div>
    </div>
    <div className="contact-container">
        <div className="contact-details">
          <h6>
            contact details
          </h6>
          <div>
            <span>
              <AiOutlineMail />
            </span>
            <p>
            davidobilo9@gmail.com
            </p>
          </div>
          <div>
            <span>
              <AiOutlinePhone />
            </span>
            <p>
            +234 705 075 9896
          </p>
          </div>
          <div>
            <span>
              <GoLocation />
            </span>
            <p>
              Location: Asaba, Nigeria
            </p>
          </div>
        </div>
        <section className="contact-form">
          <form onSubmit={handleSubmit} ref={form}>
            <div className="form-input">
              <label>
                What's your name?
              </label>
              <input type="text" placeholder="john doe" name="user_name" required />
            </div>
            <div className="form-input">
              <label>
                What's your email?
              </label>
              <input type="email" placeholder="john@doe.com" name="user_email" required />
            </div>
            <div className="form-input">
              <label>
                What's your phone number <span>(Whatsapp / Telegram)</span>
              </label>
              <input type="text" placeholder="+234 901 970 3944" name="user_phone" required />
            </div>
            <div className="form-input">
              <label>
                Your message
              </label>
              <textarea name="message" id="textarea" cols="50" rows="10" placeholder="Hey David, can you work on this?" required></textarea>
            </div>
            <ButtonComponent text='send message' />
          </form>
        </section>
      </div>
      <Link to='/'>
        <ButtonComponent text='back' />
      </Link>
  </section>
  )
}

export default ContactPage
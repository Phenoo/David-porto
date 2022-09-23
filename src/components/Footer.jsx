import React from 'react'
import Logo from './Logo'


import {AiOutlineInstagram, AiFillBehanceSquare, AiFillHeart} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {BsDribbble} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <Logo />
        <div className="social-links">
          <ul>
            <li>
              <a href="#aa">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#aa">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href="#aa">
                <AiFillBehanceSquare />
              </a>
            </li>
            <li>
              <a href="#aa">
                <BsDribbble />
              </a>
            </li>
          </ul>
        </div>
        <div className="desco-text">
          <span><AiFillHeart /></span> created by <a href='https://desco.vercel.app'>
            desco
          </a>
        </div> 
      </section>
    </footer>
  )
}

export default Footer
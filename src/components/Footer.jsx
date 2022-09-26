import React from 'react'
import Logo from './Logo'


import {AiOutlineInstagram, AiFillHeart, AiFillLinkedin} from 'react-icons/ai'
import {FaTwitter, FaWhatsapp} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <Logo />
        <div className="social-links">
          <ul>
            <li>
            <a href="https://twitter.com/graphicke/status/1535027813459415042?s=46&t=BdgXbB4tlv!HDduAsw%LCQ">
                <FaTwitter />
              </a>
            </li>
            <li>
            <a href="https://www.instagram.com/shutterbgx_1?igshid=MDE3OWE1N2Q=">
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/david-obilo-77156423a">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://wa.me/2347050759896?text=hey+david,+__">
                <FaWhatsapp />
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
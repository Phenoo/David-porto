
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'

import {AiOutlineInstagram, AiFillBehanceSquare, AiFillLinkedin} from 'react-icons/ai'
import { FaTwitter, FaWhatsapp} from 'react-icons/fa'


const Container = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;


#home, button{
  display: none;
}

h4, span{
  z-index: 100;
}

#home{
  @media(max-width: 51em){
    display: flex;
  }
}



.active{
  color: #f53b3b;
}

button{
  @media(max-width: 51em){
    position:fixed;
    cursor: pointer;
    right: 10px;
    display: flex;
    flex-direction: column;
    z-index: 100;
  }
}


`


const MenuList = styled.div`

.social{
  display: none;
}

@media(max-width: 51em){
  display: flex;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  max-height: 100vh;
  overflow-y: hidden;
  z-index: 10;
  margin: 0;
  padding: 0;
  padding: 3rem 2rem;
  background-color: #111;
  transform: ${props => props.click ? 'translateX(0)' : 'translateX(1000%)'};
  transition: all 0.6s ease;

  .social{
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;

    li{
      font-size: 1rem;
    }
  }
  #icon{
    display: flex;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 20px;
    right: 80px;
    @media(max-width: 25em){
      width: 30px;
      height: 30px;
    }

  }
}

ul{
  display: flex;
  gap: 1rem;

  @media(max-width: 51em){
    flex-direction: column;
  }
}

li{
  text-transform: uppercase;
  font-family: "Poppins";
  transition: 300ms ease;

  &:hover {
    color: #f53b3b;
    transition: 300ms ease;
  }

  @media(max-width: 51em){
    font-size: 2rem;

    @media(max-width: 25em){
      font-size: 1.5rem;
    }
  }

}

`

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [current, setCurrent] = useState(1);
  
  const handleClick = () => {
    setClick(!click);
  }



  return (
    <section>
      <Container>
        <Link to='/'>
          <Logo />
        </Link>
        <MenuList click={click}>
          <ul onClick={handleClick}>
            <li id="home">
              <Link to='/' onClick={() => setCurrent(1)} className={current === 1 ? 'active' : ''}>
                home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={() => setCurrent(2)} className={current === 2 ? 'active' : ''}>
                about
              </Link>
            </li>
            <li>
              <Link to='/works' onClick={() => setCurrent(3)} className={current === 3 ? 'active' : ''}>
                works
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setCurrent(4)} className={current === 4 ? 'active' : ''}>
                contact
              </Link>
            </li>
          </ul>
          {click && <ul className="social">
          <li>
            <a href="#a">
              <AiFillBehanceSquare />
            </a>
          </li>
          <li>
          <a href="https://twitter.com/DevDesco?t=fBV_tfM8NoTpNzFokYbtbw&s=09">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eze-paschal-158457233">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
          <a href="https://wa.me/2349019703944?text=hey+desco+__">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="https://link.medium.com/JZjTRn2IOsb">
              <AiOutlineInstagram />
            </a>
          </li>
        </ul> }

        </MenuList>
        <button onClick={handleClick} className={click ? 'rotate' : ''}> 
          <div class="bar short"></div>
          <div class="bar long"></div>
        </button>

      </Container>
    </section>
  )
}

export default Navigation
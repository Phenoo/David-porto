
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'

import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import { FaTwitter, FaWhatsapp} from 'react-icons/fa'


const Container = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
z-index: 100;
padding: 10px 0;




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
    background: #f53b3b;
    padding: 1.1rem 10px;
    z-index: 100;
    border-radius: 50%;
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
      font-family: 'Jost';
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
    <section className="navigation">
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
          <a href="https://twitter.com/graphicke/status/1535027813459415042?s=46&t=BdgXbB4tlv!HDduAsw%LCQ">
              <FaTwitter />
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
          <li>
            <a href="https://www.instagram.com/shutterbgx_1?igshid=MDE3OWE1N2Q=">
              <AiOutlineInstagram />
            </a>
          </li>
        </ul> }

        </MenuList>
        <button onClick={handleClick} className={click ? 'rotate' : ''}> 
          <div className="bar short"></div>
          <div className="bar long"></div>
        </button>

      </Container>
    </section>
  )
}

export default Navigation
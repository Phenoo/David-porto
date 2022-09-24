import React from 'react'
import Img1 from '../assets/IMG-20220902-WA0043.jpg'
import ButtonComponent from './ButtonComponent'
import Cube from './Cube'

const Home = () => {
  return (
    <div className="home">
      <div className="img">
        <img src={Img1} alt="porto" />
      </div>
      <div className="text">
        <h4>hello, I'm agatha</h4>
        <h2>visual designer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores accusamus eius possimus aliquid illum assumenda reprehenderit nostrum molestias.
        </p>
        <ButtonComponent text='about me' />
        <div className="animate">
  	      <Cube />
        </div>
      </div>
    </div>
  )
}

export default Home

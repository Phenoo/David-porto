import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from './ButtonComponent'

const Contact = () => {
  return (
    <div className="collab">
      <div className="collab-container">
        <div className="first">
          <h3>
            Let's work together on your next project
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing eli agst dignissimos.
          </p>
        </div>
        <Link to='/contact'>
          <ButtonComponent text="Contact" />
        </Link>
      </div>
    </div>
  )
}

export default Contact
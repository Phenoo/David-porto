import React from 'react'
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
            I am always open for exciting projects. Don't hesitate to contact me!'
          </p>
        </div>
        <a href='mailto:davidobilo9@gmail.com'>
          <ButtonComponent text="Contact" />
        </a>
      </div>
    </div>
  )
}

export default Contact
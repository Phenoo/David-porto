import React from 'react'
import ButtonComponent from './ButtonComponent'


const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-container">
        <div className="header">
          <div className="text">
            <h3>featured projects</h3>
            <p>Lorem ipsum, dolor sit amet consectetur  adipisicing elit omnis ut.</p>
          </div>
          <ButtonComponent text="view all" />
        </div>
      </div>
    </div>
  )
}

export default Featured
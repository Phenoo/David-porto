import React from 'react'
import {AiOutlineSketch} from 'react-icons/ai'
import {GiNotebook} from 'react-icons/gi'
import {BiShapeTriangle} from 'react-icons/bi'
import {FaArrowRight} from 'react-icons/fa'

const data = [
  {
    id: 1, 
    name: 'UI Design',
    icon: <AiOutlineSketch />,
  },
  {
    id: 2, 
    name: 'Product Design',
    icon: <GiNotebook />,
  },
  {
    id: 3, 
    name: 'Branding',
    icon: <BiShapeTriangle />,
  }
]

const Skills = () => {
  return (
    <div className="skills">
      <ul>
        {
          data.map(item => {
            return (
              <li key={item.id}>
                <span>
                  {item.icon}
                </span>
                <h4>{item.name}</h4>
                <p>Lorem ipsum dolor amet consectetur adipisicing elis</p>
                <div className="btn">
                  <button>
                    know more <FaArrowRight /> 
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Skills
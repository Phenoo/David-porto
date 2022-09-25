import React from 'react'
import {AiOutlineSketch} from 'react-icons/ai'
import {GiNotebook} from 'react-icons/gi'
import {BiShapeTriangle} from 'react-icons/bi'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

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
              <motion.li key={item.id}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
              >
                <span>
                  {item.icon}
                </span>
                <h4>{item.name}</h4>
                <p>Lorem ipsum dolor amet consectetur adipisicing elis</p>
                <div className="btn">
                  <Link to='/works'>
                    <button>
                      know more <FaArrowRight /> 
                    </button>
                  </Link>
                </div>
              </motion.li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Skills
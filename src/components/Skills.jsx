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
    text: 'I create aesthetically pleasing user interface for apps and websites.'
  },
  {
    id: 2, 
    name: 'Art Direction',
    icon: <GiNotebook />,
    text: 'I realize brand appearances for analogue and digital media.'
  },
  {
    id: 3, 
    name: 'Branding',
    icon: <BiShapeTriangle />,
    text: 'With an equal measure of mind, heart and creative insight I love crafting unique business identities'
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
                <p>{item.text}</p>
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
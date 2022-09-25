import React from 'react'
import {Link} from 'react-router-dom'
import ButtonComponent from './ButtonComponent';
import {urlFor} from "../lib/client.js";
import {motion} from 'framer-motion'





const Project = ({item} ) => {
  return (
    <motion.div className='project-container'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    >
      <div className='project-image'>
        <img src={urlFor(item.image)} alt='project-item' />
      </div>
      <h4>{item.name}</h4>
      <Link to={`/project/${item.slug.current}`}>
        <ButtonComponent text='know more' />
      </Link>
    </motion.div>
  )
}

export default Project
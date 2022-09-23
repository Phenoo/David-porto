import React from 'react'
import Circle from '../components/Circle'
import {GiBee} from 'react-icons/gi'

const Loader = () => {
  return (
    <section className='loader-section'>
      <Circle />
      <h4>
        SHUTTERBGX
      </h4>
      <div className='bee'>
        <GiBee />
      </div>
    </section>
  )
}

export default Loader
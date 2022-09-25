import React from 'react'
import CountUp, {useCountUp} from 'react-countup'

const Experience = () => {
  useCountUp({
    ref: 'counter',
    end: 6,
    enableScrollSpy: true,
    scrollSpyDelay: 200
  });
  return (
    <div className="experience">
      <div className="experience-container">
        <div className="first">
          <h3>
            <span id='counter' /> 
          </h3>
          <h6>years experience</h6>
        </div>
        <div className="grid">
          <div className="item">
            <h3>
              <CountUp end={60} enableScrollSpy />+
            </h3>
            <p>clients</p>
          </div>
          <div className="item">
            <h3>
              <CountUp end={7} enableScrollSpy />+
            </h3>
            <p>certifications</p>
          </div>
          <div className="item">
            <h3>
              <CountUp end={122} enableScrollSpy />+
            </h3>
            <p>completed projects</p>
          </div>
          <div className="item">
            <h3>
              <CountUp end={10} enableScrollSpy />+
            </h3>
            <p>awards</p>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Experience
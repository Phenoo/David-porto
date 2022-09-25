import React from 'react'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Featured from '../components/Featured'
import Home from '../components/Home'
import Rotate from '../components/Rotate'
import Skills from '../components/Skills'

const Main = () => {
  return (
    <section>
      <Home />
      <Skills />
      <Experience />
      <Rotate />
      <Featured />
      <Contact />
    </section>
  )
}

export default Main
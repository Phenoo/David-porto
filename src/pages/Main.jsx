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
      <Rotate />
      <Skills />
      <Rotate />
      <Experience />
      <Featured />
      <Rotate />
      <Contact />
      <Rotate />
    </section>
  )
}

export default Main
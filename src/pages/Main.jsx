import React from 'react'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Featured from '../components/Featured'
import Home from '../components/Home'
import Skills from '../components/Skills'

const Main = () => {
  return (
    <section>
      <Home />
      <Skills />
      <Experience />
      <Featured />
      <Contact />
    </section>
  )
}

export default Main
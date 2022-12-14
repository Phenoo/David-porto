import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import Works from './pages/Works'
import Main from './pages/Main'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Loader from './pages/Loader'
import SingleProject from './pages/SingleProject'

import 'animate.css'
import Rotate from './components/Rotate'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, []);

  
  if(loading){
    return <Loader />
  }

  return (
    <>
    <Navigation />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/project/:slug' element={<SingleProject />} />
        <Route path='*' element={<Main />} />
      </Routes>
      <Rotate />
      <Footer />
    </>
  )
}

export default App
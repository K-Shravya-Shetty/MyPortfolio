/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Myprojects from './components/Myprojects/Myprojects'
import Certificate from './components/Mycertificate/Certificates';
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Myprojects/>
      <Certificate/>
      <Contact/>
    </div>
  )
}

export default App

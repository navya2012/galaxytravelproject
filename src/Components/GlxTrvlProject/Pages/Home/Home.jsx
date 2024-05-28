import React from 'react'
import Navbar from '../../Containers/Navbar/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import CallToAction from './Components/CallToAction'
import Accordian from './Components/Accordian'
import Footer from '../../Containers/Footer/Footer'
import '../CSSModules/HomeStyles.css'
import aboutImage from '../../../../Assets/hero-img1.png'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About heading='About Us' image={aboutImage}/>
        <Services/>
        <CallToAction/>
        <Accordian/>
        <Footer/>
    </>
  )
}

export default Home
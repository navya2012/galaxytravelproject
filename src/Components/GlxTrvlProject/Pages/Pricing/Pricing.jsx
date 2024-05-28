import React from 'react'
import Navbar from '../../Containers/Navbar/Navbar'
import Header from '../../Containers/Header/Header'
import Footer from '../../Containers/Footer/Footer'
import Card from './Components/Card'
import '../CSSModules/PricingStyles.css'

const Pricing = () => {
  return (
    <>
      <Navbar/>
      <Header heading="Pricing Page"/>
      <Card/>
      <Footer/>
    </>
  )
}

export default Pricing
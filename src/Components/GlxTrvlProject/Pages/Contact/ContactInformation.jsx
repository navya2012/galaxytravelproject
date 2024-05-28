import React from 'react'
import Navbar from '../../Containers/Navbar/Navbar'
import Header from '../../Containers/Header/Header'
import Footer from '../../Containers/Footer/Footer'
import Form from './Components/Form'

const ContactInformation = () => {
  return (
    <>
      <Navbar/>
      <Header heading="Contact Page"/>
      <Form/>
      <Footer/>
    </>
  )
}

export default ContactInformation;
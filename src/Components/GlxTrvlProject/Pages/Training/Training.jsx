import React from 'react'
import Navbar from '../../Containers/Navbar/Navbar'
import Header from '../../Containers/Header/Header'
import Footer from '../../Containers/Footer/Footer'
import About from '../Home/Components/About'
import aboutImage from '../../../../Assets/hero-img2.png'

const Training = () => {
    const data = 
      {
        image: aboutImage,
        paragraph : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem molestiae eaque consectetur maiores iusto officia asperiores rerum ut harum beatae!"
      }
    
  return (
    <>
      <Navbar/>
      <Header heading="Training Page"/>
      <About heading='Training' paragraph={data.paragraph} image={data.image}/>
      <Footer/>
    </>
  )
}

export default Training;
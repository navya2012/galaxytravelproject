import React from 'react'
import space from '../../../../../Assets/space.mp4'
import { Link } from 'react-router-dom'
import '../../CSSModules/HomeStyles.css'

const Hero = () => {
  return (
    <>
      <div className='hero '>
        <video src={space} autoPlay loop muted></video>

        <div className='content'>
          <h1>Travel. Galaxies.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ad!</p>

          <div className="buttons">
            <Link to='#'>Try Now!</Link>
            <Link to='#'>Launch!</Link>
          </div>
        </div>


      </div>
    </>
  )
}

export default Hero
import React from 'react'
import '../CSSModules/Styles.css'

const Header = ({heading}) => {
  return (
    <>
        <div className='header p-5' style={{backgroundImage:`url(${require("../../../../Assets/header-img.jpeg")})`, backgroundSize:'cover', backgroundPosition:'fixed'}}>
            <h1 className='fw-bolder'>{heading}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, consequuntur dolorum saepe repellat perspiciatis sit?</p>
        </div>
    </>
  )
}

export default Header
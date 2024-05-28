import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import '../CSSModules/Styles.css'

const Navbar = () => {
  const [color,setColor] = useState(false)

  const handelColour = () => {
     if(window.scrollY >= 200){
        setColor(true)
     }else{
      setColor(false)
     }
  }

  window.addEventListener("scroll", handelColour)

  return (
    <>
      <nav className={'navbar navbar-expand-lg' + (color ? ' colour' : '')}
 >
        <div className="container-fluid px-3">
          <Link to='/' className="navbar-brand" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }} >GLX TRVL</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler"><GiHamburgerMenu style={{ color: 'white' }} size={25} /></span>
          </button>

          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <div className=" navbar-nav me-auto mb-5 mb-lg-0 ">
              <Link to='/' className='nav-link' style={{ textDecoration: 'none', color: 'white' }}  >Home</Link>
              <Link to='/glxtrvl/training' className='nav-link' style={{ textDecoration: 'none', color: 'white' }} >Training</Link>
              <Link to='/glxtrvl/pricing' className='nav-link' style={{ textDecoration: 'none', color: 'white' }}>Pricing</Link>
              <Link to='/glxtrvl/contact' className='nav-link' style={{ textDecoration: 'none', color: 'white' }} >Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar;
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
        <section className=' text-center d-flex justify-content-between align-items-center gap-4 flex-wrap mt-5 p-5'>
            <div >
                <h2>GLX TRVL</h2>
            </div>

            <div className='d-flex justify-content-center align-items-start gap-1 flex-column flex-wrap '>
                <h3 className='pb-2'>Useful Links</h3>
                <div className='d-flex justify-content-start align-items-start gap-4 flex-wrap '>
                <Link to='/home'>Home</Link>
                <Link to='/training'>Trainig</Link>
                <Link to='/pricing'>Pricing</Link>
                <Link to='/contact'>Contact</Link>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center gap-3   flex-wrap '>
                <ImInstagram  size={25}/>
                <FaFacebook size={25}/>
                <BsTwitter size={25}/>
                <FaLinkedinIn size={25}/>
            </div>
        </section>
   </>
  )
}

export default Footer